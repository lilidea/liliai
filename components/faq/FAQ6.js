"use client";
import React, { useState } from 'react';
import { useSite } from '@/app/context/SiteContext';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ6 = () => {
    const { siteData } = useSite();
    const { primaryColor } = siteData;
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        { q: "Cloud entegrasyonu var mı?", a: "AWS, Google Cloud ve Azure ile tam uyumlu çalışıyoruz." },
        { q: "SEO performansı nasıl?", a: "Sitelerniz %100 SEO uyumlu ve Core Web Vitals üzerinden tam puan alacak şekilde yapılandırılır." },
        { q: "Daha sonra tema değiştirebilir miyim?", a: "Evet, tek tıkla tüm içeriğinizi farklı bir temaya taşıyabilirsiniz." }
    ];

    return (
        <section className="py-24 bg-black text-white">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-20">
                    <h2 className="text-5xl md:text-[100px] font-black uppercase tracking-tighter leading-none mb-10 opacity-10">ANSWERS</h2>
                    <h3 className="text-4xl font-black uppercase tracking-widest relative z-10 -mt-24">Sorularınız & <span style={{ color: primaryColor }}>Cevaplar</span></h3>
                </div>

                <div className="space-y-6">
                    {faqs.map((faq, i) => (
                        <div key={i} className="bg-neutral-900 rounded-[32px] overflow-hidden border border-white/5 transition hover:border-white/20">
                            <button
                                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                                className="w-full p-8 md:p-10 flex items-center justify-between text-left"
                            >
                                <span className="text-xl md:text-2xl font-black uppercase tracking-tighter">{faq.q}</span>
                                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 transition-colors"
                                    style={{ backgroundColor: activeIndex === i ? primaryColor : undefined }}>
                                    {activeIndex === i ? <Minus size={20} /> : <Plus size={20} />}
                                </div>
                            </button>
                            <AnimatePresence>
                                {activeIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                    >
                                        <div className="px-10 pb-10 text-neutral-500 font-medium text-lg leading-relaxed border-t border-white/5 pt-6 mx-10">
                                            {faq.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ6;
