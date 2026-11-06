import React, { useState } from 'react';
import {
  Building2,
  Calendar,
  Users,
  Star,
  CheckCircle,
  MessageCircle,
  MapPin,
  Sparkles,
  BedDouble,
} from 'lucide-react';
import { FEATURED_HOTELS, COMPANY_INFO } from '../data/travelData';
import { useCurrency } from '../context/CurrencyContext';

interface HotelReservationsSectionProps {
  onOpenEnquiry: (title: string, category?: string) => void;
}

export function HotelReservationsSection({ onOpenEnquiry }: HotelReservationsSectionProps) {
  const { getWhatsAppEnquiryUrl } = useCurrency();

  const [destination, setDestination] = useState('Makkah Mukarramah');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [rooms, setRooms] = useState('1 Room');
  const [adults, setAdults] = useState('2 Adults');
  const [children, setChildren] = useState('0 Children');
  const [category, setCategory] = useState('5-Star Luxury Haram Facing');
  const [contactNumber, setContactNumber] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactNumber.trim() || !customerName.trim()) {
      alert('Please fill in your name and contact phone number.');
      return;
    }
    setSubmitted(true);
  };

  const handleWhatsAppHotel = () => {
    const url = getWhatsAppEnquiryUrl(`Hotel Reservation: ${destination}`, {
      'Guest Name': customerName || 'Guest',
      'Contact Phone': contactNumber || 'N/A',
      'Destination City': destination,
      'Check-in Date': checkIn || 'Flexible',
      'Check-out Date': checkOut || 'Flexible',
      'Rooms & Occupancy': `${rooms}, ${adults}, ${children}`,
      'Preferred Hotel Category': category,
    });
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-16 bg-white" id="hotels-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-[#087E8B]/10 text-[#087E8B] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
            <Building2 className="w-4 h-4 text-[#087E8B]" />
            <span>Worldwide Accommodations</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#071B33] tracking-tight">
            HOTEL RESERVATIONS & RESORT BOOKING
          </h2>
          <div className="w-20 h-1 bg-[#D4AF37] mx-auto mt-3 rounded-full"></div>
          <p className="urdu-text text-xl text-[#087E8B] mt-2 font-bold">
            مکہ کلاک ٹاور، مدینہ منورہ اور دنیا بھر کے بہترین ہوٹلز میں بکنگ
          </p>
          <p className="text-slate-600 text-sm mt-2">
            Instant booking confirmation with zero hidden taxes. Kaaba and Haram courtyard view rooms, Dubai Marina apartments, and scenic northern Pakistan resorts.
          </p>
        </div>

        {/* Hotel Booking Enquiry Form (Section 15 Requirement) */}
        <div className="bg-[#F4F7FA] rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl mb-14">
          {submitted ? (
            <div className="text-center py-6 space-y-4 max-w-md mx-auto">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-[#071B33]">
                Hotel Request Received!
              </h3>
              <p className="text-slate-600 text-sm">
                Thank you, <strong>{customerName}</strong>. Our team will verify live availability in <strong>{destination}</strong> and forward competitive rates to <strong>{contactNumber}</strong>.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={handleWhatsAppHotel}
                  className="px-6 py-3 rounded-xl bg-[#25D366] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Request to WhatsApp</span>
                </button>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-3 rounded-xl bg-slate-200 text-slate-800 text-xs font-semibold cursor-pointer"
                >
                  Submit Another
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="border-b border-slate-200 pb-3">
                <h3 className="text-lg font-bold text-[#071B33]">
                  Check Hotel Availability & Rates
                </h3>
                <p className="text-xs text-slate-500">
                  Fill in your travel dates for instant quotation directly from hotel inventory systems.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Destination City / Region
                  </label>
                  <select
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full p-3 rounded-xl bg-white border border-slate-300 text-xs font-medium outline-none focus:border-[#087E8B]"
                  >
                    <option>Makkah Mukarramah (Saudi Arabia)</option>
                    <option>Madinah Munawwarah (Saudi Arabia)</option>
                    <option>Dubai (UAE)</option>
                    <option>Abu Dhabi (UAE)</option>
                    <option>Istanbul (Turkey)</option>
                    <option>Baku (Azerbaijan)</option>
                    <option>Kuala Lumpur (Malaysia)</option>
                    <option>Bangkok (Thailand)</option>
                    <option>Hunza / Skardu / Swat (Pakistan)</option>
                    <option>Islamabad / Lahore / Karachi</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Check-in Date
                  </label>
                  <input
                    type="date"
                    required
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full p-3 rounded-xl bg-white border border-slate-300 text-xs font-medium outline-none focus:border-[#087E8B]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Check-out Date
                  </label>
                  <input
                    type="date"
                    required
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full p-3 rounded-xl bg-white border border-slate-300 text-xs font-medium outline-none focus:border-[#087E8B]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Number of Rooms
                  </label>
                  <select
                    value={rooms}
                    onChange={(e) => setRooms(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-white border border-slate-300 text-xs font-medium outline-none"
                  >
                    <option>1 Room</option>
                    <option>2 Rooms</option>
                    <option>3 Rooms</option>
                    <option>4+ Rooms (Group)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Adults
                  </label>
                  <select
                    value={adults}
                    onChange={(e) => setAdults(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-white border border-slate-300 text-xs font-medium outline-none"
                  >
                    <option>1 Adult</option>
                    <option>2 Adults</option>
                    <option>3 Adults</option>
                    <option>4 Adults</option>
                    <option>5+ Adults</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Children
                  </label>
                  <select
                    value={children}
                    onChange={(e) => setChildren(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-white border border-slate-300 text-xs font-medium outline-none"
                  >
                    <option>0 Children</option>
                    <option>1 Child</option>
                    <option>2 Children</option>
                    <option>3+ Children</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Hotel Category
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-white border border-slate-300 text-xs font-medium outline-none"
                  >
                    <option>5-Star Luxury Haram Facing</option>
                    <option>4-Star Walking Distance</option>
                    <option>3-Star Budget with Shuttle</option>
                    <option>Economy Family Sharing</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-200">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Your Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Guest Name"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full p-3 rounded-xl bg-white border border-slate-300 text-xs font-medium outline-none focus:border-[#087E8B]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    WhatsApp Contact Number <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 0315 8543374"
                    value={contactNumber}
                    onChange={(e) => setContactNumber(e.target.value)}
                    className="w-full p-3 rounded-xl bg-white border border-slate-300 text-xs font-medium outline-none focus:border-[#087E8B]"
                  />
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-1 py-3.5 rounded-xl bg-[#087E8B] hover:bg-[#066570] text-white font-bold text-xs uppercase tracking-wider shadow-md transition cursor-pointer"
                >
                  Submit Hotel Enquiry
                </button>
                <button
                  type="button"
                  onClick={handleWhatsAppHotel}
                  className="px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Enquiry</span>
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Featured Hotels Cards */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-extrabold text-[#071B33]">
              Featured Partner Hotels & Suites
            </h3>
            <span className="text-xs text-slate-500">Direct Hotel Contracts</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURED_HOTELS.map((hotel) => (
              <div
                key={hotel.id}
                className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-xl transition duration-300 flex flex-col justify-between"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                  <div className="absolute top-3 left-3 bg-[#071B33]/85 backdrop-blur-md px-2.5 py-0.5 rounded-full text-white text-[10px] font-semibold flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#D4AF37]" />
                    <span>{hotel.city}, {hotel.country}</span>
                  </div>

                  <div className="absolute top-3 right-3 bg-amber-400 text-slate-900 font-extrabold text-[10px] px-2 py-0.5 rounded-full flex items-center gap-1">
                    <Star className="w-3 h-3 fill-slate-900" />
                    <span>{hotel.rating}-Star</span>
                  </div>

                  <div className="absolute bottom-2.5 left-3 right-3 text-white">
                    <h4 className="text-base font-bold leading-snug drop-shadow-md">
                      {hotel.name}
                    </h4>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <span className="text-xs font-bold text-[#087E8B]">
                      {hotel.category}
                    </span>
                    <p className="text-xs text-slate-600 mt-1">
                      📍 {hotel.distanceToCenterOrHaram}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100">
                    {hotel.amenities.map((am, i) => (
                      <span
                        key={i}
                        className="text-[10px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md"
                      >
                        {am}
                      </span>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-slate-100">
                    <button
                      onClick={() => {
                        const url = getWhatsAppEnquiryUrl(`Hotel Booking: ${hotel.name} (${hotel.city})`);
                        window.open(url, '_blank', 'noopener,noreferrer');
                      }}
                      className="w-full py-2 bg-[#071B33] hover:bg-[#040F1E] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition flex items-center justify-center gap-1.5"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                      <span>Request Room Rates</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
