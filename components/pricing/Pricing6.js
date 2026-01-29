"use client";
import React, { useState } from 'react';
import { useSite } from '@/app/context/SiteContext';
import { motion } from 'framer-motion';

const Pricing6 = () => {
    const { siteData } = useSite();
    const { primaryColor } = siteData;
    const [isYearly, setIsYearly] = useState(false);

    return (
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center mb-20 text-center">
                    <h2 className="text-5xl font-black uppercase tracking-tighter mb-10 leading-tight">Size Özel <br /> <span style={{ color: primaryColor }}>Esnek Planlar.</span></h2>

                    <div className="flex items-center gap-4 bg-white p-2 rounded-2xl shadow-sm border border-slate-100">
                        <button
                            onClick={() => setIsYearly(false)}
                            className={`px-6 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${!isYearly ? 'shadow-lg text-white' : 'text-slate-400'}`}
                            style={{ backgroundColor: !isYearly ? primaryColor : 'transparent' }}
                        >
                            AYLIK
                        </button>
                        <button
                            onClick={() => setIsYearly(true)}
                            className={`px-6 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${isYearly ? 'shadow-lg text-white' : 'text-slate-400'}`}
                            style={{ backgroundColor: isYearly ? primaryColor : 'transparent' }}
                        >
                            YILLIK <span className="ml-1 opacity-50">%20 İNDİRİM</span>
                        </button>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
                    {[1, 2].map(i => (
                        <div key={i} className="bg-white p-12 rounded-[60px] shadow-sm hover:shadow-2xl transition-all border border-slate-100 group">
                            <div className="text-sm font-black text-slate-300 uppercase tracking-[0.3em] mb-4">PLAN 0{i}</div>
                            <h4 className="text-3xl font-black uppercase mb-8">{i === 1 ? 'STANDART' : 'PREMIUM'}</h4>
                            <div className="flex items-baseline mb-12">
                                <span className="text-6xl font-black tracking-tighter">${isYearly ? (i === 1 ? '190' : '490') : (i === 1 ? '19' : '49')}</span>
                                <span className="text-slate-400 font-bold ml-2">/ {isYearly ? 'YIL' : 'AY'}</span>
                            </div>
                            <button className="w-full py-6 rounded-[30px] font-black uppercase tracking-[0.2em] border-2 group-hover:bg-black group-hover:text-white group-hover:border-black transition-all" style={{ borderColor: primaryColor, color: primaryColor }}>
                                PLANI SEÇ
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing6;
