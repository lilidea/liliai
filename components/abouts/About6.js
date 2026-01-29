"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';
import { motion } from 'framer-motion';

const About6 = () => {
    const { siteData } = useSite();
    const { primaryColor } = siteData;

    const timeline = [
        { year: "2010", title: "Kuruluş", desc: "Mütevazı bir garajda üç kişilik bir ekiple yolculuğumuz başladı." },
        { year: "2015", title: "Büyüme", desc: "İlk uluslararası ofisimizi açtık ve çalışan sayımızı 50'ye çıkardık." },
        { year: "2020", title: "Yenilik", desc: "Yapay zeka tabanlı yeni ürün mimarimizi tüm dünyaya duyurduk." },
        { year: "2024", title: "Liderlik", desc: "Sektörün en çok tercih edilen dijital çözüm ortağı haline geldik." }
    ];

    return (
        <section className="py-24 bg-neutral-900 text-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Yolculuğumuz</h2>
                </div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 hidden md:block"></div>

                    <div className="space-y-12">
                        {timeline.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className={`flex flex-col md:flex-row items-center gap-8 md:gap-20 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                            >
                                <div className={`flex-1 ${i % 2 === 0 ? 'text-right' : 'text-left'} hidden md:block`}>
                                    <div className="text-6xl font-black opacity-10" style={{ color: primaryColor }}>{item.year}</div>
                                </div>

                                <div className="relative z-10 w-4 h-4 rounded-full bg-white border-4" style={{ borderColor: primaryColor }}></div>

                                <div className="flex-1 bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10">
                                    <div className="text-sm font-black uppercase tracking-widest mb-2" style={{ color: primaryColor }}>{item.year}</div>
                                    <h4 className="text-2xl font-bold mb-3">{item.title}</h4>
                                    <p className="text-neutral-400 leading-relaxed">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About6;
