import React, { useState } from 'react';
import {
  Plane,
  ArrowRight,
  MessageCircle,
  Clock,
  ShieldCheck,
  CheckCircle,
  AlertCircle,
  Sparkles,
  Luggage,
} from 'lucide-react';
import { COMPANY_INFO, POPULAR_FLIGHT_ROUTES } from '../data/travelData';
import { useCurrency } from '../context/CurrencyContext';

interface FlightBookingSectionProps {
  onOpenEnquiry: (title: string, category?: string) => void;
}

export function FlightBookingSection({ onOpenEnquiry }: FlightBookingSectionProps) {
  const { getWhatsAppEnquiryUrl } = useCurrency();

  const [tripType, setTripType] = useState<'return' | 'oneway' | 'multicity'>('return');
  const [departureCity, setDepartureCity] = useState('Islamabad (ISB)');
  const [destinationCity, setDestinationCity] = useState('Jeddah (JED)');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [adults, setAdults] = useState('1');
  const [children, setChildren] = useState('0');
  const [infants, setInfants] = useState('0');
  const [cabinClass, setCabinClass] = useState('Economy');
  const [passengerName, setPassengerName] = useState('');
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!passengerName.trim() || !whatsappNumber.trim()) {
      alert('Please fill in your Passenger Name and WhatsApp Number.');
      return;
    }
    setSubmitted(true);
  };

  const handleSendToWhatsApp = () => {
    const url = getWhatsAppEnquiryUrl(`Flight Ticket Enquiry: ${departureCity} ✈️ ${destinationCity}`, {
      'Passenger Name': passengerName,
      'WhatsApp Contact': whatsappNumber,
      'Trip Type': tripType === 'return' ? 'Round Trip / Return' : tripType === 'oneway' ? 'One Way' : 'Multi-City',
      'Departure City': departureCity,
      'Destination City': destinationCity,
      'Departure Date': departureDate || 'Open / Flexible',
      ...(tripType === 'return' ? { 'Return Date': returnDate || 'To be scheduled' } : {}),
      'Travellers Count': `${adults} Adult(s), ${children} Child(ren), ${infants} Infant(s)`,
      'Cabin Class': cabinClass,
      'Special Notes': specialRequests || 'None',
    });
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-16 bg-white" id="flights-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 bg-[#087E8B]/10 text-[#087E8B] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
            <Plane className="w-4 h-4 text-[#087E8B]" />
            <span>Worldwide Airline Ticketing</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#071B33] tracking-tight">
            DOMESTIC & INTERNATIONAL FLIGHT BOOKING
          </h2>
          <div className="w-20 h-1 bg-[#087E8B] mx-auto mt-3 rounded-full"></div>
          <p className="urdu-text text-xl text-[#087E8B] mt-2 font-bold">
            پاکستان اور دنیا بھر کی تمام ایئرلائنز کی کنفرم ٹکٹ بکنگ
          </p>
          <p className="text-slate-600 text-sm mt-2">
            Direct departures from Islamabad, Peshawar, Lahore, and Karachi on Pakistan International Airlines (PIA), Saudi Airlines, Emirates, flydubai, Qatar Airways, Airblue, and Serene Air.
          </p>
        </div>

        {/* Flight Enquiry Booking Form */}
        <div className="bg-[#F4F7FA] rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl mb-12">
          {submitted ? (
            <div className="text-center py-8 space-y-4 max-w-lg mx-auto">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-extrabold text-[#071B33]">
                Flight Enquiry Received!
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Thank you, <strong>{passengerName}</strong>. Your flight enquiry for <strong>{departureCity} to {destinationCity}</strong> has been received by our ticketing desk.
              </p>
              <div className="bg-amber-50 border border-amber-200 text-amber-900 text-xs p-3 rounded-xl text-left">
                <strong>Notice:</strong> As per civil aviation regulations, airline seats and fares are reserved only upon real-time GDS ticket issuance. We will send you the live flight options and seat holds immediately.
              </div>
              <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={handleSendToWhatsApp}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-emerald-500/20 transition cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Itinerary Directly to WhatsApp</span>
                </button>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-3.5 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-semibold transition cursor-pointer"
                >
                  Make Another Search
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Trip Type Selector */}
              <div className="flex flex-wrap items-center gap-4 bg-white p-2 rounded-2xl border border-slate-200 w-fit">
                <button
                  type="button"
                  onClick={() => setTripType('return')}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
                    tripType === 'return' ? 'bg-[#071B33] text-white' : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  Round Trip (Return)
                </button>
                <button
                  type="button"
                  onClick={() => setTripType('oneway')}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
                    tripType === 'oneway' ? 'bg-[#071B33] text-white' : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  One Way
                </button>
                <button
                  type="button"
                  onClick={() => setTripType('multicity')}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
                    tripType === 'multicity' ? 'bg-[#071B33] text-white' : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  Multi-City
                </button>
              </div>

              {/* City & Dates Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Departure City
                  </label>
                  <select
                    value={departureCity}
                    onChange={(e) => setDepartureCity(e.target.value)}
                    className="w-full p-3 rounded-xl bg-white border border-slate-300 text-xs font-semibold text-slate-800 focus:border-[#087E8B] outline-none"
                  >
                    <option>Islamabad (ISB)</option>
                    <option>Peshawar (PEW)</option>
                    <option>Lahore (LHE)</option>
                    <option>Karachi (KHI)</option>
                    <option>Multan (MUX)</option>
                    <option>Sialkot (SKT)</option>
                    <option>Faisalabad (LYP)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Destination City
                  </label>
                  <select
                    value={destinationCity}
                    onChange={(e) => setDestinationCity(e.target.value)}
                    className="w-full p-3 rounded-xl bg-white border border-slate-300 text-xs font-semibold text-slate-800 focus:border-[#087E8B] outline-none"
                  >
                    <option>Jeddah (JED - Saudi Arabia)</option>
                    <option>Madinah (MED - Saudi Arabia)</option>
                    <option>Riyadh (RUH - Saudi Arabia)</option>
                    <option>Dubai (DXB - UAE)</option>
                    <option>Abu Dhabi (AUH - UAE)</option>
                    <option>Sharjah (SHJ - UAE)</option>
                    <option>Doha (DOH - Qatar)</option>
                    <option>Muscat (MCT - Oman)</option>
                    <option>Bahrain (BAH)</option>
                    <option>London Heathrow (LHR - UK)</option>
                    <option>Manchester (MAN - UK)</option>
                    <option>Istanbul (IST - Turkey)</option>
                    <option>Baku (GYD - Azerbaijan)</option>
                    <option>Kuala Lumpur (KUL - Malaysia)</option>
                    <option>Bangkok (BKK - Thailand)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Departure Date
                  </label>
                  <input
                    type="date"
                    required
                    value={departureDate}
                    onChange={(e) => setDepartureDate(e.target.value)}
                    className="w-full p-3 rounded-xl bg-white border border-slate-300 text-xs font-medium text-slate-800 focus:border-[#087E8B] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Return Date {tripType === 'oneway' && '(Not Applicable)'}
                  </label>
                  <input
                    type="date"
                    disabled={tripType === 'oneway'}
                    value={returnDate}
                    onChange={(e) => setReturnDate(e.target.value)}
                    className={`w-full p-3 rounded-xl border border-slate-300 text-xs font-medium focus:border-[#087E8B] outline-none ${
                      tripType === 'oneway' ? 'bg-slate-200 text-slate-400 cursor-not-allowed' : 'bg-white text-slate-800'
                    }`}
                  />
                </div>
              </div>

              {/* Passengers & Class */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Adults (12+ yrs)
                  </label>
                  <select
                    value={adults}
                    onChange={(e) => setAdults(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-white border border-slate-300 text-xs font-medium outline-none"
                  >
                    <option value="1">1 Adult</option>
                    <option value="2">2 Adults</option>
                    <option value="3">3 Adults</option>
                    <option value="4">4 Adults</option>
                    <option value="5+">5+ Adults (Group)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Children (2-11 yrs)
                  </label>
                  <select
                    value={children}
                    onChange={(e) => setChildren(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-white border border-slate-300 text-xs font-medium outline-none"
                  >
                    <option value="0">0 Children</option>
                    <option value="1">1 Child</option>
                    <option value="2">2 Children</option>
                    <option value="3+">3+ Children</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Infants (&lt; 2 yrs)
                  </label>
                  <select
                    value={infants}
                    onChange={(e) => setInfants(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-white border border-slate-300 text-xs font-medium outline-none"
                  >
                    <option value="0">0 Infants</option>
                    <option value="1">1 Infant</option>
                    <option value="2">2 Infants</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Cabin Class
                  </label>
                  <select
                    value={cabinClass}
                    onChange={(e) => setCabinClass(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-white border border-slate-300 text-xs font-medium outline-none"
                  >
                    <option value="Economy">Economy</option>
                    <option value="Premium Economy">Premium Economy</option>
                    <option value="Business">Business Class</option>
                  </select>
                </div>
              </div>

              {/* Passenger Contact Information */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-200">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Passenger Full Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="As printed on passport"
                    value={passengerName}
                    onChange={(e) => setPassengerName(e.target.value)}
                    className="w-full p-3 rounded-xl bg-white border border-slate-300 text-xs font-medium outline-none focus:border-[#087E8B]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    WhatsApp Number <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 0315 8543374"
                    value={whatsappNumber}
                    onChange={(e) => setWhatsappNumber(e.target.value)}
                    className="w-full p-3 rounded-xl bg-white border border-slate-300 text-xs font-medium outline-none focus:border-[#087E8B]"
                  />
                </div>
              </div>

              {/* Transparency Notice */}
              <div className="bg-amber-50 border border-amber-200 text-amber-900 text-xs p-3.5 rounded-xl flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <span>
                  <strong>Important Notice:</strong> We do not claim that a flight is booked until it has actually been confirmed by the airline. Seat hold, exact baggage allowance (20kg / 30kg / 40kg), and flight timetable will be shared with you immediately upon enquiry.
                </span>
              </div>

              {/* Submit and WhatsApp Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-1 py-3.5 rounded-xl bg-[#087E8B] hover:bg-[#066570] text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-teal-900/15 transition cursor-pointer"
                >
                  Submit Flight Ticket Enquiry
                </button>

                <button
                  type="button"
                  onClick={() => {
                    if (!passengerName) {
                      setPassengerName('Customer');
                    }
                    handleSendToWhatsApp();
                  }}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs uppercase tracking-wider shadow-md transition cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Enquire Direct on WhatsApp</span>
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Popular Flight Routes Table */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-extrabold text-[#071B33]">
              Popular International Routes from Pakistan
            </h3>
            <span className="text-xs text-slate-500">Live Fares on Request</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {POPULAR_FLIGHT_ROUTES.map((route, idx) => (
              <div
                key={idx}
                className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs hover:border-[#087E8B] transition flex flex-col justify-between space-y-3"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                    <span className="font-semibold text-[#087E8B]">{route.type}</span>
                    <span>{route.freq}</span>
                  </div>
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                    <span>{route.from.split(' ')[0]}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>{route.to.split(' ')[0]}</span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1">Airlines: {route.airline}</p>
                </div>

                <button
                  onClick={() => {
                    const url = getWhatsAppEnquiryUrl(`Fare Enquiry: ${route.from} to ${route.to}`);
                    window.open(url, '_blank', 'noopener,noreferrer');
                  }}
                  className="w-full py-2 bg-slate-50 hover:bg-[#071B33] text-slate-700 hover:text-white rounded-lg text-xs font-semibold transition"
                >
                  Check Today's Fare
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
