"use client";
import React, { useState } from 'react';
import { useSite } from '@/app/context/SiteContext';

const Legal8 = () => {
    const { siteData } = useSite();
    const { primaryColor } = siteData;
    const [tab, setTab] = useState(0);

    const tabs = ["ÇEREZ", "GİZLİLİK", "KVKK"];

    return (
        <section className="py-24 bg-white border-y border-slate-100">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="flex border-b border-slate-100 mb-16 overflow-x-auto no-scrollbar">
                    {tabs.map((t, i) => (
                        <button
                            key={i}
                            onClick={() => setTab(i)}
                            className={`px-12 py-6 text-xs font-black uppercase tracking-widest transition-all ${tab === i ? 'border-b-4' : 'opacity-30'}`}
                            style={{ borderColor: tab === i ? primaryColor : 'transparent' }}
                        >
                            {t}
                        </button>
                    ))}
                </div>
                <div className="min-h-[300px] text-lg font-bold text-slate-500 leading-relaxed italic italic">
                    {tab === 0 && <p>Çerezler, size daha iyi hizmet sunabilmemiz için tarayıcınızda saklanan küçük veri parçalarıdır. Ayarlarınızı istediğiniz zaman değiştirebilirsiniz.</p>}
                    {tab === 1 && <p>Gizlilik beyanımız gereği, verileriniz üçüncü şahıslarla asla paylaşılmaz ve en yüksek güvenlik standartları ile korunur.</p>}
                    {tab === 2 && <p>KVKK kapsamında haklarınızı öğrenmek ve veri işleme süreçlerimiz hakkında bilgi almak için bu bölümü detaylıca inceleyin.</p>}
                </div>
            </div>
        </section>
    );
};

export default Legal8;
