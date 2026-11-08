/**
 * Pure revenue and patient calculation logic for ClientKit PKR Revenue Calculator
 */

export interface RevenueCalculationResult {
  extraOpd: number;
  extraSurgeries: number;
  monthlyRevenue: number;
  yearlyRevenue: number;
  formattedMonthly: string;
  formattedYearly: string;
}

export function formatPkr(amount: number): string {
  if (amount >= 1e7) {
    return `Rs. ${(amount / 1e7).toFixed(2)} Crore`;
  }
  return `Rs. ${(amount / 1e5).toFixed(1)} Lakhs`;
}

export function calculateRevenue(beds: number, avgFee: number): RevenueCalculationResult {
  // L = Math.round(beds * 3.2)
  const extraOpd = Math.round(beds * 3.2);
  // H = Math.round(L * 0.12)
  const extraSurgeries = Math.round(extraOpd * 0.12);
  // G = H * avgFee
  const monthlyRevenue = extraSurgeries * avgFee;
  // ee = G * 12
  const yearlyRevenue = monthlyRevenue * 12;

  return {
    extraOpd,
    extraSurgeries,
    monthlyRevenue,
    yearlyRevenue,
    formattedMonthly: formatPkr(monthlyRevenue),
    formattedYearly: formatPkr(yearlyRevenue),
  };
}

export const WHATSAPP_NUMBER_RAW = '923189107951';
export const WHATSAPP_NUMBER_DISPLAY = '+92 0318 910 7951';

export function getWhatsAppUrl(
  phone: string = WHATSAPP_NUMBER_RAW,
  message: string = 'Hi ClientKit! I want to get more patients for our hospital / clinic.'
): string {
  const cleanPhone = phone.replace(/[^0-9]/g, '');
  const encodedMsg = encodeURIComponent(message);
  return `https://wa.me/${cleanPhone}?text=${encodedMsg}`;
}

export function openWhatsApp(
  phone: string = WHATSAPP_NUMBER_RAW,
  message: string = 'Hi ClientKit! I want to get more patients for our hospital / clinic.'
): void {
  const url = getWhatsAppUrl(phone, message);
  window.open(url, '_blank', 'noopener,noreferrer');
}
