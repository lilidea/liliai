"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';

const ProductGrid7 = () => {
    const { siteData } = useSite();
    const { primaryColor } = siteData;

    return (
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-px bg-white border border-slate-200 rounded-[80px] overflow-hidden">
                    <div className="p-12 md:p-24 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-slate-100 relative group">
                        <div className="absolute top-20 right-20 text-[10vw] font-black text-slate-50 select-none group-hover:text-black group-hover:opacity-5 transition-all">NEW</div>
                        <div className="aspect-square rounded-[60px] overflow-hidden mb-12 shadow-2xl relative z-10">
                            <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="Featured" />
                        </div>
                        <h2 className="text-5xl font-black uppercase tracking-tighter leading-none italic mb-8 relative z-10">THE GALAXY <br /> <span style={{ color: primaryColor }}>EDITION.</span></h2>
                        <button className="w-fit px-12 py-5 bg-black text-white rounded-full font-black uppercase tracking-widest hover:scale-105 transition shadow-xl relative z-10">SATIN AL</button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-100">
                        {[1, 2, 3, 4].map(i => (
                            <div key={i} className="bg-white p-12 hover:bg-slate-50 transition cursor-pointer group flex flex-col justify-between">
                                <div className="aspect-square rounded-[30px] overflow-hidden mb-8 shadow-sm">
                                    <img src={`https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=400`} className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" alt="Prod" />
                                </div>
                                <h4 className="text-sm font-black uppercase tracking-tight mb-2">ACCESSORY 0{i}</h4>
                                <span className="text-xl font-black italic" style={{ color: primaryColor }}>₺249</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductGrid7;
