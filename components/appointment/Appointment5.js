"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';

const Appointment5 = () => {
    const { siteData } = useSite();
    const { primaryColor } = siteData;

    return (
        <section className="py-24 bg-slate-100 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white rounded-full translate-x-1/2 -translate-y-1/2"></div>
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-xl bg-white p-12 md:p-20 rounded-[100px] shadow-2xl border border-white">
                    <div className="w-16 h-2 mb-10" style={{ backgroundColor: primaryColor }}></div>
                    <h2 className="text-4xl font-black uppercase tracking-tighter mb-10 italic italic">Yeni Bir <br /> Başlangıç.</h2>
                    <div className="space-y-6">
                        <input type="text" placeholder="Branş Seçin" className="w-full border-b-2 border-slate-100 py-4 outline-none focus:border-black font-bold uppercase transition-all" />
                        <input type="text" placeholder="Saat Aralığı" className="w-full border-b-2 border-slate-100 py-4 outline-none focus:border-black font-bold uppercase transition-all" />
                        <button className="mt-10 px-12 py-5 bg-black text-white rounded-full font-black uppercase tracking-widest hover:scale-105 transition shadow-xl" style={{ backgroundColor: primaryColor }}>HEMEN AL</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Appointment5;
