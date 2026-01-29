"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';
import { Star } from 'lucide-react';

const Testimonials4 = () => {
    const { siteData } = useSite();
    const { primaryColor } = siteData;

    return (
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-4xl font-black uppercase tracking-widest italic mb-4">Müşteri <span style={{ color: primaryColor }}>Yorumları</span></h2>
                    <p className="text-slate-400 font-medium">Bize güvenen yüzlerce mutlu müşteri arasından bazıları.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {[1, 2, 3].map(i => (
                        <div key={i} className="bg-white p-10 rounded-[50px] shadow-sm hover:shadow-2xl transition group border border-slate-100">
                            <div className="flex gap-1 mb-8">
                                {[1, 2, 3, 4, 5].map(s => <Star key={s} size={14} fill={primaryColor} stroke={primaryColor} />)}
                            </div>
                            <p className="text-lg font-bold text-slate-700 leading-relaxed mb-10 italic">"Sundukları çözüm sayesinde verimliliğimiz %40 arttı. Kesinlikle tavsiye ediyoruz."</p>
                            <div className="flex items-center gap-4">
                                <img src={`https://i.pravatar.cc/100?u=grid${i}`} className="w-12 h-12 rounded-2xl object-cover" alt="User" />
                                <div>
                                    <h5 className="font-black text-xs uppercase tracking-widest">MUSTAFA CAN {i}</h5>
                                    <span className="text-[10px] font-bold text-slate-300 uppercase">OPERASYON MÜDÜRÜ</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials4;
