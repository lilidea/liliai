"use client";
import React from 'react';
import { useSite } from '@/app/context/SiteContext';
import { HelpCircle } from 'lucide-react';

const FAQ2 = () => {
  const { siteData } = useSite();
  const { primaryColor } = siteData;

  const faqs = [
    { q: "Kurulum süresi ne kadar?", a: "Seçtiğiniz pakete göre 3 ile 7 iş günü arasında değişmektedir." },
    { q: "Mobil uyumlu mu?", a: "Evet, tüm tasarımlarımız %100 mobil uyumlu (responsive) olarak hazırlanır." },
    { q: "Sonradan düzenleyebilir miyim?", a: "Yönetim paneli sayesinde içeriklerinizi dilediğiniz zaman güncelleyebilirsiniz." },
    { q: "Hosting dahil mi?", a: "Evet, ilk yıl hosting ve domain hizmeti paketlerimize dahildir." },
    { q: "Özel tasarım yapıyor musunuz?", a: "Kurumsal kimliğinize uygun, tamamen size özel tasarım çözümleri sunuyoruz." },
    { q: "SEO desteği var mı?", a: "Temel SEO altyapısı ve Google kayıt işlemleri tarafımızca yapılmaktadır." },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
           <HelpCircle className="mx-auto w-12 h-12 mb-4 text-gray-300" />
           <h2 className="text-4xl font-bold text-gray-900 mb-4">Aklınıza Takılanlar</h2>
           <p className="text-gray-500">Süreçlerimiz hakkında en çok merak edilen soruları sizin için derledik.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
           {faqs.map((f, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                 <h3 className="font-bold text-lg text-gray-900 mb-4 flex items-start gap-2">
                    <span className="text-2xl opacity-20 font-serif italic" style={{ color: primaryColor }}>Q.</span>
                    {f.q}
                 </h3>
                 <p className="text-gray-500 leading-relaxed text-sm">
                    {f.a}
                 </p>
              </div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ2;
