"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact3 = () => {
  const { siteData } = useSite();
  const { primaryColor } = siteData;

  return (
    <section className="flex flex-col md:flex-row h-auto md:h-[600px] bg-white">
      {/* Left: Info */}
      <div className="md:w-1/2 p-12 md:p-24 flex flex-col justify-center bg-gray-50">
         <h2 className="text-4xl font-bold text-gray-900 mb-8">İletişim</h2>
         
         <div className="space-y-8">
            <div className="flex items-start gap-6 group cursor-pointer">
               <div className="p-4 bg-white rounded-2xl shadow-sm text-gray-400 group-hover:text-white group-hover:shadow-md transition-all duration-300" style={{ '--hover-bg': primaryColor }}>
                   <div className="icon-box p-1 rounded transition-colors">
                     <MapPin size={24} />
                   </div>
               </div>
               <div>
                  <h3 className="font-bold text-gray-900 mb-1">Merkez Ofis</h3>
                  <p className="text-gray-500 leading-relaxed">
                     Maslak Mah. Büyükdere Cad.<br/>
                     No:123 Sarıyer / İstanbul
                  </p>
               </div>
            </div>

            <div className="flex items-start gap-6">
               <div className="p-4 bg-white rounded-2xl shadow-sm text-gray-400">
                  <Phone size={24} />
               </div>
               <div>
                  <h3 className="font-bold text-gray-900 mb-1">Telefon</h3>
                  <p className="text-gray-500 hover:underline cursor-pointer">+90 212 123 45 67</p>
               </div>
            </div>

            <div className="flex items-start gap-6">
               <div className="p-4 bg-white rounded-2xl shadow-sm text-gray-400">
                  <Mail size={24} />
               </div>
               <div>
                  <h3 className="font-bold text-gray-900 mb-1">E-Posta</h3>
                  <p className="text-gray-500 hover:underline cursor-pointer">hello@lil.ai</p>
               </div>
            </div>
         </div>
      </div>

      {/* Right: Map */}
      <div className="md:w-1/2 bg-gray-200 relative">
         <iframe 
           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d192697.8885057795!2d28.871754593122736!3d41.00537021646279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0xe1ccfe98bc01b0d0!2zxLBzdGFuYnVs!5e0!3m2!1str!2str!4v1705663673295!5m2!1str!2str" 
           width="100%" 
           height="100%" 
           style={{ border: 0, filter: 'grayscale(100%)' }} 
           allowFullScreen="" 
           loading="lazy" 
           className="w-full h-full object-cover"
         ></iframe>
      </div>
    </section>
  );
};

export default Contact3;
