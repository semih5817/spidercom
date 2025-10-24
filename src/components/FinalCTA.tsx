import { Button } from "@/components/ui/button";
import { Gift, Zap, Phone, Target } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-deep-black via-spider-red/5 to-deep-black" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-spider-red/20 rounded-full blur-3xl animate-glow-pulse" />

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center space-y-8 animate-fade-in">
          {/* Header */}
          <div className="space-y-4">
            <h2 className="font-orbitron text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
              Prêt à reprendre le contrôle de{" "}
              <span className="text-spider-red glow-red">votre temps</span> ?
            </h2>
            <p className="font-inter text-xl md:text-2xl text-white/80 leading-relaxed max-w-2xl mx-auto">
              Chaque jour passé sans automatisations, c'est des heures perdues sur des tâches répétitives.
            </p>
          </div>

          {/* Alert message */}
          <div className="bg-spider-red/5 border-l-4 border-spider-red rounded-r-xl p-6 max-w-2xl mx-auto backdrop-blur-sm">
            <p className="text-white/80 font-inter">
              Pendant que vous lisez ces lignes, vos concurrents automatisent leurs relances, leur SAV, leurs prises de RDV...
            </p>
          </div>

          {/* Good news */}
          <div className="space-y-4">
            <p className="font-orbitron text-2xl font-bold text-white">
              <span className="text-spider-red">La bonne nouvelle ?</span> Il suffit d'un appel de 30 min pour découvrir ce qu'on peut faire pour vous.
            </p>
            <p className="font-inter text-white/70">
              Aucun engagement. Aucune pression. Juste des idées concrètes.
            </p>
          </div>

          {/* CTA Button */}
          <div className="pt-4">
            <Button variant="cta" size="xl" className="text-xl px-12 py-8 h-auto animate-glow">
              <Gift className="w-6 h-6" />
              JE RÉSERVE MON AUDIT GRATUIT (30 MIN)
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto pt-8">
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-spider-red/10 flex items-center justify-center">
                <Zap className="w-6 h-6 text-spider-red" />
              </div>
              <span className="font-orbitron font-semibold text-white">Réponse sous 24h</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-spider-red/10 flex items-center justify-center">
                <Phone className="w-6 h-6 text-spider-red" />
              </div>
              <span className="font-orbitron font-semibold text-white">Appel téléphonique</span>
              <span className="text-sm text-white/60 font-inter">(pas de visio obligatoire)</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-spider-red/10 flex items-center justify-center">
                <Target className="w-6 h-6 text-spider-red" />
              </div>
              <span className="font-orbitron font-semibold text-white">Plan d'action personnalisé</span>
              <span className="text-sm text-white/60 font-inter">offert</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
