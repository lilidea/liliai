"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';

const Menu5 = () => {
    const { siteData } = useSite();
    const { primaryColor } = siteData;

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6 mb-16">
                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic">Signature <span style={{ color: primaryColor }}>Selection.</span></h2>
            </div>

            <div className="flex gap-8 px-6 md:px-24 overflow-x-auto no-scrollbar pb-10">
                {[1, 2, 3, 4, 5].map(i => (
                    <div key={i} className="flex-none w-[300px] md:w-[450px] aspect-[4/5] rounded-[80px] overflow-hidden relative group cursor-pointer shadow-2xl">
                        <img src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="Item" />
                        <div className="absolute inset-x-8 bottom-8 p-10 bg-white/90 backdrop-blur-xl rounded-[40px] shadow-2xl">
                            <h4 className="text-2xl font-black uppercase tracking-tight mb-2">SMOKEY BURGER {i}</h4>
                            <div className="flex justify-between items-center">
                                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">KATEGORİ</span>
                                <span className="text-2xl font-black" style={{ color: primaryColor }}>₺220</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <style jsx>{`
                .no-scrollbar::-webkit-scrollbar { display: none; }
                .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
            `}</style>
        </section>
    );
};

export default Menu5;
