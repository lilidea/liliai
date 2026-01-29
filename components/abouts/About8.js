"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';
import { Quote } from 'lucide-react';

const About8 = () => {
    const { siteData } = useSite();
    const { primaryColor, companyName } = siteData;

    return (
        <section className="py-32 bg-slate-900 text-center relative overflow-hidden">
            {/* Background Grain/Noise or subtle pattern mock */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <Quote size={60} className="mx-auto mb-10 opacity-20" style={{ color: primaryColor }} />
                    <h2 className="text-4xl md:text-6xl font-serif italic text-white leading-tight mb-12">
                        "Gerçek inovasyon, sadece yeni bir şey yapmak değil, eskiyi tamamen anlamlı kılmaktır."
                    </h2>
                    <div className="w-24 h-1 bg-white mx-auto mb-8 opacity-20"></div>
                    <div className="text-sm font-black uppercase tracking-[0.5em] text-white/50">
                        {companyName || "LILIAI"} FELSEFESİ
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About8;
