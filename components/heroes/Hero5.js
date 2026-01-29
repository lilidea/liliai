"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';

const Hero5 = () => {
    const { siteData } = useSite();
    const { companyName, heroTitle, aboutText, primaryColor, secondaryColor } = siteData;

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
                <img
                    src={siteData.heroImage || "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000"}
                    className="w-full h-full object-cover opacity-60"
                    alt="Hero BG"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black"></div>
            </div>

            {/* Dynamic Particles simulation or Blur shapes */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-blue-500/20 blur-[120px] animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-purple-500/20 blur-[120px] animate-pulse animation-delay-2000"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-bold mb-8"
                    >
                        <Sparkles size={16} className="text-yellow-400" />
                        <span>Yapay Zeka ile Güçlendirildi</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-6xl md:text-8xl font-black text-white leading-none tracking-tighter mb-8"
                    >
                        {heroTitle || (
                            <>Sınırları <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Yeniden</span> Tanımlayın</>
                        )}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-xl text-gray-300 leading-relaxed mb-12 max-w-2xl mx-auto"
                    >
                        {aboutText || "Modern teknoloji ve estetiğin mükemmel uyumuyla markanızı dijital dünyada zirveye taşıyoruz."}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-6"
                    >
                        <button
                            className="w-full sm:w-auto px-10 py-5 rounded-2xl text-white font-black text-lg transition-all hover:scale-105 shadow-[0_0_40px_rgba(0,0,0,0.3)]"
                            style={{ backgroundColor: primaryColor || '#0073FF' }}
                        >
                            Hemen Başla
                        </button>
                        <button className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center gap-2">
                            Detaylı Bilgi <ArrowRight size={20} />
                        </button>
                    </motion.div>
                </div>
            </div>

            {/* Bottom highlight */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        </section>
    );
};

export default Hero5;
