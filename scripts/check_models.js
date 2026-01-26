
const { GoogleGenerativeAI } = require("@google/generative-ai");

async function checkModel() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
      console.error("No API KEY found!");
      return;
  }
  
  const genAI = new GoogleGenerativeAI(apiKey);

  try {
      console.log(`Testing Gemini 2.0 Flash with key ending in ...${apiKey.slice(-4)}`);
      const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
      const result = await model.generateContent("Say 'Hello, I am ready!' if you can read this.");
      console.log("SUCCESS:", result.response.text());
  } catch (error) {
      console.log("FAILED:", error.message.split(']')[1] || error.message);
  }
}

checkModel();
