import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import CompanyLogo from '../components/CompanyLogo';
import PurposeSection from '../components/PurposeSection';
import FeaturesSection from '../components/FeaturesSection';
import ScheduleSection from '../components/ScheduleSection';
import MonitorSection from '../components/MonitorSection';
import PricingSection from '../components/PricingSection';
import Reward from '../components/Rewards';
import TestimonialsSection from '../components/TestimonialsSection';
import NewsletterSection from '../components/NewsletterSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <div className="absolute w-full h-full bg-[C9ADA7]"></div>
      <div className="overflow-hidden">
        <Navbar />
        <Hero />
        <CompanyLogo />
        <PurposeSection />
        <FeaturesSection />
        <ScheduleSection />
        <MonitorSection />
        <PricingSection />
        <Reward />
        <TestimonialsSection />
        <NewsletterSection />
        <Footer />
      </div>
    </main>
  );
}
