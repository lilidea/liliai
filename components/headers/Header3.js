"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';
import { Menu, Search, ShoppingBag } from 'lucide-react';

const Header3 = () => {
  const { siteData } = useSite();
  const { companyName, primaryColor, secondaryColor, pages } = siteData;

  // Modern Floating Header with Glassmorphism
  return (
    <header className="absolute top-0 left-0 w-full z-50 p-4 md:p-8 font-sans">
      <div className="mx-auto max-w-6xl bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-6 py-4 flex justify-between items-center shadow-2xl">
         
         {/* Logo Environment */}
         <div className="flex items-center gap-3">
             <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center font-black text-xl shadow-lg">
                {companyName ? companyName.substring(0,1) : "L"}
             </div>
             <div className="text-xl font-bold text-white tracking-widest uppercase hidden md:block">
                {companyName || "lil.ai"}
             </div>
         </div>

         {/* Navigation Pills */}
         <nav className="hidden md:flex bg-black/20 rounded-full p-1.5 backdrop-blur-md border border-white/5">
            {(pages || ['Ana Sayfa', 'Projeler', 'İletişim']).map((item, i) => (
                <a 
                  key={item} 
                  href="#" 
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${i === 0 ? 'bg-white text-black shadow-lg' : 'text-white/70 hover:text-white hover:bg-white/10'}`}
                >
                    {item}
                </a>
            ))}
         </nav>

         {/* Right Actions */}
         <div className="flex items-center gap-4 text-white">
            <button className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 group">
               <Search size={18} className="group-hover:scale-110 transition"/>
            </button>
             <button className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 group">
               <ShoppingBag size={18} className="group-hover:scale-110 transition"/>
            </button>
            <Menu className="md:hidden cursor-pointer w-6 h-6 ml-2" />
         </div>

      </div>
    </header>
  );
};

export default Header3;
