import React, { useState } from 'react';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { Textarea } from '@/components/Textarea';
import { Bot, Monitor, FileText, Type, Image as ImageIcon, ChevronRight, Check, Sparkles, RefreshCw } from 'lucide-react';
import { useSite } from '@/app/context/SiteContext';

export default function ContentStudio() {
    const { siteData, updateSiteData } = useSite();
    const [activeSection, setActiveSection] = useState('general'); // general | page_Name
    const [isGenerating, setIsGenerating] = useState(false);
    const [isRewriting, setIsRewriting] = useState(false);
    const [imageSuggestions, setImageSuggestions] = useState([]);

    const pages = siteData.pages || [];

    const handleRewrite = async (field, currentValue) => {
        if (!currentValue) return;
        setIsRewriting(true);
        try {
            const res = await fetch('/api/generate', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ type: 'rewrite', text: currentValue })
            });
            const result = await res.json();
            if (result.success) {
                updateSiteData({ [field]: result.data });
            }
        } catch (e) {
            console.error(e);
        } finally {
            setIsRewriting(false);
        }
    };

    const handleImageSuggestions = async () => {
        try {
            const res = await fetch('/api/generate', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    type: 'suggest_images',
                    sector: siteData.sector,
                    companyName: siteData.companyName
                })
            });
            const result = await res.json();
            if (result.success) {
                setImageSuggestions(result.data);
            }
        } catch (e) {
            console.error(e);
        }
    };

    const handleFullGeneration = async () => {
        setIsGenerating(true);
        triggerLoading(3000);
        try {
            const res = await fetch('/api/generate', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    type: 'full_site',
                    companyName: siteData.companyName,
                    sector: siteData.sector,
                    aboutText: siteData.aboutText,
                    pages: siteData.pages
                })
            });
            const result = await res.json();
            if (result.success) {
                const { branding, selections, content } = result.data;

                // Update everything in one go
                updateSiteData({
                    primaryColor: branding.primaryColor,
                    secondaryColor: branding.secondaryColor,
                    heroTitle: content.heroTitle,
                    heroSubtitle: content.heroSubtitle,
                    aboutText: content.aboutText,
                    selectedComponents: {
                        ...siteData.selectedComponents,
                        ...selections
                    },
                    // Map page contents
                    ...Object.keys(content.pages).reduce((acc, pageName) => ({
                        ...acc,
                        [`title_${pageName}`]: content.pages[pageName].title,
                        [`content_${pageName}`]: content.pages[pageName].content,
                    }), {})
                });
            }
        } catch (e) {
            console.error(e);
        } finally {
            setIsGenerating(false);
        }
    };

    const handleGenerate = async (type, page) => {
        // Individual generation logic
        setIsGenerating(true);
        try {
            const res = await fetch('/api/generate', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    type: 'individual', // The fallback logic in route.js handles this
                    companyName: siteData.companyName,
                    sector: siteData.sector,
                    aboutText: siteData.aboutText,
                    pages: [page]
                })
            });
            const result = await res.json();
            if (result.success) {
                if (type === 'general') {
                    updateSiteData({
                        heroTitle: result.data.hero.title,
                        heroSubtitle: result.data.hero.subtitle,
                        aboutText: result.data.about.text
                    });
                } else if (type === 'text') {
                    updateSiteData({ [`content_${page}`]: result.data.about.text }); // Use about as generic text
                }
            }
        } catch (e) {
            console.error(e);
        } finally {
            setIsGenerating(false);
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
                        className={`w-full text-left p-4 rounded-xl flex items-center justify-between transition-all ${activeSection === 'general' ? 'bg-[#E69419] text-white shadow-md' : 'hover:bg-neutral-50 text-neutral-600'
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
                            className={`w-full text-left p-4 rounded-xl flex items-center justify-between transition-all ${activeSection === page ? 'bg-[#E69419] text-white shadow-md' : 'hover:bg-neutral-50 text-neutral-600'
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
                            <div className="bg-gradient-to-br from-[#E69419] to-orange-600 p-8 rounded-[32px] text-white shadow-xl shadow-orange-200">
                                <h3 className="font-black text-2xl mb-2 flex items-center gap-3">
                                    <Sparkles size={28} /> Akıllı Kurulum
                                </h3>
                                <p className="text-white/80 text-sm mb-6 leading-relaxed">
                                    AI, firmanız için en uygun tasarım şablonlarını seçer, renk paletini belirler ve tüm içerikleri tek tıkla oluşturur.
                                </p>
                                <Button
                                    onClick={handleFullGeneration}
                                    disabled={isGenerating}
                                    className="w-full bg-white text-orange-600 hover:bg-neutral-50 font-black h-14 rounded-2xl shadow-lg transition-all active:scale-95"
                                >
                                    {isGenerating ? <RefreshCw className="animate-spin mr-2" /> : <Bot size={20} className="mr-2" />}
                                    Sitemi Akıllıca Oluştur
                                </Button>
                            </div>

                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-neutral-700">Logo</label>
                                    <div className="flex gap-4 items-start">
                                        <div className="w-24 h-24 rounded-xl border border-neutral-200 overflow-hidden bg-neutral-50 flex items-center justify-center shrink-0">
                                            {siteData.logoUrl ? (
                                                <img src={siteData.logoUrl} className="w-full h-full object-cover" />
                                            ) : (
                                                <div className="text-neutral-300 text-xs text-center p-2">Logo Yok</div>
                                            )}
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-xs text-neutral-500 mb-2">Markanız için yapay zeka ile otomatik logo oluşturun.</p>
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                onClick={() => handleGenerate('logo')}
                                                className="w-full"
                                            >
                                                <Bot size={14} className="mr-2 text-[#E69419]" /> Logo Oluştur
                                            </Button>
                                        </div>
                                    </div>
                                </div>

                                <div className="h-px bg-neutral-100 my-2"></div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-neutral-700">Hero (Ana) Başlık</label>
                                    <Input
                                        value={siteData.heroTitle || ''}
                                        onChange={(e) => updateSiteData({ heroTitle: e.target.value })}
                                        placeholder="Sitenizin ana sloganı..."
                                    />
                                </div>
                                <div className="space-y-2">
                                    <div className="flex justify-between items-center">
                                        <label className="text-sm font-bold text-neutral-700">Hakkımızda Özeti</label>
                                        <button
                                            onClick={() => handleRewrite('aboutText', siteData.aboutText)}
                                            disabled={isRewriting || !siteData.aboutText}
                                            className="text-[10px] font-bold text-[#E69419] flex items-center gap-1 hover:underline disabled:opacity-50"
                                        >
                                            {isRewriting ? <RefreshCw size={10} className="animate-spin" /> : <Sparkles size={10} />}
                                            AI İLE DÜZENLE
                                        </button>
                                    </div>
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
                                    <Bot size={24} className="text-[#E69419]" />
                                    <span>Metin Üret</span>
                                </Button>
                                <Button
                                    onClick={() => handleGenerate('image', activeSection)}
                                    variant="outline"
                                    className="h-auto py-4 flex flex-col gap-2 border-dashed border-2 hover:border-[#E69419] hover:bg-[#E69419]/5"
                                >
                                    <ImageIcon size={24} className="text-[#E69419]" />
                                    <span>Görsel Üret</span>
                                </Button>
                            </div>

                            <div className="space-y-4 mt-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-neutral-700">Sayfa Başlığı</label>
                                    <Input
                                        value={siteData[`title_${activeSection}`] || ''}
                                        onChange={(e) => updateSiteData({ [`title_${activeSection}`]: e.target.value })}
                                        placeholder={`${activeSection} - ${siteData.companyName}`}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-neutral-700">Anahtar Kelimeler (Keywords)</label>
                                    <Input
                                        value={siteData[`keywords_${activeSection}`] || ''}
                                        onChange={(e) => updateSiteData({ [`keywords_${activeSection}`]: e.target.value })}
                                        placeholder="kurumsal, hizmetler, iletişim..."
                                    />
                                </div>

                                <div className="space-y-2">
                                    <div className="flex justify-between items-center">
                                        <label className="text-sm font-bold text-neutral-700">Sayfa Metni</label>
                                        <button
                                            onClick={() => handleRewrite(`content_${activeSection}`, siteData[`content_${activeSection}`])}
                                            disabled={isRewriting || !siteData[`content_${activeSection}`]}
                                            className="text-[10px] font-bold text-[#E69419] flex items-center gap-1 hover:underline disabled:opacity-50"
                                        >
                                            {isRewriting ? <RefreshCw size={10} className="animate-spin" /> : <Sparkles size={10} />}
                                            AI İLE DÜZENLE
                                        </button>
                                    </div>
                                    <Textarea
                                        value={siteData[`content_${activeSection}`] || ''}
                                        onChange={(e) => updateSiteData({ [`content_${activeSection}`]: e.target.value })}
                                        placeholder={`${activeSection} sayfası için içerik metni...`}
                                        rows={6}
                                        className="font-mono text-sm"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <div className="flex justify-between items-center">
                                        <label className="text-sm font-bold text-neutral-700">Sayfa Görseli Önerileri</label>
                                        <button
                                            onClick={handleImageSuggestions}
                                            className="text-[10px] font-bold text-[#E69419] flex items-center gap-1 hover:underline"
                                        >
                                            <Sparkles size={10} /> ÖNERİ GETİR
                                        </button>
                                    </div>
                                    {imageSuggestions.length > 0 && (
                                        <div className="flex flex-wrap gap-2">
                                            {imageSuggestions.map(tag => (
                                                <button
                                                    key={tag}
                                                    onClick={() => updateSiteData({ [`image_${activeSection}`]: `https://source.unsplash.com/featured/?${tag}` })}
                                                    className="px-2 py-1 bg-neutral-100 hover:bg-[#E69419] hover:text-white rounded text-[10px] font-medium transition-colors"
                                                >
                                                    {tag}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {siteData[`image_${activeSection}`] && (
                                    <div className="space-y-2 pt-2">
                                        <div className="rounded-xl overflow-hidden border border-neutral-200 shadow-sm relative group bg-neutral-50">
                                            <img src={siteData[`image_${activeSection}`]} className="w-full h-48 object-cover" />
                                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                                <Button size="sm" variant="ghost" className="text-white hover:text-white border-white border" onClick={() => updateSiteData({ [`image_${activeSection}`]: '' })}>Kaldır</Button>
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
