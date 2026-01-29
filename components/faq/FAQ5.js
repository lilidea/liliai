"use client";
import React, { useState } from 'react';
import { useSite } from '@/app/context/SiteContext';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ5 = () => {
    const { siteData } = useSite();
    const { primaryColor } = siteData;
    const [activeIndex, setActiveIndex] = useState(0);

    const faqs = [
        { q: "Sistem nasıl çalışıyor?", a: "Gelişmiş algoritmalarımız girdiğiniz verileri analiz ederek en uygun tasarımı oluşturur." },
        { q: "Ücret iadesi var mı?", a: "Memnun kalmazsanız 14 gün içinde koşulsuz iade talep edebilirsiniz." },
        { q: "Kod yazmam gerekiyor mu?", a: "Kesinlikle hayır! Her şey sürükle-bırak ve AI yardımıyla halledilir." },
        { q: "Güvenlik standartlarınız nedir?", a: "Tüm verileriniz uçtan uca şifrelenir ve güvenli sunucularda barındırılır." }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-20">
                    <div className="lg:w-1/3">
                        <div className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-300 mb-6">DESTEK MERKEZİ</div>
                        <h2 className="text-5xl md:text-7xl font-black text-gray-900 uppercase tracking-tighter mb-10 leading-none">Merak <br /> Edilenler.</h2>
                        <div className="w-20 h-2 bg-black" style={{ backgroundColor: primaryColor }}></div>
                    </div>

                    <div className="lg:w-2/3 space-y-4">
                        {faqs.map((faq, i) => (
                            <div key={i} className="border-b border-gray-100 last:border-0 overflow-hidden">
                                <button
                                    onClick={() => setActiveIndex(activeIndex === i ? -1 : i)}
                                    className="w-full py-8 flex items-center justify-between text-left group"
                                >
                                    <span className={`text-2xl font-black tracking-tight transition-colors ${activeIndex === i ? 'text-black' : 'text-gray-400 group-hover:text-black'}`}
                                        style={{ color: activeIndex === i ? primaryColor : undefined }}>
                                        {faq.q}
                                    </span>
                                    <ChevronDown size={24} className={`transition-transform duration-300 ${activeIndex === i ? 'rotate-180' : ''}`} />
                                </button>
                                <AnimatePresence>
                                    {activeIndex === i && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <p className="pb-8 text-lg font-medium text-gray-500 leading-relaxed max-w-2xl">
                                                {faq.a}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ5;
