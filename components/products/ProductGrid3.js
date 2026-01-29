"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';

const ProductGrid3 = () => {
    const { siteData } = useSite();
    const { primaryColor } = siteData;

    return (
        <section className="py-24 bg-black text-white">
            <div className="container mx-auto px-6">
                <div className="flex justify-between items-end mb-20 px-4">
                    <h2 className="text-4xl font-black uppercase tracking-tighter italic">Seçili <span style={{ color: primaryColor }}>Koleksiyon.</span></h2>
                    <span className="text-xs font-bold text-white/20 uppercase tracking-widest">LIMITED EDITION</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-1 grid-cols-1 bg-white/5 border border-white/10 rounded-[60px] overflow-hidden">
                    {[1, 2, 3].map(i => (
                        <div key={i} className="p-12 hover:bg-white/5 transition group cursor-pointer border-b md:border-b-0 md:border-r border-white/5 last:border-0 text-center">
                            <div className="aspect-square rounded-[40px] overflow-hidden mb-10 shadow-2xl">
                                <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000" alt="Product" />
                            </div>
                            <h4 className="text-xl font-black uppercase mb-4 tracking-widest">NOIR EDITION {i}</h4>
                            <div className="text-2xl font-black italic" style={{ color: primaryColor }}>$299</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductGrid3;
