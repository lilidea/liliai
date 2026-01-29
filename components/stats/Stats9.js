"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';

const Stats9 = () => {
    const { siteData } = useSite();
    const { primaryColor } = siteData;

    return (
        <section className="py-24 bg-slate-900 text-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-20 items-center">
                    <div className="lg:w-1/2">
                        <div className="w-12 h-1 mb-8" style={{ backgroundColor: primaryColor }}></div>
                        <h2 className="text-5xl font-black uppercase tracking-tighter mb-8 leading-none">Verilerle <br /> Başarımız.</h2>
                        <p className="text-slate-400 font-medium leading-relaxed max-w-md">Şeffaf bir yaklaşımla, tüm performans göstergelerimizi sizlerle paylaşıyoruz.</p>
                    </div>

                    <div className="lg:w-1/2 grid grid-cols-2 gap-8 w-full">
                        {[
                            { l: "Users", v: "50K" },
                            { l: "Orders", v: "120K" },
                            { l: "Reviews", v: "4.8" },
                            { l: "Regions", v: "25" }
                        ].map((s, i) => (
                            <div key={i} className="bg-white/5 p-12 rounded-[50px] border border-white/5 hover:border-white/20 transition-all">
                                <div className="text-5xl font-black mb-2 italic" style={{ color: primaryColor }}>{s.v}</div>
                                <div className="text-xs font-bold text-white/20 uppercase tracking-widest">{s.l}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stats9;
