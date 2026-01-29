"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';
import { Play } from 'lucide-react';

const Testimonials6 = () => {
    const { siteData } = useSite();
    const { primaryColor } = siteData;

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="bg-slate-900 rounded-[80px] overflow-hidden flex flex-col lg:flex-row shadow-2xl">
                    <div className="lg:w-1/2 relative group cursor-pointer">
                        <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" alt="Video" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Play size={32} fill="white" className="text-white ml-1" />
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2 p-12 md:p-24 text-white flex flex-col justify-center">
                        <div className="text-[10px] font-black uppercase tracking-[0.3em] mb-8" style={{ color: primaryColor }}>VİDEO BAŞARI HİKAYESİ</div>
                        <h3 className="text-4xl font-black uppercase tracking-tighter mb-12 leading-none italic italic">"Hayallerimizi gerçeğe <br /> dönüştürdüler."</h3>
                        <div className="flex items-center gap-6">
                            <div>
                                <h4 className="text-xl font-black uppercase tracking-widest">ELİF SOYLU</h4>
                                <div className="text-xs font-bold text-white/30 uppercase tracking-widest mt-1">PRODUCT DESIGNER</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials6;
