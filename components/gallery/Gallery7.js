"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';

const Gallery7 = () => {
    const { siteData } = useSite();
    const { primaryColor } = siteData;

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
                        <div key={i} className="group relative">
                            <div className="aspect-square rounded-full overflow-hidden mb-6 ring-8 ring-slate-50 transition-all group-hover:ring-slate-100">
                                <img src={`https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800`} className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" alt="Round" />
                            </div>
                            <div className="text-center">
                                <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-300 group-hover:text-black transition-colors">DESIGN ITEM 0{i}</h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery7;
