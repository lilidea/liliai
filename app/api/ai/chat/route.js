import { model } from "@/lib/gemini";
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req) {
  try {
    const { messages, siteData, activeContext } = await req.json();
    const lastMessage = messages[messages.length - 1];

    // 1. Fetch Real-Time System Stats
    const [templateCount, accessLogs, blockedIps] = await Promise.all([
        prisma.template.count(),
        prisma.accessLog.count(),
        prisma.ipTracking.count({ where: { isBlocked: true } })
    ]);

    // 2. Build System Context
    const systemStats = {
        templateCount,
        totalVisits: accessLogs,
        blockedIpCount: blockedIps,
        currentTime: new Date().toLocaleString('tr-TR')
    };

    const systemPrompt = `
      You are **Liliai**, the intelligent System Administrator & Architect for this platform.
      
      **REAL-TIME SYSTEM STATUS:**
      - Templates: ${systemStats.templateCount}
      - Total Visits: ${systemStats.totalVisits}
      - Blocked IPs: ${systemStats.blockedIpCount}
      - Time: ${systemStats.currentTime}

      **Your Mission:**
      1. Analyze the system data to give accurate answers.
      2. Take ACTION when the user requests it (like blocking an IP or creating a template).
      3. Be professional, concise, and helpful. Use Turkish.

      **CAPABILITIES (ACTIONS):**
      You can trigger specific system actions by returning JSON with an 'action' field.

      1. **BLOCK_IP**: Use when user wants to block a specific IP address.
         - Usage: User says "Block 192.168.1.5"
         - Payload: { "ip": "192.168.1.5", "reason": "User request" }
      
      2. **CREATE_TEMPLATE**: Use when user describes a new template they want.
         - Usage: User says "Create a bakery site template"
         - Payload: { "prompt": "Bakery website...", "category": "Restaurant" }
      
      3. **NAVIGATE**: Go to a page.
         - Usage: "Go to settings"
         - Payload: { "page": "/admin/settings" }

      **OUTPUT SCHEMA (JSON ONLY):**
      {
        "reply": "I am blocking that IP now...",
        "action": {
           "type": "BLOCK_IP" | "CREATE_TEMPLATE" | "NAVIGATE",
           "payload": { ... }
        }
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
            parts: [{ text: JSON.stringify({ reply: "Sistem verileri yüklendi. Emirlerinizi bekliyorum." }) }]
        },
        ...messages.slice(0, -1).map(m => ({
            role: m.role === 'user' ? 'user' : 'model',
            parts: [{ text: m.content }]
        }))
      ],
    });

    const result = await chat.sendMessage(lastMessage.content);
    const responseText = result.response.text();
    
    console.log("Liliai Response:", responseText);

    let parsedResponse;
    try {
        const cleanJson = responseText.replace(/```json/g, "").replace(/```/g, "").trim();
        parsedResponse = JSON.parse(cleanJson);
    } catch (e) {
        parsedResponse = {
            reply: responseText,
            action: null
        };
    }

    return NextResponse.json(parsedResponse);

  } catch (error) {
    console.error("Liliai API Error:", error);
    return NextResponse.json(
      { reply: "Sistem bağlantısında geçici bir sorun var. 🤖", error: error.message },
      { status: 500 }
    );
  }
}
