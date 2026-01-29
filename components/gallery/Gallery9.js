"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';

const Gallery9 = () => {
    const { siteData } = useSite();
    const { primaryColor } = siteData;

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {[1, 2, 3, 4].map(i => (
                        <div key={i} className={`p-6 bg-white shadow-xl hover:-rotate-2 transition-transform duration-500 border border-slate-50 ${i % 2 === 0 ? 'rotate-2' : '-rotate-1'}`}>
                            <div className="aspect-square bg-slate-100 mb-6 overflow-hidden">
                                <img src={`https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&q=80&w=800`} className="w-full h-full object-cover" alt="Polaroid" />
                            </div>
                            <div className="text-center h-10 flex items-center justify-center">
                                <span className="text-xs font-black opacity-20 uppercase tracking-widest italic" style={{ color: primaryColor }}>MOMENT 0{i}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery9;
