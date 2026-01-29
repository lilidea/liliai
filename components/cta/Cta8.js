"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';

const Cta8 = () => {
    const { siteData } = useSite();
    const { primaryColor } = siteData;

    return (
        <section className="py-32 bg-white">
            <div className="container mx-auto px-6 max-w-2xl text-center">
                <h2 className="text-3xl font-black uppercase tracking-[0.3em] mb-12">SINIRLARI ZORLAMAYA <br /> HAZIR MISIN?</h2>
                <div className="flex flex-col md:flex-row gap-6 justify-center">
                    <button className="px-12 py-5 rounded-full font-black uppercase tracking-widest text-white shadow-lg" style={{ backgroundColor: primaryColor }}>KAYIT OL</button>
                    <button className="px-12 py-5 rounded-full font-black uppercase tracking-widest text-slate-400 hover:text-black transition">DAHA FAZLA BİLGİ</button>
                </div>
            </div>
        </section>
    );
};

export default Cta8;
