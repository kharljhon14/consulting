import Ambitions from '@/features/Ambitions';
import CollectiveCards from '@/features/CollectiveCards';
import Hero from '@/features/Hero';
import Metrics from '@/features/Metrics';
import Process from '@/features/Process';

export default function Home() {
  return (
    <main>
      <Hero />
      <CollectiveCards />
      <Metrics />
      <Process />
      <Ambitions />
    </main>
  );
}
