"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';
import { Instagram, Twitter, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const Team4 = () => {
    const { siteData } = useSite();
    const { primaryColor } = siteData;

    const team = [
        { name: "Selin Yılmaz", role: "Art Director", img: "https://i.pravatar.cc/300?u=selin" },
        { name: "Can Demir", role: "Lead Dev", img: "https://i.pravatar.cc/300?u=can" },
        { name: "Elif Ak", role: "UX Designer", img: "https://i.pravatar.cc/300?u=elif" },
        { name: "Murat Öz", role: "Growth", img: "https://i.pravatar.cc/300?u=murat" }
    ];

    return (
        <section className="py-24 bg-white text-center">
            <div className="container mx-auto px-6">
                <div className="max-w-2xl mx-auto mb-24">
                    <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 italic">Ekibimizle <span style={{ color: primaryColor }}>Tanışın</span></h2>
                    <p className="text-gray-400 font-medium whitespace-nowrap">Vizyonumuzu gerçeğe dönüştüren yaratıcı zihinler.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16">
                    {team.map((member, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -20 }}
                            className="flex flex-col items-center group"
                        >
                            <div className="relative mb-10">
                                <div className="absolute inset-0 rounded-full bg-black/5 group-hover:scale-110 transition-transform duration-500"></div>
                                <img src={member.img} className="w-48 h-48 rounded-full border-8 border-white shadow-2xl relative z-10 transition-all group-hover:grayscale-0 grayscale" alt={member.name} />
                                <div className="absolute -bottom-4 -right-4 w-12 h-12 rounded-full bg-black text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform" style={{ backgroundColor: primaryColor }}>
                                    <Linkedin size={20} />
                                </div>
                            </div>
                            <h4 className="text-2xl font-black text-gray-900 mb-2 uppercase tracking-tight">{member.name}</h4>
                            <div className="text-xs font-black uppercase tracking-[0.3em] text-gray-300 group-hover:text-black transition-colors">{member.role}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team4;
