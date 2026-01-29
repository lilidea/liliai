"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';

const Gallery8 = () => {
    const { siteData } = useSite();
    const { primaryColor } = siteData;

    return (
        <section className="py-40 bg-slate-900 border-y border-white/5 overflow-hidden">
            <div className="container mx-auto px-6 relative">
                <div className="absolute top-0 right-0 text-[30vw] font-black text-white/5 select-none pointer-events-none -translate-y-1/2">COLLAGE</div>
                <div className="grid grid-cols-12 gap-4 relative z-10">
                    <div className="col-span-8 aspect-[16/10] rounded-[60px] overflow-hidden shadow-2xl skew-y-3">
                        <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover" alt="Main" />
                    </div>
                    <div className="col-span-4 aspect-square rounded-[60px] overflow-hidden shadow-2xl -translate-x-20 translate-y-20 border-8 border-slate-900">
                        <img src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="Side" />
                    </div>
                    <div className="col-start-2 col-span-3 aspect-square rounded-[60px] overflow-hidden shadow-2xl -translate-y-20 border-8 border-slate-900">
                        <img src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="Bottom" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery8;
