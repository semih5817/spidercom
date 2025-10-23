import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "C'est quoi exactement l'abonnement 4 ans ?",
    answer: "Vous payez un forfait mensuel qui inclut TOUT : site web, hébergement, maintenance, mises à jour de sécurité, support technique, automatisations, et ajustements. Pas de surprise, pas de frais cachés."
  },
  {
    question: "Je ne suis pas très à l'aise avec la technologie, c'est pour moi ?",
    answer: "Justement ! On a créé SPYDERCOM pour les entrepreneurs qui veulent les bénéfices de la tech sans la complexité. Vous n'avez rien à faire techniquement, on gère tout."
  },
  {
    question: "Combien ça coûte vraiment ?",
    answer: "Chaque projet est sur mesure selon vos besoins. Lors de l'audit gratuit, on vous fait une proposition claire et transparente. Comptez entre 250€ et 500€/mois selon les automatisations. Aucun prix caché."
  },
  {
    question: "Combien de temps pour mettre en place ?",
    answer: "Entre 2 et 6 semaines selon la complexité. On commence toujours par les quick wins (les automatisations qui ont le plus d'impact immédiat)."
  },
  {
    question: "Vous travaillez uniquement dans les Vosges ?",
    answer: "On est basé dans les Vosges, mais on accompagne des entreprises dans toute la France. L'avantage local : on peut se rencontrer en physique si besoin."
  },
  {
    question: "Qu'est-ce qui se passe si je veux arrêter avant 4 ans ?",
    answer: "On en discute de vive voix lors de l'audit. L'idée est de construire un partenariat long terme, mais on reste flexibles selon votre situation."
  },
  {
    question: "Vous utilisez quoi comme outils ?",
    answer: "On utilise les meilleurs outils du marché : N8N pour les automatisations, WordPress/Webflow pour les sites, OpenAI pour l'IA, Google Workspace, etc. On s'adapte aussi à vos outils existants."
  },
  {
    question: "Est-ce que je garde la propriété de mon site ?",
    answer: "Oui, 100%. Vous êtes propriétaire de votre site, de vos données, de vos automatisations. Si un jour on arrête de travailler ensemble, vous repartez avec tout."
  }
];

const FAQ = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Questions fréquentes
          </h2>
          <p className="text-lg text-muted-foreground">
            Tout ce que vous devez savoir avant de démarrer
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-card border border-border-subtle rounded-xl overflow-hidden hover:border-primary/50 transition-colors"
            >
              <AccordionTrigger className="px-6 py-5 hover:no-underline text-left">
                <span className="font-semibold">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-5">
                <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
