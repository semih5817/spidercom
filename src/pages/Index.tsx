import Hero from "@/components/Hero";
import Problems from "@/components/Problems";
import Solution from "@/components/Solution";
import UseCases from "@/components/UseCases";
import Philosophy from "@/components/Philosophy";
import Founder from "@/components/Founder";
import AuditOffer from "@/components/AuditOffer";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Problems />
      <Solution />
      <UseCases />
      <Philosophy />
      <Founder />
      <AuditOffer />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
