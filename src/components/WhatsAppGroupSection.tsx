import React from 'react';
import { MessageCircle, Users, Bell, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/travelData';

export function WhatsAppGroupSection() {
  return (
    <section className="py-14 bg-gradient-to-br from-[#071B33] via-[#051527] to-[#040F1E] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-r from-[#087E8B]/20 via-white/5 to-[#D4AF37]/15 rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 bg-[#25D366]/20 text-[#25D366] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                <Users className="w-4 h-4" />
                <span>Official Sadiq Travels Community</span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                Join Our Official WhatsApp Group
              </h3>

              <p className="urdu-text text-base sm:text-lg text-[#D4AF37] font-semibold">
                روزانہ سستی فلائٹس، نئے عمرہ پیکجز، اور ویزا اپڈیٹس حاصل کرنے کے لیے ہمارے آفیشل واٹس ایپ گروپ میں شامل ہوں۔
              </p>

              <p className="text-slate-300 text-sm leading-relaxed max-w-2xl">
                Be the first to receive daily discounted seat releases, seasonal Umrah promotions, visa policy changes for UAE and Saudi Arabia, and private group departure alerts curated personally by Sadiq Rahman.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs text-slate-200">
                <div className="flex items-center gap-2 bg-white/5 p-2.5 rounded-xl border border-white/10">
                  <Bell className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>Instant Fare Drop Alerts</span>
                </div>
                <div className="flex items-center gap-2 bg-white/5 p-2.5 rounded-xl border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0" />
                  <span>No Spam, Only Verified Deals</span>
                </div>
                <div className="flex items-center gap-2 bg-white/5 p-2.5 rounded-xl border border-white/10">
                  <Sparkles className="w-4 h-4 text-[#087E8B] shrink-0" />
                  <span>Exclusive Subscriber Rates</span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-3">
                <a
                  href={COMPANY_INFO.whatsappGroupUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-emerald-500/30 transition transform hover:-translate-y-0.5 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Join WhatsApp Group Now</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/20 transition cursor-pointer"
                >
                  <span>Chat with Us Directly</span>
                </a>
              </div>
            </div>

            {/* Right: Uploaded Official WhatsApp Group QR Code */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center">
              <div className="bg-white p-4 rounded-2xl shadow-2xl border-4 border-[#25D366]/40 max-w-[240px] text-center space-y-2 text-slate-800">
                <div className="overflow-hidden rounded-xl border border-slate-200">
                  <img
                    src={COMPANY_INFO.whatsappQrCode}
                    alt="Sadiq International Travels Official WhatsApp Group QR Code"
                    className="w-full h-auto object-contain hover:scale-105 transition duration-300"
                  />
                </div>
                <p className="text-[11px] font-bold text-[#071B33]">
                  Scan to Join on WhatsApp
                </p>
                <p className="text-[10px] text-slate-500">
                  Official Community Link
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
