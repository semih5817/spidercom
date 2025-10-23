import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Wrench, Briefcase, UtensilsCrossed, Users, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const useCases = [
  {
    id: "artisans",
    icon: Wrench,
    title: "Pour les artisans & commerces",
    automations: [
      "📩 Mail/SMS automatique à chaque demande sur le site",
      "💬 Chatbot IA qui répond 24/7 (\"Vous êtes ouvert le dimanche ?\")",
      "⭐ Demande automatique d'avis Google après chaque chantier",
      "📅 Prise de RDV automatique (Google Calendar intégré)",
      "📦 Simulateur de devis instantané sur le site",
      "📊 Tableau de bord : trafic, leads, taux de conversion"
    ],
    example: "Jean, plombier à Épinal, recevait 20 demandes/mois mais n'en rappelait que 12. Maintenant, chaque demande reçoit un SMS instantané + relance auto J+2. Résultat : +40% de conversion."
  },
  {
    id: "pme",
    icon: Briefcase,
    title: "Pour les PME & entreprises de services",
    automations: [
      "👥 Tous vos leads (site, Facebook, Google) centralisés dans un CRM",
      "🧠 Classification auto des mails entrants (prospect/client/SAV/spam)",
      "🧾 Relance auto des devis non signés J+3, J+7, J+14",
      "🧑‍💻 Notification client dès qu'une étape projet avance",
      "📂 Génération auto de factures/devis depuis un formulaire"
    ],
    example: "Sophie, coach professionnelle à Saint-Dié, gérait ses clients dans 3 outils différents. Aujourd'hui, tout est centralisé et ses clients reçoivent des mises à jour automatiques."
  },
  {
    id: "resto",
    icon: UtensilsCrossed,
    title: "Pour les restaurants & hôtels",
    automations: [
      "🗓️ Gestion auto des réservations (site + Google + WhatsApp)",
      "🍴 Centralisation des commandes et avis clients",
      "📢 Relance auto des anciens clients (offre fidélité)",
      "📈 Analyse auto des avis Google → rapport d'amélioration"
    ],
    example: "Un restaurant à Gérardmer centralise maintenant toutes ses réservations et envoie automatiquement une offre fidélité après 3 visites."
  },
  {
    id: "rh",
    icon: Users,
    title: "Pour les recruteurs & RH",
    automations: [
      "📑 Tri auto des CV par compétences",
      "🧾 Notification auto aux candidats (réception, convocation)",
      "🤖 Base de données talents (Google Sheets/Notion/Airtable)"
    ],
    example: "Un cabinet de recrutement vosgien traite maintenant 3x plus de candidatures avec le même temps de travail."
  },
  {
    id: "premium",
    icon: Sparkles,
    title: "Automatisations IA \"Premium\" (haute valeur)",
    automations: [
      "🔎 Audit auto du site d'un prospect (SEO, vitesse, sécurité)",
      "✍️ Génération auto de fiches produits, posts, newsletters",
      "📊 Rapport mensuel auto (trafic + conversions)",
      "🗣️ Réponses auto aux avis clients générées par IA",
      "💬 Assistant IA SAV intégré sur votre site"
    ],
    example: "Une agence immobilière génère automatiquement des descriptions de biens optimisées SEO et répond aux avis Google en moins de 2 minutes."
  }
];

const UseCases = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Voici ce qu'on peut automatiser pour vous
          </h2>
          <p className="text-lg text-muted-foreground">
            (selon votre secteur)
          </p>
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="space-y-4 mb-12">
          {useCases.map((useCase, index) => (
            <AccordionItem 
              key={useCase.id} 
              value={useCase.id}
              className="bg-card border border-border-subtle rounded-xl overflow-hidden hover:border-primary/50 transition-colors"
            >
              <AccordionTrigger className="px-6 py-5 hover:no-underline group">
                <div className="flex items-center gap-4 text-left">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <useCase.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-lg font-semibold">{useCase.title}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4 pt-4">
                  <div className="grid gap-2">
                    {useCase.automations.map((auto, i) => (
                      <div key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="mt-1">•</span>
                        {auto}
                      </div>
                    ))}
                  </div>
                  <div className="bg-primary/5 border-l-4 border-primary rounded-r-lg p-4 mt-6">
                    <p className="text-sm font-semibold mb-1 text-primary">Exemple concret :</p>
                    <p className="text-sm text-muted-foreground italic">{useCase.example}</p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* CTA */}
        <div className="text-center">
          <Button variant="cta" size="xl">
            Je veux découvrir ce que vous pouvez faire pour moi → Audit gratuit
          </Button>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
