
import { openai } from '@/lib/openai';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const body = await req.json();
    const { type, companyName, sector, aboutText, pages } = body;

    const safeCompany = companyName || "Şirketim";
    const safeSector = sector || "Genel";
    const safeDesc = aboutText || "Hizmet veriyoruz.";
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

        Ayrıca, seçilen sektör için gerçekçi ve ilgi çekici içerikler oluştur.
        Örneğin:
        - Bir restoran ise, "Menü" kısmında gerçek yemek isimleri ve fiyatları olsun.
        - Bir kuaför ise, "Hizmetler" kısmında Saç Kesimi, Boya vb. olsun.
        - Bir blog ise, sektöre uygun 3 tane makale başlığı ve özeti olsun.

        JSON formatında şu yapıda dön (Sadece JSON):
        {
          "branding": {
            "primaryColor": "Hex kodu (Örn: #E69419)",
            "secondaryColor": "Hex kodu",
            "fontStyle": "modern | corporate | minimal | creative"
          },
          "selections": {
            "header": "headerX", (X: 1-10)
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
              "title": "Sektöre uygun etkileyici başlık",
              "subtitle": "Etkileyici alt başlık"
            },
            "about": {
              "title": "Hakkımızda",
              "text": "Firma ve sektörle ilgili 2-3 paragraflık özgün yazı"
            },
            "services": { 
              "title": "Hizmetlerimiz", 
              "items": [ { "title": "Sektörel Hizmet 1", "desc": "Detaylı açıklama" }, { "title": "Sektörel Hizmet 2", "desc": "Detaylı açıklama" } ]
            },
            "blog": [ 
              { "title": "Sektörel Blog Başlığı 1", "date": "Bugünün Tarihi", "excerpt": "Kısa özet", "cat": "Kategori" } 
            ],
            "pricing": {
              "title": "Fiyat Listesi / Paketler",
              "items": [ { "name": "Paket/Oda/Seçenek 1", "price": "100 TL", "features": ["Özellik 1", "Özellik 2"] } ]
            },
            "gallery": {
              "title": "Galeri",
              "description": "Sektöre uygun galeri açıklaması"
            },
            "projects": {
              "title": "Projelerimiz / Çalışmalarımız",
              "items": [ { "title": "Gerçekçi Proje Adı 1", "desc": "Kategori/Detay" } ]
            },
            "testimonials": {
              "title": "Müşteri/Misafir Yorumları",
              "items": [ { "name": "Müşteri Adı", "role": "Ünvan", "text": "Sektöre özel gerçekçi yorum" } ]
            },
            "stats": {
              "items": [ { "label": "İstatistik Başlığı (Örn: Mutlu Misafir)", "value": "1000+", "icon": "Users | Briefcase | Award | Globe" } ]
            },
            "faq": {
              "title": "Sıkça Sorulan Sorular",
              "items": [ { "question": "Sektörel Soru?", "answer": "Cevap" } ]
            },
            "team": {
              "title": "Ekibimiz / Kadromuz",
              "items": [ { "name": "İsim Soyisim", "role": "Ünvan" } ]
            },
            "menu": {
              "title": "Menü (Eğer restoransa)",
              "items": [ { "name": "Yemek Adı", "price": "200 TL", "desc": "İçerik" } ]
            },
            "products": [
              { "name": "Ürün/Paket Adı", "price": "500 TL", "tag": "Yeni | Popüler" }
            ],
            "pages": {
               "SayfaAdı": { "title": "Sayfa Başlığı", "content": "Diğer sayfalar için içerik" }
            }
          }
        }

        ÖNEMLİ: Tüm içerikleri ${safeSector} sektörüne göre gerçekçi değerlerle doldur. Sektör "Otel" ise oda fiyatları ve spa hizmetleri olsun, "Güzellik Salonu" ise cilt bakımı fiyatları olsun. "pricing", "projects", "testimonials", "stats", "gallery" ve "products" alanlarını sakın boş bırakma!
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
