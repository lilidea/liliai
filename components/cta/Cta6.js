"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';
import { Send } from 'lucide-react';

const Cta6 = () => {
    const { siteData } = useSite();
    const { primaryColor } = siteData;

    return (
        <section className="py-24 bg-white border-y border-slate-100">
            <div className="container mx-auto px-6 max-w-4xl text-center">
                <h2 className="text-4xl font-black uppercase tracking-tighter mb-8 italic">BÜLTENİMİZE <span style={{ color: primaryColor }}>KATILIN.</span></h2>
                <p className="text-slate-400 font-medium mb-12">En yeni haberler ve özel teklifler doğrudan kutunuza gelsin.</p>

                <form className="relative max-w-xl mx-auto flex gap-4">
                    <input
                        type="email"
                        placeholder="E-posta adresiniz..."
                        className="flex-1 bg-slate-50 border-none px-8 py-6 rounded-2xl font-bold focus:ring-2 outline-none"
                        style={{ '--tw-ring-color': primaryColor }}
                    />
                    <button className="bg-black text-white p-6 rounded-2xl hover:scale-105 transition-all shadow-xl" style={{ backgroundColor: primaryColor }}>
                        <Send size={24} />
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Cta6;
