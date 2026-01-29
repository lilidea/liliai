"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';

const Menu10 = () => {
    const { siteData } = useSite();
    const { primaryColor } = siteData;

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {[1, 2, 3, 4, 5, 6].map(i => (
                        <div key={i} className="p-10 rounded-[60px] border border-slate-100 bg-slate-50/30 hover:bg-white hover:shadow-2xl transition duration-500">
                            <div className="flex justify-between items-start mb-8">
                                <h4 className="text-xl font-black uppercase max-w-[150px] leading-tight transition-all group-hover:tracking-widest">Premium Choice {i}</h4>
                                <span className="text-4xl font-black italic opacity-5 select-none">0{i}</span>
                            </div>
                            <div className="flex gap-2 mb-8">
                                <span className="px-3 py-1 bg-white rounded-full text-[8px] font-black uppercase tracking-widest border border-slate-100">VEGAN</span>
                                <span className="px-3 py-1 bg-white rounded-full text-[8px] font-black uppercase tracking-widest border border-slate-100">BIO</span>
                            </div>
                            <div className="text-3xl font-black mb-8" style={{ color: primaryColor }}>₺125</div>
                            <button className="w-full py-4 bg-black text-white rounded-3xl font-black uppercase text-[10px] tracking-widest hover:scale-105 transition shadow-lg" style={{ backgroundColor: primaryColor }}>SEPETE EKLE</button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Menu10;
