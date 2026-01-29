"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';

const Projects10 = () => {
    const { siteData } = useSite();
    const { primaryColor } = siteData;

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-10">
                    <h2 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-none italic">Bizim <br /> Dünyamız.</h2>
                    <div className="text-right px-4">
                        <div className="text-[10px] font-black uppercase tracking-widest text-gray-300 mb-4">İNCELEME 2024</div>
                        <p className="text-lg font-bold max-w-xs text-gray-900 leading-tight">Sizin için ürettiğimiz en iyi çözümleri keşfedin.</p>
                    </div>
                </div>

                <div className="grid gap-20">
                    {[1, 2].map(i => (
                        <div key={i} className="group cursor-pointer">
                            <div className="aspect-[21/9] rounded-[80px] overflow-hidden mb-12 relative shadow-2xl">
                                <img src={`https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt="Full Work" />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <div className="bg-white text-black px-12 py-5 rounded-full font-black uppercase tracking-widest text-sm" style={{ color: primaryColor }}>
                                        CASE STUDY
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between items-start md:items-center border-b border-gray-100 pb-12 px-10">
                                <div>
                                    <h4 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">PANEL TASARIMI {i}</h4>
                                    <div className="flex gap-4 text-xs font-bold text-gray-400 uppercase tracking-widest">
                                        <span>DASHBOARD</span> <span>|</span> <span>UX / UI</span>
                                    </div>
                                </div>
                                <span className="text-6xl font-black opacity-5 select-none">0{i}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects10;
