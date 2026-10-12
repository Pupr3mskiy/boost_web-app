import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Sparkles } from 'lucide-react';
import { brand } from '@/app/config/brand';
import { Container } from '@/shared/ui/Container';

export function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-10 border-t border-white/5 bg-ink-950/60">
      <Container className="py-12">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-800 shadow-glow">
                <Sparkles className="h-4 w-4 text-white" />
              </span>
              <span className="font-display text-lg font-semibold">{brand.name}</span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-zinc-400">{brand.description}</p>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-sm font-semibold text-white">Platform</h4>
            <ul className="mt-4 space-y-2 text-sm text-zinc-400">
              <li><Link to="/catalog" className="hover:text-white">{t('nav.catalog')}</Link></li>
              <li><Link to="/about" className="hover:text-white">{t('nav.about')}</Link></li>
              <li><Link to="/faq" className="hover:text-white">{t('footer.faq')}</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-sm font-semibold text-white">Legal</h4>
            <ul className="mt-4 space-y-2 text-sm text-zinc-400">
              <li><Link to="/privacy" className="hover:text-white">{t('footer.privacy')}</Link></li>
              <li><Link to="/terms" className="hover:text-white">{t('footer.terms')}</Link></li>
              <li className="text-xs text-zinc-500">
                {t('footer.rights', { year })}
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
}