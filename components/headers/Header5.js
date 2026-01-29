
"use client";
import React, { useState, useEffect } from "react";
import { useSite } from "@/app/context/SiteContext";
import { cn } from "@/lib/utils";
import { ChevronDown, Menu, X, ArrowRight, Star } from "lucide-react";

export default function Header5() {
  const { siteData } = useSite();
  const { companyName, primaryColor, secondaryColor, pages } = siteData;
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mock Menu Items for "Product" dropdown
  const productItems = [
    { title: "Analizler", desc: "Gerçek zamanlı veri takibi." },
    { title: "Otomasyon", desc: "İş akışlarınızı hızlandırın." },
    { title: "Raporlama", desc: "Detaylı PDF raporlar." },
    { title: "Entegrasyon", desc: "Tüm araçlarınızla uyumlu." },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-transparent",
        isScrolled
          ? "bg-white/90 backdrop-blur-xl shadow-sm border-gray-200 py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo Area */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
            style={{
              background: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})`
            }}
          >
            {companyName ? companyName.substring(0, 1) : "L"}
          </div>
          <span className={cn(
            "text-xl font-bold tracking-tight transition-colors",
            isScrolled ? "text-gray-900" : "text-gray-900"
          )}>
            {companyName || "Brand"}
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {(pages || ["Ürün", "Çözümler", "Fiyatlar"]).map((page, idx) => (
            <div
              key={idx}
              className="relative group"
              onMouseEnter={() => setActiveDropdown(page)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={cn(
                  "flex items-center gap-1 font-medium text-sm transition-colors py-2",
                  isScrolled ? "text-gray-600 hover:text-black" : "text-gray-700 hover:opacity-75"
                )}
                style={{ color: !isScrolled ? primaryColor : undefined }}
              >
                {page} <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
              </button>

              {/* Mega Menu Dropdown Mockup (Only for demo, shows on hover) */}
              < div
                className={
                  cn(
                    "absolute top-full -left-4 w-80 bg-white rounded-2xl shadow-xl border border-gray-100 p-4 transition-all duration-300 transform origin-top-left",
                    activeDropdown === page ? "opacity-100 scale-100 translate-y-2 pointer-events-auto" : "opacity-0 scale-95 translate-y-0 pointer-events-none"
                  )}
              >
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 ml-2">{page} Kategorisi</div>
                <div className="grid gap-2">
                  {productItems.map((item, i) => (
                    <a key={i} href="#" className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group/item">
                      <div>
                        <div className="font-bold text-gray-800 text-sm group-hover:opacity-70 transition-colors" style={{ color: primaryColor }}>{item.title}</div>
                        <div className="text-xs text-gray-500">{item.desc}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Animated Underline */}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full" style={{ backgroundColor: primaryColor }}></div>
            </div>
          ))
          }
        </nav >

        {/* CTA Actions */}
        < div className="hidden md:flex items-center gap-4" >
          <button className="text-sm font-bold text-gray-600 hover:text-black transition-colors">Giriş Yap</button>
          <button
            className="px-5 py-2.5 rounded-full text-white text-sm font-bold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-0.5 transition-all flex items-center gap-2"
            style={{ backgroundColor: primaryColor }}
          >
            Ücretsiz Dene <ArrowRight size={16} />
          </button>
        </div >

        {/* Mobile Toggle */}
        < button
          className="md:hidden p-2 text-gray-600"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu size={24} />
        </button >
      </div >

      {/* Mobile Menu Overlay */}
      < div className={
        cn(
          "fixed inset-0 bg-white/95 backdrop-blur-md z-[60] transition-all duration-500 flex flex-col justify-center items-center gap-8",
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )
      } >
        <button className="absolute top-6 right-6 p-2 text-gray-500 hover:text-black" onClick={() => setMobileMenuOpen(false)}>
          <X size={32} />
        </button>

        <div className="flex flex-col items-center gap-6">
          {(pages || []).map(page => (
            <a key={page} href="#" className="text-3xl font-black text-gray-800 hover:text-blue-600 transition-colors">{page}</a>
          ))}
        </div>

        <div className="flex flex-col gap-4 mt-8 w-64">
          <button className="w-full py-4 rounded-xl border-2 border-gray-100 font-bold text-gray-700 hover:border-gray-300 transition-all">Giriş Yap</button>
          <button
            className="w-full py-4 rounded-xl text-white font-bold shadow-xl active:scale-95 transition-all"
            style={{ backgroundColor: primaryColor }}
          >
            Kayıt Ol
          </button>
        </div>
      </div >
    </header >
  );
}
