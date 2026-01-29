"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';

const Appointment3 = () => {
    const { siteData } = useSite();
    const { primaryColor } = siteData;

    return (
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-6">
                <div className="bg-white rounded-[80px] overflow-hidden flex flex-col lg:flex-row shadow-sm border border-slate-100">
                    <div className="lg:w-1/2 p-12 md:p-24 order-2 lg:order-1">
                        <h2 className="text-4xl font-black uppercase tracking-tighter mb-10 italic">Bizi Ziyaret <span style={{ color: primaryColor }}>EDİN.</span></h2>
                        <div className="space-y-6">
                            <input type="text" placeholder="FullName" className="w-full bg-slate-50 border-none px-8 py-5 rounded-2xl font-bold italic" />
                            <input type="tel" placeholder="Phone" className="w-full bg-slate-50 border-none px-8 py-5 rounded-2xl font-bold italic" />
                            <button className="w-full py-6 bg-black text-white rounded-2xl font-black uppercase tracking-widest hover:bg-slate-800 transition">MASA AYIRT</button>
                        </div>
                    </div>
                    <div className="lg:w-1/2 bg-slate-200 min-h-[400px] order-1 lg:order-2 grayscale opacity-50 relative">
                        <div className="absolute inset-0 flex items-center justify-center font-black text-slate-400 uppercase tracking-widest">GOOGLE MAPS MOCK</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Appointment3;
