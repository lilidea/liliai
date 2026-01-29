"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';

const Stats7 = () => {
    const { siteData } = useSite();
    const { primaryColor } = siteData;

    return (
        <section className="py-24 bg-slate-100 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-8 relative">
                    <div className="absolute top-0 left-0 w-64 h-64 blur-[100px] rounded-full opacity-30" style={{ backgroundColor: primaryColor }}></div>
                    {[
                        { label: "YILLIK BÜYÜME", val: "+%45" },
                        { label: "İŞ ORTAKLIĞI", val: "150+" },
                        { label: "YENİ YATIRIM", val: "$2.5M" }
                    ].map((s, i) => (
                        <div key={i} className="bg-white/40 backdrop-blur-xl border border-white/60 p-12 rounded-[60px] shadow-sm hover:translate-y-[-10px] transition-transform duration-500">
                            <div className="text-5xl font-black tracking-tighter mb-4" style={{ color: primaryColor }}>{s.val}</div>
                            <div className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">{s.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats7;
