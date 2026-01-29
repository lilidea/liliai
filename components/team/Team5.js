"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';
import { motion } from 'framer-motion';

const Team5 = () => {
    const { siteData } = useSite();
    const { primaryColor } = siteData;

    const members = [
        { name: "Arda Kurt", role: "Creative Lead" },
        { name: "Nil Gün", role: "Frontend Guru" },
        { name: "Bora Şen", role: "Cloud Architect" }
    ];

    return (
        <section className="py-24 bg-neutral-900 text-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-end justify-between gap-10 mb-24">
                    <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none italic">Zoru <br /> <span style={{ color: primaryColor }}>Başaranlar.</span></h2>
                    <div className="w-20 h-2 bg-white mb-2" style={{ backgroundColor: primaryColor }}></div>
                </div>

                <div className="grid md:grid-cols-3 gap-12">
                    {members.map((member, i) => (
                        <div key={i} className="group relative aspect-[3/4] rounded-[60px] overflow-hidden bg-neutral-800">
                            <img src={`https://i.pravatar.cc/500?u=team${i}`} className="w-full h-full object-cover grayscale opacity-50 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" alt={member.name} />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                            <div className="absolute bottom-10 left-10">
                                <h4 className="text-3xl font-black uppercase tracking-tighter mb-2">{member.name}</h4>
                                <div className="text-sm font-black uppercase tracking-widest text-neutral-500 group-hover:text-white transition-colors" style={{ color: primaryColor }}>{member.role}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team5;
