"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';
import { motion, useScroll, useTransform } from 'framer-motion';

const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
};

const Services8 = () => {
    const { siteData } = useSite();
    const { primaryColor } = siteData;

    const services = [
        { title: "UI Tasarımı", desc: "Göz alıcı ve kullanıcı dostu arayüzler." },
        { title: "SEO Strateji", desc: "Arama motorlarında zirveye yolculuk." },
        { title: "Cloud Hosting", desc: "Hızlı, güvenli ve kesintisiz barındırma." }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-32">
                    <h2 className="text-5xl font-black italic tracking-tighter uppercase mb-6">Uzmanlık <span style={{ color: primaryColor }}>Alanlarımız</span></h2>
                    <div className="w-12 h-12 bg-black mx-auto rounded-full" style={{ backgroundColor: primaryColor }}></div>
                </div>

                <div className="space-y-40">
                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            variants={itemVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            className={`flex flex-col items-center gap-12 ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                        >
                            <div className="lg:w-1/2 relative bg-gray-50 aspect-[4/3] rounded-[80px] overflow-hidden group">
                                <img src={`https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800`} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt={service.title} />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                            </div>
                            <div className="lg:w-1/2 text-center lg:text-left">
                                <div className="text-sm font-black opacity-20 mb-8 uppercase tracking-[0.5em]">KATEGORİ 0{i + 1}</div>
                                <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 leading-none" style={{ color: primaryColor }}>{service.title}</h3>
                                <p className="text-2xl text-gray-400 font-medium leading-relaxed max-w-sm">
                                    {service.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services8;
