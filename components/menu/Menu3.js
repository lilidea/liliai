"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';

const Menu3 = () => {
    const { siteData } = useSite();
    const { primaryColor } = siteData;

    return (
        <section className="py-24 bg-black text-white">
            <div className="container mx-auto px-6 max-w-4xl text-center">
                <h2 className="text-4xl font-black uppercase tracking-[0.5em] mb-20 opacity-20">TASTE THE ART</h2>
                <div className="space-y-12">
                    {[
                        { n: "Roasted Salmon", p: "320", d: "Fresh salmon with seasonal vegetables." },
                        { n: "Wild Truffle Pasta", p: "280", d: "Handmade pasta with black truffle cream." },
                        { n: "Wagyu Steak", p: "850", d: "Premium A5 Wagyu with gold leaf finishing." }
                    ].map((item, i) => (
                        <div key={i} className="group cursor-pointer">
                            <div className="flex justify-between items-baseline mb-4">
                                <h3 className="text-3xl font-black uppercase tracking-tighter group-hover:italic transition-all">{item.n}</h3>
                                <div className="flex-1 border-b border-dashed border-white/10 mx-6"></div>
                                <div className="text-2xl font-black" style={{ color: primaryColor }}>{item.p}</div>
                            </div>
                            <p className="text-left text-white/30 font-medium text-sm italic">{item.d}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Menu3;
