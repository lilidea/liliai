"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';

const Blog10 = () => {
    const { siteData } = useSite();
    const { primaryColor } = siteData;

    return (
        <section className="py-24 bg-slate-100">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex flex-col lg:flex-row gap-px bg-white rounded-[100px] overflow-hidden shadow-2xl border border-slate-200">
                    <div className="lg:w-1/2 p-12 md:p-24 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-slate-100">
                        <div className="w-20 h-2 mb-12" style={{ backgroundColor: primaryColor }}></div>
                        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-10 italic italic">Günün <br /> Hikayesi.</h2>
                        <p className="text-xl text-slate-500 font-medium leading-relaxed mb-12">Her hafta seçtiğimiz özel makaleler ile dijital dünyaya farklı bir pencereden bakın.</p>
                        <button className="w-fit px-12 py-5 bg-black text-white rounded-full font-black uppercase tracking-widest hover:scale-105 transition shadow-xl">DAHA FAZLA</button>
                    </div>
                    <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-100">
                        {[1, 2, 3, 4].map(i => (
                            <div key={i} className="bg-white p-12 hover:bg-slate-50 transition cursor-pointer group">
                                <h4 className="text-xl font-black uppercase tracking-tight group-hover:underline" style={{ decorationColor: primaryColor }}>Makale 0{i}</h4>
                                <div className="text-[10px] font-bold text-slate-300 uppercase tracking-widest mt-4">İNCELE</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog10;
