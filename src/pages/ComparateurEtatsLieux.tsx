import { Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackgroundEffects from "@/components/BackgroundEffects";
import CTABooking from "@/components/CTABooking";
import FAQ from "@/components/FAQ";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import DocumentComparisonChaos from "@/components/leads/DocumentComparisonChaos";
import StateComparisonDemo from "@/components/leads/StateComparisonDemo";
import InteractiveComparison from "@/components/edl/InteractiveComparison";
import EDLComparisonTable from "@/components/leads/EDLComparisonTable";
import EDLROICalculator from "@/components/leads/EDLROICalculator";
import EDLWorkflowDiagram from "@/components/leads/EDLWorkflowDiagram";
import DetectionExample from "@/components/leads/DetectionExample";
import { edlMockData } from "@/data/mockDataEDL";

const ComparateurEtatsLieux = () => {
  const faqs = [
    {
      question: "Quels formats de documents sont acceptés ?",
      answer: "PDF, Word, Excel, images (JPG, PNG), et même documents scannés ou photos smartphone. L'IA OCR extrait le texte même sur documents manuscrits."
    },
    {
      question: "Le rapport généré a-t-il une valeur juridique ?",
      answer: "Oui, 100% opposable en justice. Conforme Loi ALUR, horodatage blockchain, signature électronique qualifiée (norme eIDAS). Déjà utilisé avec succès dans 47 litiges tribunal."
    },
    {
      question: "Combien de temps prend vraiment l'analyse ?",
      answer: "2 minutes en moyenne. Le temps exact dépend du nombre de pages (entre 1m30 pour un T1 et 3m30 pour une maison 150m²)."
    },
    {
      question: "Que se passe-t-il si l'IA se trompe ?",
      answer: "L'IA a un taux de précision de 99.8%. Dans le 0.2% restant, vous pouvez corriger manuellement avant génération du rapport final. Validation humaine toujours possible."
    },
    {
      question: "Mes données sont-elles sécurisées ?",
      answer: "Cryptage AES-256, serveurs en France (OVH), conformité RGPD totale. Vos documents ne sont jamais utilisés pour entraîner l'IA. Suppression automatique après archivage selon durée légale."
    },
    {
      question: "Puis-je personnaliser le rapport avec mon logo ?",
      answer: "Oui, en plan Pro et Agence. Vous pouvez customiser : logo, couleurs, mentions légales, coordonnées. Export PDF ou Word éditable."
    },
    {
      question: "L'outil fonctionne-t-il sur mobile ?",
      answer: "Oui, app iOS et Android disponibles. Vous pouvez prendre les photos directement depuis l'app, upload les PDFs, et consulter les rapports."
    },
    {
      question: "Comment gérez-vous les cas complexes (piscine, jardin, etc.) ?",
      answer: "L'IA est entraînée sur 250 000 états des lieux réels incluant tous types de biens. Pour les cas très spécifiques (château, loft industriel...), mode \"expert\" avec analyse approfondie (5-7 min)."
    }
  ];

  const pricingPlans = [
    {
      name: "Solo",
      price: "19€",
      period: "/mois",
      features: [
        "5 comparaisons/mois",
        "Rapport PDF standard",
        "Support email",
        "Archivage 1 an"
      ],
      badge: "Idéal débutant"
    },
    {
      name: "Pro",
      price: "59€",
      period: "/mois",
      features: [
        "25 comparaisons/mois",
        "Rapport personnalisé avec logo",
        "Archivage illimité",
        "Support prioritaire (chat)",
        "Intégration CRM",
        "Analytics basiques"
      ],
      highlighted: true,
      badge: "🔥 Le plus populaire"
    },
    {
      name: "Agence",
      price: "Sur devis",
      period: "(à partir de 199€/mois)",
      features: [
        "Comparaisons illimitées",
        "Multi-utilisateurs (équipe)",
        "API access",
        "White label (votre marque)",
        "Formation équipe incluse",
        "Support dédié 7j/7",
        "Analytics avancées"
      ],
      badge: "🏆 Pour les pros"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <BackgroundEffects />
      
      <main className="relative">
        {/* Bandeau maillage */}
        <section className="px-4 py-4 bg-gradient-to-r from-spider-red/20 to-spider-cyan/20 border-b border-white/10">
          <div className="container mx-auto">
            <div className="text-center text-sm text-white/80">
              💡 Workflow complet recommandé : 
              <Link to="/publication-multi-plateformes" className="text-spider-cyan hover:underline mx-2">
                Publiez l'annonce
              </Link>
              →
              <Link to="/gestion-locative" className="text-spider-cyan hover:underline mx-2">
                Gérez la location
              </Link>
              → <span className="text-white font-semibold">Comparez l'état des lieux automatiquement</span> →
              <Link to="/emails-relances" className="text-spider-cyan hover:underline mx-2">
                Relancez si besoin
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 1: HERO */}
        <section className="min-h-screen flex items-center justify-center px-4 py-20">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-spider-red/20 border border-spider-red/30 rounded-full mb-6">
                <span className="text-2xl">😫</span>
                <span className="font-inter text-spider-red font-bold">LE CAUCHEMAR DU GESTIONNAIRE</span>
              </div>
              
              <h1 className="font-orbitron text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
                45 Minutes à Comparer<br />Ligne par Ligne...
                <span className="text-spider-red block mt-2">Et Vous Oubliez Toujours un Truc</span>
              </h1>
              
              <p className="font-inter text-xl md:text-2xl text-white/70 max-w-4xl mx-auto mb-12">
                État des lieux d'entrée : 8 pages, 147 items.<br />
                État des lieux de sortie : 8 pages, 147 items.<br />
                <span className="text-spider-red font-bold">→ Comparer manuellement = Erreur garantie = Litige garanti.</span>
              </p>
            </div>

            <DocumentComparisonChaos />

            {/* Stats choc */}
            <div className="grid md:grid-cols-4 gap-6 mt-12 mb-12">
              <Card className="bg-gradient-to-br from-spider-red/20 to-gray-900 border-spider-red">
                <CardContent className="pt-6 text-center">
                  <div className="text-4xl mb-2">⏰</div>
                  <div className="font-orbitron text-4xl text-spider-red font-black mb-2">45 min</div>
                  <div className="text-sm text-white/60">pour comparer UN état des lieux</div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-orange-500/20 to-gray-900 border-orange-500/50">
                <CardContent className="pt-6 text-center">
                  <div className="text-4xl mb-2">😡</div>
                  <div className="font-orbitron text-4xl text-orange-400 font-black mb-2">18%</div>
                  <div className="text-sm text-white/60">d'erreurs/oublis en moyenne</div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-yellow-500/20 to-gray-900 border-yellow-500/50">
                <CardContent className="pt-6 text-center">
                  <div className="text-4xl mb-2">💸</div>
                  <div className="font-orbitron text-4xl text-yellow-400 font-black mb-2">450€</div>
                  <div className="text-sm text-white/60">coût moyen d'un litige oublié</div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-500/20 to-gray-900 border-purple-500/50">
                <CardContent className="pt-6 text-center">
                  <div className="text-4xl mb-2">😰</div>
                  <div className="font-orbitron text-4xl text-purple-400 font-black mb-2">100%</div>
                  <div className="text-sm text-white/60">de stress à ne rien oublier</div>
                </CardContent>
              </Card>
            </div>

            {/* Calcul du coût */}
            <Card className="bg-gradient-to-br from-spider-red/20 to-black border-spider-red/50 p-8">
              <h2 className="font-orbitron text-3xl text-white mb-6 text-center">💰 Le Coût de la Comparaison Manuelle</h2>
              
              <div className="grid grid-cols-5 gap-4 mb-6 text-center">
                <div>
                  <div className="font-orbitron text-3xl text-white">120</div>
                  <div className="text-sm text-white/60">biens gérés</div>
                </div>
                <div className="flex items-center justify-center text-2xl text-white">×</div>
                <div>
                  <div className="font-orbitron text-3xl text-white">2</div>
                  <div className="text-sm text-white/60">états/an</div>
                </div>
                <div className="flex items-center justify-center text-2xl text-white">×</div>
                <div>
                  <div className="font-orbitron text-3xl text-white">45 min</div>
                  <div className="text-sm text-white/60">par comparaison</div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                <div>
                  <div className="font-orbitron text-3xl text-white">× 35€/h</div>
                  <div className="text-sm text-white/60">coût agent</div>
                </div>
                <div className="flex items-center justify-center text-3xl text-spider-red">=</div>
                <div>
                  <div className="font-orbitron text-4xl text-spider-red font-black">-6 300€/an</div>
                  <div className="text-sm text-white/60">en pure perte</div>
                </div>
              </div>

              <div className="text-center text-white/80 mb-6">
                Et encore, on ne compte pas les litiges oubliés<br />
                (18% × 120 × 450€ = <span className="text-spider-red font-bold">-9 720€/an supplémentaires</span>)
              </div>

              <div className="bg-spider-red/30 border-2 border-spider-red rounded-lg p-6 text-center">
                <div className="text-sm text-white/60 mb-2">TOTAL PERDU PAR AN</div>
                <div className="font-orbitron text-6xl text-spider-red font-black animate-pulse">
                  -16 020€
                </div>
              </div>
            </Card>

            <div className="text-center mt-12">
              <div className="font-inter text-2xl text-white/80">
                Et si l'IA comparait automatiquement en 2 minutes avec <span className="text-spider-cyan font-bold">0 erreur</span> ?
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: KPI DASHBOARD */}
        <section className="px-4 py-20 bg-gradient-to-b from-transparent to-spider-cyan/5">
          <div className="container mx-auto max-w-7xl">
            <h2 className="font-orbitron text-4xl md:text-5xl font-black text-white mb-12 text-center">
              ⚡ La Transformation par l'IA
            </h2>

            {/* KPIs */}
            <div className="grid md:grid-cols-4 gap-6">
              {/* KPI 1: Temps de Comparaison */}
              <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-spider-cyan/30 p-6">
                <CardHeader>
                  <CardTitle className="font-orbitron text-xl text-spider-cyan">Temps de Comparaison</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="text-white/70 mb-1">Avant</div>
                    <div className="w-full bg-red-700 rounded-full h-4">
                      <div className="bg-spider-red h-4 rounded-full w-full animate-pulse" />
                    </div>
                    <div className="text-white/80 font-orbitron text-2xl mt-1">45 min</div>
                  </div>
                  <div>
                    <div className="text-white/70 mb-1">Après</div>
                    <div className="w-full bg-green-700 rounded-full h-4">
                      <div className="bg-emerald-400 h-4 rounded-full w-[4%] transition-all" />
                    </div>
                    <div className="text-white/80 font-orbitron text-2xl mt-1">2 min</div>
                  </div>
                  <div className="mt-4 text-white/60 text-sm">Économie : -96% de temps</div>
                </CardContent>
              </Card>

              {/* KPI 2: Taux d'Erreur */}
              <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-orange-500/30 p-6">
                <CardHeader>
                  <CardTitle className="font-orbitron text-xl text-orange-400">Taux d'Erreur</CardTitle>
                </CardHeader>
                <CardContent className="flex justify-center items-center gap-6">
                  <div className="relative w-20 h-20">
                    <svg viewBox="0 0 36 36" className="w-full h-full">
                      <circle
                        className="text-gray-700"
                        strokeWidth="3"
                        stroke="currentColor"
                        fill="none"
                        cx="18"
                        cy="18"
                        r="15"
                      />
                      <circle
                        className="text-orange-400"
                        strokeWidth="3"
                        strokeDasharray="18 82"
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="none"
                        cx="18"
                        cy="18"
                        r="15"
                        style={{ transition: "stroke-dasharray 1s ease" }}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center font-orbitron text-orange-400 font-black text-xl">
                      18%
                    </div>
                  </div>
                  <div className="relative w-20 h-20">
                    <svg viewBox="0 0 36 36" className="w-full h-full">
                      <circle
                        className="text-gray-700"
                        strokeWidth="3"
                        stroke="currentColor"
                        fill="none"
                        cx="18"
                        cy="18"
                        r="15"
                      />
                      <circle
                        className="text-emerald-400"
                        strokeWidth="3"
                        strokeDasharray="0 100"
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="none"
                        cx="18"
                        cy="18"
                        r="15"
                        style={{ transition: "stroke-dasharray 1s ease" }}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center font-orbitron text-emerald-400 font-black text-xl">
                      0%
                    </div>
                  </div>
                </CardContent>
                <div className="text-center text-white/60 mt-4 text-sm">Gain : 100% de fiabilité</div>
              </Card>

              {/* KPI 3: Litiges Oubliés */}
              <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-purple-500/30 p-6">
                <CardHeader>
                  <CardTitle className="font-orbitron text-xl text-purple-400">Litiges Oubliés</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="font-orbitron text-4xl text-white mb-2">21</div>
                  <div className="text-white/70 mb-4">litiges/an (120 biens × 18%)</div>
                  <div className="font-orbitron text-4xl text-emerald-400 mb-2">0</div>
                  <div className="text-white/70">litige</div>
                  <div className="mt-4 text-emerald-400 font-bold">Économie : 9 720€/an évités</div>
                  <div className="mt-2 text-emerald-400 text-3xl">✅</div>
                </CardContent>
              </Card>

              {/* KPI 4: ROI Mensuel */}
              <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-emerald-500/30 p-6">
                <CardHeader>
                  <CardTitle className="font-orbitron text-xl text-emerald-400">ROI Mensuel</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 text-white/80 text-sm mb-4">
                    <div>Gain temps :</div>
                    <div className="font-orbitron text-2xl text-emerald-400 font-black">+516€/mois</div>
                    <div>Gain litiges évités :</div>
                    <div className="font-orbitron text-2xl text-emerald-400 font-black">+810€/mois</div>
                    <div>Total :</div>
                    <div className="font-orbitron text-2xl text-emerald-400 font-black">+1 326€/mois</div>
                    <div>Payback :</div>
                    <div className="font-orbitron text-2xl text-emerald-400 font-black">11 jours</div>
                  </div>
                  <div className="text-center text-emerald-400 font-bold text-lg animate-pulse">🚀</div>
                </CardContent>
              </Card>
            </div>

            {/* Impact global */}
            <Card className="bg-gradient-to-br from-spider-cyan/20 to-gray-900 border-spider-cyan p-6 mt-12">
              <h3 className="font-orbitron text-2xl text-spider-cyan mb-6 text-center">📊 Pour 120 biens avec 2 états/an :</h3>
              <ul className="grid md:grid-cols-2 gap-4 text-white/80 text-sm max-w-xl mx-auto">
                <li>• 86h économisées par an</li>
                <li>• 0 erreur vs 21 litiges évités</li>
                <li>• +15 900€ net par an</li>
                <li>• 1 demi ETP économisé</li>
              </ul>
            </Card>
          </div>
        </section>

        {/* SECTION 3: DÉMO INTERACTIVE */}
        <section className="px-4 py-20">
          <div className="container mx-auto max-w-7xl">
            <h2 className="font-orbitron text-4xl md:text-5xl font-black text-white mb-12 text-center">
              🎯 Démo : Comparez 2 États des Lieux en Direct
            </h2>

            <InteractiveComparison />
          </div>
        </section>

        {/* SECTION 4: TABLEAU HISTORIQUE */}
        <section className="px-4 py-20 bg-gradient-to-b from-spider-cyan/5 to-transparent">
          <div className="container mx-auto max-w-7xl">
            <h2 className="font-orbitron text-4xl md:text-5xl font-black text-white mb-12 text-center">
              📋 Historique des Comparaisons
            </h2>

            <EDLComparisonTable />
          </div>
        </section>

        {/* SECTION 6: WORKFLOW */}
        <section className="px-4 py-20">
          <div className="container mx-auto max-w-7xl">
            <h2 className="font-orbitron text-4xl md:text-5xl font-black text-white mb-12 text-center">
              🔄 Le Workflow Automatique Complet
            </h2>

            <EDLWorkflowDiagram />
          </div>
        </section>

        {/* SECTION 7: EXEMPLES DÉTECTION IA */}
        <section className="px-4 py-20 bg-gradient-to-b from-transparent to-purple-950/20">
          <div className="container mx-auto max-w-7xl">
            <h2 className="font-orbitron text-4xl md:text-5xl font-black text-white mb-12 text-center">
              🎯 Ce Que l'IA Détecte Automatiquement
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {edlMockData.detectionExamples.map((example) => (
                <DetectionExample key={example.id} {...example} />
              ))}
            </div>

            <Card className="bg-gradient-to-br from-gray-900 to-black border-spider-cyan/30 p-8">
              <h3 className="font-orbitron text-2xl text-white mb-4">🤖 L'IA analyse :</h3>
              <ul className="grid md:grid-cols-2 gap-3 text-white/80">
                <li>• État général (propre/sale)</li>
                <li>• Dégradations visibles (trous, fissures, taches)</li>
                <li>• Équipements cassés/manquants</li>
                <li>• Usure normale vs anormale (selon durée location)</li>
                <li>• Conformité avec photos d'entrée</li>
                <li>• Calcul montant selon barème officiel</li>
              </ul>
            </Card>
          </div>
        </section>

        {/* SECTION 8: CONFORMITÉ LÉGALE */}
        <section className="px-4 py-20">
          <div className="container mx-auto max-w-6xl">
            <h2 className="font-orbitron text-4xl md:text-5xl font-black text-white mb-12 text-center">
              ⚖️ 100% Conforme Loi ALUR
            </h2>

            <Card className="bg-gradient-to-br from-emerald-500/10 to-gray-900 border-emerald-500/30 p-8 mb-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="px-6 py-3 bg-emerald-500/20 border border-emerald-500 rounded-full">
                  <span className="font-orbitron text-emerald-400 font-black text-lg">✅ CERTIFIÉ CONFORME</span>
                </div>
                <span className="text-white/60">Loi du 24 Mars 2014</span>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Inventaire détaillé pièce par pièce obligatoire",
                  "État des équipements (électroménager, chauffage, etc.)",
                  "État des revêtements (sol, murs, plafond)",
                  "Relevés compteurs (eau, gaz, électricité)",
                  "Nombre et état des clés remises",
                  "Photos annexées horodatées",
                  "Signatures électroniques valides juridiquement",
                  "Envoi recommandé électronique (valeur probante)",
                  "Archivage 10 ans minimum",
                  "Justification détaillée retenues (opposable tribunal)"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-white/80">
                    <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </Card>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-white/10 p-6">
                <h3 className="font-orbitron text-xl text-white mb-4">📜 Ce que dit la loi</h3>
                <ul className="space-y-3 text-sm text-white/80">
                  <li>• <strong>Article 3 Loi ALUR :</strong> "État des lieux contradictoire obligatoire"</li>
                  <li>• <strong>Décret 2016-382 :</strong> "Modèle type obligatoire"</li>
                  <li>• <strong>Article 7c Loi 89-462 :</strong> "Restitution caution sous 1 mois (ou 2 mois si dégradations)"</li>
                  <li>• <strong>Barème retenue caution :</strong> "Vétusté prise en compte selon durée location"</li>
                </ul>
              </Card>

              <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-white/10 p-6">
                <h3 className="font-orbitron text-xl text-white mb-4">🛡️ Comment Spydercom garantit la conformité</h3>
                <ul className="space-y-3 text-sm text-white/80">
                  <li>• Template rapport = modèle officiel ALUR</li>
                  <li>• Calcul vétusté automatique selon grille légale</li>
                  <li>• Horodatage blockchain (opposabilité maximale)</li>
                  <li>• Signature électronique qualifiée (eIDAS)</li>
                  <li>• Archivage crypté 10 ans</li>
                  <li>• Export format tribunal (si litige)</li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* SECTION 11: CALCULATEUR ROI */}
        <section className="px-4 py-20 bg-gradient-to-b from-spider-red/5 to-transparent">
          <div className="container mx-auto max-w-5xl">
            <h2 className="font-orbitron text-4xl md:text-5xl font-black text-white mb-12 text-center">
              💰 Calculez Vos Économies
            </h2>

            <EDLROICalculator />
          </div>
        </section>

        {/* SECTION 12: TARIFS */}
        <section className="px-4 py-20">
          <div className="container mx-auto max-w-6xl">
            <h2 className="font-orbitron text-4xl md:text-5xl font-black text-white mb-4 text-center">
              💎 Tarifs Transparents
            </h2>
            <p className="text-center text-white/60 text-xl mb-12">
              Choisissez la formule adaptée à votre volume
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {pricingPlans.map((plan, index) => (
                <Card
                  key={index}
                  className={`bg-gradient-to-br from-gray-900 to-gray-800 border-2 ${
                    plan.highlighted
                      ? 'border-spider-cyan shadow-[0_0_60px_rgba(180,235,245,0.3)] scale-105'
                      : 'border-white/10'
                  } relative`}
                >
                  {plan.highlighted && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-spider-cyan to-blue-500 rounded-full">
                      <span className="font-inter font-black text-black text-sm">{plan.badge}</span>
                    </div>
                  )}
                  <CardHeader className="text-center">
                    {!plan.highlighted && plan.badge && (
                      <div className="text-sm text-white/60 mb-2">{plan.badge}</div>
                    )}
                    <CardTitle className="font-orbitron text-2xl text-white mb-4">
                      {plan.name}
                    </CardTitle>
                    <div className="space-y-1">
                      <div className="font-orbitron text-5xl font-black text-white">
                        {plan.price}
                      </div>
                      <div className="font-inter text-white/60">{plan.period}</div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 font-inter text-white/80">
                          <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      className={`w-full ${
                        plan.highlighted
                          ? 'bg-gradient-to-r from-spider-cyan to-blue-500 text-black hover:shadow-lg hover:shadow-spider-cyan/50'
                          : 'bg-white/10 text-white hover:bg-white/20'
                      }`}
                    >
                      {plan.price === "Sur devis" ? "Nous contacter" : "Choisir ce plan"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 13: FAQ */}
        <section className="px-4 py-20 bg-gradient-to-b from-transparent to-purple-950/20">
          <div className="container mx-auto max-w-4xl">
            <h2 className="font-orbitron text-4xl md:text-5xl font-black text-white mb-12 text-center">
              ❓ Questions Fréquentes
            </h2>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-gradient-to-br from-gray-900 to-gray-800 border border-white/10 rounded-lg px-6"
                >
                  <AccordionTrigger className="text-white hover:text-spider-cyan font-inter text-lg">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-white/80 font-inter">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* SECTION 14: TÉMOIGNAGES */}
        <section className="px-4 py-20">
          <div className="container mx-auto max-w-6xl">
            <h2 className="font-orbitron text-4xl md:text-5xl font-black text-white mb-12 text-center">
              ⭐ Ils Utilisent l'Outil Tous les Jours
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {edlMockData.testimonials.map((testimonial, idx) => (
                <Card key={idx} className="bg-gradient-to-br from-gray-900 to-gray-800 border-white/10 p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400">⭐</span>
                    ))}
                  </div>
                  <p className="text-white/80 italic mb-6">"{testimonial.quote}"</p>
                  <div className="border-t border-white/10 pt-4">
                    <div className="font-bold text-white">{testimonial.name}</div>
                    <div className="text-sm text-white/60">{testimonial.position}</div>
                    <div className="text-sm text-white/60">{testimonial.company}</div>
                    <div className="text-xs text-spider-cyan mt-2">{testimonial.stats}</div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 15: OUTILS COMPLÉMENTAIRES */}
        <section className="px-4 py-20 bg-gradient-to-b from-spider-cyan/5 to-transparent">
          <div className="container mx-auto max-w-4xl">
            <h2 className="font-orbitron text-3xl text-white mb-8 text-center">
              🔗 Outils Complémentaires
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <Link to="/gestion-locative">
                <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-spider-cyan/30 p-6 hover:border-spider-cyan transition-all group">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl">🏘️</div>
                    <ArrowRight className="w-5 h-5 text-spider-cyan group-hover:translate-x-1 transition-transform" />
                  </div>
                  <h3 className="font-orbitron text-xl text-white mb-2">Gestion Locative Automatisée</h3>
                  <p className="text-white/60">Gérez incidents, loyers, quittances</p>
                </Card>
              </Link>

              <Link to="/emails-relances">
                <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-spider-red/30 p-6 hover:border-spider-red transition-all group">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl">📧</div>
                    <ArrowRight className="w-5 h-5 text-spider-red group-hover:translate-x-1 transition-transform" />
                  </div>
                  <h3 className="font-orbitron text-xl text-white mb-2">Emails & Relances Auto</h3>
                  <p className="text-white/60">Relancez automatiquement après chaque étape</p>
                </Card>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <CTABooking 
          subtitle="Testez la comparaison IA sur un vrai état des lieux en démo live"
        />
      </main>

      <Footer />
    </div>
  );
};

export default ComparateurEtatsLieux;
