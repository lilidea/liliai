"use client";
import React, { useState } from 'react';
import { useSite } from '@/app/context/SiteContext';
import { CheckCircle2 } from 'lucide-react';

const Pricing3 = () => {
  const { siteData } = useSite();
  const { primaryColor } = siteData;
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex flex-col items-center mb-16 space-y-6">
           <h2 className="text-4xl font-bold">Esnek Fiyatlandırma</h2>
           
           {/* Toggle */}
           <div className="flex items-center gap-4 bg-white/10 p-1 rounded-full backdrop-blur-sm">
              <button 
                 onClick={() => setIsYearly(false)}
                 className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${!isYearly ? 'bg-white text-black shadow-lg' : 'text-gray-400 hover:text-white'}`}
              >
                 Aylık
              </button>
              <button 
                 onClick={() => setIsYearly(true)}
                 className={`px-6 py-2 rounded-full text-sm font-bold transition-all flex items-center gap-2 ${isYearly ? 'bg-white text-black shadow-lg' : 'text-gray-400 hover:text-white'}`}
              >
                 Yıllık <span className="text-[10px] bg-green-500 text-white px-1.5 rounded ml-1">%20 İndirim</span>
              </button>
           </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
           {/* Card 1 */}
           <div className="bg-gray-800 rounded-3xl p-10 border border-gray-700 flex flex-col justify-between hover:border-gray-500 transition-colors">
              <div>
                 <h3 className="text-xl font-bold text-gray-300 mb-4">Start</h3>
                 <div className="flex items-end gap-1 mb-8">
                    <span className="text-5xl font-bold text-white">${isYearly ? '19' : '29'}</span>
                    <span className="text-gray-500 mb-1">/ay</span>
                 </div>
                 <ul className="space-y-4 mb-8">
                    {["Tek Kullanıcı", "5GB Depolama", "Temel Destek"].map(f => (
                       <li key={f} className="flex items-center gap-3 text-gray-300">
                          <CheckCircle2 size={18} className="text-gray-500" />
                          {f}
                       </li>
                    ))}
                 </ul>
              </div>
              <button className="w-full py-4 rounded-xl border border-gray-600 font-bold hover:bg-white hover:text-black transition-all">
                 Planı Seç
              </button>
           </div>

           {/* Card 2 */}
           <div className="bg-gray-800 rounded-3xl p-10 border-2 relative flex flex-col justify-between" style={{ borderColor: primaryColor }}>
              <div className="absolute top-0 right-0 bg-white text-black text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-lg" style={{ backgroundColor: primaryColor, color: 'white' }}>
                 TAVSİYE EDİLEN
              </div>
              <div>
                 <h3 className="text-xl font-bold text-white mb-4">Business</h3>
                 <div className="flex items-end gap-1 mb-8">
                    <span className="text-5xl font-bold text-white">${isYearly ? '49' : '69'}</span>
                    <span className="text-gray-500 mb-1">/ay</span>
                 </div>
                 <ul className="space-y-4 mb-8">
                    {["5 Kullanıcı", "100GB Depolama", "7/24 Öncelikli Destek", "Gelişmiş Analitik"].map(f => (
                       <li key={f} className="flex items-center gap-3 text-gray-300">
                          <CheckCircle2 size={18} style={{ color: primaryColor }} />
                          {f}
                       </li>
                    ))}
                 </ul>
              </div>
              <button 
                className="w-full py-4 rounded-xl font-bold text-white shadow-lg hover:brightness-110 transition-all"
                style={{ backgroundColor: primaryColor }}
              >
                 Hemen Başla
              </button>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing3;
