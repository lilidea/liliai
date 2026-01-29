
import { model } from "@/lib/gemini";
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

    const chat = model.startChat({
      history: [
        {
          role: "user",
          parts: [{ text: systemPrompt }]
        },
        {
          role: "model",
          parts: [{ text: JSON.stringify({ reply: "Liliai Tasarım Sistemi hazır. Sitenizi nasıl özelleştirebiliriz?" }) }]
        },
        ...messages.slice(0, -1).map(m => ({
          role: m.role === 'user' ? 'user' : 'model',
          parts: [{ text: m.content }]
        }))
      ],
    });

    const result = await chat.sendMessage(lastMessage.content);
    const responseText = result.response.text();

    let parsedResponse;
    try {
      const cleanJson = responseText.replace(/```json/g, "").replace(/```/g, "").trim();
      parsedResponse = JSON.parse(cleanJson);
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
