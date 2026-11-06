
interface Env {
  GEMINI_API_KEY: string;
  ASSETS: Fetcher;
}

const SYSTEM_INSTRUCTION = `
You are the official AI travel assistant for Sadiq International Travels and Tours.

Business details:
- Website: https://sadiqtravels1.com
- Phone: 03359227997
- WhatsApp: 03158543374
- WhatsApp link: https://wa.me/923158543374
- Email: sadiqrahmanw@GMAIL.COM
- Address: Sardi Khel, Kharagai Mandi, Baka Khel, Bannu, Khyber Pakhtunkhwa, Pakistan.
- Managing Director: Sadiq Rahman
- Tagline: Explore The World With Us

Services include:
Flight tickets, Umrah and Hajj services, visa assistance, international
and Pakistan tours, hotel reservations, travel insurance, and document
attestation.

Instructions:
- Be polite, helpful, professional, and concise.
- Reply in the language used by the customer, including Urdu or English.
- Ask for destination, travel dates, and number of travellers when relevant.
- Do not invent prices, availability, visa approvals, or package details.
- Explain that visa decisions are made by the relevant authorities.
- For confirmed prices and bookings, direct customers to WhatsApp.
- Never request payment card details or passwords.
`;

function jsonResponse(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8" }
  });
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === "/api/chat") {
      if (request.method !== "POST") {
        return jsonResponse({ error: "Method not allowed" }, 405);
      }

      try {
        if (!env.GEMINI_API_KEY) {
          return jsonResponse({
            error: "AI service is not configured. Please contact us on WhatsApp."
          }, 500);
        }

        const body = await request.json() as {
          messages?: Array<{
            role?: string;
            content?: string;
            text?: string;
          }>;
          searchGrounding?: boolean;
          speedMode?: string;
        };

        if (!Array.isArray(body.messages) || body.messages.length === 0) {
          return jsonResponse({ error: "Please enter a message." }, 400);
        }

        const contents = body.messages
          .map((message) => {
            const text = message.content ?? message.text ?? "";
            const role = message.role === "model" || message.role === "assistant"
              ? "model"
              : "user";

            return {
              role,
              parts: [{ text: String(text) }]
            };
          })
          .filter((message) => message.parts[0].text.trim().length > 0);

        if (contents.length === 0) {
          return jsonResponse({ error: "Please enter a message." }, 400);
        }

        const model = body.speedMode === "fast"
          ? "gemini-3.1-flash-lite"
          : "gemini-3.8-flash";

        const requestBody: Record<string, unknown> = {
          systemInstruction: {
            parts: [{ text: SYSTEM_INSTRUCTION }]
          },
          contents,
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 1024
          }
        };

        if (body.searchGrounding === true) {
          requestBody.tools = [{ google_search: {} }];
        }

        const geminiResponse = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "x-goog-api-key": env.GEMINI_API_KEY
            },
            body: JSON.stringify(requestBody)
          }
        );

        const result = await geminiResponse.json() as {
          candidates?: Array<{
            content?: {
              parts?: Array<{ text?: string }>;
            };
          }>;
          error?: { message?: string };
        };

        if (!geminiResponse.ok) {
          return jsonResponse({
            error: result.error?.message || "The AI service could not respond."
          }, geminiResponse.status);
        }

        const reply = result.candidates?.[0]?.content?.parts
          ?.map((part) => part.text || "")
          .join("")
          .trim();

        if (!reply) {
          return jsonResponse({
            error: "The AI assistant returned an empty response. Please try again."
          }, 502);
        }

        return jsonResponse({ reply });
      } catch (error) {
        return jsonResponse({
          error: "Unable to process your message. Please try again."
        }, 500);
      }
    }

    return env.ASSETS.fetch(request);
  }
};
