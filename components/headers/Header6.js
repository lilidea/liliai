"use client";
import React, { useState, useEffect } from 'react';
import { useSite } from '@/app/context/SiteContext';
import { Menu, X, Search, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header6 = () => {
    const { siteData } = useSite();
    const { companyName, primaryColor, pages } = siteData;
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const menuItems = pages || ['Kurumsal', 'Hizmetler', 'Projeler', 'Blog', 'İletişim'];

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'py-3' : 'py-6'
                }`}
        >
            <div className="container mx-auto px-6">
                <div className={`relative flex items-center justify-between transition-all duration-500 rounded-3xl px-6 py-3 ${isScrolled
                    ? 'bg-white/80 backdrop-blur-xl shadow-2xl border border-white/20'
                    : 'bg-transparent'
                    }`}>
                    {/* Left: Nav */}
                    <nav className="hidden lg:flex items-center gap-8">
                        {menuItems.slice(0, 2).map(item => (
                            <a key={item} href="#" className={`text-sm font-bold uppercase tracking-wider hover:opacity-100 transition-opacity ${isScrolled ? 'text-gray-900' : 'text-white'
                                } opacity-70`}>{item}</a>
                        ))}
                    </nav>

                    {/* Center: Logo */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-3">
                        <div
                            className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg rotate-3 hover:rotate-0 transition-transform cursor-pointer"
                            style={{ backgroundColor: primaryColor || '#E69419' }}
                        >
                            {companyName ? companyName.substring(0, 1) : "L"}
                        </div>
                        <span className={`text-xl font-black tracking-tighter hidden md:block ${isScrolled ? 'text-gray-900' : 'text-white'
                            }`}>
                            {companyName || "lil.ai"}
                        </span>
                    </div>

                    {/* Right: Actions */}
                    <div className="flex items-center gap-6">
                        <nav className="hidden lg:flex items-center gap-8 mr-6">
                            {menuItems.slice(2, 4).map(item => (
                                <a key={item} href="#" className={`text-sm font-bold uppercase tracking-wider hover:opacity-100 transition-opacity ${isScrolled ? 'text-gray-900' : 'text-white'
                                    } opacity-70`}>{item}</a>
                            ))}
                        </nav>
                        <div className="flex items-center gap-4">
                            <button className={`${isScrolled ? 'text-gray-900' : 'text-white'} hover:opacity-70 transition`}>
                                <Search size={20} />
                            </button>
                            <button className={`${isScrolled ? 'text-gray-900' : 'text-white'} lg:hidden`} onClick={() => setIsMobileMenuOpen(true)}>
                                <Menu size={24} />
                            </button>
                            <button
                                className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition-all hover:scale-105 active:scale-95"
                                style={{
                                    backgroundColor: primaryColor || '#E69419',
                                    color: '#fff'
                                }}
                            >
                                <User size={16} />
                                Panel
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        className="fixed inset-0 z-[60] bg-white p-8 flex flex-col"
                    >
                        <div className="flex justify-between items-center mb-12">
                            <span className="text-2xl font-black text-[#E69419]">{companyName}</span>
                            <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 hover:bg-neutral-100 rounded-full">
                                <X size={32} />
                            </button>
                        </div>
                        <nav className="flex flex-col gap-6">
                            {menuItems.map((item, idx) => (
                                <motion.a
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    key={item}
                                    href="#"
                                    className="text-4xl font-black text-gray-900 hover:text-[#E69419] transition-colors"
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

export default Header6;
