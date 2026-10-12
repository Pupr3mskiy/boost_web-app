export type Currency = 'RUB' | 'USD' | 'EUR';

export const CURRENCIES: Currency[] = ['RUB', 'USD', 'EUR'];

/**
 * Демонстрационные коэффициенты.
 * Не являются рыночным курсом — источник курса не подключён.
 */
export const DEMO_RATES: Record<Currency, number> = {
  RUB: 1,
  USD: 0.011,
  EUR: 0.010,
};

export const CURRENCY_SYMBOL: Record<Currency, string> = {
  RUB: '₽',
  USD: '$',
  EUR: '€',
};