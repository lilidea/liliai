"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';
import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const Testimonials3 = () => {
    const { siteData } = useSite();
    const { primaryColor } = siteData;

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6 relative">
                <Quote className="absolute top-0 left-0 text-slate-100 -translate-x-12 -translate-y-12" size={300} />

                <div className="relative z-10 max-w-4xl mx-auto">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-tight mb-12 italic"
                    >
                        "Sizinle çalışmak, işimizin <span style={{ color: primaryColor }}>dijital dönüşümünde</span> attığımız en doğru adımdı. Profesyonellik ve hız tek kelimeyle harika."
                    </motion.p>

                    <div className="flex items-center gap-6">
                        <img src="https://i.pravatar.cc/100?u=single1" className="w-20 h-20 rounded-full grayscale" alt="Client" />
                        <div>
                            <h4 className="text-xl font-black uppercase tracking-widest">AHMET YILMAZ</h4>
                            <div className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mt-1">CEO • TECH VENTURES</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials3;
