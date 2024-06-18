import CollectiveCards from '@/features/CollectiveCards';
import Hero from '@/features/Hero';
import Metrics from '@/features/Metrics';

export default function Home() {
  return (
    <main>
      <Hero />
      <CollectiveCards />
      <Metrics />
    </main>
  );
}
