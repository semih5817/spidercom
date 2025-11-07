import { Button } from "@/components/ui/button";
import { Clock, Moon, TrendingDown, Layers } from "lucide-react";
import { useCalendly } from "@/hooks/useCalendly";

const problems = [
  {
    icon: Clock,
    title: "Vous perdez un temps fou sur des tâches répétitives",
    points: [
      "Relancer les devis manuellement",
      "Répondre aux mêmes questions 50 fois par jour",
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
    icon: Layers,
    title: "Vous avez 10 outils qui ne communiquent pas entre eux",
    points: [
      "Google Sheets, Gmail, WhatsApp, Excel en mode chaos",
      "Aucune vue d'ensemble",
      "Peur de rater une info importante"
    ]
  }
];

const Problems = () => {
  const { openCalendly } = useCalendly();
  
  return (
    <section id="problemes" className="relative py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-inter text-4xl md:text-5xl font-semibold text-foreground">
            Vous perdez un temps précieux et des opportunités{" "}
            <span className="text-primary">sans le savoir</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-12">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div
                key={index}
                className="group glass-effect border border-primary/20 rounded-lg p-8 transition-all duration-300 hover:border-primary/40 hover:shadow-blue-glow hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <Icon className="w-10 h-10 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-inter text-xl font-semibold text-foreground mb-4">
                      {problem.title}
                    </h3>
                    <ul className="space-y-2">
                      {problem.points.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-foreground/70 font-inter">
                          <span className="text-primary mt-1">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Button variant="cta-outline" size="lg" onClick={openCalendly}>
            Je veux résoudre ça → Réserver mon audit gratuit
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Problems;
