import React, { useState } from 'react';
import {
  Globe2,
  Calendar,
  CheckCircle,
  MessageCircle,
  Eye,
  X,
  ArrowRight,
  Sparkles,
  MapPin,
  Clock,
} from 'lucide-react';
import { INTERNATIONAL_TOURS, TourPackage } from '../data/travelData';
import { useCurrency } from '../context/CurrencyContext';

interface InternationalToursSectionProps {
  onOpenEnquiry: (title: string, category?: string) => void;
}

export function InternationalToursSection({ onOpenEnquiry }: InternationalToursSectionProps) {
  const { formatPrice, isEstimate, getWhatsAppEnquiryUrl } = useCurrency();
  const [selectedTour, setSelectedTour] = useState<TourPackage | null>(null);

  const handleWhatsAppTour = (tour: TourPackage) => {
    const url = getWhatsAppEnquiryUrl(`International Holiday Tour: ${tour.title}`, {
      Destination: tour.location,
      Duration: tour.duration,
      'Package Rate': tour.pricePKR ? formatPrice(tour.pricePKR) : 'Contact for Latest Price',
      'Best Time': tour.bestTime || 'Year Round',
    });
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-16 bg-white" id="international-tours-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-[#087E8B]/10 text-[#087E8B] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
            <Globe2 className="w-4 h-4 text-[#087E8B]" />
            <span>Worldwide Holiday Destinations</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#071B33] tracking-tight">
            INTERNATIONAL HOLIDAYS & TOURS
          </h2>
          <div className="w-20 h-1 bg-[#D4AF37] mx-auto mt-3 rounded-full"></div>
          <p className="urdu-text text-xl text-[#087E8B] mt-2 font-bold">
            دبئی، ترکی، باکو، ملائیشیا اور یورپ کے شاندار تفریحی ٹورز
          </p>
          <p className="text-slate-600 text-sm mt-2">
            Curated holiday itineraries with 4-Star/5-Star hotels, guided excursions, airport pick-and-drop, and complete visa backing.
          </p>
        </div>

        {/* Tour Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INTERNATIONAL_TOURS.map((tour) => (
            <div
              key={tour.id}
              className="bg-white rounded-3xl shadow-lg border border-slate-200 overflow-hidden hover:shadow-2xl transition duration-300 flex flex-col justify-between group"
            >
              {/* Image & Badges */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>

                <div className="absolute top-3 left-3 bg-[#071B33]/85 backdrop-blur-md px-3 py-1 rounded-full text-white text-[11px] font-semibold flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>{tour.location}</span>
                </div>

                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md text-[#071B33] text-[11px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm">
                  <Clock className="w-3 h-3 text-[#087E8B]" />
                  <span>{tour.duration}</span>
                </div>

                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <h3 className="text-xl font-extrabold leading-tight drop-shadow-md">
                    {tour.title}
                  </h3>
                  {tour.bestTime && (
                    <span className="text-[11px] text-[#0fd2e7] font-semibold">
                      Ideal Season: {tour.bestTime}
                    </span>
                  )}
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                {/* Price Display */}
                <div className="bg-[#F4F7FA] p-3.5 rounded-2xl border border-slate-200 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                      Tour Package Rate
                    </span>
                    {tour.pricePKR ? (
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-2xl font-extrabold text-[#071B33]">
                          {formatPrice(tour.pricePKR)}
                        </span>
                        {isEstimate && (
                          <span className="text-[10px] text-amber-700 font-semibold bg-amber-100 px-1 py-0.5 rounded">
                            Est.
                          </span>
                        )}
                      </div>
                    ) : (
                      <span className="text-sm font-bold text-[#087E8B]">
                        Contact for Latest Price
                      </span>
                    )}
                    {tour.priceNote && (
                      <span className="text-[10px] text-slate-500 block">
                        {tour.priceNote}
                      </span>
                    )}
                  </div>
                  <span className="text-xs font-semibold text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-full">
                    Confirmed Hotel
                  </span>
                </div>

                <p className="text-xs text-slate-600 line-clamp-2">
                  {tour.description}
                </p>

                {/* Highlights Preview */}
                <div className="space-y-1.5 pt-2 border-t border-slate-100">
                  <p className="text-[11px] font-bold uppercase text-slate-400">Key Highlights:</p>
                  {tour.highlights.slice(0, 3).map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{h}</span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-2 pt-4 border-t border-slate-100">
                  <button
                    onClick={() => setSelectedTour(tour)}
                    className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Details</span>
                  </button>

                  <button
                    onClick={() => handleWhatsAppTour(tour)}
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

        {/* Modal for View Details */}
        {selectedTour && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
            <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200">
              <div className="relative h-56 overflow-hidden">
                <img
                  src={selectedTour.image}
                  alt={selectedTour.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071B33] via-transparent to-transparent"></div>
                <button
                  onClick={() => setSelectedTour(null)}
                  className="absolute top-4 right-4 bg-black/50 hover:bg-black/80 text-white p-1.5 rounded-full transition"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-4 left-6 right-6 text-white">
                  <div className="flex items-center gap-2 text-xs text-[#D4AF37] font-semibold mb-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{selectedTour.location}</span>
                    <span>•</span>
                    <span>{selectedTour.duration}</span>
                  </div>
                  <h3 className="text-2xl font-extrabold">{selectedTour.title}</h3>
                </div>
              </div>

              <div className="p-6 max-h-[60vh] overflow-y-auto space-y-4">
                <p className="text-sm text-slate-700 leading-relaxed">
                  {selectedTour.description}
                </p>

                <div className="bg-[#F4F7FA] p-4 rounded-2xl border border-slate-200">
                  <p className="text-xs font-bold text-[#071B33] uppercase tracking-wider mb-2">
                    Complete Inclusions & Excursions:
                  </p>
                  <div className="space-y-2">
                    {selectedTour.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-slate-500 pt-2">
                  <span>Price: {selectedTour.pricePKR ? formatPrice(selectedTour.pricePKR) : 'On Request'}</span>
                  <span>Flights can be bundled upon enquiry.</span>
                </div>

                <div className="flex gap-3 pt-2">
                  <button
                    onClick={() => {
                      const t = selectedTour;
                      setSelectedTour(null);
                      onOpenEnquiry(t.title, 'International Tour');
                    }}
                    className="flex-1 py-3 rounded-xl bg-[#087E8B] hover:bg-[#066570] text-white font-bold text-xs uppercase tracking-wider transition cursor-pointer"
                  >
                    Send Booking Enquiry
                  </button>
                  <button
                    onClick={() => {
                      handleWhatsAppTour(selectedTour);
                      setSelectedTour(null);
                    }}
                    className="flex-1 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition cursor-pointer"
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
