// ./pages/index.tsx
import { PricingCard } from '../components/PricingCard';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <PricingCard />
    </main>
  );
}