import prisma from './prisma';
import { headers, cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function checkSecurity() {
    const headersList = await headers();
    const cookieStore = await cookies();
    
    // 1. Get Real IP
    const forwarded = headersList.get('x-forwarded-for');
    const ip = forwarded ? forwarded.split(',')[0] : '127.0.0.1';
    
    // 2. Info for Logging & Logic
    const userAgent = headersList.get('user-agent') || 'Unknown';
    // Middleware passes this header:
    const path = headersList.get('x-current-path') || '/'; 

    console.log(`[Security] ${ip} visited ${path}`);

    // Skip static assets (Images, Fonts, etc.) from DB calls to improve performance
    if (path.match(/\.(png|jpg|jpeg|gif|svg|ico|css|js|woff|woff2)$/)) {
        return; 
    }

    // 3. Get Settings & Block Status (Parallel Fetch)
    const [settings, ipRecord] = await Promise.all([
        prisma.siteSettings.findFirst(),
        prisma.ipTracking.findUnique({ where: { ip } })
    ]);

    // 4. BIG BROTHER LOGGING
    try {
        await prisma.ipTracking.upsert({
            where: { ip },
            update: { 
                count: { increment: 1 },
                lastSeen: new Date()
            },
            create: { ip }
        });

        // Only log if not an internal API call to avoid noise? 
        // User wants "ALL info", so we log everything essentially.
        await prisma.accessLog.create({
            data: {
                ip,
                action: 'VISIT',
                status: ipRecord?.isBlocked ? 'BLOCKED' : 'SUCCESS',
                userAgent: userAgent,
                path: path,
                method: 'GET', // Layout is always GET
                details: settings?.maintenanceMode ? 'Maintenance: Active' : 'Maintenance: Inactive'
            }
        });
    } catch (e) {
        // Silently fail logging to not break the site
        console.error("Logging failed:", e);
    }

    // 5. SECURITY CHECKS

    // A. IP BAN CHECK
    if (ipRecord?.isBlocked) {
        // If already on the blocked page, stay there.
        if (path === '/blocked') return;
        
        // Redirect to /blocked
        redirect('/blocked');
    }

    // B. MAINTENANCE MODE CHECK
    const isMaintenance = settings?.maintenanceMode ?? false;
    
    if (isMaintenance) {
        // Bypasses:
        // 1. Is Admin? (Check Session Cookie)
        const isAdmin = cookieStore.has('admin_session');
        
        // 2. Is Login Page? (Allow them to login to bypass)
        const isAuthPage = path.startsWith('/auth') || path.startsWith('/api/auth');
        
        // 3. Is Internal API? (Maybe needed for login to work)
        const isApi = path.startsWith('/api');

        // 4. Is Admin Panel? (If they have session, they can go. If not, middleware redirects to login anyway)
        const isAdminPanel = path.startsWith('/admin');

        // If NOT blocked, NOT admin, NOT trying to login, and NOT on maintenance page -> BLOCK
        if (!isAdmin && !isAuthPage && !isApi && !isAdminPanel) {
            if (path !== '/maintenance') {
                 redirect('/maintenance');
            }
        }
    } else {
        // If maintenance is OFF, but user is stuck on /maintenance page, kick them back to /
        if (path === '/maintenance') {
            redirect('/');
        }
    }
}
