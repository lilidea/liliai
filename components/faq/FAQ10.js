"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';
import { motion } from 'framer-motion';

const FAQ10 = () => {
    const { siteData } = useSite();
    const { primaryColor } = siteData;

    const faqs = [
        { q: "Domain Nasıl Alınır?", c: "Teknik" },
        { q: "Fatura İsteği", c: "Ödeme" },
        { q: "Şifremi Unuttum", c: "Hesap" },
        { q: "Yapay Zeka Limiti", c: "Genel" },
        { q: "Çoklu Dil Desteği", c: "Özellikler" },
        { q: "Ekip Yönetimi", c: "Hesap" }
    ];

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mx-auto text-center mb-20">
                    <h2 className="text-5xl font-black uppercase tracking-tighter mb-8 italic">Sıkça <span style={{ color: primaryColor }}>Sorulanlar</span></h2>
                    <p className="text-gray-400 font-medium">İstediğiniz kategoriyi seçerek hızlıca bilgi alabilirsiniz.</p>
                </div>

                <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
                    {faqs.map((faq, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="bg-gray-50 p-8 rounded-[40px] border border-gray-100 cursor-pointer hover:shadow-2xl hover:bg-white transition-all w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.33%-1.5rem)]"
                        >
                            <div className="text-[10px] font-black uppercase tracking-[0.2em] mb-4 py-1 px-3 bg-white rounded-full inline-block border border-gray-100" style={{ color: primaryColor }}>
                                {faq.c}
                            </div>
                            <h4 className="text-lg font-black text-gray-900 leading-tight">{faq.q}</h4>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-24 text-center">
                    <div className="text-sm font-bold text-gray-300 uppercase tracking-widest mb-6">Daha fazla sorunuz mu var?</div>
                    <button className="px-12 py-5 rounded-full bg-black text-white font-black uppercase tracking-widest text-xs hover:shadow-2xl transition" style={{ backgroundColor: primaryColor }}>
                        Bize Yazın
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FAQ10;
