import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, Globe, Coins, Sparkles } from 'lucide-react';
import { brand } from '@/app/config/brand';
import { Container } from '@/shared/ui/Container';
import { Button } from '@/shared/ui/Button';
import { useScrollHeader } from '@/shared/hooks/useScrollHeader';
import { CURRENCIES, type Currency } from '@/shared/types/currency';
import { useCurrency } from '@/shared/hooks/useCurrency';

const LANGS = [
  { code: 'ru', label: 'RU' },
  { code: 'en', label: 'EN' },
] as const;

export function Header() {
  const { t, i18n } = useTranslation();
  const scrolled = useScrollHeader(12);
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [curOpen, setCurOpen] = useState(false);
  const { currency, setCurrency } = useCurrency();

  const changeLang = (code: string) => {
    i18n.changeLanguage(code);
    document.documentElement.lang = code;
    setLangOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-xl bg-ink-900/70 border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <Container className="flex h-16 items-center justify-between gap-4">
        {/* Лого */}
        <Link to="/" className="group flex items-center gap-2.5" aria-label={brand.name}>
          <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-800 shadow-glow">
            <Sparkles className="h-4 w-4 text-white" aria-hidden />
            <span className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/20" />
          </span>
          <span className="font-display text-lg font-semibold tracking-tight">
            {brand.name}
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          <Link
            to="/about"
            className="rounded-lg px-3 py-2 text-sm text-zinc-300 hover:text-white hover:bg-white/5 transition"
          >
            {t('nav.about')}
          </Link>
          <Link
            to="/catalog"
            className="rounded-lg px-3 py-2 text-sm text-zinc-300 hover:text-white hover:bg-white/5 transition"
          >
            {t('nav.catalog')}
          </Link>
        </nav>

        {/* Controls */}
        <div className="hidden md:flex items-center gap-2">
          {/* Language */}
          <div className="relative">
            <button
              onClick={() => { setLangOpen((v) => !v); setCurOpen(false); }}
              className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-zinc-200 hover:bg-white/10 transition"
              aria-haspopup="listbox"
              aria-expanded={langOpen}
            >
              <Globe className="h-3.5 w-3.5" />
              {i18n.language.toUpperCase()}
            </button>
            {langOpen && (
              <ul
                role="listbox"
                className="absolute right-0 mt-2 w-24 overflow-hidden rounded-lg border border-white/10 bg-ink-800 shadow-lg"
              >
                {LANGS.map((l) => (
                  <li key={l.code}>
                    <button
                      onClick={() => changeLang(l.code)}
                      className={`block w-full px-3 py-2 text-left text-sm hover:bg-white/5 ${
                        i18n.language === l.code ? 'text-brand-300' : 'text-zinc-200'
                      }`}
                    >
                      {l.label}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Currency */}
          <div className="relative">
            <button
              onClick={() => { setCurOpen((v) => !v); setLangOpen(false); }}
              className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-zinc-200 hover:bg-white/10 transition"
              aria-haspopup="listbox"
              aria-expanded={curOpen}
            >
              <Coins className="h-3.5 w-3.5" />
              {currency}
            </button>
            {curOpen && (
              <ul
                role="listbox"
                className="absolute right-0 mt-2 w-24 overflow-hidden rounded-lg border border-white/10 bg-ink-800 shadow-lg"
              >
                {CURRENCIES.map((c: Currency) => (
                  <li key={c}>
                    <button
                      onClick={() => { setCurrency(c); setCurOpen(false); }}
                      className={`block w-full px-3 py-2 text-left text-sm hover:bg-white/5 ${
                        currency === c ? 'text-brand-300' : 'text-zinc-200'
                      }`}
                    >
                      {c}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <Button variant="outline" size="md" onClick={() => alert(t('common.backendUnavailable'))}>
            {t('nav.signIn')}
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-zinc-200"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      {/* Mobile panel */}
      {open && (
        <div className="md:hidden border-t border-white/5 bg-ink-900/95 backdrop-blur-xl">
          <Container className="flex flex-col gap-1 py-4">
            <Link to="/about" onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 text-zinc-200 hover:bg-white/5">
              {t('nav.about')}
            </Link>
            <Link to="/catalog" onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 text-zinc-200 hover:bg-white/5">
              {t('nav.catalog')}
            </Link>
            <div className="mt-2 flex items-center gap-2">
              <div className="flex overflow-hidden rounded-lg border border-white/10">
                {LANGS.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => changeLang(l.code)}
                    className={`px-3 py-2 text-xs ${
                      i18n.language === l.code ? 'bg-brand-600/30 text-brand-200' : 'text-zinc-300'
                    }`}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
              <div className="flex overflow-hidden rounded-lg border border-white/10">
                {CURRENCIES.map((c: Currency) => (
                  <button
                    key={c}
                    onClick={() => { setCurrency(c); }}
                    className={`px-3 py-2 text-xs ${
                      currency === c ? 'bg-brand-600/30 text-brand-200' : 'text-zinc-300'
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
            <Button
              variant="outline"
              className="mt-2"
              onClick={() => alert(t('common.backendUnavailable'))}
            >
              {t('nav.signIn')}
            </Button>
          </Container>
        </div>
      )}
    </header>
  );
}