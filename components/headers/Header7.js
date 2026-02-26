"use client";
import React, { useState, useEffect } from 'react';
import { useSite } from '@/app/context/SiteContext';
import { Instagram, Twitter, Linkedin, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header7 = () => {
    const { siteData } = useSite();
    const { companyName, primaryColor, pages } = siteData;
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = pages || ['Kurumsal', 'Halkla İlişkiler', 'Sanat', 'Vizyon'];

    return (
        <header className="sticky top-0 left-0 w-full z-[50] py-10 px-8 flex justify-between items-center transition-all">
            <div className="flex items-center gap-12">
                <div className="text-2xl font-black tracking-tighter uppercase whitespace-nowrap">
                    {companyName || "LILIAI"}
                    <span
                        className="inline-block w-2 h-2 rounded-full ml-1"
                        style={{ backgroundColor: primaryColor || '#E69419' }}
                    ></span>
                </div>

                <nav className="hidden xl:flex items-center gap-8">
                    {menuItems.map(item => (
                        <a key={item} href="#" className="text-[11px] font-black uppercase tracking-[0.3em] text-gray-400 hover:text-black transition-colors">{item}</a>
                    ))}
                </nav>
            </div>

            <div className="flex items-center gap-8">
                <div className="hidden md:flex items-center gap-6 text-gray-300">
                    <Instagram size={18} className="hover:text-black cursor-pointer transition" />
                    <Twitter size={18} className="hover:text-black cursor-pointer transition" />
                    <Linkedin size={18} className="hover:text-black cursor-pointer transition" />
                </div>

                <button
                    onClick={() => setIsOpen(true)}
                    className="p-4 rounded-full border border-gray-100 hover:bg-gray-50 transition shadow-sm"
                >
                    <Menu size={24} />
                </button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-xl flex items-center justify-center"
                    >
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-10 right-10 p-4 rounded-full bg-white/10 text-white hover:bg-white/20 transition"
                        >
                            <X size={32} />
                        </button>

                        <nav className="text-center flex flex-col gap-6">
                            {menuItems.map((item, idx) => (
                                <motion.a
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: idx * 0.1 }}
                                    key={item}
                                    href="#"
                                    className="text-5xl md:text-7xl font-black text-white hover:opacity-50 transition-all uppercase tracking-tighter"
                                >
                                    {item}
                                </motion.a>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header7;
