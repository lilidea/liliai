"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';

const Pricing10 = () => {
    const { siteData } = useSite();
    const { primaryColor } = siteData;

    return (
        <section className="py-24 bg-slate-900 text-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-24">
                    <h2 className="text-5xl font-black uppercase tracking-tighter mb-10 underline decoration-8" style={{ textDecorationColor: primaryColor }}>Enterprise Scale</h2>
                    <p className="text-slate-400 font-medium max-w-xl mx-auto">Dünya genelinde yüzlerce kurumun güvendiği altyapı ile işinizi büyütün.</p>
                </div>

                <div className="grid lg:grid-cols-3 items-center">
                    <div className="bg-slate-800 p-12 rounded-[60px] lg:rounded-r-none border border-white/5 order-2 lg:order-1">
                        <h4 className="text-xl font-black uppercase mb-8">Basic</h4>
                        <div className="text-4xl font-black mb-10">$1,200<span className="text-sm opacity-20">/YIL</span></div>
                        <ul className="space-y-4 mb-10 text-sm font-bold opacity-60">
                            <li>• Core API Access</li>
                            <li>• Dashboard</li>
                            <li>• Email Support</li>
                        </ul>
                    </div>

                    <div className="bg-white text-black p-16 rounded-[60px] shadow-2xl scale-110 relative z-10 order-1 lg:order-2 mb-12 lg:mb-0">
                        <div className="absolute top-10 right-10 text-[10px] font-black uppercase tracking-widest px-4 py-1 bg-slate-100 rounded-full">POPÜLER</div>
                        <h4 className="text-2xl font-black uppercase mb-8">Standard</h4>
                        <div className="text-6xl font-black mb-12 tracking-tighter">$4,500<span className="text-sm opacity-20">/YIL</span></div>
                        <button className="w-full py-5 rounded-2xl text-white font-black uppercase tracking-widest shadow-xl" style={{ backgroundColor: primaryColor }}>ŞİMDİ BAŞLA</button>
                    </div>

                    <div className="bg-slate-800 p-12 rounded-[60px] lg:rounded-l-none border border-white/5 order-3">
                        <h4 className="text-xl font-black uppercase mb-8">Custom</h4>
                        <div className="text-4xl font-black mb-10">TEKLİF AL</div>
                        <ul className="space-y-4 mb-10 text-sm font-bold opacity-60">
                            <li>• Unlimited Users</li>
                            <li>• Custom SLA</li>
                            <li>• Data Residency</li>
                        </ul>
                        <button className="w-full py-5 bg-white/5 rounded-2xl font-black uppercase">İLETİŞİME GEÇ</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing10;
