"use client";
import React, { useState } from 'react';
import { useSite } from '@/app/context/SiteContext';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ9 = () => {
    const { siteData } = useSite();
    const { primaryColor } = siteData;
    const [openIdx, setOpenIdx] = useState(0);

    const faqs = [
        { q: "Bütün dilleri destekliyor mu?", a: "Yapay zekamız 100'den fazla dilde profesyonel içerik üretme kapasitesine sahiptir." },
        { q: "Görseller telifsiz mi?", a: "Üretilen tüm görseller ve Unsplash entegrasyonu tamamen ticari kullanıma uygundur." },
        { q: "Mobil uygulama yapılacak mı?", a: "Çok yakında App Store ve Play Store üzerinden mobil yönetim panelimizi yayınlayacağız." }
    ];

    return (
        <section className="py-24 bg-gray-900 text-white overflow-hidden">
            <div className="container mx-auto px-6 flex flex-col lg:flex-row gap-20">
                <div className="lg:w-1/2">
                    <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.8] mb-12">Bilgi <br /> <span style={{ color: primaryColor }}>Tabanı.</span></h2>
                    <p className="text-xl text-white/30 font-medium max-w-sm mb-12">En çok sorulan soruların yanıtlarını burada topladık.</p>
                    <button className="px-10 py-5 rounded-full border border-white/10 font-bold uppercase text-xs tracking-widest hover:bg-white hover:text-black transition-all">Tümünü İncele</button>
                </div>

                <div className="lg:w-1/2 space-y-6">
                    {faqs.map((faq, i) => (
                        <div key={i} className="relative group">
                            <button
                                onClick={() => setOpenIdx(openIdx === i ? -1 : i)}
                                className="w-full py-10 flex items-center gap-10 text-left"
                            >
                                <span className="text-4xl font-black italic opacity-10 group-hover:opacity-100 transition-opacity" style={{ color: openIdx === i ? primaryColor : undefined }}>
                                    {String(i + 1).padStart(2, '0')}
                                </span>
                                <span className="text-2xl font-black tracking-tighter uppercase">{faq.q}</span>
                            </button>
                            <AnimatePresence>
                                {openIdx === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="pb-10 pl-24 text-lg text-white/50 font-medium leading-relaxed pr-10">
                                            {faq.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                            <div className="absolute bottom-0 left-0 w-full h-px bg-white/5"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ9;
