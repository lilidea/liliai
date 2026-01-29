"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';

const Team7 = () => {
    const { siteData } = useSite();

    return (
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-20 items-center">
                    <div>
                        <h2 className="text-5xl font-black uppercase tracking-tighter mb-10 leading-none">Tutkuyla <br /> Çalışan Bir Ekip.</h2>
                        <p className="text-xl text-slate-500 font-medium leading-relaxed mb-12">
                            Her büyük başarının arkasında uyum içinde çalışan bir grup insan vardır. Biz sadece bir ekip değil, bir aileyiz.
                        </p>
                        <div className="flex gap-4">
                            <div className="w-16 h-1 bg-black"></div>
                            <div className="w-4 h-1 bg-black/10"></div>
                            <div className="w-4 h-1 bg-black/10"></div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        {[1, 2, 3, 4].map(i => (
                            <div key={i} className={`aspect-square rounded-3xl bg-white p-6 shadow-sm border border-slate-100 flex flex-col justify-between ${i % 2 !== 0 ? 'translate-y-10' : ''}`}>
                                <img src={`https://i.pravatar.cc/150?u=minimal${i}`} className="w-12 h-12 rounded-2xl grayscale" alt="Team" />
                                <div>
                                    <div className="font-black text-sm uppercase">ÜYE {i}</div>
                                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">DESIGNER</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team7;
