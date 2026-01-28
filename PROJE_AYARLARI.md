# Proje Ayarları (Project Settings)

Bu dosya, **lilidea** projesinin teknik ve tasarım yapılandırmasını takip etmek için oluşturulmuştur.

## 1. Genel Bilgiler
- **Proje Adı:** liliai (Eski adıyla: siteyapicim)
- **Amaç:** Yapay zeka destekli, hızlı ve estetik web sitesi oluşturucu.
- **Platform:** Web (Next.js)

## 2. Teknoloji Yığını (Tech Stack)
- **Framework:** Next.js 16 (App Router)
- **Dil:** JavaScript / React
- **Stil:** Tailwind CSS v4
- **İkon Seti:** Lucide React
- **Animasyon:** Tailwind Animate, CSS Keyframes (Aurora Background)
- **Yapay Zeka:** Google Gemini API (gemini-2.5-flash)

## 3. Varsayılan Tasarım Değerleri
Başlangıçta tanımlı olan renk ve stil ayarları:
- **Ana Renk (Primary):** `#E69419` (Turuncu)
- **İkincil Renk (Secondary):** `#0073FF` (Mavi)
- **Vurgu Rengi (Accent):** `#000000` (Siyah)
- **Font:** Geist Sans & Mono
- **Tasarım Stili:** Modern / Minimal

## 4. Bileşen Kütüphanesi
Mevcut hazır bileşenler:
- **Header:** Header1 (Basit), Header2 (Ortalı), Header3 (Glass), Header4 (Kurumsal)
- **Hero:** Hero1 (Görsel Sağda), Hero2 (Ortalı), Hero3 (Şekilli), Hero4 (Grid)
- **Footer:** Footer1 (Basit), Footer2 (Geniş), Footer3 (Minimal)
- **İçerik:** Services1, Projects1, Blog1, About1

## 5. Ortam Değişkenleri (Environment Variables)
`.env.local` dosyasında bulunması gerekenler:
- `GEMINI_API_KEY`: AI içerik üretimi için gerekli API anahtarı.

## 6. Notlar ve Geliştirme Hedefleri
- [x] Favicon `app_icon.png` olarak güncellendi.
- [x] Tasarım Stüdyosu (Header -> Hero -> Footer) akışı birleştirildi.
- [x] Yeni "About" varyasyonları eklenecek.
- [ ] Dinamik renk temaları (Corporate, Pastel, Dark Mode) eklenebilir.

---
*Buraya eklemek istediğiniz başka ayarlar varsa birlikte yazabiliriz.*
