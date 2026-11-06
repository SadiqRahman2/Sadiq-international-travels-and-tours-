import React, { useState } from 'react';
import {
  Moon,
  Sparkles,
  CheckCircle2,
  Phone,
  MessageCircle,
  FileCheck2,
  Building,
  ShieldCheck,
  Calendar,
  AlertCircle,
} from 'lucide-react';
import { COMPANY_INFO } from '../data/travelData';
import { useCurrency } from '../context/CurrencyContext';

interface HajjServicesSectionProps {
  onOpenEnquiry: (title: string, category?: string) => void;
}

export function HajjServicesSection({ onOpenEnquiry }: HajjServicesSectionProps) {
  const { getWhatsAppEnquiryUrl } = useCurrency();
  const [hajjScheme, setHajjScheme] = useState('Private Sponsorship Hajj');
  const [roomPreference, setRoomPreference] = useState('Quad Sharing');
  const [applicantName, setApplicantName] = useState('');
  const [applicantPhone, setApplicantPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleHajjSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!applicantName || !applicantPhone) {
      alert('Please fill in your name and phone number.');
      return;
    }
    setSubmitted(true);
  };

  const handleWhatsAppHajj = () => {
    const url = getWhatsAppEnquiryUrl(`Hajj Consultation & Package Booking`, {
      'Scheme Interested': hajjScheme,
      'Room Preference': roomPreference,
      'Pilgrim Name': applicantName || 'Pilgrim',
      'Contact Phone': applicantPhone || 'N/A',
    });
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-16 bg-[#F4F7FA]" id="hajj-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 bg-[#D4AF37]/15 text-[#B8860B] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
            <Moon className="w-4 h-4 text-[#D4AF37]" />
            <span>Fulfilling the Sacred Fifth Pillar</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#071B33] tracking-tight">
            HAJJ SERVICES & FACILITATION
          </h2>
          <div className="w-20 h-1 bg-[#087E8B] mx-auto mt-3 rounded-full"></div>
          <p className="urdu-text text-xl text-[#087E8B] mt-2 font-bold">
            حج بیت اللہ کی ادائیگی — مکمل شرعی اور انتظامی رہنمائی
          </p>
          <p className="text-slate-600 text-sm mt-2">
            Comprehensive assistance for Pakistan Government Hajj Scheme and Private Sponsorship Hajj schemes, Nusuk portal registration, flights, and Holy Sites Maktab logistics.
          </p>
        </div>

        {/* Policy & Availability Notice (Section 12 Requirement) */}
        <div className="bg-amber-50 border-l-4 border-amber-500 p-4 sm:p-5 rounded-r-2xl mb-8 text-xs text-amber-950 space-y-1">
          <div className="flex items-center gap-2 font-bold text-sm text-amber-900">
            <AlertCircle className="w-4 h-4 text-amber-700" />
            <span>Hajj Booking & Verification Policy</span>
          </div>
          <p className="leading-relaxed">
            Hajj regulations and quotas are strictly regulated by the Ministry of Religious Affairs (MORA) Pakistan and the Ministry of Hajj & Umrah Saudi Arabia. Sadiq International Travels publishes confirmed packages only upon official announcement. For current season quotas, requirements, and official rates, please consult directly with our office.
          </p>
        </div>

        {/* Hajj Pillars of Service */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200 space-y-3">
            <div className="w-12 h-12 bg-[#087E8B]/10 text-[#087E8B] rounded-2xl flex items-center justify-center">
              <FileCheck2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#071B33]">
              Application & Documentation
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Complete support with MORA application filings, foreign exchange sponsorship documentation, biometric verification at authorized centers, and Nusuk Masar registration.
            </p>
            <ul className="text-xs text-slate-700 space-y-1.5 pt-2 border-t border-slate-100">
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Passport & CNIC auditing</li>
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Medical fitness certificate guidance</li>
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Bank draft & fee deposition support</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200 space-y-3">
            <div className="w-12 h-12 bg-[#D4AF37]/15 text-[#B8860B] rounded-2xl flex items-center justify-center">
              <Building className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#071B33]">
              Accommodation & Holy Sites
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Verified hotel arrangements in Makkah Mukarramah and Madinah Munawwarah, along with allocated Maktabs in Mina and Arafat with air-conditioned tents.
            </p>
            <ul className="text-xs text-slate-700 space-y-1.5 pt-2 border-t border-slate-100">
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Shifting & Non-Shifting hotel options</li>
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> VIP Zone A / Zone B Mina tents</li>
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> 3 daily buffet meals in Mashair</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200 space-y-3">
            <div className="w-12 h-12 bg-[#071B33]/10 text-[#071B33] rounded-2xl flex items-center justify-center">
              <ShieldCheck className="w-6 h-6 text-[#087E8B]" />
            </div>
            <h3 className="text-lg font-bold text-[#071B33]">
              Logistics, Flights & Guidance
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Dedicated pre-Hajj training workshops, experienced religious guides (Moallim), Mashair high-speed train / VIP bus transport, and 24/7 emergency care.
            </p>
            <ul className="text-xs text-slate-700 space-y-1.5 pt-2 border-t border-slate-100">
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Direct Hajj flights from Pakistan</li>
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Step-by-step Manasik e Hajj training</li>
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Personal supervision by Sadiq Rahman</li>
            </ul>
          </div>
        </div>

        {/* Hajj Consultation Form */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl max-w-3xl mx-auto">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-[#071B33]">
                Hajj Consultation Registered!
              </h3>
              <p className="text-slate-600 text-sm">
                JazakAllah Khair {applicantName}. We have registered your inquiry for {hajjScheme}. Managing Director Sadiq Rahman will personally review and contact you with quota details.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={handleWhatsAppHajj}
                  className="px-6 py-3 rounded-xl bg-[#25D366] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Connect with Sadiq Rahman on WhatsApp</span>
                </button>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-3 rounded-xl bg-slate-100 text-slate-700 text-xs font-semibold cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleHajjSubmit} className="space-y-4">
              <div className="border-b border-slate-100 pb-3">
                <h3 className="text-xl font-extrabold text-[#071B33]">
                  Hajj Consultation & Seat Registration Form
                </h3>
                <p className="text-xs text-slate-500">
                  Register your interest for the upcoming Hajj season. No advance payment required for consultation.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Your Full Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Full Name as in CNIC"
                    value={applicantName}
                    onChange={(e) => setApplicantName(e.target.value)}
                    className="w-full p-3 rounded-xl bg-[#F4F7FA] border border-slate-300 text-xs font-medium outline-none focus:border-[#087E8B]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    WhatsApp Number <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 0315 8543374"
                    value={applicantPhone}
                    onChange={(e) => setApplicantPhone(e.target.value)}
                    className="w-full p-3 rounded-xl bg-[#F4F7FA] border border-slate-300 text-xs font-medium outline-none focus:border-[#087E8B]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Scheme Category
                  </label>
                  <select
                    value={hajjScheme}
                    onChange={(e) => setHajjScheme(e.target.value)}
                    className="w-full p-3 rounded-xl bg-[#F4F7FA] border border-slate-300 text-xs font-medium outline-none"
                  >
                    <option>Private Sponsorship Hajj (Remittance Scheme)</option>
                    <option>Regular Government Scheme Facilitation</option>
                    <option>VIP Short Hajj (14 - 18 Days)</option>
                    <option>Standard Long Hajj (38 - 42 Days)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Room Preference
                  </label>
                  <select
                    value={roomPreference}
                    onChange={(e) => setRoomPreference(e.target.value)}
                    className="w-full p-3 rounded-xl bg-[#F4F7FA] border border-slate-300 text-xs font-medium outline-none"
                  >
                    <option>Quad Sharing (Standard 4 Bed)</option>
                    <option>Triple Sharing (3 Bed)</option>
                    <option>Double / Twin Room (Couple)</option>
                  </select>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-1 py-3.5 rounded-xl bg-[#087E8B] hover:bg-[#066570] text-white font-bold text-xs uppercase tracking-wider shadow-md transition cursor-pointer"
                >
                  Submit Consultation Request
                </button>
                <button
                  type="button"
                  onClick={handleWhatsAppHajj}
                  className="px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Enquire on WhatsApp</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
