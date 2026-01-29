"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';

const Appointment7 = () => {
    const { siteData } = useSite();
    const { primaryColor } = siteData;

    return (
        <section className="py-24 bg-slate-900 border-y border-white/5 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-px bg-white/5 rounded-[100px] overflow-hidden">
                    <div className="lg:w-1/2 aspect-square md:aspect-auto">
                        <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover grayscale opacity-30 hover:opacity-100 transition-all duration-1000" alt="Booking" />
                    </div>
                    <div className="lg:w-1/2 p-12 md:p-24 flex flex-col justify-center">
                        <div className="text-[10px] font-black uppercase tracking-[0.5em] text-white/20 mb-10">PREMIUM BOOKING Experience</div>
                        <h2 className="text-5xl font-black uppercase text-white tracking-tighter leading-none mb-12 italic italic">Profesyonel <br /> <span style={{ color: primaryColor }}>DOKUNUŞ.</span></h2>
                        <button className="px-12 py-6 border-2 border-white text-white rounded-full font-black uppercase text-xs tracking-widest hover:bg-white hover:text-black transition shadow-2xl">PROGRAMI GÖR</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Appointment7;
