"use client";
import React, { useState, useEffect, useMemo } from 'react';
import { useSite } from './context/SiteContext';
import { useRouter } from 'next/navigation';
import { getComponent } from '@/components/registry';
import { ArrowRight, ArrowLeft, Check, Palette, Type, Layout, Sparkles, FileText, Monitor } from 'lucide-react';

import AuroraBackground from '@/components/AuroraBackground';
import DesignStudio from '@/components/DesignStudio';
import ContentStudio from '@/components/ContentStudio';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { Textarea } from '@/components/Textarea';
import SplashScreen from '@/components/SplashScreen';
import { SECTORS, getSectorDefaults } from '@/utils/sectorMappings'; // Import Sector Mappings

export default function Home() {
  const { siteData, updateSiteData, updateSelection, isLoading, triggerLoading } = useSite();
  const router = useRouter();
  const [step, setStep] = useState(1);

  // Initial Splash
  useEffect(() => {
      triggerLoading(2000);
  }, []);

  const handleStepChange = (newStep) => {
      triggerLoading(1200);
      window.scrollTo(0,0);
      
      setTimeout(() => {
          setStep(newStep);
      }, 600); // Change step midway through loading
  };

  const nextStep = () => handleStepChange(step + 1);
  const prevStep = () => handleStepChange(step - 1);
  const goToStep = (s) => handleStepChange(s);

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateSiteData({ [name]: value });
  };

  const handleGenerate = () => router.push('/preview');

  // Calculate progress percentage
  const progress = useMemo(() => {
      return ((step - 1) / 4) * 100;
  }, [step]);

  // Preview component wrapper
  const ComponentPreview = ({ category, id }) => {
     const Component = getComponent(category, id);
     if (!Component) return null;
     
     return (
       <div className="w-full h-full overflow-hidden bg-white relative pointer-events-none select-none transform origin-top scale-[0.4] w-[250%] h-[250%]">
          <Component />
       </div>
     );
  };

   // Page Filtering Logic
   const filteredPages = useMemo(() => {
        const COMMON = ['Hakkımızda', 'Hizmetler', 'İletişim', 'Blog', 'SSS', 'Referanslar', 'Kariyer', 'Yasal Uyarılar'];
        const ALL = [
            ...COMMON, 
            'Ekibimiz', 'Galeri', 'Projeler', 'Menü', 'Ürünler', 
            'Fiyat Listesi', 'Randevu', 'Kampanyalar', 'Sertifikalar', 
            'Tedaviler', 'Eğitimler', 'Uzmanlık Alanları'
        ];

        const s = siteData.sector || '';
        let hidden = [];
        
        if (s.startsWith('food_')) hidden = ['Tedaviler', 'Randevu', 'Projeler', 'Sertifikalar', 'Uzmanlık Alanları', 'Eğitimler'];
        else if (s.startsWith('health_')) hidden = ['Menü', 'Projeler', 'Ürünler']; 
        else if (s.startsWith('const_')) hidden = ['Menü', 'Tedaviler', 'Randevu', 'Eğitimler', 'Fiyat Listesi'];
        else if (s.startsWith('beauty_')) hidden = ['Menü', 'Projeler', 'Uzmanlık Alanları'];
        else if (s.startsWith('tech_')) hidden = ['Menü', 'Tedaviler', 'Randevu'];
        else if (s.startsWith('retail_')) hidden = ['Tedaviler', 'Randevu', 'Projeler', 'Menü', 'Uzmanlık Alanları'];
        else if (s.startsWith('auto_')) hidden = ['Menü', 'Tedaviler', 'Eğitimler', 'Uzmanlık Alanları'];
        else if (s.startsWith('pro_')) hidden = ['Menü', 'Tedaviler', 'Ürünler', 'Fiyat Listesi'];
        else if (s.startsWith('edu_')) hidden = ['Menü', 'Tedaviler', 'Ürünler'];
        else if (s.startsWith('event_')) hidden = ['Tedaviler', 'Uzmanlık Alanları'];

        return ALL.filter(p => !hidden.includes(p));
   }, [siteData.sector]);

  const steps = [
    { id: 1, title: "Bilgiler", icon: <Type size={20}/> },
    { id: 2, title: "Renk", icon: <Palette size={20}/> },
    { id: 3, title: "Sayfalar", icon: <FileText size={20}/> },
    { id: 4, title: "AI Tasarım", icon: <Sparkles size={20}/> }, // Renamed and Icon changed
  ];

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 text-neutral-900 overflow-hidden relative font-sans selection:bg-black/10">
      {/* Background Decor */}
      <AuroraBackground />
       <div className="fixed inset-0 bg-white/20 backdrop-blur-[1px] -z-10 pointer-events-none"></div>
      
      {/* Progress Bar (Modern Pills) */}
      <div className="w-full max-w-4xl mb-10 z-10 flex items-center justify-center">
         <div className="bg-white/40 backdrop-blur-md border border-white/50 p-2 rounded-full flex items-center gap-2 shadow-sm">
          {steps.map((s) => {
            const isActive = step === s.id;
            const isCompleted = step > s.id;
            
            return (
              <div 
                key={s.id} 
                  className={`
                  flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-500 ease-out
                  ${isActive ? 'bg-[#E69419] text-white shadow-lg' : isCompleted ? 'bg-white text-black' : 'text-neutral-400 hover:text-neutral-600'}
                `}
              >
                <div className={`transition-transform duration-300 ${isActive ? 'scale-110' : ''}`}>
                  {isCompleted ? <Check size={16} strokeWidth={3}/> : React.cloneElement(s.icon, { size: 16 })}
                </div>
                <span className={`text-sm font-bold uppercase tracking-wider ${isActive ? 'block' : 'hidden md:block'}`}>
                  {s.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-white/80 backdrop-blur-xl border border-neutral-200 w-full max-w-3xl rounded-3xl p-8 md:p-12 shadow-2xl relative z-10 min-h-[500px] flex flex-col text-neutral-900">
        
        {/* Step 1: Info */}
        {step === 1 && (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 flex-1">
             <div className="text-center">
                <h2 className="text-3xl font-black tracking-tighter mb-2 text-neutral-900">Markanızı Tanımlayın</h2>
                <p className="text-neutral-500">Web sitenizin temel taşlarını oluşturalım.</p>
             </div>
             <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wide text-neutral-500">Firma Adı</label>
                  <Input 
                    type="text" 
                    name="companyName" 
                    value={siteData.companyName}
                    onChange={handleChange}
                    placeholder="Örn: liliai"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wide text-neutral-500">Sektör</label>
                  <select
                    name="sector"
                    value={siteData.sector}
                    onChange={(e) => {
                        handleChange(e);
                        // Auto-select pages when sector changes
                        const defaults = getSectorDefaults(e.target.value);
                        if(defaults) {
                            updateSiteData({ pages: defaults.defaultPages });
                        }
                    }}
                    className="w-full p-4 bg-neutral-50 border-2 border-neutral-100 rounded-xl focus:border-[#E69419] focus:ring-0 outline-none transition-all font-medium text-lg"
                  >
                    <option value="">Sektör Seçiniz...</option>
                    {SECTORS.map(s => (
                        <option key={s.id} value={s.id}>{s.label}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wide text-neutral-500">İşletme Tanımı</label>
                  <Textarea 
                    name="aboutText" 
                    value={siteData.aboutText}
                    onChange={handleChange}
                    placeholder="İşletmenizden kısaca bahsedin..."
                    rows={4}
                  />
                </div>
             </div>
          </div>
        )}

        {/* Step 2: Color */}
        {step === 2 && (
          <div className="space-y-8 animate-in fade-in slide-in-from-right-8 duration-500 flex-1 flex flex-col items-center justify-center text-center">
            <div>
              <h2 className="text-3xl font-black tracking-tighter mb-2 text-neutral-900">Renk Paleti</h2>
              <p className="text-neutral-500">Markanızın renklerini belirleyin.</p>
            </div>
            
            <div className="flex gap-8 justify-center">
              {/* Primary Color */}
              <div className="flex flex-col items-center gap-2">
                <label className="text-xs font-bold uppercase text-neutral-400">Ana Renk</label>
                <div className="relative w-24 h-24 rounded-full border-4 border-white shadow-xl overflow-hidden group hover:scale-105 transition-transform duration-300">
                  <input 
                    type="color" 
                    name="primaryColor" 
                    value={siteData.primaryColor}
                    onChange={handleChange}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] p-0 border-0 cursor-pointer"
                  />
                </div>
                <p className="font-mono text-xs uppercase tracking-widest text-neutral-600">{siteData.primaryColor}</p>
              </div>

              {/* Secondary Color */}
              <div className="flex flex-col items-center gap-2">
                <label className="text-xs font-bold uppercase text-neutral-400">İkincil</label>
                <div className="relative w-20 h-20 rounded-full border-4 border-white shadow-xl overflow-hidden group hover:scale-105 transition-transform duration-300">
                  <input 
                    type="color" 
                    name="secondaryColor" 
                    value={siteData.secondaryColor}
                    onChange={handleChange}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] p-0 border-0 cursor-pointer"
                  />
                </div>
                 <p className="font-mono text-xs uppercase tracking-widest text-neutral-600">{siteData.secondaryColor}</p>
              </div>

              {/* Accent Color */}
              <div className="flex flex-col items-center gap-2">
                <label className="text-xs font-bold uppercase text-neutral-400">Vurgu</label>
                 <div className="relative w-20 h-20 rounded-full border-4 border-white shadow-xl overflow-hidden group hover:scale-105 transition-transform duration-300">
                  <input 
                    type="color" 
                    name="accentColor" 
                    value={siteData.accentColor}
                    onChange={handleChange}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] p-0 border-0 cursor-pointer"
                  />
                </div>
                 <p className="font-mono text-xs uppercase tracking-widest text-neutral-600">{siteData.accentColor}</p>
              </div>
            </div>
          </div>
        )}


        {/* Step 3: Page Selection NEW */}
        {step === 3 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-8 duration-500 flex-1">
              <div className="text-center mb-6">
                 <h2 className="text-3xl font-black tracking-tighter text-neutral-900">Site Haritası</h2>
                 <p className="text-neutral-500">Sitenizde hangi sayfalar olsun?</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                 {filteredPages.map((page) => (
                    <div 
                      key={page}
                      onClick={() => {
                         const current = siteData.pages || [];
                         let newPages;
                         if(current.includes(page)) {
                            newPages = current.filter(p => p !== page);
                         } else {
                            newPages = [...current, page];
                         }
                         updateSiteData({ pages: newPages });
                      }}
                      className={`p-4 rounded-xl border-2 cursor-pointer flex items-center justify-between transition-all ${
                        (siteData.pages || []).includes(page) 
                          ? 'border-[#E69419] bg-neutral-50 shadow-md' 
                          : 'border-neutral-100 hover:border-neutral-200'
                      }`}
                    >
                       <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                              (siteData.pages || []).includes(page) ? 'bg-[#E69419] text-white' : 'bg-neutral-100 text-neutral-400'
                          }`}
                          >
                              <FileText size={14} />
                          </div>
                          <span className="font-bold text-gray-800">{page}</span>
                       </div>
                       
                       <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                          (siteData.pages || []).includes(page) ? 'bg-[#E69419] border-[#E69419] text-white' : 'border-neutral-200'
                       }`}
                       >
                          {(siteData.pages || []).includes(page) && <Check size={14} />}
                       </div>
                    </div>
                 ))}
              </div>
            </div>
        )}

        {/* Step 4: AI Design Generation (Replaces Design & Content Studio) */}
        {step === 4 && (
            <div className="flex flex-col items-center justify-center text-center h-full animate-in fade-in duration-700">
               <div className="mb-8 relative">
                  <div className="absolute inset-0 bg-[#E69419] blur-2xl opacity-20 animate-pulse"></div>
                  <Sparkles size={64} className="text-[#E69419] relative z-10 animate-bounce" />
               </div>
               
               <h2 className="text-4xl font-black tracking-tighter mb-4">Yapay Zeka Tasarlıyor</h2>
               <p className="text-lg text-neutral-500 max-w-md mx-auto mb-8">
                  Sektörünüze ({SECTORS.find(s => s.id === siteData.sector)?.label || 'Genel'}) en uygun tasarım şablonları seçiliyor ve içerikleriniz oluşturuluyor...
               </p>

               <div className="w-64 h-2 bg-neutral-100 rounded-full overflow-hidden">
                  <div className="h-full bg-[#E69419] animate-[loading_2s_ease-in-out_infinite] w-1/2"></div>
               </div>
            </div>
        )}

        {/* Removed Step 5 Manual Content Studio */}

        <div className="flex justify-between mt-8 border-t border-neutral-100 pt-8">
           <Button 
             onClick={prevStep}
             disabled={step === 1 || step === 4} // Disable back on AI step
             variant="ghost"
             className={`${step === 1 ? 'opacity-0 pointer-events-none' : ''}`}
           >
             <ArrowLeft size={20} /> Geri
           </Button>

           {step < 3 ? (
              <Button 
                onClick={async () => {
                    if (step === 2) {
                        // User is moving to Step 3 (Pages). Trigger AI Suggestion.
                        triggerLoading(2500); // Give it a bit more time visual
                        try {
                            const response = await fetch('/api/suggest-pages', {
                                method: 'POST',
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify({
                                    companyName: siteData.companyName,
                                    sector: siteData.sector,
                                    aboutText: siteData.aboutText
                                })
                            });
                            
                            if(response.ok) {
                                const data = await response.json();
                                if(data.pages && Array.isArray(data.pages)) {
                                     updateSiteData({ pages: data.pages });
                                }
                            }
                        } catch (e) {
                            console.error("Page suggestion failed:", e);
                        }
                        
                        // Move next
                        handleStepChange(step + 1);
                    } else {
                        nextStep();
                    }
                }}
                variant="primary"
                disabled={step === 1 && !siteData.sector}
              >
                Devam Et <ArrowRight size={20} />
              </Button>
           ) : step === 3 ? (
             <Button 
               onClick={() => {
                   setStep(4);
                   // AI Generation Process
                   (async () => {
                        try {
                            const defaults = getSectorDefaults(siteData.sector);
                            
                            // 1. Apply Design Defaults Immediately
                            Object.entries(defaults.design).forEach(([section, componentId]) => {
                                updateSelection(section, componentId);
                            });

                            // 2. Call API for Content
                            const response = await fetch('/api/generate', {
                                method: 'POST',
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify({
                                    companyName: siteData.companyName,
                                    sector: siteData.sector,
                                    aboutText: siteData.aboutText,
                                    pages: siteData.pages
                                })
                            });

                            if (!response.ok) {
                                const errData = await response.json();
                                throw new Error(errData.error || 'Generation failed');
                            }

                            const result = await response.json();
                            
                            // 3. Merge AI Content with Defaults
                            // We use defaults.content as a fallback if AI fails partial keys, 
                            // but here we prioritize AI result
                            const finalContent = { ...defaults.content, ...result.data };
                            
                            updateSiteData({ generatedContent: finalContent });

                        } catch (error) {
                            console.error("AI Generation Error:", error);
                            // Fallback to manual defaults if API fails
                            const defaults = getSectorDefaults(siteData.sector);
                            updateSiteData({ generatedContent: defaults.content });
                        } finally {
                            // 4. Finish
                            handleGenerate();
                        }
                   })();
               }}
               variant="primary"
             >
               Siteyi Oluştur! <Sparkles size={20} />
             </Button>
           ) : null}
        </div>
      </div>
      
      {/* Copyright Footer */}
      <footer className="mt-8 text-neutral-400 text-sm font-medium flex flex-col md:flex-row items-center gap-6">
         <div className="flex items-center gap-4">
            <a href="/sablonlar" className="hover:text-black transition flex items-center gap-1 font-bold text-[#E69419]">
               <Layout size={14} /> Şablonlar
            </a>

         </div>
         <span className="hidden md:inline text-neutral-300">|</span>
         <a href="https://lilidea.com" target="_blank" className="text-neutral-600 hover:text-black transition flex items-center gap-2">
            <img src="/app_icon.png" alt="liliai icon" className="w-5 h-5" /> 
            Lilidea tarafından geliştirildi
         </a>
      </footer>
    </main>
  );
}

