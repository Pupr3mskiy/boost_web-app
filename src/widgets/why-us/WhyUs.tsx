import { useTranslation } from 'react-i18next';
import {
  Fingerprint, Calculator, Layers, ShieldCheck, Headphones, Sprout,
} from 'lucide-react';
import { Container } from '@/shared/ui/Container';
import { SectionHeading } from '@/shared/ui/SectionHeading';

const ICONS = [Fingerprint, Calculator, Layers, ShieldCheck, Headphones, Sprout];

export function WhyUs() {
  const { t } = useTranslation();
  const items = t('whyUs.items', { returnObjects: true }) as Array<{ title: string; text: string }>;

  return (
    <section className="relative py-20 sm:py-28">
      {/* Фоновый акцент */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(600px 300px at 20% 50%, rgba(139,92,246,0.12), transparent 60%)',
        }}
      />

      <Container>
        <SectionHeading
          eyebrow="Advantages"
          title={t('whyUs.title')}
          subtitle={t('whyUs.subtitle')}
          align="center"
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-ink-850/60 p-6 transition hover:border-white/20 hover:bg-ink-800/70"
              >
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500/30 to-brand-800/30 ring-1 ring-inset ring-brand-300/30">
                  <Icon className="h-5 w-5 text-brand-200" />
                </div>
                <h3 className="font-display text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-zinc-400">{item.text}</p>

                {/* Угловой блик */}
                <span className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand-500/10 blur-2xl transition group-hover:bg-brand-500/20" />
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}