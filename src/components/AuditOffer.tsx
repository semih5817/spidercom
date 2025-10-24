import { Button } from "@/components/ui/button";
import { Gift, CheckCircle2, MapPin, Phone, Zap, Target, Calendar } from "lucide-react";

const AuditOffer = () => {
  return (
    <section id="audit" className="py-24 px-4 relative overflow-hidden bg-gradient-to-b from-deep-black via-spider-red/8 to-deep-black">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-spider-red/5 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-spider-red/20 rounded-full blur-3xl animate-glow-pulse" />

      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-orbitron text-4xl md:text-5xl font-black text-white mb-4">
            Découvrez en 30 min les 3 automatisations qui vont transformer votre quotidien
          </h2>
        </div>

        {/* Main offer card */}
        <div className="bg-spider-red/5 border-2 border-spider-red rounded-lg p-8 md:p-12 mb-8 relative overflow-hidden group hover:border-spider-red/80 transition-all duration-400">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          
          <div className="relative z-10 space-y-6">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Gift className="w-12 h-12 text-spider-red" />
              <h3 className="font-orbitron text-3xl font-black text-white">
                AUDIT GRATUIT OFFERT
              </h3>
            </div>
            
            <p className="text-center text-white/60 font-inter text-lg mb-8">
              (valeur 300€)
            </p>

            <div className="space-y-4 mb-8">
              <p className="font-orbitron text-xl font-bold text-white text-center mb-6">
                Pendant cet appel découverte de 30 minutes, on va :
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { icon: Target, text: "Analyser votre site actuel (ou votre besoin si vous n'en avez pas)" },
                  { icon: Zap, text: "Identifier les 3 tâches répétitives qu'on peut automatiser pour vous" },
                  { icon: Calendar, text: "Vous montrer des exemples concrets dans votre secteur d'activité" },
                  { icon: Gift, text: "Vous donner un plan d'action (même si vous ne signez pas)" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 bg-deep-black/50 p-4 rounded-lg">
                    <item.icon className="w-6 h-6 text-spider-red flex-shrink-0 mt-1" />
                    <span className="text-white/90 font-inter">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-spider-red/10 border border-spider-red/30 rounded-lg p-6 mb-8">
              <p className="font-orbitron text-xl font-bold text-white text-center">
                → Zéro engagement. Zéro pression commerciale. Zéro bullshit.
              </p>
              <p className="text-white/80 font-inter text-center mt-2">
                Vous repartez avec des idées actionnables, même si on ne travaille jamais ensemble.
              </p>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <Button variant="cta" size="xl" className="text-xl px-12 py-8 h-auto animate-glow">
                <Gift className="w-6 h-6" />
                JE RÉSERVE MON CRÉNEAU (30 MIN) - GRATUIT
              </Button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap justify-center gap-6 pt-6">
              <div className="flex items-center gap-2 text-white/80">
                <MapPin className="w-5 h-5 text-spider-red" />
                <span className="font-inter text-sm">Basé dans les Vosges</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Phone className="w-5 h-5 text-spider-red" />
                <span className="font-inter text-sm">RDV téléphonique</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Zap className="w-5 h-5 text-spider-red" />
                <span className="font-inter text-sm">Réponse sous 24h</span>
              </div>
            </div>
          </div>
        </div>

        {/* Reassurance section */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-spider-red/5 border border-spider-red/20 rounded-lg p-6">
            <h4 className="font-orbitron font-bold text-white mb-3">Ce que l'audit N'EST PAS :</h4>
            <ul className="space-y-2 font-inter text-white/70">
              <li className="flex items-start gap-2">
                <span className="text-spider-red">❌</span>
                <span>Une démo commerciale agressive</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-spider-red">❌</span>
                <span>Une présentation PowerPoint de 2h</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-spider-red">❌</span>
                <span>Une obligation d'achat</span>
              </li>
            </ul>
          </div>

          <div className="bg-spider-red/5 border border-spider-red/20 rounded-lg p-6">
            <h4 className="font-orbitron font-bold text-white mb-3">Ce que l'audit EST :</h4>
            <ul className="space-y-2 font-inter text-white/70">
              <li className="flex items-start gap-2">
                <span className="text-spider-red">✅</span>
                <span>Un vrai diagnostic de votre situation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-spider-red">✅</span>
                <span>Des recommandations personnalisées</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-spider-red">✅</span>
                <span>Un plan d'action concret que vous pouvez appliquer seul</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuditOffer;
