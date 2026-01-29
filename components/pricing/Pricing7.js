"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';

const Pricing7 = () => {
    const { siteData } = useSite();
    const { primaryColor } = siteData;

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-20 bg-slate-900 rounded-[80px] p-12 md:p-24 text-white relative">
                    <div className="lg:w-1/2 relative z-10">
                        <div className="w-20 h-2 mb-10" style={{ backgroundColor: primaryColor }}></div>
                        <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-8 italic">Tek Paket <br /> <span className="opacity-30">TAM GÜÇ.</span></h2>
                        <p className="text-xl text-slate-400 font-medium leading-relaxed max-w-md">Kafa karışıklığına son verdik. En gelişmiş özelliklerimizi tek bir pakette topladık.</p>
                    </div>

                    <div className="lg:w-1/2 w-full bg-white text-black p-12 md:p-20 rounded-[60px] shadow-2xl relative z-10">
                        <h4 className="text-2xl font-black uppercase tracking-widest mb-2" style={{ color: primaryColor }}>PLATINUM</h4>
                        <div className="text-xs font-black text-slate-300 uppercase tracking-widest mb-10">HER ŞEY DAHİL ÇÖZÜM</div>

                        <div className="text-7xl font-black tracking-tighter mb-12">$149<span className="text-xl opacity-20 uppercase">/Ay</span></div>

                        <div className="space-y-6 mb-16">
                            {["Sınırsız Kullanım", "Ekip Yönetimi", "Gelişmiş API", "7/24 Teknik Destek"].map((item, i) => (
                                <div key={i} className="flex items-center gap-6 pb-6 border-b border-slate-100 font-bold uppercase text-sm tracking-widest">
                                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: primaryColor }}></span>
                                    {item}
                                </div>
                            ))}
                        </div>

                        <button className="w-full py-8 bg-black text-white rounded-[40px] font-black uppercase tracking-[0.3em] hover:scale-105 transition-all shadow-xl">
                            HEMEN ABONE OL
                        </button>
                    </div>

                    <div className="absolute top-0 right-0 text-[30vw] font-black text-white/5 select-none pointer-events-none tracking-tighter translate-x-1/4 -translate-y-1/4">
                        PRO
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing7;
