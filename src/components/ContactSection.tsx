import React, { useState } from 'react';
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  Navigation,
  Globe2,
  Users2,
} from 'lucide-react';
import { COMPANY_INFO } from '../data/travelData';
import { useCurrency } from '../context/CurrencyContext';

export function ContactSection() {
  const { getWhatsAppEnquiryUrl } = useCurrency();

  const [contactName, setContactName] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [contactSubject, setContactSubject] = useState('Umrah & Pilgrimage Enquiry');
  const [contactMessage, setContactMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName.trim() || !contactPhone.trim()) {
      alert('Please fill in your name and WhatsApp / phone number.');
      return;
    }
    setSubmitted(true);
  };

  const handleSendToWhatsApp = () => {
    const url = getWhatsAppEnquiryUrl(contactSubject, {
      'Sender Name': contactName || 'Customer',
      'Contact Number': contactPhone || 'N/A',
      'Inquiry Topic': contactSubject,
      'Message / Question': contactMessage || 'General information requested',
    });
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-16 bg-[#F4F7FA]" id="contact-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-[#087E8B]/10 text-[#087E8B] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
            <Phone className="w-4 h-4 text-[#087E8B]" />
            <span>24/7 Dedicated Assistance</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#071B33] tracking-tight">
            CONTACT SADIQ TRAVELS
          </h2>
          <div className="w-20 h-1 bg-[#D4AF37] mx-auto mt-3 rounded-full"></div>
          <p className="urdu-text text-xl text-[#087E8B] mt-2 font-bold">
            ہم سے رابطہ کریں — آپ کے سفر کی ہر منزل کو آسان بنانے کے لیے حاضر ہیں
          </p>
          <p className="text-slate-600 text-sm mt-2">
            Reach out directly to Managing Director Sadiq Rahman or visit our registered agency office in Bannu, KP.
          </p>
        </div>

        {/* Contact Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Call Card */}
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200 flex flex-col justify-between space-y-4 hover:shadow-lg transition">
            <div className="space-y-2">
              <div className="w-12 h-12 bg-[#087E8B]/10 text-[#087E8B] rounded-2xl flex items-center justify-center">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#071B33]">Official Telephone</h3>
              <p className="text-xs text-slate-500">Direct voice calls & booking desk</p>
              <p className="text-sm font-extrabold text-[#071B33] tracking-wide">
                {COMPANY_INFO.phone}
              </p>
            </div>
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="w-full py-2.5 bg-[#071B33] hover:bg-[#040F1E] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition text-center"
            >
              Call Now
            </a>
          </div>

          {/* WhatsApp Card */}
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200 flex flex-col justify-between space-y-4 hover:shadow-lg transition">
            <div className="space-y-2">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center">
                <MessageCircle className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#071B33]">Official WhatsApp</h3>
              <p className="text-xs text-slate-500">Instant quotes, vouchers & documents</p>
              <p className="text-sm font-extrabold text-emerald-600 tracking-wide">
                {COMPANY_INFO.whatsapp}
              </p>
            </div>
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition text-center shadow-md shadow-emerald-600/20"
            >
              WhatsApp Now
            </a>
          </div>

          {/* Email Card */}
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200 flex flex-col justify-between space-y-4 hover:shadow-lg transition">
            <div className="space-y-2">
              <div className="w-12 h-12 bg-[#D4AF37]/15 text-[#B8860B] rounded-2xl flex items-center justify-center">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#071B33]">Official Email</h3>
              <p className="text-xs text-slate-500">Corporate & group bookings</p>
              <p className="text-xs font-extrabold text-slate-800 break-all">
                {COMPANY_INFO.email}
              </p>
            </div>
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="w-full py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider rounded-xl transition text-center"
            >
              Email Us
            </a>
          </div>

          {/* Location Card */}
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200 flex flex-col justify-between space-y-4 hover:shadow-lg transition">
            <div className="space-y-2">
              <div className="w-12 h-12 bg-rose-100 text-rose-600 rounded-2xl flex items-center justify-center">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#071B33]">Physical Office</h3>
              <p className="text-xs text-slate-500">Baka Khel, Bannu, KP</p>
              <p className="text-xs font-semibold text-slate-700 leading-tight">
                Sardi Khel, Kharagai Mandi
              </p>
            </div>
            <a
              href={COMPANY_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 bg-[#087E8B] hover:bg-[#066570] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition text-center shadow-md shadow-teal-900/15"
            >
              Get Directions
            </a>
          </div>
        </div>

        {/* Contact Form & Office Profile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl">
            {submitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-[#071B33]">
                  Message Dispatched!
                </h3>
                <p className="text-slate-600 text-sm">
                  Thank you <strong>{contactName}</strong>. Your message regarding <strong>{contactSubject}</strong> has been logged.
                </p>
                <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={handleSendToWhatsApp}
                    className="px-6 py-3 rounded-xl bg-[#25D366] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Send this Message via WhatsApp</span>
                  </button>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-3 rounded-xl bg-slate-100 text-slate-700 text-xs font-semibold cursor-pointer"
                  >
                    Send Another
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <h3 className="text-xl font-extrabold text-[#071B33]">
                    Send Sadiq Travels a Direct Message
                  </h3>
                  <p className="text-xs text-slate-500">
                    We usually respond on WhatsApp within 15 to 30 minutes.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Tariq Khan"
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      className="w-full p-3 rounded-xl bg-[#F4F7FA] border border-slate-300 text-xs font-medium outline-none focus:border-[#087E8B]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      WhatsApp / Phone <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 0315 8543374"
                      value={contactPhone}
                      onChange={(e) => setContactPhone(e.target.value)}
                      className="w-full p-3 rounded-xl bg-[#F4F7FA] border border-slate-300 text-xs font-medium outline-none focus:border-[#087E8B]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Inquiry Topic
                  </label>
                  <select
                    value={contactSubject}
                    onChange={(e) => setContactSubject(e.target.value)}
                    className="w-full p-3 rounded-xl bg-[#F4F7FA] border border-slate-300 text-xs font-medium outline-none"
                  >
                    <option>Umrah & Pilgrimage Package Enquiry</option>
                    <option>Visit Visa Guidance & Application</option>
                    <option>International Flight Booking & Fares</option>
                    <option>Hajj Services & MORA Application</option>
                    <option>Pakistan Northern Areas Tour</option>
                    <option>International Vacation Tour</option>
                    <option>Hotel & Transport Reservation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Your Message / Travel Requirements
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Provide travel dates, number of persons, preferred airlines, or specific questions..."
                    value={contactMessage}
                    onChange={(e) => setContactMessage(e.target.value)}
                    className="w-full p-3 rounded-xl bg-[#F4F7FA] border border-slate-300 text-xs font-medium outline-none focus:border-[#087E8B]"
                  ></textarea>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    className="flex-1 py-3.5 rounded-xl bg-[#087E8B] hover:bg-[#066570] text-white font-bold text-xs uppercase tracking-wider shadow-md transition cursor-pointer"
                  >
                    Submit Message
                  </button>
                  <button
                    type="button"
                    onClick={handleSendToWhatsApp}
                    className="px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Instant WhatsApp</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Agency Summary */}
          <div className="lg:col-span-5 bg-[#071B33] text-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <img
                  src={COMPANY_INFO.logo}
                  alt={COMPANY_INFO.name}
                  className="w-12 h-12 object-contain rounded-full bg-white p-0.5"
                />
                <div>
                  <h4 className="text-base font-extrabold text-white">
                    {COMPANY_INFO.name}
                  </h4>
                  <p className="text-xs text-[#D4AF37]">
                    Founder / MD: {COMPANY_INFO.founder.name}
                  </p>
                </div>
              </div>

              <div className="border-t border-white/10 pt-4 space-y-3 text-xs">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <p className="text-slate-300 leading-snug">
                    {COMPANY_INFO.address.full}
                  </p>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#087E8B] shrink-0" />
                  <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-[#D4AF37] font-semibold">
                    {COMPANY_INFO.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                  <a href={COMPANY_INFO.whatsappUrl} target="_blank" rel="noreferrer" className="hover:text-emerald-300 font-semibold">
                    {COMPANY_INFO.whatsapp}
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#087E8B] shrink-0" />
                  <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-[#D4AF37]">
                    {COMPANY_INFO.email}
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>Mon - Sat: 9:00 AM - 9:00 PM</span>
                </div>
              </div>
            </div>

            <div className="bg-white/5 p-4 rounded-2xl border border-white/10 space-y-2">
              <p className="text-xs font-bold text-[#D4AF37]">VIP Community Access:</p>
              <a
                href={COMPANY_INFO.whatsappGroupUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition"
              >
                <Users2 className="w-4 h-4" />
                <span>Join Official WhatsApp Group</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
