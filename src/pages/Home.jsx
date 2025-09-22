import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
// import CompanyLogo from '../components/CompanyLogo';
import PurposeSection from '../components/PurposeSection';
import FeaturesSection from '../components/mission';
import ScheduleSection from '../components/collaborate';
import MonitorSection from '../components/trackImpact';
import PricingSection from '../components/PricingSection';
import Oportunities from '../components/Opportunities';
import TestimonialsSection from '../components/TestimonialsSection';
// import NewsletterSection from '../components/NewsletterSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <div className="absolute w-full h-full  overflow-hidden"></div>
      <div className="overflow-hidden bg-gray-200/70">
        <Navbar />
        <Hero />
        {/* <PurposeSection /> */}
        <FeaturesSection />
        <ScheduleSection />
        <MonitorSection />
        <PricingSection />
        <Oportunities />
        <TestimonialsSection />
        {/* <NewsletterSection /> */}
        <Footer />
      </div>
    </main>
  );
}
