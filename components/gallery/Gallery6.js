"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';

const Gallery6 = () => {
    const { siteData } = useSite();
    const { primaryColor } = siteData;

    return (
        <section className="py-24 bg-black text-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-24 max-w-2xl mx-auto">
                    <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-10 italic">Visual <br /> <span style={{ color: primaryColor }}>STORY.</span></h2>
                    <p className="text-white/30 font-bold uppercase tracking-widest">Güzelliği her karede keşfedin.</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => (
                        <div key={i} className="aspect-square relative group overflow-hidden cursor-zoom-in">
                            <img src={`https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800`} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-110 hover:scale-100" alt="Art" />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery6;
