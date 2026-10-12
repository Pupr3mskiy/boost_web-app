import { Shield, Swords, GraduationCap } from 'lucide-react';

const ARTWORKS = [
  { Icon: Shield,    tint: 'from-brand-500/40 to-indigo-600/30' },
  { Icon: Swords,    tint: 'from-fuchsia-500/40 to-brand-600/30' },
  { Icon: GraduationCap, tint: 'from-emerald-500/40 to-teal-600/30' },
];

export function HeroArtwork({ index, reduced }: { index: number; reduced: boolean }) {
  const { Icon, tint } = ARTWORKS[index % ARTWORKS.length];
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md">
      {/* Орбитальные кольца */}
      <div
        className={`absolute inset-0 rounded-full border border-brand-400/20 ${reduced ? '' : 'animate-[spin_40s_linear_infinite]'}`}
      />
      <div
        className={`absolute inset-8 rounded-full border border-brand-300/15 ${reduced ? '' : 'animate-[spin_30s_linear_infinite_reverse]'}`}
      />
      <div
        className={`absolute inset-16 rounded-full border border-white/10 ${reduced ? '' : 'animate-[spin_20s_linear_infinite]'}`}
      />

      {/* Центральный градиентный диск */}
      <div className={`absolute inset-20 rounded-full bg-gradient-to-br ${tint} blur-2xl`} />
      <div className="absolute inset-20 rounded-full bg-ink-800/80 ring-1 ring-inset ring-white/10" />

      {/* Иконка */}
      <div className={`absolute inset-0 flex items-center justify-center ${reduced ? '' : 'animate-float'}`}>
        <div className="relative flex h-32 w-32 items-center justify-center rounded-3xl bg-gradient-to-br from-brand-500 to-brand-800 shadow-glow-lg">
          <Icon className="h-14 w-14 text-white" strokeWidth={1.5} />
          <span className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/20" />
        </div>
      </div>

      {/* Декоративные точки */}
      {[0, 60, 120, 180, 240, 300].map((deg) => (
        <span
          key={deg}
          className="absolute left-1/2 top-1/2 h-1.5 w-1.5 rounded-full bg-brand-300"
          style={{
            transform: `rotate(${deg}deg) translateY(-48%) translateX(-50%)`,
            boxShadow: '0 0 12px rgba(196,181,253,0.8)',
          }}
        />
      ))}
    </div>
  );
}