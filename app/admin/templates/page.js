"use client";
import React, { useState, useEffect } from 'react';
import { LayoutTemplate, Plus, Trash2, Edit, Check, Sparkles, Loader2, RefreshCw, X } from 'lucide-react';

export default function TemplatesPage() {
    const [templates, setTemplates] = useState([]);
    const [loading, setLoading] = useState(true);

    // UI States
    const [showWizard, setShowWizard] = useState(false);
    const [wizardStep, setWizardStep] = useState('PROMPT'); // PROMPT -> GENERATING -> PREVIEW

    // Data States
    const [category, setCategory] = useState('Startup');
    const [generatedTemplate, setGeneratedTemplate] = useState(null);
    const [isGenerating, setIsGenerating] = useState(false);
    const [editingTemplate, setEditingTemplate] = useState(null);

    const fetchTemplates = async () => {
        setLoading(true);
        try {
            const res = await fetch('/api/admin/templates');
            const data = await res.json();
            if (Array.isArray(data)) {
                setTemplates(data);
            } else {
                console.error("Templates API returned non-array data:", data);
                setTemplates([]);
            }
        } catch (e) {
            console.error(e);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchTemplates();
    }, []);

    const handleDelete = async (id) => {
        if (!confirm('Bu şablonu silmek istediğinize emin misiniz?')) return;
        await fetch(`/api/admin/templates?id=${id}`, { method: 'DELETE' });
        fetchTemplates();
    };

    const handleGenerate = async () => {
        setIsGenerating(true);
        setWizardStep('GENERATING');
        try {
            const res = await fetch('/api/ai/generate-template', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ prompt, category })
            });
            const data = await res.json();

            if (res.ok) {
                setGeneratedTemplate(data);
                setWizardStep('PREVIEW');
            } else {
                alert('Oluşturma hatası: ' + data.error);
                setWizardStep('PROMPT');
            }
        } catch (e) {
            alert('Bir hata oluştu.');
            setWizardStep('PROMPT');
        } finally {
            setIsGenerating(false);
        }
    };

    const handleUpdate = async () => {
        if (!editingTemplate) return;

        try {
            await fetch('/api/admin/templates', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(editingTemplate)
            });
            setEditingTemplate(null);
            fetchTemplates();
        } catch (e) {
            alert('Güncelleme hatası');
        }
    };

    const handleSave = async () => {
        if (!generatedTemplate) return;

        await fetch('/api/admin/templates', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(generatedTemplate)
        });

        setShowWizard(false);
        setGeneratedTemplate(null);
        setPrompt('');
        setWizardStep('PROMPT');
        fetchTemplates();
    };

    return (
        <div className="p-8 w-full mx-auto h-full flex flex-col">
            <header className="mb-8 flex justify-between items-end">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                        <LayoutTemplate className="text-[#0073FF]" /> Şablon Yönetimi
                    </h1>
                    <p className="text-gray-500 text-sm">AI destekli stüdyo ile hayalinizdeki siteyi saniyeler içinde tasarlayın.</p>
                </div>
                <button
                    onClick={() => setShowWizard(true)}
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#E69419] to-[#d48612] hover:shadow-lg hover:shadow-orange-200 text-white rounded-xl font-bold transition-all group"
                >
                    <Sparkles size={18} className="group-hover:rotate-12 transition-transform" />
                    AI ile Oluştur
                </button>
            </header>

            {loading ? (
                <div className="flex-1 flex items-center justify-center text-gray-400">Yükleniyor...</div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-20">
                    {templates.map(t => (
                        <div key={t.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                            {/* Thumbnail */}
                            <div className="h-48 bg-gray-100 relative overflow-hidden">
                                {t.thumbnail ? (
                                    <img src={t.thumbnail} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-gray-300">
                                        <LayoutTemplate size={48} />
                                    </div>
                                )}
                                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase text-gray-600 border border-gray-200 shadow-sm">
                                    {t.category}
                                </div>
                            </div>

                            <div className="p-5">
                                <h3 className="font-bold text-gray-900 mb-1 line-clamp-1">{t.name}</h3>
                                <p className="text-xs text-gray-500 line-clamp-2 min-h-[2.5em]">{t.description || 'Açıklama yok.'}</p>

                                <div className="mt-5 flex gap-2 pt-4 border-t border-gray-50">
                                    <button
                                        onClick={() => setEditingTemplate(t)}
                                        className="flex-1 py-2 bg-blue-50 text-[#0073FF] text-xs font-bold rounded-lg hover:bg-blue-100 transition flex items-center justify-center gap-2">
                                        <Edit size={14} /> Düzenle
                                    </button>
                                    <button
                                        onClick={() => handleDelete(t.id)}
                                        className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition"
                                    >
                                        <Trash2 size={16} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}

                    {templates.length === 0 && (
                        <div className="col-span-full py-20 text-center text-gray-400 border-2 border-dashed border-gray-200 rounded-3xl bg-gray-50/50">
                            <Sparkles size={48} className="mx-auto mb-4 text-[#E69419] opacity-50" />
                            <p>Henüz bir şablon yok. <br /> sağ üstteki <b>AI ile Oluştur</b> butonuna basarak sihrini konuştur!</p>
                        </div>
                    )}
                </div>
            )}



            {/* Edit Modal */}
            {editingTemplate && (
                <div className="fixed inset-0 bg-black/60 z-[200] flex items-center justify-center p-4 backdrop-blur-sm animate-in fade-in duration-200">
                    <div className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl overflow-hidden flex flex-col max-h-[90vh]">
                        <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                            <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                                <Edit size={18} className="text-[#0073FF]" /> Şablonu Düzenle
                            </h2>
                            <button onClick={() => setEditingTemplate(null)} className="p-2 hover:bg-gray-100 rounded-full text-gray-400">
                                <X size={20} />
                            </button>
                        </div>

                        <div className="p-8 overflow-y-auto custom-scrollbar space-y-4">
                            <div>
                                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Şablon Adı</label>
                                <input
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                                    value={editingTemplate.name}
                                    onChange={e => setEditingTemplate({ ...editingTemplate, name: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Kategori</label>
                                <select
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                                    value={editingTemplate.category}
                                    onChange={e => setEditingTemplate({ ...editingTemplate, category: e.target.value })}
                                >
                                    {['Startup', 'Kurumsal', 'E-Ticaret', 'Portfolyo', 'Restoran', 'Blog', 'Law', 'Gym'].map(cat => (
                                        <option key={cat} value={cat}>{cat}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Açıklama</label>
                                <textarea
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                                    rows="2"
                                    value={editingTemplate.description || ''}
                                    onChange={e => setEditingTemplate({ ...editingTemplate, description: e.target.value })}
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-gray-700 uppercase mb-1 flex justify-between">
                                    <span>JSON İçerik</span>
                                    <span className="text-[10px] text-gray-400 font-normal">Dikkatli düzenleyin</span>
                                </label>
                                <textarea
                                    className="w-full px-4 py-3 bg-gray-900 text-green-400 font-mono text-xs rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                                    rows="10"
                                    value={editingTemplate.content}
                                    onChange={e => setEditingTemplate({ ...editingTemplate, content: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="p-6 border-t border-gray-100 bg-gray-50 flex justify-end gap-3">
                            <button
                                onClick={() => setEditingTemplate(null)}
                                className="px-6 py-3 text-gray-500 hover:text-gray-900 font-bold transition"
                            >
                                İptal
                            </button>
                            <button
                                onClick={handleUpdate}
                                className="px-6 py-3 bg-[#0073FF] hover:bg-blue-600 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-200 flex items-center gap-2"
                            >
                                <Check size={18} />
                                Güncelle
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* AI Wizard Modal */}
            {showWizard && (
                <div className="fixed inset-0 bg-black/60 z-[200] flex items-center justify-center p-4 backdrop-blur-sm animate-in fade-in duration-200">
                    <div className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl overflow-hidden flex flex-col max-h-[90vh]">
                        {/* Header */}
                        <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#E69419] to-orange-400 flex items-center justify-center text-white shadow-lg shadow-orange-200">
                                    <Sparkles size={20} />
                                </div>
                                <div>
                                    <h2 className="text-lg font-bold text-gray-900">AI Şablon Sihirbazı</h2>
                                    <p className="text-xs text-gray-500">Hayalinizdeki siteyi tarif edin, yapay zeka tasarlasın.</p>
                                </div>
                            </div>
                            <button onClick={() => setShowWizard(false)} className="p-2 hover:bg-gray-100 rounded-full text-gray-400 transition">
                                <X size={20} />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="p-8 overflow-y-auto custom-scrollbar">

                            {wizardStep === 'PROMPT' && (
                                <div className="space-y-6 animate-in slide-in-from-right-4 duration-300">
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">Nasıl bir site istiyorsunuz?</label>
                                        <textarea
                                            value={prompt}
                                            onChange={(e) => setPrompt(e.target.value)}
                                            placeholder="Örn: Minimalist ve modern bir mimarlık ofisi sitesi. Ana renkler siyah ve beyaz olsun. Büyük görseller kullanılsın..."
                                            className="w-full h-32 p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#E69419] focus:bg-white transition-all resize-none text-sm placeholder:text-gray-400"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">Kategori</label>
                                        <div className="grid grid-cols-3 gap-3">
                                            {['Startup', 'Kurumsal', 'E-Ticaret', 'Portfolyo', 'Restoran', 'Blog'].map(cat => (
                                                <button
                                                    key={cat}
                                                    onClick={() => setCategory(cat)}
                                                    className={`py-3 rounded-xl text-sm font-medium transition-all ${category === cat ? 'bg-gray-900 text-white shadow-lg' : 'bg-gray-50 text-gray-600 hover:bg-gray-100'}`}
                                                >
                                                    {cat}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {wizardStep === 'GENERATING' && (
                                <div className="py-12 text-center animate-in fade-in duration-500">
                                    <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 relative">
                                        <div className="absolute inset-0 border-4 border-[#0073FF]/20 rounded-full animate-ping"></div>
                                        <Loader2 size={32} className="text-[#0073FF] animate-spin" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Sihir Yapılıyor...</h3>
                                    <p className="text-gray-500 max-w-xs mx-auto">Yapay zeka tarifinize uygun en iyi tasarımı, renkleri ve içerikleri hazırlıyor.</p>
                                </div>
                            )}

                            {wizardStep === 'PREVIEW' && generatedTemplate && (
                                <div className="animate-in slide-in-from-bottom-4 duration-300">
                                    <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-xl flex items-start gap-3 border border-green-100">
                                        <Check size={20} className="mt-0.5" />
                                        <div>
                                            <p className="font-bold">Şablon Başarıyla Oluşturuldu!</p>
                                            <p className="text-xs opacity-80 mt-1">Aşağıdaki önizlemeyi kontrol edip kütüphaneye kaydedebilirsiniz.</p>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="bg-gray-900 rounded-xl p-4 text-white">
                                            <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-2">
                                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                                <span className="text-xs text-white/40 ml-2 font-mono">preview.json</span>
                                            </div>
                                            <pre className="font-mono text-xs overflow-x-auto text-green-400 max-h-48 custom-scrollbar">
                                                {JSON.stringify(JSON.parse(generatedTemplate.content), null, 2)}
                                            </pre>
                                        </div>
                                    </div>
                                </div>
                            )}

                        </div>

                        {/* Footer */}
                        <div className="p-6 border-t border-gray-100 bg-gray-50 flex justify-end gap-3">
                            {wizardStep === 'PROMPT' && (
                                <button
                                    onClick={handleGenerate}
                                    disabled={!prompt}
                                    className="px-6 py-3 bg-[#E69419] hover:bg-[#d48612] text-white font-bold rounded-xl transition-all shadow-lg shadow-orange-200 disabled:opacity-50 disabled:shadow-none flex items-center gap-2"
                                >
                                    <Sparkles size={18} />
                                    Oluştur
                                </button>
                            )}

                            {wizardStep === 'PREVIEW' && (
                                <>
                                    <button
                                        onClick={() => setWizardStep('PROMPT')}
                                        className="px-6 py-3 text-gray-500 hover:text-gray-900 font-bold transition"
                                    >
                                        Geri Dön
                                    </button>
                                    <button
                                        onClick={handleSave}
                                        className="px-6 py-3 bg-[#0073FF] hover:bg-blue-600 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-200 flex items-center gap-2"
                                    >
                                        <Check size={18} />
                                        Kaydet
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
