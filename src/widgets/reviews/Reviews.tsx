import { useTranslation } from 'react-i18next';
import { Quote, Star } from 'lucide-react';
import { Container } from '@/shared/ui/Container';
import { SectionHeading } from '@/shared/ui/SectionHeading';
import { Badge } from '@/shared/ui/Badge';
import { demoReviews } from '@/entities/review/data';

export function Reviews() {
  const { t } = useTranslation();

  return (
    <section className="relative py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Reviews"
          title={t('reviews.title')}
          subtitle={t('reviews.subtitle')}
          align="center"
        />

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {demoReviews.map((r) => {
            const text = t(r.textKey);
            const label = t(r.placeholderLabelKey);
            return (
              <figure
                key={r.id}
                className="relative flex flex-col rounded-2xl border border-white/10 bg-ink-850/60 p-6"
              >
                <div className="absolute right-5 top-5">
                  <Badge tone="muted">{t('reviews.demoLabel')}</Badge>
                </div>
                <Quote className="h-6 w-6 text-brand-300/70" aria-hidden />
                <blockquote className="mt-4 text-zinc-200">{text}</blockquote>
                <figcaption className="mt-6 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-brand-800 text-sm font-semibold text-white">
                      {label.slice(0, 1)}
                    </div>
                    <span className="text-sm text-zinc-400">{label}</span>
                  </div>
                  <div className="flex items-center gap-0.5 text-amber-300" aria-label={`Rating ${r.rating}/5`}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-3.5 w-3.5 ${i < r.rating ? 'fill-amber-300' : 'fill-none'}`}
                      />
                    ))}
                  </div>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </Container>
    </section>
  );
}