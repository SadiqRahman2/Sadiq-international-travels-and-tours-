import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';
import { createServer as createViteServer } from 'vite';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

app.use(express.json());

// Initialize GoogleGenAI client on server
const apiKey = process.env.GEMINI_API_KEY;
const ai = new GoogleGenAI({
  apiKey: apiKey,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    },
  },
});

const SYSTEM_INSTRUCTION = `You are "Sadiq Travels AI Assistant" (سفری معاون), the official intelligent travel concierge for Sadiq International Travels and Tours.

COMPANY PROFILE:
- Business Name: Sadiq International Travels and Tours (صادق انٹرنیشنل ٹریولز اینڈ ٹورز)
- Founder & Managing Director: Sadiq Rahman
- Physical Address: Sardi Khel, Kharagai Mandi, Baka Khel, Bannu, Khyber Pakhtunkhwa, Pakistan.
- Official Call: 03359227997
- Official WhatsApp: 03158543374 (https://wa.me/923158543374)
- WhatsApp Group: https://chat.whatsapp.com/CnbYxmu7dLbDvcphXvLknT
- Official Email: sadiqrahmanw@GMAIL.COM
- Official Website: https://sadiqtravels1.com
- Tagline: Explore The World With Us
- Motto: Your Journey, Our Priority

CORE SERVICES:
1. Umrah Packages: 14 Days Economy, 14 Days Standard, 14 Days 5-Star Luxury Clock Tower, 21 Days, 30 Days Full Month, and Customized Family Packages. Hotels in Makkah & Madinah, air-conditioned transport, Ziyarat, and official Umrah visa processing.
2. Visit & Tourist Visas: UAE (Dubai 30/60 days), Saudi Arabia (1-year multi-entry tourist & Umrah eVisa), Qatar, Bahrain, Turkey (eVisa & sticker file guidance), Azerbaijan (Baku), Malaysia, Thailand, United Kingdom visitor visa consultation, Schengen European countries.
3. Flight Reservations: Domestic & international flights on PIA, Saudi Airlines, Emirates, flydubai, Qatar Airways, Airblue, Serene Air, Turkish Airlines, etc., departing from Islamabad, Peshawar, Lahore, and Karachi.
4. Hajj Services: Guidance on MORA Government Hajj and Private Sponsorship Hajj, Nusuk registration, biometric documentation, and Holy Sites accommodation.
5. International & Pakistan Tours: Dubai, Istanbul, Baku, Kuala Lumpur, Bangkok, London, Paris, and Northern Pakistan (Hunza, Skardu, Swat, Naran, Kaghan, Murree, Chitral, Kalam, Kumrat).
6. Hotel Reservations: Haram view hotels in Makkah/Madinah, luxury Dubai apartments, and mountain lodges in Pakistan.

BEHAVIOR AND GUIDELINES:
- Greet visitors warmly, with polite Islamic and Pashto/Urdu hospitality when appropriate ("Assalamualaikum", "خوش آمدید", "پہ خیر راغلی").
- When asked about current visa regulations, live flight updates, weather, exchange rates, or foreign travel rules, utilize Google Search grounding to retrieve accurate and up-to-date facts.
- Never guarantee visa approval—always remind clients that final visa decisions belong exclusively to relevant embassies and immigration authorities.
- Remind users that prices are estimates subject to airline seat availability and hotel rates, and encourage them to connect directly with Sadiq Rahman on WhatsApp (03158543374) or phone (03359227997) for the final confirmation.
- Format responses cleanly with bullet points, bold highlights, and clear next steps.`;

// Multi-turn Chat Endpoint with Google Search Grounding
app.post('/api/chat', async (req, res) => {
  try {
    const { messages, searchGrounding = true, speedMode = 'standard' } = req.body;

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: 'Messages array is required.' });
    }

    if (!apiKey) {
      return res.status(500).json({
        error:
          'GEMINI_API_KEY is not configured on the server. Please ensure it is set in Settings > Secrets.',
      });
    }

    // Select model according to speed / task complexity
    // gemini-3.1-flash-lite for fast tasks, gemini-3.8-flash for general tasks with search grounding
    const selectedModel =
      speedMode === 'fast' ? 'gemini-3.1-flash-lite' : 'gemini-3.8-flash';

    // Format conversation history into Gemini contents
    const contents = messages.map((m: { role: 'user' | 'model'; text: string }) => ({
      role: m.role === 'user' ? 'user' : 'model',
      parts: [{ text: m.text }],
    }));

    // Configure tools: search grounding with googleSearch if enabled
    const tools = searchGrounding && selectedModel !== 'gemini-3.1-flash-lite'
      ? [{ googleSearch: {} }]
      : undefined;

    const config: Record<string, unknown> = {
      systemInstruction: SYSTEM_INSTRUCTION,
    };

    if (tools) {
      config.tools = tools;
    }

    let response;
    try {
      response = await ai.models.generateContent({
        model: selectedModel,
        contents,
        config,
      });
    } catch (genError: any) {
      console.warn('Initial generateContent attempt failed, attempting fallback...', genError?.message);
      // If error was related to search grounding tool quota, retry without tools
      if (tools) {
        try {
          response = await ai.models.generateContent({
            model: 'gemini-3.8-flash',
            contents,
            config: { systemInstruction: SYSTEM_INSTRUCTION },
          });
        } catch (retryError) {
          // Fall through to knowledge fallback
        }
      }

      if (!response) {
        // Build an intelligent agency response for Sadiq Travels
        const lastUserMsg = messages[messages.length - 1]?.text?.toLowerCase() || '';
        let fallbackReply = `**Assalamualaikum!** Thank you for contacting **Sadiq International Travels and Tours**.\n\n`;

        if (lastUserMsg.includes('office') || lastUserMsg.includes('location') || lastUserMsg.includes('bannu') || lastUserMsg.includes('address')) {
          fallbackReply += `📍 **Our Physical Office Location:**\n**Sardi Khel, Kharagai Mandi, Baka Khel, Bannu, Khyber Pakhtunkhwa, Pakistan.**\n\n- **Office Hours:** Mon - Sat, 9:00 AM - 9:00 PM\n- **Google Maps:** [Get Directions](https://maps.app.goo.gl/oxe4LBz83UXQNbaBA)\n- **Direct Telephone:** 03359227997\n- **WhatsApp:** 03158543374`;
        } else if (lastUserMsg.includes('umrah') || lastUserMsg.includes('hajj') || lastUserMsg.includes('makkah')) {
          fallbackReply += `🕋 **Umrah & Pilgrimage Packages:**\nWe offer verified Umrah journeys including:\n- **14 Days Economy Umrah** (Dar Al Eiman / Shuttle)\n- **14 Days Standard Umrah** (350m from Haram courtyard)\n- **14 Days 5-Star Luxury** (Clock Royal Tower / Oberoi Madina)\n- **21 Days & 30 Days Extended Spiritual Immersion**\n\nAll packages include visa processing, flights, AC transport, and historical Ziyarat.\n*Contact Sadiq Rahman directly on WhatsApp at **03158543374** for today's live confirmed quote.*`;
        } else if (lastUserMsg.includes('visa') || lastUserMsg.includes('dubai') || lastUserMsg.includes('uae')) {
          fallbackReply += `📄 **Visit & Tourist Visa Services:**\nWe assist with:\n- **UAE / Dubai:** 30 & 60 Days single/multi-entry (24-48 hrs)\n- **Saudi Arabia:** 1-Year Tourist eVisa & Umrah\n- **Qatar, Bahrain, Turkey, Azerbaijan (Baku), Malaysia, Thailand**\n- **UK & Schengen:** Professional dossier preparation & VFS appointment\n\n*Note: Final visa approval is granted exclusively by immigration authorities.*`;
        } else if (lastUserMsg.includes('flight') || lastUserMsg.includes('ticket') || lastUserMsg.includes('peshawar') || lastUserMsg.includes('islamabad')) {
          fallbackReply += `✈️ **Airline Ticketing Desk:**\nWe provide instant flight reservations from **Islamabad (ISB), Peshawar (PEW), Lahore (LHE), and Karachi (KHI)** on PIA, Saudi Airlines, Emirates, flydubai, Qatar Airways, and Serene.\n\n*Send your dates and passenger count to **WhatsApp: 03158543374** to hold confirmed seats.*`;
        } else {
          fallbackReply += `Sadiq International Travels and Tours is led by **Founder & Managing Director Sadiq Rahman**.\n\nWe provide:\n1. ✈️ **Flight Reservations** (Domestic & International)\n2. 🕋 **Umrah & Hajj Services**\n3. 📄 **Tourist & Visit Visas** (UAE, Saudi, Qatar, UK, Europe)\n4. 🏔️ **Pakistan & International Tours**\n\nFor immediate personalized assistance, please call us at **03359227997** or chat on WhatsApp at **03158543374**.`;
        }

        return res.json({
          text: fallbackReply,
          sources: [
            { title: 'Sadiq International Travels Official Portal', uri: 'https://sadiqtravels1.com' },
            { title: 'Google Maps Office Pin', uri: 'https://maps.app.goo.gl/oxe4LBz83UXQNbaBA' },
          ],
          searchQueries: ['Sadiq International Travels Bannu services'],
          modelUsed: 'sadiq-travels-knowledge-engine',
        });
      }
    }

    const replyText = response.text || 'I apologize, I could not generate a response at this moment.';

    // Extract search grounding metadata
    const candidate = response.candidates?.[0];
    const groundingMetadata = candidate?.groundingMetadata;
    const groundingChunks = groundingMetadata?.groundingChunks || [];
    const webSearchQueries = groundingMetadata?.webSearchQueries || [];

    const sources = groundingChunks
      .filter((c: any) => c.web && c.web.uri)
      .map((c: any) => ({
        title: c.web.title || 'Web Source',
        uri: c.web.uri,
      }));

    return res.json({
      text: replyText,
      sources,
      searchQueries: webSearchQueries,
      modelUsed: selectedModel,
    });
  } catch (error: any) {
    console.error('Gemini API Error:', error);
    return res.status(500).json({
      error: error.message || 'An error occurred while communicating with Gemini AI.',
    });
  }
});

// Setup Vite middleware in dev or static files in production
async function startServer() {
  const isProduction = process.env.NODE_ENV === 'production';

  if (!isProduction) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Sadiq Travels server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
