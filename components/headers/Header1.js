"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';
import { Mail } from 'lucide-react';

const Header1 = () => {
  const { siteData } = useSite();
  const { companyName, primaryColor, pages } = siteData;

  return (
    <header className="border-b" style={{ borderColor: `${primaryColor}20` }}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold" style={{ color: primaryColor }}>
          {companyName || "lil.ai"}
        </div>
        <nav className="hidden md:flex space-x-6">
          {(pages || ['Ana Sayfa', 'Hakkımızda', 'İletişim']).map(page => (
             <a key={page} href="#" className="text-gray-600 hover:text-gray-900">{page}</a>
          ))}
        </nav>
        <button 
          className="px-4 py-2 rounded text-white text-sm font-medium flex items-center gap-2"
          style={{ backgroundColor: primaryColor }}
        >
          <Mail size={16} />
          Bize Ulaşın
        </button>
      </div>
    </header>
  );
};

export default Header1;
