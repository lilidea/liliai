"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';
import { motion } from 'framer-motion';

const Projects9 = () => {
    const { siteData } = useSite();
    const { primaryColor } = siteData;

    return (
        <section className="py-24 bg-black text-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <h2 className="text-7xl md:text-9xl font-black uppercase tracking-tighter leading-[0.8] mb-12">Show <br /> Case.</h2>
                        <div className="space-y-12">
                            <p className="text-2xl text-white/30 font-medium leading-relaxed max-w-sm">Global markalar için ürettiğimiz inovatif dijital çözümler.</p>
                            <div className="flex gap-12 border-t border-white/5 pt-10">
                                <div>
                                    <div className="text-4xl font-black tracking-tighter" style={{ color: primaryColor }}>50+</div>
                                    <div className="text-[10px] font-bold text-white/20 uppercase tracking-widest mt-2">AKTİF PROJE</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-black tracking-tighter" style={{ color: primaryColor }}>12</div>
                                    <div className="text-[10px] font-bold text-white/20 uppercase tracking-widest mt-2">ÖDÜL</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6 relative">
                        <div className="space-y-6">
                            <motion.div whileHover={{ scale: 0.95 }} className="aspect-[3/4] rounded-[50px] overflow-hidden shadow-2xl">
                                <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="img" />
                            </motion.div>
                            <motion.div whileHover={{ scale: 0.95 }} className="aspect-square rounded-[50px] overflow-hidden shadow-2xl">
                                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="img" />
                            </motion.div>
                        </div>
                        <div className="space-y-6 pt-12">
                            <motion.div whileHover={{ scale: 0.95 }} className="aspect-square rounded-[50px] overflow-hidden shadow-2xl">
                                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="img" />
                            </motion.div>
                            <motion.div whileHover={{ scale: 0.95 }} className="aspect-[3/4] rounded-[50px] overflow-hidden shadow-2xl">
                                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="img" />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects9;
