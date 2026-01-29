"use client";
import React, { useState, useEffect } from 'react';
import {
    LayoutTemplate, Palette, FileText, Sparkles,
    Save, Loader2, ArrowRight, ArrowLeft, Globe, Shield
} from 'lucide-react';

export default function SettingsWizard() {
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [step, setStep] = useState(1);

    // Form State
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        logo: '',
        email: '',
        phone: '',
        address: '',
        facebook: '',
        twitter: '',
        instagram: '',
        primaryColor: '#E69419',
        secondaryColor: '#0073FF',
        aiStyle: 'Modern',
        maintenanceMode: false
    });

    useEffect(() => {
        fetchSettings();
    }, []);

    const fetchSettings = async () => {
        try {
            const res = await fetch('/api/admin/settings');
            const data = await res.json();
            if (data.id) {
                setFormData(data);
            }
        } catch (e) {
            console.error(e);
        } finally {
            setLoading(false);
        }
    };

    const handleSave = async () => {
        setSaving(true);
        try {
            const res = await fetch('/api/admin/settings', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            if (res.ok) {
                alert('Ayarlar başarıyla kaydedildi! ✨');
            }
        } catch (e) {
            alert('Hata oluştu.');
        } finally {
            setSaving(false);
        }
    };

    // TABS CONFIGURATION
    const TABS = [
        { id: 1, title: 'Bilgiler', icon: FileText, desc: 'Temel site bilgileri' },
        { id: 2, title: 'Renk', icon: Palette, desc: 'Marka renkleri' },
        { id: 3, title: 'Sayfalar', icon: LayoutTemplate, desc: 'Sayfa ve SEO ayarları' },
        { id: 4, title: 'AI Tasarım', icon: Sparkles, desc: 'Yapay zeka tercihleri' },
    ];

    if (loading) return <div className="p-10 flex text-gray-500 gap-2"><Loader2 className="animate-spin" /> Yükleniyor...</div>;

    return (
        <div className="p-8 w-full mx-auto h-full flex flex-col">
            {/* Header */}
            <div className="mb-8 flex items-end justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                        <div className="p-2 bg-[#E69419]/10 rounded-xl text-[#E69419]">
                            <LayoutTemplate size={24} />
                        </div>
                        Site Yönetimi
                    </h1>
                    <p className="text-gray-500 text-sm mt-1 ml-12">Sitenizi yapılandırın ve özelleştirin.</p>
                </div>
                <div className="flex gap-2">
                    {/* Tab Indicators */}
                    {TABS.map(t => (
                        <button
                            key={t.id}
                            onClick={() => setStep(t.id)}
                            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${step === t.id
                                    ? 'bg-[#E69419] text-white shadow-md shadow-orange-200'
                                    : 'bg-white text-gray-400 border border-gray-100 hover:bg-gray-50'
                                }`}
                        >
                            {t.title}
                        </button>
                    ))}
                </div>
            </div>

            <div className="flex gap-8 flex-1">
                {/* Sidebar (Vertical Tabs) */}
                <div className="w-1/4 space-y-2">
                    {TABS.map((t) => (
                        <button
                            key={t.id}
                            onClick={() => setStep(t.id)}
                            className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 flex items-center gap-3 ${step === t.id
                                    ? 'bg-[#0073FF] text-white border-[#0073FF] shadow-xl scale-105'
                                    : 'bg-white text-gray-500 border-gray-100 hover:bg-gray-50'
                                }`}
                        >
                            <div className={`p-2 rounded-lg ${step === t.id ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-400'}`}>
                                <t.icon size={18} />
                            </div>
                            <div>
                                <div className="font-bold text-sm">{t.title}</div>
                                <div className={`text-[10px] ${step === t.id ? 'text-gray-300' : 'text-gray-400'}`}>{t.desc}</div>
                            </div>
                            {step === t.id && <ArrowRight size={14} className="ml-auto opacity-50" />}
                        </button>
                    ))}
                </div>

                {/* Main Content Area */}
                <div className="flex-1 bg-white rounded-3xl shadow-sm border border-gray-100 p-8 flex flex-col relative overflow-hidden">
                    {/* Background Decorative */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#E69419]/5 to-transparent rounded-bl-full pointer-events-none"></div>

                    <div className="flex-1 space-y-6 relative z-10">
                        <h2 className="text-xl font-bold text-gray-900 border-b border-gray-100 pb-4 mb-6 flex items-center gap-2">
                            {React.createElement(TABS.find(t => t.id === step).icon, { className: "text-[#E69419]" })}
                            {TABS.find(t => t.id === step).title}
                        </h2>

                        {/* 1. BILGILER TAB */}
                        {step === 1 && (
                            <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="col-span-2">
                                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Site Başlığı</label>
                                        <input
                                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#E69419] outline-none transition"
                                            value={formData.title || ''}
                                            onChange={e => setFormData({ ...formData, title: e.target.value })}
                                            placeholder="Örn: Benim Harika Sitem"
                                        />
                                    </div>
                                    <div className="col-span-2">
                                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Açıklama</label>
                                        <textarea
                                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#E69419] outline-none transition resize-none"
                                            rows="3"
                                            value={formData.description || ''}
                                            onChange={e => setFormData({ ...formData, description: e.target.value })}
                                            placeholder="Sitenizi kısaca anlatın..."
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1">E-Posta</label>
                                        <input
                                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#E69419] outline-none transition"
                                            value={formData.email || ''}
                                            onChange={e => setFormData({ ...formData, email: e.target.value })}
                                            placeholder="iletisim@site.com"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Telefon</label>
                                        <input
                                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#E69419] outline-none transition"
                                            value={formData.phone || ''}
                                            onChange={e => setFormData({ ...formData, phone: e.target.value })}
                                            placeholder="+90..."
                                        />
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* 2. RENK TAB */}
                        {step === 2 && (
                            <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-300">
                                <div className="grid grid-cols-2 gap-8">
                                    {/* Primary Color */}
                                    <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 text-center">
                                        <div className="w-16 h-16 rounded-full mx-auto mb-4 border-4 border-white shadow-md" style={{ backgroundColor: formData.primaryColor }}></div>
                                        <label className="block text-sm font-bold text-gray-900 mb-2">Ana Renk (Primary)</label>
                                        <input
                                            type="color"
                                            className="w-full h-10 cursor-pointer rounded-lg"
                                            value={formData.primaryColor || '#E69419'}
                                            onChange={e => setFormData({ ...formData, primaryColor: e.target.value })}
                                        />
                                        <p className="text-xs text-gray-400 mt-2 font-mono uppercase">{formData.primaryColor}</p>
                                    </div>

                                    {/* Secondary Color */}
                                    <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 text-center">
                                        <div className="w-16 h-16 rounded-full mx-auto mb-4 border-4 border-white shadow-md" style={{ backgroundColor: formData.secondaryColor }}></div>
                                        <label className="block text-sm font-bold text-gray-900 mb-2">İkincil Renk (Secondary)</label>
                                        <input
                                            type="color"
                                            className="w-full h-10 cursor-pointer rounded-lg"
                                            value={formData.secondaryColor || '#0073FF'}
                                            onChange={e => setFormData({ ...formData, secondaryColor: e.target.value })}
                                        />
                                        <p className="text-xs text-gray-400 mt-2 font-mono uppercase">{formData.secondaryColor}</p>
                                    </div>
                                </div>

                                <div className="p-4 bg-blue-50 border border-blue-100 rounded-xl flex gap-3 text-blue-800 text-sm">
                                    <Sparkles size={20} className="shrink-0" />
                                    <p>Marka renkleriniz tüm sitede, butonlarda ve vurgulu alanlarda otomatik olarak güncellenecektir.</p>
                                </div>
                            </div>
                        )}

                        {/* 3. SAYFALAR TAB (SEO & System) */}
                        {step === 3 && (
                            <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                                {/* SEO Toggle */}
                                <div className="p-6 rounded-2xl border border-gray-100 bg-gray-50 flex items-start gap-4">
                                    <div className="p-2 bg-white border border-gray-200 text-gray-700 rounded-lg shrink-0 shadow-sm">
                                        <Globe size={24} />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h3 className="font-bold text-gray-900">Arama Motoru İndeksleme</h3>
                                                <p className="text-xs text-gray-500 mt-1 mb-3 max-w-sm">
                                                    Google ve diğer arama motorlarının sitenizi taramasına izin verin.
                                                </p>
                                            </div>
                                            <div className="relative">
                                                <input type="checkbox" className="sr-only peer" defaultChecked={true} />
                                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:bg-[#0073FF] peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Maintenance Mode */}
                                <div className={`p-6 rounded-2xl border transition-all duration-300 flex items-start gap-4 ${formData.maintenanceMode ? 'bg-[#E69419]/5 border-[#E69419]/20' : 'bg-gray-50 border-gray-100'}`}>
                                    <div className={`p-2 rounded-lg shrink-0 shadow-sm transition-colors ${formData.maintenanceMode ? 'bg-[#E69419]/10 text-[#E69419]' : 'bg-white border border-gray-200 text-gray-400'}`}>
                                        <Shield size={24} />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h3 className={`font-bold transition-colors ${formData.maintenanceMode ? 'text-[#E69419]' : 'text-gray-900'}`}>Bakım Modu</h3>
                                                <p className={`text-xs mt-1 mb-3 max-w-sm transition-colors ${formData.maintenanceMode ? 'text-[#E69419]/80' : 'text-gray-500'}`}>
                                                    Aktifleştirildiğinde site ziyaretçilere kapatılır. Sadece size görünür.
                                                </p>
                                            </div>
                                            <label className="flex items-center gap-2 cursor-pointer relative">
                                                <input
                                                    type="checkbox"
                                                    className="sr-only peer"
                                                    checked={formData.maintenanceMode}
                                                    onChange={e => setFormData({ ...formData, maintenanceMode: e.target.checked })}
                                                />
                                                <div className={`w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all ${formData.maintenanceMode ? 'peer-checked:bg-[#E69419]' : ''}`}></div>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* 4. AI TASARIM TAB */}
                        {step === 4 && (
                            <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 uppercase mb-3">Tasarım Dili</label>
                                    <div className="grid grid-cols-3 gap-4">
                                        {['Modern', 'Minimalist', 'Kurumsal'].map((style) => (
                                            <button
                                                key={style}
                                                onClick={() => setFormData({ ...formData, aiStyle: style })}
                                                className={`p-4 rounded-xl border text-center transition-all ${formData.aiStyle === style
                                                        ? 'border-[#E69419] bg-[#E69419]/5 text-[#E69419] ring-2 ring-[#E69419]/20'
                                                        : 'border-gray-200 hover:border-gray-300 text-gray-600'
                                                    }`}
                                            >
                                                <Sparkles size={20} className={`mx-auto mb-2 ${formData.aiStyle === style ? 'text-[#E69419]' : 'text-gray-400'}`} />
                                                <div className="font-bold text-sm">{style}</div>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">AI Ek Notları</label>
                                    <textarea
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#E69419] outline-none transition resize-none"
                                        rows="4"
                                        placeholder="Yapay zekanın sitenizi oluştururken dikkat etmesini istediğiniz özel notlar..."
                                    />
                                </div>
                            </div>
                        )}

                        {/* Footer / Navigation */}
                        <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between">
                            {step > 1 ? (
                                <button
                                    onClick={() => setStep(step - 1)}
                                    className="px-4 py-2 text-gray-500 hover:bg-gray-50 font-bold rounded-xl transition flex items-center gap-2 text-xs"
                                >
                                    <ArrowLeft size={14} /> Önceki
                                </button>
                            ) : <div></div>}

                            <div className="flex gap-3">
                                {step < 4 ? (
                                    <button
                                        onClick={() => setStep(step + 1)}
                                        className="px-6 py-3 bg-[#0073FF] hover:bg-blue-600 text-white font-bold rounded-xl transition flex items-center gap-2 text-sm shadow-lg shadow-blue-100"
                                    >
                                        Sonraki <ArrowRight size={16} />
                                    </button>
                                ) : (
                                    <button
                                        onClick={handleSave}
                                        disabled={saving}
                                        className="px-8 py-3 bg-[#0073FF] hover:bg-blue-600 text-white font-bold rounded-xl transition flex items-center gap-2 text-sm shadow-xl shadow-blue-200 disabled:opacity-50"
                                    >
                                        {saving ? <Loader2 size={16} className="animate-spin" /> : <Save size={16} />}
                                        Kaydet
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
