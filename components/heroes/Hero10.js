"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';
import { motion } from 'framer-motion';
import { Search, Globe, Layout } from 'lucide-react';

const Hero10 = () => {
    const { siteData } = useSite();
    const { companyName, heroTitle, aboutText, primaryColor } = siteData;

    return (
        <section className="relative min-h-screen flex items-center justify-center pt-24 pb-20 bg-white">
            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:40px_40px] opacity-20"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-4xl mx-auto space-y-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex items-center justify-center gap-6 text-gray-400"
                    >
                        <div className="flex items-center gap-2">
                            <Globe size={18} />
                            <span className="text-xs font-black uppercase tracking-widest">Global Standartlar</span>
                        </div>
                        <div className="w-1 h-1 rounded-full bg-gray-300"></div>
                        <div className="flex items-center gap-2">
                            <Layout size={18} />
                            <span className="text-xs font-black uppercase tracking-widest">Modüler Tasarım</span>
                        </div>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-7xl md:text-[160px] font-black text-gray-900 leading-[0.8] tracking-tight"
                    >
                        {heroTitle || (
                            <>Gelecek <br /> <span className="text-transparent bg-clip-text bg-gradient-to-b from-gray-900 to-gray-400">Burada.</span></>
                        )}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-2xl text-gray-400 font-medium max-w-2xl mx-auto"
                    >
                        {aboutText || "Sınırsız özgürlük, sonsuz olasılık. Sizin için en iyi şablonu bugün seçin."}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="relative max-w-2xl mx-auto mt-16"
                    >
                        <div className="p-4 bg-white/40 backdrop-blur-xl border border-gray-100 rounded-[32px] shadow-2xl flex items-center gap-4">
                            <div className="flex-1 flex items-center gap-4 pl-4">
                                <Search className="text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Hangi sektörde hizmet veriyorsunuz?"
                                    className="w-full bg-transparent border-none focus:ring-0 text-lg font-bold text-gray-900 placeholder:text-gray-300"
                                />
                            </div>
                            <button
                                className="w-full sm:w-auto px-10 py-5 rounded-2xl text-white font-black text-lg transition-all hover:scale-105 shadow-[0_0_40px_rgba(0,0,0,0.3)]"
                                style={{ backgroundColor: primaryColor || '#0073FF' }}
                            >
                                Keşfe Başla
                            </button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="pt-20 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-40 grayscale"
                    >
                        {/* Placeholder logos */}
                        <div className="text-2xl font-black italic">LOGO 1</div>
                        <div className="text-2xl font-black italic">LOGO 2</div>
                        <div className="text-2xl font-black italic">LOGO 3</div>
                        <div className="text-2xl font-black italic">LOGO 4</div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero10;
