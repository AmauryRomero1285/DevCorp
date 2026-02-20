import ContactSection from '../Contact/sections/ContactSection';
import LocationMapSection from '../Contact/sections/LocationMapSection';
import SocialLinksSection from '../Contact/sections/SocialLinksSection';

export default function ContactPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen flex flex-col antialiased">      
      <main className="flex-grow">       
        <ContactSection />
        <LocationMapSection />
        <SocialLinksSection />
      </main>

    </div>
  );
}