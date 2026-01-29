"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';
import { Target, Eye } from 'lucide-react';

const About5 = () => {
    const { siteData } = useSite();
    const { primaryColor, companyName, secondaryColor } = siteData;

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12">
                    <div className="p-12 rounded-[40px] bg-slate-50 border border-slate-100 transition-all hover:shadow-2xl group">
                        <div className="w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                            <Target size={32} style={{ color: primaryColor }} />
                        </div>
                        <h3 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tighter">Misyonumuz</h3>
                        <p className="text-lg text-slate-600 leading-relaxed font-medium">
                            En son teknolojileri kullanarak müşterilerimizin iş süreçlerini modernize etmek ve dijital dünyada kalıcı bir iz bırakmalarını sağlamak temel önceliğimizdir.
                        </p>
                    </div>

                    <div className="p-12 rounded-[40px] text-white transition-all hover:shadow-2xl group relative overflow-hidden" style={{ backgroundColor: primaryColor }}>
                        {/* Decorative Background Icon */}
                        <div className="absolute -right-10 -bottom-10 opacity-10 rotate-12">
                            <Eye size={200} />
                        </div>

                        <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                            <Eye size={32} className="text-white" />
                        </div>
                        <h3 className="text-3xl font-black text-white mb-6 uppercase tracking-tighter">Vizyonumuz</h3>
                        <p className="text-lg text-white/90 leading-relaxed font-medium relative z-10">
                            Yaratıcılığın ve teknolojinin sınırlarını zorlayarak, alanımızda dünya çapında tanınan bir standart belirleyici ve ilham kaynağı olmak için ilerliyoruz.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About5;
