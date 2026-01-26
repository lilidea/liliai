"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact1() {
  const { siteData } = useSite();
  const { primaryColor, companyName, generatedContent } = siteData;
  const content = generatedContent?.contact || {};

  return (
    <section className="py-20 px-6 bg-white" id="contact">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-neutral-900">{content.title || "İletişime Geçin"}</h2>
          <p className="text-xl text-neutral-500 max-w-2xl mx-auto">
            {companyName} ile projenizi hayata geçirmeye hazır mısınız?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8 bg-neutral-50 p-8 rounded-3xl">
            <div className="flex items-start gap-4">
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center text-white shrink-0 shadow-lg"
                style={{ backgroundColor: primaryColor }}
              >
                <Mail size={20} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-neutral-900 mb-1">E-posta</h3>
                <p className="text-neutral-500">{content.email || `info@${companyName.toLowerCase().replace(/\s+/g, '')}.com`}</p>
                <p className="text-neutral-500">destek@{companyName.toLowerCase().replace(/\s+/g, '')}.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center text-white shrink-0 shadow-lg"
                style={{ backgroundColor: primaryColor }}
              >
                <Phone size={20} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-neutral-900 mb-1">Telefon</h3>
                <p className="text-neutral-500">{content.phone || "+90 (212) 555 01 23"}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center text-white shrink-0 shadow-lg"
                style={{ backgroundColor: primaryColor }}
              >
                <MapPin size={20} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-neutral-900 mb-1">Adres</h3>
                <p className="text-neutral-500">{content.address || "Dinamik Adres, Türkiye"}</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input 
                type="text" 
                placeholder="Adınız Soyadınız"
                className="w-full px-5 py-4 bg-neutral-50 rounded-xl border-none focus:ring-2 outline-none transition-all"
                style={{ '--tw-ring-color': primaryColor }}
              />
              <input 
                type="email" 
                placeholder="E-posta Adresiniz"
                className="w-full px-5 py-4 bg-neutral-50 rounded-xl border-none focus:ring-2 outline-none transition-all"
                style={{ '--tw-ring-color': primaryColor }}
              />
            </div>
            <input 
              type="text" 
              placeholder="Konu"
              className="w-full px-5 py-4 bg-neutral-50 rounded-xl border-none focus:ring-2 outline-none transition-all"
              style={{ '--tw-ring-color': primaryColor }}
            />
            <textarea 
              rows={4}
              placeholder="Mesajınız..."
              className="w-full px-5 py-4 bg-neutral-50 rounded-xl border-none focus:ring-2 outline-none transition-all resize-none"
              style={{ '--tw-ring-color': primaryColor }}
            />
            <button 
              type="button"
              className="w-full py-4 rounded-xl font-bold text-white shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
              style={{ backgroundColor: primaryColor }}
            >
              Mesaj Gönder <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
