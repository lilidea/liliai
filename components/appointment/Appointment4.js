"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';

const Appointment4 = () => {
    const { siteData } = useSite();
    const { primaryColor } = siteData;

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6 max-w-5xl">
                <div className="flex flex-col md:flex-row gap-16 items-center">
                    <div className="md:w-1/2">
                        <h2 className="text-5xl font-black uppercase tracking-tighter mb-8 leading-none italic">Zamanınızı <br /> <span style={{ color: primaryColor }}>PLANLAYIN.</span></h2>
                        <p className="text-slate-400 font-bold leading-relaxed mb-10 uppercase tracking-widest text-xs">Aşağıdaki takvimden size uygun olan boş bir saati seçerek anında randevu oluşturabilirsiniz.</p>
                        <ul className="space-y-4 text-xs font-black">
                            <li>• 7/24 ONLINE REZERVASYON</li>
                            <li>• ANINDA ONAY</li>
                            <li>• ÜCRETSİZ İPTAL</li>
                        </ul>
                    </div>
                    <div className="md:w-1/2 bg-slate-50 p-10 rounded-[60px] border border-slate-100 shadow-xl">
                        <div className="grid grid-cols-7 gap-4 mb-8">
                            {['Pt', 'Sa', 'Ça', 'Pe', 'Cu', 'Ct', 'Pz'].map(d => <div key={d} className="text-center text-[10px] font-black opacity-20">{d}</div>)}
                            {[...Array(30)].map((_, i) => (
                                <button key={i} className={`aspect-square rounded-2xl text-xs font-black flex items-center justify-center transition ${i === 15 ? 'text-white' : 'hover:bg-white shadow-sm'}`} style={{ backgroundColor: i === 15 ? primaryColor : undefined }}>{i + 1}</button>
                            ))}
                        </div>
                        <button className="w-full py-5 border-2 border-black rounded-3xl font-black uppercase text-[10px] tracking-widest hover:bg-black hover:text-white transition">İLERİ →</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Appointment4;
