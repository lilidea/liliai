"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';

const Cta7 = () => {
    const { siteData } = useSite();
    const { primaryColor } = siteData;

    return (
        <section className="py-24 bg-slate-100 relative overflow-hidden">
            <div className="container mx-auto px-6 text-center">
                <div className="bg-white p-12 md:p-24 rounded-[100px] shadow-sm relative z-10 group overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-full translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-all duration-1000"></div>
                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-10 italic">BİRLİKTE <span style={{ color: primaryColor }}>ÇALIŞALIM MI?</span></h2>
                        <p className="text-lg text-slate-400 font-bold uppercase tracking-[0.3em] mb-12">YENİ BİR BAŞARI HİKAYESİ YAZALIM.</p>
                        <button className="px-16 py-6 border-2 border-black rounded-full font-black uppercase tracking-widest hover:bg-black hover:text-white transition shadow-xl">İLETİŞİM KUR</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cta7;
