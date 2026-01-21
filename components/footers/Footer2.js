"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone, ArrowRight } from 'lucide-react';

const Footer2 = () => {
  const { siteData } = useSite();
  const { companyName, primaryColor } = siteData;

  const pages = siteData.pages || ["Kurumsal", "Hizmetler", "İletişim"];

  return (
    <footer className="bg-neutral-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
           {/* Brand */}
           <div className="space-y-6">
              <h2 className="text-3xl font-black tracking-tighter">{companyName || "lil.ai"}</h2>
              <p className="text-neutral-400 leading-relaxed">
                 Dijital dünyada markanızı öne çıkarmak için modern ve yaratıcı çözümler üretiyoruz. Geleceği birlikte tasarlayalım.
              </p>
              <div className="flex gap-4">
                 <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer"><Facebook size={18}/></div>
                 <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer"><Twitter size={18}/></div>
                 <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer"><Instagram size={18}/></div>
                 <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer"><Linkedin size={18}/></div>
              </div>
           </div>

           {/* Quick Links */}
           <div>
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2">Hızlı Erişim <span className="w-8 h-[2px]" style={{ backgroundColor: primaryColor }}></span></h3>
              <ul className="space-y-4">
                 {pages.map(page => (
                    <li key={page}>
                       <a href="#" className="text-neutral-400 hover:text-white transition-colors flex items-center gap-2 group">
                          <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: primaryColor }} />
                          {page}
                       </a>
                    </li>
                 ))}
              </ul>
           </div>

           {/* Contact Info */}
           <div>
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2">İletişim <span className="w-8 h-[2px]" style={{ backgroundColor: primaryColor }}></span></h3>
              <ul className="space-y-4 text-neutral-400">
                 <li className="flex items-start gap-3">
                    <MapPin size={20} className="shrink-0 mt-1" style={{ color: primaryColor }}/>
                    <span>Maslak Mah. Büyükdere Cad. No:123<br/>Sarıyer, İstanbul</span>
                 </li>
                 <li className="flex items-center gap-3">
                    <Phone size={20} className="shrink-0" style={{ color: primaryColor }}/>
                    <span>+90 212 345 67 89</span>
                 </li>
                 <li className="flex items-center gap-3">
                    <Mail size={20} className="shrink-0" style={{ color: primaryColor }}/>
                    <span>info@lil.ai</span>
                 </li>
              </ul>
           </div>

           {/* Newsletter */}
           <div>
              <h3 className="text-lg font-bold mb-6">Bülten</h3>
              <p className="text-neutral-400 mb-4 text-sm">Gelişmelerden haberdar olmak için e-bültenimize abone olun.</p>
              <form className="space-y-3">
                 <input 
                    type="email" 
                    placeholder="E-posta adresiniz" 
                    className="w-full bg-neutral-800 border-none rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-white/20 text-white placeholder-neutral-500"
                 />
                 <button 
                    className="w-full px-4 py-3 rounded-lg font-bold text-sm transition-transform hover:scale-105"
                    style={{ backgroundColor: primaryColor, color: 'white' }}
                 >
                    Abone Ol
                 </button>
              </form>
           </div>
        </div>

        <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-500">
           <p>&copy; {new Date().getFullYear()} {companyName || "lil.ai"}. Tüm hakları saklıdır.</p>
           <div className="flex gap-6">
              <a href="#" className="hover:text-white">Gizlilik Politikası</a>
              <a href="#" className="hover:text-white">Kullanım Şartları</a>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
