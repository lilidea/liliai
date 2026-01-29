"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';

const Blog5 = () => {
    const { siteData } = useSite();
    const { primaryColor } = siteData;

    return (
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-6 max-w-5xl">
                <div className="space-y-16">
                    {[1, 2, 3].map(i => (
                        <div key={i} className="flex flex-col md:flex-row gap-12 items-center group cursor-pointer">
                            <div className="md:w-2/5 aspect-[4/3] rounded-[50px] overflow-hidden shadow-xl ring-8 ring-white/50">
                                <img src={`https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Blog" />
                            </div>
                            <div className="md:w-3/5">
                                <div className="text-[10px] font-black uppercase tracking-[0.3em] mb-4" style={{ color: primaryColor }}>KATEGORİ ADI</div>
                                <h3 className="text-3xl font-black uppercase tracking-tighter mb-6 group-hover:underline decoration-black" style={{ decorationColor: primaryColor }}>Modern İş Dünyasında Dijital Çözümler {i}</h3>
                                <p className="text-slate-400 font-medium leading-relaxed mb-6">İş süreçlerinizi nasıl daha verimli hale getirebileceğinizi bu yazımızda detaylarıyla inceliyoruz.</p>
                                <span className="text-xs font-black uppercase tracking-widest border-b-2 border-black pb-1">OKUMAYA DEVAM ET</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog5;
