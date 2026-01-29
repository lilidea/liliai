import React, { useState } from 'react';
import { X, CheckCircle, Send, Globe, Smartphone, Tablet } from 'lucide-react';
import { Input } from '@/components/Input';
import { Textarea } from '@/components/Textarea';
import { Button } from '@/components/Button';

import { useSite } from '@/app/context/SiteContext';

export default function PublishModal({ isOpen, onClose }) {
    const { siteData } = useSite(); // Hook integration
    const [step, setStep] = useState(1); // 1: Form, 2: Success
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '', budget: '', timeline: '', notes: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    if (!isOpen) return null;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Get siteData from context (passed as prop or imported here if component is wrapped)
            // Ideally PublishModal should receive siteData as prop or use hook inside.
            // Assuming useSite hook is available or siteData passed.
            // Let's use the hook since it's cleaner if allowed inside modal.
            // BUT: PublishModal is used inside PreviewPage which has provider.

            const payload = {
                formData,
                siteData: siteData // Use real siteData from hook
            };

            const res = await fetch('/api/proposals', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (!res.ok) {
                const errorData = await res.json().catch(() => ({}));
                const detailMsg = errorData.details ? `\nDetay: ${errorData.details}` : '';
                throw new Error((errorData.error || 'Submission failed') + detailMsg);
            }

            setStep(2);
        } catch (error) {
            console.error('Publish Error:', error);
            alert(`Bir hata oluştu: ${error.message}`);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            ></div>

            {/* Modal */}
            <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg relative z-10 overflow-hidden animate-in zoom-in-95 duration-300">
                {step === 1 ? (
                    <div className="flex flex-col h-full max-h-[85vh] overflow-hidden">
                        <div className="p-6 md:p-8 pb-0 text-center shrink-0">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#E69419]/10 text-[#E69419] mb-4">
                                <Send size={32} />
                            </div>
                            <h2 className="text-2xl font-black text-neutral-900">Projeyi Paylaş</h2>
                            <p className="text-neutral-500 mt-2">
                                Harika bir iş çıkardın! Tasarımı tamamlamak ve yayına almak için bilgilerini bizimle paylaş.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-4 overflow-y-auto flex-1">
                            {/* Company & Name */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <label className="text-xs font-bold text-neutral-400 uppercase">Firma Adı</label>
                                    <Input
                                        required
                                        placeholder="Şirketiniz"
                                        value={formData.company}
                                        onChange={e => setFormData({ ...formData, company: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-xs font-bold text-neutral-400 uppercase">Ad Soyad</label>
                                    <Input
                                        required
                                        placeholder="Adınız"
                                        value={formData.name}
                                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                            </div>

                            {/* Contact Info */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <label className="text-xs font-bold text-neutral-400 uppercase">E-posta</label>
                                    <Input
                                        required
                                        type="email"
                                        placeholder="mail@site.com"
                                        value={formData.email}
                                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-xs font-bold text-neutral-400 uppercase">Telefon</label>
                                    <Input
                                        required
                                        type="tel"
                                        placeholder="05XX..."
                                        value={formData.phone}
                                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                                    />
                                </div>
                            </div>

                            {/* Project Details */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <label className="text-xs font-bold text-neutral-400 uppercase">Bütçe Aralığı</label>
                                    <select
                                        className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-4 text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#E69419]/20 focus:border-[#E69419] appearance-none"
                                        value={formData.budget}
                                        onChange={e => setFormData({ ...formData, budget: e.target.value })}
                                    >
                                        <option value="">Seçiniz...</option>
                                        <option value="low">10.000₺ - 30.000₺</option>
                                        <option value="medium">30.000₺ - 75.000₺</option>
                                        <option value="high">75.000₺+</option>
                                    </select>
                                </div>
                                <div className="space-y-1">
                                    <label className="text-xs font-bold text-neutral-400 uppercase">Süreç</label>
                                    <select
                                        className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-4 text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#E69419]/20 focus:border-[#E69419] appearance-none"
                                        value={formData.timeline}
                                        onChange={e => setFormData({ ...formData, timeline: e.target.value })}
                                    >
                                        <option value="">Seçiniz...</option>
                                        <option value="asap">Hemen Başlayalım</option>
                                        <option value="1month">1 Ay İçinde</option>
                                        <option value="planning">Planlama Aşamasındayım</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-1">
                                <label className="text-xs font-bold text-neutral-400 uppercase">Notlarınız</label>
                                <Textarea
                                    placeholder="Proje hakkında eklemek istedikleriniz..."
                                    rows={2}
                                    value={formData.notes}
                                    onChange={e => setFormData({ ...formData, notes: e.target.value })}
                                />
                            </div>

                            <Button
                                type="submit"
                                className="w-full py-4 text-base bg-[#E69419] hover:bg-[#d68510] text-white border-none mt-2 shadow-xl shadow-orange-500/20"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Gönderiliyor...' : 'Projeyi Gönder'}
                            </Button>
                        </form>
                    </div>
                ) : (
                    <div className="p-8 md:p-12 text-center space-y-6">
                        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto animate-bounce">
                            <CheckCircle size={40} />
                        </div>
                        <div>
                            <h2 className="text-3xl font-black text-neutral-900">Teşekkürler!</h2>
                            <p className="text-neutral-500 mt-2 text-lg">
                                Talebiniz başarıyla alındı. Ekibimiz tasarımı inceleyip en kısa sürede sizinle iletişime geçecek.
                            </p>
                        </div>
                        <Button
                            onClick={onClose}
                            variant="outline"
                            className="w-full"
                        >
                            Tamam
                        </Button>
                    </div>
                )}

                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-neutral-900 transition-colors"
                >
                    <X size={24} />
                </button>
            </div>
        </div>
    );
}
