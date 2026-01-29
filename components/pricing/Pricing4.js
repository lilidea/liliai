"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';
import { Check } from 'lucide-react';

const Pricing4 = () => {
    const { siteData } = useSite();
    const { primaryColor } = siteData;

    const plans = [
        { name: "BAŞLANGIÇ", price: "29", desc: "Küçük işletmeler için temel araçlar.", features: ["5 Kullanıcı", "Temel Analitik", "Email Desteği"] },
        { name: "PROFESYONEL", price: "99", desc: "Büyüyen ekipler için gelişmiş özellikler.", features: ["25 Kullanıcı", "Gelişmiş Analitik", "7/24 Destek", "Özel Entegrasyonlar"], popular: true },
        { name: "KURUMSAL", price: "249", desc: "Büyük ölçekli operasyonlar için tam çözüm.", features: ["Sınırsız Kullanıcı", "Özel Raporlama", "Dedicated Manager", "SLA Güvencesi"] }
    ];

    return (
        <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-500/10 blur-[120px] rounded-full"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-5xl font-black uppercase tracking-tighter mb-6">Şeffaf <span style={{ color: primaryColor }}>Fiyatlandırma</span></h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">İhtiyacınıza en uygun planı seçin, sürpriz maliyetlerle karşılaşmayın.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, i) => (
                        <div key={i} className={`p-8 rounded-[40px] border transition-all duration-500 hover:scale-105 ${plan.popular ? 'bg-white/10 backdrop-blur-xl border-white/20' : 'bg-transparent border-white/5'}`}>
                            {plan.popular && (
                                <div className="inline-block px-4 py-1 rounded-full text-[10px] font-black tracking-widest bg-white text-black mb-6">EN POPÜLER</div>
                            )}
                            <h3 className="text-xl font-black uppercase tracking-widest mb-2">{plan.name}</h3>
                            <div className="flex items-baseline gap-1 mb-6">
                                <span className="text-5xl font-black font-serif">$</span>
                                <span className="text-6xl font-black tracking-tighter">{plan.price}</span>
                                <span className="text-slate-400 font-bold">/AY</span>
                            </div>
                            <p className="text-sm text-slate-400 mb-8 leading-relaxed font-medium">{plan.desc}</p>
                            <ul className="space-y-4 mb-10">
                                {plan.features.map((f, j) => (
                                    <li key={j} className="flex items-center gap-3 text-sm font-bold text-slate-300">
                                        <Check size={16} style={{ color: primaryColor }} /> {f}
                                    </li>
                                ))}
                            </ul>
                            <button className="w-full py-5 rounded-2xl font-black uppercase tracking-widest transition-all" style={{ backgroundColor: plan.popular ? primaryColor : 'transparent', border: plan.popular ? 'none' : '1px solid rgba(255,255,255,0.1)' }}>
                                HEMEN BAŞLA
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing4;
