"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';

const Testimonials5 = () => {
    const { siteData } = useSite();
    const { primaryColor } = siteData;

    return (
        <section className="py-24 bg-black text-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <div className="text-[10px] font-black uppercase tracking-[0.5em] text-white/20 mb-6">FEEDBACK</div>
                        <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-12 italic">Neden <br /> <span style={{ color: primaryColor }}>BİZ?</span></h2>
                        <div className="w-24 h-1 bg-white/10"></div>
                    </div>

                    <div className="relative">
                        <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/5 blur-[100px] rounded-full"></div>
                        <div className="relative z-10 bg-white/5 backdrop-blur-3xl border border-white/10 p-12 rounded-[80px]">
                            <p className="text-3xl font-bold leading-tight mb-12 italic">"Piyasadaki en inovatif yaklaşım. Ekip olarak sonuçlardan çok memnunuz."</p>
                            <div className="flex items-center gap-6">
                                <div className="w-16 h-16 rounded-3xl bg-white/10 flex items-center justify-center font-black text-2xl" style={{ color: primaryColor }}>S</div>
                                <div>
                                    <h4 className="text-xl font-black uppercase tracking-tighter">SELİN DEMİR</h4>
                                    <div className="text-xs font-bold text-white/30 uppercase tracking-widest">MARKETING SPECIALIST</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials5;
