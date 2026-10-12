import type { Service } from './types';

export const services: Service[] = [
  {
    id: 'competitive',
    category: 'competitive',
    titleKey: 'services.competitive.title',
    textKey: 'services.competitive.text',
    accent: 'from-brand-600 to-indigo-600',
    startPriceRUB: 1490,
    popular: true,
  },
  {
    id: 'duo',
    category: 'duo',
    titleKey: 'services.duo.title',
    textKey: 'services.duo.text',
    accent: 'from-fuchsia-600 to-brand-600',
    startPriceRUB: 1990,
    popular: true,
  },
  {
    id: 'placement',
    category: 'placement',
    titleKey: 'services.placement.title',
    textKey: 'services.placement.text',
    accent: 'from-sky-600 to-brand-600',
    startPriceRUB: 990,
    popular: true,
  },
  {
    id: 'coaching',
    category: 'coaching',
    titleKey: 'services.coaching.title',
    textKey: 'services.coaching.text',
    accent: 'from-emerald-600 to-teal-600',
    startPriceRUB: 1290,
    popular: true,
  },
  {
    id: 'wins',
    category: 'wins',
    titleKey: 'services.wins.title',
    textKey: 'services.wins.text',
    accent: 'from-amber-500 to-rose-600',
    startPriceRUB: 490,
    popular: true,
  },
  {
    id: 'tournament',
    category: 'tournament',
    titleKey: 'services.tournament.title',
    textKey: 'services.tournament.text',
    accent: 'from-brand-500 to-purple-700',
    startPriceRUB: 2490,
    popular: false,
  },
  {
    id: 'individual',
    category: 'individual',
    titleKey: 'services.individual.title',
    textKey: 'services.individual.text',
    accent: 'from-zinc-600 to-zinc-800',
    startPriceRUB: undefined,
    popular: false,
  },
];

export const popularServices = services.filter((s) => s.popular);