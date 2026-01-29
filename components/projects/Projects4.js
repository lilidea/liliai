"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';
import { motion } from 'framer-motion';

const Projects4 = () => {
    const { siteData } = useSite();
    const { primaryColor } = siteData;

    const projects = [
        { title: "Kreatif Atölye", cat: "Branding", img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800", size: "lg" },
        { title: "Dijital Portal", cat: "Development", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800", size: "sm" },
        { title: "Mobil Uygulama", cat: "App Design", img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800", size: "sm" },
        { title: "Kurumsal Kimlik", cat: "Design", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800", size: "lg" }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-left mb-20 px-4">
                    <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-10">Öne Çıkan <br /> <span style={{ color: primaryColor }}>İŞLERİMİZ.</span></h2>
                    <div className="w-20 h-2 bg-black" style={{ backgroundColor: primaryColor }}></div>
                </div>

                <div className="columns-1 md:columns-2 gap-8 space-y-8 max-w-7xl mx-auto">
                    {projects.map((project, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -10 }}
                            className="relative rounded-[40px] overflow-hidden group border border-gray-100 shadow-sm hover:shadow-2xl transition-all break-inside-avoid"
                        >
                            <img src={project.img} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt={project.title} />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-10 text-white">
                                <div className="text-xs font-black uppercase tracking-[0.3em] mb-2" style={{ color: primaryColor }}>{project.cat}</div>
                                <h3 className="text-3xl font-black uppercase tracking-tighter">{project.title}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects4;
