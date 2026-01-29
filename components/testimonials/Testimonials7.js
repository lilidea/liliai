"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';

const Testimonials7 = () => {
    const { siteData } = useSite();
    const { primaryColor } = siteData;

    const items = [
        "MÜKEMMEL HİZMET", "HIZLI TESLİMAT", "PROFESYONEL EKİP", "YARATICI ÇÖZÜMLER", "GÜVENİLİR ORTAK"
    ];

    return (
        <section className="py-24 bg-slate-50 overflow-hidden">
            <div className="mb-20 px-6">
                <h2 className="text-4xl font-black uppercase tracking-tighter text-center italic">Gerçek <span style={{ color: primaryColor }}>Yorumlar</span></h2>
            </div>

            <div className="flex gap-10 animate-marquee whitespace-nowrap mb-12">
                {[1, 2, 3].map(loop => (
                    <div key={loop} className="flex gap-10">
                        {items.map((item, i) => (
                            <div key={i} className="bg-white px-10 py-16 rounded-[40px] shadow-sm border border-slate-100 min-w-[350px]">
                                <p className="text-lg font-bold text-slate-800 italic mb-8">"Proje sürecinden ve sonuçtan inanılmaz memnunuz. Teşekkürler."</p>
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-slate-100"></div>
                                    <span className="font-black text-[10px] uppercase tracking-widest text-slate-400">{item}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>

            <style jsx>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    animation: marquee 30s linear infinite;
                }
            `}</style>
        </section>
    );
};

export default Testimonials7;
