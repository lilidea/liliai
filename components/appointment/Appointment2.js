"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';

const Appointment2 = () => {
    const { siteData } = useSite();
    const { primaryColor } = siteData;

    return (
        <section className="py-24 bg-black text-white">
            <div className="container mx-auto px-6 max-w-4xl text-center">
                <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-12 italic">Rezervasyon <br /> <span style={{ color: primaryColor }}>YAPTIRIN.</span></h2>
                <form className="grid md:grid-cols-2 gap-8 text-left">
                    <input type="text" placeholder="ADINIZ" className="bg-white/5 border border-white/10 p-6 rounded-3xl outline-none focus:border-white/30 font-bold" />
                    <input type="email" placeholder="E-POSTA" className="bg-white/5 border border-white/10 p-6 rounded-3xl outline-none focus:border-white/30 font-bold" />
                    <select className="bg-white/5 border border-white/10 p-6 rounded-3xl outline-none focus:border-white/30 font-bold appearance-none">
                        <option>DANIŞMANLIK</option>
                        <option>TEKNİK DESTEK</option>
                    </select>
                    <input type="date" className="bg-white/5 border border-white/10 p-6 rounded-3xl outline-none focus:border-white/30 font-bold uppercase" />
                    <button className="md:col-span-2 py-8 rounded-3xl font-black uppercase tracking-widest text-xl hover:scale-105 transition shadow-2xl" style={{ backgroundColor: primaryColor }}>RANDEVU AL</button>
                </form>
            </div>
        </section>
    );
};

export default Appointment2;
