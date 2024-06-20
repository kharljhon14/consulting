import Ambitions from '@/features/Ambitions';
import CollectiveCards from '@/features/CollectiveCards';
import Hero from '@/features/Hero';
import Metrics from '@/features/Metrics';
import News from '@/features/News';
import Process from '@/features/Process';

export default function Home() {
  return (
    <main>
      <Hero />
      <CollectiveCards />
      <Metrics />
      <Process />
      <Ambitions />
      <News />
    </main>
  );
}
