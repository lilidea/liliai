"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';
import { ExternalLink } from 'lucide-react';

const Testimonials10 = () => {
    const { siteData } = useSite();
    const { primaryColor } = siteData;

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {[1, 2].map(i => (
                        <div key={i} className="group cursor-pointer">
                            <div className="relative aspect-[16/10] rounded-[60px] overflow-hidden mb-10 shadow-xl group-hover:shadow-2xl transition-all">
                                <img src={`https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200`} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" alt="Case Study" />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                                <div className="absolute top-10 right-10 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-2xl opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all">
                                    <ExternalLink size={20} style={{ color: primaryColor }} />
                                </div>
                            </div>
                            <div className="px-6">
                                <h4 className="text-2xl font-black uppercase tracking-tighter mb-4 italic">ERADEM LOJİSTİK VAKASI</h4>
                                <p className="text-slate-400 font-medium leading-relaxed mb-6">"Dijital altyapımızı tamamen yenileyerek operasyonel hızımızı iki katına çıkardılar."</p>
                                <span className="text-[10px] font-black uppercase tracking-widest text-slate-300 group-hover:text-black transition-colors">HİKAYEYİ OKU →</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials10;
