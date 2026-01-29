"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';
import { HelpCircle } from 'lucide-react';

const FAQ4 = () => {
    const { siteData } = useSite();
    const { primaryColor } = siteData;

    const faqs = [
        { q: "Nasıl başlarım?", a: "Sadece bir şablon seçin ve yapay zekanın sitenizi oluşturmasını bekleyin. Saniyeler içinde hazır!" },
        { q: "Ödeme yöntemleri neler?", a: "Kredi kartı, banka havalesi ve kripto para ile ödeme yapabilirsiniz." },
        { q: "Domain bağlayabilir miyim?", a: "Evet, kendi domaininizi panel üzerinden saniyeler içinde bağlayabilirsiniz." },
        { q: "Teknik destek var mı?", a: "7/24 canlı destek ekibimiz tüm sorularınız için burada." }
    ];

    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <div className="w-16 h-16 rounded-3xl bg-white shadow-xl flex items-center justify-center mx-auto mb-8" style={{ color: primaryColor }}>
                        <HelpCircle size={32} />
                    </div>
                    <h2 className="text-5xl font-black text-gray-900 uppercase tracking-tighter mb-6">Sıkça Sorulanlar</h2>
                    <p className="text-gray-400 font-medium">Hızlıca yanıt bulmak için aşağıdaki kategorilere göz atın.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {faqs.map((faq, i) => (
                        <div key={i} className="bg-white p-10 rounded-[40px] shadow-sm border border-gray-100 hover:shadow-2xl transition-all group">
                            <h4 className="text-xl font-black text-gray-900 mb-4 group-hover:opacity-60 transition-opacity">{faq.q}</h4>
                            <p className="text-gray-500 leading-relaxed font-medium">{faq.a}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ4;
