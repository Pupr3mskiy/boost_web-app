import { Hero } from '@/widgets/hero/Hero';
import { PopularServices } from '@/widgets/popular-services/PopularServices';
import { WhyUs } from '@/widgets/why-us/WhyUs';
import { Reviews } from '@/widgets/reviews/Reviews';
import { Contacts } from '@/widgets/contacts/Contacts';

export function HomePage() {
  return (
    <main>
      <Hero />
      <PopularServices />
      <WhyUs />
      <Reviews />
      <Contacts />
    </main>
  );
}