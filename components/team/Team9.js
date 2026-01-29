"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';
import { motion } from 'framer-motion';

const Team9 = () => {
    const { siteData } = useSite();
    const { primaryColor, companyName } = siteData;

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6 relative">
                <div className="absolute top-0 right-0 text-[20vw] font-black text-gray-50 select-none pointer-events-none tracking-tighter uppercase leading-none">
                    TEAM.
                </div>

                <div className="relative z-10">
                    <h2 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-[0.8] mb-20">
                        BİZİMLE <br /> <span style={{ color: primaryColor }}>TANIŞIN.</span>
                    </h2>

                    <div className="flex flex-col md:flex-row gap-8">
                        {[1, 2, 3].map(i => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -30 }}
                                className="flex-1 bg-gray-50 rounded-[60px] p-10 group transition-all hover:bg-black"
                            >
                                <img src={`https://i.pravatar.cc/400?u=impact${i}`} className="w-full aspect-square object-cover rounded-[40px] mb-8 grayscale group-hover:grayscale-0 transition-all duration-700 shadow-2xl" alt="Team" />
                                <h4 className="text-3xl font-black text-gray-900 group-hover:text-white transition-colors uppercase tracking-widest">ÜYE 0{i}</h4>
                                <div className="text-sm font-black text-gray-300 uppercase tracking-[0.3em] mt-2 group-hover:text-white/50 transition-colors">STRATEJİST</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team9;
