"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';
import { motion } from 'framer-motion';

const Header9 = () => {
    const { siteData } = useSite();
    const { companyName, primaryColor, secondaryColor } = siteData;

    return (
        <header className="p-10 flex flex-col items-center gap-12 bg-[#F6F6F6]">
            {/* Unique Vertical Stacked Logo */}
            <div className="flex flex-col items-center group cursor-pointer">
                {companyName?.split('').slice(0, 3).map((char, i) => (
                    <span
                        key={i}
                        className="text-4xl font-black leading-[0.7] tracking-tighter"
                        style={{ color: i === 1 ? (secondaryColor || '#E69419') : '#000' }}
                    >{char}</span>
                )) || <span className="text-4xl font-black">LIL</span>}
                <div
                    className="w-12 h-1 bg-black mt-2 group-hover:w-20 transition-all duration-500"
                    style={{ backgroundColor: primaryColor }}
                ></div>
            </div>

            <nav className="flex flex-wrap justify-center gap-4">
                {['Strateji', 'Tasarım', 'Geliştirme', 'Analiz', 'İletişim'].map((item, i) => (
                    <motion.a
                        whileHover={{ scale: 1.05, y: -2 }}
                        key={item}
                        href="#"
                        className={`px-8 py-3 rounded-2xl text-sm font-black uppercase tracking-widest transition-all ${i === 0 ? 'bg-black text-white shadow-xl' : 'bg-white text-gray-500 border border-gray-100'
                            }`}
                        style={i === 0 ? { backgroundColor: primaryColor } : {}}
                    >
                        {item}
                    </motion.a>
                ))}
            </nav>
        </header>
    );
};

export default Header9;
