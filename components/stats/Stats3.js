"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';
import { Users, Globe, Award, Zap } from 'lucide-react';

const Stats3 = () => {
    const { siteData } = useSite();
    const { primaryColor } = siteData;

    const stats = [
        { label: "MUTLU MÜŞTERİ", value: "500+", icon: Users },
        { label: "TAMAMLANAN PROJE", value: "1.2K", icon: Zap },
        { label: "KÜRESEL OFİS", value: "12", icon: Globe },
        { label: "SEKTÖREL ÖDÜL", value: "25", icon: Award }
    ];

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
                    {stats.map((stat, i) => (
                        <div key={i} className="relative group text-center lg:text-left">
                            <stat.icon className="absolute top-0 left-0 text-slate-50 opacity-0 group-hover:opacity-100 -translate-x-4 -translate-y-4 transition-all duration-700" size={120} />
                            <div className="relative z-10">
                                <div className="text-5xl md:text-7xl font-black tracking-tighter mb-4" style={{ color: primaryColor }}>{stat.value}</div>
                                <div className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">{stat.label}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats3;
