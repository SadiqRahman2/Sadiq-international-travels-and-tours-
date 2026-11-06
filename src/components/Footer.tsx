import React from 'react';
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Users2,
  Navigation,
  ExternalLink,
  ShieldCheck,
  ChevronRight,
} from 'lucide-react';
import { COMPANY_INFO } from '../data/travelData';

interface FooterProps {
  onNavigate: (tab: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const quickLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'flights', label: 'Flight Booking' },
    { id: 'visa', label: 'Visa Services' },
    { id: 'umrah', label: 'Umrah Packages' },
    { id: 'hajj', label: 'Hajj Services' },
    { id: 'international-tours', label: 'International Tours' },
    { id: 'pakistan-tours', label: 'Pakistan Tourism' },
    { id: 'hotels', label: 'Hotel Reservations' },
    { id: 'contact', label: 'Contact Us' },
  ];

  return (
    <footer className="bg-[#071B33] text-slate-300 border-t-4 border-[#087E8B]">
      {/* Top Banner inside Footer */}
      <div className="border-b border-white/10 bg-[#040F1E] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <img
                src={COMPANY_INFO.logo}
                alt="Sadiq International Travels Logo"
                className="w-16 h-16 object-contain rounded-full bg-white p-1 shadow-lg"
              />
              <div>
                <h3 className="text-xl font-extrabold text-white tracking-wide">
                  {COMPANY_INFO.name}
                </h3>
                <p className="text-xs text-[#D4AF37] font-semibold">
                  {COMPANY_INFO.tagline} • Bannu, KP, Pakistan
                </p>
                <p className="urdu-text text-sm text-[#087E8B] font-bold">
                  {COMPANY_INFO.urduName}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={COMPANY_INFO.whatsappGroupUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition shadow-md"
              >
                <Users2 className="w-4 h-4" />
                <span>Join VIP WhatsApp Group</span>
              </a>

              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold transition shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Agency Bio */}
          <div className="space-y-4">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider border-b border-white/10 pb-2">
              Agency Overview
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Sadiq International Travels and Tours is an established travel agency based in Bannu, Khyber Pakhtunkhwa. We provide transparent flight bookings, verified Umrah & Hajj packages, visit visa consultation, and holiday tours worldwide.
            </p>
            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <p>
                <strong className="text-white">Founder & MD:</strong> {COMPANY_INFO.founder.name}
              </p>
              <p>
                <strong className="text-white">Official Domain:</strong>{' '}
                <a href={COMPANY_INFO.website} className="text-[#087E8B] hover:underline">
                  sadiqtravels1.com
                </a>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider border-b border-white/10 pb-2">
              Quick Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {quickLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    onNavigate(link.id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-left text-slate-300 hover:text-[#D4AF37] transition flex items-center gap-1 cursor-pointer py-0.5"
                >
                  <ChevronRight className="w-3 h-3 text-[#087E8B]" />
                  <span>{link.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider border-b border-white/10 pb-2">
              Direct Contact
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <p className="text-slate-300 leading-snug">
                  {COMPANY_INFO.address.full}
                </p>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#087E8B] shrink-0" />
                <div>
                  <span className="block text-[10px] text-slate-400">Telephone:</span>
                  <a href={`tel:${COMPANY_INFO.phone}`} className="text-white hover:text-[#D4AF37] font-bold">
                    {COMPANY_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                <div>
                  <span className="block text-[10px] text-slate-400">Official WhatsApp:</span>
                  <a href={COMPANY_INFO.whatsappUrl} target="_blank" rel="noreferrer" className="text-emerald-400 hover:text-emerald-300 font-bold">
                    {COMPANY_INFO.whatsapp}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#087E8B] shrink-0" />
                <div>
                  <span className="block text-[10px] text-slate-400">Official Email:</span>
                  <a href={`mailto:${COMPANY_INFO.email}`} className="text-white hover:text-[#D4AF37]">
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Social Channels & Map */}
          <div className="space-y-4">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider border-b border-white/10 pb-2">
              Official Channels & Map
            </h4>
            <div className="space-y-2 text-xs">
              <a
                href={COMPANY_INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-white transition border border-white/5"
              >
                <div className="w-6 h-6 bg-[#1877F2] rounded-full flex items-center justify-center font-bold text-xs">
                  f
                </div>
                <span>Official Facebook Page</span>
                <ExternalLink className="w-3 h-3 ml-auto text-slate-400" />
              </a>

              <a
                href={COMPANY_INFO.whatsappGroupUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-white transition border border-white/5"
              >
                <div className="w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center font-bold text-xs">
                  <Users2 className="w-3.5 h-3.5" />
                </div>
                <span>WhatsApp VIP Community</span>
                <ExternalLink className="w-3 h-3 ml-auto text-slate-400" />
              </a>

              <a
                href={COMPANY_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-white transition border border-white/5"
              >
                <div className="w-6 h-6 bg-rose-600 rounded-full flex items-center justify-center font-bold text-xs">
                  <Navigation className="w-3.5 h-3.5 text-white" />
                </div>
                <span>Google Maps Location</span>
                <ExternalLink className="w-3 h-3 ml-auto text-slate-400" />
              </a>
            </div>

            <div className="pt-2">
              <p className="text-[10px] text-slate-400 leading-relaxed italic">
                *Prices displayed on this website are estimates subject to airline GDS seat classes, hotel season tariffs, and immigration policies. Please verify final rate prior to reservation.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>
            © 2026 Sadiq International Travels and Tours. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Founder & MD: Sadiq Rahman</span>
            <span>•</span>
            <a href={COMPANY_INFO.googleMapsUrl} target="_blank" rel="noreferrer" className="hover:text-white">
              Bannu, Khyber Pakhtunkhwa
            </a>
            <span>•</span>
            <a href={COMPANY_INFO.website} className="hover:text-white">
              sadiqtravels1.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
