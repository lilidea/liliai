"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';

const ProductGrid8 = () => {
    const { siteData } = useSite();
    const { primaryColor } = siteData;

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
                        <div key={i} className="group cursor-pointer">
                            <div className="aspect-square rounded-full border-8 border-slate-50 overflow-hidden mb-8 group-hover:ring-8 transition-all duration-500 shadow-sm" style={{ '--tw-ring-color': primaryColor }}>
                                <img src={`https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800`} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100" alt="Bubble" />
                            </div>
                            <div className="text-center">
                                <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-300 group-hover:text-black transition-colors mb-2">RUNNING GEAR 0{i}</h4>
                                <div className="text-lg font-black italic" style={{ color: primaryColor }}>₺450</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductGrid8;
