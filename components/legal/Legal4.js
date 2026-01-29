"use client";
import React, { useState } from 'react';
import { useSite } from '@/app/context/SiteContext';

const Legal4 = () => {
    const { siteData } = useSite();
    const { primaryColor } = siteData;
    const [open, setOpen] = useState(0);

    const sections = [
        { t: "GİRİŞ", c: "Bu metin genel kullanım koşullarını kapsar." },
        { t: "FİKRİ MÜLKİYET", c: "İçeriklerimizin izinsiz kullanımı yasaktır." },
        { t: "SORUMLULUK SINIRI", c: "Hizmet kesintilerinden sorumlu tutulamaz." }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6 max-w-3xl">
                <div className="space-y-4">
                    {sections.map((s, i) => (
                        <div key={i} className="border border-slate-100 rounded-[30px] overflow-hidden">
                            <button
                                onClick={() => setOpen(open === i ? -1 : i)}
                                className="w-full p-8 text-left flex justify-between items-center transition-colors group"
                                style={{ backgroundColor: open === i ? primaryColor + '10' : 'transparent' }}
                            >
                                <span className="font-black uppercase tracking-widest text-xs">{s.t}</span>
                                <span className={`text-2xl transition-transform ${open === i ? 'rotate-45' : ''}`}>+</span>
                            </button>
                            {open === i && (
                                <div className="p-8 pt-0 text-slate-500 font-medium text-sm border-t border-slate-50">
                                    {s.c}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Legal4;
