"use client";
import React, { useState } from 'react';
import { useSite } from '@/app/context/SiteContext';
import { motion, AnimatePresence } from 'framer-motion';

const Menu6 = () => {
    const { siteData } = useSite();
    const { primaryColor } = siteData;
    const [activeTab, setActiveTab] = useState("SABAH");

    const menu = {
        "SABAH": ["Köy Kahvaltısı", "Menemen", "Yumurta", "Sıcak Poğaça"],
        "ÖĞLE": ["Günün Çorbası", "Ev Makarnası", "Köfte Tabağı", "Vegan Salata"],
        "AKŞAM": ["Antrikot", "Kuzu İncik", "Somon Izgara", "Osmanlı Sarma"]
    };

    return (
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-6 max-w-5xl">
                <div className="flex justify-center gap-4 mb-20 bg-white p-3 rounded-full shadow-sm w-fit mx-auto border border-slate-100">
                    {Object.keys(menu).map(tab => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-10 py-4 rounded-full text-xs font-black uppercase tracking-[0.2em] transition-all ${activeTab === tab ? 'text-white' : 'text-slate-400'}`}
                            style={{ backgroundColor: activeTab === tab ? primaryColor : 'transparent' }}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <AnimatePresence mode="wait">
                        {menu[activeTab].map((item, i) => (
                            <motion.div
                                key={activeTab + i}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white p-10 rounded-[40px] flex justify-between items-center shadow-sm border border-slate-100 italic"
                            >
                                <span className="text-xl font-black uppercase tracking-tighter">{item}</span>
                                <span className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center font-black">₺85</span>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default Menu6;
