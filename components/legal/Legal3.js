"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';

const Legal3 = () => {
    const { siteData } = useSite();
    const { primaryColor } = siteData;

    return (
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-20">
                    <aside className="lg:w-1/4 h-fit sticky top-12 bg-white p-10 rounded-[40px] shadow-sm border border-slate-100">
                        <ul className="space-y-6 text-xs font-black uppercase tracking-widest">
                            <li className="text-black" style={{ color: primaryColor }}>ÜYELİK SÖZLEŞMESİ</li>
                            <li className="text-slate-400 hover:text-black cursor-pointer">MESAFELİ SATIŞ</li>
                            <li className="text-slate-400 hover:text-black cursor-pointer">İADE KOŞULLARI</li>
                            <li className="text-slate-400 hover:text-black cursor-pointer">ÇEREZ POLİTİKASI</li>
                        </ul>
                    </aside>
                    <main className="lg:w-3/4 bg-white p-12 md:p-24 rounded-[60px] shadow-sm border border-slate-100">
                        <h2 className="text-3xl font-black uppercase mb-12 tracking-tighter italic">Üyelik Sözleşmesi</h2>
                        <div className="prose prose-slate max-w-none space-y-8 text-slate-500 font-medium">
                            <p>Bu sözleşme, platformumuzun kullanım şartlarını ve tarafların haklarını belirlemektedir. Lütfen dikkatle okuyunuz.</p>
                            <p>Üyelerimiz, kayıt sırasında verdikleri bilgilerin doğruluğunu taahhüt ederler. Herhangi bir yanlış beyan durumunda üyeliğin dondurulması haklarımızı saklı tutarız.</p>
                        </div>
                    </main>
                </div>
            </div>
        </section>
    );
};

export default Legal3;
