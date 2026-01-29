"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';

const Footer5 = () => {
    const { siteData } = useSite();
    const { companyName, primaryColor } = siteData;

    return (
        <footer className="bg-white py-24 border-t border-gray-100 font-sans">
            <div className="container mx-auto px-6 text-center">
                <div className="mb-12 flex justify-center">
                    <div
                        className="w-16 h-16 rounded-3xl rotate-45 flex items-center justify-center text-white font-black text-3xl shadow-2xl"
                        style={{ backgroundColor: primaryColor || '#E69419' }}
                    >
                        <span className="-rotate-45">{companyName ? companyName.substring(0, 1) : "L"}</span>
                    </div>
                </div>

                <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 tracking-tighter">
                    {companyName || "lil.ai"}
                </h2>

                <nav className="flex flex-wrap justify-center gap-x-12 gap-y-4 mb-12">
                    {['Hakkımızda', 'Hizmetler', 'Projeler', 'Blog', 'İletişim', 'SSS', 'Kariyer'].map(item => (
                        <a key={item} href="#" className="text-gray-500 font-bold hover:text-gray-900 transition-colors uppercase tracking-widest text-xs">
                            {item}
                        </a>
                    ))}
                </nav>

                <div className="w-24 h-1 mx-auto bg-gray-100 rounded-full mb-12"></div>

                <p className="text-gray-400 max-w-xl mx-auto mb-12 leading-relaxed italic">
                    "Tasarım sadece nasıl göründüğü veya nasıl hissettirdiği değildir. Tasarım, nasıl çalıştığıdır."
                </p>

                <div className="flex justify-center gap-6 mb-12">
                    <div className="w-2 h-2 rounded-full bg-gray-200"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-200"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-200"></div>
                </div>

                <p className="text-[10px] text-gray-300 uppercase tracking-[0.3em] font-black">
                    © {new Date().getFullYear()} {companyName} — PREMIUM WEB SOLUTIONS
                </p>
            </div>
        </footer>
    );
};

export default Footer5;
