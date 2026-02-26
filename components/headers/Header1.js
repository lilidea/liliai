"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';
import { Mail } from 'lucide-react';

const Header1 = () => {
  const { siteData } = useSite();
  const { companyName, primaryColor, pages } = siteData;

  return (
    <header
      className="sticky top-0 z-[50] backdrop-blur-md bg-white/80 border-b transition-all"
      style={{ borderColor: `${primaryColor}10` }}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-black tracking-tight" style={{ color: primaryColor }}>
          {companyName || "lil.ai"}
        </div>
        <nav className="hidden md:flex space-x-8">
          {(pages || ['Ana Sayfa', 'Hakkımızda', 'İletişim']).map(page => (
            <a
              key={page}
              href="#"
              className="text-gray-500 font-medium hover:scale-105 transition-all"
              style={{ ':hover': { color: siteData.secondaryColor } }} // Inline hover tricky in React, handled via Group or CSS usually. Let's use generic hover text-black for simplicity or specific class if needed.
              onMouseEnter={(e) => e.currentTarget.style.color = siteData.secondaryColor || primaryColor}
              onMouseLeave={(e) => e.currentTarget.style.color = '#6b7280'}
            >
              {page}
            </a>
          ))}
        </nav>
        <button
          className="px-6 py-2.5 rounded-full text-white text-sm font-bold flex items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
          style={{
            background: `linear-gradient(90deg, ${primaryColor}, ${siteData.secondaryColor || primaryColor})`
          }}
        >
          <Mail size={16} />
          Bize Ulaşın
        </button>
      </div>
    </header>
  );
};

export default Header1;
