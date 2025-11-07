import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import SpiderLogo from "@/components/SpiderLogo";
import BackgroundEffects from "@/components/BackgroundEffects";
import { useCalendly } from "@/hooks/useCalendly";

const Hero = () => {
  const { openCalendly } = useCalendly();
  
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <BackgroundEffects />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Logo + Nom */}
          <div className="flex flex-col items-center gap-6 mb-8">
            <SpiderLogo size={90} className="animate-float" />
            <h1 className="font-inter text-5xl md:text-6xl font-semibold tracking-tight text-foreground relative">
              SPIDERCOM
              <div className="absolute inset-0 text-spider-cyan opacity-5 translate-x-0.5 translate-y-0.5">
                SPIDERCOM
              </div>
            </h1>
          </div>

          {/* Baseline */}
          <p className="font-inter text-lg md:text-xl text-muted-foreground tracking-wide max-w-3xl mx-auto">
            La première agence dans les Vosges spécialisée en IA et automatisations
          </p>

          {/* Headline principal */}
          <h2 className="font-inter text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight tracking-tight text-foreground">
            Votre entreprise mérite un{" "}
            <span className="text-gradient">écosystème digital</span>{" "}
            qui travaille pour vous{" "}
            <span className="text-foreground relative">
              24/7
              <span className="absolute inset-0 text-spider-cyan opacity-10 blur-sm">24/7</span>
            </span>
          </h2>

          {/* Sous-titre */}
          <p className="font-inter text-xl md:text-2xl text-foreground/80 leading-relaxed max-w-4xl mx-auto">
            Nous créons des sites web intelligents et automatisations sur mesure pour les entreprises vosgiennes qui veulent{" "}
            <span className="text-primary font-semibold">scaler sans s'épuiser</span>
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
              "Abonnement 4 ans tout inclus",
              "Déjà 2 entreprises nous font confiance",
              "Site, Maintenance, IA, Automatisations"
            ].map((badge, index) => (
              <div
                key={index}
                className="group relative glass-effect border border-primary/20 rounded-lg p-4 transition-all duration-300 hover:border-primary/40 hover:shadow-blue-glow hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="flex items-center gap-3 justify-center relative z-10">
                  <Check className="w-5 h-5 text-primary" />
                  <span className="text-foreground/90 font-inter text-sm">{badge}</span>
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
