"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';

const Blog7 = () => {
    const { siteData } = useSite();
    const { primaryColor } = siteData;

    return (
        <section className="py-24 bg-white border-y border-slate-100">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="space-y-0">
                    {[
                        { date: "01", mon: "JUN", title: "Minimalist Yaşamın İş Dünyasındaki Yeri" },
                        { date: "15", mon: "MAY", title: "Global Girişimcilik Trendleri 2024" },
                        { date: "22", mon: "APR", title: "Sürdürülebilir Teknoloji Çözümleri" }
                    ].map((post, i) => (
                        <div key={i} className="flex gap-12 items-center py-12 border-b border-slate-50 last:border-0 group cursor-pointer px-6">
                            <div className="text-center w-12 flex-none">
                                <div className="text-3xl font-black leading-none">{post.date}</div>
                                <div className="text-[8px] font-black tracking-widest opacity-30">{post.mon}</div>
                            </div>
                            <h3 className="text-2xl font-black uppercase tracking-tighter group-hover:pl-4 transition-all" style={{ color: i === 0 ? primaryColor : undefined }}>{post.title}</h3>
                            <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">→</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog7;
