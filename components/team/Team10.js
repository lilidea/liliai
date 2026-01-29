"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';

const Team10 = () => {
    const { siteData } = useSite();
    const { primaryColor } = siteData;

    return (
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-24">
                    <h2 className="text-5xl font-black uppercase tracking-tighter mb-6 underline decoration-4" style={{ decorationColor: primaryColor }}>Yönetici Kadromuz</h2>
                    <p className="text-slate-400 font-medium whitespace-nowrap">Yılların getirdiği tecrübe ve güvenle yanınızdayız.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
                    {[1, 2, 3].map(i => (
                        <div key={i} className="bg-white p-10 rounded-[40px] shadow-sm border border-slate-100 hover:shadow-2xl transition group flex items-center gap-8">
                            <img src={`https://i.pravatar.cc/200?u=exec${i}`} className="w-24 h-24 rounded-3xl object-cover grayscale group-hover:grayscale-0 transition-all" alt="Team Member" />
                            <div>
                                <h4 className="text-xl font-black text-slate-900 mb-1">YÜSRA ERDEM {i}</h4>
                                <div className="text-xs font-black uppercase tracking-widest" style={{ color: primaryColor }}>CEO & FOUNDER</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team10;
