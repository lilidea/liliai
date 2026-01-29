"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';
import { ArrowRight } from 'lucide-react';

const Cta3 = () => {
    const { siteData } = useSite();
    const { primaryColor } = siteData;

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="relative p-12 md:p-24 rounded-[80px] bg-slate-900 overflow-hidden text-center">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-blue-500/10 blur-[120px]"></div>
                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-10 leading-none italic">Geleceği <br /> Birlikte <span style={{ color: primaryColor }}>Kuralım.</span></h2>
                        <p className="text-xl text-slate-400 font-medium mb-12">Hemen ücretsiz danışmanlık randevunuzu alın ve farkı hissedin.</p>
                        <button className="px-12 py-6 rounded-[30px] font-black uppercase tracking-widest text-white shadow-2xl transition-all hover:scale-105" style={{ backgroundColor: primaryColor }}>
                            BİZE ULAŞIN <ArrowRight className="inline-block ml-2" size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cta3;
