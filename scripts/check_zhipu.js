
const crypto = require('crypto');
// require('dotenv').config({ path: '.env.local' });

// Copying logic from lib/zhipu.js to run standalone in node
function generateToken(apiKey) {
  if (!apiKey) return null;

  const [id, secret] = apiKey.split('.');
  if (!id || !secret) return null;

  const now = Date.now();
  const payload = {
    api_key: id,
    exp: now + 3600 * 1000, 
    timestamp: now,
  };

  const header = {
    alg: 'HS256',
    sign_type: 'SIGN',
  };

  const encodedHeader = Buffer.from(JSON.stringify(header)).toString('base64url');
  const encodedPayload = Buffer.from(JSON.stringify(payload)).toString('base64url');

  const signature = crypto
    .createHmac('sha256', Buffer.from(secret, 'utf8'))
    .update(`${encodedHeader}.${encodedPayload}`)
    .digest('base64url');

  return `${encodedHeader}.${encodedPayload}.${signature}`;
}

async function testZhipu() {
    const apiKey = process.env.ZHIPU_API_KEY;
    console.log("Testing Zhipu AI...");
    
    if (!apiKey) {
        console.error("No ZHIPU_API_KEY found.");
        return;
    }

    try {
        const token = generateToken(apiKey);
        console.log("Token generated successfully.");
        const url = "https://open.bigmodel.cn/api/paas/v4/chat/completions";
        
        const models = ["glm-4.6", "glm-4-plus", "glm-4"];

        for (const m of models) {
            console.log(`Checking ${m}...`);
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token 
                },
                body: JSON.stringify({
                    model: m,
                    messages: [
                        { role: "user", content: "Hello" }
                    ],
                    temperature: 0.7
                })
            });

            if (response.ok) {
                const data = await response.json();
                console.log(`SUCCESS with ${m}!`);
                console.log("Response:", data.choices[0].message.content);
                return; // Stop on first success
            } else {
                 const err = await response.text();
                 console.log(`Failed ${m}: ${err}`);
            }
        }
        
    } catch (e) {
        console.error("FAILED:", e.message);
    }
}

testZhipu();
