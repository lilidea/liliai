"use client";
import React from 'react';
import { LayoutDashboard, Component, Database, Settings, ArrowLeft, LogOut, Code2, ShieldAlert, Type, Sticker, Image, LayoutTemplate } from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { SiteProvider } from '@/app/context/SiteContext';

export default function AdminLayout({ children }) {
  return (
    <SiteProvider> 
        <div className="flex h-screen bg-gray-50 text-gray-900 font-sans overflow-hidden">
        
        {/* Admin Sidebar */}
        <aside className="w-72 border-r border-gray-200 flex flex-col bg-white">
            {/* Header */}
            <div className="p-8 border-b border-gray-100 flex justify-center">
                <Link href="/" className="mb-10 block px-2">
                   <img src="/lilidea.svg" alt="Liliai" className="h-12 w-auto" />
                </Link>
            </div>

            {/* Navigation */}
            <nav className="flex-1 p-4 overflow-y-auto space-y-8">
                
                {/* Group 1 */}
                <div className="space-y-1">
                    <p className="px-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Genel Bakış</p>
                    <NavLink href="/admin" icon={<LayoutDashboard size={18} />} label="Pano" />
                </div>

                {/* Group 2 */}
                <div className="space-y-1">
                    <p className="px-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Geliştirme Araçları</p>
                    <NavLink href="/admin/components" icon={<Component size={18} />} label="Bileşen Kütüphanesi" />
                    <NavLink href="/admin/templates" icon={<LayoutTemplate size={18} />} label="Şablon Yönetimi" />
                    <NavLink href="/admin/api-test" icon={<Code2 size={18} />} label="API Laboratuvarı" />
                </div>

                {/* Group 3 */}
                <div className="space-y-1">
                    <p className="px-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Kaynak Yönetimi</p>
                    <NavLink href="/admin/resources/fonts" icon={<Type size={18} />} label="Font Yöneticisi" />
                    <NavLink href="/admin/resources/icons" icon={<Sticker size={18} />} label="İkon Setleri" />
                    <NavLink href="/admin/resources/images" icon={<Image size={18} />} label="Görsel Galeri" />
                </div>

                {/* Group 4 */}
                <div className="space-y-1">
                    <p className="px-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Sistem</p>
                    <NavLink href="/admin/settings" icon={<Settings size={18} />} label="Ayarlar & Yapılandırma" />
                </div>

                <div className="space-y-1">
                    <p className="px-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Güvenlik</p>
                    <NavLink href="/admin/security" icon={<ShieldAlert size={18} />} label="Güvenlik Merkezi" />
                </div>
            </nav>

            {/* Footer */}
            <div className="p-4 border-t border-gray-100 bg-gray-50/50 space-y-2">
                <LogoutButton />
                
                <a 
                    href="/" 
                    className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-600 hover:text-[#0073FF] hover:bg-blue-50 rounded-lg transition-all group"
                >
                    <div className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center group-hover:border-blue-200 transition-colors">
                         <ArrowLeft size={14} />
                    </div>
                    <div>
                        <span className="block text-xs font-bold">Siteye Dön</span>
                    </div>
                </a>
            </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-auto bg-gray-50/50 relative">
             {/* Decor */}
            <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-white to-transparent pointer-events-none" />
            <div className="relative z-10">
                {children}
            </div>
        </main>

        </div>
    </SiteProvider>
  );
}

function NavLink({ href, icon, label }) {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link 
            href={href} 
            className={`
                flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-lg transition-all
                ${isActive 
                    ? 'bg-[#E69419]/10 text-[#E69419]' 
                    : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                }
            `}
        >
            {React.cloneElement(icon, { 
                size: 18, 
                strokeWidth: isActive ? 2.5 : 2 
            })}
            {label}
            {isActive && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-[#E69419]" />}
        </Link>
    );
}

function LogoutButton() {
    const router = useRouter(); // Warning: useRouter needs to be imported if not available, but likely is in scope or we add import
    // Note: useRouter is typically imported from 'next/navigation' in parent scope.
    
    // Safety check: Ensure useRouter is imported at the top of file
    // If not, we rely on parent scope or add user instruction.
    // Assuming useRouter is imported from 'next/navigation' based on file context.
    
    const handleLogout = async () => {
        if(!confirm('Güvenli çıkış yapmak istiyor musunuz?')) return;
        await fetch('/api/admin/auth/logout', { method: 'POST' });
        window.location.href = '/auth/login';
    };

    return (
        <button 
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg transition-all group"
        >
            <div className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center group-hover:border-red-200 transition-colors">
                    <LogOut size={14} />
            </div>
            <span className="text-xs font-bold">Güvenli Çıkış</span>
        </button>
    )
}
