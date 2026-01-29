"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';

const Blog6 = () => {
    const { siteData } = useSite();
    const { primaryColor } = siteData;

    return (
        <section className="py-24 bg-black text-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex items-center gap-10 mb-20">
                    <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none italic">Sıcak <br /> <span style={{ color: primaryColor }}>HABERLER.</span></h2>
                    <div className="h-px flex-1 bg-white/10"></div>
                </div>

                <div className="grid lg:grid-cols-3 gap-10">
                    <div className="lg:col-span-2 relative aspect-video md:aspect-[21/9] rounded-[60px] overflow-hidden group">
                        <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover grayscale opacity-50 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-1000" alt="Featured" />
                        <div className="absolute inset-x-10 bottom-10 p-10 bg-white/5 backdrop-blur-xl rounded-[40px] border border-white/10">
                            <div className="text-[10px] font-black uppercase tracking-widest mb-4" style={{ color: primaryColor }}>MANŞET YAZI</div>
                            <h3 className="text-4xl font-black uppercase tracking-tighter">Yapay Zeka Ve Tasarımın Geleceği</h3>
                        </div>
                    </div>
                    <div className="space-y-10">
                        {[1, 2].map(i => (
                            <div key={i} className="bg-white/5 border border-white/5 rounded-[40px] p-8 hover:bg-white/10 transition cursor-pointer">
                                <span className="text-[10px] font-black uppercase tracking-widest text-white/20 mb-4 block">10 HAZİRAN 2024</span>
                                <h4 className="text-xl font-black uppercase tracking-tight">Kreatif Süreçlerde Yeni Yaklaşımlar</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog6;
