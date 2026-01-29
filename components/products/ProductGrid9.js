"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';

const ProductGrid9 = () => {
    const { siteData } = useSite();
    const { primaryColor } = siteData;

    return (
        <section className="py-24 bg-slate-900 text-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-8">
                    {[
                        { n: "STELLAR", p: "1.9K", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800" },
                        { n: "NEBULA", p: "2.5K", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800" },
                        { n: "QUASAR", p: "3.2K", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800" }
                    ].map((item, i) => (
                        <div key={i} className="flex-1 bg-white/5 p-12 rounded-[80px] border border-white/5 hover:bg-white/10 transition group relative min-h-[500px] flex flex-col justify-between overflow-hidden">
                            <div className="absolute top-10 right-10 text-[8vw] font-black text-white/5 select-none rotate-90">{item.n}</div>
                            <div className="relative z-10 p-6 bg-white rounded-full w-fit mb-12 shadow-2xl scale-125 mx-auto group-hover:scale-150 transition-all duration-700">
                                <img src={item.img} className="w-32 h-32 object-contain" alt="P" />
                            </div>
                            <div className="relative z-10 text-center">
                                <h4 className="text-2xl font-black uppercase mb-2 italic">{item.n} SERİSİ</h4>
                                <div className="text-4xl font-black" style={{ color: primaryColor }}>₺{item.p}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductGrid9;
