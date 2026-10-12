import { useCallback, useEffect, useState } from 'react';
import { CURRENCIES, type Currency } from '@/shared/types/currency';

const KEY = 'aether:currency';

export function useCurrency() {
  const [currency, setCurrencyState] = useState<Currency>(() => {
    if (typeof window === 'undefined') return 'RUB';
    const raw = window.localStorage.getItem(KEY);
    return (CURRENCIES as readonly string[]).includes(raw ?? '')
      ? (raw as Currency)
      : 'RUB';
  });

  useEffect(() => {
    try { window.localStorage.setItem(KEY, currency); } catch { /* ignore */ }
  }, [currency]);

  const setCurrency = useCallback((c: Currency) => setCurrencyState(c), []);
  return { currency, setCurrency };
}   