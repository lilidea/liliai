"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';
import { MapPin, ArrowUpRight } from 'lucide-react';

const Contact7 = () => {
    const { siteData } = useSite();
    const { primaryColor } = siteData;

    const branches = [
        { city: "İstanbul", region: "Levent", phone: "+90 212 111 22 33" },
        { city: "Ankara", region: "Çankaya", phone: "+90 312 444 55 66" },
        { city: "İzmir", region: "Alsancak", phone: "+90 232 777 88 99" }
    ];

    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row justify-between items-end gap-10 mb-20 px-4">
                    <div className="max-w-xl">
                        <div className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-300 mb-6">LOKASYONLARIMIZ</div>
                        <h2 className="text-5xl md:text-7xl font-black text-gray-900 uppercase tracking-tighter">Bize her yerden <span style={{ color: primaryColor }}>ulaşabilirsiniz.</span></h2>
                    </div>
                    <div className="text-gray-400 text-lg font-medium lg:text-right">Size en yakın ofisimize bir kahveye bekleriz.</div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {branches.map((branch, i) => (
                        <div key={i} className="bg-white p-12 rounded-[40px] shadow-sm border border-gray-100 hover:shadow-2xl transition hover:-translate-y-2 group">
                            <div className="w-16 h-16 rounded-3xl bg-gray-50 flex items-center justify-center mb-10 group-hover:bg-black group-hover:text-white transition-colors">
                                <MapPin size={28} />
                            </div>
                            <h3 className="text-3xl font-black text-gray-900 mb-2">{branch.city}</h3>
                            <div className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-10">{branch.region} OFİSİ</div>
                            <div className="pt-8 border-t border-gray-100 flex justify-between items-center font-black">
                                <span className="text-gray-900">{branch.phone}</span>
                                <a href="#" className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center hover:bg-gray-50 transition" style={{ color: primaryColor }}>
                                    <ArrowUpRight size={18} />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Contact7;
