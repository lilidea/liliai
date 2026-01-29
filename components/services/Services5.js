"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';
import { motion } from 'framer-motion';

const Services5 = () => {
    const { siteData } = useSite();
    const { primaryColor } = siteData;

    const services = [
        { title: "Özel Tasarım", desc: "Markanızın ruhunu yansıtan, tamamen size özel dijital kimlik çalışmaları.", img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800" },
        { title: "Dijital Pazarlama", desc: "Doğru kitleye, doğru zamanda, doğru mesajla ulaşmanızı sağlıyoruz.", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" }
    ];

    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-6 space-y-24">
                {services.map((service, i) => (
                    <div key={i} className={`flex flex-col lg:items-center gap-12 md:gap-20 ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                        <div className="lg:w-1/2">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                className="aspect-video rounded-[60px] overflow-hidden shadow-2xl"
                            >
                                <img src={service.img} className="w-full h-full object-cover" alt={service.title} />
                            </motion.div>
                        </div>
                        <div className="lg:w-1/2">
                            <div className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-300 mb-8">SERVİS 0{i + 1}</div>
                            <h2 className="text-5xl md:text-7xl font-black text-gray-900 uppercase tracking-tighter leading-none mb-10">
                                {service.title.split(' ')[0]} <br /> <span style={{ color: primaryColor }}>{service.title.split(' ')[1] || ""}</span>
                            </h2>
                            <p className="text-xl text-gray-500 font-medium leading-relaxed mb-12 max-w-lg">
                                {service.desc}
                            </p>
                            <button className="px-10 py-5 rounded-2xl bg-black text-white font-black uppercase tracking-widest text-xs hover:opacity-75 transition" style={{ backgroundColor: primaryColor }}>Detayları Keşfedin</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services5;
