import React, { useState, useEffect } from 'react';
import { CurrencyProvider } from './context/CurrencyContext';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { UmrahPackagesSection } from './components/UmrahPackagesSection';
import { VisaServicesSection } from './components/VisaServicesSection';
import { FlightBookingSection } from './components/FlightBookingSection';
import { HajjServicesSection } from './components/HajjServicesSection';
import { InternationalToursSection } from './components/InternationalToursSection';
import { PakistanToursSection } from './components/PakistanToursSection';
import { HotelReservationsSection } from './components/HotelReservationsSection';
import { AboutUsSection } from './components/AboutUsSection';
import { ContactSection } from './components/ContactSection';
import { FounderSection } from './components/FounderSection';
import { OfficeLocationSection } from './components/OfficeLocationSection';
import { WhatsAppGroupSection } from './components/WhatsAppGroupSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { EnquiryModal } from './components/EnquiryModal';
import { GeminiChatbot } from './components/GeminiChatbot';
import { COMPANY_INFO } from './data/travelData';
import {
  Plane,
  Moon,
  FileCheck2,
  Compass,
  Building2,
  Phone,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [isChatOpen, setIsChatOpen] = useState<boolean>(false);
  const [enquiryModal, setEnquiryModal] = useState<{
    isOpen: boolean;
    title: string;
    category?: string;
  }>({
    isOpen: false,
    title: '',
    category: 'General Enquiry',
  });

  // Handle URL hash changes for direct linking
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && ['home', 'about', 'flights', 'visa', 'umrah', 'hajj', 'international-tours', 'pakistan-tours', 'hotels', 'contact'].includes(hash)) {
        setActiveTab(hash);
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleNavigate = (tab: string) => {
    setActiveTab(tab);
    window.location.hash = tab === 'home' ? '' : tab;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenEnquiry = (title: string, category: string = 'General') => {
    setEnquiryModal({
      isOpen: true,
      title,
      category,
    });
  };

  const handleCloseEnquiry = () => {
    setEnquiryModal((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <CurrencyProvider>
      <div className="min-h-screen flex flex-col bg-[#F4F7FA] text-slate-800">
        {/* Header & Sticky Navigation */}
        <Header
          activeTab={activeTab}
          setActiveTab={handleNavigate}
          onOpenEnquiry={handleOpenEnquiry}
          onOpenChat={() => setIsChatOpen(true)}
        />

        {/* Main Content Area */}
        <main className="flex-1">
          {activeTab === 'home' && (
            <>
              {/* Full-width Hero with booking engine */}
              <HeroSection
                onNavigate={handleNavigate}
                onOpenEnquiry={handleOpenEnquiry}
                onOpenChat={() => setIsChatOpen(true)}
              />

              {/* Service Cards Showcase Overview */}
              <section className="py-12 bg-white border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                  <div className="text-center max-w-2xl mx-auto mb-10">
                    <span className="text-xs font-bold text-[#087E8B] uppercase tracking-wider">
                      Complete Travel Solutions
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B33]">
                      Our Core Specialized Services
                    </h2>
                    <p className="urdu-text text-base text-[#D4AF37] font-semibold mt-1">
                      فلائٹس، ویزا، عمرہ، حج اور سیاحتی ٹورز کی اعلیٰ ترین سہولیات
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                    {/* Flights */}
                    <div
                      onClick={() => handleNavigate('flights')}
                      className="bg-[#F4F7FA] hover:bg-[#071B33] p-5 rounded-2xl border border-slate-200 transition duration-300 group cursor-pointer flex flex-col justify-between"
                    >
                      <div className="space-y-3">
                        <div className="w-12 h-12 bg-white group-hover:bg-[#087E8B] rounded-xl flex items-center justify-center text-[#087E8B] group-hover:text-white shadow-xs transition">
                          <Plane className="w-6 h-6" />
                        </div>
                        <h3 className="font-extrabold text-[#071B33] group-hover:text-white text-base">
                          Flight Booking
                        </h3>
                        <p className="text-xs text-slate-600 group-hover:text-slate-300 leading-relaxed">
                          Domestic & international airline ticketing from Islamabad, Peshawar, Lahore, and Karachi.
                        </p>
                      </div>
                      <span className="text-xs font-bold text-[#087E8B] group-hover:text-[#D4AF37] pt-4 flex items-center gap-1">
                        Book Flight →
                      </span>
                    </div>

                    {/* Umrah */}
                    <div
                      onClick={() => handleNavigate('umrah')}
                      className="bg-[#F4F7FA] hover:bg-[#071B33] p-5 rounded-2xl border border-slate-200 transition duration-300 group cursor-pointer flex flex-col justify-between"
                    >
                      <div className="space-y-3">
                        <div className="w-12 h-12 bg-white group-hover:bg-[#087E8B] rounded-xl flex items-center justify-center text-[#D4AF37] shadow-xs transition">
                          <Moon className="w-6 h-6" />
                        </div>
                        <h3 className="font-extrabold text-[#071B33] group-hover:text-white text-base">
                          Umrah Packages
                        </h3>
                        <p className="text-xs text-slate-600 group-hover:text-slate-300 leading-relaxed">
                          14, 21 & 30-day packages. Hotels near the Haram courtyards and dedicated Ziyarat guides.
                        </p>
                      </div>
                      <span className="text-xs font-bold text-[#087E8B] group-hover:text-[#D4AF37] pt-4 flex items-center gap-1">
                        View Packages →
                      </span>
                    </div>

                    {/* Visa Services */}
                    <div
                      onClick={() => handleNavigate('visa')}
                      className="bg-[#F4F7FA] hover:bg-[#071B33] p-5 rounded-2xl border border-slate-200 transition duration-300 group cursor-pointer flex flex-col justify-between"
                    >
                      <div className="space-y-3">
                        <div className="w-12 h-12 bg-white group-hover:bg-[#087E8B] rounded-xl flex items-center justify-center text-[#087E8B] group-hover:text-white shadow-xs transition">
                          <FileCheck2 className="w-6 h-6" />
                        </div>
                        <h3 className="font-extrabold text-[#071B33] group-hover:text-white text-base">
                          Visa Services
                        </h3>
                        <p className="text-xs text-slate-600 group-hover:text-slate-300 leading-relaxed">
                          UAE 30/60 days, Saudi Arabia eVisa, Qatar, Bahrain, Turkey, Azerbaijan, Malaysia, and UK guidance.
                        </p>
                      </div>
                      <span className="text-xs font-bold text-[#087E8B] group-hover:text-[#D4AF37] pt-4 flex items-center gap-1">
                        Check Visas →
                      </span>
                    </div>

                    {/* International Tours */}
                    <div
                      onClick={() => handleNavigate('international-tours')}
                      className="bg-[#F4F7FA] hover:bg-[#071B33] p-5 rounded-2xl border border-slate-200 transition duration-300 group cursor-pointer flex flex-col justify-between"
                    >
                      <div className="space-y-3">
                        <div className="w-12 h-12 bg-white group-hover:bg-[#087E8B] rounded-xl flex items-center justify-center text-[#087E8B] group-hover:text-white shadow-xs transition">
                          <Compass className="w-6 h-6" />
                        </div>
                        <h3 className="font-extrabold text-[#071B33] group-hover:text-white text-base">
                          International Tours
                        </h3>
                        <p className="text-xs text-slate-600 group-hover:text-slate-300 leading-relaxed">
                          Dubai, Abu Dhabi, Istanbul, Baku, Kuala Lumpur, Bangkok, London, and European holidays.
                        </p>
                      </div>
                      <span className="text-xs font-bold text-[#087E8B] group-hover:text-[#D4AF37] pt-4 flex items-center gap-1">
                        Explore Tours →
                      </span>
                    </div>

                    {/* Pakistan Tourism */}
                    <div
                      onClick={() => handleNavigate('pakistan-tours')}
                      className="bg-[#F4F7FA] hover:bg-[#071B33] p-5 rounded-2xl border border-slate-200 transition duration-300 group cursor-pointer flex flex-col justify-between"
                    >
                      <div className="space-y-3">
                        <div className="w-12 h-12 bg-white group-hover:bg-[#087E8B] rounded-xl flex items-center justify-center text-[#D4AF37] shadow-xs transition">
                          <Building2 className="w-6 h-6" />
                        </div>
                        <h3 className="font-extrabold text-[#071B33] group-hover:text-white text-base">
                          Pakistan Tourism
                        </h3>
                        <p className="text-xs text-slate-600 group-hover:text-slate-300 leading-relaxed">
                          Hunza, Skardu, Swat, Naran, Kaghan, Murree, Chitral, Kalam, and Kumrat family getaways.
                        </p>
                      </div>
                      <span className="text-xs font-bold text-[#087E8B] group-hover:text-[#D4AF37] pt-4 flex items-center gap-1">
                        Explore Pakistan →
                      </span>
                    </div>
                  </div>
                </div>
              </section>

              {/* Umrah Packages Preview */}
              <UmrahPackagesSection onOpenEnquiry={handleOpenEnquiry} />

              {/* Visa Services Preview */}
              <VisaServicesSection onOpenEnquiry={handleOpenEnquiry} />

              {/* International Tours */}
              <InternationalToursSection onOpenEnquiry={handleOpenEnquiry} />

              {/* Pakistan Tours */}
              <PakistanToursSection onOpenEnquiry={handleOpenEnquiry} />

              {/* WhatsApp VIP Community QR Code Section */}
              <WhatsAppGroupSection />

              {/* Founder Profile Section (Required near bottom) */}
              <FounderSection />

              {/* Office Location & Google Maps Section (Required near bottom) */}
              <OfficeLocationSection />
            </>
          )}

          {activeTab === 'about' && (
            <>
              <AboutUsSection />
              <FounderSection />
              <OfficeLocationSection />
            </>
          )}

          {activeTab === 'flights' && (
            <>
              <FlightBookingSection onOpenEnquiry={handleOpenEnquiry} />
              <OfficeLocationSection />
            </>
          )}

          {activeTab === 'visa' && (
            <>
              <VisaServicesSection onOpenEnquiry={handleOpenEnquiry} />
              <OfficeLocationSection />
            </>
          )}

          {activeTab === 'umrah' && (
            <>
              <UmrahPackagesSection onOpenEnquiry={handleOpenEnquiry} />
              <FounderSection />
              <OfficeLocationSection />
            </>
          )}

          {activeTab === 'hajj' && (
            <>
              <HajjServicesSection onOpenEnquiry={handleOpenEnquiry} />
              <OfficeLocationSection />
            </>
          )}

          {activeTab === 'international-tours' && (
            <>
              <InternationalToursSection onOpenEnquiry={handleOpenEnquiry} />
              <OfficeLocationSection />
            </>
          )}

          {activeTab === 'pakistan-tours' && (
            <>
              <PakistanToursSection onOpenEnquiry={handleOpenEnquiry} />
              <OfficeLocationSection />
            </>
          )}

          {activeTab === 'hotels' && (
            <>
              <HotelReservationsSection onOpenEnquiry={handleOpenEnquiry} />
              <OfficeLocationSection />
            </>
          )}

          {activeTab === 'contact' && (
            <>
              <ContactSection />
              <OfficeLocationSection />
              <FounderSection />
            </>
          )}
        </main>

        {/* Global Footer */}
        <Footer onNavigate={handleNavigate} />

        {/* Global Floating WhatsApp Contact Action */}
        <FloatingWhatsApp />

        {/* Interactive Booking Enquiry Modal */}
        <EnquiryModal
          isOpen={enquiryModal.isOpen}
          onClose={handleCloseEnquiry}
          serviceTitle={enquiryModal.title}
          defaultCategory={enquiryModal.category}
        />

        {/* Gemini AI Multi-turn Chatbot with Google Search Grounding */}
        <GeminiChatbot
          isOpen={isChatOpen}
          onClose={() => setIsChatOpen(false)}
          onOpen={() => setIsChatOpen(true)}
        />
      </div>
    </CurrencyProvider>
  );
}
