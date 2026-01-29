"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';
import { ArrowRight, Code, Palette, Search, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const Services4 = () => {
    const { siteData } = useSite();
    const { primaryColor } = siteData;

    const services = [
        { title: "Geliştirme", desc: "Modern teknolojilerle performanslı web ve mobil uygulamalar.", icon: Code },
        { title: "Tasarım", desc: "Kullanıcı deneyimi odaklı estetik ve fonksiyonel arayüzler.", icon: Palette },
        { title: "Strateji", desc: "İşinizi büyütmek için veri odaklı yol haritaları ve analizler.", icon: Search },
        { title: "Otomasyon", desc: "Zaman kazandıran akıllı iş akışları ve yapay zeka çözümleri.", icon: Zap }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-end justify-between gap-10 mb-20">
                    <div className="max-w-2xl">
                        <div className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-300 mb-6">HİZMETLERİMİZ</div>
                        <h2 className="text-5xl md:text-7xl font-black text-gray-900 uppercase tracking-tighter leading-none">Çözüm <br /> <span style={{ color: primaryColor }}>Ortaklığımız.</span></h2>
                    </div>
                    <p className="text-gray-400 font-medium text-lg lg:text-right max-w-sm">İşinizi bir sonraki seviyeye taşıyacak uzmanlık alanlarımızla yanınızdayız.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -10 }}
                            className="bg-gray-50 p-12 rounded-[50px] border border-gray-100 hover:bg-black group transition-all duration-500"
                        >
                            <div className="w-16 h-16 rounded-3xl bg-white flex items-center justify-center mb-12 group-hover:bg-white/10 group-hover:text-white transition-colors" style={{ color: primaryColor }}>
                                <service.icon size={28} />
                            </div>
                            <h3 className="text-2xl font-black text-gray-900 mb-4 group-hover:text-white transition-colors uppercase tracking-tight">{service.title}</h3>
                            <p className="text-gray-500 font-medium leading-relaxed group-hover:text-white/40 transition-colors mb-10">{service.desc}</p>
                            <button className="flex items-center gap-2 font-black uppercase text-xs tracking-widest group-hover:text-white transition-colors">
                                İnceleyin <ArrowRight size={16} style={{ color: primaryColor }} />
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services4;
