import { Button } from "@/components/ui/button";
import { Gift, CheckCircle2, MapPin, Phone, Zap } from "lucide-react";

const AuditOffer = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="container mx-auto max-w-4xl">
        {/* Main offer box */}
        <div className="relative">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-spider-red-glow rounded-3xl blur-xl opacity-20 animate-glow" />
          
          <div className="relative bg-gradient-to-br from-card to-card-dark border-2 border-primary rounded-3xl p-8 md:p-12 shadow-elegant">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/20 mb-4 animate-pulse">
                <Gift className="w-10 h-10 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Découvrez en 30 min les 3 automatisations qui vont{" "}
                <span className="text-gradient">transformer votre quotidien</span>
              </h2>
            </div>

            {/* Offer details */}
            <div className="bg-background/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 mb-8 border border-border-subtle">
              <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
                <h3 className="text-2xl font-bold">🎁 AUDIT GRATUIT OFFERT</h3>
                <div className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
                  Valeur 300€
                </div>
              </div>

              <p className="text-lg mb-6">Pendant cet appel découverte de 30 min, on va :</p>

              <div className="grid gap-4 mb-6">
                {[
                  "Analyser votre site actuel (ou votre besoin si vous n'en avez pas)",
                  "Identifier les 3 tâches répétitives qu'on peut automatiser pour vous",
                  "Vous montrer des exemples concrets dans votre secteur",
                  "Vous donner un plan d'action (même si vous ne signez pas)"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-primary/5 border-l-4 border-primary rounded-r-lg p-4">
                <p className="font-bold text-lg mb-1">→ Zéro engagement, zéro pression commerciale</p>
                <p className="text-sm text-muted-foreground">
                  Vous repartez avec des idées actionnables, même si on ne travaille jamais ensemble.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center space-y-6">
              <Button variant="cta" size="xl" className="w-full md:w-auto text-xl px-12 py-8 h-auto">
                <Gift className="w-6 h-6" />
                JE RÉSERVE MON CRÉNEAU (30 MIN) - GRATUIT
              </Button>

              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  Basé dans les Vosges
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-primary" />
                  RDV téléphonique
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-primary" />
                  Réponse sous 24h
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuditOffer;
