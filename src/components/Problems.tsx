import { Clock, Moon, TrendingDown, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const problems = [
  {
    icon: Clock,
    title: "Vous perdez un temps fou sur des tâches répétitives",
    points: [
      "Relancer les devis manuellement",
      "Répondre aux mêmes questions 50x/jour",
      "Saisir les mêmes données dans 3 outils différents"
    ]
  },
  {
    icon: Moon,
    title: "Votre site web dort pendant que vos concurrents vendent",
    points: [
      "Pas de chatbot pour répondre la nuit",
      "Formulaires qui n'envoient aucune notification",
      "Aucun suivi automatique des prospects"
    ]
  },
  {
    icon: TrendingDown,
    title: "Vous laissez partir des clients sans le savoir",
    points: [
      "Devis envoyés mais jamais relancés",
      "Avis Google jamais demandés",
      "Anciens clients oubliés"
    ]
  },
  {
    icon: Zap,
    title: "Vous avez 10 outils qui ne communiquent pas entre eux",
    points: [
      "Google Sheets + Gmail + WhatsApp + Excel = chaos",
      "Aucune vue d'ensemble",
      "Peur de rater une info importante"
    ]
  }
];

const Problems = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Ces situations vous parlent ?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Chaque jour, des entrepreneurs vosgiens perdent du temps et de l'argent sur ces 4 problèmes
          </p>
        </div>

        {/* Problems grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="bg-card border border-border-subtle rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-card group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <problem.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-3">{problem.title}</h3>
                  <ul className="space-y-2">
                    {problem.points.map((point, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="cta-outline" size="lg">
            Je veux résoudre ça → Audit gratuit
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Problems;
