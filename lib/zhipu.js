
import crypto from 'crypto';

const apiKey = process.env.ZHIPU_API_KEY;

// Cache the token to avoid regenerating every request if possible, 
// but for serverless it's better to just generate on demand or cache briefly.
// Zhipu tokens are typically short-lived (e.g. 30 mins).

function generateToken(apiKey) {
  if (!apiKey) return null;

  const [id, secret] = apiKey.split('.');
  if (!id || !secret) return null;

  const now = Date.now();
  const payload = {
    api_key: id,
    exp: now + 3600 * 1000, // 1 hour
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

export const zhipuClient = {
    generateContent: async (prompt) => {
        const token = generateToken(apiKey);
        if (!token) throw new Error("Invalid Zhipu API Key");

        // Zhipu API V4 Chat Completions Endpoint
        const url = "https://open.bigmodel.cn/api/paas/v4/chat/completions";

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token // Zhipu uses Authorization: <token> (Bearer not strictly required by some docs, but simpler)
                                        // Actually documentation says "Authorization: Bearer <token>" usually.
                                        // Let's try Bearer.
            },
            body: JSON.stringify({
                model: "glm-4.6",
                messages: [
                    { role: "user", content: prompt }
                ],
                temperature: 0.7,
                top_p: 0.9,
                request_id: crypto.randomUUID(),
            })
        });

        if (!response.ok) {
            const err = await response.text();
            throw new Error(`Zhipu API Error: ${response.status} - ${err}`);
        }

        const data = await response.json();
        
        // Return object structure similar to Gemini SDK for easier drop-in replacement
        return {
            response: {
                text: () => data.choices[0].message.content
            }
        };
    }
};
