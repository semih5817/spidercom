import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import SpiderLogo from "@/components/SpiderLogo";
import BackgroundEffects from "@/components/BackgroundEffects";
import { useCalendly } from "@/hooks/useCalendly";
const Hero = () => {
  const {
    openCalendly
  } = useCalendly();
  return <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-deep-black">
      <BackgroundEffects />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Logo + Nom */}
          <div className="flex flex-col items-center gap-6 mb-8">
            <SpiderLogo size={90} className="animate-float" />
            <h1 className="font-orbitron text-5xl md:text-6xl font-black tracking-[4px] text-white relative">
              SPIDERCOM
              <div className="absolute inset-0 text-spider-cyan opacity-10 translate-x-0.5 translate-y-0.5">
                SPIDERCOM
              </div>
            </h1>
          </div>

          {/* Baseline */}
          <p className="font-inter text-lg md:text-xl text-white/60 tracking-wide max-w-3xl mx-auto">
            La première agence dans les Vosges spécialisée en IA et automatisations
          </p>

          {/* Headline principal */}
          <h2 className="font-orbitron text-4xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight">
            Votre entreprise mérite un{" "}
            <span className="text-spider-red glow-red">écosystème digital</span>{" "}
            qui travaille pour vous{" "}
            <span className="text-white relative">
              24/7
              <span className="absolute inset-0 text-spider-cyan opacity-20 blur-sm">24/7</span>
            </span>
          </h2>

          {/* Sous-titre */}
          <p className="font-inter text-xl md:text-2xl text-white/80 leading-relaxed max-w-4xl mx-auto">
            Nous créons des sites web intelligents et automatisations sur mesure pour les entreprises vosgiennes qui veulent{" "}
            <span className="text-spider-red font-semibold">scaler sans s'épuiser</span>
          </p>

          {/* CTA principal */}
          <div className="pt-8 px-4">
            <Button variant="cta" size="xl" className="text-base sm:text-lg px-8 sm:px-12 py-5 sm:py-6 h-auto w-full sm:w-auto" onClick={openCalendly}>
              🎁 Réserver mon audit gratuit (30 min)
            </Button>
          </div>

          {/* Badges de réassurance */}
          
        </div>
      </div>
    </section>;
};
export default Hero;