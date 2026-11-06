import React, { createContext, useContext, useState, ReactNode } from 'react';
import { CURRENCIES, Currency, COMPANY_INFO } from '../data/travelData';

interface CurrencyContextType {
  currentCurrency: Currency;
  setCurrency: (code: string) => void;
  formatPrice: (pkrAmount: number) => string;
  convertPrice: (pkrAmount: number) => number;
  isEstimate: boolean;
  getWhatsAppEnquiryUrl: (serviceTitle: string, details?: Record<string, string | number>) => string;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [currencyCode, setCurrencyCode] = useState<string>('PKR');

  const currentCurrency = CURRENCIES[currencyCode] || CURRENCIES.PKR;
  const isEstimate = currentCurrency.code !== 'PKR';

  const setCurrency = (code: string) => {
    if (CURRENCIES[code]) {
      setCurrencyCode(code);
    }
  };

  const convertPrice = (pkrAmount: number): number => {
    if (currentCurrency.code === 'PKR') return pkrAmount;
    return Math.round(pkrAmount / currentCurrency.rateToPKR);
  };

  const formatPrice = (pkrAmount: number): string => {
    const converted = convertPrice(pkrAmount);
    const formattedNum = new Intl.NumberFormat('en-PK').format(converted);
    return `${currentCurrency.symbol} ${formattedNum}`;
  };

  const getWhatsAppEnquiryUrl = (
    serviceTitle: string,
    details?: Record<string, string | number>
  ): string => {
    let msg = `*Assalamualaikum Sadiq International Travels and Tours*\n\n`;
    msg += `I am interested in: *${serviceTitle}*\n`;
    if (details) {
      Object.entries(details).forEach(([key, val]) => {
        if (val) {
          msg += `• *${key}*: ${val}\n`;
        }
      });
    }
    msg += `\nPlease provide the latest package details, availability and final quotation.\n\nThank you!\nSent from https://sadiqtravels1.com`;
    return `https://wa.me/${COMPANY_INFO.whatsappInternational}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <CurrencyContext.Provider
      value={{
        currentCurrency,
        setCurrency,
        formatPrice,
        convertPrice,
        isEstimate,
        getWhatsAppEnquiryUrl,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
}
