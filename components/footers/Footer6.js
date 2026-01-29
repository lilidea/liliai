"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';
import { Instagram, Twitter, Linkedin, Github, Facebook } from 'lucide-react';

const Footer6 = () => {
    const { siteData } = useSite();
    const { companyName, primaryColor, pages } = siteData;

    return (
        <footer className="bg-white py-20 border-t border-gray-100">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row justify-between gap-16">
                    <div className="lg:w-1/2">
                        <div className="text-3xl font-black tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-400">
                            {companyName || "LILIAI"}
                        </div>
                        <p className="text-xl text-gray-500 max-w-md leading-relaxed mb-10">
                            Yaratıcı fikirleri dijital gerçekliğe dönüştürüyoruz. Geleceği birlikte inşa edelim.
                        </p>
                        <div className="flex gap-4">
                            {[Instagram, Twitter, Linkedin, Github, Facebook].map((Icon, i) => (
                                <a key={i} href="#" className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-400 hover:text-white transition-all transform hover:-translate-y-1 hover:shadow-xl group"
                                    style={{ '--hover-bg': primaryColor }}>
                                    <Icon size={20} className="group-hover:scale-110 transition-transform" />
                                    <style jsx>{`
                                        a:hover { background-color: var(--hover-bg); }
                                    `}</style>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="lg:w-1/2 grid grid-cols-2 md:grid-cols-3 gap-12">
                        <div>
                            <h4 className="text-sm font-black uppercase tracking-widest text-gray-900 mb-6">Navigasyon</h4>
                            <ul className="space-y-4">
                                {(pages || ['Kurumsal', 'Hizmetler', 'Projeler', 'İletişim']).map(page => (
                                    <li key={page}>
                                        <a href="#" className="text-gray-500 hover:text-black transition-colors">{page}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-sm font-black uppercase tracking-widest text-gray-900 mb-6">Yasal</h4>
                            <ul className="space-y-4">
                                {['KVKK', 'Çerez Politikası', 'Kullanım Şartları', 'Gizlilik'].map(item => (
                                    <li key={item}>
                                        <a href="#" className="text-gray-500 hover:text-black transition-colors">{item}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mt-20 pt-8 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400 font-medium">
                    <p>© 2024 {companyName}. Tüm hakları saklıdır.</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-black transition">Destek</a>
                        <a href="#" className="hover:text-black transition">SSS</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer6;
