# 🚀 Liliai Website Builder - Gelişim Yol Haritası (2026)

Bu belge, Liliai projesinin bir prototipten profesyonel bir SaaS platformuna dönüşümü için gerekli teknik ve fonksiyonel adımları içerir.

---

## 📅 Faz 1: Altyapı ve Yönetim (Kısa Vadeli)
*Hedef: Sistemin yönetilebilirliğini artırmak ve hataları minimize etmek.*

- [ ] **Gelişmiş Şablon Yönetimi (Admin Panel):**
    - `/admin/templates` sayfasının işlevsel hale getirilmesi.
    - Yeni şablon (JSON) ekleme, silme ve mevcutları düzenleme arayüzü.
    - Şablonları kategorize etme (Sektör bazlı: Gym, Hukuk, Teknoloji vb.).
- [ ] **Veritabanı Şeması Optimizasyonu:**
    - `Prisma` tarafında kullanıcıların oluşturduğu sitelerin tam JSON yapısını saklayacak gelişmiş modeller.
    - "Taslak" ve "Yayınlanmış" site ayrımı.
- [ ] **CRM / Talep Takip Sistemi:**
    - "Bizle Paylaş" formundan gelen verilerin `/admin/proposals` sayfasında listelenmesi.
    - Talep durumları (Yeni, İletişime Geçildi, Tamamlandı) ve not ekleme özelliği.

## 🧠 Faz 2: Yapay Zeka 3.0 (Orta Vadeli)
*Hedef: Kullanıcı deneyimini "sihirli" hale getirmek.*

- [ ] **Çoklu Sayfa Üretimi:**
    - AI'nın sadece ana sayfa değil, "Hakkımızda", "Hizmetler" ve "İletişim" sayfalarını da tutarlı bir şekilde üretmesi.
- [ ] **Canlı AI Tasarım Asistanı (Sidekick):**
    - Editör sayfasında sağ alt köşede bir chat bot.
    - *"Bu bölümü mavi yap", "Bana daha kurumsal bir font seç", "Hizmetler kısmına 2 tane daha kart ekle"* gibi komutları canlı olarak uygulayabilmesi.
- [ ] **Dinamik Görsel Optimizasyonu:**
    - DALL-E'den gelen görsellerin otomatik olarak WebP formatına sıkıştırılması ve bulut depolamaya (AWS S3 / Vercel Blob) aktarılması.

## 🎨 Faz 3: Tasarım Stüdyosu ve UX (Orta Vadeli)
*Hedef: Özelleştirme derinliğini artırmak.*

- [ ] **Tema Paketleri (Global Styling):**
    - Tek tıkla tüm sitenin havasını değiştiren "Stil Paketleri" (Minimal, Bold, Pastel, Dark, Corporate).
- [ ] **Gelişmiş Bileşen Düzenleyici:**
    - Sadece metin değil, ikon seçimi, kenar boşlukları (padding/margin) ve border-radius gibi detayların kontrolü.
- [ ] **Yeni Bileşen Kategorileri:**
    - E-ticaret önizleme (Ürün kartları), Video arka planlı Hero bölümleri, Etkileşimli haritalar.

## 🚢 Faz 4: Çıktı ve Yayınlama (Uzun Vadeli)
*Hedef: Kullanıcıya gerçek bir değer sunmak.*

- [ ] **Statik Export (HTML/CSS):**
    - Kullanıcının tasarladığı siteyi bir `.zip` dosyası olarak indirebilmesi.
- [ ] **Vercel / Netlify Entegrasyonu:**
    - Kullanıcının tek tıkla kendi alan adını (veya bir subdomaini) bağlayıp sitesini canlıya alması.
- [ ] **SEO Denetleyicisi:**
    - Sitenin SEO puanını ölçen ve AI ile iyileştirme önerileri sunan bir panel.

## 📈 Faz 5: Kurumsallaşma (Vizyon)
- [ ] **Çoklu Dil Desteği (i18n):** Sitenin tek tıkla farklı dillere AI ile çevrilmesi.
- [ ] **Analytics Entegrasyonu:** Oluşturulan siteler için basit bir ziyaretçi takip paneli.

---
*Not: Bu plan esnektir ve öncelikler kullanıcı geri bildirimlerine göre değişebilir.*
