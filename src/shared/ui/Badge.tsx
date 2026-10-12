interface Props {
  children: React.ReactNode;
  tone?: 'brand' | 'muted' | 'warning';
}

const tones = {
  brand: 'bg-brand-500/15 text-brand-200 border-brand-400/30',
  muted: 'bg-white/5 text-zinc-300 border-white/10',
  warning: 'bg-amber-500/10 text-amber-200 border-amber-400/30',
};

export function Badge({ children, tone = 'brand' }: Props) {
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs ${tones[tone]}`}>
      {children}
    </span>
  );
}