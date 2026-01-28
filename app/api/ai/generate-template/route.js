import { model } from "@/lib/gemini";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { prompt, category } = await req.json();

    const systemPrompt = `
      You are an expert Website Template Architect.
      Your task is to generate a comprehensive JSON structure for a website template based on the user's description.
      
      **User Request:** "${prompt}"
      **Category:** "${category}"

      **Output Requirements:**
      - Return ONLY raw JSON. No markdown, no explanations.
      - The JSON must follow this exact schema structure:
      
      {
        "hero": {
          "title": "String",
          "subtitle": "String",
          "ctaText": "String",
          "imageUrl": "String (Unsplash URL)"
        },
        "features": [
          { "title": "String", "desc": "String", "icon": "String (Lucide icon name, e.g. Rocket, Shield)" }
        ],
        "about": {
          "title": "String",
          "content": "String"
        },
        "theme": {
          "primaryColor": "String (Hex)",
          "secondaryColor": "String (Hex)",
          "font": "String"
        }
      }

      **Design Guidelines:**
      - tailored to the "${category}" industry.
      - Use Unsplash source URLs for images (e.g., https://images.unsplash.com/photo-...).
      - Choose modern, harmonious colors.
      - Ensure text is in Turkish.
    `;

    const result = await model.generateContent(systemPrompt);
    const responseText = result.response.text();

    console.log("AI Template Gen:", responseText);

    let parsedJson;
    try {
        const cleanJson = responseText.replace(/```json/g, "").replace(/```/g, "").trim();
        parsedJson = JSON.parse(cleanJson);
    } catch (e) {
        throw new Error("Failed to parse AI response as JSON");
    }

    // Add metadata
    const templateData = {
        name: `${category} - AI Generated`,
        description: prompt.substring(0, 100) + "...",
        category: category,
        content: JSON.stringify(parsedJson),
        thumbnail: parsedJson.hero?.imageUrl || "https://placehold.co/600x400?text=AI+Template"
    };

    return NextResponse.json(templateData);

  } catch (error) {
    console.error("Template Gen Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
