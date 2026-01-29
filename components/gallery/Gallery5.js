"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';

const Gallery5 = () => {
    const { siteData } = useSite();
    const { primaryColor } = siteData;

    return (
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-1 grid-cols-1 bg-white border border-slate-200 shadow-xl rounded-[60px] overflow-hidden">
                    {[1, 2, 3, 4, 5, 6].map(i => (
                        <div key={i} className="p-8 border-b lg:border-r border-slate-200 hover:bg-slate-50 transition group cursor-pointer">
                            <div className="aspect-[4/5] rounded-[40px] overflow-hidden mb-6 shadow-sm">
                                <img src={`https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&q=80&w=800`} className="w-full h-full object-cover grayscale opacity-20 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" alt="Work" />
                            </div>
                            <h4 className="text-sm font-black uppercase tracking-widest text-center" style={{ color: primaryColor }}>STUDIO WORK 0{i}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery5;
