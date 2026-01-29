"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';
import { motion } from 'framer-motion';

const Hero9 = () => {
    const { siteData } = useSite();
    const { companyName, heroTitle, aboutText, primaryColor } = siteData;

    return (
        <section className="relative min-h-screen bg-white flex flex-col md:flex-row items-center overflow-hidden">
            {/* Left Padding for vertical text */}
            <div className="hidden lg:flex w-24 border-r border-gray-100 min-h-screen flex-col items-center justify-between py-12 text-gray-300">
                <span className="rotate-90 tracking-[0.5em] text-xs font-black uppercase whitespace-nowrap">CREATIVE SOLUTIONS</span>
                <span className="rotate-90 tracking-[0.5em] text-xs font-black uppercase whitespace-nowrap">{companyName || "LILIAI"}</span>
            </div>

            <div className="flex-1 container mx-auto px-6 py-20 flex flex-col lg:flex-row gap-12 items-center">
                <div className="lg:w-1/2">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block px-4 py-1.5 rounded-full bg-black/5 text-black/60 text-xs font-black uppercase tracking-[0.2em] mb-8"
                    >
                        {companyName || "LILIAI"} | EKSTREM TASARIM
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="text-7xl md:text-[120px] font-black text-gray-900 leading-[0.85] tracking-tighter mb-12"
                    >
                        {heroTitle || (
                            <>HAYAL <br />ET VE <br /><span style={{ color: primaryColor || '#E69419' }}>YAP.</span></>
                        )}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-2xl text-gray-500 font-serif italic mb-12"
                    >
                        {aboutText || "Tasarımın gücüyle markanızın hikayesini en etkileyici şekilde anlatıyoruz."}
                    </motion.p>

                    <button className="group relative px-8 py-4 bg-black text-white rounded-full overflow-hidden transition-all hover:pr-12">
                        <span className="relative z-10 font-black tracking-widest uppercase text-sm">Portfolyomuz</span>
                        <div
                            className="absolute right-[-20%] group-hover:right-4 top-1/2 -translate-y-1/2 transition-all opacity-0 group-hover:opacity-100"
                        >→</div>
                    </button>
                </div>

                <div className="lg:w-1/2 relative">
                    <motion.div
                        initial={{ clipPath: 'inset(100% 0 0 0)' }}
                        whileInView={{ clipPath: 'inset(0% 0 0 0)' }}
                        transition={{ duration: 1, ease: 'circOut' }}
                        className="aspect-square md:aspect-[4/5] w-full rounded-[60px] overflow-hidden"
                    >
                        <img
                            src={siteData.heroImage || "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&q=80&w=1000"}
                            className="w-full h-full object-cover scale-110 hover:scale-100 transition duration-1000"
                            alt="Artistic Hero"
                        />
                    </motion.div>

                    {/* Floating badge */}
                    <div className="absolute -top-6 -right-6 w-32 h-32 bg-yellow-400 rounded-full flex items-center justify-center rotate-12 animate-bounce shadow-xl">
                        <span className="text-black font-black text-center text-sm leading-tight">YENİ <br /> NESİL</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero9;
