"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';

const Cta4 = () => {
    const { siteData } = useSite();
    const { primaryColor } = siteData;

    return (
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-6">
                <div className="bg-white rounded-[60px] overflow-hidden flex flex-col lg:flex-row shadow-sm border border-slate-100">
                    <div className="lg:w-1/2 p-12 md:p-20 order-2 lg:order-1">
                        <div className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-300 mb-8">READY TO START?</div>
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 leading-none">İşinizi Bir <br /> Üst Seviyeye <span style={{ color: primaryColor }}>TAŞIYIN.</span></h2>
                        <p className="text-lg text-slate-500 font-medium mb-12">Binlerce mutlu müşteri arasına siz de katılın.</p>
                        <div className="flex flex-wrap gap-6">
                            <button className="px-10 py-5 bg-black text-white rounded-2xl font-black uppercase tracking-widest hover:bg-slate-800 transition shadow-xl">BAŞLAYIN</button>
                            <button className="px-10 py-5 border-2 border-slate-100 rounded-2xl font-black uppercase tracking-widest hover:bg-slate-50 transition">DEMO İZLE</button>
                        </div>
                    </div>
                    <div className="lg:w-1/2 h-[400px] lg:h-auto order-1 lg:order-2">
                        <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover grayscale opacity-50 transition-all hover:grayscale-0 hover:opacity-100" alt="CTA" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cta4;
