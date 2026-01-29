"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';

const ProductGrid5 = () => {
    const { siteData } = useSite();
    const { primaryColor } = siteData;

    return (
        <section className="py-24 bg-white border-y border-slate-100">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="space-y-0">
                    {[
                        { n: "Minimalist Watch", p: "1.450", c: "Aksesuarlar" },
                        { n: "Canvas Backpack", p: "890", c: "Çantalar" },
                        { n: "Leather Wallet", p: "450", c: "Aksesuarlar" }
                    ].map((item, i) => (
                        <div key={i} className="flex gap-12 items-center py-12 border-b border-slate-50 last:border-0 group cursor-pointer px-6 hover:bg-slate-50 transition-all rounded-[40px]">
                            <div className="w-20 h-20 bg-slate-100 rounded-3xl flex-none overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=200" className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all" alt="Img" />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-2xl font-black uppercase tracking-tighter group-hover:pl-2 transition-all">{item.n}</h3>
                                <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">{item.c}</span>
                            </div>
                            <div className="text-2xl font-black italic" style={{ color: primaryColor }}>₺{item.p}</div>
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity">→</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductGrid5;
