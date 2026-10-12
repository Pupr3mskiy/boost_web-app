interface Props {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export function SectionHeading({ eyebrow, title, subtitle, align = 'left' }: Props) {
  const alignCls = align === 'center' ? 'text-center mx-auto' : '';
  return (
    <div className={`max-w-2xl ${alignCls}`}>
      {eyebrow && (
        <div className="mb-3 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-brand-300">
          <span className="h-px w-8 bg-brand-400/60" />
          {eyebrow}
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-semibold text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-zinc-400 text-base sm:text-lg">{subtitle}</p>
      )}
    </div>
  );
}