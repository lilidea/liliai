"use client";
import React, { useState } from 'react';
import { useSite } from '@/app/context/SiteContext';
import { Search, ArrowRight } from 'lucide-react';

const FAQ7 = () => {
    const { siteData } = useSite();
    const { primaryColor } = siteData;
    const [searchTerm, setSearchTerm] = useState("");

    const faqs = [
        { q: "Hosting pakete dahil mi?", a: "Evet, tüm paketlerimizde yüksek performanslı bulut hosting fiyata dahildir." },
        { q: "Kendi tasarımlarımı yükleyebilir miyim?", a: "Figma ve Adobe XD projelerinizi sisteme import edebilirsiniz." },
        { q: "E-posta hesabı açabilir miyim?", a: "Profesyonel iş e-postaları ücretsiz olarak pakete dahildir." },
        { q: "Yapay zeka nasıl içerik üretiyor?", a: "Sektörünüzü ve vizyonunuzu analiz ederek size özel metin ve görseller oluşturur." }
    ];

    const filtered = faqs.filter(f => f.q.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-black uppercase tracking-tighter mb-8">Neyi Merak Ediyorsunuz?</h2>
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Anahtar kelime ile arayın..."
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full bg-gray-50 border-none rounded-3xl py-6 pl-14 pr-6 font-bold text-gray-900 focus:ring-2 focus:ring-black/5"
                        />
                        <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-300" size={24} />
                    </div>
                </div>

                <div className="space-y-4">
                    {filtered.map((faq, i) => (
                        <div key={i} className="p-8 rounded-3xl bg-gray-50 border border-transparent hover:border-gray-200 transition group flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                            <div className="flex-1">
                                <h4 className="text-xl font-black text-gray-900 mb-2">{faq.q}</h4>
                                <p className="text-gray-500 font-medium">{faq.a}</p>
                            </div>
                            <button className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:bg-black group-hover:text-white transition-all transform group-hover:rotate-45" style={{ color: primaryColor }}>
                                <ArrowRight size={20} />
                            </button>
                        </div>
                    ))}
                    {filtered.length === 0 && <div className="text-center py-20 text-gray-300 font-bold">Maalesef bir sonuç bulunamadı.</div>}
                </div>
            </div>
        </section>
    );
};

export default FAQ7;
