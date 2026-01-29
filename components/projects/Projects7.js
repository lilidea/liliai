"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';
import { ExternalLink } from 'lucide-react';

const Projects7 = () => {
    const { siteData } = useSite();
    const { primaryColor } = siteData;

    return (
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-24">
                    <h2 className="text-5xl font-black uppercase tracking-tighter mb-8 italic"><span style={{ color: primaryColor }}>Sınırsız</span> Yaratıcılık</h2>
                    <p className="text-slate-400 font-medium">Projelerimizde estetik ve teknolojinin mükemmel uyumunu yakalıyoruz.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {[1, 2, 3, 4, 5, 6].map(i => (
                        <div key={i} className="bg-white rounded-[50px] p-6 shadow-sm border border-slate-100 hover:shadow-2xl transition group flex flex-col">
                            <div className="aspect-[4/5] rounded-[40px] overflow-hidden mb-8 relative">
                                <img src={`https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800`} className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" alt="Work" />
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <button className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center shadow-2xl" style={{ color: primaryColor }}>
                                        <ExternalLink size={24} />
                                    </button>
                                </div>
                            </div>
                            <div className="px-4 pb-4">
                                <h4 className="text-xl font-black uppercase tracking-tight mb-2">DESIGN WORK {i}</h4>
                                <div className="text-[10px] font-black uppercase tracking-widest text-slate-300 group-hover:text-black transition-colors">UI/UX • WEB</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects7;
