export interface Currency {
  code: string;
  name: string;
  symbol: string;
  rateToPKR: number; // 1 Currency = X PKR. (e.g. 1 USD = 280 PKR, so PKR price / 280 = USD price)
  flag: string;
}

export const CURRENCIES: Record<string, Currency> = {
  PKR: { code: 'PKR', name: 'Pakistani Rupee', symbol: 'Rs.', rateToPKR: 1, flag: '🇵🇰' },
  USD: { code: 'USD', name: 'US Dollar', symbol: '$', rateToPKR: 280.0, flag: '🇺🇸' },
  SAR: { code: 'SAR', name: 'Saudi Riyal', symbol: 'SAR', rateToPKR: 74.6, flag: '🇸🇦' },
  AED: { code: 'AED', name: 'UAE Dirham', symbol: 'AED', rateToPKR: 76.2, flag: '🇦🇪' },
  QAR: { code: 'QAR', name: 'Qatari Riyal', symbol: 'QAR', rateToPKR: 76.8, flag: '🇶🇦' },
  GBP: { code: 'GBP', name: 'British Pound', symbol: '£', rateToPKR: 356.5, flag: '🇬🇧' },
  EUR: { code: 'EUR', name: 'Euro', symbol: '€', rateToPKR: 304.2, flag: '🇪🇺' },
};

export interface UmrahPackage {
  id: string;
  name: string;
  subtitle: string;
  duration: string;
  rehmanTravelBaselinePKR: number;
  sadiqPricePKR: number; // Formula: Rehman Travel + PKR 20,000 minimum
  makkahHotel: string;
  makkahDistance: string;
  madinahHotel: string;
  madinahDistance: string;
  inclusions: string[];
  sharingType: string;
  featured?: boolean;
  tag?: string;
  image: string;
}

export interface VisaService {
  id: string;
  country: string;
  countryCode: string;
  flag: string;
  category: string;
  duration: string;
  processingTime: string;
  rehmanTravelBaselinePKR: number;
  sadiqPricePKR: number; // Formula: Rehman Travel + PKR 1,000
  requirements: string[];
  description: string;
  image: string;
}

export interface TourPackage {
  id: string;
  title: string;
  location: string;
  duration: string;
  category: 'international' | 'pakistan';
  pricePKR?: number;
  priceNote?: string;
  image: string;
  highlights: string[];
  description: string;
  bestTime?: string;
}

export interface HotelListing {
  id: string;
  name: string;
  city: string;
  country: string;
  rating: number;
  category: string;
  distanceToCenterOrHaram: string;
  amenities: string[];
  image: string;
}

// Company Information
export const COMPANY_INFO = {
  name: 'Sadiq International Travels and Tours',
  urduName: 'صادق انٹرنیشنل ٹریولز اینڈ ٹورز',
  tagline: 'Explore The World With Us',
  homepageHeading: 'Your Journey, Our Priority',
  homepageSubtitle:
    'Explore the world with confidence. Sadiq International Travels and Tours provides flight reservations, visa assistance, Umrah services, hotel reservations and customized travel solutions.',
  founder: {
    name: 'Sadiq Rahman',
    title: 'Founder & Managing Director',
    company: 'Sadiq International Travels and Tours',
    photo: '/assets/aistudio/sadiq_avatar_57628c56.webp',
    intro:
      'Welcome to Sadiq International Travels and Tours. Our mission is to make travel easier through professional travel assistance, flight reservations, visa guidance, Umrah services and international travel solutions. We value customer trust, transparency and reliable service.',
  },
  address: {
    street: 'Sardi Khel, Kharagai Mandi, Baka Khel',
    city: 'Bannu',
    province: 'Khyber Pakhtunkhwa',
    country: 'Pakistan',
    full: 'Sardi Khel, Kharagai Mandi, Baka Khel, Bannu, Khyber Pakhtunkhwa, Pakistan.',
  },
  phone: '03359227997',
  phoneInternational: '+923359227997',
  whatsapp: '03158543374',
  whatsappInternational: '923158543374',
  whatsappUrl: 'https://wa.me/923158543374',
  whatsappGroupUrl: 'https://chat.whatsapp.com/CnbYxmu7dLbDvcphXvLknT',
  whatsappQrCode: '/assets/aistudio/WhatsApp_Image_2026-09-17_at_8.54.25_AM_0595e307.jpeg',
  email: 'sadiqrahmanw@GMAIL.COM',
  website: 'https://sadiqtravels1.com',
  facebook: 'https://www.facebook.com/share/1F2Jf91hyC/',
  googleMapsUrl: 'https://maps.app.goo.gl/oxe4LBz83UXQNbaBA',
  logo: '/assets/aistudio/1787763541155_2592e705.png',
  lastPricingUpdate: 'Updated Today (Live Benchmarked)',
  priceDisclaimer:
    'Prices are estimates and subject to availability, exchange rates, airline fares, hotel rates and visa authority requirements. Please confirm the final price with Sadiq International Travels and Tours before payment.',
};

// Umrah Packages: Pricing rule applied (Rehman Travel + PKR 20,000 minimum)
export const UMRAH_PACKAGES: UmrahPackage[] = [
  {
    id: 'umrah-economy-14',
    name: 'Economy Umrah Package',
    subtitle: 'Budget-friendly pilgrimage with 24/7 transport assistance',
    duration: '14 Days (7 Makkah / 7 Madinah)',
    rehmanTravelBaselinePKR: 265000,
    sadiqPricePKR: 285000, // 265,000 + 20,000
    makkahHotel: 'Dar Al Eiman Al Khalil / Similar',
    makkahDistance: '750m with 24/7 shuttle service',
    madinahHotel: 'Al Eiman Taibah / Similar',
    madinahDistance: '450m from Masjid An-Nabawi',
    sharingType: 'Quad / Quint Sharing',
    inclusions: [
      'Umrah Visa Processing & Medical Insurance',
      'Direct or 1-Stop Return Air Ticket Assistance',
      'Hotel Accommodation in Makkah & Madinah',
      'Complete Air-Conditioned Ground Transport (JED - MAK - MED - JED)',
      'Guided Historical Ziyarat in Makkah & Madinah',
      '24/7 On-Ground Representative Support',
    ],
    tag: 'Best Value',
    image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'umrah-standard-14',
    name: 'Standard Umrah Package',
    subtitle: 'Walking distance comfort in holy cities with verified hotels',
    duration: '14 Days (7 Makkah / 7 Madinah)',
    rehmanTravelBaselinePKR: 310000,
    sadiqPricePKR: 330000, // 310,000 + 20,000
    makkahHotel: 'Al Shohada Hotel / Elaf Ajyad',
    makkahDistance: '350m easy walking to Haram courtyard',
    madinahHotel: 'Pullman Zamzam Madina / Similar 4-Star',
    madinahDistance: '200m to Prophet’s Mosque ladies & gents gates',
    sharingType: 'Triple / Quad Sharing',
    featured: true,
    tag: 'Most Popular',
    inclusions: [
      'Tourist / Umrah Visa with Comprehensive Insurance',
      'Confirmed Return Flight Reservation',
      'Verified 4-Star Accommodation near Haram',
      'VIP GMC / Coaster Transport across all sectors',
      'Comprehensive Makkah & Madinah Holy Ziyarat',
      'Complimentary Zamzam Guidance & Baggage Assistance',
    ],
    image: 'https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'umrah-premium-14',
    name: 'Premium 5-Star Umrah Package',
    subtitle: 'Luxury Haram front-row view hotels with VIP amenities',
    duration: '14 Days (7 Makkah / 7 Madinah)',
    rehmanTravelBaselinePKR: 440000,
    sadiqPricePKR: 460000, // 440,000 + 20,000
    makkahHotel: 'Makkah Clock Royal Tower (Fairmont / Swissotel)',
    makkahDistance: '0m Direct Haram Access inside Clock Complex',
    madinahHotel: 'Dar Al Taqwa / The Oberoi Madina',
    madinahDistance: 'Directly Facing the Holy Courtyard (Step-out)',
    sharingType: 'Double / Twin Sharing',
    tag: 'VIP Luxury',
    inclusions: [
      'Express Umrah eVisa Processing with VIP Lounge Service',
      'Direct Saudi Airlines / PIA Business/Economy Flight Confirmation',
      '5-Star Luxury Suite with Haram / Kaaba View Options',
      'Buffet Breakfast at 5-Star Hotel Restaurants',
      'Private Chauffeur GMC Yukon Transport throughout Journey',
      'Private Scholar for Guided Ziyarats & Religious Assistance',
    ],
    image: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'umrah-21-days',
    name: '21-Day Complete Umrah Journey',
    subtitle: 'Extended spiritual stay for deep devotion and multiple Umrahs',
    duration: '21 Days (11 Makkah / 10 Madinah)',
    rehmanTravelBaselinePKR: 350000,
    sadiqPricePKR: 375000, // 350,000 + 25,000
    makkahHotel: 'Retaj Al Rayyan / Elaf Bakkah',
    makkahDistance: '400m from Haram perimeter with continuous shuttle',
    madinahHotel: 'Rua Al Hijrah / Leader Al Muna Kareem',
    madinahDistance: '250m to Prophet’s Mosque',
    sharingType: 'Triple / Quad Sharing',
    tag: 'Extended Spiritual Stay',
    inclusions: [
      'Umrah Visa Approval & Biometrics Support',
      'Confirmed Return Flight with Checked Baggage',
      '21 Nights Hotel Stay (11 Makkah + 10 Madinah)',
      'Inter-City AC Transport (Makkah - Madinah - Airport)',
      'Multiple Guided Ziyarat Tours (Cave Hira, Thawr, Quba, Uhud, Qiblatain)',
      'Dedicated Sadiq Travels 24/7 Coordinator',
    ],
    image: 'https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'umrah-30-days',
    name: '30-Day Spiritual Immersion Umrah',
    subtitle: 'One full month of worship in holy Makkah Mukarramah and Madinah Munawwarah',
    duration: '30 Days (15 Makkah / 15 Madinah)',
    rehmanTravelBaselinePKR: 420000,
    sadiqPricePKR: 445000, // 420,000 + 25,000
    makkahHotel: 'Al Kiswah Towers / Similar Quality Hotel',
    makkahDistance: '800m with private round-the-clock rapid shuttle',
    madinahHotel: 'Diyar Al Eiman / Al Ansar Golden',
    madinahDistance: '350m from Masjid An-Nabawi courtyard',
    sharingType: 'Quad Sharing',
    tag: 'Full Month Pilgrimage',
    inclusions: [
      'Umrah Multiple/30-Day Visa Assistance & Insurance',
      'Return Air Ticket on Reputed Airlines',
      'Complete 30 Nights Accommodation',
      'Full AC Transportation including Train Assistance option',
      'Special Ziyarat tours in both Holy Cities with experienced guides',
      'Local mobile SIM card guidance & laundry assistance',
    ],
    image: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'umrah-custom-extended',
    name: 'Customized & Family Umrah Plan',
    subtitle: 'Tailored specifically for families, senior citizens, and private groups',
    duration: 'Flexible (7 to 45 Days)',
    rehmanTravelBaselinePKR: 290000,
    sadiqPricePKR: 310000, // baseline + 20k starting estimate
    makkahHotel: 'Customer Choice (3-Star, 4-Star or 5-Star Clock Tower)',
    makkahDistance: 'Customized according to preference & budget',
    madinahHotel: 'Customer Choice (Markazia / Walking Distance)',
    madinahDistance: 'Steps away from Masjid An-Nabawi',
    sharingType: 'Private Room (Double, Triple, or Family Suite)',
    tag: 'Custom Itinerary',
    inclusions: [
      'Individual & Family Visa Assistance',
      'High-Speed Haramain Train Ticket Reservation between Makkah & Madinah',
      'Wheelchair & Elderly assistance arrangement on request',
      'Private Family Car / Van (Innova, Staria, GMC)',
      'Custom date selection with direct flights from Peshawar / Islamabad',
      'Direct liaison with Managing Director Sadiq Rahman',
    ],
    image: 'https://images.unsplash.com/photo-1590076215667-875d4ef2d7ee?auto=format&fit=crop&w=1000&q=80',
  },
];

// Visit Visa Services: Pricing rule applied (Rehman Travel + PKR 1,000)
export const VISA_SERVICES: VisaService[] = [
  {
    id: 'visa-uae-30',
    country: 'United Arab Emirates (Dubai)',
    countryCode: 'AE',
    flag: '🇦🇪',
    category: 'Tourist / Visit Visa (30 Days)',
    duration: '30 Days Single Entry',
    processingTime: '24 to 48 Hours',
    rehmanTravelBaselinePKR: 31500,
    sadiqPricePKR: 32500, // 31,500 + 1,000
    requirements: [
      'Clear passport scan copy (minimum 6 months validity)',
      'CNIC front and back copy',
      'Passport size white background photograph',
      'Confirmed return ticket reservation assistance available',
    ],
    description:
      'Fast UAE 30-day visit visa for leisure, family visit, or business exploration in Dubai, Abu Dhabi, and Sharjah.',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'visa-uae-60',
    country: 'United Arab Emirates (Dubai)',
    countryCode: 'AE',
    flag: '🇦🇪',
    category: 'Tourist / Visit Visa (60 Days)',
    duration: '60 Days Single Entry',
    processingTime: '2 to 3 Working Days',
    rehmanTravelBaselinePKR: 54000,
    sadiqPricePKR: 55000, // 54,000 + 1,000
    requirements: [
      'Passport copy with 6+ months validity',
      'CNIC color scan',
      'White background photograph',
      'Guarantee / Sponsor documentation where required',
    ],
    description:
      'Longer stay UAE visa ideal for extended vacations, job search visits, and visiting friends and relatives.',
    image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'visa-saudi-tourist',
    country: 'Saudi Arabia',
    countryCode: 'SA',
    flag: '🇸🇦',
    category: 'Tourist eVisa / Multi-Entry (1 Year)',
    duration: '1 Year Multiple Entry (90 Days per stay)',
    processingTime: '24 to 48 Hours',
    rehmanTravelBaselinePKR: 44000,
    sadiqPricePKR: 45000, // 44,000 + 1,000
    requirements: [
      'Valid passport scan',
      'Fresh photograph with white background',
      'Valid US/UK/Schengen visa stamp (if applying under qualifying eVisa waiver)',
      'Mandatory Saudi health insurance (included in price)',
    ],
    description:
      'Permits tourism, attending events, family visits, and performing Umrah across all holy cities anytime during 1 year.',
    image: 'https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'visa-qatar',
    country: 'Qatar',
    countryCode: 'QA',
    flag: '🇶🇦',
    category: 'Tourist Visa / Hayya Entry',
    duration: '30 Days Stay',
    processingTime: '2 to 4 Working Days',
    rehmanTravelBaselinePKR: 28000,
    sadiqPricePKR: 29000, // 28,000 + 1,000
    requirements: [
      'Passport valid for at least 6 months',
      'Confirmed hotel reservation via Discover Qatar where mandatory',
      'Return flight ticket',
      'Valid travel health insurance from accredited Qatari provider',
    ],
    description:
      'Visit Doha, the Pearl Qatar, Souq Waqif, and modern architectural wonders with swift Hayya Portal processing.',
    image: 'https://images.unsplash.com/photo-1596701062351-8c2c14d1fdd0?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'visa-bahrain',
    country: 'Bahrain',
    countryCode: 'BH',
    flag: '🇧🇭',
    category: 'Tourist eVisa',
    duration: '14 to 30 Days Stay',
    processingTime: '3 to 5 Working Days',
    rehmanTravelBaselinePKR: 24000,
    sadiqPricePKR: 25000, // 24,000 + 1,000
    requirements: [
      'Passport copy with minimum 6 months validity',
      'Return air ticket booking',
      'Hotel reservation copy',
      'Last 3 months bank statement',
    ],
    description:
      'Electronic visa for leisure and business trips to the Kingdom of Bahrain with direct flight connections.',
    image: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'visa-turkey',
    country: 'Turkey (Türkiye)',
    countryCode: 'TR',
    flag: '🇹🇷',
    category: 'Tourist eVisa & Sticker Visa Guidance',
    duration: '30 to 90 Days',
    processingTime: '24 Hours (eVisa) / 10-15 Days (Sticker)',
    rehmanTravelBaselinePKR: 19500,
    sadiqPricePKR: 20500, // 19,500 + 1,000
    requirements: [
      'Valid passport',
      'Valid supporting US / UK / Schengen / Ireland visa or residence permit for instant eVisa',
      'For Sticker visa: 6-month bank statement, tax returns, employment letter, Anatolia appointment file',
    ],
    description:
      'Explore Istanbul, Cappadocia, Antalya, and Trabzon. We provide complete dossier preparation and appointment assistance.',
    image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'visa-azerbaijan',
    country: 'Azerbaijan (Baku)',
    countryCode: 'AZ',
    flag: '🇦🇿',
    category: 'ASAN Official eVisa',
    duration: '30 Days Single Entry',
    processingTime: 'Standard: 3 Working Days / Urgent: 3 Hours',
    rehmanTravelBaselinePKR: 12500,
    sadiqPricePKR: 13500, // 12,500 + 1,000
    requirements: [
      'Passport bio-page high-quality scan',
      'Hotel address in Baku or Gabala',
      'Valid contact phone number & email',
    ],
    description:
      'Hassle-free electronic tourist visa for Baku, the Land of Fire, Gabala mountains, and historic Sheki.',
    image: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'visa-malaysia',
    country: 'Malaysia',
    countryCode: 'MY',
    flag: '🇲🇾',
    category: 'Tourist eVisa / eNTRI',
    duration: '30 Days Single Entry',
    processingTime: '2 to 3 Working Days',
    rehmanTravelBaselinePKR: 22000,
    sadiqPricePKR: 23000, // 22,000 + 1,000
    requirements: [
      'Passport scan with 6+ months validity',
      'Passport size studio photo with white background',
      'Confirmed return ticket and hotel voucher',
      '6 months bank statement showing adequate funds',
    ],
    description:
      'Discover Kuala Lumpur, Langkawi, Penang, and Genting Highlands with official eVisa file assistance.',
    image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'visa-thailand',
    country: 'Thailand',
    countryCode: 'TH',
    flag: '🇹🇭',
    category: 'Tourist eVisa / Embassy Sticker Visa',
    duration: '60 Days Single Entry',
    processingTime: '5 to 7 Working Days',
    rehmanTravelBaselinePKR: 26000,
    sadiqPricePKR: 27000, // 26,000 + 1,000
    requirements: [
      'Original passport with validity > 6 months',
      'Account maintenance certificate & 6-month bank statement (minimum PKR 350,000 closing balance)',
      'Employment letter / Business NTN registration',
      'Two photographs 3.5cm x 4.5cm on white background',
    ],
    description:
      'Experience Bangkok, Pattaya, Phuket, and Chiang Mai with expert embassy file preparation by Sadiq Travels.',
    image: 'https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'visa-uk',
    country: 'United Kingdom',
    countryCode: 'GB',
    flag: '🇬🇧',
    category: 'Standard Visitor Visa Guidance (6 Months / 2 Years)',
    duration: '6 Months Multiple Entry',
    processingTime: '3 Weeks standard after biometrics',
    rehmanTravelBaselinePKR: 38000, // file consultancy
    sadiqPricePKR: 39000, // 38,000 + 1,000
    requirements: [
      'Current & previous passports',
      'Financial documents (6-month bank statement with source of wealth proof)',
      'Employment letters, pay slips, and FBR tax returns',
      'Detailed travel itinerary and ties to Pakistan justification',
    ],
    description:
      'Comprehensive UK visa file audit, application submission, appointment scheduling at VFS Gerrys, and documentation structuring.',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'visa-schengen-consult',
    country: 'Schengen European Countries',
    countryCode: 'EU',
    flag: '🇪🇺',
    category: 'Visitor / Business Visa Consultation & File Prep',
    duration: 'Up to 90 Days',
    processingTime: '15 to 25 Working Days',
    rehmanTravelBaselinePKR: 34000,
    sadiqPricePKR: 35000, // 34,000 + 1,000
    requirements: [
      'Valid passport with at least 2 blank pages',
      'Proof of financial means (bank statement with bank stamp)',
      'Travel insurance covering minimum €30,000 across Schengen area',
      'Hotel bookings, flight reservations, and day-by-day travel plan',
    ],
    description:
      'Professional file curation for France, Germany, Italy, Spain, Switzerland, and Netherlands embassies.',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'visa-oman',
    country: 'Oman',
    countryCode: 'OM',
    flag: '🇴🇲',
    category: 'Royal Oman Police Tourist eVisa',
    duration: '10 to 30 Days',
    processingTime: '24 to 72 Hours',
    rehmanTravelBaselinePKR: 19000,
    sadiqPricePKR: 20000, // 19,000 + 1,000
    requirements: [
      'Passport front page color copy',
      'Passport photograph with white background',
      'Confirmed return airline reservation',
    ],
    description:
      'Direct electronic visa for Muscat, Salalah, and Oman historical heritage destinations.',
    image: 'https://images.unsplash.com/photo-1578895101408-1a36b834405b?auto=format&fit=crop&w=1000&q=80',
  },
];

// International Tour Destinations
export const INTERNATIONAL_TOURS: TourPackage[] = [
  {
    id: 'tour-dubai',
    title: 'Dazzling Dubai & Desert Safari',
    location: 'Dubai & Abu Dhabi, UAE',
    duration: '5 Days / 4 Nights',
    category: 'international',
    pricePKR: 165000,
    priceNote: 'Per Person on Twin Sharing (Excluding airfare)',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1000&q=80',
    highlights: [
      'Burj Khalifa 124th Floor Observation Deck Tickets',
      'Desert Safari with Dune Bashing, BBQ Dinner & Tanoura Show',
      'Dubai Marina Dhow Cruise with International Buffet Dinner',
      'Dubai City Tour (Dubai Frame, Palm Jumeirah, Miracle Garden)',
      'Abu Dhabi Sheikh Zayed Grand Mosque Day Tour',
      'Luxury 4-Star Hotel with daily breakfast and private transfers',
    ],
    description:
      'Experience the futuristic glamor of Dubai combined with authentic Arabian desert adventures and iconic architectural landmarks.',
    bestTime: 'October to April',
  },
  {
    id: 'tour-istanbul',
    title: 'Istanbul & Bosphorus Grand Vacation',
    location: 'Istanbul, Turkey',
    duration: '6 Days / 5 Nights',
    category: 'international',
    pricePKR: 195000,
    priceNote: 'Per Person on Twin Sharing (Excluding airfare)',
    image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1000&q=80',
    highlights: [
      'Historic Peninsula Tour: Hagia Sophia, Blue Mosque & Topkapi Palace',
      'Bosphorus Dinner Cruise with Turkish Folk Shows and Music',
      'Grand Bazaar & Spice Souk Guided Shopping Tour',
      'Taksim Square & Istiklal Street Walking Experience',
      'Optional Cappadocia Hot Air Balloon Excursion addon',
      'Centrally located hotel stay with Turkish breakfast',
    ],
    description:
      'Where Europe meets Asia! Immerse yourself in centuries of Ottoman history, vibrant bazaars, and scenic cruises along the Bosphorus strait.',
    bestTime: 'March to November',
  },
  {
    id: 'tour-baku',
    title: 'Baku & Gabala Mountain Discovery',
    location: 'Baku & Gabala, Azerbaijan',
    duration: '5 Days / 4 Nights',
    category: 'international',
    pricePKR: 145000,
    priceNote: 'Per Person on Twin Sharing (Excluding airfare)',
    image: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=1000&q=80',
    highlights: [
      'Old City (Icherisheher) & Maiden Tower Guided Walk',
      'Heydar Aliyev Center & Flame Towers Night View',
      'Ateshgah Fire Temple & Yanardag Burning Mountain Excursion',
      'Full Day Gabala Tour: Cable Car Ride, Nohur Lake & Tufandag',
      'All airport & inter-city AC coach transfers',
      'Comfortable 4-Star hotel accommodation with breakfast',
    ],
    description:
      'Discover the pearl of the Caspian Sea. Baku combines Parisian-style boulevards with ancient fortresses and serene Caucasus mountain escapes.',
    bestTime: 'All Year Round',
  },
  {
    id: 'tour-malaysia',
    title: 'Kuala Lumpur & Genting Highlands',
    location: 'Kuala Lumpur, Malaysia',
    duration: '5 Days / 4 Nights',
    category: 'international',
    pricePKR: 155000,
    priceNote: 'Per Person on Twin Sharing (Excluding airfare)',
    image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=1000&q=80',
    highlights: [
      'Petronas Twin Towers & KLCC Park',
      'Batu Caves Murugan Temple and Rainbow Staircase',
      'Genting Highlands Day Trip with Awana SkyWay Cable Car',
      'Putrajaya Administrative Capital Cruise & Pink Mosque',
      'Bukit Bintang shopping and night street food exploration',
      '4-Star hotel in central Golden Triangle district',
    ],
    description:
      'A colorful tropical holiday packed with modern skyscrapers, cool highland theme parks, lush rainforests, and multicultural culinary treats.',
    bestTime: 'All Year Round',
  },
  {
    id: 'tour-doha',
    title: 'Doha Cultural & Pearl Tour',
    location: 'Doha, Qatar',
    duration: '4 Days / 3 Nights',
    category: 'international',
    pricePKR: 175000,
    priceNote: 'Per Person on Twin Sharing (Excluding airfare)',
    image: 'https://images.unsplash.com/photo-1596701062351-8c2c14d1fdd0?auto=format&fit=crop&w=1000&q=80',
    highlights: [
      'Souq Waqif Heritage Market & Falcon Hospital',
      'Museum of Islamic Art and National Museum of Qatar',
      'The Pearl-Qatar luxury marina and Venice-style canals',
      'Katara Cultural Village & Amphitheatre Tour',
      'Doha Corniche Traditional Wooden Dhow Cruise',
    ],
    description:
      'Experience Qatar’s rich Bedouin heritage harmoniously intertwined with modern architectural wonders and luxury shopping.',
    bestTime: 'November to April',
  },
  {
    id: 'tour-bangkok',
    title: 'Bangkok City & Pattaya Coral Island',
    location: 'Bangkok & Pattaya, Thailand',
    duration: '6 Days / 5 Nights',
    category: 'international',
    pricePKR: 135000,
    priceNote: 'Per Person on Twin Sharing (Excluding airfare)',
    image: 'https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?auto=format&fit=crop&w=1000&q=80',
    highlights: [
      'Grand Palace & Wat Arun Temple of Dawn in Bangkok',
      'Speedboat transfer to Coral Island (Koh Larn) with Seafood Lunch',
      'Pattaya Floating Market and Nong Nooch Botanical Gardens',
      'Chaophraya River Luxury Dinner Cruise',
      'Seamless transfers between Bangkok and Pattaya in AC coaches',
    ],
    description:
      'Enjoy the buzz of Bangkok alongside relaxing beaches, emerald waters, water sports, and world-renowned Thai hospitality.',
    bestTime: 'November to February',
  },
  {
    id: 'tour-london-paris',
    title: 'London & Paris Classic European Highlights',
    location: 'London (UK) & Paris (France)',
    duration: '8 Days / 7 Nights',
    category: 'international',
    pricePKR: 420000,
    priceNote: 'Per Person on Twin Sharing (Subject to visa approval & airfare)',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1000&q=80',
    highlights: [
      'London City Sightseeing: Big Ben, Tower Bridge, Buckingham Palace',
      'High-Speed Eurostar Train Journey from London to Paris',
      'Eiffel Tower Level 2 Entry & Seine River Cruise',
      'Louvre Museum Exterior & Champs-Élysées stroll',
      'Dedicated visa file consultation and hotel bookings included',
    ],
    description:
      'The ultimate dual-capital European holiday combining iconic British heritage with Parisian romance, art, and timeless architecture.',
    bestTime: 'April to October',
  },
];

// Pakistan Tourism Packages
export const PAKISTAN_TOURS: TourPackage[] = [
  {
    id: 'tour-hunza',
    title: 'Majestic Hunza & Khunjerab Pass Expedition',
    location: 'Hunza Valley, Gilgit-Baltistan',
    duration: '7 Days / 6 Nights',
    category: 'pakistan',
    pricePKR: 85000,
    priceNote: 'Per Person (Group tour from Islamabad / Bannu)',
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1000&q=80',
    highlights: [
      'Attabad Lake boating and suspension bridge visit',
      '900-year-old Baltit Fort & Altit Fort exploration in Karimabad',
      'Khunjerab Pass — The highest paved international border in the world (Pakistan-China)',
      'Hussaini Suspension Bridge & Passu Cones photoshoot',
      'Luxury Prado / Grand Cabin transportation with experienced mountain drivers',
      'Family-friendly riverside hotel stays with scenic Rakaposhi views',
    ],
    description:
      'Immerse yourself in the Shangri-La of the Karakoram range. Crystal lakes, historic silk-route forts, apricot blossoms, and towering snow-capped peaks.',
    bestTime: 'April to October',
  },
  {
    id: 'tour-skardu',
    title: 'Enchanting Skardu & Deosai Plains',
    location: 'Skardu, Gilgit-Baltistan',
    duration: '7 Days / 6 Nights',
    category: 'pakistan',
    pricePKR: 95000,
    priceNote: 'Per Person (Including 4x4 Jeep transfers)',
    image: 'https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?auto=format&fit=crop&w=1000&q=80',
    highlights: [
      'Shangrila Resort & Lower Kachura Lake tranquil boat ride',
      'Upper Kachura Lake nature walk & fresh trout fishing experience',
      'Deosai National Park — The Land of Giants & Sheosar Lake (4x4 Jeep)',
      'Historic Shigar Fort and Khaplu Palace heritage visits',
      'Cold Desert Katpana with sunset dune views',
      'Option for direct flight assistance to Skardu Airport',
    ],
    description:
      'The gateway to the highest peaks on Earth. Skardu offers high-altitude deserts, cobalt-blue alpine lakes, and sprawling flower-covered plateaus.',
    bestTime: 'May to September',
  },
  {
    id: 'tour-swat-kalam',
    title: 'Swat Valley, Kalam & Malam Jabba',
    location: 'Swat, Khyber Pakhtunkhwa',
    duration: '4 Days / 3 Nights',
    category: 'pakistan',
    pricePKR: 42000,
    priceNote: 'Per Person (Direct departure from Bannu / Peshawar / Islamabad)',
    image: 'https://images.unsplash.com/photo-1627894483216-2138af692e32?auto=format&fit=crop&w=1000&q=80',
    highlights: [
      'Malam Jabba Ski Resort & Chairlift Adventure with panoramic valley vistas',
      'Kalam Valley, Ushu Forest, and Matiltan Waterfall',
      '4x4 Jeep Safari to the breathtaking glacial Mahodand Lake',
      'Swat River riverside trout feast and local handicraft shopping',
      'White Palace Marghazar historic royal retreat',
    ],
    description:
      'Known as the Switzerland of the East! Swat features roaring rivers, pine-scented forests, alpine meadows, and pleasant mountain breezes.',
    bestTime: 'All Year Round (Snow in Winter)',
  },
  {
    id: 'tour-naran-kaghan',
    title: 'Naran, Kaghan & Lake Saif-ul-Malook',
    location: 'Kaghan Valley, Khyber Pakhtunkhwa',
    duration: '4 Days / 3 Nights',
    category: 'pakistan',
    pricePKR: 45000,
    priceNote: 'Per Person on Triple/Quad Sharing',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1000&q=80',
    highlights: [
      'Lake Saif-ul-Malook legendary fairy-tale lake visit (4x4 Jeep)',
      'Babusar Top (13,691 ft) border between KP and Gilgit-Baltistan',
      'Lulusar Lake and Kunhar River rafting experience',
      'Shogran & Siri Paye high-altitude lush green meadows',
      'Comfortable family hotels in Naran Bazaar with bonfire evening',
    ],
    description:
      'Pakistan’s most popular mountain getaway. Enjoy snow-fed emerald lakes, roaring waterfalls, and cool pine forests along the Kunhar river.',
    bestTime: 'May to October',
  },
  {
    id: 'tour-kumrat-valley',
    title: 'Unspoiled Kumrat Valley & Jahaz Banda',
    location: 'Upper Dir, Khyber Pakhtunkhwa',
    duration: '5 Days / 4 Nights',
    category: 'pakistan',
    pricePKR: 48000,
    priceNote: 'Per Person (Adventure & Camping available)',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80',
    highlights: [
      'Dense Deodar cedar forests and wooden bridge walks along Panjkora river',
      'Kumrat Waterfall and Do Kala Chasma',
      'Trek / 4x4 Jeep to magical Jahaz Banda meadows & Katora Lake',
      'Authentic local Khyber hospitality and peaceful wilderness camping',
      'Close proximity travel route from Southern KP and Bannu',
    ],
    description:
      'A true untouched paradise for nature lovers. Massive towering pine trees, crystal clean streams, and majestic sub-alpine meadows.',
    bestTime: 'May to September',
  },
  {
    id: 'tour-chitral-kalash',
    title: 'Chitral Valley & Kalash Cultural Heritage',
    location: 'Chitral, Khyber Pakhtunkhwa',
    duration: '5 Days / 4 Nights',
    category: 'pakistan',
    pricePKR: 52000,
    priceNote: 'Per Person (Lowari Tunnel route)',
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1000&q=80',
    highlights: [
      'Shahi Mosque Chitral & Historic Chitral Fort beside Kunar River',
      'Kalash Valleys: Bumburet, Rumbur, and Birir ancient culture exploration',
      'Tirich Mir (Highest mountain in Hindu Kush) view point',
      'Shandur Pass — The Roof of the World',
      'Chitral Gol National Park wildlife and Markhor sanctuary',
    ],
    description:
      'Step back in time to the fascinating animist traditions of the Kalash people nestled beneath the colossal peaks of the Hindu Kush.',
    bestTime: 'May to October (Festival seasons: Chilimjusht / Uchal)',
  },
  {
    id: 'tour-murree-galiyat',
    title: 'Murree, Nathia Gali & Mushkpuri Top',
    location: 'Galiyat, Punjab & Khyber Pakhtunkhwa',
    duration: '3 Days / 2 Nights',
    category: 'pakistan',
    pricePKR: 28000,
    priceNote: 'Per Person (Weekend quick escape)',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1000&q=80',
    highlights: [
      'Mall Road Murree and Kashmir Point cable car ride',
      'Nathia Gali scenic governor house track and church',
      'Mushkpuri Top easy pine-tree hiking track (9,200 ft)',
      'Ayubia National Park Pipeline Track walk',
      'Fresh mountain corn, barbecue, and family resort stays',
    ],
    description:
      'The classic breezy mountain retreat. Perfect for a swift 2-3 day family refresher away from city heat and busy schedules.',
    bestTime: 'All Year Round',
  },
  {
    id: 'tour-islamabad-heritage',
    title: 'Capital Explorer & Taxila Heritage',
    location: 'Islamabad & Rawalpindi',
    duration: '2 Days / 1 Night',
    category: 'pakistan',
    pricePKR: 19000,
    priceNote: 'Per Person (Including guided transport)',
    image: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=1000&q=80',
    highlights: [
      'Faisal Mosque — The iconic landmark of Islamabad',
      'Daman-e-Koh and Monal Margalla Hills restaurant dining',
      'Pakistan Monument and Heritage Museum Shakarparian',
      'Taxila UNESCO World Heritage Buddhist ruins & museum',
      'Saidpur historic heritage village walk',
    ],
    description:
      'Explore Pakistan’s serene and green planned capital city alongside ancient Gandhara civilization archaeological sites.',
    bestTime: 'September to April',
  },
];

// Hotels Showcase
export const FEATURED_HOTELS: HotelListing[] = [
  {
    id: 'hotel-clock-tower',
    name: 'Makkah Clock Royal Tower, A Fairmont Hotel',
    city: 'Makkah',
    country: 'Saudi Arabia',
    rating: 5,
    category: '5-Star Luxury Haram Facing',
    distanceToCenterOrHaram: '0 meters (Inside Haram Clock Complex)',
    amenities: ['Kaaba View Suites', 'Direct Haram Elevator', '7 International Restaurants', 'Complimentary WiFi', '24/7 Concierge'],
    image: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'hotel-dar-al-taqwa',
    name: 'Dar Al Taqwa Hotel Madinah',
    city: 'Madinah',
    country: 'Saudi Arabia',
    rating: 5,
    category: '5-Star Haram Front Courtyard',
    distanceToCenterOrHaram: 'Directly Facing Prophet’s Mosque Courtyard',
    amenities: ['Direct Courtyard Access', 'Gourmet Dining', 'Family Interconnecting Rooms', 'VIP Arrival Service'],
    image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'hotel-elaf-kindi',
    name: 'Elaf Kindi Hotel Makkah',
    city: 'Makkah',
    country: 'Saudi Arabia',
    rating: 4,
    category: '4-Star Executive',
    distanceToCenterOrHaram: '120 meters from King Fahad Gate',
    amenities: ['Walking Distance', 'Breakfast Buffet', 'Satellite TV', 'Spacious Rooms'],
    image: 'https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'hotel-dubai-marina',
    name: 'Radisson Blu Hotel, Dubai Waterfront',
    city: 'Dubai',
    country: 'UAE',
    rating: 5,
    category: '5-Star Luxury Canal View',
    distanceToCenterOrHaram: 'Minutes from Burj Khalifa & Dubai Mall',
    amenities: ['Infinity Swimming Pool', 'Spa & Wellness', 'Complimentary Shuttle', 'Valet Parking'],
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'hotel-istanbul-sultan',
    name: 'Sultanahmet Palace Hotel',
    city: 'Istanbul',
    country: 'Turkey',
    rating: 4,
    category: 'Boutique Ottoman Heritage',
    distanceToCenterOrHaram: 'Behind the Blue Mosque & Hagia Sophia',
    amenities: ['Marmara Sea Views', 'Authentic Ottoman Courtyard', 'Terrace Restaurant', 'Airport Transfer'],
    image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'hotel-hunza-serena',
    name: 'Hunza Serena Inn & Heritage Lodge',
    city: 'Karimabad, Hunza',
    country: 'Pakistan',
    rating: 5,
    category: 'Luxury Mountain Resort',
    distanceToCenterOrHaram: 'Overlooking Baltit Fort and Rakaposhi Glacier',
    amenities: ['Spectacular Valley Balconies', 'Traditional Mountain Cuisine', 'Lush Organic Orchards', 'Bonfire & Folk Music'],
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1000&q=80',
  },
];

// Popular Flight Routes
export const POPULAR_FLIGHT_ROUTES = [
  { from: 'Islamabad (ISB)', to: 'Jeddah (JED)', airline: 'PIA / Saudia / Serene', type: 'Umrah & Hajj Direct', freq: 'Daily' },
  { from: 'Peshawar (PEW)', to: 'Dubai (DXB)', airline: 'Emirates / flydubai / Airblue', type: 'Direct Express', freq: 'Multiple Daily' },
  { from: 'Islamabad (ISB)', to: 'Riyadh (RUH)', airline: 'Saudia / Flynas / PIA', type: 'Direct', freq: 'Daily' },
  { from: 'Peshawar (PEW)', to: 'Doha (DOH)', airline: 'Qatar Airways', type: 'Direct', freq: 'Daily' },
  { from: 'Islamabad (ISB)', to: 'Madinah (MED)', airline: 'Saudia / PIA', type: 'Holy City Direct', freq: '4x Weekly' },
  { from: 'Islamabad (ISB)', to: 'London Heathrow (LHR)', airline: 'British Airways / Virgin / Connecting', type: 'International Flagship', freq: 'Daily' },
  { from: 'Islamabad (ISB)', to: 'Baku (GYD)', airline: 'AZAL / FlyArystan / Connecting', type: 'Tourist Route', freq: '3x Weekly' },
  { from: 'Islamabad (ISB)', to: 'Istanbul (IST)', airline: 'Turkish Airlines / Pegasus', type: 'European Hub', freq: 'Daily' },
];
