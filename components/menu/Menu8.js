"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';

const Menu8 = () => {
    const { siteData } = useSite();
    const { primaryColor } = siteData;

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="bg-slate-900 rounded-[80px] p-12 md:p-24 flex flex-col lg:flex-row items-center gap-20">
                    <div className="lg:w-2/3">
                        <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-10 italic">ŞİMDİ <br /> <span style={{ color: primaryColor }}>DİJİTAL.</span></h2>
                        <p className="text-xl text-white/40 font-medium mb-12 max-w-lg">Sıra beklemeden menümüze telefonunuzdan göz atın ve anında siparişinizi oluşturun.</p>
                        <ul className="space-y-6 text-white/60 font-black uppercase text-xs tracking-widest">
                            <li>• TEMASSIZ MENÜ</li>
                            <li>• HIZLI SİPARİŞ</li>
                            <li>• GÜNCEL FİYATLAR</li>
                        </ul>
                    </div>
                    <div className="lg:w-1/3 text-center">
                        <div className="bg-white p-10 rounded-[60px] inline-block shadow-2xl scale-110">
                            <div className="w-48 h-48 bg-slate-900 rounded-3xl mb-6 flex items-center justify-center p-4">
                                <div className="grid grid-cols-4 gap-2 w-full h-full opacity-60">
                                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(i => (
                                        <div key={i} className="bg-white rounded-sm"></div>
                                    ))}
                                </div>
                            </div>
                            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">TARAT VE KEŞFET</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Menu8;
