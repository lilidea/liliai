
import { model } from '@/lib/gemini';
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
      const result = await model.generateContent(prompt);
      return NextResponse.json({ success: true, data: result.response.text().trim() });
    }

    // Handle Image Suggestions Request
    if (type === 'suggest_images') {
      const prompt = `"${safeSector}" sektöründeki "${safeCompany}" firması için bir web sitesinde kullanılabilecek 5 tane Unsplash anahtar kelimesi (İngilizce) öner. Sadece JSON array formatında döndür. Örn: ["modern office", "business meeting"]`;
      const result = await model.generateContent(prompt);
      const resText = result.response.text().replace(/```json/g, '').replace(/```/g, '').trim();
      return NextResponse.json({ success: true, data: JSON.parse(resText) });
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
            "heroTitle": "Etkileyici bir başlık",
            "heroSubtitle": "Kısa bir alt başlık",
            "aboutText": "2 paragraflık profesyonel hakkımızda yazısı",
            "pages": {
               "SayfaAdı": { "title": "Sayfa Başlığı", "content": "Detaylı sayfa içeriği" }
            }
          }
        }
      `;
      const result = await model.generateContent(prompt);
      const resText = result.response.text().replace(/```json/g, '').replace(/```/g, '').trim();
      return NextResponse.json({ success: true, data: JSON.parse(resText) });
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

    const result = await model.generateContent(prompt);
    const text = result.response.text().replace(/```json/g, '').replace(/```/g, '').trim();
    return NextResponse.json({ success: true, data: JSON.parse(text) });
  } catch (error) {
    console.error('AI API Error:', error);
    return NextResponse.json({ success: false, error: error.message || 'Generation failed' }, { status: 500 });
  }
}
