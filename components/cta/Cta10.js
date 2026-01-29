"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';

const Cta10 = () => {
    const { siteData } = useSite();
    const { primaryColor } = siteData;

    return (
        <section className="py-40 bg-white overflow-hidden">
            <div className="container mx-auto px-6 text-center">
                <div className="relative inline-block mb-12">
                    <div className="absolute inset-0 blur-[100px] opacity-20 scale-150" style={{ backgroundColor: primaryColor }}></div>
                    <h2 className="text-8xl md:text-[15vw] font-black uppercase tracking-tighter leading-none relative z-10">THE <br /> NEXT <br /> <span style={{ color: primaryColor }}>LEVEL.</span></h2>
                </div>
                <div className="mt-12">
                    <button className="px-20 py-8 bg-black text-white rounded-[40px] font-black uppercase tracking-[0.5em] hover:bg-zinc-800 transition shadow-2xl">
                        START NOW
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Cta10;
