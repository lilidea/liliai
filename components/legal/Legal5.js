"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';

const Legal5 = () => {
    const { siteData } = useSite();
    const { primaryColor } = siteData;

    return (
        <section className="py-24 bg-slate-100 italic">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-20">
                    <div className="lg:w-1/3">
                        <h2 className="text-4xl font-black uppercase mb-8">Özet <br /> <span style={{ color: primaryColor }}>BİLGİ.</span></h2>
                        <p className="text-slate-400 font-bold leading-relaxed">Uzun metinleri okumak istemeyenler için temel maddeleri buraya not düştük.</p>
                        <ul className="mt-12 space-y-6 text-xs font-black uppercase tracking-widest">
                            <li>• VERİLER GÜVENDEDİR</li>
                            <li>• İADE MÜMKÜNDÜR</li>
                            <li>• 18 YAŞALTI KULLANAMAZ</li>
                        </ul>
                    </div>
                    <div className="lg:w-2/3 bg-white p-12 md:p-24 rounded-[80px] shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-full"></div>
                        <h3 className="text-2xl font-black uppercase mb-12 tracking-tight">Kullanım Koşulları Detayları</h3>
                        <div className="prose font-medium text-slate-500 space-y-10">
                            <p>Hizmetlerimizi kullanarak bu koşulları kabul etmiş sayılırsınız. Şirketimiz, koşulları önceden haber vermeksizin güncelleme hakkını saklı tutar.</p>
                            <p>Sistem üzerindeki tüm görsel ve yazılı materyaller fikri mülkiyet kanunları ile korunmaktadır.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Legal5;
