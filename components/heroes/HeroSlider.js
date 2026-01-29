"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1600",
        title: "İşinizi Geleceğe Taşıyın",
        subtitle: "Modern çözümler ve yenilikçi stratejilerle markanızı büyütüyoruz."
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1600",
        title: "Profesyonel Ekip",
        subtitle: "Alanında uzman kadromuzla projelerinizi hayata geçiriyoruz."
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1600",
        title: "Yaratıcı Tasarımlar",
        subtitle: "Estetik ve fonksiyonelliği birleştiren özgün tasarımlar."
    }
];
import { useSite } from '@/app/context/SiteContext';

export default function HeroSlider() {
    const { siteData } = useSite();
    const { primaryColor } = siteData;
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

    return (
        <div className="relative h-[600px] w-full overflow-hidden bg-gray-900 text-white">
            {/* Slides */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={current}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0"
                >
                    <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-[6000ms] ease-out scale-105"
                        style={{ backgroundImage: `url(${slides[current].image})` }}
                    />
                    <div className="absolute inset-0 bg-black/50" /> {/* Overlay */}
                </motion.div>
            </AnimatePresence>

            {/* Content */}
            <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={current}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="max-w-3xl"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                            {slides[current].title}
                        </h1>
                        <p className="text-lg md:text-2xl text-gray-200 mb-8 max-w-2xl">
                            {slides[current].subtitle}
                        </p>
                        <button
                            className="hover:opacity-90 text-white px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center gap-2 group"
                            style={{ backgroundColor: primaryColor || '#E69419' }}
                        >
                            Keşfetmeye Başla
                            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="absolute bottom-8 right-8 flex gap-4 z-20">
                <button
                    onClick={prevSlide}
                    className="p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition text-white border border-white/20"
                >
                    <ChevronLeft size={24} />
                </button>
                <button
                    onClick={nextSlide}
                    className="p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition text-white border border-white/20"
                >
                    <ChevronRight size={24} />
                </button>
            </div>

            {/* Indicators */}
            <div className="absolute bottom-8 left-8 flex gap-2 z-20">
                {slides.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrent(idx)}
                        className={`h-1.5 rounded-full transition-all ${current === idx ? 'w-8' : 'w-2 bg-white/40 hover:bg-white/60'
                            }`}
                        style={{ backgroundColor: current === idx ? (primaryColor || '#E69419') : undefined }}
                    />
                ))}
            </div>
        </div>
    );
}
