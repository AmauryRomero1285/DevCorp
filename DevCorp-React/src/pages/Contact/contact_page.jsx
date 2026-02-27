import ContactSection from './sections/contactSection/ContactSection';
import LocationMapSection from './sections/LocationMapSection/LocationMapSection';
import SocialLinksSection from './sections/SocialLinkSection/SocialLinksSection';

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