"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';

const Menu4 = () => {
    const { siteData } = useSite();
    const { primaryColor } = siteData;

    return (
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-20">
                    <div className="bg-white p-12 md:p-20 rounded-[80px] shadow-sm">
                        <h2 className="text-4xl font-black uppercase tracking-tighter mb-12 italic underline decoration-4" style={{ decorationColor: primaryColor }}>Main <br /> Dishes</h2>
                        <div className="space-y-10">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="flex justify-between items-center group">
                                    <div>
                                        <h4 className="text-xl font-black uppercase group-hover:text-amber-600 transition-colors">Special Dish {i}</h4>
                                        <p className="text-xs text-slate-400 mt-1">Sertifikalı organik ürünlerle hazırlanmıştır.</p>
                                    </div>
                                    <span className="text-lg font-black italic">₺149</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="bg-white p-12 md:p-20 rounded-[80px] shadow-sm">
                        <h2 className="text-4xl font-black uppercase tracking-tighter mb-12 italic underline decoration-4" style={{ decorationColor: primaryColor }}>Desserts <br /> & More</h2>
                        <div className="space-y-10">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="flex justify-between items-center group">
                                    <div>
                                        <h4 className="text-xl font-black uppercase group-hover:text-amber-600 transition-colors">Sweet Delight {i}</h4>
                                        <p className="text-xs text-slate-400 mt-1">Günlük taze meyvelerle hazırlanan lezzetler.</p>
                                    </div>
                                    <span className="text-lg font-black italic">₺89</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Menu4;
