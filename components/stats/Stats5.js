"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';

const Stats5 = () => {
    const { siteData } = useSite();
    const { primaryColor } = siteData;

    return (
        <section className="py-24 bg-black text-white">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-1 grid-cols-1 bg-white/5 rounded-[60px] overflow-hidden border border-white/5">
                    {[
                        { val: "24/7", label: "TEKNİK DESTEK" },
                        { val: "99.9%", label: "UPTIME GARANTİSİ" },
                        { val: "15 Dakika", label: "ORTALAMA YANIT SÜRESİ" }
                    ].map((s, i) => (
                        <div key={i} className="p-16 hover:bg-white/5 transition-colors text-center border-b md:border-b-0 md:border-r border-white/5 last:border-0">
                            <div className="text-6xl font-black tracking-tighter mb-4 italic" style={{ color: primaryColor }}>{s.val}</div>
                            <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/40">{s.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats5;
