import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Wrench,
  Building2,
  UtensilsCrossed,
  Users,
  Brain,
} from "lucide-react";

const useCases = [
  {
    id: "artisans",
    icon: Wrench,
    title: "Artisans & Commerces",
    automations: [
      { icon: "📩", title: "Notification instantanée", desc: "Mail/SMS automatique à chaque demande sur le site - Vous ne ratez plus jamais un prospect" },
      { icon: "💬", title: "Chatbot intelligent 24/7", desc: "Répond aux questions courantes même la nuit" },
      { icon: "⭐", title: "Génération d'avis Google automatique", desc: "Demande envoyée automatiquement après chaque chantier" },
      { icon: "📅", title: "Prise de rendez-vous automatique", desc: "Intégration Google Calendar - Le client réserve directement" },
      { icon: "📦", title: "Simulateur de devis en ligne", desc: "Le client obtient une estimation instantanée" },
      { icon: "📊", title: "Tableau de bord visuel", desc: "Trafic du site, leads, taux de conversion en temps réel" }
    ],
    example: {
      name: "Jean, plombier à Épinal",
      before: "Je recevais 20 demandes/mois mais n'en rappelais que 12 par manque de temps.",
      after: "Chaque demande reçoit un SMS instantané, relance auto J+2.",
      result: "+40% de conversion, 8 clients supplémentaires/mois."
    }
  },
  {
    id: "pme",
    icon: Building2,
    title: "PME & Entreprises de Services",
    automations: [
      { icon: "👥", title: "Centralisation des leads", desc: "Tous vos prospects (site, Facebook, Google Ads) dans un seul CRM" },
      { icon: "🧠", title: "Classification automatique des emails", desc: "Tri intelligent : prospect / client / SAV / spam - Gain : 2h/jour" },
      { icon: "🧾", title: "Relance automatique des devis", desc: "J+3, J+7, J+14 : séquence programmée - Taux de signature : +30%" },
      { icon: "🧑‍💻", title: "Notification client en temps réel", desc: "Dès qu'une étape projet avance, le client est prévenu" },
      { icon: "📂", title: "Génération automatique de documents", desc: "Factures, devis depuis un formulaire - Plus d'erreurs de saisie" }
    ],
    example: {
      name: "Sophie, agence de communication, Saint-Dié",
      before: "On gérait 15 projets en parallèle dans Excel. Clients perdus, factures oubliées...",
      after: "CRM centralisé, notifications auto, génération de docs en 1 clic.",
      result: "On a accepté 5 projets de plus sans embaucher."
    }
  },
  {
    id: "restaurant",
    icon: UtensilsCrossed,
    title: "Restaurants & Hôtels",
    automations: [
      { icon: "🗓️", title: "Gestion unifiée des réservations", desc: "Site web, Google, WhatsApp : tout au même endroit" },
      { icon: "🍴", title: "Centralisation des commandes et avis", desc: "Une seule interface pour tout gérer" },
      { icon: "📢", title: "Fidélisation automatique", desc: "Relance des anciens clients avec offres personnalisées" },
      { icon: "📈", title: "Analyse automatique des avis Google", desc: "Génère un rapport mensuel d'amélioration" }
    ],
    example: {
      name: "Restaurant Le Montagnard, Gérardmer",
      before: "On ratait 10 réservations/semaine par manque de temps pour répondre.",
      after: "Système unifié, confirmation auto, rappel J-1.",
      result: "Remplissage +25%, avis Google passés de 4.2 à 4.7 étoiles."
    }
  },
  {
    id: "recrutement",
    icon: Users,
    title: "Recruteurs & RH",
    automations: [
      { icon: "📑", title: "Tri automatique des CV", desc: "Classification par compétences grâce à l'IA - Gagne 5h/semaine" },
      { icon: "🧾", title: "Communication automatisée avec candidats", desc: "Accusé réception, convocation, refus - Expérience candidat améliorée" },
      { icon: "🤖", title: "Base de données talents intelligente", desc: "Google Sheets / Notion / Airtable connecté - Recherche instantanée" }
    ],
    example: {
      name: "Cabinet RH Lorraine Talents, Épinal",
      before: "On recevait 150 CV/mois, tri manuel de 10h.",
      after: "IA qui filtre, notifications auto, base recherchable.",
      result: "On traite 3x plus de candidatures avec le même temps."
    }
  },
  {
    id: "ia-premium",
    icon: Brain,
    title: "Automatisations IA Premium",
    automations: [
      { icon: "🔎", title: "Audit automatique de sites prospects", desc: "Analyse SEO, vitesse, sécurité d'un site en 1 clic" },
      { icon: "✍️", title: "Génération de contenu assistée par IA", desc: "Fiches produits, posts réseaux sociaux, newsletters" },
      { icon: "📊", title: "Rapports mensuels automatisés", desc: "Trafic, conversions, ROI calculé automatiquement - PDF généré et envoyé" },
      { icon: "🗣️", title: "Réponses automatiques aux avis clients", desc: "IA génère une réponse personnalisée - Vous validez en 1 clic" },
      { icon: "💬", title: "Assistant IA SAV intégré au site", desc: "Répond aux questions techniques 24/7 - Escalade vers humain si nécessaire" }
    ],
    example: null
  }
];

const UseCases = () => {
  return (
    <section id="cas-usage" className="relative py-24 bg-deep-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-orbitron text-4xl md:text-5xl font-black text-white">
            Voici ce qu'on peut <span className="text-spider-red glow-red">automatiser</span> pour vous
          </h2>
          <p className="text-xl text-white/70 font-inter">
            Sélectionnez votre secteur d'activité
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon;
              return (
                <AccordionItem 
                  key={useCase.id} 
                  value={useCase.id}
                  className="border border-spider-red/20 rounded-lg bg-spider-red/5 overflow-hidden hover:border-spider-red/60 transition-all duration-400 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <AccordionTrigger className="px-8 py-6 hover:no-underline group">
                    <div className="flex items-center gap-4 text-left">
                      <Icon className="w-8 h-8 text-spider-red flex-shrink-0" />
                      <span className="font-orbitron text-xl font-bold text-white group-hover:text-spider-red transition-colors">
                        {useCase.title}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-8 pb-8">
                    <div className="space-y-6">
                      <div className="grid gap-4">
                        {useCase.automations.map((auto, idx) => (
                          <div key={idx} className="flex items-start gap-4 p-4 bg-background/50 rounded-lg border border-spider-red/10">
                            <span className="text-2xl flex-shrink-0">{auto.icon}</span>
                            <div>
                              <h4 className="font-inter font-bold text-white mb-1">{auto.title}</h4>
                              <p className="text-white/70 text-sm">{auto.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>

                      {useCase.example && (
                        <div className="mt-6 p-6 bg-spider-red/10 border-l-4 border-spider-red rounded-lg">
                          <p className="font-inter font-bold text-spider-red mb-3">💡 {useCase.example.name}</p>
                          <p className="text-white/80 mb-2"><span className="font-semibold">Avant :</span> {useCase.example.before}</p>
                          <p className="text-white/80 mb-2"><span className="font-semibold">Maintenant :</span> {useCase.example.after}</p>
                          <p className="text-spider-red font-semibold">Résultat : {useCase.example.result}</p>
                        </div>
                      )}

                      {useCase.id === "ia-premium" && (
                        <p className="text-white/60 text-sm italic">
                          Note : Ces automatisations demandent un setup plus avancé (offre Premium)
                        </p>
                      )}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <Button variant="cta-outline" size="lg">
            Je veux découvrir ce qui est possible pour moi → Audit gratuit
          </Button>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
