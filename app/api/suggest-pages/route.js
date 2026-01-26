
import { model } from '@/lib/gemini';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { companyName, sector, aboutText } = await req.json();

    const availablePages = [
        'Hakkımızda', 'Hizmetler', 'İletişim', 'Blog', 
        'SSS', 'Referanslar', 'Ekibimiz', 'Kariyer',
        'Galeri', 'Projeler', 'Menü', 'Ürünler',
        'Fiyat Listesi', 'Randevu', 'Kampanyalar', 'Sertifikalar',
        'Tedaviler', 'Eğitimler', 'Uzmanlık Alanları', 'Yasal Uyarılar'
    ];

    const prompt = `
      You are an expert website architect.
      Select the most appropriate pages for a business website from the provided list based on the business details.
      
      Business Details:
      - Company Name: ${companyName}
      - Sector: ${sector}
      - Description: ${aboutText}

      Allowed Pages List:
      ${availablePages.join(', ')}

      Rules:
      1. RETURN ONLY A JSON ARRAY of strings. Example: ["Hakkımızda", "İletişim"]
      2. Do NOT explain your reasoning.
      3. Select between 4 to 8 pages maximum.
      4. ALWAYS include 'İletişim'.
      5. BE STRICT:
         - If it's a CAFE/RESTAURANT, MUST include 'Menü'. DO NOT include 'Tedaviler' or 'Projeler'.
         - If it's a CLINIC/DOCTOR, MUST include 'Tedaviler' or 'Randevu'. DO NOT include 'Menü' or 'Ürünler' unless they sell physical goods.
         - If it's a LAW FIGHT/CONSULTANCY, include 'Uzmanlık Alanları'.
         - If it's a CONSTRUCTION company, include 'Projeler'.

      Output:
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    let text = response.text();
    
    // Cleanup
    text = text.replace(/```json/g, '').replace(/```/g, '').trim();

    let selectedPages;
    try {
        selectedPages = JSON.parse(text);
        // Validate against available list
        selectedPages = selectedPages.filter(p => availablePages.includes(p));
    } catch (e) {
        console.error("JSON Parse Error (Page Suggest):", e);
        // Fallback to basic pages
        selectedPages = ['Hakkımızda', 'Hizmetler', 'İletişim'];
    }

    return NextResponse.json({ success: true, pages: selectedPages });
  } catch (error) {
    console.error('Page Suggestion API Error:', error);
    return NextResponse.json({ success: false, error: 'Failed to suggest pages' }, { status: 500 });
  }
}
