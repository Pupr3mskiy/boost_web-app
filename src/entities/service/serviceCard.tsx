import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Shield, Swords, Map, GraduationCap, Trophy, Calendar, Sparkles } from 'lucide-react';
import type { Service, ServiceCategory } from './types';
import { useCurrency } from '@/shared/hooks/useCurrency';
import { formatPrice } from '@/shared/lib/currency';

const ICONS: Record<ServiceCategory, typeof Shield> = {
  competitive: Shield,
  duo: Swords,
  placement: Map,
  coaching: GraduationCap,
  wins: Trophy,
  tournament: Calendar,
  individual: Sparkles,
};

interface Props {
  service: Service;
  index?: number;
}

export function ServiceCard({ service, index = 0 }: Props) {
  const { t } = useTranslation();
  const { currency } = useCurrency();
  const Icon = ICONS[service.category];

  const priceLabel =
    service.startPriceRUB !== undefined
      ? `${t('common.from')} ${formatPrice(service.startPriceRUB, currency)}`
      : t('common.priceOnRequest');

  return (
    <Link
      to={`/service/${service.id}`}
      className="group relative block overflow-hidden rounded-2xl border border-white/10 bg-ink-850 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-glow"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      {/* Градиентная «обложка» */}
      <div className={`absolute inset-x-0 top-0 h-28 bg-gradient-to-br ${service.accent} opacity-80`} />
      <div className="absolute inset-x-0 top-0 h-28 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.15),transparent_60%)]" />

      {/* Декоративная сетка поверх обложки */}
      <div className="absolute inset-x-0 top-0 h-28 opacity-30 bg-grid" />

      <div className="relative">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-ink-900/70 ring-1 ring-white/10 backdrop-blur">
          <Icon className="h-6 w-6 text-brand-200" />
        </div>

        <h3 className="mt-6 font-display text-xl font-semibold text-white">
          {t(service.titleKey)}
        </h3>
        <p className="mt-2 text-sm text-zinc-400">{t(service.textKey)}</p>

        <div className="mt-6 flex items-center justify-between">
          <span className="text-sm font-medium text-brand-200">{priceLabel}</span>
          <span className="inline-flex items-center gap-1 text-xs text-zinc-300 transition group-hover:text-white">
            {t('common.ctaDetails')}
            <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}