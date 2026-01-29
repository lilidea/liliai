"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';

const Stats8 = () => {
    const { siteData } = useSite();
    const { primaryColor } = siteData;

    return (
        <section className="py-12 bg-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-wrap justify-center gap-12 md:gap-24 border-y border-slate-100 py-12">
                    {[
                        { l: "PROJECTS", v: "150" },
                        { l: "COFFEE", v: "2.4K" },
                        { l: "CODE", v: "1M+" },
                        { l: "HAPPY", v: "100%" }
                    ].map((s, i) => (
                        <div key={i} className="flex flex-col items-center">
                            <span className="text-4xl font-black mb-1">{s.v}</span>
                            <span className="text-[8px] font-black tracking-[0.5em] text-slate-300" style={{ color: primaryColor }}>{s.l}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats8;
