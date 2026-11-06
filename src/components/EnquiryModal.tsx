import React, { useState } from 'react';
import { X, Send, CheckCircle2, Phone, MessageSquare, Calendar, Users, MapPin, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/travelData';
import { useCurrency } from '../context/CurrencyContext';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceTitle: string;
  defaultCategory?: string;
  priceNote?: string;
}

export function EnquiryModal({
  isOpen,
  onClose,
  serviceTitle,
  defaultCategory = 'General Enquiry',
  priceNote,
}: EnquiryModalProps) {
  const { getWhatsAppEnquiryUrl } = useCurrency();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: serviceTitle,
    destination: '',
    travelDate: '',
    travelers: '1',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setError('Please provide your name and WhatsApp / phone number.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  const handleWhatsAppForward = () => {
    const url = getWhatsAppEnquiryUrl(formData.service || serviceTitle, {
      'Customer Name': formData.name,
      'WhatsApp / Phone': formData.phone,
      'Category': defaultCategory,
      'Destination': formData.destination || 'As per package',
      'Travel Date': formData.travelDate || 'Flexible / To be discussed',
      'Travellers': formData.travelers,
      'Additional Notes': formData.message || 'None',
    });
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100">
        {/* Header */}
        <div className="bg-[#071B33] text-white px-6 py-5 flex items-center justify-between border-b border-[#087E8B]/40">
          <div className="flex items-center gap-3">
            <img
              src={COMPANY_INFO.logo}
              alt={COMPANY_INFO.name}
              className="w-10 h-10 object-contain rounded-full bg-white p-0.5"
            />
            <div>
              <div className="flex items-center gap-1.5 text-xs text-[#D4AF37] font-semibold tracking-wider uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Sadiq International Travels</span>
              </div>
              <h3 className="text-lg font-bold text-white leading-tight">
                Quick Travel Enquiry
              </h3>
            </div>
          </div>
          <button
            onClick={handleReset}
            className="text-white/70 hover:text-white p-1 rounded-full hover:bg-white/10 transition"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 max-h-[80vh] overflow-y-auto">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-[#071B33]">
                Enquiry Received Successfully!
              </h4>
              <p className="text-slate-600 max-w-md mx-auto text-sm leading-relaxed">
                JazakAllah Khair <strong className="text-slate-900">{formData.name}</strong>. Your enquiry for{' '}
                <strong className="text-[#087E8B]">{serviceTitle}</strong> has been logged. Managing Director Sadiq Rahman and our Bannu office team will contact you promptly.
              </p>

              <div className="bg-[#F4F7FA] p-4 rounded-xl border border-slate-200 text-left text-xs text-slate-700 space-y-1.5">
                <p><strong>Package / Service:</strong> {serviceTitle}</p>
                <p><strong>Contact:</strong> {formData.phone}</p>
                {formData.travelDate && <p><strong>Tentative Date:</strong> {formData.travelDate}</p>}
                {priceNote && <p className="text-amber-800"><strong>Note:</strong> {priceNote}</p>}
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={handleWhatsAppForward}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold shadow-lg shadow-emerald-500/20 transition cursor-pointer"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>Send Directly on WhatsApp</span>
                </button>
                <button
                  onClick={handleReset}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium transition cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-xs text-amber-900 flex items-start gap-2">
                <span className="font-bold text-amber-700">Notice:</span>
                <span>
                  Official enquiries are handled directly by Sadiq International Travels & Tours Bannu office. No booking is finalized until officially confirmed.
                </span>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Selected Service / Package
                </label>
                <input
                  type="text"
                  readOnly
                  value={serviceTitle}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-800 font-medium text-sm focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Your Full Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Muhammad Ahmad"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-[#087E8B] focus:ring-2 focus:ring-[#087E8B]/20 text-sm outline-none transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    WhatsApp / Phone Number <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 0315 8543374"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-[#087E8B] focus:ring-2 focus:ring-[#087E8B]/20 text-sm outline-none transition"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Preferred Travel Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      value={formData.travelDate}
                      onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-[#087E8B] focus:ring-2 focus:ring-[#087E8B]/20 text-sm outline-none transition"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Number of Travellers
                  </label>
                  <select
                    value={formData.travelers}
                    onChange={(e) => setFormData({ ...formData, travelers: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-[#087E8B] focus:ring-2 focus:ring-[#087E8B]/20 text-sm outline-none bg-white transition"
                  >
                    <option value="1">1 Person (Single)</option>
                    <option value="2">2 Persons (Couple / Sharing)</option>
                    <option value="3-4">3 - 4 Persons (Family / Group)</option>
                    <option value="5-8">5 - 8 Persons (Large Family)</option>
                    <option value="9+">9+ Persons (Group Pilgrimage/Tour)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Specific Requirements / Message
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us your departure city, hotel preference, room category, or any questions..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-[#087E8B] focus:ring-2 focus:ring-[#087E8B]/20 text-sm outline-none transition"
                ></textarea>
              </div>

              {error && (
                <p className="text-xs font-semibold text-rose-600 bg-rose-50 p-2.5 rounded-lg">
                  {error}
                </p>
              )}

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  type="submit"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#087E8B] hover:bg-[#066570] text-white font-semibold shadow-lg shadow-teal-900/10 transition cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Travel Enquiry</span>
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppForward}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold shadow-md transition cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Instant WhatsApp</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-4 pt-3 text-xs text-slate-500 border-t border-slate-100">
                <a href={`tel:${COMPANY_INFO.phone}`} className="flex items-center gap-1 hover:text-[#087E8B] transition">
                  <Phone className="w-3.5 h-3.5 text-[#087E8B]" />
                  <span>Direct Call: {COMPANY_INFO.phone}</span>
                </a>
                <span>•</span>
                <span>Office: Baka Khel, Bannu</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
