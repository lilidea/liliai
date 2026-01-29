"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';

const ProductGrid10 = () => {
    const { siteData } = useSite();
    const { primaryColor } = siteData;

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <div className="relative group">
                        <div className="absolute inset-0 blur-[150px] opacity-20 scale-150 rounded-full" style={{ backgroundColor: primaryColor }}></div>
                        <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=1200" className="relative z-10 w-full rounded-[100px] shadow-2xl transition-transform group-hover:scale-105 duration-1000" alt="Hero Product" />
                    </div>
                    <div>
                        <div className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-300 mb-8">PRODUCT OF THE YEAR</div>
                        <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-12 italic italic">Master <br /> <span style={{ color: primaryColor }}>CONTROL.</span></h2>
                        <p className="text-xl text-slate-500 font-medium mb-12 leading-relaxed max-w-md">En gelişmiş teknoloji, en şık tasarım ile buluştu. Sınırları belirleyenler için tasarladı.</p>
                        <div className="flex items-baseline gap-4 mb-16">
                            <span className="text-8xl font-black tracking-tighter italic">₺4,990</span>
                            <span className="text-sm font-bold text-slate-300 uppercase">SINIRLI STOK</span>
                        </div>
                        <button className="px-20 py-8 bg-black text-white rounded-full font-black uppercase tracking-[0.5em] shadow-2xl hover:bg-zinc-800 transition">HEMEN AL</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductGrid10;
