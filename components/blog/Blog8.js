"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';

const Blog8 = () => {
    const { siteData } = useSite();
    const { primaryColor } = siteData;

    return (
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-1 grid-cols-1 bg-white border border-slate-200 shadow-xl rounded-[60px] overflow-hidden">
                    {[1, 2, 3, 4, 5, 6].map(i => (
                        <div key={i} className="p-10 border-b lg:border-r border-slate-200 hover:bg-slate-50 transition group cursor-pointer">
                            <div className="aspect-square rounded-[40px] overflow-hidden mb-8 shadow-sm">
                                <img src={`https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800`} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Post" />
                            </div>
                            <div className="text-[10px] font-black uppercase tracking-widest opacity-20 mb-4 group-hover:opacity-100 transition-opacity" style={{ color: primaryColor }}>DESIGN</div>
                            <h4 className="text-xl font-black uppercase tracking-tight leading-tight">İlham Verici Tasarım Örnekleri Ve Analizler {i}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog8;
