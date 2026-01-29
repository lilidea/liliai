"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';

const Blog9 = () => {
    const { siteData } = useSite();
    const { primaryColor } = siteData;

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16">
                    {[1, 2].map(i => (
                        <div key={i} className="group relative">
                            <div className="aspect-[16/10] rounded-[60px] overflow-hidden mb-8 relative shadow-2xl">
                                <img src={`https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&q=80&w=1200`} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Card" />
                                <div className="absolute top-8 left-8 bg-white px-6 py-2 rounded-full font-black text-xs shadow-2xl" style={{ color: primaryColor }}>
                                    TECH
                                </div>
                            </div>
                            <div className="px-6">
                                <div className="text-xs font-bold text-slate-300 uppercase tracking-widest mb-4">FEBRUARY 12, 2024</div>
                                <h3 className="text-4xl font-black uppercase tracking-tighter mb-6 leading-tight italic">Bulut Bilişimde <br /> Yeni Dönem</h3>
                                <button className="text-[10px] font-black uppercase tracking-[0.2em] underline group-hover:no-underline underline-offset-8">GÖZ AT</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog9;
