import React, { useState } from 'react';
import {
  Compass,
  MapPin,
  Calendar,
  CheckCircle,
  MessageCircle,
  Clock,
  Sparkles,
  Mountain,
  Eye,
  X,
} from 'lucide-react';
import { PAKISTAN_TOURS, TourPackage } from '../data/travelData';
import { useCurrency } from '../context/CurrencyContext';

interface PakistanToursSectionProps {
  onOpenEnquiry: (title: string, category?: string) => void;
}

export function PakistanToursSection({ onOpenEnquiry }: PakistanToursSectionProps) {
  const { formatPrice, isEstimate, getWhatsAppEnquiryUrl } = useCurrency();
  const [selectedTour, setSelectedTour] = useState<TourPackage | null>(null);

  const handleWhatsAppTour = (tour: TourPackage) => {
    const url = getWhatsAppEnquiryUrl(`Pakistan Tour Package: ${tour.title}`, {
      Destination: tour.location,
      Duration: tour.duration,
      'Package Price': tour.pricePKR ? formatPrice(tour.pricePKR) : 'On Request',
      'Departure Point': 'Bannu / Peshawar / Islamabad',
    });
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-16 bg-[#F4F7FA]" id="pakistan-tours-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-[#087E8B]/10 text-[#087E8B] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
            <Mountain className="w-4 h-4 text-[#087E8B]" />
            <span>Discover Beautiful Pakistan</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#071B33] tracking-tight">
            PAKISTAN TOURISM & NORTHERN VALLEYS
          </h2>
          <div className="w-20 h-1 bg-[#D4AF37] mx-auto mt-3 rounded-full"></div>
          <p className="urdu-text text-xl text-[#087E8B] mt-2 font-bold">
            ہنزہ، سکردو، سوات، ناران، چترال اور کمراٹ کے شاندار خاندانی ٹورز
          </p>
          <p className="text-slate-600 text-sm mt-2">
            Direct family and corporate group departures from Bannu, Peshawar, and Islamabad. Experienced mountain drivers, luxury Prado/Coasters, and verified scenic hotels.
          </p>
        </div>

        {/* Tours Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PAKISTAN_TOURS.map((tour) => (
            <div
              key={tour.id}
              className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-xl transition duration-300 flex flex-col justify-between group"
            >
              {/* Image & Location Badge */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>

                <div className="absolute top-3 left-3 bg-[#071B33]/85 backdrop-blur-md px-2.5 py-0.5 rounded-full text-white text-[10px] font-semibold flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#D4AF37]" />
                  <span>{tour.location}</span>
                </div>

                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md text-[#071B33] text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                  <Clock className="w-3 h-3 text-[#087E8B]" />
                  <span>{tour.duration}</span>
                </div>

                <div className="absolute bottom-2.5 left-3 right-3 text-white">
                  <h3 className="text-base font-extrabold leading-tight drop-shadow-md">
                    {tour.title}
                  </h3>
                </div>
              </div>

              {/* Body */}
              <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                {/* Price */}
                <div className="bg-[#F4F7FA] p-2.5 rounded-xl border border-slate-200 flex items-center justify-between">
                  <div>
                    <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider block">
                      Starting Fare
                    </span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-lg font-extrabold text-[#071B33]">
                        {formatPrice(tour.pricePKR || 0)}
                      </span>
                      {isEstimate && (
                        <span className="text-[9px] text-amber-700 font-semibold bg-amber-100 px-1 py-0.2 rounded">
                          Est.
                        </span>
                      )}
                    </div>
                  </div>
                  <span className="text-[10px] font-semibold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-md">
                    Per Person
                  </span>
                </div>

                <p className="text-xs text-slate-600 line-clamp-2">
                  {tour.description}
                </p>

                {/* Highlights */}
                <div className="space-y-1 pt-1 border-t border-slate-100">
                  {tour.highlights.slice(0, 2).map((h, idx) => (
                    <div key={idx} className="flex items-start gap-1.5 text-[11px] text-slate-700">
                      <CheckCircle className="w-3 h-3 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{h}</span>
                    </div>
                  ))}
                </div>

                {/* Buttons */}
                <div className="grid grid-cols-2 gap-1.5 pt-3 border-t border-slate-100">
                  <button
                    onClick={() => setSelectedTour(tour)}
                    className="w-full py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-[11px] font-bold transition cursor-pointer"
                  >
                    Details
                  </button>
                  <button
                    onClick={() => handleWhatsAppTour(tour)}
                    className="w-full py-2 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white text-[11px] font-bold flex items-center justify-center gap-1 transition cursor-pointer"
                  >
                    <MessageCircle className="w-3 h-3" />
                    <span>WhatsApp</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Details */}
        {selectedTour && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
            <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={selectedTour.image}
                  alt={selectedTour.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setSelectedTour(null)}
                  className="absolute top-4 right-4 bg-black/50 hover:bg-black/80 text-white p-1 rounded-full transition"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <span className="text-xs text-[#D4AF37] font-bold">{selectedTour.location}</span>
                  <h3 className="text-xl font-bold">{selectedTour.title}</h3>
                </div>
              </div>

              <div className="p-6 max-h-[60vh] overflow-y-auto space-y-4">
                <p className="text-xs text-slate-700 leading-relaxed">
                  {selectedTour.description}
                </p>

                <div className="bg-[#F4F7FA] p-4 rounded-xl border border-slate-200">
                  <p className="text-xs font-bold text-[#071B33] uppercase mb-2">Package Inclusions:</p>
                  <div className="space-y-1.5">
                    {selectedTour.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2 pt-2">
                  <button
                    onClick={() => {
                      const t = selectedTour;
                      setSelectedTour(null);
                      onOpenEnquiry(t.title, 'Pakistan Tour');
                    }}
                    className="flex-1 py-2.5 rounded-xl bg-[#087E8B] hover:bg-[#066570] text-white font-bold text-xs uppercase cursor-pointer"
                  >
                    Custom Family Quote
                  </button>
                  <button
                    onClick={() => {
                      handleWhatsAppTour(selectedTour);
                      setSelectedTour(null);
                    }}
                    className="flex-1 py-2.5 rounded-xl bg-[#25D366] text-white font-bold text-xs uppercase flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp Inquiry</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
