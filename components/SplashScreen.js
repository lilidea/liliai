"use client";
import React, { useEffect, useState } from 'react';
import { useSite } from '@/app/context/SiteContext';

export default function SplashScreen({ onComplete }) {
  const { siteData } = useSite();
  const { primaryColor } = siteData;
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(oldProgress => {
        if (oldProgress === 100) {
          clearInterval(timer);
          return 100;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white">
      <div className="animate-in fade-in zoom-in duration-500 flex flex-col items-center gap-8">
        
        {/* Logo Animation */}
        <div className="relative">
             <div className="absolute inset-0 rounded-full blur-2xl opacity-30 animate-pulse" style={{ backgroundColor: primaryColor }}></div>
             <img src="/lilidea.svg" alt="Logo" className="w-28 h-28 relative z-10 drop-shadow-2xl animate-bounce-subtle" />
        </div>

        {/* Brand Name */}
        <h1 className="text-3xl font-black tracking-tight text-neutral-900 mt-4">
            Lilidea
            <span className="text-sm font-medium text-neutral-400 block tracking-widest uppercase mt-1">Site Yapıcı</span>
        </h1>

        {/* Loading Bar Container */}
        <div className="flex flex-col items-center gap-3 mt-6">
            <div className="w-64 h-1.5 bg-neutral-100 rounded-full overflow-hidden">
                <div 
                    className="h-full transition-all duration-300 ease-out"
                    style={{ 
                        width: `${progress}%`, 
                        backgroundColor: primaryColor,
                        boxShadow: `0 0 15px ${primaryColor}` 
                    }}
                ></div>
            </div>
            
            <p className="text-[10px] font-bold tracking-[0.2em] text-neutral-400 uppercase">
                {progress < 100 ? 'AI Segmentasyonu Yapılıyor...' : 'Hazırlanıyor...'}
            </p>
        </div>
      </div>
    </div>
  );
}
