"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';
import { motion, useScroll, useTransform } from 'framer-motion';

const About10 = () => {
    const { siteData } = useSite();
    const { primaryColor, aboutText, companyName } = siteData;

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="relative">
                    {/* Background Big Text */}
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-[0.03] select-none pointer-events-none">
                        <span className="text-[30vw] font-black uppercase">{companyName || "LILIAI"}</span>
                    </div>

                    <div className="relative z-10 flex flex-col lg:flex-row items-center gap-20">
                        <div className="lg:w-1/2">
                            <motion.div
                                initial={{ clipPath: 'inset(100% 0 0 0)' }}
                                whileInView={{ clipPath: 'inset(0% 0 0 0)' }}
                                transition={{ duration: 1 }}
                                className="rounded-t-[200px] rounded-b-3xl overflow-hidden shadow-2xl aspect-[4/5]"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1000"
                                    className="w-full h-full object-cover scale-110"
                                    alt="About"
                                />
                            </motion.div>
                        </div>

                        <div className="lg:w-1/2">
                            <h2 className="text-6xl md:text-8xl font-black text-gray-900 leading-[0.8] tracking-tighter mb-10">
                                GELECEĞİ <br /> <span style={{ color: primaryColor }}>İNSA EDİYORUZ.</span>
                            </h2>
                            <p className="text-xl text-gray-500 mb-12 font-medium leading-relaxed">
                                {aboutText || "Her proje bizim için yeni bir keşif. Tasarımın sınırlarını teknoloji ile birleştirerek sadece bugünü değil, yarını da kurguluyoruz. Sizinle birlikte büyümek için sabırsızlanıyoruz."}
                            </p>

                            <div className="flex gap-12 border-t border-gray-100 pt-10">
                                <div>
                                    <div className="text-3xl font-black tracking-tighter" style={{ color: primaryColor }}>100+</div>
                                    <div className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Küresel Partner</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-black tracking-tighter" style={{ color: primaryColor }}>15</div>
                                    <div className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Farklı Sektör</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About10;
