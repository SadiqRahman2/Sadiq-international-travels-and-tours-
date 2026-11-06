import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Menu,
  X,
  ChevronDown,
  Globe2,
  Plane,
  Compass,
  Building2,
  Calendar,
  Users2,
  Sparkles,
  ExternalLink,
  Bot,
} from 'lucide-react';
import { COMPANY_INFO, CURRENCIES } from '../data/travelData';
import { useCurrency } from '../context/CurrencyContext';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenEnquiry: (title: string, category?: string) => void;
  onOpenChat?: () => void;
}

export function Header({ activeTab, setActiveTab, onOpenEnquiry, onOpenChat }: HeaderProps) {
  const { currentCurrency, setCurrency } = useCurrency();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currencyDropdownOpen, setCurrencyDropdownOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'flights', label: 'Flight Booking' },
    { id: 'visa', label: 'Visa Services' },
    { id: 'umrah', label: 'Umrah Packages' },
    { id: 'hajj', label: 'Hajj Services' },
    { id: 'international-tours', label: 'Intl Tours' },
    { id: 'pakistan-tours', label: 'Pakistan Tours' },
    { id: 'hotels', label: 'Hotels' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white shadow-md border-b border-slate-200">
      {/* Top Bar (Navy Blue Luxury Background) */}
      <div className="bg-[#071B33] text-slate-200 text-xs border-b border-[#087E8B]/30 hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 flex items-center justify-between">
          {/* Left: Contact Info */}
          <div className="flex items-center gap-6">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="flex items-center gap-1.5 hover:text-[#D4AF37] transition font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-[#087E8B]" />
              <span>Call: {COMPANY_INFO.phone}</span>
            </a>
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-[#25D366] transition font-medium"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
              <span>WhatsApp: {COMPANY_INFO.whatsapp}</span>
            </a>
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="flex items-center gap-1.5 hover:text-[#D4AF37] transition font-medium"
            >
              <Mail className="w-3.5 h-3.5 text-[#087E8B]" />
              <span>{COMPANY_INFO.email}</span>
            </a>
            <span className="flex items-center gap-1.5 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Bannu, Khyber Pakhtunkhwa, Pakistan</span>
            </span>
          </div>

          {/* Right: VIP WhatsApp Group & Currency Selector */}
          <div className="flex items-center gap-4">
            <a
              href={COMPANY_INFO.whatsappGroupUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-[#087E8B]/30 hover:bg-[#087E8B]/60 text-emerald-300 px-3 py-1 rounded-full border border-emerald-500/30 transition text-xs font-semibold"
            >
              <Users2 className="w-3 h-3 text-emerald-400" />
              <span>Join Official WhatsApp Group</span>
            </a>

            {/* Currency Selector */}
            <div className="relative">
              <button
                onClick={() => setCurrencyDropdownOpen(!currencyDropdownOpen)}
                className="flex items-center gap-1.5 bg-white/10 hover:bg-white/20 px-3 py-1 rounded-md text-white font-medium border border-white/20 transition cursor-pointer"
                title="Select Currency"
              >
                <span>{currentCurrency.flag}</span>
                <span className="font-semibold">{currentCurrency.code}</span>
                <span className="text-slate-400">({currentCurrency.symbol})</span>
                <ChevronDown className="w-3 h-3 text-slate-300" />
              </button>

              {currencyDropdownOpen && (
                <div
                  className="absolute right-0 mt-1.5 w-48 bg-white text-slate-800 rounded-xl shadow-2xl border border-slate-200 py-1.5 z-50 animate-fadeIn"
                  onMouseLeave={() => setCurrencyDropdownOpen(false)}
                >
                  <div className="px-3 py-1.5 text-[10px] uppercase font-bold text-slate-400 border-b border-slate-100">
                    Select Display Currency
                  </div>
                  {Object.values(CURRENCIES).map((curr) => (
                    <button
                      key={curr.code}
                      onClick={() => {
                        setCurrency(curr.code);
                        setCurrencyDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 flex items-center justify-between text-xs hover:bg-[#F4F7FA] transition cursor-pointer ${
                        currentCurrency.code === curr.code
                          ? 'bg-[#087E8B]/10 text-[#087E8B] font-bold'
                          : 'text-slate-700'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span>{curr.flag}</span>
                        <span>{curr.code} - {curr.name}</span>
                      </span>
                      <span className="text-slate-400 font-mono text-[11px]">{curr.symbol}</span>
                    </button>
                  ))}
                  <div className="px-3 pt-2 pb-1 text-[10px] text-slate-500 border-t border-slate-100 italic">
                    PKR is base currency. Other currencies are live estimates.
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Header / Branding Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5">
        <div className="flex items-center justify-between gap-4">
          {/* Logo & Agency Title */}
          <div
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 sm:gap-4 cursor-pointer group"
          >
            <div className="relative">
              <img
                src={COMPANY_INFO.logo}
                alt="Sadiq International Travels and Tours Official Logo"
                className="w-14 h-14 sm:w-16 sm:h-16 object-contain rounded-full shadow-md border-2 border-[#D4AF37] group-hover:scale-105 transition duration-300"
              />
              <span className="absolute -bottom-1 -right-1 bg-emerald-500 w-3.5 h-3.5 rounded-full border-2 border-white" title="Verified Travel Agency"></span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase font-extrabold tracking-widest text-[#087E8B]">
                  Government Verified
                </span>
                <span className="text-[11px] bg-[#D4AF37]/20 text-[#B8860B] font-bold px-2 py-0.5 rounded">
                  Bannu, KP
                </span>
              </div>
              <h1 className="text-base sm:text-xl font-extrabold tracking-tight text-[#071B33] group-hover:text-[#087E8B] transition">
                SADIQ INTERNATIONAL TRAVELS & TOURS
              </h1>
              <div className="flex items-center gap-2">
                <p className="text-xs font-medium text-slate-600 hidden sm:block">
                  {COMPANY_INFO.tagline}
                </p>
                <span className="hidden sm:inline text-slate-300">•</span>
                <p className="urdu-text text-xs text-[#087E8B] font-semibold leading-none">
                  {COMPANY_INFO.urduName}
                </p>
              </div>
            </div>
          </div>

          {/* Action CTAs & Mobile Controls */}
          <div className="flex items-center gap-3">
            {/* Quick Currency Picker on Mobile */}
            <div className="lg:hidden">
              <select
                value={currentCurrency.code}
                onChange={(e) => setCurrency(e.target.value)}
                className="text-xs bg-[#F4F7FA] border border-slate-300 rounded-lg px-2 py-1.5 font-bold text-[#071B33]"
              >
                {Object.values(CURRENCIES).map((c) => (
                  <option key={c.code} value={c.code}>
                    {c.flag} {c.code} ({c.symbol})
                  </option>
                ))}
              </select>
            </div>

            {/* Call Now button */}
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border border-slate-300 hover:border-[#087E8B] text-[#071B33] hover:text-[#087E8B] text-xs font-semibold shadow-xs transition"
            >
              <Phone className="w-3.5 h-3.5 text-[#087E8B]" />
              <span>Call: {COMPANY_INFO.phone}</span>
            </a>

            {/* WhatsApp Button */}
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold shadow-md shadow-emerald-600/20 transition cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 transition"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar (Desktop) */}
      <nav className="bg-[#071B33] text-white hidden lg:block border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-1">
              {navItems.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`px-3.5 py-3 text-xs uppercase tracking-wider font-semibold transition relative cursor-pointer ${
                      isActive
                        ? 'text-[#D4AF37] bg-[#040F1E]'
                        : 'text-slate-200 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D4AF37]"></span>
                    )}
                  </button>
                );
              })}
            </div>

            <div className="flex items-center gap-2 py-1.5">
              {onOpenChat && (
                <button
                  onClick={onOpenChat}
                  className="inline-flex items-center gap-1.5 bg-[#040F1E] hover:bg-[#0d233e] text-[#D4AF37] border border-[#D4AF37]/50 px-3.5 py-1.5 rounded-lg text-xs font-bold shadow transition cursor-pointer"
                  title="Ask Sadiq Travels AI Assistant (Google Search Grounded)"
                >
                  <Bot className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>AI Travel Concierge</span>
                </button>
              )}
              <button
                onClick={() => onOpenEnquiry('Custom Travel Package', 'General')}
                className="inline-flex items-center gap-1.5 bg-[#087E8B] hover:bg-[#066570] text-white px-3.5 py-1.5 rounded-lg text-xs font-semibold shadow transition cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Enquire Now</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#071B33] text-white border-t border-slate-800 animate-fadeIn px-4 py-6 space-y-4 max-h-[85vh] overflow-y-auto">
          {/* Sadiq Rahman Mini Badge */}
          <div className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/10">
            <img
              src={COMPANY_INFO.founder.photo}
              alt={COMPANY_INFO.founder.name}
              className="w-12 h-12 rounded-full object-cover border border-[#D4AF37]"
            />
            <div>
              <p className="text-xs font-bold text-white">{COMPANY_INFO.founder.name}</p>
              <p className="text-[11px] text-[#D4AF37]">{COMPANY_INFO.founder.title}</p>
              <p className="text-[10px] text-slate-300">Bannu, Khyber Pakhtunkhwa</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-2.5 rounded-lg text-left text-xs font-semibold uppercase tracking-wider transition ${
                    isActive
                      ? 'bg-[#087E8B] text-white font-bold'
                      : 'bg-white/5 text-slate-200 hover:bg-white/10'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <div className="pt-2 border-t border-white/10 space-y-2">
            {onOpenChat && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenChat();
                }}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-gradient-to-r from-[#087E8B] to-[#040F1E] text-[#D4AF37] border border-[#D4AF37]/50 font-bold text-xs transition cursor-pointer"
              >
                <Bot className="w-4 h-4 text-[#D4AF37]" />
                <span>Chat with AI Travel Assistant (Google Search)</span>
              </button>
            )}
            <a
              href={COMPANY_INFO.whatsappGroupUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition"
            >
              <Users2 className="w-4 h-4" />
              <span>Join Official WhatsApp Group</span>
            </a>

            <div className="flex gap-2">
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-xs transition"
              >
                <Phone className="w-4 h-4 text-[#087E8B]" />
                <span>Call {COMPANY_INFO.phone}</span>
              </a>
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-[#25D366] text-white font-bold text-xs transition"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>

            <div className="p-3 bg-white/5 rounded-xl text-[11px] text-slate-300 space-y-1">
              <p>📍 {COMPANY_INFO.address.full}</p>
              <p>✉️ {COMPANY_INFO.email}</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
