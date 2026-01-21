import React, { useState } from 'react';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { Textarea } from '@/components/Textarea';
import { Sparkles, Monitor, FileText, Type, Image as ImageIcon, ChevronRight, Check } from 'lucide-react';
import { useSite } from '@/app/context/SiteContext';

export default function ContentStudio() {
    const { siteData, updateSiteData } = useSite();
    const [activeSection, setActiveSection] = useState('general'); // general | page_Name

    const pages = siteData.pages || [];

    const handleGenerate = async (type, page) => {
        // Simulate generation
        await new Promise(r => setTimeout(r, 1500));
        
        if (type === 'general') {
             updateSiteData({ 
                aboutText: `${siteData.companyName} hakkında profesyonel tanıtım yazısı.`,
                heroTitle: `${siteData.companyName} ile Geleceği İnşaa Edin`
            });
        } else if (type === 'text') {
             updateSiteData({ [`content_${page}`]: `${page} sayfası için özel olarak hazırlanan detaylı içerik metni.` });
        } else if (type === 'image') {
             const randomColor = Math.floor(Math.random()*16777215).toString(16);
             updateSiteData({ [`image_${page}`]: `https://placehold.co/800x600/${randomColor}/white?text=${encodeURIComponent(page)}` });
        }
    };

    return (
        <div className="animate-in fade-in slide-in-from-right-8 duration-500 flex flex-col h-full overflow-hidden">
            <div className="text-center mb-6 shrink-0">
                <h2 className="text-3xl font-black tracking-tighter text-neutral-900">İçerik Stüdyosu</h2>
                <p className="text-neutral-500">Yapay zeka desteğiyle sitenizi doldurun.</p>
            </div>

            <div className="flex flex-1 gap-6 overflow-hidden min-h-[400px]">
                {/* Sidebar */}
                <div className="w-1/3 border-r border-neutral-100 pr-4 overflow-y-auto custom-scrollbar flex flex-col gap-2">
                    <button
                        onClick={() => setActiveSection('general')}
                        className={`w-full text-left p-4 rounded-xl flex items-center justify-between transition-all ${
                            activeSection === 'general' ? 'bg-[#E69419] text-white shadow-md' : 'hover:bg-neutral-50 text-neutral-600'
                        }`}
                    >
                        <div className="flex items-center gap-3">
                            <Monitor size={18} />
                            <span className="font-bold">Genel Bilgiler</span>
                        </div>
                        {activeSection === 'general' && <ChevronRight size={16} />}
                    </button>

                    <div className="h-px bg-neutral-100 my-2"></div>
                    <p className="text-xs font-bold text-neutral-400 uppercase tracking-widest px-2 mb-1">Sayfalar</p>

                    {pages.map(page => (
                         <button
                            key={page}
                            onClick={() => setActiveSection(page)}
                            className={`w-full text-left p-4 rounded-xl flex items-center justify-between transition-all ${
                                activeSection === page ? 'bg-[#E69419] text-white shadow-md' : 'hover:bg-neutral-50 text-neutral-600'
                            }`}
                        >
                            <div className="flex items-center gap-3">
                                <FileText size={18} />
                                <span className="font-bold">{page}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                {siteData[`content_${page}`] && <div className="w-2 h-2 rounded-full bg-green-400"></div>}
                                {activeSection === page && <ChevronRight size={16} />}
                            </div>
                        </button>
                    ))}
                </div>

                {/* Main Content */}
                <div className="flex-1 overflow-y-auto custom-scrollbar pl-2">
                    {activeSection === 'general' ? (
                        <div className="space-y-6 animate-in fade-in duration-300">
                             <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-100">
                                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                                    <Sparkles className="text-[#E69419]" size={20}/> AI İçerik Üreticisi
                                </h3>
                                <p className="text-sm text-neutral-500 mb-4">
                                    Firma isminize ({siteData.companyName}) dayalı olarak genel site başlıklarını ve metinlerini otomatik oluşturun.
                                </p>
                                <Button 
                                    onClick={() => handleGenerate('general')}
                                    className="w-full bg-black hover:bg-neutral-800 text-white"
                                >
                                    <Sparkles size={16} className="mr-2"/> Tümünü Oluştur
                                </Button>
                             </div>

                             <div className="space-y-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-neutral-700">Hero (Ana) Başlık</label>
                                    <Input 
                                        value={siteData.heroTitle || ''} 
                                        onChange={(e) => updateSiteData({ heroTitle: e.target.value })}
                                        placeholder="Sitenizin ana sloganı..." 
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-neutral-700">Hakkımızda Özeti</label>
                                    <Textarea 
                                        value={siteData.aboutText || ''} 
                                        onChange={(e) => updateSiteData({ aboutText: e.target.value })}
                                        placeholder="Kısa firma tanıtımı..." 
                                        rows={4} 
                                    />
                                </div>
                             </div>
                        </div>
                    ) : (
                        <div className="space-y-6 animate-in fade-in duration-300">
                             <div className="flex items-center justify-between mb-2">
                                <h3 className="text-2xl font-bold text-neutral-900">{activeSection} Sayfası</h3>
                                <span className="px-3 py-1 bg-neutral-100 text-neutral-500 rounded-full text-xs font-bold uppercase">Sayfa İçeriği</span>
                             </div>

                             <div className="grid grid-cols-2 gap-4">
                                <Button 
                                    onClick={() => handleGenerate('text', activeSection)}
                                    variant="outline"
                                    className="h-auto py-4 flex flex-col gap-2 border-dashed border-2 hover:border-[#E69419] hover:bg-[#E69419]/5"
                                >
                                    <Type size={24} className="text-[#E69419]"/>
                                    <span>Metin Üret</span>
                                </Button>
                                <Button 
                                    onClick={() => handleGenerate('image', activeSection)}
                                    variant="outline"
                                    className="h-auto py-4 flex flex-col gap-2 border-dashed border-2 hover:border-[#E69419] hover:bg-[#E69419]/5"
                                >
                                    <ImageIcon size={24} className="text-[#E69419]"/>
                                    <span>Görsel Üret</span>
                                </Button>
                             </div>

                             <div className="space-y-4 mt-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-neutral-700">Sayfa Metni</label>
                                    <Textarea 
                                        value={siteData[`content_${activeSection}`] || ''} 
                                        onChange={(e) => updateSiteData({ [`content_${activeSection}`]: e.target.value })}
                                        placeholder={`${activeSection} sayfası için içerik metni...`}
                                        rows={6}
                                        className="font-mono text-sm"
                                    />
                                </div>

                                {siteData[`image_${activeSection}`] && (
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-neutral-700">Sayfa Görseli</label>
                                        <div className="rounded-xl overflow-hidden border border-neutral-200 shadow-sm relative group bg-neutral-50">
                                            <img src={siteData[`image_${activeSection}`]} className="w-full h-48 object-cover" />
                                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                                <Button size="sm" variant="ghost" className="text-white hover:text-white border-white border">Değiştir</Button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                             </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
