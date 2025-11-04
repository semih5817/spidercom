import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "C'est quoi exactement l'abonnement 4 ans ?",
    answer: "L'abonnement mensuel inclut TOUT ce dont vous avez besoin : ✅ Votre site web professionnel ✅ Hébergement et nom de domaine ✅ Maintenance et mises à jour de sécurité ✅ Support technique illimité ✅ Automatisations N8N ✅ Ajustements et optimisations réguliers. Pas de surprise, pas de frais cachés. Un tarif fixe mensuel sur 4 ans. C'est comme un abonnement Netflix, mais pour votre écosystème digital."
  },
  {
    question: "Je ne suis pas très à l'aise avec la technologie, c'est pour moi ?",
    answer: "Justement ! On a créé SPIDERCOM pour les entrepreneurs qui veulent les bénéfices de la tech sans la complexité. Vous n'avez RIEN à faire techniquement. On gère tout de A à Z : Installation, Configuration, Formation (si nécessaire), Maintenance, Évolutions. Vous utilisez simplement les outils qu'on met en place. Si vous savez envoyer un email, vous saurez utiliser vos automatisations."
  },
  {
    question: "Combien ça coûte vraiment ?",
    answer: "Chaque projet est sur mesure selon vos besoins spécifiques. Fourchette indicative : Offre Starter (artisans, petites structures) : ~250€/mois • Offre Intermédiaire (PME, automatisations avancées) : ~350€/mois • Offre Premium (entreprises, IA avancée, multi-outils) : ~500€/mois. Lors de l'audit gratuit, on vous fait une proposition claire et transparente adaptée à votre situation. Important : Aucune mauvaise surprise. Le prix inclut TOUT (site, maintenance, support, automatisations)."
  },
  {
    question: "Combien de temps pour mettre en place ?",
    answer: "Ça dépend de la complexité de votre projet : Phase 1 - Quick wins (2 semaines) : On commence par les automatisations qui ont le plus d'impact immédiat (notifications, chatbot simple, relances). Phase 2 - Site web et automatisations complètes (4-6 semaines) : Mise en place de l'écosystème complet. Avantage : Vous voyez des résultats dès les 2 premières semaines, pas besoin d'attendre 2 mois pour avoir un retour sur investissement."
  },
  {
    question: "Vous travaillez uniquement dans les Vosges ?",
    answer: "On est basé dans les Vosges, mais on accompagne des entreprises dans toute la France (et même au-delà). L'avantage local : On peut se rencontrer en physique si besoin • On connaît le tissu économique vosgien • Support dans votre fuseau horaire. L'avantage distance : Tout se fait en ligne (appels, partage d'écran) • Ça fonctionne parfaitement, on le fait déjà."
  },
  {
    question: "Est-ce que je garde la propriété de mon site et de mes données ?",
    answer: "OUI, 100%. Vous êtes propriétaire de : ✅ Votre site web et son code ✅ Votre nom de domaine ✅ Toutes vos données ✅ Vos automatisations et workflows. Si un jour on arrête de travailler ensemble, vous repartez avec TOUT. On vous fournit un export complet et on facilite la transition vers un autre prestataire si nécessaire. Pas de prise en otage. C'est votre entreprise, ce sont vos données."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="relative py-24 bg-deep-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-4xl md:text-5xl font-black text-white">
            Questions <span className="text-spider-red glow-red">fréquentes</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-spider-red/20 pb-4"
              >
                <AccordionTrigger className="text-left hover:no-underline group py-4">
                  <span className="font-orbitron text-lg md:text-xl font-bold text-white group-hover:text-spider-red transition-colors pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pt-2">
                  <p className="font-inter text-white/80 leading-relaxed whitespace-pre-line">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
