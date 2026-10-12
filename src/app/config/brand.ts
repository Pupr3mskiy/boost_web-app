/**
 * Централизованная конфигурация бренда.
 */
export const brand = {
  name: '-',
  tagline: 'Overwatch 2 Boosting Platform',
  description:
    'Индивидуальные услуги бустинга Overwatch 2: подъём ранга, дуо, плейсмент, коучинг.',
  supportEmail: undefined as string | undefined,
  telegram: undefined as string | undefined,
  discord: undefined as string | undefined,
  socials: {
    telegram: undefined as string | undefined,
    discord: undefined as string | undefined,
    twitter: undefined as string | undefined,
  },
} as const;

export type Brand = typeof brand;