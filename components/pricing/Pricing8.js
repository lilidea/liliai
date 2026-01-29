"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';

const Pricing8 = () => {
    const { siteData } = useSite();
    const { primaryColor } = siteData;

    return (
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    <div className="bg-white p-12 md:p-20 rounded-[80px] shadow-sm flex flex-col justify-between">
                        <div>
                            <h3 className="text-3xl font-black uppercase tracking-tighter mb-8 italic">Bireysel</h3>
                            <p className="text-slate-400 font-medium mb-12">Kişisel projeleriniz ve portfolyolarınız için ideal başlangıç.</p>
                            <div className="text-6xl font-black tracking-tighter mb-12">$0<span className="text-lg opacity-30">/AY</span></div>
                        </div>
                        <button className="w-full py-6 border-2 border-black rounded-full font-black uppercase tracking-widest hover:bg-black hover:text-white transition">ÜCRETSİZ BAŞLA</button>
                    </div>

                    <div className="bg-black p-12 md:p-20 rounded-[80px] shadow-2xl flex flex-col justify-between text-white relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 blur-[80px]" style={{ backgroundColor: primaryColor }}></div>
                        <div className="relative z-10">
                            <h3 className="text-3xl font-black uppercase tracking-tighter mb-8 italic" style={{ color: primaryColor }}>Kurumsal</h3>
                            <p className="text-slate-400 font-medium mb-12">Takım çalışması ve geniş ölçekli dijital varlıklar için.</p>
                            <div className="text-6xl font-black tracking-tighter mb-12">$99<span className="text-lg opacity-30">/AY</span></div>
                        </div>
                        <button className="w-full py-6 rounded-full font-black uppercase tracking-widest transition shadow-lg relative z-10" style={{ backgroundColor: primaryColor }}>EKİBİNİ KUR</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing8;
