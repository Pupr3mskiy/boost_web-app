import { Container } from '@/shared/ui/Container';
import { Badge } from '@/shared/ui/Badge';

export function PlaceholderPage({ title }: { title: string }) {
  return (
    <main className="pt-28 pb-20">
      <Container>
        <Badge tone="warning">Этап MVP · страница в разработке</Badge>
        <h1 className="mt-4 font-display text-3xl font-semibold text-white">{title}</h1>
        <p className="mt-3 max-w-xl text-zinc-400">
          Страница будет реализована на следующих этапах. Сейчас доступен только маршрут.
        </p>
      </Container>
    </main>
  );
}