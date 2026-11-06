import React from 'react';
import { MapPin, Navigation, Phone, MessageCircle, Clock, CheckCircle, ExternalLink, Building2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/travelData';

export function OfficeLocationSection() {
  return (
    <section className="py-16 bg-[#F4F7FA] border-t border-slate-200" id="office-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-[#087E8B]/10 text-[#087E8B] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
            <Building2 className="w-4 h-4 text-[#087E8B]" />
            <span>Physical Travel Agency Location</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#071B33] tracking-tight">
            VISIT OUR OFFICE
          </h2>
          <div className="w-20 h-1 bg-[#D4AF37] mx-auto mt-3 rounded-full"></div>
          <p className="text-slate-600 text-sm mt-3">
            Come visit us in person for face-to-face travel consultation, passport submission, and transparent booking.
          </p>
        </div>

        {/* Office Showcase Card */}
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left: Office Details & Actions */}
            <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <img
                    src={COMPANY_INFO.logo}
                    alt={COMPANY_INFO.name}
                    className="w-12 h-12 object-contain rounded-full bg-[#071B33] p-1"
                  />
                  <div>
                    <h3 className="text-xl font-extrabold text-[#071B33]">
                      {COMPANY_INFO.name}
                    </h3>
                    <p className="text-xs text-[#087E8B] font-semibold">
                      Registered Travel Agency in Khyber Pakhtunkhwa
                    </p>
                  </div>
                </div>

                <div className="bg-[#F4F7FA] p-4 rounded-2xl border border-slate-200 space-y-2">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                        Official Physical Address
                      </p>
                      <p className="text-sm font-bold text-slate-900 leading-snug">
                        {COMPANY_INFO.address.full}
                      </p>
                      <p className="text-xs text-slate-500 mt-1">
                        Sardi Khel • Kharagai Mandi • Baka Khel • Bannu • KP • Pakistan
                      </p>
                    </div>
                  </div>
                </div>

                {/* Office Timings */}
                <div className="bg-white p-4 rounded-2xl border border-slate-200 space-y-2 text-xs">
                  <div className="flex items-center gap-2 text-slate-700 font-semibold">
                    <Clock className="w-4 h-4 text-[#087E8B]" />
                    <span>Office Timings:</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-slate-600 pl-6">
                    <p><strong>Mon – Sat:</strong> 9:00 AM – 9:00 PM</p>
                    <p><strong>Friday:</strong> Prayer Break (1:00 - 2:30 PM)</p>
                    <p><strong>Sunday:</strong> On-call & Emergency</p>
                    <p><strong>Online Support:</strong> 24/7 WhatsApp</p>
                  </div>
                </div>

                {/* Assurance note */}
                <div className="flex items-center gap-2 text-xs text-emerald-800 bg-emerald-50 p-3 rounded-xl border border-emerald-200">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Real physical premises in Baka Khel, Bannu with verified owner presence.</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-slate-100">
                <a
                  href={COMPANY_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#087E8B] hover:bg-[#066570] text-white font-bold text-xs uppercase tracking-wider shadow-md transition cursor-pointer"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Directions</span>
                </a>

                <a
                  href={COMPANY_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#071B33] hover:bg-[#040F1E] text-white font-bold text-xs uppercase tracking-wider shadow-md transition cursor-pointer"
                >
                  <ExternalLink className="w-4 h-4 text-[#D4AF37]" />
                  <span>View Google Maps</span>
                </a>

                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs uppercase tracking-wider transition cursor-pointer"
                >
                  <Phone className="w-4 h-4 text-[#087E8B]" />
                  <span>Call Our Office</span>
                </a>

                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs uppercase tracking-wider shadow-md transition cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Us</span>
                </a>
              </div>
            </div>

            {/* Right: Map / Location Preview */}
            <div className="lg:col-span-6 bg-slate-100 relative min-h-[380px] flex flex-col justify-between overflow-hidden border-t lg:border-t-0 lg:border-l border-slate-200">
              {/* Map graphic representation */}
              <div className="absolute inset-0 bg-[#071B33]">
                {/* Visual stylised map */}
                <div
                  className="w-full h-full opacity-60 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1200&q=80')`,
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#071B33] via-[#071B33]/60 to-transparent"></div>
              </div>

              {/* Pin Overlay Card */}
              <div className="relative z-10 m-6 p-5 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-white/50 max-w-sm">
                <div className="flex items-center gap-2 text-xs font-bold text-[#087E8B] uppercase tracking-wider mb-1">
                  <MapPin className="w-4 h-4 text-rose-600 animate-bounce" />
                  <span>Exact GPS Landmark</span>
                </div>
                <h4 className="text-base font-extrabold text-[#071B33]">
                  Sardi Khel, Kharagai Mandi
                </h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Baka Khel, Bannu, Khyber Pakhtunkhwa, Pakistan
                </p>
                <div className="mt-3 pt-3 border-t border-slate-200 flex items-center justify-between text-xs">
                  <span className="text-slate-500">Google Pin: Verified</span>
                  <a
                    href={COMPANY_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#087E8B] font-bold hover:underline flex items-center gap-1"
                  >
                    Open Live Map →
                  </a>
                </div>
              </div>

              {/* Bottom bar on image */}
              <div className="relative z-10 m-6 p-4 bg-[#071B33]/90 backdrop-blur-md rounded-2xl border border-white/10 text-white flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-[#D4AF37]">Managing Director Sadiq Rahman</p>
                  <p className="text-[11px] text-slate-300">Ready to serve you with honesty and respect</p>
                </div>
                <a
                  href={COMPANY_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-[#087E8B] hover:bg-[#066570] text-white text-xs font-semibold rounded-lg transition"
                >
                  Navigate
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
