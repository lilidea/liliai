"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';
import { Phone, Mail, Facebook, Twitter, Instagram, Menu } from 'lucide-react';

const Header4 = () => {
  const { siteData } = useSite();
  const { companyName, primaryColor, secondaryColor, accentColor, pages } = siteData;

  return (
    <header className="w-full font-sans">
      {/* Top Bar */}
      <div className="bg-neutral-900 text-white text-xs py-2 px-4 md:px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0">
          <div className="flex gap-4">
            <span className="flex items-center gap-1 opacity-80"><Phone size={12} /> +90 555 123 45 67</span>
            <span className="hidden sm:flex items-center gap-1 opacity-80"><Mail size={12} /> info@lilidea.com</span>
          </div>
          <div className="flex gap-4">
            <Facebook size={14} className="cursor-pointer hover:text-blue-400 transition" />
            <Twitter size={14} className="cursor-pointer hover:text-blue-300 transition" />
            <Instagram size={14} className="cursor-pointer hover:text-pink-400 transition" />
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="border-b border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 py-4 md:px-6 md:py-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center text-white font-bold text-lg md:text-xl shrink-0" style={{ backgroundColor: primaryColor || '#E69419' }}>
              {companyName ? companyName.substring(0, 1) : "L"}
            </div>
            <span className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight truncate max-w-[150px] md:max-w-none">{companyName || "lil.ai"}</span>
          </div>

          <nav className="hidden lg:flex gap-8 font-medium text-gray-600">
            {(pages || ['Kurumsal', 'Hizmetler', 'Projeler', 'İletişim']).map(page => (
              <a key={page} href="#" className="hover:text-black transition">{page}</a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button
              className="hidden sm:block px-4 py-2 md:px-6 md:py-3 rounded-lg text-white font-bold shadow-lg hover:shadow-xl transition transform hover:-translate-y-0.5 text-sm md:text-base whitespace-nowrap"
              style={{ backgroundColor: secondaryColor || primaryColor || '#E69419' }}
            >
              Teklif Al
            </button>
            <Menu className="lg:hidden cursor-pointer text-gray-600" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header4;
