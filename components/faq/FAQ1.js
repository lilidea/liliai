"use client";
import React, { useState } from 'react';
import { useSite } from '@/app/context/SiteContext';
import { Plus, Minus } from 'lucide-react';

export default function FAQ1() {
  const { siteData } = useSite();
  const { primaryColor } = siteData;
  const [openIndex, setOpenIndex] = useState(0);

  const content = siteData.generatedContent?.faq || {};
  const faqs = content.items || [
    {
      question: "Hizmetleriniz garantili mi?",
      answer: "Evet, sunduğumuz tüm hizmetler müşteri memnuniyeti garantisi kapsamındadır. Herhangi bir sorunda 7/24 destek ekibimiz yanınızda."
    },
    {
      question: "Proje süreci nasıl işliyor?",
      answer: "İlk olarak ihtiyaçlarınızı analiz ediyoruz, ardından size özel bir plan sunuyoruz. Onayınızla birlikte tasarım ve geliştirme aşamasına geçiyoruz."
    }
  ];

  return (
    <section className="py-24 bg-white" id="faq">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-bold uppercase tracking-widest text-neutral-500">Merak Edilenler</span>
          <h2 className="text-4xl font-bold mt-2 text-neutral-900">Sıkça Sorulan Sorular</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className={`border border-neutral-200 rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === idx ? 'bg-neutral-50 shadow-sm' : 'bg-white'}`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                className="flex items-center justify-between w-full p-6 text-left"
              >
                <span className={`font-bold text-lg ${openIndex === idx ? 'text-neutral-900' : 'text-neutral-600'}`}>
                  {faq.question}
                </span>
                <span
                  className={`p-2 rounded-full transition-colors ${openIndex === idx ? 'text-white' : 'text-neutral-400 bg-neutral-100'}`}
                  style={openIndex === idx ? { backgroundColor: primaryColor } : {}}
                >
                  {openIndex === idx ? <Minus size={16} /> : <Plus size={16} />}
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-6 pt-0 text-neutral-500 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
