import React, { useState } from 'react';
import { X, Sparkles, Image as ImageIcon, Type, Save, Edit3 } from 'lucide-react';
import { useSite } from '@/app/context/SiteContext';
import { Input } from '@/components/Input';
import { Textarea } from '@/components/Textarea';
import { Button } from '@/components/Button';

export default function CustomizationSidebar({ 
    isOpen, 
    onClose, 
    activeSection,
    activeCategory // 'hero', 'about', 'services' etc.
}) {
    const { siteData, updateSiteData } = useSite();
    const [isGenerating, setIsGenerating] = useState(false);

    // Dynamic field mapping based on category
    // This is a simplified version. Ideally, components would expose their schema.
    const renderFields = () => {
        switch(activeCategory) {
            case 'hero':
                return (
                    <>
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-neutral-400 uppercase">Başlık</label>
                            <Input 
                                value={siteData.heroTitle || ''} 
                                onChange={(e) => updateSiteData({ heroTitle: e.target.value })}
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-neutral-400 uppercase">Alt Başlık</label>
                            <Textarea 
                                value={siteData.aboutText || ''} 
                                onChange={(e) => updateSiteData({ aboutText: e.target.value })}
                                rows={3}
                            />
                        </div>
                    </>
                );
            
            case 'header':
            case 'footer':
                 return (
                    <div className="text-center p-8 bg-neutral-50 rounded-xl text-neutral-400">
                        <Type size={32} className="mx-auto mb-2 opacity-50"/>
                        <p className="text-sm">Menü yapılandırması şu an sadece sihirbaz üzerinden değiştirilebilir.</p>
                    </div>
                );

            default:
                // Generic Page Content
                return (
                    <>
                         <div className="space-y-2">
                            <label className="text-xs font-bold text-neutral-400 uppercase">İçerik Metni</label>
                             <Textarea 
                                value={siteData[`content_${activeSection}`] || ''} 
                                onChange={(e) => updateSiteData({ [`content_${activeSection}`]: e.target.value })}
                                rows={8}
                                placeholder="Buraya içerik girin..."
                            />
                        </div>
                        {siteData[`image_${activeSection}`] && (
                             <div className="space-y-2">
                                <label className="text-xs font-bold text-neutral-400 uppercase">Görsel</label>
                                <div className="rounded-xl overflow-hidden border border-neutral-200">
                                    <img src={siteData[`image_${activeSection}`]} className="w-full h-auto" />
                                </div>
                                <Button 
                                    variant="secondary" 
                                    className="w-full text-xs py-2"
                                    onClick={() => {
                                        const randomColor = Math.floor(Math.random()*16777215).toString(16);
                                        updateSiteData({ [`image_${activeSection}`]: `https://placehold.co/800x600/${randomColor}/white?text=${encodeURIComponent(activeSection)}` });
                                    }}
                                >
                                    <ImageIcon size={14} /> Görseli Değiştir (Rastgele)
                                </Button>
                             </div>
                        )}
                    </>
                );
        }
    };

    return (
        <div className={`fixed top-0 right-0 h-full w-96 bg-white shadow-2xl z-[60] transform transition-transform duration-300 border-l border-neutral-100 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="h-full flex flex-col">
                {/* Header */}
                <div className="p-6 border-b border-neutral-100 flex items-center justify-between bg-neutral-50/50">
                    <div>
                        <h3 className="font-bold text-lg text-neutral-900">Özelleştir</h3>
                        <p className="text-xs text-neutral-500 uppercase tracking-widest font-bold text-[#E69419]">{activeSection}</p>
                    </div>
                    <button onClick={onClose} className="p-2 hover:bg-neutral-100 rounded-full transition-colors">
                        <X size={20} className="text-neutral-500" />
                    </button>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
                    {renderFields()}
                </div>

                {/* Footer AI Actions */}
                <div className="p-6 border-t border-neutral-100 bg-neutral-50">
                    <Button 
                        onClick={async () => {
                            const btn = document.getElementById('ai-btn');
                            setIsGenerating(true);
                            await new Promise(r => setTimeout(r, 1500));
                            // Simple mock AI enhancement
                            if (activeCategory === 'hero') {
                                updateSiteData({ 
                                    heroTitle: "Daha Profesyonel Başlık Önerisi",
                                    aboutText: "Yapay zeka tarafından optimize edilmiş, müşteri odaklı ve etkileyici bir alt açıklama metni."
                                });
                            }
                            setIsGenerating(false);
                        }}
                        className="w-full bg-gradient-to-r from-[#0073FF] to-[#E69419] border-none text-white hover:opacity-90 shadow-lg"
                        id="ai-btn"
                        disabled={isGenerating}
                    >
                       {isGenerating ? <span className="animate-pulse">Sihir Yapılıyor...</span> : <><Sparkles size={16} /> AI ile İyileştir</>} 
                    </Button>
                </div>
            </div>
        </div>
    );
}
