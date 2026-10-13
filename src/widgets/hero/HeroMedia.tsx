import { useTranslation } from 'react-i18next';
import { heroMedia } from './heroMediaConfig';

interface Props {
  index: number;
  reduced: boolean;
}

export function HeroMedia({ index, reduced }: Props) {
  const { t } = useTranslation();

  return (
    <div className="relative mx-auto aspect-square w-full max-w-md lg:max-w-lg">
      <div className="absolute -inset-8 rounded-full bg-brand-600/20 blur-3xl" aria-hidden />

      <div className="relative h-full w-full overflow-hidden rounded-3xl border border-white/10 bg-ink-850 shadow-glow-lg">
        {heroMedia.map((m, i) => {
          const active = i === index;
          return (
            <div
              key={m.src}
              className={`absolute inset-0 transition-opacity duration-[1200ms] ease-out ${
                active ? 'opacity-100' : 'opacity-0'
              }`}
              aria-hidden={!active}
            >
              <div className={`absolute inset-0 ${m.cropClassName ?? ''}`}>
                <img
                  src={m.src}
                  alt={active ? t(m.altKey) : ''}
                  draggable={false}
                  className={`h-full w-full object-cover ${m.filterClassName ?? ''} ${
                    active && !reduced ? 'animate-kenburns' : ''
                  }`}
                />
                {m.overlayClassName && (
                  <div
                    className={`pointer-events-none absolute inset-0 ${m.overlayClassName}`}
                    aria-hidden
                  />
                )}
              </div>
            </div>
          );
        })}

        <div
          className="grain pointer-events-none absolute inset-0 opacity-[0.07] mix-blend-overlay"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(6,6,10,0.55)_100%)]"
          aria-hidden
        />
        <div className="pointer-events-none absolute inset-0 opacity-15 bg-grid" aria-hidden />
      </div>
    </div>
  );
}