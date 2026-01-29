"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';

const FAQ8 = () => {
    const { siteData } = useSite();
    const { primaryColor } = siteData;

    const faqs = [
        { q: "Kullanım sınırları neler?", a: "Sınırsız sayfa ve sınırsız trafik ile projelerinizi özgürce yayınlayabilirsiniz." },
        { q: "Ekip arkadaşı ekleyebilir miyim?", a: "Evet, panel üzerinden ekip arkadaşlarınızı davet ederek yetkilendirme yapabilirsiniz." },
        { q: "API desteği var mı?", a: "Tüm sistemimiz Restful API mimarisi üzerine kuruludur ve dış entegrasyonlara açıktır." }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6 max-w-2xl">
                <div className="text-left mb-16 px-4">
                    <h2 className="text-4xl font-black uppercase tracking-tighter mb-4">Soru & <span style={{ color: primaryColor }}>Yanıt</span></h2>
                    <div className="w-12 h-1 bg-black" style={{ backgroundColor: primaryColor }}></div>
                </div>

                <div className="space-y-12">
                    {faqs.map((faq, i) => (
                        <div key={i} className="group cursor-default">
                            <h4 className="text-2xl font-black text-gray-900 mb-4 tracking-tight group-hover:opacity-50 transition-opacity flex items-center gap-4">
                                <span className="text-xs opacity-20">0{i + 1}</span>
                                {faq.q}
                            </h4>
                            <p className="text-gray-500 font-medium leading-relaxed border-l-2 border-gray-50 pl-6 group-hover:border-black transition-colors">
                                {faq.a}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ8;
