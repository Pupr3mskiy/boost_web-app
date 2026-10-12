import { useTranslation } from 'react-i18next';
import { Mail, MessageCircle } from 'lucide-react';
import { brand } from '@/app/config/brand';
import { Container } from '@/shared/ui/Container';
import { SectionHeading } from '@/shared/ui/SectionHeading';

interface ContactChannel {
  id: string;
  label: string;
  value: string;
  href: string;
  external: boolean;
  Icon: typeof Mail;
}

export function Contacts() {
  const { t } = useTranslation();

  // Собираем только реально настроенные каналы связи.
  const channels: ContactChannel[] = [
    ...(brand.supportEmail
      ? [
          {
            id: 'email',
            label: t('contacts.email'),
            value: brand.supportEmail,
            href: `mailto:${brand.supportEmail}`,
            external: false,
            Icon: Mail,
          },
        ]
      : []),
    ...(brand.socials.telegram
      ? [
          {
            id: 'telegram',
            label: t('contacts.telegram'),
            value: brand.socials.telegram.replace(/^https?:\/\//, ''),
            href: brand.socials.telegram,
            external: true,
            Icon: MessageCircle,
          },
        ]
      : []),
    ...(brand.socials.discord
      ? [
          {
            id: 'discord',
            label: t('contacts.discord'),
            value: brand.socials.discord.replace(/^https?:\/\//, ''),
            href: brand.socials.discord,
            external: true,
            Icon: MessageCircle,
          },
        ]
      : []),
  ];

  // Ни один канал не настроен — секция не渲染ится вовсе:
  // нет выдуманных адресов и «рабочих» пустых ссылок.
  if (channels.length === 0) return null;

  return (
    <section className="relative py-20 sm:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Contacts"
              title={t('contacts.title')}
              subtitle={t('contacts.subtitle')}
            />
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-4 sm:grid-cols-2">
              {channels.map((ch) => (
                <a
                  key={ch.id}
                  href={ch.href}
                  className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-ink-850/60 p-5 transition hover:border-white/20 hover:bg-ink-800/70"
                  target={ch.external ? '_blank' : undefined}
                  rel={ch.external ? 'noreferrer noopener' : undefined}
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500/15 ring-1 ring-inset ring-brand-300/30">
                    <ch.Icon className="h-5 w-5 text-brand-200" />
                  </span>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-zinc-500">
                      {ch.label}
                    </div>
                    <div className="text-sm text-zinc-100 group-hover:text-white">
                      {ch.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}