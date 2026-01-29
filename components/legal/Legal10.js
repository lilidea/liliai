"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';

const Legal10 = () => {
    const { siteData } = useSite();
    const { primaryColor } = siteData;

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6 max-w-5xl">
                <div className="border-[20px] border-slate-50 p-12 md:p-24 rounded-[40px]">
                    <div className="flex justify-between items-center mb-24 grayscale">
                        <div className="text-4xl font-black uppercase tracking-tighter">{siteData.companyName || "COMPANY"}</div>
                        <div className="text-right">
                            <div className="text-xs font-black uppercase tracking-widest text-slate-300">DOCUMENT ID</div>
                            <div className="text-sm font-bold">LEG-2024-001</div>
                        </div>
                    </div>

                    <h1 className="text-5xl font-black uppercase mb-16 tracking-tighter">Legal Disclaimer</h1>
                    <div className="space-y-12 text-slate-600 font-medium leading-relaxed italic">
                        <p>Bu bölüm, sunulan tüm servislerin yasal sınırlarını ve kullanıcı haklarını akademik bir dille ifade eder. Herhangi bir hak ihlali durumunda yerel mahkemeler yetkilidir.</p>
                        <hr className="border-slate-100" />
                        <p className="text-center text-[10px] font-black uppercase tracking-[0.5em] text-slate-300 pt-12">AUTHENTICATED DIGITAL DOCUMENT — 2024</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Legal10;
