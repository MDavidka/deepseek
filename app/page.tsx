import { Hero } from '@/components/hero';
import { LogoCloud } from '@/components/logo-cloud';
import { Features } from '@/components/features';
import { Pricing } from '@/components/pricing';
import { Testimonials } from '@/components/testimonials';
import { CTASection } from '@/components/cta-section';

export default function HomePage() {
  return (
    <>
      <Hero />
      <LogoCloud />
      <Features />
      <Pricing />
      <Testimonials />
      <CTASection />
    </>
  );
}
