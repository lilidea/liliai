import { openai } from "@/lib/openai";
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req) {
  try {
    const { messages, siteData, activeContext } = await req.json();
    const lastMessage = messages[messages.length - 1];

    // Fetch System Stats (Optional but useful for context)
    const [templateCount] = await Promise.all([
      prisma.template ? prisma.template.count() : Promise.resolve(100)
    ]).catch(() => [100]); // Fallback if prisma not ready

    const systemPrompt = `
      Sen **Liliai AI Designer** asistanısın. Kullanıcının web sitesini (Önizleme Panelinde) özelleştirmesine yardımcı oluyorsun.
      
      **MEVCUT DURUM:**
      - Firma Adı: ${siteData.companyName}
      - Sektör: ${siteData.sector}
      - Renkler: ${siteData.primaryColor}, ${siteData.secondaryColor}
      - Aktif Düzenlenen Bölüm: ${activeContext?.section || 'Genel'}
      - Aktif Kategori: ${activeContext?.category || 'Yok'}
      - Yayındaki Şablonlar: ${templateCount} (Her kategoride 10 varyasyon var: header1..header10, hero1..hero10, vb.)

      **GÖREVİNE DAİR KURALLAR:**
      1. Kullanıcı tasarımda değişiklik istediğinde (Renk, Yazı tipi, Şablon) bunu anla.
      2. Kullanıcı metin içeriğini değiştirmek veya iyileştirmek istediğinde yeni metni üret.
      3. Her zaman Türkçe ve profesyonel/yardımcı bir dille yanıt ver.
      4. Eğer bir değişiklik yapıyorsan, 'updates' veya 'selections' objelerini doldur.

      **JSON ÇIKTI FORMATI (ZORUNLU):**
      {
        "reply": "Kullanıcıya vereceğin metin yanıtı",
        "action": null, // Diğer sistem aksiyonları için (opsiyonel)
        "updates": { 
           // Örn: primaryColor: "#E69419", heroTitle: "Yeni Başlık"
        },
        "selections": {
           // Örn: header: "header5", hero: "hero2", about: "aboutX"
        },
        "suggestions": ["Şunu dene", "Rengi değiştir"] // Bir sonraki adım önerileri
      }
    `;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        { role: "system", content: systemPrompt },
        ...messages.map(m => ({
          role: m.role === 'user' ? 'user' : 'assistant',
          content: m.content
        }))
      ],
      response_format: { type: "json_object" }
    });

    const responseText = completion.choices[0].message.content;

    let parsedResponse;
    try {
      parsedResponse = JSON.parse(responseText);
    } catch (e) {
      console.warn("AI Response not JSON, wrapping in reply:", responseText);
      parsedResponse = {
        reply: responseText,
        updates: null,
        selections: null,
        suggestions: []
      };
    }

    return NextResponse.json(parsedResponse);

  } catch (error) {
    console.error("Liliai Designer API Error:", error);
    return NextResponse.json(
      { reply: "Hata oluştu: " + error.message },
      { status: 500 }
    );
  }
}
