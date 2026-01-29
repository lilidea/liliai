"use client";
import React, { useState } from 'react';
import { useSite } from '@/app/context/SiteContext';
import { motion, AnimatePresence } from 'framer-motion';

const Services7 = () => {
    const { siteData } = useSite();
    const { primaryColor } = siteData;
    const [active, setActive] = useState(0);

    const tabs = [
        { title: "Yazılım", desc: "Enterprise seviyesinde, ölçeklenebilir ve güvenli yazılım mimarileri kuruyoruz. Bulut tabanlı çözümlerle işinizi geleceğe hazırlıyoruz." },
        { title: "Danışmanlık", desc: "Dijital dönüşüm yolculuğunuzda size rehberlik ediyor, doğru teknolojileri doğru bütçelerle kullanmanızı sağlıyoruz." },
        { title: "Bakım", desc: "7/24 izleme ve teknik destek ile sistemlerinizin her zaman ayakta kalmasını, güncel ve güvenli olmasını garanti altına alıyoruz." }
    ];

    return (
        <section className="py-24 bg-neutral-900 text-white">
            <div className="container mx-auto px-6 max-w-5xl">
                <div className="flex flex-wrap gap-4 mb-20 justify-center">
                    {tabs.map((tab, i) => (
                        <button
                            key={i}
                            onClick={() => setActive(i)}
                            className={`px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs transition-all ${active === i ? 'bg-white text-black shadow-[0_0_50px_rgba(255,255,255,0.1)]' : 'bg-white/5 text-white/30 hover:bg-white/10'
                                }`}
                            style={active === i ? { color: primaryColor } : {}}
                        >
                            {tab.title}
                        </button>
                    ))}
                </div>

                <div className="bg-white/5 border border-white/10 rounded-[60px] p-12 md:p-24 relative overflow-hidden">
                    {/* Background Decor */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[100px] pointer-events-none"></div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={active}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="text-sm font-black uppercase tracking-[0.5em] mb-10" style={{ color: primaryColor }}>DETAYLI İNCELEME</div>
                            <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-10 leading-none">{tabs[active].title}</h2>
                            <p className="text-2xl text-white/50 font-medium leading-relaxed max-w-3xl">
                                {tabs[active].desc}
                            </p>
                            <div className="mt-16 w-24 h-2 rounded-full" style={{ backgroundColor: primaryColor }}></div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default Services7;
