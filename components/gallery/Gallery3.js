"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';

const Gallery3 = () => {
    const { siteData } = useSite();
    const { primaryColor } = siteData;

    return (
        <section className="py-24 bg-slate-50 overflow-hidden">
            <div className="flex gap-8 px-6 md:px-24 overflow-x-auto no-scrollbar pb-10">
                {[1, 2, 3, 4, 5].map(i => (
                    <div key={i} className="flex-none w-[300px] md:w-[600px] aspect-video rounded-[80px] overflow-hidden relative group shadow-2xl">
                        <img src={`https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt="Slider" />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all"></div>
                    </div>
                ))}
            </div>
            <style jsx>{`
                .no-scrollbar::-webkit-scrollbar { display: none; }
                .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
            `}</style>
        </section>
    );
};

export default Gallery3;
