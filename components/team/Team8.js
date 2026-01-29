"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';
import { Twitter, Linkedin, Github } from 'lucide-react';

const Team8 = () => {
    const { siteData } = useSite();
    const { primaryColor } = siteData;

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-12 mb-20 px-4 items-center text-center lg:text-left">
                    <h2 className="text-4xl font-black uppercase tracking-tighter lg:w-1/2">Yeteneklerimizin <br /> <span style={{ color: primaryColor }}>Küresel Ağı.</span></h2>
                    <p className="text-gray-400 font-medium lg:w-1/2">Alanında uzman 50'den fazla profesyonel ile dünyanın her yanına hizmet veriyoruz.</p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
                    {[1, 2, 3, 4, 5].map(i => (
                        <div key={i} className="group relative aspect-[3/4] rounded-3xl overflow-hidden bg-gray-100">
                            <img src={`https://i.pravatar.cc/400?u=grid${i}`} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" alt="Team" />
                            <div className="absolute inset-x-4 bottom-4 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                                <div className="bg-white/90 backdrop-blur-md p-4 rounded-2xl flex justify-between items-center shadow-2xl">
                                    <div className="font-black text-[10px] uppercase truncate mr-2">PROFESYONEL {i}</div>
                                    <div className="flex gap-2 text-gray-400">
                                        <Linkedin size={14} className="hover:text-black cursor-pointer" />
                                        <Twitter size={14} className="hover:text-black cursor-pointer" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team8;
