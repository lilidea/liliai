"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';
import { motion } from 'framer-motion';

const About7 = () => {
    const { siteData } = useSite();
    const { primaryColor, aboutText, companyName } = siteData;

    const images = [
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800"
    ];

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-20">
                    <div className="lg:w-1/2 grid grid-cols-2 gap-4">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            className="aspect-[3/4] rounded-[40px] overflow-hidden shadow-2xl"
                        >
                            <img src={images[0]} className="w-full h-full object-cover" alt="Team 1" />
                        </motion.div>
                        <div className="space-y-4">
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="aspect-square rounded-[40px] overflow-hidden shadow-2xl"
                            >
                                <img src={images[1]} className="w-full h-full object-cover" alt="Team 2" />
                            </motion.div>
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="aspect-square rounded-[40px] overflow-hidden shadow-2xl bg-black flex items-center justify-center p-8 text-white text-center"
                                style={{ backgroundColor: primaryColor }}
                            >
                                <div className="font-black italic text-2xl uppercase tracking-tighter">İşbirliği Gücümüzdür</div>
                            </motion.div>
                        </div>
                    </div>

                    <div className="lg:w-1/2">
                        <div className="w-20 h-2 bg-black mb-10" style={{ backgroundColor: primaryColor }}></div>
                        <h2 className="text-5xl md:text-7xl font-black text-gray-900 leading-[0.9] tracking-tighter mb-10">{siteData.generatedContent?.about?.title || "Biz Kimiz?"}</h2>
                        <div className="space-y-6 text-xl text-gray-600 leading-relaxed font-medium">
                            <p>
                                {siteData.generatedContent?.about?.text || aboutText || `${companyName}, alanında öncü, yenilikçi ve müşteri odaklı bir yapıya sahiptir. Sizin için sadece iş değil, deneyim üretiyoruz.`}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About7;
