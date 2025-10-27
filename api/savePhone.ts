import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Allow CORS from anywhere (safe for your use case)
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Handle preflight (CORS) requests
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { phone } = req.body;

    const googleResponse = await fetch(
      "https://script.google.com/macros/s/AKfycbwPWP3KV9-156Hgpv7ga5_nYRihj-5vLTFYGl21jfUv-Y1SgjPZxk2H3I5uTJZylrsqsQ/exec",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone }),
      }
    );

    const text = await googleResponse.text();

    res.status(200).json({ success: true, result: text });
  } catch (error: any) {
    console.error("Error saving phone:", error);
    res.status(500).json({ error: error.message });
  }
}
