import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { COMPANY_INFO } from '../data/travelData';

export function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  const defaultMsg = encodeURIComponent(
    'Assalamualaikum Sadiq International Travels and Tours, I want information about your travel services, Umrah packages and flight tickets.'
  );
  const fullWhatsAppUrl = `https://wa.me/${COMPANY_INFO.whatsappInternational}?text=${defaultMsg}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3 group">
      {/* Tooltip Popup */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-white text-slate-800 text-xs py-2 px-3.5 rounded-2xl shadow-2xl border border-slate-200 animate-fadeIn">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <div>
            <p className="font-bold text-[#071B33]">Need Travel Assistance?</p>
            <p className="text-[11px] text-slate-500">Chat with MD Sadiq Rahman</p>
          </div>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-slate-600 p-0.5 ml-1"
            aria-label="Close tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={fullWhatsAppUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full flex items-center justify-center shadow-2xl shadow-emerald-600/50 hover:scale-110 active:scale-95 transition duration-300 ring-4 ring-white cursor-pointer"
        aria-label="Contact Sadiq Travels on WhatsApp"
        title="Chat with us on WhatsApp"
      >
        <MessageCircle className="w-8 h-8 fill-white" />
      </a>
    </div>
  );
}
