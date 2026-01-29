"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';

const Testimonials8 = () => {
    const { siteData } = useSite();
    const { primaryColor } = siteData;

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6 max-w-4xl">
                <h2 className="text-3xl font-black uppercase tracking-widest mb-16 underline decoration-4" style={{ textDecorationColor: primaryColor }}>Referanslarımız</h2>
                <div className="space-y-12">
                    {[1, 2, 3].map(i => (
                        <div key={i} className="flex flex-col md:flex-row gap-12 items-start py-12 border-b border-slate-100 last:border-0 group">
                            <div className="md:w-1/3">
                                <h4 className="text-xl font-black uppercase tracking-tight mb-2">KEREM AKTAŞ</h4>
                                <div className="text-[10px] font-bold text-slate-300 uppercase tracking-widest leading-none">STARTUP FOUNDER</div>
                            </div>
                            <div className="md:w-2/3">
                                <p className="text-xl font-medium text-slate-500 leading-relaxed group-hover:text-black transition-colors">"Daha önce çalıştığımız hiçbir ajans bu kadar detaycı ve çözüm odaklı olmamıştı. İş disiplinleri hayranlık uyandırıcı."</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials8;
