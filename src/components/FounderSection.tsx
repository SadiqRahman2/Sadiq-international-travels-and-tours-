import React from 'react';
import { Phone, MessageCircle, Mail, MapPin, Award, CheckCircle2, ShieldCheck, HeartHandshake } from 'lucide-react';
import { COMPANY_INFO } from '../data/travelData';

export function FounderSection() {
  return (
    <section className="py-16 bg-white border-y border-slate-200" id="founder-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-[#D4AF37]/15 text-[#B8860B] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
            <Award className="w-4 h-4 text-[#D4AF37]" />
            <span>Leadership & Integrity</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#071B33] tracking-tight">
            MEET OUR FOUNDER & MANAGING DIRECTOR
          </h2>
          <div className="w-20 h-1 bg-[#087E8B] mx-auto mt-3 rounded-full"></div>
          <p className="urdu-text text-lg text-[#087E8B] mt-2 font-bold">
            بانی و منیجنگ ڈائریکٹر — صادق رحمان
          </p>
        </div>

        {/* Founder Card with Exact Real Photograph */}
        <div className="bg-[#F4F7FA] rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Real Personal Photograph */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative group max-w-sm w-full">
                {/* Decorative border */}
                <div className="absolute -inset-2 bg-gradient-to-r from-[#087E8B] via-[#D4AF37] to-[#071B33] rounded-3xl blur-xs opacity-75 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                  <img
                    src={COMPANY_INFO.founder.photo}
                    alt={`${COMPANY_INFO.founder.name} - Founder & Managing Director`}
                    className="w-full h-auto max-h-[500px] object-cover object-top rounded-xl"
                  />
                  {/* Overlay Tag */}
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#071B33] via-[#071B33]/80 to-transparent p-4 text-white text-center">
                    <p className="text-sm font-extrabold tracking-wide uppercase text-white">
                      {COMPANY_INFO.founder.name}
                    </p>
                    <p className="text-xs text-[#D4AF37] font-medium">
                      Founder & Managing Director
                    </p>
                    <p className="text-[10px] text-slate-300">
                      Sadiq International Travels & Tours
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Founder Details & Verbatim Introduction */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-bold text-[#087E8B] uppercase tracking-widest">
                  Executive Message
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#071B33]">
                  {COMPANY_INFO.founder.name}
                </h3>
                <p className="text-sm font-bold text-[#D4AF37]">
                  Founder & Managing Director
                </p>
                <p className="text-xs text-slate-500 font-semibold uppercase">
                  {COMPANY_INFO.founder.company}
                </p>
              </div>

              {/* Exact Verbatim Introduction Quote */}
              <div className="relative pl-6 border-l-4 border-[#087E8B] bg-white p-5 rounded-r-2xl shadow-xs">
                <span className="text-4xl text-[#D4AF37] font-serif absolute -top-3 left-2 opacity-50">“</span>
                <p className="text-slate-700 text-base sm:text-lg leading-relaxed italic font-medium">
                  {COMPANY_INFO.founder.intro}
                </p>
              </div>

              {/* Urdu Greeting */}
              <div className="bg-[#071B33] text-white p-4 rounded-xl space-y-1">
                <p className="urdu-text text-sm sm:text-base leading-relaxed text-[#D4AF37]">
                  ہماری اولین ترجیح معزز حاجیوں، زائرین اور مسافروں کو ایمانداری اور شفّاف ترین قیمتوں کے ساتھ بہترین سفری سہولیات فراہم کرنا ہے۔
                </p>
              </div>

              {/* Core Commitments */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700 font-medium">
                <div className="flex items-center gap-2 bg-white p-2.5 rounded-lg border border-slate-200">
                  <ShieldCheck className="w-4 h-4 text-[#087E8B] shrink-0" />
                  <span>Transparent & Honest Pricing</span>
                </div>
                <div className="flex items-center gap-2 bg-white p-2.5 rounded-lg border border-slate-200">
                  <HeartHandshake className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>Personal Attention to Every Pilgrim</span>
                </div>
                <div className="flex items-center gap-2 bg-white p-2.5 rounded-lg border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Authorized Visa & Ticket Assistance</span>
                </div>
                <div className="flex items-center gap-2 bg-white p-2.5 rounded-lg border border-slate-200">
                  <MapPin className="w-4 h-4 text-[#087E8B] shrink-0" />
                  <span>Always Available at Bannu Office</span>
                </div>
              </div>

              {/* Direct Reach Out Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-emerald-600/20 transition cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Contact Sadiq Rahman on WhatsApp</span>
                </a>

                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#071B33] hover:bg-[#040F1E] text-white font-bold text-xs uppercase tracking-wider shadow-md transition cursor-pointer"
                >
                  <Phone className="w-4 h-4 text-[#D4AF37]" />
                  <span>Call: {COMPANY_INFO.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
