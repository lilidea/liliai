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
import { useSiteLimit } from '@/hooks/useSiteLimit';
import SplashScreen from '@/components/SplashScreen';
import { SECTORS, getSectorDefaults } from '@/utils/sectorMappings';
import { Trash2, Edit2, Plus, ExternalLink, MoreVertical } from 'lucide-react';

export default function Home() {
  const { siteData, updateSiteData, updateSelection, isLoading, triggerLoading, resetSiteData, loadSiteData } = useSite();
  const { sites, canCreateSite, deleteSite, recordSiteCreation } = useSiteLimit();
  const router = useRouter();

  const [step, setStep] = useState(0); // 0: Dashboard, 1-5: Wizard

  // Initial Splash
  useEffect(() => {
    triggerLoading(1500);
  }, []);

  const handleStepChange = (newStep) => {
    triggerLoading(1200);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    setTimeout(() => {
      setStep(newStep);
    }, 600);
  };

  const nextStep = () => handleStepChange(step + 1);
  const prevStep = () => {
    if (step === 1) handleStepChange(0);
    else handleStepChange(step - 1);
  };
  const goToStep = (s) => handleStepChange(s);

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateSiteData({ [name]: value });
  };

  const handleGenerate = () => {
    // Before routing to preview, ensure it's saved in the sites list
    recordSiteCreation({
      id: siteData.id,
      sector: siteData.sector,
      companyName: siteData.companyName,
      fullData: siteData // Optional snapshot
    });
    router.push('/preview');
  };

  const startNewProject = () => {
    if (!canCreateSite) return;
    resetSiteData();
    handleStepChange(1);
  };

  const editProject = (site) => {
    // We need to load the data. If we didn't store fullData, 
    // we might need a better storage strategy, but context currently saves to 'activeSiteData'.
    // For now, let's assume we can load it if we stored it, or just use context if it matches.
    if (site.data) {
      loadSiteData(site.data);
    }
    handleStepChange(1);
  };

  const progress = useMemo(() => {
    if (step === 0) return 0;
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

    const s = (siteData.sector || '').toLowerCase();
    let hidden = [];

    // Simple keyword matching since it's free text now
    if (s.includes('restoran') || s.includes('cafe') || s.includes('kafe') || s.includes('yemek')) {
      hidden = ['Tedaviler', 'Randevu', 'Projeler', 'Sertifikalar', 'Uzmanlık Alanları', 'Eğitimler'];
    } else if (s.includes('sağlık') || s.includes('doktor') || s.includes('klinik') || s.includes('hastane')) {
      hidden = ['Menü', 'Projeler', 'Ürünler'];
    } else if (s.includes('inşaat') || s.includes('mimarlık')) {
      hidden = ['Menü', 'Tedaviler', 'Randevu', 'Eğitimler', 'Fiyat Listesi'];
    }
    // ... (Keep generic fallback)

    return ALL.filter(p => !hidden.includes(p));
  }, [siteData.sector]);

  const steps = [
    { id: 1, title: "Bilgiler", icon: <Type size={20} /> },
    { id: 2, title: "Renk", icon: <Palette size={20} /> },
    { id: 3, title: "Sayfalar", icon: <FileText size={20} /> },
    { id: 4, title: "Tasarım", icon: <Layout size={20} /> }, // New Step
    { id: 5, title: "AI İçerik", icon: <Sparkles size={20} /> }, // Renamed
  ];

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 text-neutral-900 overflow-hidden relative font-sans selection:bg-black/10">
      {/* Background Decor */}
      <AuroraBackground />
      <div className="fixed inset-0 bg-white/20 backdrop-blur-[1px] -z-10 pointer-events-none"></div>

      {/* Progress Bar (Modern Pills) */}
      <div className="w-full max-w-5xl mb-10 z-10 flex items-center justify-center">
        <div className="bg-white/40 backdrop-blur-md border border-white/50 p-2 rounded-full flex items-center gap-2 shadow-sm flex-wrap justify-center">
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
                  {isCompleted ? <Check size={16} strokeWidth={3} /> : React.cloneElement(s.icon, { size: 16 })}
                </div>
                <span className={`text-sm font-bold uppercase tracking-wider ${isActive ? 'block' : 'hidden md:block'}`}>
                  {s.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-white/80 backdrop-blur-xl border border-neutral-200 w-full max-w-6xl rounded-3xl p-6 md:p-12 shadow-2xl relative z-10 min-h-[60vh] md:min-h-[500px] flex flex-col text-neutral-900">

        {/* Step 0: Dashboard */}
        {step === 0 && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 flex-1 flex flex-col">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
              <div>
                <h1 className="text-4xl font-black tracking-tighter mb-2">Proje Paneli</h1>
                <p className="text-neutral-500 font-medium">Aktif projelerinizi buradan yönetebilirsiniz.</p>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-neutral-100 px-4 py-2 rounded-2xl flex items-center gap-3">
                  <span className="text-xs font-bold uppercase tracking-tight text-neutral-400">Limit</span>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3].map(i => (
                      <div key={i} className={`w-2.5 h-2.5 rounded-full ${i <= sites.length ? 'bg-[#E69419]' : 'bg-neutral-300'}`}></div>
                    ))}
                  </div>
                  <span className="text-sm font-bold ml-1">{sites.length}/3</span>
                </div>

                <Button
                  onClick={startNewProject}
                  disabled={!canCreateSite}
                  className="bg-[#E69419] hover:bg-[#cf8315] text-white shadow-lg shadow-orange-500/20"
                >
                  <Plus size={20} /> Yeni Site
                </Button>
              </div>
            </div>

            {sites.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center p-12 text-center bg-neutral-50 rounded-3xl border-2 border-dashed border-neutral-200">
                <div className="w-20 h-20 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6">
                  <Monitor size={32} className="text-neutral-300" />
                </div>
                <h3 className="text-xl font-bold mb-2">Henüz bir projeniz yok</h3>
                <p className="text-neutral-500 max-w-xs mx-auto mb-8">Hemen ilk profesyonel web sitenizi oluşturmaya başlayın.</p>
                <Button onClick={startNewProject} variant="outline" className="border-2 border-neutral-200">
                  <Plus size={18} /> Başla
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sites.map((site) => (
                  <div key={site.id} className="group bg-white border border-neutral-200 rounded-3xl p-6 hover:shadow-2xl hover:shadow-neutral-200/50 transition-all duration-500 hover:-translate-y-1">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-neutral-50 rounded-2xl flex items-center justify-center group-hover:bg-orange-50 transition-colors">
                        <Monitor size={24} className="text-neutral-400 group-hover:text-[#E69419] transition-colors" />
                      </div>
                      <div className="flex gap-1">
                        <button
                          onClick={() => editProject(site)}
                          className="p-2 hover:bg-neutral-100 rounded-xl text-neutral-400 hover:text-black transition-colors"
                        >
                          <Edit2 size={18} />
                        </button>
                        <button
                          onClick={() => deleteSite(site.id)}
                          className="p-2 hover:bg-red-50 rounded-xl text-neutral-400 hover:text-red-500 transition-colors"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>

                    <h4 className="text-xl font-bold text-neutral-900 mb-1 truncate">{site.companyName || 'Adsız Proje'}</h4>
                    <p className="text-sm text-neutral-500 mb-6 flex items-center gap-1.5 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E69419]"></span>
                      {site.sector || 'Sektör Belirtilmedi'}
                    </p>

                    <div className="flex items-center gap-2">
                      <Button
                        onClick={() => editProject(site)}
                        className="flex-1 bg-black text-xs font-bold uppercase tracking-wider h-11"
                      >
                        Düzenle
                      </Button>
                      <Button
                        onClick={() => {
                          editProject(site);
                          setTimeout(handleGenerate, 500);
                        }}
                        variant="outline"
                        className="w-11 h-11 p-0 flex items-center justify-center border-neutral-200"
                      >
                        <ExternalLink size={18} />
                      </Button>
                    </div>
                  </div>
                ))}

                {canCreateSite && (
                  <button
                    onClick={startNewProject}
                    className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-neutral-100 rounded-3xl hover:border-[#E69419] hover:bg-orange-50/30 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-neutral-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Plus size={24} className="text-neutral-300 group-hover:text-[#E69419]" />
                    </div>
                    <span className="text-sm font-bold text-neutral-400 group-hover:text-[#E69419]">Yeni Proje</span>
                  </button>
                )}
              </div>
            )}

            <div className="mt-auto pt-10 border-t border-neutral-100 flex items-center justify-center text-neutral-400 text-[10px] font-bold uppercase tracking-widest">
              <span>Profesyonel Site Oluşturucu</span>
            </div>
          </div>
        )}

        {/* Step 1: Info */}
        {step === 1 && (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 flex-1 overflow-y-auto custom-scrollbar pr-2">
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
                <Input
                  type="text"
                  name="sector"
                  value={siteData.sector}
                  onChange={handleChange}
                  placeholder="Örn: Mimarlık Ofisi, Güzellik Merkezi..."
                />
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
          <div className="space-y-8 animate-in fade-in slide-in-from-right-8 duration-500 flex-1 flex flex-col items-center justify-center text-center overflow-y-auto custom-scrollbar">
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
          <div className="space-y-4 md:space-y-6 animate-in fade-in slide-in-from-right-8 duration-500 flex-1 flex flex-col overflow-hidden">
            <div className="text-center mb-4 md:mb-6 shrink-0">
              <h2 className="text-2xl md:text-3xl font-black tracking-tighter text-neutral-900">Site Haritası</h2>
              <p className="text-neutral-500 text-sm md:text-base">Sitenizde hangi sayfalar olsun?</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 max-w-4xl mx-auto overflow-y-auto custom-scrollbar flex-1 p-1">
              {filteredPages.map((page) => (
                <div
                  key={page}
                  onClick={() => {
                    const current = siteData.pages || [];
                    let newPages;
                    if (current.includes(page)) {
                      newPages = current.filter(p => p !== page);
                    } else {
                      newPages = [...current, page];
                    }
                    updateSiteData({ pages: newPages });
                  }}
                  className={`p-3 md:p-4 rounded-xl border-2 cursor-pointer flex items-center justify-between transition-all ${(siteData.pages || []).includes(page)
                    ? 'border-[#E69419] bg-orange-50 shadow-md'
                    : 'border-neutral-100 hover:border-neutral-200 bg-white'
                    }`}
                >
                  <div className="flex items-center gap-2 md:gap-3 min-w-0 flex-1">
                    <div className={`w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${(siteData.pages || []).includes(page) ? 'bg-[#E69419] text-white' : 'bg-neutral-100 text-neutral-400'
                      }`}
                    >
                      <FileText size={12} className="md:w-3.5 md:h-3.5" />
                    </div>
                    <span className="font-semibold md:font-bold text-sm md:text-base text-gray-800 truncate">{page}</span>
                  </div>

                  <div className={`w-5 h-5 md:w-6 md:h-6 rounded-full border-2 flex items-center justify-center shrink-0 ml-2 transition-all ${(siteData.pages || []).includes(page) ? 'bg-[#E69419] border-[#E69419] text-white' : 'border-neutral-200'
                    }`}
                  >
                    {(siteData.pages || []).includes(page) && <Check size={12} className="md:w-3.5 md:h-3.5" />}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Step 4: Design Studio (Manual Selection) */}
        {step === 4 && (
          <DesignStudio />
        )}

        {/* Step 5: AI Content Generation */}
        {step === 5 && (
          <div className="flex flex-col items-center justify-center text-center h-full animate-in fade-in duration-700">
            <div className="mb-8 relative">
              <div className="absolute inset-0 bg-[#E69419] blur-2xl opacity-20 animate-pulse"></div>
              <Sparkles size={64} className="text-[#E69419] relative z-10 animate-bounce" />
            </div>

            <h2 className="text-4xl font-black tracking-tighter mb-4">Yapay Zeka İçeriği Hazırlıyor</h2>
            <p className="text-lg text-neutral-500 max-w-md mx-auto mb-8">
              Seçtiğiniz tasarım şablonlarına ({SECTORS.find(s => s.id === siteData.sector)?.label || 'Genel'}) uygun profesyonel içerikler ve görseller oluşturuluyor...
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
            disabled={step === 0 || step === 5} // Disable back on AI step or if on dashboard
            variant="ghost"
            className={`${(step === 0 || step === 5) ? 'opacity-0 pointer-events-none' : ''}`}
          >
            <ArrowLeft size={20} /> Geri
          </Button>

          {step < 5 ? (
            <Button
              onClick={async () => {
                if (step === 2) {
                  // User is moving to Step 3 (Pages). Trigger AI Suggestion.
                  triggerLoading(2500);
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

                    if (response.ok) {
                      const data = await response.json();
                      if (data.pages && Array.isArray(data.pages)) {
                        updateSiteData({ pages: data.pages });
                      }
                    }
                  } catch (e) {
                    console.error("Page suggestion failed:", e);
                  }

                  handleStepChange(step + 1);
                }
                else if (step === 3) {
                  // Moving to Step 4 (Design)
                  // Apply defaults as a starting point, user can change them in Step 4
                  const defaults = getSectorDefaults(siteData.sector);
                  Object.entries(defaults.design).forEach(([section, componentId]) => {
                    // Only set if not already set (optional, or just overwrite to ensure defaults match sector)
                    // Overwriting is better here since user just defined/refined sector/pages
                    updateSelection(section, componentId);
                  });

                  handleStepChange(step + 1);
                }
                else if (step === 4) {
                  // Moving to Step 5 (Generation)
                  setStep(5);

                  // AI Generation Process (CONTENT ONLY)
                  (async () => {
                    try {
                      const defaults = getSectorDefaults(siteData.sector);

                      // 1. (Skipped) Design defaults are already handled in Step 4 and stored in siteData.selectedComponents

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
                      const finalContent = { ...defaults.content, ...result.data };

                      updateSiteData({ generatedContent: finalContent });

                      // 4. Log to Analytics (Internal Use)
                      try {
                        await fetch('/api/admin/log', {
                          method: 'POST',
                          headers: { 'Content-Type': 'application/json' },
                          body: JSON.stringify({
                            ...siteData,
                            generatedContent: finalContent
                          })
                        });
                      } catch (e) {
                        console.error("Internal logging failed:", e);
                      }

                    } catch (error) {
                      console.error("AI Generation Error:", error);
                      // Fallback to manual defaults
                      const defaults = getSectorDefaults(siteData.sector);
                      updateSiteData({ generatedContent: defaults.content });
                    } finally {
                      // 4. Finish
                      handleGenerate();
                    }
                  })();
                }
                else {
                  nextStep();
                }
              }}
              variant="primary"
              disabled={step === 1 && !siteData.sector}
            >
              {step === 4 ? (
                <>Siteyi Oluştur! <Sparkles size={20} /></>
              ) : (
                <>Devam Et <ArrowRight size={20} /></>
              )}
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

