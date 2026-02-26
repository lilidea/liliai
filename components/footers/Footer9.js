"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';
import { ArrowUpRight } from 'lucide-react';

const Footer9 = () => {
    const { siteData } = useSite();
    const { companyName, primaryColor } = siteData;

    return (
        <footer className="py-12 bg-gray-50 px-6">
            <div className="container mx-auto">
                <div className="bg-gray-900 rounded-[60px] p-12 md:p-24 relative overflow-hidden group">
                    {/* Background Decorative Shape */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-1000"></div>

                    <div className="relative z-10 flex flex-col lg:flex-row justify-between items-start gap-12">
                        <div className="max-w-xl">
                            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mb-10 tracking-tighter">
                                Birlikte harikalar <br /> <span style={{ color: primaryColor }}>yaratalım mı?</span>
                            </h2>
                            <a href="#" className="inline-flex items-center gap-4 text-white font-black uppercase text-xl md:text-2xl border-b-4 border-white/20 pb-2 hover:border-white transition-all">
                                PROJENİZİ ANLATIN <ArrowUpRight size={32} />
                            </a>
                        </div>

                        <div className="flex flex-col gap-8 text-white/50 font-bold uppercase tracking-widest text-sm">
                            <div className="space-y-4">
                                <div className="text-white/20 text-[10px] font-black">NAVİGASYON</div>
                                <div className="flex flex-col gap-2">
                                    <a href="#" className="hover:text-white transition">Hakkımızda</a>
                                    <a href="#" className="hover:text-white transition">Hizmetlerimiz</a>
                                    <a href="#" className="hover:text-white transition">Projeler</a>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="text-white/20 text-[10px] font-black">SOSYAL MEDYA</div>
                                <div className="flex flex-col gap-2">
                                    <a href="#" className="hover:text-white transition">Instagram</a>
                                    <a href="#" className="hover:text-white transition">Behance</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                        <div className="text-white font-black italic text-2xl tracking-tighter select-none">
                            {companyName || "LILIAI"}
                        </div>
                        <div className="text-white/20 text-[10px] font-black uppercase tracking-[0.5em]">
                            © {new Date().getFullYear()} lilidea.com
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer9;
