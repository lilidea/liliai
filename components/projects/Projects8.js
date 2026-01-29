"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';

const Projects8 = () => {
    const { siteData } = useSite();
    const { primaryColor } = siteData;

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6 mb-16">
                <h2 className="text-4xl font-black uppercase tracking-tighter italic">Seçili <span style={{ color: primaryColor }}>Eserler.</span></h2>
            </div>

            <div className="flex gap-8 px-6 md:px-24 overflow-x-auto no-scrollbar pb-10 select-none">
                {[1, 2, 3, 4, 5].map(i => (
                    <div key={i} className="flex-none w-[300px] md:w-[500px] aspect-[4/5] md:aspect-video rounded-[80px] overflow-hidden relative group cursor-grab active:cursor-grabbing shadow-xl">
                        <img src={`https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt="Project" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-12 text-white">
                            <div className="text-[10px] font-black uppercase tracking-widest mb-4 opacity-50" style={{ color: primaryColor }}>KATEGORİ</div>
                            <h3 className="text-3xl font-black uppercase tracking-tighter">BÜYÜK PROJE {i}</h3>
                        </div>
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

export default Projects8;
