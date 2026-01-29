"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';

const Footer7 = () => {
    const { siteData } = useSite();
    const { companyName, primaryColor } = siteData;

    return (
        <footer className="bg-neutral-950 py-24 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <div className="inline-block px-6 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl mb-12">
                    <span className="text-white text-sm font-bold tracking-widest uppercase">Bize Katılın</span>
                </div>

                <h2 className="text-5xl md:text-7xl font-black text-white mb-16 tracking-tighter">
                    Hayalinizdeki projeyi <br /> <span style={{ color: primaryColor }}>gerçeğe dönüştürelim.</span>
                </h2>

                <div className="grid md:grid-cols-3 gap-12 items-center border-y border-white/5 py-12 mb-12">
                    <div className="text-left">
                        <div className="text-neutral-500 uppercase text-xs font-black tracking-widest mb-2">E-posta</div>
                        <div className="text-white font-bold">hello@lilidea.com</div>
                    </div>
                    <div className="flex justify-center">
                        <div className="text-3xl font-black text-white italic tracking-tighter">
                            {companyName || "LILIAI"}
                        </div>
                    </div>
                    <div className="text-right text-neutral-500 text-sm">
                        İstanbul, Türkiye <br /> Modern Tasarım Atölyesi
                    </div>
                </div>

                <div className="flex flex-wrap justify-center gap-10 text-sm font-bold uppercase tracking-widest text-neutral-600">
                    <a href="#" className="hover:text-white transition">Instagram</a>
                    <a href="#" className="hover:text-white transition">Twitter</a>
                    <a href="#" className="hover:text-white transition">LinkedIn</a>
                    <a href="#" className="hover:text-white transition">Dribbble</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer7;
