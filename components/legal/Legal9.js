"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';
import { Search } from 'lucide-react';

const Legal9 = () => {
    const { siteData } = useSite();
    const { primaryColor } = siteData;

    return (
        <section className="py-24 bg-slate-50 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="bg-slate-900 p-12 md:p-24 rounded-[80px] text-white text-center relative">
                    <div className="absolute top-0 left-0 w-full h-full bg-indigo-500/5 blur-[120px]"></div>
                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-10 italic">Yardım & <br /> <span style={{ color: primaryColor }}>YASAL.</span></h2>
                        <div className="relative mb-12">
                            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-white/30" />
                            <input
                                type="text"
                                placeholder="Politikalarda ara..."
                                className="w-full bg-white/5 border border-white/10 px-16 py-6 rounded-full outline-none focus:border-white/20 transition-all font-bold"
                            />
                        </div>
                        <div className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20">MEVZUATA TAM UYUMLU ŞEFFAF YAKLAŞIM.</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Legal9;
