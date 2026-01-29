"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';
import { motion } from 'framer-motion';

const Hero6 = () => {
    const { siteData } = useSite();
    const { companyName, heroTitle, aboutText, primaryColor } = siteData;

    return (
        <section className="min-h-screen flex flex-col md:flex-row bg-[#FDFCFB]">
            {/* Left Side: Content */}
            <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-24 lg:p-32">
                <div className="max-w-xl">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="w-12 h-1 bg-black mb-12"
                        style={{ backgroundColor: primaryColor }}
                    ></motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-6xl lg:text-8xl font-black text-black leading-[0.9] tracking-tighter mb-10"
                    >
                        {heroTitle || (
                            <>Minimalist <br /> Tasarım <br /> <span className="opacity-30">Maksimal</span> Etki</>
                        )}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-xl text-gray-500 leading-relaxed mb-12 font-medium"
                    >
                        {aboutText || "Sadelik en üst düzey gelişmişliktir. Markanızın özünü en saf haliyle yansıtıyoruz."}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="flex items-center gap-12"
                    >
                        <button className="text-lg font-black uppercase tracking-widest border-b-4 border-black pb-2 hover:opacity-50 transition-opacity">
                            Projelerimiz
                        </button>
                        <div className="text-gray-400 text-sm font-bold uppercase tracking-widest block md:hidden lg:block">
                            EST. 2024
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Right Side: Image */}
            <div className="w-full md:w-1/2 relative min-h-[50vh] md:min-h-screen overflow-hidden">
                <motion.div
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0"
                >
                    <img
                        src={siteData.heroImage || "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&q=80&w=1200"}
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                        alt="Hero Image"
                    />
                </motion.div>
                {/* Decorative Text */}
                <div className="absolute -bottom-10 -right-10 text-[20vw] font-black text-white/10 select-none whitespace-nowrap leading-none tracking-tighter">
                    {companyName || "LILIAI"}
                </div>
            </div>
        </section>
    );
};

export default Hero6;
