"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';

const Stats10 = () => {
    const { siteData } = useSite();
    const { primaryColor } = siteData;

    return (
        <section className="py-32 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-32">
                    <div className="text-[20vw] font-black text-slate-50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none tracking-tighter">METRICS</div>
                    <h2 className="text-7xl md:text-9xl font-black uppercase tracking-tighter leading-none relative z-10">THE <br /> <span style={{ color: primaryColor }}>NUMBERS.</span></h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-20 relative z-10">
                    {[
                        { v: "10M", l: "IMPRESSIONS" },
                        { v: "250", l: "ENTERPRISE CLIENTS" },
                        { v: "12", l: "MONTHLY REVENUE" },
                        { v: "5", l: "YEARS EXP" }
                    ].map((s, i) => (
                        <div key={i} className="text-center">
                            <div className="text-6xl md:text-8xl font-black tracking-tighter mb-4 italic group-hover:scale-110 transition-transform cursor-default">{s.v}</div>
                            <div className="text-xs font-black uppercase tracking-[0.5em] text-slate-300">{s.l}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats10;
