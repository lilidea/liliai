"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';
import { HelpCircle, FileText, Settings, Shield } from 'lucide-react';

const Contact10 = () => {
    const { siteData } = useSite();
    const { primaryColor } = siteData;

    const categories = [
        { icon: HelpCircle, title: "Genel Sorular", desc: "Ürün ve hizmetlerimiz hakkında merak ettikleriniz." },
        { icon: Settings, title: "Teknik Destek", desc: "Kurulum ve kullanım hataları için yanınızdayız." },
        { icon: FileText, title: "Fatura & Ödeme", desc: "Ödeme süreçleri ve fatura talepleriniz." },
        { icon: Shield, title: "Güvenlik", desc: "Veri gizliliği ve güvenlik sorularınız." }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6 text-center">
                <div className="max-w-2xl mx-auto mb-20">
                    <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-8 uppercase tracking-tighter">Yardım Merkezi</h2>
                    <p className="text-xl text-gray-500 font-medium leading-relaxed">Size nasıl yardımcı olabiliriz? Kategorilerden birini seçin veya doğrudan bizimle iletişime geçin.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                    {categories.map((cat, i) => (
                        <div key={i} className="p-10 rounded-[40px] border border-gray-100 hover:border-black transition group cursor-pointer">
                            <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition" style={{ color: primaryColor }}>
                                <cat.icon size={24} />
                            </div>
                            <h4 className="text-lg font-black text-gray-900 mb-4">{cat.title}</h4>
                            <p className="text-sm text-gray-400 font-medium leading-relaxed">{cat.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="bg-gray-900 rounded-[60px] p-10 md:p-20 text-white flex flex-col md:flex-row items-center justify-between gap-10">
                    <div className="text-left">
                        <h3 className="text-3xl font-black uppercase tracking-tighter mb-4">Aradığınızı bulamadınız mı?</h3>
                        <p className="text-white/40 font-medium">Bize bir bilet (ticket) bırakın, ekibimiz hemen dönsün.</p>
                    </div>
                    <button className="px-12 py-6 rounded-3xl bg-white text-black font-black uppercase tracking-widest text-sm hover:scale-105 transition shadow-2xl">
                        BİLET OLUŞTURUN
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Contact10;
