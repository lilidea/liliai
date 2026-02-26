"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';

const Footer10 = () => {
    const { siteData } = useSite();
    const { companyName, primaryColor } = siteData;

    return (
        <footer className="py-20 bg-white text-center">
            <div className="container mx-auto px-6">
                <div className="w-20 h-px bg-black mx-auto mb-12"></div>
                <div className="max-w-2xl mx-auto mb-16 px-4">
                    <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-8 uppercase tracking-tighter">
                        En iyi şablonlarla <br /> <span style={{ color: primaryColor }}>markanızı parlatın.</span>
                    </h3>
                    <p className="text-gray-500 font-medium italic">
                        "Tasarım sadece nasıl göründüğü değil, nasıl çalıştığıdır."
                    </p>
                </div>

                <div className="flex justify-center gap-12 mb-16 text-xs font-black uppercase tracking-widest text-gray-400">
                    <a href="#" className="hover:text-black transition">Stüdyo</a>
                    <a href="#" className="hover:text-black transition">İşler</a>
                    <a href="#" className="hover:text-black transition">Hakkında</a>
                    <a href="#" className="hover:text-black transition">İletişim</a>
                </div>

                <div className="text-[12vw] font-black text-gray-900 leading-none select-none tracking-tighter opacity-[0.03] uppercase pointer-events-none mb-10">
                    {companyName || "LILIAI"}
                </div>

                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em]">
                    © {new Date().getFullYear()} lilidea.com. Tüm hakları saklıdır.
                </div>
            </div>
        </footer>
    );
};

export default Footer10;
