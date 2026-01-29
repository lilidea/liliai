"use client";
import React, { useState } from 'react';
import { useSite } from '@/app/context/SiteContext';
import { motion, AnimatePresence } from 'framer-motion';

const About9 = () => {
    const { siteData } = useSite();
    const { primaryColor } = siteData;
    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        { title: "Misyon", content: "Teknoloji dünyasında sürdürülebilir ve ölçeklenebilir çözümler sunarak ekosistemi geliştirmek." },
        { title: "Vizyon", content: "Dijital dönüşümün her alanında parmakla gösterilen, yenilikçi ve güvenilir bir dünya markası olmak." },
        { title: "Değerler", content: "Şeffaflık, dürüstlük ve yaratıcılık bizim temel taşlarımızdır. Her adımda bu değerlerle hareket ederiz." }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6 max-w-5xl">
                <div className="bg-gray-50 rounded-[50px] overflow-hidden flex flex-col md:flex-row shadow-2xl border border-gray-100">
                    <div className="md:w-1/3 bg-gray-900 p-10 md:p-16 flex flex-col gap-4">
                        {tabs.map((tab, i) => (
                            <button
                                key={i}
                                onClick={() => setActiveTab(i)}
                                className={`text-left text-2xl font-black uppercase tracking-tighter transition-all ${activeTab === i ? 'text-white' : 'text-white/30 hover:text-white/50'
                                    }`}
                                style={{ color: activeTab === i ? primaryColor : undefined }}
                            >
                                {tab.title}
                            </button>
                        ))}
                    </div>

                    <div className="md:w-2/3 p-10 md:p-20 flex flex-col justify-center min-h-[400px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                            >
                                <h3 className="text-4xl font-black text-gray-900 mb-8 uppercase tracking-widest">{tabs[activeTab].title}</h3>
                                <p className="text-xl text-gray-500 leading-relaxed font-medium">
                                    {tabs[activeTab].content}
                                </p>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About9;
