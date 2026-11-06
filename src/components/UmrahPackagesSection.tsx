import React, { useState } from 'react';
import {
  Moon,
  CheckCircle,
  Building,
  Plane,
  Car,
  FileCheck,
  Calendar,
  Sparkles,
  MessageCircle,
  Info,
  ShieldCheck,
  HelpCircle,
} from 'lucide-react';
import { UMRAH_PACKAGES, COMPANY_INFO, UmrahPackage } from '../data/travelData';
import { useCurrency } from '../context/CurrencyContext';

interface UmrahPackagesSectionProps {
  onOpenEnquiry: (title: string, category?: string) => void;
}

export function UmrahPackagesSection({ onOpenEnquiry }: UmrahPackagesSectionProps) {
  const { currentCurrency, formatPrice, isEstimate, getWhatsAppEnquiryUrl } = useCurrency();
  const [filter, setFilter] = useState<'all' | '14-days' | 'extended' | 'luxury'>('all');

  const filteredPackages = UMRAH_PACKAGES.filter((pkg) => {
    if (filter === '14-days') return pkg.duration.includes('14');
    if (filter === 'extended') return pkg.duration.includes('21') || pkg.duration.includes('30') || pkg.duration.includes('Flexible');
    if (filter === 'luxury') return pkg.id.includes('premium') || pkg.name.toLowerCase().includes('5-star');
    return true;
  });

  const handleWhatsAppBooking = (pkg: UmrahPackage) => {
    const url = getWhatsAppEnquiryUrl(pkg.name, {
      Duration: pkg.duration,
      'Package Price': formatPrice(pkg.sadiqPricePKR),
      Makkah: pkg.makkahHotel,
      Madinah: pkg.madinahHotel,
      Sharing: pkg.sharingType,
    });
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-16 bg-white" id="umrah-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 bg-[#D4AF37]/15 text-[#B8860B] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
            <Moon className="w-4 h-4 text-[#D4AF37]" />
            <span>Spiritual Journeys of a Lifetime</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#071B33] tracking-tight">
            UMRAH PACKAGES & SERVICES
          </h2>
          <div className="w-20 h-1 bg-[#087E8B] mx-auto mt-3 rounded-full"></div>
          <p className="urdu-text text-xl text-[#087E8B] mt-2 font-bold">
            مقدس مقامات کی حاضری — مکمل ایمانداری اور شفّاف قیمتوں کے ساتھ
          </p>
          <p className="text-slate-600 text-sm mt-2">
            Transparent pricing, verified hotels close to the Harams, official visa assistance, and caring ground support led by Sadiq Rahman.
          </p>
        </div>

        {/* Pricing Policy Notice (Section 8 Requirement) */}
        <div className="bg-[#F4F7FA] border-l-4 border-[#087E8B] p-4 sm:p-5 rounded-r-2xl mb-8 text-xs text-slate-700 space-y-1">
          <div className="flex items-center gap-2 text-sm font-bold text-[#071B33]">
            <Info className="w-4 h-4 text-[#087E8B]" />
            <span>Official Sadiq Travels Pricing Transparency</span>
          </div>
          <p className="leading-relaxed">
            {COMPANY_INFO.priceDisclaimer}
          </p>
          <p className="text-slate-500 font-medium">
            Pricing status: <span className="text-emerald-700 font-bold">{COMPANY_INFO.lastPricingUpdate}</span> • Benchmarked with top authorized operators including Rehman Travel with confirmed local agency service inclusions.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition cursor-pointer ${
              filter === 'all'
                ? 'bg-[#071B33] text-white shadow-md'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            All Packages ({UMRAH_PACKAGES.length})
          </button>
          <button
            onClick={() => setFilter('14-days')}
            className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition cursor-pointer ${
              filter === '14-days'
                ? 'bg-[#071B33] text-white shadow-md'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            14 Days Standard
          </button>
          <button
            onClick={() => setFilter('extended')}
            className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition cursor-pointer ${
              filter === 'extended'
                ? 'bg-[#071B33] text-white shadow-md'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            21 & 30 Days Extended
          </button>
          <button
            onClick={() => setFilter('luxury')}
            className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition cursor-pointer ${
              filter === 'luxury'
                ? 'bg-[#071B33] text-white shadow-md'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            5-Star Luxury Haram Facing
          </button>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPackages.map((pkg) => (
            <div
              key={pkg.id}
              className={`bg-white rounded-3xl shadow-lg border transition duration-300 hover:shadow-2xl flex flex-col justify-between overflow-hidden group ${
                pkg.featured ? 'border-[#087E8B] ring-2 ring-[#087E8B]/20' : 'border-slate-200'
              }`}
            >
              {/* Image & Tags */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                {/* Badge Tag */}
                {pkg.tag && (
                  <span className="absolute top-4 left-4 bg-[#D4AF37] text-[#071B33] text-[11px] font-extrabold uppercase px-3 py-1 rounded-full shadow-md">
                    {pkg.tag}
                  </span>
                )}

                {/* Duration Badge */}
                <span className="absolute top-4 right-4 bg-[#071B33]/80 backdrop-blur-md text-white text-[11px] font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#087E8B]" />
                  <span>{pkg.duration}</span>
                </span>

                {/* Name on image bottom */}
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <h3 className="text-xl font-bold leading-tight drop-shadow-md">
                    {pkg.name}
                  </h3>
                  <p className="text-xs text-slate-200 line-clamp-1">
                    {pkg.subtitle}
                  </p>
                </div>
              </div>

              {/* Package Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                {/* Price Display */}
                <div className="bg-[#F4F7FA] p-4 rounded-2xl border border-slate-200 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                      Starting From ({pkg.sharingType})
                    </span>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-2xl font-extrabold text-[#071B33]">
                        {formatPrice(pkg.sadiqPricePKR)}
                      </span>
                      {isEstimate && (
                        <span className="text-[10px] text-amber-700 font-semibold bg-amber-100 px-1.5 py-0.5 rounded">
                          Converted Est.
                        </span>
                      )}
                    </div>
                    <span className="text-[10px] text-slate-500 block">
                      Base price: PKR {new Intl.NumberFormat('en-PK').format(pkg.sadiqPricePKR)}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-emerald-700 font-bold bg-emerald-100 px-2 py-0.5 rounded-full inline-block">
                      Per Pilgrim
                    </span>
                  </div>
                </div>

                {/* Hotels & Distance */}
                <div className="space-y-2.5 text-xs text-slate-700">
                  <div className="flex items-start gap-2.5">
                    <Building className="w-4 h-4 text-[#087E8B] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-slate-900">Makkah Accommodation:</p>
                      <p className="text-slate-600">{pkg.makkahHotel} ({pkg.makkahDistance})</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Building className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-slate-900">Madinah Accommodation:</p>
                      <p className="text-slate-600">{pkg.madinahHotel} ({pkg.madinahDistance})</p>
                    </div>
                  </div>
                </div>

                {/* Inclusions List */}
                <div className="space-y-1.5 pt-2 border-t border-slate-100">
                  <p className="text-[11px] font-bold uppercase text-slate-400">Package Inclusions:</p>
                  {pkg.inclusions.slice(0, 4).map((inc, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-600">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{inc}</span>
                    </div>
                  ))}
                  {pkg.inclusions.length > 4 && (
                    <p className="text-[11px] text-[#087E8B] font-semibold pl-5">
                      + {pkg.inclusions.length - 4} more inclusions (Ziyarats & support)
                    </p>
                  )}
                </div>

                {/* Buttons */}
                <div className="grid grid-cols-2 gap-2 pt-4 border-t border-slate-100">
                  <button
                    onClick={() => onOpenEnquiry(pkg.name, 'Umrah')}
                    className="w-full py-2.5 rounded-xl bg-[#071B33] hover:bg-[#040F1E] text-white text-xs font-bold uppercase tracking-wider transition cursor-pointer"
                  >
                    Enquire Now
                  </button>

                  <button
                    onClick={() => handleWhatsAppBooking(pkg)}
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

        {/* Umrah Pilgrimage Process Guide */}
        <div className="mt-16 bg-[#071B33] text-white rounded-3xl p-6 sm:p-10 border border-slate-800">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider">
              Step-by-Step Pilgrim Journey
            </span>
            <h3 className="text-2xl font-extrabold text-white mt-1">
              How Sadiq Travels Accompanies Your Umrah
            </h3>
            <p className="text-slate-300 text-sm mt-1">
              From the moment you visit our Bannu office until your safe return, every detail is handled with personal care.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-xs">
            <div className="bg-white/5 p-4 rounded-2xl border border-white/10 space-y-2">
              <span className="w-7 h-7 bg-[#087E8B] text-white font-bold rounded-full flex items-center justify-center">1</span>
              <h4 className="font-bold text-white text-sm">Consultation & Date</h4>
              <p className="text-slate-300">Choose dates, flight preference (Peshawar or Islamabad), and room sharing options.</p>
            </div>
            <div className="bg-white/5 p-4 rounded-2xl border border-white/10 space-y-2">
              <span className="w-7 h-7 bg-[#D4AF37] text-[#071B33] font-bold rounded-full flex items-center justify-center">2</span>
              <h4 className="font-bold text-white text-sm">Visa & Flight</h4>
              <p className="text-slate-300">Fast official Umrah eVisa issuance with accredited insurance and confirmed return flights.</p>
            </div>
            <div className="bg-white/5 p-4 rounded-2xl border border-white/10 space-y-2">
              <span className="w-7 h-7 bg-[#087E8B] text-white font-bold rounded-full flex items-center justify-center">3</span>
              <h4 className="font-bold text-white text-sm">Arrival in Makkah</h4>
              <p className="text-slate-300">Direct airport reception at Jeddah or Madinah, AC coach transfers, and hotel check-in assistance.</p>
            </div>
            <div className="bg-white/5 p-4 rounded-2xl border border-white/10 space-y-2">
              <span className="w-7 h-7 bg-[#D4AF37] text-[#071B33] font-bold rounded-full flex items-center justify-center">4</span>
              <h4 className="font-bold text-white text-sm">Ziyarats & Return</h4>
              <p className="text-slate-300">Historical guided visits to Cave Hira, Mount Uhud, and Quba with dedicated on-ground team.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
