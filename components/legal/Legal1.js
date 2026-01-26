import React from 'react';

export default function Legal1() {
  return (
    <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-6 max-w-3xl">
            <h1 className="text-3xl font-bold mb-8 text-neutral-900">Yasal Bilgilendirme</h1>
            
            <div className="prose prose-neutral max-w-none">
                <h3>1. Genel Kullanım Şartları</h3>
                <p>
                    Bu web sitesini kullanarak, sunulan hizmetlerden yararlanarak veya siteye erişerek aşağıdaki kullanım şartlarını kabul etmiş sayılırsınız. 
                    Site içeriği ve görsellerin izinsiz kullanımı yasaktır.
                </p>

                <h3>2. Gizlilik Politikası</h3>
                <p>
                   Müşteri verilerinin gizliliği bizim için esastır. Kişisel verileriniz, yasal zorunluluklar haricinde üçüncü şahıslarla paylaşılmamaktadır. 
                   Çerezler (cookies) site deneyiminizi iyileştirmek amacıyla kullanılabilir.
                </p>

                <h3>3. Sorumluluk Reddi</h3>
                <p>
                    Bu sitede yer alan bilgiler genel bilgilendirme amacı taşır. Kesin bilgi için lütfen doğrudan iletişime geçiniz. 
                    Yazım hataları veya güncel olmayan bilgilerden firmamız sorumlu tutulamaz.
                </p>

                <div className="bg-neutral-200 h-px my-8"></div>
                <p className="text-sm text-neutral-500">Son Güncelleme: Ocak 2026</p>
            </div>
        </div>
    </section>
  );
}
