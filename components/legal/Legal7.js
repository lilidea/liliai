"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';

const Legal7 = () => {
    const { siteData } = useSite();
    const { primaryColor } = siteData;

    return (
        <section className="py-24 bg-zinc-900 text-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-[15vw] font-black opacity-[0.03] select-none pointer-events-none mb-[-5vw] tracking-tighter italic">REGULATIONS</div>
                <div className="relative z-10 max-w-4xl">
                    <h2 className="text-6xl font-black uppercase tracking-tighter mb-20 italic">Yasal <br /> Çerçeve.</h2>
                    <div className="grid gap-16">
                        {[1, 2].map(i => (
                            <div key={i} className="flex gap-12 group">
                                <div className="text-6xl font-black opacity-10 group-hover:opacity-100 transition-all italic" style={{ color: primaryColor }}>0{i}</div>
                                <div>
                                    <h4 className="text-2xl font-black uppercase mb-6 tracking-widest underline decoration-8" style={{ decorationColor: primaryColor }}>SÖZLEŞME MADDESİ {i}</h4>
                                    <p className="text-xl text-white/40 font-medium leading-relaxed italic">İşbu belgenin dijital ortamda onaylanmasıyla birlikte taraflar arasındaki tüm ticari maddeler yürürlüğe girmiş kabul edilir.</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Legal7;
