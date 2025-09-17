import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import CompanyLogo from '../components/CompanyLogo';
import PurposeSection from '../components/PurposeSection';
import FeaturesSection from '../components/FeaturesSection';
import ScheduleSection from '../components/ScheduleSection';
import MonitorSection from '../components/MonitorSection';
import PricingSection from '../components/PricingSection';
import ServicesSection from '../components/ServicesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import NewsletterSection from '../components/NewsletterSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <div className="absolute w-full h-full bg-gradient-to-tr from-indigo-600/20 to-emerald-300/20"></div>
      <div className="overflow-hidden">
        <Navbar />
        <Hero />
        <CompanyLogo />
        <PurposeSection />
        <FeaturesSection />
        <ScheduleSection />
        <MonitorSection />
        <PricingSection />
        <ServicesSection />
        <TestimonialsSection />
        <NewsletterSection />
        <Footer />
      </div>
    </main>
  );
}
