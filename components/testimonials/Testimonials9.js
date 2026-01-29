"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';

const Testimonials9 = () => {
    const { siteData } = useSite();
    const { primaryColor } = siteData;

    return (
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-6 text-center">
                <div className="max-w-3xl mx-auto space-y-20">
                    {[1, 2].map(i => (
                        <div key={i} className="animate-fade-in">
                            <div className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-300 mb-10">— 0{i} —</div>
                            <p className="text-3xl md:text-4xl font-black uppercase tracking-tighter leading-tight mb-12">
                                "Sektördeki en iyi <span style={{ color: primaryColor }}>deneyimi</span> burada yaşadık."
                            </p>
                            <div className="h-px w-20 bg-slate-200 mx-auto"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials9;
