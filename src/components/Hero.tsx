import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import SpiderLogo from "@/components/SpiderLogo";
import BackgroundEffects from "@/components/BackgroundEffects";
import { useCalendly } from "@/hooks/useCalendly";

const Hero = () => {
  const { openCalendly } = useCalendly();
  
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-deep-black">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-12 max-w-5xl mx-auto px-4">
          {[
            "Basé dans les Vosges",
            "Déjà 2 entreprises nous font confiance",
            "Site, Maintenance, IA, Automatisations"
          ].map((badge, index) => (
              <div
                key={index}
                className="group relative bg-spider-red/8 border border-spider-red/30 backdrop-blur-sm rounded-lg p-4 transition-all duration-400 hover:bg-spider-red/12 hover:border-spider-red/60 hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <div className="flex items-center gap-3 justify-center relative z-10">
                  <Check className="w-5 h-5 text-spider-red" />
                  <span className="text-white/90 font-inter text-sm">{badge}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
