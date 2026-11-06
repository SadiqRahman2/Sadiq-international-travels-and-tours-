import React, { useState } from 'react';
import {
  FileCheck2,
  Clock,
  AlertTriangle,
  CheckCircle,
  MessageCircle,
  Sparkles,
  ShieldCheck,
  Search,
  Globe2,
} from 'lucide-react';
import { VISA_SERVICES, COMPANY_INFO, VisaService } from '../data/travelData';
import { useCurrency } from '../context/CurrencyContext';

interface VisaServicesSectionProps {
  onOpenEnquiry: (title: string, category?: string) => void;
}

export function VisaServicesSection({ onOpenEnquiry }: VisaServicesSectionProps) {
  const { formatPrice, isEstimate, getWhatsAppEnquiryUrl } = useCurrency();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredVisas = VISA_SERVICES.filter(
    (v) =>
      v.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
      v.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleWhatsAppVisa = (v: VisaService) => {
    const url = getWhatsAppEnquiryUrl(`Visa Service: ${v.country} - ${v.category}`, {
      Country: v.country,
      Type: v.category,
      Validity: v.duration,
      'Processing Time': v.processingTime,
      'Service Fare': formatPrice(v.sadiqPricePKR),
    });
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-16 bg-[#F4F7FA]" id="visa-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 bg-[#087E8B]/10 text-[#087E8B] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
            <FileCheck2 className="w-4 h-4 text-[#087E8B]" />
            <span>Worldwide Tourist & Visit Visas</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#071B33] tracking-tight">
            VISA SERVICES & CONSULTANCY
          </h2>
          <div className="w-20 h-1 bg-[#D4AF37] mx-auto mt-3 rounded-full"></div>
          <p className="urdu-text text-xl text-[#087E8B] mt-2 font-bold">
            مستند اور قانونی ویزا رہنمائی — مکمل فائل تیاری اور مشاورت
          </p>
          <p className="text-slate-600 text-sm mt-2">
            Official electronic visas, tourist permits, and embassy file preparation with precise document auditing for high approval rates.
          </p>
        </div>

        {/* Mandatory Legal Compliance Warning (Section 10 Requirement) */}
        <div className="bg-amber-50 border-2 border-amber-300 rounded-2xl p-5 mb-8 text-xs text-amber-950 flex flex-col sm:flex-row items-start sm:items-center gap-4 shadow-sm">
          <div className="p-2 bg-amber-200/80 rounded-xl text-amber-900 shrink-0">
            <AlertTriangle className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <p className="font-extrabold text-sm text-amber-900">
              Important Regulatory Compliance & Transparency Notice:
            </p>
            <p className="leading-relaxed">
              Sadiq International Travels and Tours provides legal visa consultancy, document verification, application submission, and appointment scheduling. <strong>We do not guarantee visa approval</strong>. Final visa issuance decisions are made strictly and solely by the respective foreign embassies, consulates, and immigration authorities (UAE ICP/GDRFA, Saudi MOFA, UKVI, etc.).
            </p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-10">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search visa by country (e.g. Dubai, Saudi, Turkey, UK)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-2xl bg-white border border-slate-300 focus:border-[#087E8B] focus:ring-2 focus:ring-[#087E8B]/20 text-xs text-slate-800 outline-none shadow-sm transition"
            />
          </div>
        </div>

        {/* Visa Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVisas.map((visa) => (
            <div
              key={visa.id}
              className="bg-white rounded-3xl shadow-lg border border-slate-200 overflow-hidden hover:shadow-2xl transition duration-300 flex flex-col justify-between group"
            >
              {/* Header Image with Country Flag */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={visa.image}
                  alt={visa.country}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"></div>

                {/* Country Flag Badge */}
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-slate-900 flex items-center gap-1.5 shadow-md">
                  <span className="text-base">{visa.flag}</span>
                  <span>{visa.country}</span>
                </div>

                {/* Processing Time Badge */}
                <div className="absolute top-3 right-3 bg-[#071B33]/80 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 rounded-full flex items-center gap-1">
                  <Clock className="w-3 h-3 text-[#D4AF37]" />
                  <span>{visa.processingTime}</span>
                </div>

                {/* Country title on bottom */}
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <h3 className="text-xl font-extrabold leading-tight drop-shadow-md">
                    {visa.country}
                  </h3>
                  <p className="text-xs text-[#0fd2e7] font-semibold">
                    {visa.category}
                  </p>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                {/* Price Box */}
                <div className="bg-[#F4F7FA] p-3.5 rounded-2xl border border-slate-200 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                      Fee / Consultation
                    </span>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-2xl font-extrabold text-[#071B33]">
                        {formatPrice(visa.sadiqPricePKR)}
                      </span>
                      {isEstimate && (
                        <span className="text-[10px] text-amber-700 font-semibold bg-amber-100 px-1 py-0.5 rounded">
                          Converted Est.
                        </span>
                      )}
                    </div>
                    <span className="text-[10px] text-slate-500 block">
                      Base rate: PKR {new Intl.NumberFormat('en-PK').format(visa.sadiqPricePKR)}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-[11px] font-semibold text-slate-600 bg-white px-2.5 py-1 rounded-lg border border-slate-200 inline-block">
                      {visa.duration}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {visa.description}
                </p>

                {/* Required Documents Checklist */}
                <div className="space-y-1.5 pt-2 border-t border-slate-100">
                  <p className="text-[11px] font-bold uppercase text-slate-400">Basic Requirements:</p>
                  {visa.requirements.map((req, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{req}</span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-2 pt-4 border-t border-slate-100">
                  <button
                    onClick={() => onOpenEnquiry(`${visa.country} - ${visa.category}`, 'Visa')}
                    className="w-full py-2.5 rounded-xl bg-[#071B33] hover:bg-[#040F1E] text-white text-xs font-bold uppercase tracking-wider transition cursor-pointer"
                  >
                    Enquire Now
                  </button>

                  <button
                    onClick={() => handleWhatsAppVisa(visa)}
                    className="w-full py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md shadow-emerald-600/20 transition cursor-pointer"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
