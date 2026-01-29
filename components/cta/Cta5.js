"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';

const Cta5 = () => {
    const { siteData } = useSite();
    const { primaryColor } = siteData;

    return (
        <section className="py-24 bg-black text-white overflow-hidden">
            <div className="container mx-auto px-6 text-center relative">
                <div className="absolute top-0 left-0 text-[30vw] font-black text-white opacity-[0.02] select-none pointer-events-none -translate-x-1/2 -translate-y-1/2">GO</div>

                <div className="relative z-10 max-w-4xl mx-auto">
                    <h2 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-[0.8] mb-12 italic">FİKRİNİZİ <br /> HAYATA <br /> <span style={{ color: primaryColor }}>GEÇİRİN.</span></h2>
                    <p className="text-xl text-white/40 font-bold uppercase tracking-widest mb-16">PROFESYONEL ÇÖZÜMLER İÇİN DOĞRU ADRESTESİNİZ.</p>
                    <button className="group relative px-16 py-8 bg-white text-black rounded-full font-black uppercase tracking-[0.4em] transition-all hover:pr-24 overflow-hidden">
                        <span className="relative z-10">PROJEYİ BAŞLAT</span>
                        <div className="absolute right-0 top-0 h-full w-0 group-hover:w-12 flex items-center justify-center transition-all bg-black text-white">—</div>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Cta5;
