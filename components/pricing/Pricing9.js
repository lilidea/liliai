"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';

const Pricing9 = () => {
    const { siteData } = useSite();
    const { primaryColor } = siteData;

    return (
        <section className="py-24 bg-white border-y border-slate-100">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="space-y-12">
                    {[
                        { name: "Starter", price: "0", desc: "Temel özellikler ile hemen giriş yapın." },
                        { name: "Creator", price: "29", desc: "İçerik üreticileri için özel araçlar." },
                        { name: "Business", price: "89", desc: "Ticari faaliyetleriniz için profesyonel destek." }
                    ].map((plan, i) => (
                        <div key={i} className="flex flex-col md:flex-row md:items-center justify-between pb-12 border-b border-slate-50 last:border-0 group cursor-pointer lg:px-10">
                            <div className="md:w-1/2 mb-8 md:mb-0">
                                <h4 className="text-4xl font-black uppercase tracking-tighter mb-2 group-hover:italic transition-all">{plan.name}</h4>
                                <p className="text-slate-400 font-medium text-sm">{plan.desc}</p>
                            </div>
                            <div className="flex items-center gap-12">
                                <div className="text-4xl font-black tracking-tighter" style={{ color: primaryColor }}>${plan.price}</div>
                                <button className="px-8 py-3 bg-slate-900 text-white rounded-full font-black uppercase text-[10px] tracking-widest hover:bg-black transition">SEÇ</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing9;
