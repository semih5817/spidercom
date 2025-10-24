import { Search, Settings, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: "1",
    icon: Search,
    title: "Audit gratuit de votre écosystème digital (30 min)",
    points: [
      "Votre site web actuel (ou absence de site)",
      "Vos outils et process actuels",
      "Les 3 automatisations qui vont vous faire gagner 10h/semaine",
      "Des exemples concrets dans votre secteur"
    ],
    result: "Vous repartez avec un plan d'action clair (même si vous ne signez pas)"
  },
  {
    number: "2",
    icon: Settings,
    title: "On construit votre arsenal digital sur mesure",
    points: [
      "Site web professionnel responsive, SEO optimisé",
      "Automatisations N8N qui connectent tous vos outils",
      "Chatbot IA formé sur VOTRE entreprise",
      "Tableaux de bord pour piloter votre activité"
    ],
    result: "Tout est clé en main, vous n'avez rien à gérer techniquement"
  },
  {
    number: "3",
    icon: Shield,
    title: "On reste à vos côtés (abonnement 4 ans)",
    points: [
      "Maintenance et mises à jour automatiques",
      "Support réactif (on est dans les Vosges, pas en Inde)",
      "Ajustements et nouvelles automatisations inclus",
      "Rapports de performance mensuels"
    ],
    result: "Vous vous concentrez sur votre métier, on gère la tech"
  }
];

const Solution = () => {
  return (
    <section id="methode" className="relative py-24 bg-gradient-to-b from-deep-black to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-orbitron text-4xl md:text-5xl font-black text-white">
            La méthode <span className="text-spider-red glow-red">SPYDERCOM</span>
          </h2>
          <p className="text-xl text-white/70 font-inter">
            On tisse votre toile digitale intelligente
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative flex gap-8">
                {index < steps.length - 1 && (
                  <div className="absolute left-6 top-20 w-0.5 h-full bg-gradient-to-b from-spider-red to-spider-red/20" />
                )}
                
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-spider-red border-2 border-spider-red/50 flex items-center justify-center font-orbitron font-black text-white text-xl glow-red relative z-10">
                    {step.number}
                  </div>
                </div>

                <div className="flex-1 bg-spider-red/5 border border-spider-red/20 rounded-lg p-8 hover:border-spider-red/60 transition-all duration-400">
                  <div className="flex items-start gap-4 mb-6">
                    <Icon className="w-8 h-8 text-spider-red flex-shrink-0 mt-1" />
                    <h3 className="font-orbitron text-2xl font-bold text-white">{step.title}</h3>
                  </div>
                  
                  <ul className="space-y-2 mb-4">
                    {step.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-white/70 font-inter">
                        <span className="text-spider-red mt-1">✓</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="font-inter text-spider-red font-semibold pt-4 border-t border-spider-red/20">
                    → Résultat : {step.result}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16 space-y-6">
          <p className="font-orbitron text-2xl md:text-3xl font-bold text-white">
            Mais concrètement, qu'est-ce qu'on peut automatiser pour <span className="text-spider-red">VOUS</span> ?
          </p>
          <Button variant="cta" size="lg">
            Découvrir ce qui est possible pour mon entreprise
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Solution;
