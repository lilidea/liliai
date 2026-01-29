"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';
import { Check, X } from 'lucide-react';

const Pricing5 = () => {
    const { siteData } = useSite();
    const { primaryColor } = siteData;

    const features = [
        { name: "Proje Sayısı", p1: "5", p2: "Sınırsız", p3: "Sınırsız" },
        { name: "Depolama", p1: "10GB", p2: "100GB", p3: "500GB" },
        { name: "API Erişimi", p1: false, p2: true, p3: true },
        { name: "Özel Destek", p1: false, p2: false, p3: true },
        { name: "SLA Güvencesi", p1: false, p2: false, p3: true }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6 max-w-5xl">
                <div className="text-center mb-24">
                    <h2 className="text-4xl font-black uppercase tracking-tighter">Plan Karşılaştırması</h2>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="border-b-2 border-slate-100">
                                <th className="py-8 font-black uppercase tracking-widest text-slate-400 text-xs">Özelllikler</th>
                                <th className="py-8 text-center px-6">
                                    <div className="text-xl font-black uppercase">Lite</div>
                                    <div className="text-sm font-bold text-slate-400">Ücretsiz</div>
                                </th>
                                <th className="py-8 text-center px-6">
                                    <div className="text-xl font-black uppercase" style={{ color: primaryColor }}>Pro</div>
                                    <div className="text-sm font-bold text-slate-400">$29/Ay</div>
                                </th>
                                <th className="py-8 text-center px-6">
                                    <div className="text-xl font-black uppercase">Ultra</div>
                                    <div className="text-sm font-bold text-slate-400">$99/Ay</div>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                            {features.map((f, i) => (
                                <tr key={i} className="hover:bg-slate-50/50 transition">
                                    <td className="py-6 font-bold text-slate-600">{f.name}</td>
                                    <td className="py-6 text-center px-6 font-bold">
                                        {typeof f.p1 === 'boolean' ? (f.p1 ? <Check className="mx-auto" size={18} /> : <X className="mx-auto text-slate-200" size={18} />) : f.p1}
                                    </td>
                                    <td className="py-6 text-center px-6 font-bold">
                                        {typeof f.p2 === 'boolean' ? (f.p2 ? <Check className="mx-auto" style={{ color: primaryColor }} size={18} /> : <X className="mx-auto text-slate-200" size={18} />) : f.p2}
                                    </td>
                                    <td className="py-6 text-center px-6 font-bold">
                                        {typeof f.p3 === 'boolean' ? (f.p3 ? <Check className="mx-auto" size={18} /> : <X className="mx-auto text-slate-200" size={18} />) : f.p3}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default Pricing5;
