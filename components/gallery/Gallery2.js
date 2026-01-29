"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';

const Gallery2 = () => {
    const { siteData } = useSite();
    const { primaryColor } = siteData;

    const images = [
        "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="columns-1 md:columns-3 gap-8 space-y-8">
                    {images.map((img, i) => (
                        <div key={i} className="break-inside-avoid relative rounded-[40px] overflow-hidden group shadow-sm hover:shadow-2xl transition-all">
                            <img src={img} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="Gallery" />
                            <div className="absolute inset-x-8 bottom-8 p-6 bg-white/10 backdrop-blur-md rounded-[30px] border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity">
                                <span className="text-[10px] font-black uppercase tracking-widest text-white">LILIAI VARTUAL {i}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery2;
