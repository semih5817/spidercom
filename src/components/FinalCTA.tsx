import { Button } from "@/components/ui/button";
import { Gift, Zap, Phone, Target } from "lucide-react";
import { useCalendly } from "@/hooks/useCalendly";

const FinalCTA = () => {
  const { openCalendly } = useCalendly();
  
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl animate-glow-pulse" />

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center space-y-8 animate-fade-in">
          {/* Header */}
          <div className="space-y-4">
            <h2 className="font-inter text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-tight">
              Prêt à reprendre le contrôle de{" "}
              <span className="text-primary">votre temps</span> ?
            </h2>
            <p className="font-inter text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Chaque jour passé sans automatisations, c'est des heures perdues sur des tâches répétitives.
            </p>
          </div>

          {/* Alert message */}
          <div className="bg-primary/5 border-l-4 border-primary rounded-r-xl p-6 max-w-2xl mx-auto backdrop-blur-sm">
            <p className="text-muted-foreground font-inter">
              Pendant que vous lisez ces lignes, vos concurrents automatisent leurs relances, leur SAV, leurs prises de RDV...
            </p>
          </div>

          {/* Good news */}
          <div className="space-y-4">
            <p className="font-inter text-2xl font-bold text-foreground">
              <span className="text-primary">La bonne nouvelle ?</span> Il suffit d'un appel de 30 min pour découvrir ce qu'on peut faire pour vous.
            </p>
            <p className="font-inter text-muted-foreground">
              Aucun engagement. Aucune pression. Juste des idées concrètes.
            </p>
          </div>

          {/* CTA Button */}
          <div className="pt-4">
            <Button variant="cta" size="xl" className="text-xl px-12 py-8 h-auto animate-glow" onClick={openCalendly}>
              <Gift className="w-6 h-6" />
              JE RÉSERVE MON AUDIT GRATUIT (30 MIN)
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto pt-8">
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <span className="font-inter font-semibold text-foreground">Réponse sous 24h</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <span className="font-inter font-semibold text-foreground">Appel téléphonique</span>
              <span className="text-sm text-muted-foreground font-inter">(pas de visio obligatoire)</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <span className="font-inter font-semibold text-foreground">Plan d'action personnalisé</span>
              <span className="text-sm text-muted-foreground font-inter">offert</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
