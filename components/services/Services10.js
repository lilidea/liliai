"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';
import { Sparkles, BarChart3, Cloud, Layers } from 'lucide-react';

const Services10 = () => {
    const { siteData } = useSite();
    const { primaryColor } = siteData;

    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-100/50 to-purple-100/50 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-24">
                    <div className="inline-block px-5 py-2 rounded-full bg-white shadow-sm border border-gray-100 mb-8 font-black uppercase text-[10px] tracking-widest text-gray-400">
                        PREMIUM <span style={{ color: primaryColor }}>TEKNOLOJİ</span>
                    </div>
                    <h2 className="text-5xl md:text-8xl font-black text-slate-900 leading-[0.8] tracking-tighter uppercase mb-10">Modern <br /> Standartlar.</h2>
                    <p className="text-xl text-slate-400 font-medium">Liliai ile işinizi geleceğin tasarım diliyle inşa edin.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {[
                        { icon: Sparkles, title: "Yaratıcı Yapay Zeka", desc: "Görüntü ve metin üretiminde sınır tanımayın." },
                        { icon: BarChart3, title: "Veri Analitiği", desc: "Her hareketi ölçün, her kararı veriye dayandırın." },
                        { icon: Cloud, title: "Bulut Mimari", desc: "Hız ve güvenlikten ödün vermeyen altyapı." },
                        { icon: Layers, title: "Ölçeklenebilirlik", desc: "Büyüdükçe yanınızda olan esnek sistemler." }
                    ].map((item, i) => (
                        <div key={i} className="bg-white/40 backdrop-blur-2xl p-12 rounded-[50px] border border-white/20 shadow-xl transition-all hover:shadow-2xl hover:translate-y-[-10px] group">
                            <div className="w-16 h-16 rounded-3xl bg-white shadow-lg flex items-center justify-center mb-10 group-hover:scale-110 transition cursor-pointer" style={{ color: primaryColor }}>
                                <item.icon size={28} />
                            </div>
                            <h4 className="text-3xl font-black text-slate-900 mb-6 tracking-tighter uppercase">{item.title}</h4>
                            <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services10;
