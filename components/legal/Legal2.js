"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';

const Legal2 = () => {
    const { siteData } = useSite();
    const { primaryColor } = siteData;

    return (
        <section className="py-24 bg-black text-white">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="mb-20">
                    <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 italic">Gizlilik <br /> <span style={{ color: primaryColor }}>POLİTİKASI.</span></h1>
                    <div className="h-2 w-24 bg-white/10"></div>
                </div>

                <div className="space-y-12 text-white/60 font-medium leading-relaxed">
                    <section>
                        <h2 className="text-xl font-black text-white uppercase tracking-widest mb-6 underline decoration-4" style={{ decorationColor: primaryColor }}>1. Veri Toplama</h2>
                        <p>Hizmetlerimizi kullanırken topladığımız veriler, size daha iyi bir deneyim sunmak amacıyla işlenmektedir. Bu veriler arasında e-posta adresi, kullanım istatistikleri ve çerez bilgileri yer alabilir.</p>
                    </section>
                    <section>
                        <h2 className="text-xl font-black text-white uppercase tracking-widest mb-6 underline decoration-4" style={{ decorationColor: primaryColor }}>2. Güvenlik</h2>
                        <p>Verileriniz en modern şifreleme yöntemleri ile korunmaktadır. Güvenliğiniz bizim için en yüksek önceliktir.</p>
                    </section>
                </div>
            </div>
        </section>
    );
};

export default Legal2;
