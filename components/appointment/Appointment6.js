"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';

const Appointment6 = () => {
    const { siteData } = useSite();
    const { primaryColor } = siteData;

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6 text-center">
                <div className="inline-block px-8 py-2 bg-slate-50 rounded-full text-[10px] font-black uppercase tracking-[0.4em] mb-12">REZERVE EDİN</div>
                <h2 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-none italic mb-20 italic">Don't <br /> <span style={{ color: primaryColor }}>WAIT.</span></h2>
                <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
                    <button className="px-16 py-8 bg-black text-white rounded-[40px] font-black uppercase tracking-widest text-xl hover:bg-zinc-800 transition shadow-2xl">BOOK NOW</button>
                    <div className="text-left">
                        <div className="text-sm font-black italic">MÜŞTERİ HİZMETLERİ:</div>
                        <div className="text-2xl font-black" style={{ color: primaryColor }}>+90 555 123 45 67</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Appointment6;
