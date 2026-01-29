"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';
import { ShoppingBag, Heart } from 'lucide-react';

const ProductGrid2 = () => {
    const { siteData } = useSite();
    const { primaryColor } = siteData;

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
                        <div key={i} className="group cursor-pointer">
                            <div className="aspect-[3/4] rounded-[40px] bg-slate-50 overflow-hidden relative mb-6">
                                <img src={`https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800`} className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" alt="Product" />
                                <div className="absolute top-6 right-6 flex flex-col gap-3 translate-x-12 group-hover:translate-x-0 transition-transform duration-500">
                                    <button className="w-10 h-10 rounded-full bg-white shadow-xl flex items-center justify-center hover:bg-black hover:text-white transition">
                                        <Heart size={18} />
                                    </button>
                                </div>
                                <div className="absolute inset-x-6 bottom-6 translate-y-20 group-hover:translate-y-0 transition-transform duration-500">
                                    <button className="w-full py-4 bg-white text-black rounded-2xl font-black uppercase text-[10px] tracking-widest shadow-2xl flex items-center justify-center gap-2">
                                        <ShoppingBag size={14} /> SEPETE EKLE
                                    </button>
                                </div>
                            </div>
                            <div>
                                <h4 className="text-sm font-black uppercase tracking-tight mb-1">PREMIUM ITEM 0{i}</h4>
                                <div className="text-lg font-black italic" style={{ color: primaryColor }}>₺1,249</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductGrid2;
