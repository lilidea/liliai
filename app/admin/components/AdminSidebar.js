"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
    LayoutDashboard,
    Component,
    LayoutTemplate,
    Code2,
    Type,
    Sticker,
    Image,
    Settings,
    ShieldAlert,
    LogOut,
    ArrowLeft,
    Inbox,
    Plug
} from 'lucide-react';

export default function AdminSidebar() {
    return (
        <aside className="w-72 bg-white border-r border-gray-100 flex flex-col h-full shadow-[4px_0_24px_rgba(0,0,0,0.02)] z-20">
            {/* Header */}
            <div className="py-6 px-8 border-b border-gray-50 flex items-center justify-center shrink-0">
                <Link href="/" className="group">
                    <img src="/lilidea.svg" alt="Liliai" className="h-12 w-auto group-hover:scale-110 transition-transform" />
                </Link>
            </div>

            {/* Navigation */}
            <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-8 custom-scrollbar">

                {/* Section 1 */}
                <div className="space-y-1.5">
                    <SectionLabel>Genel Bakış</SectionLabel>
                    <NavLink href="/admin" icon={<LayoutDashboard />} label="Kontrol Paneli" />
                    <NavLink href="/admin/proposals" icon={<Inbox />} label="Gelen Teklifler" badge="Yeni" />
                </div>

                {/* Section 2 */}
                <div className="space-y-1.5">
                    <SectionLabel>Tasarım Araçları</SectionLabel>
                    <NavLink href="/admin/components" icon={<Component />} label="Bileşenler" />
                    <NavLink href="/admin/templates" icon={<LayoutTemplate />} label="Şablonlar" />
                </div>

                {/* Section 3 */}
                <div className="space-y-1.5">
                    <SectionLabel>Medya & Varlıklar</SectionLabel>
                    <NavLink href="/admin/resources/fonts" icon={<Type />} label="Fontlar" />
                    <NavLink href="/admin/resources/icons" icon={<Sticker />} label="İkon Setleri" />
                    <NavLink href="/admin/resources/images" icon={<Image />} label="Galeri" />
                </div>

                <div className="space-y-1.5">
                    <SectionLabel>Eklentiler</SectionLabel>
                    <NavLink href="/admin/integrations" icon={<Plug />} label="Entegrasyonlar" badge="50+" />
                </div>

                {/* Section 4 */}
                <div className="space-y-1.5">
                    <SectionLabel>Geliştirici & Sistem</SectionLabel>
                    <NavLink href="/admin/api-test" icon={<Code2 />} label="API Test" />
                    <NavLink href="/admin/settings" icon={<Settings />} label="Ayarlar" />
                    <NavLink href="/admin/security" icon={<ShieldAlert />} label="Güvenlik" />
                </div>
            </nav>

            {/* Footer */}
            <div className="p-4 border-t border-gray-50 bg-gray-50/30 space-y-2 shrink-0">
                <LogoutButton />

                <a
                    href="/"
                    className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-gray-500 hover:text-gray-900 hover:bg-white rounded-xl transition-all group"
                >
                    <div className="w-8 h-8 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-gray-400 group-hover:text-gray-700 group-hover:border-gray-300 transition-colors shadow-sm">
                        <ArrowLeft size={16} />
                    </div>
                    <span>Siteye Dön</span>
                </a>
            </div>

            <style jsx>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: transparent;
                    border-radius: 4px;
                }
                .custom-scrollbar:hover::-webkit-scrollbar-thumb {
                    background: #f1f1f1;
                }
            `}</style>
        </aside>
    );
}

function SectionLabel({ children }) {
    return (
        <p className="px-3 text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-2 select-none">
            {children}
        </p>
    );
}

function NavLink({ href, icon, label, badge }) {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link
            href={href}
            className={`
                group relative flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200
                ${isActive
                    ? 'bg-[#E69419]/5 text-[#E69419]'
                    : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                }
            `}
        >
            {/* Active Indicator Line */}
            {isActive && (
                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-[#E69419] rounded-r-full" />
            )}

            <div className={`transition-colors ${isActive ? 'text-[#E69419]' : 'text-gray-400 group-hover:text-gray-600'}`}>
                {React.cloneElement(icon, {
                    size: 20,
                    strokeWidth: isActive ? 2.5 : 2
                })}
            </div>

            <span>{label}</span>

            {badge && (
                <span className="ml-auto px-1.5 py-0.5 rounded text-[10px] font-bold bg-green-100 text-green-700 uppercase tracking-wider">
                    {badge}
                </span>
            )}
        </Link>
    );
}

function LogoutButton() {
    const handleLogout = async () => {
        if (!confirm('Güvenli çıkış yapmak istiyor musunuz?')) return;
        try {
            await fetch('/api/admin/auth/logout', { method: 'POST' });
        } catch (e) { }
        window.location.href = '/auth/login';
    };

    return (
        <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-red-600/80 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all group"
        >
            <div className="w-8 h-8 rounded-lg bg-red-50 border border-red-100 flex items-center justify-center text-red-500 group-hover:scale-110 transition-transform">
                <LogOut size={16} />
            </div>
            <span>Oturumu Kapat</span>
        </button>
    )
}
