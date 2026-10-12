import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowUpRight } from 'lucide-react';
import { Container } from '@/shared/ui/Container';
import { SectionHeading } from '@/shared/ui/SectionHeading';
import { Button } from '@/shared/ui/Button';
import { popularServices } from '@/entities/service/data';
import { ServiceCard } from '@/entities/service/serviceCard';

export function PopularServices() {
  const { t } = useTranslation();

  return (
    <section className="relative py-20 sm:py-28">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Services"
            title={t('popular.title')}
            subtitle={t('popular.subtitle')}
          />
          <Link to="/catalog">
            <Button variant="ghost" leading={<ArrowUpRight className="h-4 w-4" />}>
              {t('common.ctaCatalog')}
            </Button>
          </Link>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {popularServices.map((s, i) => (
            <ServiceCard key={s.id} service={s} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}