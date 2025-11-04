import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problems from "@/components/Problems";
import Solution from "@/components/Solution";
import UseCases from "@/components/UseCases";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import Philosophy from "@/components/Philosophy";
import Founder from "@/components/Founder";
import AuditOffer from "@/components/AuditOffer";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import CTABooking from "@/components/CTABooking";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Problems />
      <Solution />
      <UseCases />
      <ProjectsShowcase />
      <Philosophy />
      <Founder />
      <AuditOffer />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <CTABooking />
      <Footer />
    </div>
  );
};

export default Index;
