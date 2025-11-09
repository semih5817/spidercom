import { useState } from "react";
import { Link } from "react-router-dom";
import { Home, ChevronRight, Sparkles, Clock, TrendingUp, Target, ArrowRight, Check, Radio, Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackgroundEffects from "@/components/BackgroundEffects";
import CTABooking from "@/components/CTABooking";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { StagingGalleryTab } from "@/components/staging/StagingGalleryTab";
import { StagingDemoTab } from "@/components/staging/StagingDemoTab";
import { StagingStatsTab } from "@/components/staging/StagingStatsTab";
const HomeStagingVirtuel = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const styles = [{
    id: 1,
    name: "Parisien Contemporain Minimaliste",
    emoji: "🏛️",
    isDefault: true
  }, {
    id: 2,
    name: "Scandinave Cosy",
    emoji: "🌲"
  }, {
    id: 3,
    name: "Industriel Chic",
    emoji: "🏭"
  }, {
    id: 4,
    name: "Haussmannien Classique",
    emoji: "👑"
  }, {
    id: 5,
    name: "Moderne Épuré",
    emoji: "✨"
  }, {
    id: 6,
    name: "Bohème Chic",
    emoji: "🌿"
  }];
  const useCases = [{
    id: 1,
    title: "Vente d'appartement vide",
    description: "Vendez 40% plus vite avec des photos attractives",
    before: "87 jours de délai moyen",
    after: "52 jours",
    icon: "🏠"
  }, {
    id: 2,
    title: "Location meublée",
    description: "Montrez le potentiel avant même d'acheter les meubles",
    gain: "Économie 3 000€ de staging physique",
    icon: "🔑"
  }, {
    id: 3,
    title: "Programme neuf",
    description: "Plans 3D + staging virtuel = combo gagnant",
    impact: "+68% de pré-réservations",
    icon: "🏗️"
  }, {
    id: 4,
    title: "Réseaux sociaux",
    description: "Contenu Instagram/Facebook premium en 1 clic",
    engagement: "+127% vs photos vides",
    icon: "📱"
  }];
  const faqs = [{
    question: "Quelle est la qualité des images générées ?",
    answer: "Nos images sont photoréalistes en HD (jusqu'à 4K pour le plan Pro). L'IA génère des rendus indiscernables de vraies photos de staging."
  }, {
    question: "Combien de temps prend la génération ?",
    answer: "En moyenne 30 secondes par image. Vous uploadez votre photo vide, sélectionnez un style, et l'IA génère le rendu instantanément."
  }, {
    question: "Ai-je les droits d'utilisation des images ?",
    answer: "Oui, vous avez tous les droits d'utilisation commerciale des images générées. Vous pouvez les utiliser pour vos annonces, réseaux sociaux, sites web, etc."
  }, {
    question: "Peut-on modifier le résultat après génération ?",
    answer: "Oui, vous pouvez régénérer avec un autre style autant de fois que vous le souhaitez. Chaque génération compte comme 1 crédit."
  }, {
    question: "Quels formats de photos sont supportés ?",
    answer: "JPG, PNG, HEIC. Résolution minimum 1024x768px recommandée. Poids maximum 20MB par image."
  }];
  return <div className="min-h-screen">
      <Header />
      <BackgroundEffects />
      
      <main className="relative">
        {/* BREADCRUMB */}
        <section className="px-4 pt-24 pb-8">
          <div className="container mx-auto">
            <div className="flex items-center gap-2 text-sm font-inter text-white/60">
              <Link to="/" className="hover:text-spider-red transition-colors">Accueil</Link>
              <ChevronRight className="w-4 h-4" />
              <Link to="/agences-immobilieres" className="hover:text-spider-red transition-colors">Agences Immobilières</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white">Home Staging Virtuel IA</span>
            </div>
          </div>
        </section>

        {/* HERO SECTION */}
        <section className="px-4 py-12 md:py-20">
          <div className="container mx-auto">
            <div className="text-center space-y-8 max-w-5xl mx-auto">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-500/10 border border-pink-500/30 rounded-full">
                <span className="text-2xl">🎨</span>
                <span className="font-inter font-semibold text-pink-400 uppercase text-sm tracking-wide">
                  OUTIL MÉTIER IA
                </span>
                <span className="px-2 py-0.5 bg-gradient-to-r from-spider-red to-orange-600 rounded-full text-xs font-black text-white">
                  NOUVEAU
                </span>
              </div>

              {/* Titre */}
              <h1 className="font-orbitron text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight">
                Transformez Vos Photos en Intérieurs Design
              </h1>

              {/* Sous-titre */}
              <p className="font-inter text-xl md:text-2xl text-white/70 max-w-3xl mx-auto">
                Home Staging virtuel en 30 secondes. Style parisien contemporain minimaliste généré par IA.
              </p>

              {/* Stats Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
                <div className="p-4 bg-gradient-to-br from-gray-900 to-gray-800 border border-pink-500/20 rounded-xl hover:border-pink-500/50 transition-all">
                  <div className="text-3xl mb-2">⚡</div>
                  <div className="font-orbitron text-xl font-black text-white mb-1">30 secondes</div>
                  <div className="font-inter text-xs text-white/60">par image</div>
                </div>

                <div className="p-4 bg-gradient-to-br from-gray-900 to-gray-800 border border-pink-500/20 rounded-xl hover:border-pink-500/50 transition-all">
                  <div className="text-3xl mb-2">💰</div>
                  <div className="font-orbitron text-xl font-black text-white mb-1">-80%</div>
                  <div className="font-inter text-xs text-white/60">vs staging physique</div>
                </div>

                <div className="p-4 bg-gradient-to-br from-gray-900 to-gray-800 border border-pink-500/20 rounded-xl hover:border-pink-500/50 transition-all">
                  <div className="text-3xl mb-2">📈</div>
                  <div className="font-orbitron text-xl font-black text-white mb-1">+35%</div>
                  <div className="font-inter text-xs text-white/60">de visites générées</div>
                </div>

                <div className="p-4 bg-gradient-to-br from-gray-900 to-gray-800 border border-pink-500/20 rounded-xl hover:border-pink-500/50 transition-all">
                  <div className="text-3xl mb-2">🎯</div>
                  <div className="font-orbitron text-xl font-black text-white mb-1">100%</div>
                  <div className="font-inter text-xs text-white/60">photoréaliste</div>
                </div>
              </div>

              {/* Animation Avant/Après */}
              <div className="max-w-3xl mx-auto mt-12 relative">
                <div className="relative rounded-2xl overflow-hidden border-2 border-pink-500/30 shadow-[0_0_60px_rgba(236,72,153,0.3)]">
                  {/* Image Avant (background) */}
                  
                  
                  {/* Image Après (overlay) */}
                  

                  {/* Slider */}
                  <input type="range" min="0" max="100" value={sliderPosition} onChange={e => setSliderPosition(Number(e.target.value))} className="absolute top-1/2 left-0 w-full -translate-y-1/2 z-10 opacity-0 cursor-ew-resize" />
                  
                  {/* Ligne de séparation */}
                  <div className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-20 pointer-events-none" style={{
                  left: `${sliderPosition}%`
                }}>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-xl">
                      <div className="flex gap-1">
                        <div className="w-0.5 h-4 bg-gray-600"></div>
                        <div className="w-0.5 h-4 bg-gray-600"></div>
                      </div>
                    </div>
                  </div>

                  {/* Labels */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-black/60 rounded-lg text-white font-inter text-sm font-bold backdrop-blur">
                    AVANT
                  </div>
                  <div className="absolute top-4 right-4 px-3 py-1 bg-pink-500/80 rounded-lg text-white font-inter text-sm font-bold backdrop-blur">
                    APRÈS
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </section>

        {/* BANDEAU WORKFLOW */}
        <section className="px-4 py-6 bg-gradient-to-r from-pink-950/30 via-spider-red/20 to-orange-950/30 border-y border-pink-500/20">
          <div className="container mx-auto">
            
          </div>
        </section>

        {/* SECTION: LE PROBLÈME */}
        <section className="px-4 py-20 bg-gradient-to-b from-transparent to-red-950/20">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="font-orbitron text-4xl md:text-5xl font-black text-white mb-4">
                ❌ Le Problème du Staging Classique
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-red-500/30">
                <CardHeader>
                  <CardTitle className="font-orbitron text-xl text-white flex items-center gap-2">
                    <span className="text-3xl">📉</span>
                    Appartement vide = Désastre
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 font-inter text-gray-300">
                  <p>• <strong className="text-red-400">-40% de visites</strong> générées</p>
                  <p>• Difficile de se projeter pour l'acheteur</p>
                  <p>• Photos ternes et sans vie</p>
                  <p>• Délai de vente rallongé</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-red-500/30">
                <CardHeader>
                  <CardTitle className="font-orbitron text-xl text-white flex items-center gap-2">
                    <span className="text-3xl">💸</span>
                    Staging Physique = Ruineux
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 font-inter text-gray-300">
                  <p>• Budget : <strong className="text-red-400">2 000€ à 5 000€</strong> par bien</p>
                  <p>• Délai de mise en place : 3 à 7 jours</p>
                  <p>• Pas de flexibilité de style</p>
                  <p>• Logistique complexe (livraison, montage)</p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 p-6 bg-red-950/30 border border-red-500/30 rounded-xl text-center">
              <p className="font-inter text-lg text-white/80">
                <span className="font-bold text-red-400">Et si l'acquéreur n'aime pas le style choisi ?</span><br />
                Vous avez investi des milliers d'euros... pour rien.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION: LA SOLUTION */}
        <section className="px-4 py-20">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="font-orbitron text-4xl md:text-5xl font-black text-white mb-4">✅ La Solution Spidercom</h2>
              <p className="font-inter text-xl text-white/70">
                Uploadez votre photo vide et obtenez un rendu design en 30 secondes.<br />
                Changez de style à volonté. Zéro contrainte physique.
              </p>
            </div>

            {/* Workflow Steps */}
            <div className="space-y-4">
              {[{
              num: 1,
              icon: "📤",
              title: "Upload photo pièce vide",
              desc: "JPG, PNG, HEIC - Max 20MB"
            }, {
              num: 2,
              icon: "🎨",
              title: "Sélection style",
              desc: "Parisien Contemporain, Scandinave, Industriel..."
            }, {
              num: 3,
              icon: "⚡",
              title: "IA génère le staging",
              desc: "30 secondes de traitement"
            }, {
              num: 4,
              icon: "👀",
              title: "Preview Avant/Après",
              desc: "Slider comparaison interactif"
            }, {
              num: 5,
              icon: "⬇️",
              title: "Téléchargement HD",
              desc: "Jusqu'à 4K selon votre plan"
            }, {
              num: 6,
              icon: "🚀",
              title: "Utilisation libre",
              desc: "Annonces, réseaux sociaux, site web..."
            }].map(step => <div key={step.num} className="flex items-start gap-4 p-4 bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl border border-pink-500/20 hover:border-pink-500/50 transition-all group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-orange-500 flex items-center justify-center text-white font-orbitron font-black">
                    {step.num}
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-3xl">{step.icon}</span>
                      <h3 className="font-orbitron text-lg font-bold text-white">{step.title}</h3>
                    </div>
                    <p className="font-inter text-sm text-white/60">{step.desc}</p>
                  </div>
                  <ArrowRight className="w-6 h-6 text-pink-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>)}
            </div>
          </div>
        </section>

        {/* SECTION: DÉMO INTERACTIVE */}
        <section className="px-4 py-20 bg-gradient-to-b from-pink-950/20 to-transparent">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-orbitron text-4xl md:text-5xl font-black text-white mb-4">
                🎯 Essayez l'Outil Maintenant
              </h2>
              <p className="font-inter text-xl text-white/60">
                Démo interactive - Testez le home staging virtuel en temps réel
              </p>
            </div>

            {/* DASHBOARD INTERACTIF COMPLET */}
            <div className="max-w-6xl mx-auto">
              <Tabs defaultValue="gallery" className="w-full">
                <TabsList className="grid w-full grid-cols-3 bg-gray-900/50 border border-pink-500/20">
                  <TabsTrigger value="gallery" className="data-[state=active]:bg-pink-500">
                    Galerie IA
                  </TabsTrigger>
                  <TabsTrigger value="demo" className="data-[state=active]:bg-pink-500">
                    Mode Démo
                  </TabsTrigger>
                  <TabsTrigger value="stats" className="data-[state=active]:bg-pink-500">
                    Statistiques
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="gallery" className="mt-8">
                  <StagingGalleryTab />
                </TabsContent>

                <TabsContent value="demo" className="mt-8">
                  <StagingDemoTab />
                </TabsContent>

                <TabsContent value="stats" className="mt-8">
                  <StagingStatsTab />
                </TabsContent>
              </Tabs>

              <div className="mt-8 p-6 bg-green-950/30 border border-green-500/30 rounded-xl">
                <h4 className="font-orbitron font-bold text-white mb-3 flex items-center gap-2">
                  <span className="text-2xl">✅</span>
                  Dashboard Intégré avec Succès
                </h4>
                <ul className="font-inter text-sm text-green-300 space-y-2 list-disc list-inside">
                  <li>✅ Galerie interactive avec slider avant/après</li>
                  <li>Si votre dashboard a plusieurs routes, gardez les Tabs et mappez chaque route à un TabsContent</li>
                  <li>Si vous avez déjà des Tabs dans votre dashboard, supprimez les Tabs externes et gardez seulement votre code</li>
                  <li>Assurez-vous que les imports de vos composants fonctionnent</li>
                  <li>Testez les appels API IA pour vérifier qu'ils fonctionnent correctement</li>
                </ul>
              </div>
            </div>
          </div>
        </section>


        {/* SECTION: STYLES DISPONIBLES */}
        <section className="px-4 py-20">
          
        </section>

        {/* SECTION: CAS D'USAGE */}
        <section className="px-4 py-20 bg-gradient-to-b from-pink-950/20 to-transparent">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-orbitron text-4xl md:text-5xl font-black text-white mb-4">
                💼 Cas d'Usage
              </h2>
              <p className="font-inter text-xl text-white/60">
                4 situations où le home staging virtuel change tout
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {useCases.map(useCase => <Card key={useCase.id} className="bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-pink-500/20 hover:border-pink-500/50 transition-all">
                  <CardHeader>
                    <CardTitle className="font-orbitron text-white flex items-center gap-3">
                      <span className="text-4xl">{useCase.icon}</span>
                      <span>{useCase.title}</span>
                    </CardTitle>
                    <CardDescription className="font-inter text-gray-300 text-base">
                      {useCase.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    {useCase.before && <div className="flex items-center justify-between p-3 bg-red-950/30 border border-red-500/20 rounded-lg">
                        <span className="font-inter text-sm text-white/60">Avant :</span>
                        <span className="font-inter font-semibold text-red-400">{useCase.before}</span>
                      </div>}
                    {useCase.after && <div className="flex items-center justify-between p-3 bg-emerald-950/30 border border-emerald-500/20 rounded-lg">
                        <span className="font-inter text-sm text-white/60">Après :</span>
                        <span className="font-inter font-semibold text-emerald-400">{useCase.after}</span>
                      </div>}
                    {useCase.gain && <div className="p-3 bg-emerald-950/30 border border-emerald-500/20 rounded-lg">
                        <span className="font-inter font-semibold text-emerald-400">{useCase.gain}</span>
                      </div>}
                    {useCase.impact && <div className="p-3 bg-emerald-950/30 border border-emerald-500/20 rounded-lg">
                        <span className="font-inter font-semibold text-emerald-400">{useCase.impact}</span>
                      </div>}
                    {useCase.engagement && <div className="p-3 bg-emerald-950/30 border border-emerald-500/20 rounded-lg">
                        <span className="font-inter font-semibold text-emerald-400">{useCase.engagement}</span>
                      </div>}
                  </CardContent>
                </Card>)}
            </div>
          </div>
        </section>


        {/* SECTION: FAQ */}
        <section className="px-4 py-20 bg-gradient-to-b from-transparent to-pink-950/20">
          <div className="container mx-auto max-w-3xl">
            <div className="text-center mb-12">
              <h2 className="font-orbitron text-4xl md:text-5xl font-black text-white mb-4">
                ❓ Questions Fréquentes
              </h2>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => <AccordionItem key={index} value={`item-${index}`} className="bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-pink-500/20 rounded-xl px-6 data-[state=open]:border-pink-500/50">
                  <AccordionTrigger className="font-orbitron font-bold text-white hover:text-pink-400 py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="font-inter text-white/70 pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>)}
            </Accordion>
          </div>
        </section>

        {/* SECTION: OUTILS COMPLÉMENTAIRES */}
        <section className="px-4 py-20">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-orbitron text-4xl md:text-5xl font-black text-white mb-4">
                🔗 Outils Complémentaires
              </h2>
              <p className="font-inter text-xl text-white/60">
                Maximisez votre efficacité avec notre suite complète
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Link to="/publication-multi-plateformes">
                <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-indigo-500/20 hover:border-indigo-500 transition-all group cursor-pointer h-full">
                  <CardHeader>
                    <CardTitle className="font-orbitron text-white flex items-center gap-3 group-hover:text-indigo-400 transition-colors">
                      <span className="text-4xl">📡</span>
                      <span>Publication Multi-Plateformes</span>
                    </CardTitle>
                    <CardDescription className="font-inter text-gray-300">
                      Publiez vos belles photos sur 6 portails en 12 minutes
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-indigo-400 font-inter font-semibold group-hover:gap-4 transition-all">
                      Découvrir
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link to="/emails-relances">
                <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-purple-500/20 hover:border-purple-500 transition-all group cursor-pointer h-full">
                  <CardHeader>
                    <CardTitle className="font-orbitron text-white flex items-center gap-3 group-hover:text-purple-400 transition-colors">
                      <span className="text-4xl">📧</span>
                      <span>Emails & Relances</span>
                    </CardTitle>
                    <CardDescription className="font-inter text-gray-300">
                      Suivez automatiquement vos prospects après les visites
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-purple-400 font-inter font-semibold group-hover:gap-4 transition-all">
                      Découvrir
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA BOOKING */}
        <CTABooking subtitle="Découvrez comment le home staging virtuel peut transformer votre agence" />
      </main>

      <Footer />
    </div>;
};
export default HomeStagingVirtuel;