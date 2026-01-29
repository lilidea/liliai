"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';
import { motion } from 'framer-motion';

const Contact8 = () => {
    const { siteData } = useSite();
    const { primaryColor } = siteData;

    return (
        <section className="py-24 bg-black text-white overflow-hidden">
            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
                <div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="w-20 h-2 bg-white mb-10"
                        style={{ backgroundColor: primaryColor }}
                    ></motion.div>
                    <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-12">Harekete <br /> Geçin.</h2>
                    <p className="text-xl text-neutral-500 max-w-md leading-relaxed mb-16 font-medium">
                        Beklemek zaman kaybıdır. Hayalinizdeki projeyi hemen bugün hayata geçirmek için ilk adımı atın.
                    </p>

                    <div className="space-y-6">
                        <div className="text-[10px] font-black uppercase tracking-[0.5em] text-neutral-700">İLETİŞİM BİLGİLERİ</div>
                        <div className="text-3xl font-black hover:opacity-50 transition cursor-pointer">start@lilidea.com</div>
                    </div>
                </div>

                <div className="bg-neutral-900/50 backdrop-blur-3xl border border-white/10 p-10 md:p-16 rounded-[60px] relative transition hover:border-white/20">
                    {/* Neon Accent */}
                    <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full blur-[80px] scale-150 pointer-events-none" style={{ backgroundColor: primaryColor, opacity: 0.2 }}></div>

                    <form className="space-y-8">
                        <div className="space-y-2">
                            <input type="text" placeholder="İsminiz nedir?" className="w-full bg-transparent border-b-2 border-white/10 py-6 placeholder:text-neutral-800 text-xl font-bold focus:border-white focus:ring-0 transition-colors outline-none" />
                        </div>
                        <div className="space-y-2">
                            <input type="email" placeholder="E-posta adresiniz?" className="w-full bg-transparent border-b-2 border-white/10 py-6 placeholder:text-neutral-800 text-xl font-bold focus:border-white focus:ring-0 transition-colors outline-none" />
                        </div>
                        <div className="space-y-2">
                            <textarea rows="3" placeholder="Projenizden bahsedin..." className="w-full bg-transparent border-b-2 border-white/10 py-6 placeholder:text-neutral-800 text-xl font-bold focus:border-white focus:ring-0 transition-colors outline-none resize-none"></textarea>
                        </div>
                        <button className="w-full py-6 rounded-3xl font-black uppercase tracking-widest text-lg shadow-[0_20px_40px_rgba(0,0,0,0.5)] active:scale-95 transition-all" style={{ backgroundColor: primaryColor }}>
                            BAŞLATIN
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact8;
