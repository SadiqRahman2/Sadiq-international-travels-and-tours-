import React, { useState } from 'react';
import {
  Plane,
  Moon,
  FileCheck2,
  MapPin,
  Building,
  ArrowRight,
  MessageCircle,
  ShieldCheck,
  Award,
  Sparkles,
  Search,
  Calendar,
  Users,
  Bot,
} from 'lucide-react';
import { COMPANY_INFO } from '../data/travelData';
import { useCurrency } from '../context/CurrencyContext';

interface HeroSectionProps {
  onNavigate: (tab: string) => void;
  onOpenEnquiry: (title: string, category?: string) => void;
  onOpenChat?: () => void;
}

export function HeroSection({ onNavigate, onOpenEnquiry, onOpenChat }: HeroSectionProps) {
  const { currentCurrency, getWhatsAppEnquiryUrl } = useCurrency();
  const [activeQuickTab, setActiveQuickTab] = useState<'flights' | 'umrah' | 'visas' | 'tours' | 'hotels'>('flights');

  // Flight quick state
  const [flightFrom, setFlightFrom] = useState('Islamabad (ISB)');
  const [flightTo, setFlightTo] = useState('Jeddah (JED)');
  const [flightDate, setFlightDate] = useState('');
  const [flightTripType, setFlightTripType] = useState('return');

  // Umrah quick state
  const [umrahDuration, setUmrahDuration] = useState('14 Days Standard');
  const [umrahPersons, setUmrahPersons] = useState('2 Persons');

  // Visa quick state
  const [visaCountry, setVisaCountry] = useState('United Arab Emirates (Dubai)');

  // Tours quick state
  const [tourDestination, setTourDestination] = useState('Dubai & Abu Dhabi');

  // Hotel quick state
  const [hotelCity, setHotelCity] = useState('Makkah Mukarramah');

  const handleHeroSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (activeQuickTab === 'flights') {
      const url = getWhatsAppEnquiryUrl(`Flight Enquiry: ${flightFrom} to ${flightTo}`, {
        'Trip Type': flightTripType === 'return' ? 'Round Trip' : 'One Way',
        'Departure': flightFrom,
        'Arrival': flightTo,
        'Date': flightDate || 'Flexible',
      });
      window.open(url, '_blank', 'noopener,noreferrer');
    } else if (activeQuickTab === 'umrah') {
      const url = getWhatsAppEnquiryUrl(`Umrah Package Booking`, {
        'Type': umrahDuration,
        'Pilgrims': umrahPersons,
      });
      window.open(url, '_blank', 'noopener,noreferrer');
    } else if (activeQuickTab === 'visas') {
      const url = getWhatsAppEnquiryUrl(`Visit Visa Assistance`, {
        'Country': visaCountry,
      });
      window.open(url, '_blank', 'noopener,noreferrer');
    } else if (activeQuickTab === 'tours') {
      const url = getWhatsAppEnquiryUrl(`Holiday Tour Package`, {
        'Destination': tourDestination,
      });
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      const url = getWhatsAppEnquiryUrl(`Hotel Reservation`, {
        'City': hotelCity,
      });
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="relative overflow-hidden bg-[#071B33] text-white">
      {/* Background with luxury gradient and subtle travel imagery */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=2000&q=80"
          alt="International Airplane and Sky"
          className="w-full h-full object-cover opacity-20 filter contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071B33] via-[#071B33]/90 to-[#071B33]/70"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#071B33] via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-10 pb-16 lg:pt-16 lg:pb-24">
        {/* Top Tagline Badge with Original Logo */}
        <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 mb-6">
          <img
            src={COMPANY_INFO.logo}
            alt={COMPANY_INFO.name}
            className="w-6 h-6 object-contain rounded-full bg-white p-0.5"
          />
          <span className="text-[#D4AF37] font-semibold text-xs tracking-wider uppercase">
            {COMPANY_INFO.tagline}
          </span>
          <span className="text-white/40">•</span>
          <span className="text-xs text-white/90">Official Travel Partner in Bannu, KP</span>
        </div>

        {/* Main Headings */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-5">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              YOUR JOURNEY, <br />
              <span className="text-[#087E8B] bg-gradient-to-r from-[#087E8B] to-[#0fd2e7] bg-clip-text text-transparent">
                OUR PRIORITY
              </span>
            </h1>

            <p className="urdu-text text-xl sm:text-2xl text-[#D4AF37] font-bold">
              صادق انٹرنیشنل ٹریولز اینڈ ٹورز — آپ کا سفر، ہمارا فخر
            </p>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
              {COMPANY_INFO.homepageSubtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onNavigate('umrah')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#087E8B] hover:bg-[#066570] text-white font-bold text-sm shadow-xl shadow-teal-900/30 transition transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Book Your Journey</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('visa')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 backdrop-blur-xs transition cursor-pointer"
              >
                <span>Explore Our Services</span>
              </button>

              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm shadow-lg shadow-emerald-600/30 transition cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>

              {onOpenChat && (
                <button
                  onClick={onOpenChat}
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-[#D4AF37] hover:bg-[#BF9B27] text-[#071B33] font-extrabold text-sm shadow-lg shadow-amber-500/20 transition cursor-pointer"
                >
                  <Bot className="w-4 h-4" />
                  <span>Ask AI Assistant</span>
                </button>
              )}
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-white/10 text-xs">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                <span className="text-slate-200">100% Transparent Rates</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#087E8B]" />
                <span className="text-slate-200">Verified Visa Filing</span>
              </div>
              <div className="flex items-center gap-2">
                <Plane className="w-4 h-4 text-[#D4AF37]" />
                <span className="text-slate-200">Official Airline GDS</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#087E8B]" />
                <span className="text-slate-200">Physical Office in Bannu</span>
              </div>
            </div>
          </div>

          {/* Quick Booking Engine (Inspired by Rehman Travel & Top International OTAs) */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100 text-slate-800">
              {/* Tabs */}
              <div className="grid grid-cols-5 bg-[#040F1E] text-white text-xs font-semibold">
                <button
                  type="button"
                  onClick={() => setActiveQuickTab('flights')}
                  className={`py-3 px-1 flex flex-col items-center gap-1 transition ${
                    activeQuickTab === 'flights' ? 'bg-[#087E8B] text-white' : 'text-slate-300 hover:bg-white/5'
                  }`}
                >
                  <Plane className="w-4 h-4" />
                  <span className="text-[10px]">Flights</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveQuickTab('umrah')}
                  className={`py-3 px-1 flex flex-col items-center gap-1 transition ${
                    activeQuickTab === 'umrah' ? 'bg-[#087E8B] text-white' : 'text-slate-300 hover:bg-white/5'
                  }`}
                >
                  <Moon className="w-4 h-4 text-[#D4AF37]" />
                  <span className="text-[10px]">Umrah</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveQuickTab('visas')}
                  className={`py-3 px-1 flex flex-col items-center gap-1 transition ${
                    activeQuickTab === 'visas' ? 'bg-[#087E8B] text-white' : 'text-slate-300 hover:bg-white/5'
                  }`}
                >
                  <FileCheck2 className="w-4 h-4" />
                  <span className="text-[10px]">Visas</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveQuickTab('tours')}
                  className={`py-3 px-1 flex flex-col items-center gap-1 transition ${
                    activeQuickTab === 'tours' ? 'bg-[#087E8B] text-white' : 'text-slate-300 hover:bg-white/5'
                  }`}
                >
                  <MapPin className="w-4 h-4" />
                  <span className="text-[10px]">Tours</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveQuickTab('hotels')}
                  className={`py-3 px-1 flex flex-col items-center gap-1 transition ${
                    activeQuickTab === 'hotels' ? 'bg-[#087E8B] text-white' : 'text-slate-300 hover:bg-white/5'
                  }`}
                >
                  <Building className="w-4 h-4" />
                  <span className="text-[10px]">Hotels</span>
                </button>
              </div>

              {/* Form Content */}
              <form onSubmit={handleHeroSearch} className="p-5 space-y-4">
                {activeQuickTab === 'flights' && (
                  <>
                    <div className="flex items-center gap-4 text-xs font-semibold text-slate-600">
                      <label className="flex items-center gap-1.5 cursor-pointer">
                        <input
                          type="radio"
                          name="tripType"
                          value="return"
                          checked={flightTripType === 'return'}
                          onChange={() => setFlightTripType('return')}
                          className="accent-[#087E8B]"
                        />
                        <span>Round Trip</span>
                      </label>
                      <label className="flex items-center gap-1.5 cursor-pointer">
                        <input
                          type="radio"
                          name="tripType"
                          value="oneway"
                          checked={flightTripType === 'oneway'}
                          onChange={() => setFlightTripType('oneway')}
                          className="accent-[#087E8B]"
                        />
                        <span>One Way</span>
                      </label>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-bold text-slate-500 uppercase">From</label>
                        <select
                          value={flightFrom}
                          onChange={(e) => setFlightFrom(e.target.value)}
                          className="w-full mt-1 p-2 rounded-lg border border-slate-300 text-xs font-medium focus:border-[#087E8B] outline-none"
                        >
                          <option>Islamabad (ISB)</option>
                          <option>Peshawar (PEW)</option>
                          <option>Lahore (LHE)</option>
                          <option>Karachi (KHI)</option>
                          <option>Multan (MUX)</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold text-slate-500 uppercase">To Destination</label>
                        <select
                          value={flightTo}
                          onChange={(e) => setFlightTo(e.target.value)}
                          className="w-full mt-1 p-2 rounded-lg border border-slate-300 text-xs font-medium focus:border-[#087E8B] outline-none"
                        >
                          <option>Jeddah (JED)</option>
                          <option>Madinah (MED)</option>
                          <option>Dubai (DXB)</option>
                          <option>Riyadh (RUH)</option>
                          <option>Doha (DOH)</option>
                          <option>London (LHR)</option>
                          <option>Istanbul (IST)</option>
                          <option>Baku (GYD)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-500 uppercase">Departure Date</label>
                      <input
                        type="date"
                        value={flightDate}
                        onChange={(e) => setFlightDate(e.target.value)}
                        className="w-full mt-1 p-2 rounded-lg border border-slate-300 text-xs font-medium focus:border-[#087E8B] outline-none"
                      />
                    </div>
                  </>
                )}

                {activeQuickTab === 'umrah' && (
                  <div className="space-y-3">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-500 uppercase">Umrah Package Type</label>
                      <select
                        value={umrahDuration}
                        onChange={(e) => setUmrahDuration(e.target.value)}
                        className="w-full mt-1 p-2.5 rounded-lg border border-slate-300 text-xs font-medium focus:border-[#087E8B] outline-none"
                      >
                        <option>14 Days Economy Umrah</option>
                        <option>14 Days Standard (Near Haram)</option>
                        <option>14 Days 5-Star Luxury Clock Tower</option>
                        <option>21 Days Spiritual Complete</option>
                        <option>30 Days Full Month Umrah</option>
                        <option>Customized Family Umrah</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-500 uppercase">Number of Pilgrims</label>
                      <select
                        value={umrahPersons}
                        onChange={(e) => setUmrahPersons(e.target.value)}
                        className="w-full mt-1 p-2.5 rounded-lg border border-slate-300 text-xs font-medium focus:border-[#087E8B] outline-none"
                      >
                        <option>1 Person (Single)</option>
                        <option>2 Persons (Double Sharing)</option>
                        <option>3 Persons (Triple Sharing)</option>
                        <option>4 Persons (Quad Sharing)</option>
                        <option>5+ Persons (Family Group)</option>
                      </select>
                    </div>
                  </div>
                )}

                {activeQuickTab === 'visas' && (
                  <div className="space-y-3">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-500 uppercase">Select Country</label>
                      <select
                        value={visaCountry}
                        onChange={(e) => setVisaCountry(e.target.value)}
                        className="w-full mt-1 p-2.5 rounded-lg border border-slate-300 text-xs font-medium focus:border-[#087E8B] outline-none"
                      >
                        <option>United Arab Emirates (Dubai 30/60 Days)</option>
                        <option>Saudi Arabia (Tourist & Umrah eVisa)</option>
                        <option>Qatar (Hayya & Tourist Visa)</option>
                        <option>Bahrain (Tourist eVisa)</option>
                        <option>Turkey (eVisa & Sticker Guidance)</option>
                        <option>Azerbaijan (Baku ASAN eVisa)</option>
                        <option>Malaysia (eNTRI / Tourist)</option>
                        <option>Thailand (Tourist Visa)</option>
                        <option>United Kingdom (Standard Visitor Guidance)</option>
                        <option>Schengen European Countries</option>
                      </select>
                    </div>
                    <p className="text-[11px] text-slate-500 italic">
                      Fast document verification & embassy application assistance.
                    </p>
                  </div>
                )}

                {activeQuickTab === 'tours' && (
                  <div className="space-y-3">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-500 uppercase">Preferred Tour</label>
                      <select
                        value={tourDestination}
                        onChange={(e) => setTourDestination(e.target.value)}
                        className="w-full mt-1 p-2.5 rounded-lg border border-slate-300 text-xs font-medium focus:border-[#087E8B] outline-none"
                      >
                        <option>Dubai & Abu Dhabi 5 Days</option>
                        <option>Istanbul & Bosphorus 6 Days</option>
                        <option>Baku & Gabala 5 Days</option>
                        <option>Kuala Lumpur Malaysia 5 Days</option>
                        <option>Hunza & Khunjerab 7 Days (Pakistan)</option>
                        <option>Skardu & Deosai 7 Days (Pakistan)</option>
                        <option>Swat & Kalam 4 Days (Pakistan)</option>
                      </select>
                    </div>
                  </div>
                )}

                {activeQuickTab === 'hotels' && (
                  <div className="space-y-3">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-500 uppercase">Destination City</label>
                      <select
                        value={hotelCity}
                        onChange={(e) => setHotelCity(e.target.value)}
                        className="w-full mt-1 p-2.5 rounded-lg border border-slate-300 text-xs font-medium focus:border-[#087E8B] outline-none"
                      >
                        <option>Makkah Mukarramah (Clock Tower / Haram View)</option>
                        <option>Madinah Munawwarah (Markazia Front)</option>
                        <option>Dubai (Downtown / Marina)</option>
                        <option>Istanbul (Sultanahmet / Taksim)</option>
                        <option>Baku (Nizami Street)</option>
                        <option>Hunza Serena / Skardu</option>
                      </select>
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#087E8B] hover:bg-[#066570] text-white font-bold text-xs uppercase tracking-wider shadow-md transition cursor-pointer"
                >
                  <Search className="w-4 h-4" />
                  <span>Get Instant WhatsApp Fare & Quote</span>
                </button>

                <div className="text-[10px] text-center text-slate-500">
                  Direct connection with MD Sadiq Rahman & official Bannu desk.
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
