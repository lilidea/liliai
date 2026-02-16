
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
              "title": "Etkileyici bir başlık",
              "subtitle": "Kısa bir alt başlık"
            },
            "about": {
              "title": "Hakkımızda",
              "text": "2 paragraflık profesyonel hakkımızda yazısı"
            },
            "services": { 
              "title": "Hizmetlerimiz", 
              "items": [ { "title": "Hizmet 1", "desc": "Açıklama" }, { "title": "Hizmet 2", "desc": "Açıklama" } ]
            },
            "blog": [ 
              { "title": "Blog 1", "date": "16 Şubat 2024", "excerpt": "Özet", "cat": "Kategori" } 
            ],
            "faq": {
              "title": "Sıkça Sorulan Sorular",
              "items": [ { "question": "Soru?", "answer": "Cevap" } ]
            },
            "team": {
              "title": "Uzman Kadromuz",
              "items": [ { "name": "İsim", "role": "Ünvan" } ]
            },
            "menu": {
              "title": "Lezzetlerimiz",
              "items": [ { "name": "Yemek 1", "price": "200 TL", "desc": "İçerik" } ]
            },
            "pages": {
               "SayfaAdı": { "title": "Sayfa Başlığı", "content": "Diğer sayfalar için genel içerik" }
            }
          }
        }
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
