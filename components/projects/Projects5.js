"use client";
import React, { useState } from 'react';
import { useSite } from '@/app/context/SiteContext';
import { motion, AnimatePresence } from 'framer-motion';

const Projects5 = () => {
    const { siteData } = useSite();
    const { primaryColor } = siteData;
    const [hovered, setHovered] = useState(0);

    const list = [
        { title: "Yapay Zeka Platformu", cat: "AI & ML", img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800" },
        { title: "Fintech Çözümleri", cat: "Dashboard", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" },
        { title: "E-Ticaret Devrimi", cat: "Storefront", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" }
    ];

    return (
        <section className="py-24 bg-black text-white overflow-hidden min-h-[80vh] flex items-center">
            <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
                <div className="space-y-4">
                    {list.map((item, i) => (
                        <div
                            key={i}
                            onMouseEnter={() => setHovered(i)}
                            className="group cursor-pointer py-10 border-b border-white/5 last:border-0 relative overflow-hidden"
                        >
                            <div className="flex justify-between items-center transition-all group-hover:pl-10">
                                <div className="text-sm font-black opacity-20 group-hover:opacity-100 transition-opacity" style={{ color: hovered === i ? primaryColor : undefined }}>0{i + 1}</div>
                                <h2 className={`text-4xl md:text-6xl font-black uppercase tracking-tighter transition-all ${hovered === i ? 'text-white' : 'text-white/20'}`}>
                                    {item.title}
                                </h2>
                                <div className="text-xs font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">İNCELE</div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="hidden lg:block relative aspect-square rounded-[100px] overflow-hidden">
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={hovered}
                            initial={{ opacity: 0, scale: 1.1, rotate: 5 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            exit={{ opacity: 0, scale: 0.9, rotate: -5 }}
                            transition={{ duration: 0.5 }}
                            src={list[hovered].img}
                            className="w-full h-full object-cover"
                            alt="Project Preview"
                        />
                    </AnimatePresence>
                    <div className="absolute inset-0 bg-black/20"></div>
                </div>
            </div>
        </section>
    );
};

export default Projects5;
