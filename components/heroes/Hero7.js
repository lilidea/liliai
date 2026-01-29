"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';
import { motion } from 'framer-motion';

const Hero7 = () => {
    const { siteData } = useSite();
    const { companyName, heroTitle, aboutText, primaryColor, secondaryColor } = siteData;

    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-white">
            {/* Animated Mesh Gradient Background */}
            <div className="absolute inset-0 z-0">
                <div
                    className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full opacity-30 mix-blend-multiply filter blur-[100px] animate-blob"
                    style={{ backgroundColor: primaryColor || '#E69419' }}
                ></div>
                <div
                    className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full opacity-30 mix-blend-multiply filter blur-[100px] animate-blob animation-delay-2000"
                    style={{ backgroundColor: secondaryColor || '#0073FF' }}
                ></div>
                <div
                    className="absolute bottom-[-10%] left-[20%] w-[50%] h-[50%] rounded-full opacity-30 mix-blend-multiply filter blur-[100px] animate-blob animation-delay-4000"
                    style={{ backgroundColor: '#FF00E5' }}
                ></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-5xl mx-auto">
                    <div className="bg-white/40 backdrop-blur-2xl border border-white/50 rounded-[40px] p-8 md:p-16 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.1)] text-center">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-block px-4 py-1.5 rounded-full bg-black/5 text-black/60 text-xs font-black uppercase tracking-[0.2em] mb-8"
                        >
                            {companyName || "LILIAI"} • EKSTREM TASARIM
                        </motion.span>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-8xl font-black text-gray-900 leading-[0.9] tracking-tighter mb-10"
                        >
                            {heroTitle || (
                                <>Dijital <br /> Deneyimin <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-500">Zirvesi</span></>
                            )}
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-gray-600 leading-relaxed mb-12 max-w-2xl mx-auto font-medium"
                        >
                            {aboutText || "Sıradanlıktan uzak, tamamen size özel ve teknolojiyle harmanlanmış şablonlarla tanışın."}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-col sm:flex-row items-center justify-center gap-4"
                        >
                            <button
                                className="w-full sm:w-auto px-12 py-5 rounded-2xl bg-gray-900 text-white font-black text-lg hover:bg-black transition-all shadow-2xl hover:-translate-y-1"
                            >
                                Hemen Başlayın
                            </button>
                            <button className="w-full sm:w-auto px-12 py-5 rounded-2xl bg-white text-gray-900 border border-gray-200 font-bold text-lg hover:bg-gray-50 transition-all">
                                Şablonları Gör
                            </button>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Sub-decorative elements */}
            <div className="absolute bottom-10 left-10 hidden lg:block">
                <div className="flex items-center gap-4 rotate-90 origin-left opacity-30">
                    <div className="w-12 h-px bg-black"></div>
                    <span className="text-[10px] font-black tracking-widest uppercase">SCROLL TO EXPLORE</span>
                </div>
            </div>
        </section>
    );
};

export default Hero7;
