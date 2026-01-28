import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// GET: Fetch settings (create default if not exists)
export async function GET() {
    try {
        let settings = await prisma.siteSettings.findFirst();

        if (!settings) {
            settings = await prisma.siteSettings.create({
                data: {
                    title: 'Sitem',
                    description: 'Yeni bir web sitesi',
                    maintenanceMode: false
                }
            });
        }

        return NextResponse.json(settings);
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

// POST: Update settings
export async function POST(req) {
    try {
        const data = await req.json();
        
        // Ensure we strictly update the first record
        const firstSetting = await prisma.siteSettings.findFirst();
        const id = firstSetting ? firstSetting.id : undefined;

        const settings = await prisma.siteSettings.upsert({
            where: { id: id || 1 }, // Fallback to 1 if empty (should fetch from findFirst though)
            update: {
                title: data.title,
                description: data.description,
                logo: data.logo,
                email: data.email,
                phone: data.phone,
                address: data.address,
                facebook: data.facebook,
                twitter: data.twitter,
                instagram: data.instagram,
                primaryColor: data.primaryColor,
                secondaryColor: data.secondaryColor,
                aiStyle: data.aiStyle,
                maintenanceMode: data.maintenanceMode
            },
            create: {
                title: data.title || 'Sitem',
                description: data.description,
                primaryColor: data.primaryColor || '#E69419',
                secondaryColor: data.secondaryColor || '#0073FF',
                maintenanceMode: false
            }
        });

        return NextResponse.json(settings);
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
