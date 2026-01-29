"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

const Hero8 = () => {
    const { siteData } = useSite();
    const { companyName, heroTitle, aboutText, primaryColor } = siteData;

    return (
        <section className="relative min-h-screen py-24 flex items-center bg-gray-50 overflow-hidden">
            <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

                {/* Left: Content */}
                <div className="order-2 lg:order-1">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-3 mb-6"
                    >
                        <span className="w-10 h-10 rounded-xl bg-green-500/10 text-green-600 flex items-center justify-center">
                            <ShieldCheck size={20} />
                        </span>
                        <span className="text-sm font-bold text-gray-500 uppercase tracking-widest">Güvenilir ve Hızlı Altyapı</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-black text-gray-900 leading-[1.1] mb-8"
                    >
                        {heroTitle || (
                            <>İşinizi <span style={{ color: primaryColor || '#0073FF' }}>Büyütmek</span> İçin En Doğru Yer</>
                        )}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-500 leading-relaxed mb-10 max-w-lg"
                    >
                        {aboutText || "Karmaşık süreçleri basit, hızlı ve etkili hale getiriyoruz. Tasarım harikası şablonlarımızla fark yaratın."}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="space-y-4 mb-10"
                    >
                        {[
                            { icon: CheckCircle2, text: "Yüksek performanslı altyapı", color: "text-green-500" },
                            { icon: Zap, text: "Saniyeler içinde kurulum", color: "text-orange-500" }
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3 text-gray-700 font-bold">
                                <item.icon size={20} className={item.color} />
                                <span>{item.text}</span>
                            </div>
                        ))}
                    </motion.div>

                    <div className="flex flex-wrap gap-4">
                        <button
                            className="px-10 py-5 rounded-2xl text-white font-black text-lg transition-all hover:scale-105 shadow-xl shadow-blue-500/20"
                            style={{ backgroundColor: primaryColor || '#0073FF' }}
                        >
                            Ücretsiz Dene
                        </button>
                    </div>
                </div>

                {/* Right: Abstract UI Elements / Device like */}
                <div className="order-1 lg:order-2 relative h-[500px] md:h-[600px]">
                    <motion.div
                        initial={{ rotate: -10, y: 50, opacity: 0 }}
                        animate={{ rotate: -5, y: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="absolute inset-0 bg-white rounded-[40px] shadow-2xl border border-gray-100 overflow-hidden"
                    >
                        <div className="h-full w-full bg-gradient-to-br from-gray-50 to-white p-4">
                            <div className="w-full h-8 bg-gray-100 rounded-full mb-8"></div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="h-40 bg-blue-500/10 rounded-2xl animate-pulse"></div>
                                <div className="h-40 bg-purple-500/10 rounded-2xl animate-pulse animation-delay-1000"></div>
                                <div className="h-64 col-span-2 bg-gray-100 rounded-2xl animate-pulse animation-delay-2000"></div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Floating Cards */}
                    <motion.div
                        animate={{ y: [0, -20, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-10 -right-6 w-56 p-6 bg-white rounded-3xl shadow-2xl z-20 border border-gray-50"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-full bg-blue-500"></div>
                            <div className="space-y-1">
                                <div className="w-20 h-2 bg-gray-200 rounded-full"></div>
                                <div className="w-12 h-2 bg-gray-100 rounded-full"></div>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="w-full h-2 bg-gray-50 rounded-full"></div>
                            <div className="w-full h-2 bg-gray-50 rounded-full"></div>
                        </div>
                    </motion.div>

                    <motion.div
                        animate={{ y: [0, 20, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute -bottom-10 -left-6 w-48 p-6 bg-gray-900 rounded-3xl shadow-2xl z-20"
                    >
                        <div className="w-12 h-12 bg-white/20 rounded-2xl mb-4 flex items-center justify-center">
                            <Zap className="text-white" />
                        </div>
                        <div className="text-white font-black text-2xl">99.9%</div>
                        <div className="text-gray-400 text-xs font-bold uppercase tracking-widest">Uptime Rate</div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default Hero8;
