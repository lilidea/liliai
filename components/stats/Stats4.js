"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';

const Stats4 = () => {
    const { siteData } = useSite();
    const { primaryColor } = siteData;

    return (
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
                    {[
                        { label: "Büyüme", value: 85 },
                        { label: "Verimlilik", value: 92 },
                        { label: "Müşteri Memnuniyeti", value: 98 },
                        { label: "Pazar Payı", value: 64 }
                    ].map((stat, i) => (
                        <div key={i} className="flex flex-col items-center">
                            <div className="relative w-32 h-32 md:w-40 md:h-40 mb-8">
                                <svg className="w-full h-full transform -rotate-90">
                                    <circle cx="50%" cy="50%" r="45%" className="stroke-slate-200 fill-none" strokeWidth="6" />
                                    <circle cx="50%" cy="50%" r="45%" className="fill-none transition-all duration-1000" strokeWidth="6" strokeDasharray="283" strokeDashoffset={283 - (283 * stat.value) / 100} style={{ stroke: primaryColor }} />
                                </svg>
                                <div className="absolute inset-0 flex items-center justify-center text-2xl md:text-3xl font-black">%{stat.value}</div>
                            </div>
                            <div className="text-[10px] font-black uppercase tracking-widest text-center text-slate-400">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats4;
