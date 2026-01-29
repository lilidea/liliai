"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';
import { Search, ShoppingBag, User, Heart, Menu } from 'lucide-react';

const Header8 = () => {
    const { siteData } = useSite();
    const { companyName, primaryColor } = siteData;

    return (
        <header className="w-full bg-white font-sans border-b border-gray-100">
            {/* Top Info Bar */}
            <div className="bg-neutral-900 text-white py-2 text-[10px] font-black uppercase tracking-[0.2em] text-center">
                YENİ SEZON ÜRÜNLERİNDE %20 İNDİRİM FIRSATINI KAÇIRMAYIN
            </div>

            <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                <div className="flex items-center gap-10">
                    <div className="text-2xl font-black tracking-tight" style={{ color: primaryColor }}>
                        {companyName || "SHOPLIL"}
                    </div>

                    <nav className="hidden lg:flex items-center gap-8">
                        {['Kadın', 'Erkek', 'Aksesuar', 'Koleksiyon'].map(item => (
                            <a key={item} href="#" className="text-sm font-bold text-gray-500 hover:text-black transition-colors">{item}</a>
                        ))}
                    </nav>
                </div>

                <div className="flex-1 max-w-md mx-10 hidden md:block">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Ürün Ara..."
                            className="w-full bg-gray-50 border-none rounded-full py-2.5 pl-10 pr-4 text-sm focus:ring-0"
                        />
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    </div>
                </div>

                <div className="flex items-center gap-6">
                    <div className="hidden sm:flex items-center gap-4">
                        <button className="text-gray-400 hover:text-black transition"><User size={20} /></button>
                        <button className="text-gray-400 hover:text-black transition relative">
                            <Heart size={20} />
                            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-[8px] flex items-center justify-center text-white">2</span>
                        </button>
                    </div>

                    <button className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-full font-bold text-sm hover:opacity-90 transition shadow-lg">
                        <ShoppingBag size={18} />
                        <span>Sepet</span>
                    </button>

                    <button className="lg:hidden p-2"><Menu size={24} /></button>
                </div>
            </div>
        </header>
    );
};

export default Header8;
