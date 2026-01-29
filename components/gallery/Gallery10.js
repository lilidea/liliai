"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';

const Gallery10 = () => {
    const { siteData } = useSite();
    const { primaryColor } = siteData;

    return (
        <section className="bg-white">
            {[1, 2].map(i => (
                <div key={i} className="min-h-screen relative flex items-center overflow-hidden border-b border-white border-8">
                    <img src={`https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600`} className="absolute inset-0 w-full h-full object-cover grayscale opacity-50" alt="Full Width" />
                    <div className="container mx-auto px-6 relative z-10 text-center">
                        <h2 className="text-8xl md:text-[20vw] font-black uppercase tracking-tighter leading-none opacity-5 select-none pointer-events-none">COLLECTION</h2>
                        <div className="mt-[-5vw]">
                            <h3 className="text-5xl md:text-8xl font-black uppercase tracking-tighter" style={{ color: primaryColor }}>PROJECT TITLE 0{i}</h3>
                            <button className="mt-12 px-12 py-6 bg-black text-white rounded-full font-black uppercase tracking-widest shadow-2xl hover:scale-105 transition">GÖRÜNTÜLE</button>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Gallery10;
