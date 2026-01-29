"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';

const Projects6 = () => {
    const { siteData } = useSite();
    const { primaryColor } = siteData;

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-20">
                    <div className="lg:w-1/3 lg:sticky lg:top-24 h-fit">
                        <h2 className="text-4xl font-black uppercase tracking-tighter mb-10 leading-none">Vaka <br /> Çalışmaları.</h2>
                        <p className="text-xl text-gray-500 font-medium leading-relaxed mb-12">Her proje bizim için yeni bir problem ve yeni bir çözüm demek. Detaylara odaklanıyoruz.</p>
                        <div className="w-20 h-2" style={{ backgroundColor: primaryColor }}></div>
                    </div>

                    <div className="lg:w-2/3 grid gap-12">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="group cursor-pointer">
                                <div className="aspect-video rounded-[60px] overflow-hidden mb-8 relative">
                                    <img src={`https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200`} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105" alt="Project" />
                                    <div className="absolute top-10 right-10 bg-white/90 backdrop-blur-md px-6 py-3 rounded-full font-black uppercase text-[10px] tracking-widest shadow-2xl">
                                        PROJE 0{i}
                                    </div>
                                </div>
                                <div className="flex justify-between items-center px-6">
                                    <h4 className="text-3xl font-black uppercase tracking-tighter group-hover:underline decoration-black" style={{ decorationColor: primaryColor }}>MODERN CASE STUDY {i}</h4>
                                    <span className="text-gray-400 font-bold uppercase tracking-widest text-[10px]">İNCELE →</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects6;
