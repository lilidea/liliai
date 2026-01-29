"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';
import { Camera, Video, Music } from 'lucide-react';

const Appointment9 = () => {
    const { siteData } = useSite();
    const { primaryColor } = siteData;

    return (
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20 px-4">
                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">Hizmet Seçimi & <span style={{ color: primaryColor }}>KAYIT.</span></h2>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { t: "FOTOĞRAF", i: Camera, d: "Profesyonel çekim." },
                        { t: "VİDEO", i: Video, d: "4K klip prodüksiyon." },
                        { t: "SES", i: Music, d: "Stüdyo kayıt." }
                    ].map((item, i) => (
                        <div key={i} className="bg-white p-12 rounded-[60px] shadow-sm hover:shadow-2xl transition group cursor-pointer border border-slate-100 italic">
                            <div className="w-20 h-20 rounded-3xl bg-slate-50 flex items-center justify-center mb-10 transition group-hover:bg-black group-hover:text-white">
                                <item.i size={32} />
                            </div>
                            <h4 className="text-2xl font-black uppercase mb-4">{item.t}</h4>
                            <p className="text-slate-400 font-medium mb-10">{item.d}</p>
                            <button className="w-full py-5 bg-slate-50 rounded-3xl font-black uppercase text-[10px] tracking-widest group-hover:text-white transition" style={{ backgroundColor: primaryColor }}>SEÇ</button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Appointment9;
