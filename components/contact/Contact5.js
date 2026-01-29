"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';
import { motion } from 'framer-motion';

const Contact5 = () => {
    const { siteData } = useSite();
    const { primaryColor } = siteData;

    return (
        <section className="min-h-screen flex flex-col lg:flex-row bg-white">
            <div className="lg:w-1/2 p-12 md:p-24 lg:p-32 flex flex-col justify-center bg-gray-900 text-white relative overflow-hidden">
                {/* Accent Decor */}
                <div className="absolute top-0 left-0 w-2 h-full" style={{ backgroundColor: primaryColor }}></div>

                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="max-w-lg relative z-10"
                >
                    <h2 className="text-6xl md:text-8xl font-black uppercase leading-[0.8] tracking-tighter mb-12">
                        Bize <br /> Ulaşın.
                    </h2>
                    <p className="text-xl text-white/40 mb-16 leading-relaxed">
                        Bir fikriniz mi var? Veya sadece merhaba mı demek istiyorsunuz? Çekinmeyin, sizi her zaman dinlemeye hazırız.
                    </p>

                    <div className="space-y-12">
                        <div>
                            <div className="text-[10px] font-black uppercase tracking-[0.5em] text-white/20 mb-4">ADRESİMİZ</div>
                            <div className="text-2xl font-black tracking-tight">Levent, Büyükdere Cd. <br /> Plaza No: 123, İstanbul</div>
                        </div>
                        <div>
                            <div className="text-[10px] font-black uppercase tracking-[0.5em] text-white/20 mb-4">SOSYAL</div>
                            <div className="flex gap-8 text-sm font-black uppercase tracking-widest">
                                <a href="#" className="hover:opacity-50 transition" style={{ color: primaryColor }}>Instagram</a>
                                <a href="#" className="hover:opacity-50 transition" style={{ color: primaryColor }}>LinkedIn</a>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <div className="absolute -bottom-20 -right-20 text-[30vw] font-black text-white/5 select-none pointer-events-none tracking-tighter uppercase">
                    HI.
                </div>
            </div>

            <div className="lg:w-1/2 p-12 md:p-24 lg:p-32 flex flex-col justify-center">
                <form className="max-w-xl space-y-10">
                    <div className="space-y-2 group">
                        <label className="text-sm font-black uppercase tracking-tighter text-gray-400 group-focus-within:text-black transition-colors">Tam Adınız</label>
                        <input type="text" className="w-full border-b-2 border-gray-100 py-4 focus:border-black transition-colors bg-transparent focus:ring-0 outline-none font-bold text-xl" />
                    </div>
                    <div className="space-y-2 group">
                        <label className="text-sm font-black uppercase tracking-tighter text-gray-400 group-focus-within:text-black transition-colors">E-posta Adresiniz</label>
                        <input type="email" className="w-full border-b-2 border-gray-100 py-4 focus:border-black transition-colors bg-transparent focus:ring-0 outline-none font-bold text-xl" />
                    </div>
                    <div className="space-y-2 group">
                        <label className="text-sm font-black uppercase tracking-tighter text-gray-400 group-focus-within:text-black transition-colors">Proje Detayları</label>
                        <textarea rows="4" className="w-full border-b-2 border-gray-100 py-4 focus:border-black transition-colors bg-transparent focus:ring-0 outline-none font-bold text-xl resize-none"></textarea>
                    </div>
                    <button className="group flex items-center gap-6 text-2xl font-black uppercase tracking-tighter hover:opacity-50 transition-all">
                        GÖNDER
                        <span className="w-12 h-12 bg-black text-white flex items-center justify-center rounded-full group-hover:translate-x-4 transition-transform" style={{ backgroundColor: primaryColor }}>→</span>
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact5;
