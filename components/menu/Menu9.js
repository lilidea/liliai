"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';

const Menu9 = () => {
    const { siteData } = useSite();
    const { primaryColor } = siteData;

    return (
        <section className="py-24 bg-slate-50 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-20">
                    <div className="lg:w-1/3">
                        <div className="sticky top-12">
                            <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-none italic">Bizim <br /> <span style={{ color: primaryColor }}>Mutfak.</span></h2>
                            <p className="text-lg text-slate-400 font-medium leading-relaxed">Şeflerimizin elinden çıkan her lezzet, uzun yılların getirdiği tecrübe ve sevgiyle harmanlanmıştır.</p>
                            <div className="mt-12 w-20 h-2 bg-black"></div>
                        </div>
                    </div>
                    <div className="lg:w-2/3 grid gap-8">
                        {[1, 2, 3, 4].map(i => (
                            <div key={i} className="bg-white rounded-[50px] overflow-hidden flex flex-col md:flex-row shadow-sm hover:shadow-2xl transition group">
                                <div className="md:w-1/3 aspect-square overflow-hidden">
                                    <img src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover grayscale opacity-50 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700" alt="Food" />
                                </div>
                                <div className="md:w-2/3 p-10 flex flex-col justify-center">
                                    <h4 className="text-2xl font-black uppercase tracking-tighter mb-2">GASTRONOMİK KEŞİF 0{i}</h4>
                                    <p className="text-sm text-slate-400 font-medium mb-6">Yöresel malzemeler ve modern teknikler ile.</p>
                                    <span className="text-2xl font-black italic" style={{ color: primaryColor }}>₺180</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Menu9;
