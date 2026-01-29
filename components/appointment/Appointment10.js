"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';

const Appointment10 = () => {
    const { siteData } = useSite();
    const { primaryColor } = siteData;

    return (
        <section className="min-h-screen relative flex items-center justify-center bg-slate-900 text-white overflow-hidden italic">
            <div className="absolute top-0 left-0 w-full h-full bg-slate-800 opacity-50 grayscale scale-110">
                <img src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1600" className="w-full h-full object-cover" alt="Full" />
            </div>
            <div className="container mx-auto px-6 relative z-10 text-center max-w-3xl">
                <div className="mb-12">
                    <h2 className="text-7xl md:text-9xl font-black uppercase tracking-tighter leading-none mb-4">NOW <br /> <span style={{ color: primaryColor }}>OPEN.</span></h2>
                    <p className="text-xl font-bold uppercase tracking-widest text-white/40">ZAMANINIZI ŞİMDİ AYIRTIN.</p>
                </div>
                <div className="bg-white/5 backdrop-blur-xl p-12 md:p-20 rounded-[80px] border border-white/10 shadow-2xl">
                    <form className="space-y-8">
                        <input type="text" placeholder="İSİM" className="w-full bg-transparent border-b-2 border-white/10 py-4 font-black uppercase focus:border-white transition-all outline-none" />
                        <button className="w-full py-8 rounded-full font-black uppercase tracking-[0.5em] text-xl shadow-2xl hover:scale-105 transition" style={{ backgroundColor: primaryColor }}>ONAYLA</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Appointment10;
