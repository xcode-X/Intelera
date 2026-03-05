import HeroSection from '../components/home/HeroSection';
import TrustBar from '../components/home/TrustBar';
import ClientSection from '../components/home/ClientSection';
import ProblemSection from '../components/home/ProblemSection';
import ServicesSection from '../components/home/ServicesSection';
import WhyInteleraSection from '../components/home/WhyInteleraSection';
import DifferentiatorStrip from '../components/home/DifferentiatorStrip';
import HowWeWork from '../components/home/HowWeWork';
import IndustriesSection from '../components/home/IndustriesSection';
import CaseStudyPreview from '../components/home/CaseStudyPreview';
import TestimonialSection from '../components/home/TestimonialSection';
import FinalCTASection from '../components/home/FinalCTASection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <ClientSection />
      <ProblemSection />
      <ServicesSection />
      <WhyInteleraSection />
      <DifferentiatorStrip />
      <HowWeWork />
      <IndustriesSection />
      <CaseStudyPreview />
      <TestimonialSection />
      <FinalCTASection />
    </>
  );
}
