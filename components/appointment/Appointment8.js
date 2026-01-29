"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';

const Appointment8 = () => {
    const { siteData } = useSite();
    const { primaryColor } = siteData;

    return (
        <section className="py-24 bg-white italic">
            <div className="container mx-auto px-6 max-w-xl text-center">
                <h2 className="text-3xl font-black uppercase tracking-widest mb-16">Bize Zaman <span style={{ color: primaryColor }}>AYIRIN.</span></h2>
                <div className="space-y-12">
                    <div className="relative group">
                        <input type="text" className="w-full bg-transparent border-b-2 border-slate-100 py-4 focus:border-black outline-none font-bold uppercase tracking-widest text-xs transition-all" placeholder="AD SOYAD" />
                    </div>
                    <div className="relative group">
                        <input type="tel" className="w-full bg-transparent border-b-2 border-slate-100 py-4 focus:border-black outline-none font-bold uppercase tracking-widest text-xs transition-all" placeholder="TELEFON NUMARASI" />
                    </div>
                    <button className="w-full py-6 rounded-full font-black uppercase tracking-widest text-xs text-white shadow-2xl" style={{ backgroundColor: primaryColor }}>GÖNDER</button>
                </div>
            </div>
        </section>
    );
};

export default Appointment8;
