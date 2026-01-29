"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';
import { Clock, Tag, ChevronRight } from 'lucide-react';

const Services9 = () => {
    const { siteData } = useSite();
    const { primaryColor } = siteData;

    const items = [
        { title: "Landing Page", price: "2.500₺+", time: "3 İş Günü", desc: "Hızlı, etkileyici ve dönüşüm odaklı tek sayfalık web tasarımları." },
        { title: "E-Ticaret", price: "7.500₺+", time: "10 İş Günü", desc: "Sınır tanımayan satış kapasitesi ve gelişmiş yönetim paneli." },
        { title: "Kurumsal Web", price: "5.000₺+", time: "7 İş Günü", desc: "Şirketinizin prestijini yansıtan profesyonel kurumsal çözümler." }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6 max-w-5xl">
                <div className="text-center mb-24">
                    <h2 className="text-5xl font-black uppercase tracking-tighter mb-8 italic">Paketler & <span style={{ color: primaryColor }}>Hizmetler</span></h2>
                    <p className="text-gray-400 font-medium">Şeffaf fiyatlandırma ve net teslim süreleriyle çalışıyoruz.</p>
                </div>

                <div className="space-y-6">
                    {items.map((item, i) => (
                        <div key={i} className="p-8 md:p-12 rounded-[40px] border border-gray-100 bg-gray-50 flex flex-col md:flex-row justify-between items-start md:items-center gap-10 hover:shadow-2xl hover:bg-white transition-all group">
                            <div className="flex-1">
                                <h4 className="text-3xl font-black text-gray-900 mb-4 tracking-tighter uppercase">{item.title}</h4>
                                <p className="text-gray-500 font-medium leading-relaxed max-w-md">{item.desc}</p>
                            </div>

                            <div className="flex flex-wrap gap-8 items-center">
                                <div className="flex items-center gap-3">
                                    <Tag className="text-gray-300" size={20} />
                                    <span className="font-black text-gray-900">{item.price}</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Clock className="text-gray-300" size={20} />
                                    <span className="font-black text-gray-900">{item.time}</span>
                                </div>
                                <button className="w-14 h-14 rounded-full bg-black text-white flex items-center justify-center group-hover:scale-110 transition" style={{ backgroundColor: primaryColor }}>
                                    <ChevronRight size={24} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services9;
