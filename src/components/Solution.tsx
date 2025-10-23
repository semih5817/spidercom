import { Search, Wrench, HeartHandshake } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: Search,
    title: "Audit gratuit de votre écosystème digital (30 min)",
    points: [
      "On analyse votre site actuel (ou absence de site)",
      "On identifie les 3 automatisations qui vont vous faire gagner 10h/semaine",
      "On vous montre des exemples concrets dans votre secteur",
      "→ Résultat : Vous repartez avec un plan d'action clair (même si vous ne signez pas)"
    ]
  },
  {
    number: "2",
    icon: Wrench,
    title: "On construit votre arsenal digital sur mesure",
    points: [
      "Site web professionnel responsive + SEO optimisé",
      "Automatisations N8N qui connectent tous vos outils",
      "Chatbot IA formé sur VOTRE entreprise",
      "Tableaux de bord pour piloter votre activité",
      "→ Tout est clé en main, vous n'avez rien à gérer techniquement"
    ]
  },
  {
    number: "3",
    icon: HeartHandshake,
    title: "On reste à vos côtés (abonnement 4 ans)",
    points: [
      "Maintenance & mises à jour automatiques",
      "Support réactif (on est dans les Vosges, pas en Inde)",
      "Ajustements et nouvelles automatisations inclus",
      "Rapports de performance mensuels",
      "→ Vous vous concentrez sur votre métier, on gère la tech"
    ]
  }
];

const Solution = () => {
  return (
    <section className="py-20 px-4 relative bg-gradient-to-b from-background to-card-dark">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            La méthode <span className="text-gradient">SPYDERCOM</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            On tisse votre toile digitale intelligente en 3 étapes
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="bg-card border border-border-subtle rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 relative overflow-hidden group"
            >
              {/* Step number background */}
              <div className="absolute top-4 right-4 text-[120px] font-bold text-primary/5 group-hover:text-primary/10 transition-colors">
                {step.number}
              </div>

              <div className="relative z-10">
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-spider-red-glow flex items-center justify-center flex-shrink-0 shadow-lg">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-3">
                      ÉTAPE {step.number}
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                  </div>
                </div>

                <ul className="space-y-3 ml-[88px]">
                  {step.points.map((point, i) => (
                    <li 
                      key={i} 
                      className={`text-sm ${point.startsWith('→') ? 'text-primary font-semibold mt-4' : 'text-muted-foreground'} flex items-start gap-3`}
                    >
                      {!point.startsWith('→') && <span className="text-primary mt-1">✓</span>}
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Transition text */}
        <div className="text-center mt-16">
          <p className="text-xl font-semibold text-gradient">
            Mais concrètement, qu'est-ce qu'on peut automatiser pour VOUS ?
          </p>
        </div>
      </div>
    </section>
  );
};

export default Solution;
