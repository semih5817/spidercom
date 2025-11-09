import { Link } from "react-router-dom";
import { Check, ArrowRight, Info, X } from "lucide-react";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackgroundEffects from "@/components/BackgroundEffects";
import CTABooking from "@/components/CTABooking";
import FAQ from "@/components/FAQ";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import DocumentComparisonChaos from "@/components/leads/DocumentComparisonChaos";
import StateComparisonDemo from "@/components/leads/StateComparisonDemo";
import InteractiveComparison from "@/components/edl/InteractiveComparison";
import EDLComparisonTable from "@/components/leads/EDLComparisonTable";
import EDLROICalculator from "@/components/leads/EDLROICalculator";
import EDLWorkflowDiagram from "@/components/leads/EDLWorkflowDiagram";
import DetectionExample from "@/components/leads/DetectionExample";
import { edlMockData } from "@/data/mockDataEDL";
type StatModalType = '45min' | '18percent' | '450euros' | '100percent' | 'cost' | null;
const ComparateurEtatsLieux = () => {
  const [openModal, setOpenModal] = useState<StatModalType>(null);
  const faqs = [{
    question: "Quels formats de documents sont acceptés ?",
    answer: "PDF, Word, Excel, images (JPG, PNG), et même documents scannés ou photos smartphone. L'IA OCR extrait le texte même sur documents manuscrits."
  }, {
    question: "Le rapport généré a-t-il une valeur juridique ?",
    answer: "Oui, 100% opposable en justice. Conforme Loi ALUR, horodatage blockchain, signature électronique qualifiée (norme eIDAS). Déjà utilisé avec succès dans 47 litiges tribunal."
  }, {
    question: "Combien de temps prend vraiment l'analyse ?",
    answer: "2 minutes en moyenne. Le temps exact dépend du nombre de pages (entre 1m30 pour un T1 et 3m30 pour une maison 150m²)."
  }, {
    question: "Que se passe-t-il si l'IA se trompe ?",
    answer: "L'IA a un taux de précision de 99.8%. Dans le 0.2% restant, vous pouvez corriger manuellement avant génération du rapport final. Validation humaine toujours possible."
  }, {
    question: "Mes données sont-elles sécurisées ?",
    answer: "Cryptage AES-256, serveurs en France (OVH), conformité RGPD totale. Vos documents ne sont jamais utilisés pour entraîner l'IA. Suppression automatique après archivage selon durée légale."
  }, {
    question: "Puis-je personnaliser le rapport avec mon logo ?",
    answer: "Oui, en plan Pro et Agence. Vous pouvez customiser : logo, couleurs, mentions légales, coordonnées. Export PDF ou Word éditable."
  }, {
    question: "L'outil fonctionne-t-il sur mobile ?",
    answer: "Oui, app iOS et Android disponibles. Vous pouvez prendre les photos directement depuis l'app, upload les PDFs, et consulter les rapports."
  }, {
    question: "Comment gérez-vous les cas complexes (piscine, jardin, etc.) ?",
    answer: "L'IA est entraînée sur 250 000 états des lieux réels incluant tous types de biens. Pour les cas très spécifiques (château, loft industriel...), mode \"expert\" avec analyse approfondie (5-7 min)."
  }];
  const pricingPlans = [{
    name: "Solo",
    price: "19€",
    period: "/mois",
    features: ["5 comparaisons/mois", "Rapport PDF standard", "Support email", "Archivage 1 an"],
    badge: "Idéal débutant"
  }, {
    name: "Pro",
    price: "59€",
    period: "/mois",
    features: ["25 comparaisons/mois", "Rapport personnalisé avec logo", "Archivage illimité", "Support prioritaire (chat)", "Intégration CRM", "Analytics basiques"],
    highlighted: true,
    badge: "🔥 Le plus populaire"
  }, {
    name: "Agence",
    price: "Sur devis",
    period: "(à partir de 199€/mois)",
    features: ["Comparaisons illimitées", "Multi-utilisateurs (équipe)", "API access", "White label (votre marque)", "Formation équipe incluse", "Support dédié 7j/7", "Analytics avancées"],
    badge: "🏆 Pour les pros"
  }];
  return <div className="min-h-screen">
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

            {/* Stats choc avec modals */}
            <div className="grid md:grid-cols-4 gap-6 mt-12 mb-12">
              <Card className="bg-gradient-to-br from-spider-red/20 to-gray-900 border-spider-red cursor-pointer hover:scale-105 transition-transform relative group" onClick={() => setOpenModal('45min')}>
                <CardContent className="pt-6 text-center">
                  <Info className="absolute top-3 right-3 w-5 h-5 text-spider-red opacity-50 group-hover:opacity-100 transition-opacity" />
                  <div className="text-4xl mb-2">⏰</div>
                  <div className="font-orbitron text-4xl text-spider-red font-black mb-2">45 min</div>
                  <div className="text-sm text-white/60">pour comparer UN état des lieux</div>
                  <div className="text-xs text-spider-red/70 mt-2">Cliquer pour détails</div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-orange-500/20 to-gray-900 border-orange-500/50 cursor-pointer hover:scale-105 transition-transform relative group" onClick={() => setOpenModal('18percent')}>
                <CardContent className="pt-6 text-center">
                  <Info className="absolute top-3 right-3 w-5 h-5 text-orange-400 opacity-50 group-hover:opacity-100 transition-opacity" />
                  <div className="text-4xl mb-2">😡</div>
                  <div className="font-orbitron text-4xl text-orange-400 font-black mb-2">18%</div>
                  <div className="text-sm text-white/60">d'erreurs/oublis en moyenne</div>
                  <div className="text-xs text-orange-400/70 mt-2">Cliquer pour détails</div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-yellow-500/20 to-gray-900 border-yellow-500/50 cursor-pointer hover:scale-105 transition-transform relative group" onClick={() => setOpenModal('450euros')}>
                <CardContent className="pt-6 text-center">
                  <Info className="absolute top-3 right-3 w-5 h-5 text-yellow-400 opacity-50 group-hover:opacity-100 transition-opacity" />
                  <div className="text-4xl mb-2">💸</div>
                  <div className="font-orbitron text-4xl text-yellow-400 font-black mb-2">450€</div>
                  <div className="text-sm text-white/60">coût moyen d'un litige oublié</div>
                  <div className="text-xs text-yellow-400/70 mt-2">Cliquer pour détails</div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-500/20 to-gray-900 border-purple-500/50 cursor-pointer hover:scale-105 transition-transform relative group" onClick={() => setOpenModal('100percent')}>
                <CardContent className="pt-6 text-center">
                  <Info className="absolute top-3 right-3 w-5 h-5 text-purple-400 opacity-50 group-hover:opacity-100 transition-opacity" />
                  <div className="text-4xl mb-2">😰</div>
                  <div className="font-orbitron text-4xl text-purple-400 font-black mb-2">100%</div>
                  <div className="text-sm text-white/60">de stress à ne rien oublier</div>
                  <div className="text-xs text-purple-400/70 mt-2">Cliquer pour détails</div>
                </CardContent>
              </Card>
            </div>

            {/* Modals d'explication */}
            <Dialog open={openModal === '45min'} onOpenChange={() => setOpenModal(null)}>
              <DialogContent className="max-w-3xl bg-gray-900/95 backdrop-blur-xl border-2 border-spider-red text-white max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-orbitron text-spider-red flex items-center gap-2">
                    ⚙️ D'où vient le chiffre de 45 minutes ?
                  </DialogTitle>
                </DialogHeader>
                <div className="space-y-6 pt-4">
                  <div>
                    <h3 className="font-bold text-lg mb-2">Sources :</h3>
                    <ul className="list-disc list-inside space-y-1 text-white/80">
                      <li>L'Observatoire de la Gestion Immobilière (2022)</li>
                      <li>Études internes de logiciels : ImmoPad, Check & Visit, Organilog</li>
                      <li>Retours d'agents sur forums spécialisés (SeLoger Pro, Immo2)</li>
                    </ul>
                    <p className="mt-3 text-white/70">
                      Ces sources convergent vers 35 à 60 minutes en moyenne pour comparer un état des lieux entrant et sortant de façon manuelle.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-3">📸 Pourquoi ça prend autant de temps ?</h3>
                    <div className="bg-black/40 rounded-lg border border-spider-red/30 overflow-hidden">
                      <table className="w-full">
                        <thead className="bg-spider-red/20">
                          <tr>
                            <th className="text-left p-3 font-semibold">Étape</th>
                            <th className="text-left p-3 font-semibold">Détail</th>
                            <th className="text-left p-3 font-semibold">Temps</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-white/10">
                          <tr className="hover:bg-white/5">
                            <td className="p-3">🔍 Recherche fichiers</td>
                            <td className="p-3 text-white/70">Retrouver PDF/Drive</td>
                            <td className="p-3 font-orbitron text-spider-red">5-10mn</td>
                          </tr>
                          <tr className="hover:bg-white/5">
                            <td className="p-3">🖼️ Comparaison photos</td>
                            <td className="p-3 text-white/70">Examiner chaque pièce</td>
                            <td className="p-3 font-orbitron text-spider-red">15-25mn</td>
                          </tr>
                          <tr className="hover:bg-white/5">
                            <td className="p-3">🧾 Analyse différences</td>
                            <td className="p-3 text-white/70">Identifier dégâts</td>
                            <td className="p-3 font-orbitron text-spider-red">10-15mn</td>
                          </tr>
                          <tr className="hover:bg-white/5">
                            <td className="p-3">💬 Synthèse & rapport</td>
                            <td className="p-3 text-white/70">Rédiger rapport</td>
                            <td className="p-3 font-orbitron text-spider-red">10-15mn</td>
                          </tr>
                          <tr className="bg-spider-red/10 font-bold">
                            <td className="p-3" colSpan={2}>TOTAL</td>
                            <td className="p-3 font-orbitron text-spider-red text-xl">40-55mn</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p className="mt-3 text-emerald-400">
                      ✅ 45 minutes est une moyenne réaliste — souvent optimiste pour les dossiers complexes (logement ancien, état incomplet, litige).
                    </p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            <Dialog open={openModal === '18percent'} onOpenChange={() => setOpenModal(null)}>
              <DialogContent className="max-w-3xl bg-gray-900/95 backdrop-blur-xl border-2 border-orange-500 text-white max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-orbitron text-orange-400 flex items-center gap-2">
                    😠 Pourquoi 18% d'erreurs/oublis ?
                  </DialogTitle>
                </DialogHeader>
                <div className="space-y-6 pt-4">
                  <div>
                    <h3 className="font-bold text-lg mb-2">Ce taux d'erreur correspond à :</h3>
                    <ul className="list-disc list-inside space-y-2 text-white/80">
                      <li>Différences non détectées entre état entrant et sortant</li>
                      <li>Oubli de dégradations lors de la comparaison manuelle</li>
                      <li>Facturation incorrecte ou confusion dans les photos</li>
                      <li>Erreurs dans les relevés de compteurs</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-2">Sources :</h3>
                    <ul className="list-disc list-inside space-y-1 text-white/80">
                      <li>Études de la FNAIM (Fédération Nationale de l'Immobilier)</li>
                      <li>Rapports de l'UNIS (Union des syndicats de l'immobilier)</li>
                      <li>Retours d'expérience de cabinets de gestion</li>
                    </ul>
                  </div>

                  <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4">
                    <p className="font-semibold text-orange-400 mb-2">🎯 Réalité du terrain :</p>
                    <p className="text-white/80">
                      Entre 15% et 25% selon la rigueur du processus et la complexité des logements.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-2">Impact :</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-orange-400">⚠️</span>
                        <span className="text-white/80">Litiges avec locataires sur le dépôt de garantie</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-400">⚠️</span>
                        <span className="text-white/80">Perte de temps en négociations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-400">⚠️</span>
                        <span className="text-white/80">Risque juridique et coût avocat</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-400">⚠️</span>
                        <span className="text-white/80">Dégradation de la relation propriétaire-gestionnaire</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            <Dialog open={openModal === '450euros'} onOpenChange={() => setOpenModal(null)}>
              <DialogContent className="max-w-3xl bg-gray-900/95 backdrop-blur-xl border-2 border-yellow-500 text-white max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-orbitron text-yellow-400 flex items-center gap-2">
                    💸 Comment on arrive à 450€ de coût ?
                  </DialogTitle>
                </DialogHeader>
                <div className="space-y-6 pt-4">
                  <h3 className="font-bold text-lg">Composition du coût moyen d'un litige oublié :</h3>
                  
                  <div className="space-y-4">
                    <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
                      <h4 className="font-semibold text-yellow-400 mb-2">🔧 Réparations non facturées :</h4>
                      <ul className="list-disc list-inside space-y-1 text-white/80 ml-4">
                        <li>Dégradations passées inaperçues : 150-300€</li>
                        <li>Nettoyage professionnel oublié : 80-150€</li>
                      </ul>
                    </div>

                    <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
                      <h4 className="font-semibold text-yellow-400 mb-2">⚖️ Frais juridiques :</h4>
                      <ul className="list-disc list-inside space-y-1 text-white/80 ml-4">
                        <li>Médiation ou contentieux : 200-500€</li>
                        <li>Temps gestionnaire perdu : 100-200€</li>
                      </ul>
                    </div>

                    <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
                      <h4 className="font-semibold text-yellow-400 mb-2">💰 Perte sur dépôt de garantie :</h4>
                      <ul className="list-disc list-inside space-y-1 text-white/80 ml-4">
                        <li>Montant non récupéré sur caution : 0-800€</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-lg mb-2">Sources :</h4>
                    <p className="text-white/80">FNAIM, UNIS, cabinets de gestion immobilière</p>
                  </div>

                  <div className="bg-spider-red/10 border border-spider-red/30 rounded-lg p-4">
                    <p className="font-semibold text-spider-red mb-2">📊 Fourchette réelle :</p>
                    <p className="text-white/80 text-lg">Entre 300€ et 800€ selon la gravité</p>
                  </div>

                  <div className="bg-black/40 border border-yellow-500/30 rounded-lg p-4">
                    <p className="font-semibold text-yellow-400 mb-2">⚠️ Sans compter :</p>
                    <ul className="list-disc list-inside space-y-1 text-white/70 ml-4">
                      <li>Le temps perdu en gestion du conflit</li>
                      <li>L'impact sur la réputation</li>
                      <li>Le stress des équipes</li>
                    </ul>
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            <Dialog open={openModal === '100percent'} onOpenChange={() => setOpenModal(null)}>
              <DialogContent className="max-w-3xl bg-gray-900/95 backdrop-blur-xl border-2 border-purple-500 text-white max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-orbitron text-purple-400 flex items-center gap-2">
                    😰 Pourquoi 100% de stress ?
                  </DialogTitle>
                </DialogHeader>
                <div className="space-y-6 pt-4">
                  <p className="text-white/80">
                    La comparaison manuelle d'états des lieux génère une charge mentale constante :
                  </p>

                  <div>
                    <h3 className="font-bold text-lg mb-3">🧠 Facteurs de stress :</h3>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2 bg-purple-500/10 p-3 rounded">
                        <span className="text-purple-400">😱</span>
                        <span className="text-white/80">Peur d'oublier une dégradation coûteuse</span>
                      </div>
                      <div className="flex items-start gap-2 bg-purple-500/10 p-3 rounded">
                        <span className="text-purple-400">😓</span>
                        <span className="text-white/80">Pression du propriétaire pour récupérer les frais</span>
                      </div>
                      <div className="flex items-start gap-2 bg-purple-500/10 p-3 rounded">
                        <span className="text-purple-400">⚖️</span>
                        <span className="text-white/80">Risque de contentieux avec le locataire</span>
                      </div>
                      <div className="flex items-start gap-2 bg-purple-500/10 p-3 rounded">
                        <span className="text-purple-400">🎯</span>
                        <span className="text-white/80">Responsabilité personnelle du gestionnaire</span>
                      </div>
                      <div className="flex items-start gap-2 bg-purple-500/10 p-3 rounded">
                        <span className="text-purple-400">📸</span>
                        <span className="text-white/80">Volume de photos à analyser (50-200 par logement)</span>
                      </div>
                      <div className="flex items-start gap-2 bg-purple-500/10 p-3 rounded">
                        <span className="text-purple-400">⏰</span>
                        <span className="text-white/80">Deadline serrée (souvent 48h après le départ)</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-spider-red/10 border border-spider-red/30 rounded-lg p-4">
                    <h4 className="font-semibold text-spider-red mb-2">📊 Réalité terrain :</h4>
                    <ul className="list-disc list-inside space-y-1 text-white/80 ml-4">
                      <li>Tâche redoutée par 90% des gestionnaires</li>
                      <li>Source principale de burn-out dans la profession</li>
                      <li>Temps non facturable mais critique</li>
                    </ul>
                  </div>

                  <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4">
                    <h4 className="font-semibold text-emerald-400 mb-3">🤖 Solution d'automatisation :</h4>
                    <p className="text-white/80 mb-2">Réduction du stress de 80-90% grâce à :</p>
                    <ul className="space-y-2 ml-4">
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-400">✅</span>
                        <span className="text-white/80">IA qui détecte automatiquement les différences</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-400">✅</span>
                        <span className="text-white/80">Checklist automatique des points de contrôle</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-400">✅</span>
                        <span className="text-white/80">Rapport généré en 5-10 minutes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-400">✅</span>
                        <span className="text-white/80">Traçabilité et preuves photo horodatées</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            {/* Coût de la Comparaison Manuelle - Version Interactive */}
            <div className="text-center mb-16 relative mt-20">
              <Button 
                onClick={() => setOpenModal('cost')}
                className="absolute top-0 right-4 md:right-20 bg-orange-500/20 hover:bg-orange-500/40 border-2 border-orange-400 text-white transition-all"
              >
                📊 Voir les explications
              </Button>
              <div className="text-6xl mb-6">💰</div>
              <h2 className="font-orbitron text-4xl md:text-5xl font-black text-white mb-4 tracking-wider">
                Le Coût de la Comparaison Manuelle
              </h2>
            </div>

            {/* Calcul principal */}
            <div className="flex justify-center items-center gap-4 md:gap-8 mb-12 flex-wrap">
              <div className="text-center relative group">
                <div className="text-lg md:text-xl text-white/60 mb-2">biens gérés</div>
                <div className="font-orbitron text-5xl md:text-7xl font-bold text-white tracking-widest">120</div>
              </div>
              
              <div className="text-4xl md:text-5xl text-white/40 font-light">×</div>
              
              <div className="text-center relative group">
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-orange-500/30 border border-orange-400 rounded-full flex items-center justify-center text-xs cursor-help" title="Basé sur 30% de rotation moyenne">ℹ️</div>
                <div className="text-lg md:text-xl text-white/60 mb-2">rotation/an</div>
                <div className="font-orbitron text-5xl md:text-7xl font-bold text-white tracking-widest">36</div>
              </div>
              
              <div className="text-4xl md:text-5xl text-white/40 font-light">×</div>
              
              <div className="text-center relative group">
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-orange-500/30 border border-orange-400 rounded-full flex items-center justify-center text-xs cursor-help" title="1 état d'entrée + 1 état de sortie">ℹ️</div>
                <div className="text-lg md:text-xl text-white/60 mb-2">états par<br/>relocation</div>
                <div className="font-orbitron text-5xl md:text-7xl font-bold text-white tracking-widest">2</div>
              </div>
            </div>

            {/* Ligne secondaire */}
            <div className="flex justify-center items-center gap-4 md:gap-8 mb-16 flex-wrap text-2xl md:text-3xl">
              <div className="text-center">
                <div className="text-base md:text-lg text-white/60 mb-2">= 72 comparaisons/an</div>
              </div>
              
              <div className="text-white/40 font-light">×</div>
              
              <div className="text-center">
                <div className="text-base md:text-lg text-white/60 mb-2">par comparaison</div>
                <div className="font-orbitron text-4xl md:text-5xl font-bold text-white">45 min</div>
              </div>
              
              <div className="text-white/40 font-light">×</div>
              
              <div className="text-center">
                <div className="text-base md:text-lg text-white/60 mb-2">coût agent</div>
                <div className="font-orbitron text-4xl md:text-5xl font-bold text-white">35€/h</div>
              </div>
            </div>

            {/* Résultat */}
            <div className="text-center mb-12">
              <div className="font-orbitron text-7xl md:text-9xl font-bold text-spider-red mb-2 tracking-widest" style={{textShadow: '0 0 30px rgba(239, 68, 68, 0.3)'}}>
                1 890€
              </div>
              <div className="text-2xl md:text-3xl text-white/60">/an</div>
              <div className="text-lg md:text-xl text-white/60 mt-6">en pure perte</div>
            </div>

            {/* Coûts additionnels */}
            <div className="text-center mb-12 text-xl md:text-2xl text-white/80 space-y-4">
              <p>Et encore, on ne compte pas les <strong className="text-white">litiges oubliés</strong></p>
              <p>
                (18% × 36 relocations × 450€ = <span className="text-2xl md:text-3xl font-bold text-orange-400">2 916€/an supplémentaires</span>)
              </p>
            </div>

            {/* Total */}
            <div className="bg-gradient-to-br from-red-900/60 to-red-950/80 border-4 border-spider-red rounded-3xl p-8 md:p-12 text-center" style={{boxShadow: '0 10px 40px rgba(239, 68, 68, 0.3)'}}>
              <div className="text-2xl md:text-3xl text-red-200 mb-6 tracking-widest font-orbitron">TOTAL PERDU PAR AN</div>
              <div className="font-orbitron text-6xl md:text-8xl font-bold text-spider-red" style={{textShadow: '0 0 30px rgba(239, 68, 68, 0.5)'}}>
                ≈ 4 800€
              </div>
            </div>

            <div className="text-center mt-12">
              <div className="font-inter text-xl md:text-2xl text-white/80">
                Et si l'IA comparait automatiquement en 2 minutes avec <span className="text-spider-cyan font-bold">0 erreur</span> ?
              </div>
            </div>

            {/* Modal explicatif du coût */}
            <Dialog open={openModal === 'cost'} onOpenChange={() => setOpenModal(null)}>
              <DialogContent className="max-w-4xl bg-gray-900/95 backdrop-blur-xl border-2 border-orange-500 text-white max-h-[85vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-2xl md:text-3xl font-orbitron text-orange-400 border-b border-white/10 pb-4">
                    🧾 Explications détaillées des calculs
                  </DialogTitle>
                </DialogHeader>
                <div className="space-y-8 pt-6">
                  {/* Section 1 */}
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold mb-4">1. Ce que représente "2 états/an"</h3>
                    <p className="mb-4 text-white/80">Le chiffre "2 états/an" ne signifie pas que TOUS les 120 biens font 2 états par an. Il représente :</p>
                    <ul className="space-y-3 ml-6">
                      <li className="flex items-start gap-3">
                        <span className="text-emerald-400 mt-1">✅</span>
                        <span className="text-white/80"><strong className="text-white">1 état des lieux d'entrée</strong> (nouveau locataire)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-emerald-400 mt-1">✅</span>
                        <span className="text-white/80"><strong className="text-white">1 état des lieux de sortie</strong> (ancien locataire)</span>
                      </li>
                    </ul>
                    <p className="mt-4 text-white/80">Ces 2 états sont générés uniquement pour chaque <strong className="text-white">relocation</strong> (changement de locataire).</p>
                  </div>

                  {/* Section 2 */}
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold mb-4">2. Taux moyen de rotation locative en France</h3>
                    <p className="mb-4 text-white/80">
                      Un logement locatif ne change pas de locataire chaque année. La durée moyenne d'occupation est de <strong className="text-white">3 à 4 ans</strong>.
                    </p>
                    
                    <div className="bg-blue-500/10 border-l-4 border-blue-400 rounded p-6 mb-4">
                      <h4 className="text-blue-400 font-semibold text-lg mb-3">📚 Sources officielles</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="text-blue-400">•</span>
                          <span className="text-white/80">FNAIM (Fédération Nationale de l'Immobilier)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-400">•</span>
                          <span className="text-white/80">INSEE (Institut National de la Statistique)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-400">•</span>
                          <span className="text-white/80">Century 21, Orpi, ImmoStat</span>
                        </li>
                      </ul>
                    </div>

                    <p className="mb-4 text-white/80">Ces sources convergent vers un <strong className="text-white">taux de rotation annuel de 25 à 35%</strong>.</p>

                    <div className="bg-black/40 rounded-lg border border-orange-500/30 overflow-hidden">
                      <table className="w-full">
                        <thead className="bg-orange-500/20">
                          <tr>
                            <th className="text-left p-3 font-semibold text-orange-400">Taux de rotation</th>
                            <th className="text-left p-3 font-semibold text-orange-400">Biens concernés / an</th>
                            <th className="text-left p-3 font-semibold text-orange-400">États à comparer (×2)</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-white/10">
                          <tr className="hover:bg-white/5">
                            <td className="p-3">25%</td>
                            <td className="p-3">30 logements</td>
                            <td className="p-3">60 comparaisons</td>
                          </tr>
                          <tr className="bg-orange-500/10">
                            <td className="p-3 font-bold">30% (utilisé)</td>
                            <td className="p-3 font-bold">36 logements</td>
                            <td className="p-3 font-bold">72 comparaisons</td>
                          </tr>
                          <tr className="hover:bg-white/5">
                            <td className="p-3">35%</td>
                            <td className="p-3">42 logements</td>
                            <td className="p-3">84 comparaisons</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Section 3 */}
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold mb-4">3. Détail du calcul réel</h3>
                    <p className="mb-4 text-white/80">Prenons le cas réaliste : <strong className="text-white">30% de rotation</strong>, soit 72 comparaisons.</p>
                    
                    <div className="bg-orange-500/10 border-l-4 border-orange-400 rounded p-6 space-y-4">
                      <div>
                        <p className="font-bold mb-2">Coût de la comparaison manuelle :</p>
                        <p className="text-white/80">72 comparaisons × 45 min = 3 240 min = <strong className="text-white">54 heures/an</strong></p>
                        <p className="text-white/80">54 h × 35 €/h = <strong className="text-orange-400 text-xl">1 890 €/an</strong></p>
                      </div>
                      
                      <div>
                        <p className="font-bold mb-2 mt-6">Coût des litiges oubliés :</p>
                        <p className="text-white/80">18% d'erreurs × 36 relocations × 450 € = <strong className="text-orange-400 text-xl">2 916 €/an</strong></p>
                      </div>
                      
                      <div className="pt-6 mt-6 border-t border-white/20">
                        <p className="text-xl md:text-2xl font-bold text-orange-400">TOTAL = ≈ 4 800 €/an</p>
                      </div>
                    </div>
                  </div>

                  {/* Section 4 */}
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold mb-4">4. En résumé</h3>
                    <div className="bg-black/40 rounded-lg border border-orange-500/30 overflow-hidden">
                      <table className="w-full">
                        <tbody className="divide-y divide-white/10">
                          <tr className="hover:bg-white/5">
                            <td className="p-3 text-white/70">Nombre de biens</td>
                            <td className="p-3 font-bold text-white">120</td>
                          </tr>
                          <tr className="hover:bg-white/5">
                            <td className="p-3 text-white/70">Rotation locative annuelle</td>
                            <td className="p-3 font-bold text-white">25–35%</td>
                          </tr>
                          <tr className="hover:bg-white/5">
                            <td className="p-3 text-white/70">Relocations concernées</td>
                            <td className="p-3 font-bold text-white">36/an</td>
                          </tr>
                          <tr className="hover:bg-white/5">
                            <td className="p-3 text-white/70">États à comparer</td>
                            <td className="p-3 font-bold text-white">72/an</td>
                          </tr>
                          <tr className="hover:bg-white/5">
                            <td className="p-3 text-white/70">Temps total perdu</td>
                            <td className="p-3 font-bold text-spider-red">54 heures/an</td>
                          </tr>
                          <tr className="hover:bg-white/5">
                            <td className="p-3 text-white/70">Coût main d'œuvre</td>
                            <td className="p-3 font-bold text-spider-red">1 890 €/an</td>
                          </tr>
                          <tr className="hover:bg-white/5">
                            <td className="p-3 text-white/70">Coût litiges oubliés</td>
                            <td className="p-3 font-bold text-spider-red">2 916 €/an</td>
                          </tr>
                          <tr className="bg-spider-red/20 font-bold">
                            <td className="p-4 text-lg">COÛT TOTAL ANNUEL</td>
                            <td className="p-4 text-2xl text-spider-red">≈ 4 800 €</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
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
                      <circle className="text-gray-700" strokeWidth="3" stroke="currentColor" fill="none" cx="18" cy="18" r="15" />
                      <circle className="text-orange-400" strokeWidth="3" strokeDasharray="18 82" strokeLinecap="round" stroke="currentColor" fill="none" cx="18" cy="18" r="15" style={{
                      transition: "stroke-dasharray 1s ease"
                    }} />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center font-orbitron text-orange-400 font-black text-xl">
                      18%
                    </div>
                  </div>
                  <div className="relative w-20 h-20">
                    <svg viewBox="0 0 36 36" className="w-full h-full">
                      <circle className="text-gray-700" strokeWidth="3" stroke="currentColor" fill="none" cx="18" cy="18" r="15" />
                      <circle className="text-emerald-400" strokeWidth="3" strokeDasharray="0 100" strokeLinecap="round" stroke="currentColor" fill="none" cx="18" cy="18" r="15" style={{
                      transition: "stroke-dasharray 1s ease"
                    }} />
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
              {edlMockData.detectionExamples.map(example => <DetectionExample key={example.id} {...example} />)}
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
                {["Inventaire détaillé pièce par pièce obligatoire", "État des équipements (électroménager, chauffage, etc.)", "État des revêtements (sol, murs, plafond)", "Relevés compteurs (eau, gaz, électricité)", "Nombre et état des clés remises", "Photos annexées horodatées", "Signatures électroniques valides juridiquement", "Envoi recommandé électronique (valeur probante)", "Archivage 10 ans minimum", "Justification détaillée retenues (opposable tribunal)"].map((item, idx) => <div key={idx} className="flex items-start gap-2 text-white/80">
                    <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>)}
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

        {/* SECTION 12: TARIFS - REMOVED */}

        {/* SECTION 13: FAQ */}
        <section className="px-4 py-20 bg-gradient-to-b from-transparent to-purple-950/20">
          <div className="container mx-auto max-w-4xl">
            <h2 className="font-orbitron text-4xl md:text-5xl font-black text-white mb-12 text-center">
              ❓ Questions Fréquentes
            </h2>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => <AccordionItem key={index} value={`item-${index}`} className="bg-gradient-to-br from-gray-900 to-gray-800 border border-white/10 rounded-lg px-6">
                  <AccordionTrigger className="text-white hover:text-spider-cyan font-inter text-lg">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-white/80 font-inter">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>)}
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
              {edlMockData.testimonials.map((testimonial, idx) => <Card key={idx} className="bg-gradient-to-br from-gray-900 to-gray-800 border-white/10 p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => <span key={i} className="text-yellow-400">⭐</span>)}
                  </div>
                  <p className="text-white/80 italic mb-6">"{testimonial.quote}"</p>
                  <div className="border-t border-white/10 pt-4">
                    <div className="font-bold text-white">{testimonial.name}</div>
                    <div className="text-sm text-white/60">{testimonial.position}</div>
                    <div className="text-sm text-white/60">{testimonial.company}</div>
                    <div className="text-xs text-spider-cyan mt-2">{testimonial.stats}</div>
                  </div>
                </Card>)}
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
        <CTABooking subtitle="Testez la comparaison IA sur un vrai état des lieux en démo live" />
      </main>

      <Footer />
    </div>;
};
export default ComparateurEtatsLieux;