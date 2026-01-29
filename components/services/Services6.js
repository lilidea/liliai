"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';
import { motion } from 'framer-motion';

const Services6 = () => {
    const { siteData } = useSite();
    const { primaryColor } = siteData;

    const items = [
        { label: "Analiz" }, { label: "Kurgu" }, { label: "İnovasyon" },
        { label: "Gelişim" }, { label: "Destek" }, { label: "Sürdürülebilirlik" }
    ];

    return (
        <section className="py-32 bg-white text-center overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mx-auto mb-24">
                    <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-8">Döngüsel <br /> <span style={{ color: primaryColor }}>Yaklaşım.</span></h2>
                    <p className="text-gray-400 font-medium">Süreçlerimizi her zaman mükemmelliğe odaklı bir döngü içinde yönetiyoruz.</p>
                </div>

                <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
                    {items.map((item, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            className="w-48 h-48 rounded-full border-2 border-gray-100 flex items-center justify-center p-8 hover:bg-gray-900 group transition-all shadow-sm"
                        >
                            <div className="flex flex-col items-center">
                                <span className="text-xs font-black opacity-20 mb-2 group-hover:text-white" style={{ color: primaryColor }}>0{i + 1}</span>
                                <h4 className="text-lg font-black uppercase text-gray-900 group-hover:text-white transition-colors">{item.label}</h4>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services6;
