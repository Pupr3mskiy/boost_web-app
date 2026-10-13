import { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Container } from '@/shared/ui/Container';
import { Button } from '@/shared/ui/Button';
import { usePrefersReducedMotion } from '@/shared/hooks/usePrefersReducedMotion';
import { HeroMedia } from './HeroMedia';

const SLIDE_COUNT = 3;
const AUTOPLAY_MS = 7000;

export function Hero() {
  const { t } = useTranslation();
  const reduced = usePrefersReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<number | null>(null);

  const rawSlides = t('hero.slides', { returnObjects: true });
  const slides: Array<{
    eyebrow: string;
    title: string;
    subtitle: string;
    cta: string;
  }> = Array.isArray(rawSlides) ? rawSlides : [];

  const go = useCallback(
    (next: number) => setIndex((next + SLIDE_COUNT) % SLIDE_COUNT),
    [],
  );

  useEffect(() => {
    if (reduced || paused || slides.length === 0) return;
    timerRef.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % SLIDE_COUNT);
    }, AUTOPLAY_MS);
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [reduced, paused, slides.length]);

  const current = slides[index] ?? slides[0];
  if (!current) return null;

  return (
    <section
      className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setPaused(false);
      }}
      aria-roledescription="carousel"
    >
      <div className="absolute inset-0 -z-10 bg-grid opacity-60" />
      <div
        className="absolute -top-40 left-1/2 -z-10 h-[520px] w-[900px] -translate-x-1/2 rounded-full blur-3xl"
        style={{ background: 'radial-gradient(closest-side, rgba(139,92,246,0.35), transparent)' }}
      />
      <div
        className="absolute bottom-0 right-0 -z-10 h-[420px] w-[620px] rounded-full blur-3xl"
        style={{ background: 'radial-gradient(closest-side, rgba(99,102,241,0.25), transparent)' }}
      />

      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <div
              key={`eyebrow-${index}`}
              className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-brand-400/30 bg-brand-500/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-brand-200"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-brand-300 shadow-glow" />
              {current.eyebrow}
            </div>

            <h1
              key={`title-${index}`}
              className="animate-fade-up mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] text-white"
              style={{ animationDelay: reduced ? '0ms' : '80ms' }}
            >
              {current.title}
            </h1>

            <p
              key={`sub-${index}`}
              className="animate-fade-up mt-5 max-w-xl text-zinc-300 text-base sm:text-lg"
              style={{ animationDelay: reduced ? '0ms' : '160ms' }}
            >
              {current.subtitle}
            </p>

            <div
              className="animate-fade-up mt-8 flex flex-wrap items-center gap-3"
              style={{ animationDelay: reduced ? '0ms' : '240ms' }}
            >
              <Link to="/catalog">
                <Button size="lg" leading={<ArrowRight className="h-4 w-4" />}>
                  {current.cta}
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" size="lg">
                  {t('common.ctaLearn')}
                </Button>
              </Link>
            </div>

            <div
              className="animate-fade-up mt-10 flex items-center gap-4"
              style={{ animationDelay: reduced ? '0ms' : '320ms' }}
            >
              <div className="flex items-center gap-2" role="tablist" aria-label="Slides">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    role="tab"
                    aria-selected={i === index}
                    onClick={() => go(i)}
                    className={`h-1.5 rounded-full transition-all duration-500 ${
                      i === index
                        ? 'w-10 bg-brand-300 shadow-glow'
                        : 'w-5 bg-white/20 hover:bg-white/40'
                    }`}
                    aria-label={`Slide ${i + 1}`}
                  />
                ))}
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => go(index - 1)}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-zinc-200 hover:bg-white/10 transition"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={() => go(index + 1)}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-zinc-200 hover:bg-white/10 transition"
                  aria-label="Next slide"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <HeroMedia index={index} reduced={reduced} />
          </div>
        </div>
      </Container>
    </section>
  );
}