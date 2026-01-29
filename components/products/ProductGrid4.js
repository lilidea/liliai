"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';
import { Star } from 'lucide-react';

const ProductGrid4 = () => {
    const { siteData } = useSite();
    const { primaryColor } = siteData;

    return (
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[1, 2, 3, 4].map(i => (
                        <div key={i} className="bg-white p-8 rounded-[50px] shadow-sm hover:shadow-2xl transition border border-slate-100 group">
                            <div className="aspect-square bg-slate-50 rounded-[40px] mb-8 overflow-hidden relative">
                                <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover transition-transform group-hover:scale-105" alt="Headphones" />
                                <div className="absolute top-4 left-4 px-3 py-1 bg-green-500 text-white text-[8px] font-black uppercase tracking-widest rounded-full">STOKTA</div>
                            </div>
                            <div className="flex gap-1 mb-4">
                                {[1, 2, 3, 4, 5].map(s => <Star key={s} size={12} fill={primaryColor} stroke={primaryColor} />)}
                            </div>
                            <h4 className="text-lg font-black uppercase tracking-tight mb-2">HI-FI HEADSET 0{i}</h4>
                            <p className="text-xs text-slate-400 font-medium mb-6">Kristal netliğinde ses deneyimi ve ergonomik tasarım.</p>
                            <div className="flex justify-between items-center">
                                <span className="text-xl font-black italic">₺2,450</span>
                                <button className="w-10 h-10 rounded-2xl bg-black text-white flex items-center justify-center hover:scale-110 transition shadow-xl" style={{ backgroundColor: primaryColor }}>+</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductGrid4;
