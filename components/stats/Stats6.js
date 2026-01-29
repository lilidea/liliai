"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';

const Stats6 = () => {
    const { siteData } = useSite();
    const { primaryColor } = siteData;

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6 max-w-4xl">
                <h2 className="text-4xl font-black uppercase tracking-tighter mb-16 underline decoration-4" style={{ textDecorationColor: primaryColor }}>Başarı Raporumuz</h2>
                <div className="space-y-12">
                    {[
                        { label: "Sektörel Liderlik", val: 95 },
                        { label: "Teknolojik Altyapı", val: 88 },
                        { label: "Ekip Uzmanlığı", val: 100 }
                    ].map((s, i) => (
                        <div key={i}>
                            <div className="flex justify-between items-end mb-4">
                                <span className="text-xs font-black uppercase tracking-widest">{s.label}</span>
                                <span className="text-xl font-black">%{s.val}</span>
                            </div>
                            <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                                <div className="h-full rounded-full transition-all duration-1000" style={{ width: `${s.val}%`, backgroundColor: primaryColor }}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats6;
