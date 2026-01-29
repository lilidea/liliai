"use client";
import React, { useState } from 'react';
import { useSite } from '@/app/context/SiteContext';
import { motion, AnimatePresence } from 'framer-motion';

const Contact9 = () => {
    const { siteData } = useSite();
    const { primaryColor } = siteData;
    const [activeTab, setActiveTab] = useState(0);

    const types = [
        { title: "İş Birliği", desc: "Yeni projeler için bize yazın." },
        { title: "Kariyer", desc: "Ekibimize katılmak ister misiniz?" },
        { title: "Destek", desc: "Yardıma mı ihtiyacınız var?" }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="flex flex-col lg:flex-row gap-12 bg-gray-50 rounded-[48px] overflow-hidden border border-gray-100 p-8 md:p-12">
                    <div className="lg:w-1/3 flex flex-col gap-4">
                        {types.map((type, i) => (
                            <button
                                key={i}
                                onClick={() => setActiveTab(i)}
                                className={`text-left p-8 rounded-3xl transition-all ${activeTab === i ? 'bg-white shadow-xl' : 'hover:bg-gray-100'
                                    }`}
                            >
                                <div className="text-[10px] font-black uppercase tracking-widest text-gray-300 mb-2">BÖLÜM 0{i + 1}</div>
                                <div className="text-2xl font-black text-gray-900 mb-1" style={{ color: activeTab === i ? primaryColor : undefined }}>{type.title}</div>
                                <div className="text-sm font-medium text-gray-400">{type.desc}</div>
                            </button>
                        ))}
                    </div>

                    <div className="lg:w-2/3 bg-white rounded-[32px] p-10 md:p-16 shadow-inner">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.2 }}
                            >
                                <h3 className="text-3xl font-black text-gray-900 mb-10 uppercase tracking-tighter">
                                    {types[activeTab].title} Formu
                                </h3>

                                <form className="space-y-8">
                                    <div className="grid md:grid-cols-2 gap-8">
                                        <div className="space-y-2">
                                            <input type="text" placeholder="Adınız" className="w-full py-4 border-b-2 border-gray-50 focus:border-black transition-colors outline-none font-bold text-gray-900" />
                                        </div>
                                        <div className="space-y-2">
                                            <input type="email" placeholder="E-posta" className="w-full py-4 border-b-2 border-gray-50 focus:border-black transition-colors outline-none font-bold text-gray-900" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <textarea rows="4" placeholder="Mesajınız nedir?" className="w-full py-4 border-b-2 border-gray-50 focus:border-black transition-colors outline-none font-bold text-gray-900 resize-none"></textarea>
                                    </div>
                                    <button className="px-10 py-5 rounded-2xl bg-black text-white font-black uppercase tracking-widest text-xs hover:opacity-80 transition" style={{ backgroundColor: primaryColor }}>
                                        GÖNDERİN
                                    </button>
                                </form>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact9;
