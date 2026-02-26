"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';
import { ArrowUpRight } from 'lucide-react';

const Header10 = () => {
    const { siteData } = useSite();
    const { companyName, primaryColor } = siteData;

    return (
        <header className="sticky top-0 z-[50] w-full bg-white border-b-2 border-black">
            <div className="container mx-auto px-6 h-32 flex items-center justify-between">
                <div className="text-5xl font-black italic tracking-tighter select-none">
                    {companyName || "BOLD."}
                </div>

                <nav className="hidden md:flex gap-16">
                    {['Hizmetler', 'Projeler', 'Kariyer'].map(item => (
                        <a key={item} href="#" className="relative group overflow-hidden">
                            <span className="text-xl font-black uppercase tracking-tighter block group-hover:-translate-y-full transition-transform duration-500">
                                {item}
                            </span>
                            <span className="absolute top-full left-0 text-xl font-black uppercase tracking-tighter block group-hover:-translate-y-full transition-transform duration-500" style={{ color: primaryColor || '#E69419' }}>
                                {item}
                            </span>
                        </a>
                    ))}
                </nav>

                <div className="flex items-center gap-10">
                    <a href="#" className="hidden lg:flex items-center gap-2 font-black uppercase text-sm tracking-widest hover:opacity-50 transition">
                        BİZE YAZIN <ArrowUpRight size={20} />
                    </a>

                    <button className="w-14 h-14 bg-black text-white flex items-center justify-center hover:bg-neutral-800 transition">
                        <div className="flex flex-col gap-1.5 items-end">
                            <div className="w-8 h-1 bg-white"></div>
                            <div className="w-5 h-1 bg-white"></div>
                        </div>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header10;
