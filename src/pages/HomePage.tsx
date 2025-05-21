import { lazy, Suspense } from 'react';
import Hero from '@/components/sections/Hero';
import LoadingSpinner from '@/components/ui/custom/loading-spinner';

// Lazy load components that aren't needed immediately
const TechSection = lazy(() => import('@/components/sections/TechSection'));
const ReactPerformance = lazy(() => import('@/components/sections/ReactPerformance'));

export default function HomePage() {
  return (
    <>
      <Hero />
      <Suspense fallback={<LoadingFallback label="Loading technology information..." />}>
        <TechSection />
      </Suspense>
      <Suspense fallback={<LoadingFallback label="Loading performance demos..." />}>
        <ReactPerformance />
      </Suspense>
    </>
  );
}

function LoadingFallback({ label }: { label: string }) {
  return (
    <div className="w-full py-20 flex justify-center items-center">
      <div className="text-center">
        <LoadingSpinner className="mx-auto mb-4" />
        <p className="text-muted-foreground">{label}</p>
      </div>
    </div>
  );
}