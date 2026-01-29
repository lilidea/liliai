"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';
import { Send, Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

const Footer4 = () => {
    const { siteData } = useSite();
    const { companyName, primaryColor } = siteData;

    return (
        <footer className="bg-neutral-900 text-white py-20 font-sans">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 pb-16 border-b border-white/10">
                    {/* Left: Brand & Newsletter */}
                    <div>
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-12 h-12 rounded-2xl bg-white text-black flex items-center justify-center font-black text-2xl">
                                {companyName ? companyName.substring(0, 1) : "L"}
                            </div>
                            <span className="text-3xl font-black tracking-tighter">{companyName || "lil.ai"}</span>
                        </div>
                        <p className="text-gray-400 text-lg mb-8 max-w-md">
                            Yapay zeka gücüyle geleceğin web sitelerini bugün inşa edin. Sınırları zorlayın, fark yaratın.
                        </p>
                        <div className="relative max-w-md">
                            <input
                                type="email"
                                placeholder="E-posta adresiniz"
                                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-6 pr-16 focus:outline-none focus:border-white transition-colors"
                            />
                            <button
                                className="absolute right-2 top-2 bottom-2 px-4 rounded-xl flex items-center justify-center transition-transform hover:scale-105"
                                style={{ backgroundColor: primaryColor || '#E69419' }}
                            >
                                <Send size={20} />
                            </button>
                        </div>
                    </div>

                    {/* Right: Socials & Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
                        <div>
                            <h4 className="font-bold text-lg mb-6">Şirket</h4>
                            <ul className="space-y-4 text-gray-400">
                                <li><a href="#" className="hover:text-white transition">Hakkımızda</a></li>
                                <li><a href="#" className="hover:text-white transition">Ekibimiz</a></li>
                                <li><a href="#" className="hover:text-white transition">Kariyer</a></li>
                                <li><a href="#" className="hover:text-white transition">İletişim</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-lg mb-6">Ürünler</h4>
                            <ul className="space-y-4 text-gray-400">
                                <li><a href="#" className="hover:text-white transition">Özellikler</a></li>
                                <li><a href="#" className="hover:text-white transition">Fiyatlandırma</a></li>
                                <li><a href="#" className="hover:text-white transition">Şablonlar</a></li>
                                <li><a href="#" className="hover:text-white transition">API</a></li>
                            </ul>
                        </div>
                        <div className="col-span-2 sm:col-span-1">
                            <h4 className="font-bold text-lg mb-6">Bizi Takip Edin</h4>
                            <div className="flex flex-wrap gap-4">
                                {[Facebook, Twitter, Instagram, Linkedin, Github].map((Icon, i) => (
                                    <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                                        <Icon size={18} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                    <p>© {new Date().getFullYear()} {companyName}. Tüm hakları saklıdır.</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-white transition">Gizlilik Politikası</a>
                        <a href="#" className="hover:text-white transition">Kullanım Şartları</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer4;
