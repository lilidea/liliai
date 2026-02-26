
import { openai } from '@/lib/openai';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const body = await req.json();
    const { type, companyName, sector, aboutText, servicesText, pages } = body;

    const safeCompany = companyName || "Şirketim";
    const safeSector = sector || "Genel";
    const safeDesc = aboutText || "Hizmet veriyoruz.";
    const safeServices = servicesText || "";
    const safePages = Array.isArray(pages) && pages.length > 0 ? pages.join(', ') : "Hakkımızda, Hizmetler, İletişim";

    // Handle Rewrite Request
    if (type === 'rewrite') {
      const { text, tone = 'professional' } = body;
      const prompt = `Aşağıdaki Türkçe metni daha ${tone === 'professional' ? 'profesyonel ve kurumsal' : 'samimi ve sıcak'} bir dille yeniden yaz. Sadece yeniden yazılmış metni döndür:\n\n${text}`;

      const completion = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [{ role: "user", content: prompt }],
      });

      return NextResponse.json({ success: true, data: completion.choices[0].message.content.trim() });
    }

    // Handle Image Generation Request (DALL-E 3)
    if (type === 'generate_image') {
      const { prompt, style = 'vivid' } = body;
      const safePrompt = prompt || `A professional website banner for ${safeCompany} in ${safeSector} sector.`;

      const image = await openai.images.generate({
        model: "dall-e-3",
        prompt: safePrompt,
        n: 1,
        size: "1024x1024",
        style: style, // vivid or natural
        response_format: "url"
      });

      return NextResponse.json({ success: true, data: image.data[0].url });
    }

    // Handle Image Suggestions Request
    if (type === 'suggest_images') {
      const prompt = `"${safeSector}" sektöründeki "${safeCompany}" firması için bir web sitesinde kullanılabilecek 5 tane Unsplash anahtar kelimesi (İngilizce) öner. Sadece JSON array formatında döndür. Örn: ["modern office", "business meeting"]`;

      const completion = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [{ role: "user", content: prompt }],
        response_format: { type: "json_object" }
      });

      const resText = completion.choices[0].message.content;
      // OpenAI might wrap it in a key if response_format is json_object, but usually it respects the prompt. 
      // safer to parse directly or handle a wrap.
      // With json_object, it guarantees valid JSON.
      // Note: "json_object" requires "json" in the prompt.

      let data;
      try {
        data = JSON.parse(resText);
        // If it returns { "keywords": [...] } or just [...]
        if (data.keywords) data = data.keywords;
        else if (data.suggestions) data = data.suggestions;
        // If it's an object with keys, try to find an array.
        if (!Array.isArray(data)) {
          const values = Object.values(data);
          const foundArray = values.find(v => Array.isArray(v));
          if (foundArray) data = foundArray;
        }
      } catch (e) {
        data = [];
      }

      return NextResponse.json({ success: true, data: data });
    }

    // Handle Full Site Generation (Smart Selection + Content + Branding)
    if (type === 'full_site') {
      const prompt = `
        Sen profesyonel bir web tasarımcısı ve içerik yazarıısın. 
        Aşağıdaki firma için komple bir web sitesi yapısı oluştur:
        Firma Adı: ${safeCompany}
        Sektör: ${safeSector}
        Açıklama: ${safeDesc}
        Sayfalar: ${safePages}

        Sistemimizde her kategori için 10'ar tane tasarım varyasyonu (1'den 10'a kadar) bulunmaktadır. 
        Sektöre ve firma tarzına en uygun varyasyonları seç.

        JSON formatında şu yapıda dön (Sadece JSON):
        {
          "branding": {
            "primaryColor": "Hex kodu (Sektöre uygun: Gıda için sıcak iştah açıcı, Teknoloji için güven veren mavi/koyu, Sağlık için temiz beyaz/yeşil/mavi vb.)",
            "secondaryColor": "Kontrast Hex kodu",
            "fontStyle": "modern | corporate | minimal | creative"
          },
          "selections": {
            "header": "headerX", (X: 1-10 arası sektöre uygun görsel yapı seç)
            "hero": "heroX",
            "about": "aboutX",
            "services": "servicesX",
            "projects": "projectsX",
            "blog": "blogX",
            "faq": "faqX",
            "team": "teamX",
            "pricing": "pricingX",
            "testimonials": "testimonialsX",
            "stats": "statsX",
            "cta": "ctaX",
            "footer": "footerX"
          },
          "content": {
            "hero": {
              "title": "Sektöre uygun, merak uyandıran 5-7 kelimelik başlık",
              "subtitle": "Kullanıcıyı aksiyona davet eden alt başlık"
            },
            "about": {
              "title": "Hakkımızda",
              "text": "Firma ve sektörle ilgili, 'biz' dilini kullanan, güven verici 2-3 paragraflık özgün yazı"
            },
            "services": { 
              "title": "Hizmetlerimiz", 
              "items": [ { "title": "Sektörel Hizmet 1", "desc": "15-20 kelimelik açıklama" }, { "title": "Sektörel Hizmet 2", "desc": "15-20 kelimelik açıklama" } ]
            },
            "blog": [ 
              { "title": "Sektörle ilgili güncel blog başlığı", "date": "Bugünün Tarihi", "excerpt": "Kısa özet", "cat": "Kategori" } 
            ],
            "pricing": {
              "title": "Fiyatlandırma",
              "items": [ { "name": "Hizmet/Ürün Seviyesi", "price": "Fiyat (Sektörel gerçekçi)", "features": ["Özellik 1", "Özellik 2"] } ]
            },
            "gallery": {
              "title": "Galeri",
              "description": "Portfolyo veya mekan görselleri için açıklama",
              "images": ["Unsplash görsel URL'leri veya keywords formatında 6 adet görsel dönebilirsin"]
            },
            "projects": {
              "title": "Projelerimiz / Portfolyo",
              "items": [ { "title": "Tamamlanmış İş/Proje Adı", "desc": "Detay" } ]
            },
            "testimonials": {
              "title": "Müşteri Yorumları",
              "items": [ { "name": "Ad Soyad", "role": "Ünvan", "text": "Hizmetten duyulan memnuniyeti anlatan 1-2 cümlelik gerçekçi yorum" } ]
            },
            "stats": {
              "items": [ { "label": "Yıllık Tecrübe | Mutlu Müşteri | Proje Sayısı", "value": "Sayısal değer", "icon": "Users | Briefcase | Award | Globe" } ]
            },
            "faq": {
              "title": "Sıkça Sorulan Sorular",
              "items": [ { "question": "Potansiyel müşterinin sorabileceği sektörel soru?", "answer": "Tatmin edici cevap" } ]
            },
            "team": {
              "title": "Ekibimiz",
              "items": [ { "name": "Uzman İsim", "role": "Sektörel Ünvan (Örn: Başhekim, Kıdemli Yazılımcı, Şef Garson)" } ]
            },
            "menu": {
              "title": "Ürün ve Lezzet Menümüz",
              "items": [ 
                { 
                  "category": "Kategori Adı (Örn: Başlangıçlar, Ana Yemekler, İçecekler)", 
                  "items": [ 
                    { "name": "Yemek/Ürün Adı 1", "price": "100 TL", "desc": "İçerik açıklaması" },
                    { "name": "Yemek/Ürün Adı 2", "price": "150 TL", "desc": "İçerik açıklaması" },
                    { "name": "Yemek/Ürün Adı 3", "price": "200 TL", "desc": "İçerik açıklaması" }
                   ] 
                } 
              ]
            },
            "products": [
              { "name": "Satışa Uygun Ürün", "price": "Fiyat", "tag": "Yeni | Popüler" }
            ],
            "pages": {
               "SayfaID": { "title": "Ek Sayfa Başlığı", "content": "Sayfa içeriği" }
            }
          }
        }

        ÖNEMLİ KURALLAR:
        1. DİL VE TON: Dil tamamen TÜRKÇE olmalı. Sektörel jargona (Örn: Gıda için iştah açıcı, Sağlık için güven verici, Teknoloji için yenilikçi) %100 sadık kalınmalıdır.
        2. RENK PSİKOLOJİSİ: Renkler sektörün doğasına uygun seçilmelidir. Gıda/Restoran için #E69419 (Turuncu), #DC2626 (Kırmızı); Teknoloji için #0073FF (Mavi), #0F172A (Lacivert); Sağlık için #059669 (Zümrüt Yeşil); Lüks segment için #000000 ve Altın tonları tercih edilmelidir.
        3. FİYATLANDIRMA: Fiyatlar ${safeSector} sektörü ve ${safeServices} nişi için REALİSTİK olmalıdır. Sushi için 80 TL çok ucuzdur, güncel piyasa koşullarına göre (Örn: 250-600 TL arası setler) mantıklı rakamlar kullanın.
        4. JARGON YASAĞI (KRİTİK): Ana sektör "tech" (Teknoloji) DEĞİLSE, şu kelimeleri kullanmak KESİNLİKLE YASAKTIR: "Cloud", "SEO", "Otomasyon", "Dijital Çözümler", "Veri Analizi", "Stratejik Ortaklık", "Entegrasyon", "Vizyonumuz teknolojiyi tasarımla...". Bunların yerine sektöre özel insani ve samimi kavramlar kullanın.
        5. FAQ VE FOOTER: SSS (FAQ) soruları tamamen sektörel olmalıdır. Bir restoran için "Cloud var mı?" diye sorulamaz. Onun yerine "Rezervasyon gerekli mi?", "Otopark var mı?", "Paket servis süresi nedir?" gibi gerçek sorular üretin. Footer quote (özlü söz) asla "Tasarım nasıl çalıştığıdır" olmamalı, sektöre uygun (Örn: Gıda için "Lezzet bir sanattır") bir söz seçin.
        6. BAŞLIKLAR: Hero ve About başlıkları "Hoş Geldiniz" gibi jenerik olmamalı. Çok daha vurucu ve işe odaklı (Örn: Sakura Sushi için "Otantik Japon Lezzetleri Sofranızda") başlıklar seçin.
      `;

      const completion = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [{ role: "user", content: prompt }],
        response_format: { type: "json_object" }
      });

      return NextResponse.json({ success: true, data: JSON.parse(completion.choices[0].message.content) });
    }

    // Legacy/Individual Content Generation Logic
    const prompt = `
      You are an expert web content writer and designer.
      Generate website content for a business with the following details:
      Company Name: ${safeCompany}
      Sector: ${safeSector}
      Description: ${safeDesc}
      Specific Services Provided: ${safeServices}
      Pages: ${safePages}

      Return ONLY a JSON object with the following structure:
      {
        "hero": { "title": "...", "subtitle": "..." },
        "about": { "title": "Hakkımızda", "text": "..." },
        "services": { "title": "Hizmetlerimiz", "items": [{ "title": "...", "desc": "..." }] },
        "contact": { "title": "İletişim", "address": "...", "phone": "...", "email": "..." }
      }
      Language: TURKISH.
    `;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [{ role: "user", content: prompt }],
      response_format: { type: "json_object" }
    });

    return NextResponse.json({ success: true, data: JSON.parse(completion.choices[0].message.content) });
  } catch (error) {
    console.error('AI API Error:', error);
    return NextResponse.json({ success: false, error: error.message || 'Generation failed' }, { status: 500 });
  }
}
