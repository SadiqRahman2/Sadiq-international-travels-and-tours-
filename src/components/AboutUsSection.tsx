import React from 'react';
import {
  ShieldCheck,
  Award,
  Users2,
  MapPin,
  Clock,
  CheckCircle2,
  Phone,
  MessageCircle,
  Sparkles,
  HeartHandshake,
} from 'lucide-react';
import { COMPANY_INFO } from '../data/travelData';

export function AboutUsSection() {
  return (
    <section className="py-16 bg-white" id="about-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-[#D4AF37]/15 text-[#B8860B] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
            <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
            <span>Integrity, Trust & Reliability</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#071B33] tracking-tight">
            ABOUT SADIQ INTERNATIONAL TRAVELS & TOURS
          </h2>
          <div className="w-20 h-1 bg-[#087E8B] mx-auto mt-3 rounded-full"></div>
          <p className="urdu-text text-xl text-[#087E8B] mt-2 font-bold">
            صادق انٹرنیشنل ٹریولز اینڈ ٹورز — اعتماد اور دیانت داری کی علامت
          </p>
          <p className="text-slate-600 text-sm mt-2">
            Founded by Sadiq Rahman, serving travelers across Bannu, Khyber Pakhtunkhwa, and all over Pakistan with transparent rates and unmatched personal care.
          </p>
        </div>

        {/* Narrative & Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          <div className="lg:col-span-6 space-y-5">
            <h3 className="text-2xl font-extrabold text-[#071B33]">
              Making International Travel and Sacred Pilgrimages Effortless
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              <strong>Sadiq International Travels and Tours</strong> was established with a singular, resolute vision: to eradicate confusion, hidden fees, and deceptive marketing in the travel industry. Operating from our permanent agency office in <strong>Sardi Khel, Kharagai Mandi, Baka Khel, Bannu</strong>, we stand as a trusted beacon for local families, international overseas workers, and pilgrims heading to the holy cities of Makkah and Madinah.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              Whether you require guaranteed flight reservations on PIA, Saudi Airlines, or Emirates, transparent Umrah packages with confirmed hotels within walking distance of the Harams, or lawful visa consultation for UAE, Qatar, Turkey, and the UK — we guide you through each step personally.
            </p>

            <div className="border-l-4 border-[#087E8B] pl-4 py-2 bg-[#F4F7FA] rounded-r-xl">
              <p className="urdu-text text-base text-[#071B33] font-semibold">
                ”ہمارا مقصد ہر مسافر کو باعزت، آسان اور شفاف خدمات فراہم کرنا ہے۔ آپ کا اطمینان ہماری کامیابی ہے۔“
              </p>
              <p className="text-xs text-slate-500 font-bold mt-1">
                — صادق رحمان (بانی و منیجنگ ڈائریکٹر)
              </p>
            </div>

            <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-slate-700">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Government Compliant
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> 100% Verified Quotations
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Physical Agency Presence
              </span>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-[#087E8B] to-[#D4AF37] rounded-3xl blur-xs opacity-40"></div>
              <div className="relative bg-[#071B33] rounded-2xl overflow-hidden shadow-2xl p-6 text-white space-y-6">
                <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                  <img
                    src={COMPANY_INFO.logo}
                    alt={COMPANY_INFO.name}
                    className="w-16 h-16 object-contain rounded-full bg-white p-1"
                  />
                  <div>
                    <h4 className="text-lg font-bold text-white">Sadiq Rahman</h4>
                    <p className="text-xs text-[#D4AF37]">Founder & Managing Director</p>
                    <p className="text-[11px] text-slate-300">Bannu, Khyber Pakhtunkhwa</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                    <p className="text-3xl font-extrabold text-[#D4AF37]">100%</p>
                    <p className="text-xs text-slate-300 mt-1">Transparent Pricing</p>
                  </div>
                  <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                    <p className="text-3xl font-extrabold text-[#087E8B]">24/7</p>
                    <p className="text-xs text-slate-300 mt-1">WhatsApp & Call Desk</p>
                  </div>
                  <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                    <p className="text-3xl font-extrabold text-emerald-400">Direct</p>
                    <p className="text-xs text-slate-300 mt-1">Airline GDS Access</p>
                  </div>
                  <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                    <p className="text-3xl font-extrabold text-amber-300">Bannu</p>
                    <p className="text-xs text-slate-300 mt-1">Physical Office</p>
                  </div>
                </div>

                <div className="p-4 bg-white/5 rounded-xl border border-white/10 text-xs text-slate-300 flex items-center justify-between">
                  <span>Contact MD Sadiq Rahman Directly:</span>
                  <a
                    href={COMPANY_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-[#25D366] hover:underline"
                  >
                    {COMPANY_INFO.whatsapp}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Core Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-[#F4F7FA] p-6 rounded-3xl border border-slate-200 space-y-2">
            <ShieldCheck className="w-8 h-8 text-[#087E8B]" />
            <h4 className="text-base font-bold text-[#071B33]">Truth in Pricing</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              We never invent exchange rates or lure clients with phantom fares. All quotes reflect confirmed hotel contracts and live airline availability.
            </p>
          </div>

          <div className="bg-[#F4F7FA] p-6 rounded-3xl border border-slate-200 space-y-2">
            <HeartHandshake className="w-8 h-8 text-[#D4AF37]" />
            <h4 className="text-base font-bold text-[#071B33]">Personal Attention</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Every client is treated as an honored guest. From elder care during Umrah to wheelchair and special meal requests, we handle every detail.
            </p>
          </div>

          <div className="bg-[#F4F7FA] p-6 rounded-3xl border border-slate-200 space-y-2">
            <Award className="w-8 h-8 text-[#087E8B]" />
            <h4 className="text-base font-bold text-[#071B33]">Legal Compliance</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              We operate strictly within national and international travel laws. We provide transparent immigration guidance without fraudulent guarantees.
            </p>
          </div>

          <div className="bg-[#F4F7FA] p-6 rounded-3xl border border-slate-200 space-y-2">
            <MapPin className="w-8 h-8 text-[#D4AF37]" />
            <h4 className="text-base font-bold text-[#071B33]">Community Rooted</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Proudly established in Baka Khel, Bannu, KP, supporting the local community and overseas diaspora working in the Gulf and across the globe.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
