import { CURRENCY_SYMBOL, DEMO_RATES, type Currency } from '@/shared/types/currency';

export function formatPrice(amountRUB: number, currency: Currency): string {
  const value = amountRUB * DEMO_RATES[currency];
  const rounded =
    currency === 'RUB' ? Math.round(value) : Math.round(value * 100) / 100;
  const formatted =
    currency === 'RUB'
      ? rounded.toLocaleString('ru-RU')
      : rounded.toLocaleString('en-US', { maximumFractionDigits: 2 });
  return `${formatted}${CURRENCY_SYMBOL[currency]}`;
}