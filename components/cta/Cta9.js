"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';
import { Rocket, Coffee } from 'lucide-react';

const Cta9 = () => {
    const { siteData } = useSite();
    const { primaryColor } = siteData;

    return (
        <section className="py-24 bg-slate-900 text-white">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-10">
                    <div className="bg-white/5 p-16 rounded-[60px] border border-white/5 hover:bg-white/10 transition group">
                        <Rocket className="mb-10 opacity-20 group-hover:opacity-100 transition" style={{ color: primaryColor }} size={48} />
                        <h3 className="text-4xl font-black uppercase mb-6 tracking-tighter">Ekibe Katıl</h3>
                        <p className="text-white/40 mb-10 font-medium">Bize katılın ve dünyayı değiştirin.</p>
                        <button className="font-black uppercase tracking-widest text-sm underline group-hover:no-underline transition-all">HEMEN BAŞVUR →</button>
                    </div>
                    <div className="bg-white/5 p-16 rounded-[60px] border border-white/5 hover:bg-white/10 transition group">
                        <Coffee className="mb-10 opacity-20 group-hover:opacity-100 transition" style={{ color: primaryColor }} size={48} />
                        <h3 className="text-4xl font-black uppercase mb-6 tracking-tighter">Bize Yazın</h3>
                        <p className="text-white/40 mb-10 font-medium">Bir kahve içmeye bekleriz.</p>
                        <button className="font-black uppercase tracking-widest text-sm underline group-hover:no-underline transition-all">İLETİŞİM →</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cta9;
