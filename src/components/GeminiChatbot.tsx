import React, { useState, useRef, useEffect } from 'react';
import {
  MessageSquare,
  Sparkles,
  Search,
  Globe2,
  X,
  Send,
  RotateCcw,
  ExternalLink,
  ChevronDown,
  Bot,
  User,
  Zap,
  Phone,
  CheckCircle2,
  AlertCircle,
  Minimize2,
  Maximize2,
} from 'lucide-react';
import { COMPANY_INFO } from '../data/travelData';

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: string;
  sources?: Array<{ title: string; uri: string }>;
  searchQueries?: string[];
  modelUsed?: string;
}

interface GeminiChatbotProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}

export function GeminiChatbot({ isOpen, onClose, onOpen }: GeminiChatbotProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome-1',
      role: 'model',
      text: `**Assalamualaikum!** Welcome to **Sadiq International Travels and Tours**.\n\nI am your AI Travel Assistant, equipped with live **Google Search Grounding** to answer your questions on:\n- 🕋 **Umrah & Hajj Packages** (14, 21, 30 days & VIP Clock Tower)\n- 📄 **Visit Visas** (UAE, Saudi Arabia, Qatar, Turkey, UK & Schengen)\n- ✈️ **Airline Tickets & Routes** (Departing from Peshawar, Islamabad, Lahore)\n- 🏔️ **Pakistan & International Tours**\n\nHow can I help you plan your journey today?`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);

  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [useSearchGrounding, setUseSearchGrounding] = useState(true);
  const [speedMode, setSpeedMode] = useState<'standard' | 'fast'>('standard');
  const [isExpanded, setIsExpanded] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const quickPrompts = [
    'What are the UAE 30 & 60 days visit visa requirements?',
    'Tell me about 14-day Umrah package prices and hotels',
    'What direct flights are available from Peshawar to Dubai/Jeddah?',
    'What documents are needed for UK tourist visa file?',
    'Best season and road conditions for Hunza & Skardu tour',
    'Where is your physical office located in Bannu?',
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      inputRef.current?.focus();
    }
  }, [messages, isOpen]);

  const handleSendMessage = async (textToSend?: string) => {
    const queryText = (textToSend || input).trim();
    if (!queryText || loading) return;

    const userMsg: ChatMessage = {
      id: `usr-${Date.now()}`,
      role: 'user',
      text: queryText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    const newHistory = [...messages, userMsg];
    setMessages(newHistory);
    setInput('');
    setLoading(true);

    try {
      // Map history for Gemini API
      const apiPayloadMessages = newHistory.map((m) => ({
        role: m.role,
        text: m.text,
      }));

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: apiPayloadMessages,
          searchGrounding: useSearchGrounding,
          speedMode,
        }),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.error || `Server responded with status ${res.status}`);
      }

      const data = await res.json();

      const aiMsg: ChatMessage = {
        id: `ai-${Date.now()}`,
        role: 'model',
        text: data.text,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        sources: data.sources,
        searchQueries: data.searchQueries,
        modelUsed: data.modelUsed,
      };

      setMessages((prev) => [...prev, aiMsg]);
    } catch (err: any) {
      const errorMsg: ChatMessage = {
        id: `err-${Date.now()}`,
        role: 'model',
        text: `⚠️ **Could not connect to AI Assistant**: ${err.message || 'Please check your connection'}.\n\nYou can always reach out directly to **Sadiq Rahman** on WhatsApp at **03158543374** or telephone at **03359227997**.`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setLoading(false);
    }
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: `welcome-${Date.now()}`,
        role: 'model',
        text: `**Conversation refreshed.** How can I assist you with flight bookings, Umrah packages, visas, or tours?`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ]);
  };

  // Helper to format text with bold, bullet lines, and headers
  const renderFormattedText = (rawText: string) => {
    const lines = rawText.split('\n');
    return lines.map((line, idx) => {
      // Simple bold parser
      const parts = line.split(/(\*\*.*?\*\*)/g);
      const renderedParts = parts.map((part, pIdx) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={pIdx} className="font-bold text-[#071B33]">{part.slice(2, -2)}</strong>;
        }
        return part;
      });

      if (line.startsWith('- ') || line.startsWith('• ')) {
        return (
          <li key={idx} className="ml-4 list-disc text-slate-700 my-0.5 leading-relaxed">
            {renderedParts}
          </li>
        );
      }
      if (line.trim() === '') {
        return <div key={idx} className="h-1.5" />;
      }
      return (
        <p key={idx} className="leading-relaxed text-slate-700 my-0.5">
          {renderedParts}
        </p>
      );
    });
  };

  return (
    <>
      {/* Floating Trigger Button (when chat is closed) */}
      {!isOpen && (
        <button
          onClick={onOpen}
          className="fixed bottom-24 right-6 z-40 bg-[#071B33] hover:bg-[#040F1E] text-white p-3.5 rounded-full shadow-2xl border-2 border-[#D4AF37] flex items-center gap-2.5 transition duration-300 hover:scale-105 active:scale-95 group cursor-pointer"
          title="Ask Sadiq Travels AI Assistant"
        >
          <div className="relative">
            <Bot className="w-6 h-6 text-[#D4AF37]" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-[#071B33]"></span>
          </div>
          <span className="text-xs font-bold tracking-wide hidden sm:inline pr-1">
            Travel Assistant AI
          </span>
        </button>
      )}

      {/* Chat Window Panel */}
      {isOpen && (
        <div
          className={`fixed z-50 transition-all duration-300 flex flex-col bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden ${
            isExpanded
              ? 'inset-4 sm:inset-10'
              : 'bottom-4 right-4 sm:bottom-6 sm:right-6 w-[95vw] sm:w-[440px] h-[600px] max-h-[88vh]'
          }`}
        >
          {/* Header */}
          <div className="bg-[#071B33] text-white px-5 py-4 flex items-center justify-between border-b border-[#087E8B]/40 shrink-0">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img
                  src={COMPANY_INFO.logo}
                  alt={COMPANY_INFO.name}
                  className="w-10 h-10 object-contain rounded-full bg-white p-0.5"
                />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-[#071B33]"></span>
              </div>
              <div>
                <div className="flex items-center gap-1.5 text-xs text-[#D4AF37] font-semibold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Sadiq Travels AI Concierge</span>
                </div>
                <h3 className="text-sm font-bold leading-tight">
                  سفری معاون • Smart Travel Assistant
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={handleResetChat}
                className="p-1.5 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition"
                title="Restart Chat"
              >
                <RotateCcw className="w-4 h-4" />
              </button>

              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="p-1.5 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition hidden sm:block"
                title={isExpanded ? 'Restore' : 'Expand'}
              >
                {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
              </button>

              <button
                onClick={onClose}
                className="p-1.5 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition"
                title="Close Chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Subheader Toolbar: Search Grounding & Model Speed Controls */}
          <div className="bg-[#F4F7FA] px-4 py-2 border-b border-slate-200 flex items-center justify-between text-[11px] shrink-0 text-slate-600">
            {/* Search Grounding toggle */}
            <label className="flex items-center gap-1.5 cursor-pointer hover:text-[#087E8B] transition select-none">
              <input
                type="checkbox"
                checked={useSearchGrounding}
                onChange={(e) => setUseSearchGrounding(e.target.checked)}
                className="accent-[#087E8B] rounded cursor-pointer"
              />
              <Search className="w-3 h-3 text-[#087E8B]" />
              <span className="font-semibold">Google Search Grounding</span>
            </label>

            {/* Model Speed toggle */}
            <div className="flex items-center gap-1 bg-white p-0.5 rounded-lg border border-slate-200">
              <button
                onClick={() => setSpeedMode('standard')}
                className={`px-2 py-0.5 rounded text-[10px] font-bold transition cursor-pointer ${
                  speedMode === 'standard' ? 'bg-[#087E8B] text-white' : 'text-slate-600 hover:text-slate-900'
                }`}
                title="Gemini 3.8 Flash (General Tasks with Search Grounding)"
              >
                3.8 Flash
              </button>
              <button
                onClick={() => setSpeedMode('fast')}
                className={`px-2 py-0.5 rounded text-[10px] font-bold transition cursor-pointer ${
                  speedMode === 'fast' ? 'bg-[#087E8B] text-white' : 'text-slate-600 hover:text-slate-900'
                }`}
                title="Gemini 3.1 Flash Lite (Fast Tasks)"
              >
                3.1 Lite ⚡
              </button>
            </div>
          </div>

          {/* Messages Thread (Scrollable) */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-slate-50 text-xs">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex gap-2.5 ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {m.role === 'model' && (
                  <div className="w-7 h-7 rounded-full bg-[#071B33] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    <Bot className="w-4 h-4 text-[#D4AF37]" />
                  </div>
                )}

                <div
                  className={`max-w-[85%] rounded-2xl p-3.5 shadow-xs space-y-2 ${
                    m.role === 'user'
                      ? 'bg-[#087E8B] text-white rounded-tr-none'
                      : 'bg-white text-slate-800 border border-slate-200 rounded-tl-none'
                  }`}
                >
                  <div className="text-xs">{renderFormattedText(m.text)}</div>

                  {/* Search Queries used by Grounding */}
                  {m.searchQueries && m.searchQueries.length > 0 && (
                    <div className="pt-2 border-t border-slate-100 space-y-1">
                      <span className="text-[10px] uppercase font-bold text-slate-400 flex items-center gap-1">
                        <Search className="w-3 h-3 text-[#087E8B]" />
                        <span>Search Grounded Queries:</span>
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {m.searchQueries.map((q, qIdx) => (
                          <span
                            key={qIdx}
                            className="bg-sky-50 text-sky-800 text-[10px] px-2 py-0.5 rounded-md font-medium border border-sky-200"
                          >
                            "{q}"
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Web Sources Chips from Google Search Grounding */}
                  {m.sources && m.sources.length > 0 && (
                    <div className="pt-2 border-t border-slate-100 space-y-1">
                      <span className="text-[10px] uppercase font-bold text-slate-400 flex items-center gap-1">
                        <Globe2 className="w-3 h-3 text-[#087E8B]" />
                        <span>Verified Web Sources:</span>
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {m.sources.map((src, sIdx) => (
                          <a
                            key={sIdx}
                            href={src.uri}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 bg-[#F4F7FA] hover:bg-slate-200 text-slate-700 px-2 py-1 rounded-md text-[10px] border border-slate-200 font-medium transition"
                          >
                            <span className="truncate max-w-[140px]">{src.title}</span>
                            <ExternalLink className="w-2.5 h-2.5 text-slate-400 shrink-0" />
                          </a>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Message Timestamp */}
                  <div
                    className={`text-[9px] pt-1 text-right ${
                      m.role === 'user' ? 'text-white/70' : 'text-slate-400'
                    }`}
                  >
                    {m.timestamp}
                  </div>
                </div>

                {m.role === 'user' && (
                  <div className="w-7 h-7 rounded-full bg-[#087E8B] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}

            {loading && (
              <div className="flex gap-2.5 justify-start">
                <div className="w-7 h-7 rounded-full bg-[#071B33] text-white flex items-center justify-center shrink-0 mt-0.5">
                  <Bot className="w-4 h-4 text-[#D4AF37]" />
                </div>
                <div className="bg-white border border-slate-200 rounded-2xl rounded-tl-none p-3.5 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-xs text-slate-600">
                    <div className="w-2 h-2 rounded-full bg-[#087E8B] animate-ping"></div>
                    <span>
                      {useSearchGrounding
                        ? 'Consulting Google Search data & Sadiq Travels inventory...'
                        : 'Generating travel guidance...'}
                    </span>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompts Carousel */}
          <div className="bg-white px-3 py-2 border-t border-slate-100 overflow-x-auto whitespace-nowrap flex gap-1.5 text-[11px] shrink-0 no-scrollbar">
            {quickPrompts.map((prompt, i) => (
              <button
                key={i}
                disabled={loading}
                onClick={() => handleSendMessage(prompt)}
                className="bg-slate-100 hover:bg-[#071B33] hover:text-white text-slate-700 px-2.5 py-1 rounded-full text-[11px] font-medium transition shrink-0 cursor-pointer disabled:opacity-50"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Input & Send Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-3 bg-white border-t border-slate-200 flex items-center gap-2 shrink-0"
          >
            <input
              ref={inputRef}
              type="text"
              placeholder="Ask about flights, Umrah, visas, prices..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={loading}
              className="flex-1 px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-[#087E8B] focus:ring-2 focus:ring-[#087E8B]/20 text-xs outline-none bg-slate-50 disabled:bg-slate-100"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="p-2.5 rounded-xl bg-[#087E8B] hover:bg-[#066570] disabled:bg-slate-300 text-white transition cursor-pointer shadow-md"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

          {/* Bottom WhatsApp Contact Strip */}
          <div className="bg-[#071B33] px-3 py-1.5 text-center text-[10px] text-slate-300 flex items-center justify-between shrink-0">
            <span>Direct Bannu Agency Desk:</span>
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#25D366] font-bold hover:underline flex items-center gap-1"
            >
              <span>WhatsApp MD Sadiq Rahman</span>
              <ExternalLink className="w-2.5 h-2.5" />
            </a>
          </div>
        </div>
      )}
    </>
  );
}
