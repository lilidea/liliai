"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';

const Menu7 = () => {
    const { siteData } = useSite();
    const { primaryColor } = siteData;

    return (
        <section className="py-24 bg-zinc-900 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="border-[15px] border-zinc-800 rounded-[50px] p-12 md:p-24 relative">
                    <div className="text-center mb-16 px-4">
                        <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter mb-4 italic hand-font">Bizim <span style={{ color: primaryColor }}>Kantin.</span></h2>
                        <div className="h-2 w-32 bg-white mx-auto opacity-20"></div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-x-24 gap-y-12">
                        {[1, 2, 3, 4, 5, 6].map(i => (
                            <div key={i} className="flex justify-between items-baseline group">
                                <span className="text-2xl font-black text-white/50 group-hover:text-white transition-colors uppercase tracking-tight">MENU İTEM 0{i}</span>
                                <span className="flex-1 border-b border-white/5 mx-4"></span>
                                <span className="text-3xl font-black italic text-white" style={{ color: primaryColor }}>{i * 20 + 45}₺</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
                @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap');
                .hand-font { font-family: 'Caveat', cursive; }
            `}</style>
        </section>
    );
};

export default Menu7;
