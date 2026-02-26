"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';
import { Heart } from 'lucide-react';

const Footer3 = () => {
  const { siteData } = useSite();
  const { companyName } = siteData;

  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-2xl font-black text-gray-900 tracking-tight mb-6">{companyName || "lil.ai"}</h2>

        <nav className="flex flex-wrap justify-center gap-6 md:gap-10 mb-8 font-medium text-gray-500">
          {(siteData.pages || ["Ana Sayfa"]).map(page => (
            <a key={page} href="#" className="hover:text-black transition-colors">{page}</a>
          ))}
        </nav>

        <div className="flex justify-center items-center gap-2 text-sm text-gray-400">
          <span>&copy; {new Date().getFullYear()} lilidea.com. Tüm hakları saklıdır.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer3;
