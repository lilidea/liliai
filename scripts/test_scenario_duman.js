
const { GoogleGenerativeAI } = require("@google/generative-ai");

async function testScenario() {
    console.log("Starting Scenario Test: Duman Kafe...");
    
    // Manual setup because we are running outside Next.js context
    const apiKey = process.env.GEMINI_API_KEY;
    if(!apiKey) { console.error("No API Key"); return; }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    // Inputs
    const companyName = "Duman Kafe";
    const sector = "food_cafe"; // Kafe & Coffee Shop
    const aboutText = "Kadıköy moda sahilinde, 3. dalga kahveci. Ev yapımı tatlılar ve sakin çalışma ortamı.";
    const pages = ["Hakkımızda", "Menü", "Galeri", "İletişim"];

    const prompt = `
      You are an expert web content writer and designer.
      Generate website content for a business with the following details:
      
      Company Name: ${companyName}
      Sector: ${sector}
      Description: ${aboutText}
      Pages: ${pages.join(', ')}

      Return ONLY a JSON object with the following structure (no markdown, no extra text):
      {
        "hero": {
          "title": "A catchy, short hero headline based on the company name",
          "subtitle": "A persuasive subheadline (max 20 words)"
        },
        "about": {
          "title": "Hakkımızda",
          "text": "A professional 2-paragraph description of the company contextually relevant to the sector."
        },
        "services": {
            "title": "Hizmetlerimiz",
            "items": [
                { "title": "Service 1", "desc": "Short description" },
                { "title": "Service 2", "desc": "Short description" },
                { "title": "Service 3", "desc": "Short description" }
            ]
        },
        "menu": {
            "title": "Menümüz",
            "items": [
                { "category": "Kategori 1", "items": [{ "name": "Ürün 1", "price": "100 TL", "desc": "Açıklama" }] },
                { "category": "Kategori 2", "items": [{ "name": "Ürün 2", "price": "250 TL", "desc": "Açıklama" }] }
            ]
        },
        "products": [
             { "name": "Ürün 1", "price": "500 TL", "tag": "Yeni" },
             { "name": "Ürün 2", "price": "750 TL", "tag": "Popüler" }
        ],
        "gallery": {
             "title": "Galeri",
             "description": "Görsellerimiz."
        },
         "contact": {
            "title": "İletişim",
            "address": "İstanbul, Türkiye",
            "phone": "+90 555 123 45 67",
            "email": "info@example.com"
        }
      }
      
      Ensure the tone is professional, engaging, and appropriate for the ${sector} industry.
      The language MUST be TURKISH.
    `;

    try {
        const result = await model.generateContent(prompt);
        const response = await result.response;
        let text = response.text();
        
        // Cleanup
        text = text.replace(/```json/g, '').replace(/```/g, '').trim();
        
        console.log("\n--- AI OUTPUT ---");
        console.log(text);
        console.log("-----------------\n");
        
        JSON.parse(text); // Verify JSON validity
        console.log("✅ JSON Structure is VALID");

    } catch (e) {
        console.error("FAILED:", e);
    }
}

testScenario();
