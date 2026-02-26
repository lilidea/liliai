"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Footer8 = () => {
    const { siteData } = useSite();
    const { companyName, primaryColor, pages } = siteData;

    return (
        <footer className="bg-gray-900 pt-20 pb-10 text-gray-300">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-4 gap-12 mb-20">
                    <div className="col-span-1 lg:col-span-1">
                        <div className="text-2xl font-black text-white mb-8">
                            {companyName || "lil.ai"}
                        </div>
                        <p className="text-sm leading-relaxed mb-8 opacity-60">
                            Sektördeki en modern ve yenilikçi çözümlerle işletmenizi dijital çağın standartlarına taşıyoruz.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 text-sm">
                                <MapPin size={18} style={{ color: primaryColor }} /> İstanbul, TR
                            </div>
                            <div className="flex items-center gap-3 text-sm">
                                <Phone size={18} style={{ color: primaryColor }} /> +90 212 123 45 67
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-8 uppercase text-xs tracking-widest">Hızlı Linkler</h4>
                        <ul className="space-y-4 text-sm">
                            {(pages || ['Kurumsal', 'Hizmetler', 'Projeler', 'İletişim']).map(page => (
                                <li key={page}><a href="#" className="hover:text-white transition">{page}</a></li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-8 uppercase text-xs tracking-widest">Çözümlerimiz</h4>
                        <ul className="space-y-4 text-sm">
                            {['E-Ticaret', 'SaaS Geliştirme', 'UX/UI Tasarım', 'Yapay Zeka'].map(item => (
                                <li key={item}><a href="#" className="hover:text-white transition">{item}</a></li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-8 uppercase text-xs tracking-widest">Bültene Katılın</h4>
                        <p className="text-sm mb-6 opacity-60">En son yeniliklerden haberdar olun.</p>
                        <div className="relative">
                            <input
                                type="email"
                                placeholder="E-posta adresiniz"
                                className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-4 pr-14 text-sm focus:border-white/20 focus:ring-0"
                            />
                            <button
                                className="absolute right-2 top-2 p-2 rounded-lg text-white transition-all transform hover:scale-105"
                                style={{ backgroundColor: primaryColor }}
                            >
                                <Send size={20} />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold uppercase tracking-widest opacity-40">
                    <div>© {new Date().getFullYear()} lilidea.com. Tüm hakları saklıdır.</div>
                    <div className="flex gap-6">
                        <a href="#">Privacy</a>
                        <a href="#">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer8;
