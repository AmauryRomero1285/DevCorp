import HeroSection from '../Home/sections/HeroSection';
import TrustedBySection from '../Home/sections/TrustedBySection';
import CaseStudiesSection from '../Home/sections/CaseStudiesSection';
import ProcessSection from '../Home/sections/ProcessSection';
import TestimonialStatsSection from '../Home/sections/TestimonialStatsSection';
import FinalCTASection from '../Home/sections/FinalCTASection';

export default function Home() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen flex flex-col antialiased">
      <main className="flex-grow">
        {/* Sección 1 */}
        <HeroSection />
        <TrustedBySection />

        {/* Sección 2 */}
        <CaseStudiesSection />
        <ProcessSection />

        {/* Sección 3 */}
        <TestimonialStatsSection />
        <FinalCTASection />
      </main>
    </div>
  );
}