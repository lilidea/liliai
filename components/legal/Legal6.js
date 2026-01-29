"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';
import { Shield, FileText, Lock } from 'lucide-react';

const Legal6 = () => {
    const { siteData } = useSite();
    const { primaryColor } = siteData;

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-12">
                    {[
                        { t: "GDPR UYUMU", i: Shield, c: "Avrupa veri standartlarına tam uyumluluk." },
                        { t: "TELİF HAKLARI", i: FileText, c: "İçeriklerin korunması ve lisanslama." },
                        { t: "SSL GÜVENLİĞİ", i: Lock, c: "256-bit şifreleme ile tam koruma." }
                    ].map((item, i) => (
                        <div key={i} className="p-12 rounded-[50px] bg-slate-50 border border-transparent hover:border-slate-100 hover:bg-white hover:shadow-2xl transition group">
                            <item.i className="mb-10 opacity-30 group-hover:opacity-100 transition-all" style={{ color: primaryColor }} size={48} />
                            <h4 className="text-xl font-black uppercase tracking-tighter mb-4">{item.t}</h4>
                            <p className="text-sm font-medium text-slate-400 mb-8">{item.c}</p>
                            <button className="text-[10px] font-black uppercase tracking-[0.2em] border-b-2 border-slate-100 pb-1 group-hover:border-black transition-all">BELGEYİ İNCELE</button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Legal6;
