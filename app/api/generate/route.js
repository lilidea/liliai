import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { companyName } = await req.json();
    
    if (!companyName) {
      return NextResponse.json({ error: "Company name is required" }, { status: 400 });
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const prompt = `
      Sen profesyonel bir metin yazarısın. "${companyName}" adında yeni bir şirket için web sitesi içeriği oluşturman gerekiyor.
      
      Lütfen aşağıdaki formatta JSON verisi döndür (sadece JSON, başka metin yazma):
      {
        "heroTitle": "Buraya kısa, vurucu, 3-5 kelimelik bir manşet slogan yaz.",
        "aboutText": "Buraya firma hakkında güven verici, profesyonel, 2-3 cümlelik kısa bir tanıtım yazısı yaz."
      }
      
      Firma Adı: ${companyName}
      Dil: Türkçe
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    // Clean up markdown code blocks if present
    const cleanText = text.replace(/```json/g, '').replace(/```/g, '').trim();
    
    return NextResponse.json(JSON.parse(cleanText));
  } catch (error) {
    console.error("AI Error:", error);
    return NextResponse.json({ error: "Failed to generate content" }, { status: 500 });
  }
}
