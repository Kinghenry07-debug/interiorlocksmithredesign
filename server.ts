import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini API client lazily / safely
const getGeminiClient = () => {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey || apiKey === "MY_GEMINI_API_KEY") {
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

// API: Health Check
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", service: "Interior Locksmith API" });
});

// API: Gemini Security & Locksmith Advisor
app.post("/api/ai-assistant", async (req, res) => {
  try {
    const { prompt, issueType } = req.body;
    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required" });
    }

    const ai = getGeminiClient();

    const systemInstruction = `You are the virtual 24/7 Security Advisor and Dispatch Assistant for Interior Locksmith Ltd., a premier full-service locksmith operating in the British Columbia interior (Kamloops: 250-374-5625, 100 Mile House: 250-395-4728).
Key Company Details:
- 12 certified locksmith staff members, 2 physical stores (Kamloops at 1346 Battle St and 100 Mile House at 407 Alder Ave), 6 mobile service vans on call 24/7.
- Services: Commercial security (high-security cylinder guards, break & enter repairs), Automotive (lost transponder key replacement via MVP Pro, lockout unlocks), Safes (opening antique/modern safes, time locks, sticky doors), Key Cutting & Mul-T-Lock (restricted key dealer, "DO NOT COPY" key control), Residential (cost-effective rekeying, deadbolts), Electronic Access Control (SMARTAIR systems).
- Tone: Extremely helpful, reassuring, professional, safety-conscious.
- Always encourage calling 250-374-5625 for immediate emergency dispatch in Kamloops or 250-395-4728 for 100 Mile House. Keep advice accurate, clear, and actionable.`;

    if (!ai) {
      // Fallback response if GEMINI_API_KEY is not yet configured by user
      return res.json({
        response: `Thank you for contacting Interior Locksmith Ltd! Based on your query regarding "${prompt}", our team of 12 certified locksmiths is fully equipped to assist you across Kamloops, 100 Mile House, and surrounding BC Interior regions. 

For immediate 24/7 emergency assistance or urgent lockout dispatch:
📞 Kamloops Main Line: 250-374-5625
📞 100 Mile House Line: 250-395-4728

We provide on-site mobile van service for auto key programming, commercial cylinder guard installation, safe opening, and home re-keying.`
      });
    }

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    res.json({ response: response.text });
  } catch (err: any) {
    console.error("Error calling Gemini API:", err);
    res.status(500).json({
      error: "Unable to process AI request",
      details: err.message,
    });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Interior Locksmith server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
