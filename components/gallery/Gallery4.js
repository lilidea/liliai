"use client";
import React, { useState } from 'react';
import { useSite } from '@/app/context/SiteContext';

const Gallery4 = () => {
    const { siteData } = useSite();
    const { primaryColor } = siteData;
    const [filter, setFilter] = useState("HEPSİ");

    const categories = ["HEPSİ", "DİJİTAL", "TASARIM", "MARKA"];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="flex justify-center gap-6 mb-16 overflow-x-auto no-scrollbar pb-4">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all ${filter === cat ? 'text-white' : 'text-slate-400'}`}
                            style={{ backgroundColor: filter === cat ? primaryColor : 'transparent' }}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
                        <div key={i} className="aspect-square rounded-[40px] overflow-hidden group relative cursor-pointer shadow-sm hover:shadow-2xl transition">
                            <img src={`https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800`} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Gallery" />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                                    <span className="text-xl font-black" style={{ color: primaryColor }}>+</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery4;
