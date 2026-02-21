import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackgroundEffects from "@/components/BackgroundEffects";
import ParticlesBackground from "@/components/leads/ParticlesBackground";
import { MultiPlatformHellAnimation } from "@/components/leads/MultiPlatformHellAnimation";
import { AutoPublishVisualizer } from "@/components/leads/AutoPublishVisualizer";
import { PublicationTableRow } from "@/components/leads/PublicationTableRow";
import { PublicationLineChart } from "@/components/leads/PublicationLineChart";
import { PublicationROICalculator } from "@/components/leads/PublicationROICalculator";
import { PublicationWorkflowDiagram } from "@/components/leads/PublicationWorkflowDiagram";
import CTABooking from "@/components/CTABooking";
import { mockPublications } from "@/data/mockPublications";
const PublicationMultiPlateformes = () => {
  const scrollToDemo = () => {
    document.getElementById('demo-section')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <div className="min-h-screen">
      <Header />
      <BackgroundEffects />
      
      <main className="relative">
        {/* HERO SECTION */}
        <section className="relative min-h-screen bg-gradient-to-b from-black via-indigo-950/10 to-black 
                            px-8 py-20 overflow-hidden">
          
          <ParticlesBackground color="purple" density={40} />

          <div className="max-w-7xl mx-auto text-center mb-16">
            <div className="inline-block mb-8">
              <div className="text-indigo-500 text-sm font-bold uppercase tracking-widest mb-4">
                😫 LE SUPPLICE QUOTIDIEN
              </div>
              <h1 className="text-6xl md:text-8xl font-black mb-6 font-orbitron">
                <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
                               bg-clip-text text-transparent">
                  6 PORTAILS = 2H DE COPIER-COLLER
                </span>
              </h1>
              <p className="text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                Votre agent vient de créer l'annonce parfaite.{' '}
                <span className="text-indigo-400 font-black">Bravo !</span>
                <br />
                Maintenant... il doit la recopier sur{' '}
                <span className="text-red-500 font-black">6 portails différents.</span>
              </p>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Résultat : 90 minutes perdues. Photos mal redimensionnées. Prix qui ne correspond pas. Descriptions tronquées.
              </p>
            </div>

            <div className="relative max-w-6xl mx-auto mb-16">
              <MultiPlatformHellAnimation />
            </div>

            {/* Stats choc */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
              
              <div className="group bg-gradient-to-br from-red-950/50 to-red-900/30 
                              rounded-2xl p-8 border-2 border-red-500/30
                              hover:border-red-500 hover:shadow-[0_0_60px_rgba(239,68,68,0.4)]
                              transition-all duration-300">
                <div className="text-6xl mb-4">⏰</div>
                <div className="text-5xl font-black text-red-500 mb-3 font-orbitron">
                  2h
                </div>
                <p className="text-lg text-gray-300">
                  perdues <span className="text-red-400 font-bold">par jour</span> et par agent
                </p>
              </div>

              <div className="group bg-gradient-to-br from-orange-950/50 to-orange-900/30 
                              rounded-2xl p-8 border-2 border-orange-500/30
                              hover:border-orange-500 hover:shadow-[0_0_60px_rgba(251,146,60,0.4)]
                              transition-all duration-300">
                <div className="text-6xl mb-4">❌</div>
                <div className="text-5xl font-black text-orange-500 mb-3 font-orbitron">
                  18%
                </div>
                <p className="text-lg text-gray-300">
                  d'annonces avec <span className="text-orange-400 font-bold">erreurs</span> (prix, photos)
                </p>
              </div>

              <div className="group bg-gradient-to-br from-yellow-950/50 to-yellow-900/30 
                              rounded-2xl p-8 border-2 border-yellow-500/30
                              hover:border-yellow-500 hover:shadow-[0_0_60px_rgba(251,191,36,0.4)]
                              transition-all duration-300">
                <div className="text-6xl mb-4">📊</div>
                <div className="text-5xl font-black text-yellow-500 mb-3 font-orbitron">
                  -33%
                </div>
                <p className="text-lg text-gray-300">
                  de <span className="text-yellow-400 font-bold">visibilité manquée</span> (portails oubliés)
                </p>
              </div>

              <div className="group bg-gradient-to-br from-purple-950/50 to-purple-900/30 
                              rounded-2xl p-8 border-2 border-purple-500/30
                              hover:border-purple-500 hover:shadow-[0_0_60px_rgba(168,85,247,0.4)]
                              transition-all duration-300">
                <div className="text-6xl mb-4">💸</div>
                <div className="text-5xl font-black text-purple-500 mb-3 font-orbitron">
                  44h
                </div>
                <p className="text-lg text-gray-300">
                  <span className="text-purple-400 font-bold">gaspillées</span> par mois et par agent
                </p>
              </div>
            </div>

            {/* Calcul du coût */}
            <div className="bg-gradient-to-r from-red-950/50 via-orange-950/50 to-yellow-950/50 
                            rounded-2xl p-12 border-2 border-red-500/30 mb-12
                            shadow-[0_0_60px_rgba(239,68,68,0.3)]">
              <h3 className="text-3xl font-black text-white mb-8">
                💰 Le Coût Réel de la Multi-Publication Manuelle
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-center">
                <div className="text-center">
                  <div className="text-gray-400 text-sm mb-2">Temps perdu</div>
                  <div className="text-5xl font-black text-white font-orbitron">
                    44h
                  </div>
                  <div className="text-xs text-gray-500 mt-1">par agent/mois</div>
                </div>
                
                <div className="text-6xl text-gray-500 hidden md:block text-center">×</div>
                
                <div className="text-center">
                  <div className="text-gray-400 text-sm mb-2">Coût horaire</div>
                  <div className="text-5xl font-black text-white font-orbitron">
                    35€
                  </div>
                  <div className="text-xs text-gray-500 mt-1">salaire chargé</div>
                </div>
                
                <div className="text-6xl text-red-500 hidden md:block text-center">=</div>
                
                <div className="text-center">
                  <div className="text-red-400 text-sm mb-2 font-bold">PERTE MENSUELLE</div>
                  <div className="text-4xl font-black text-red-500 font-orbitron">
                    1 540€
                  </div>
                  <div className="text-xs text-gray-500 mt-1">par agent</div>
                </div>
              </div>

              <div className="mt-10 pt-10 border-t border-red-500/30">
                <p className="text-2xl text-gray-300 mb-4 text-center">
                  Pour une agence de <span className="text-cyan-400 font-bold">6 agents</span> :
                </p>
                <div className="text-center">
                  <div className="text-7xl font-black text-red-500 animate-pulse mb-2">
                    -9 240€
                  </div>
                  <p className="text-gray-400">
                    par mois = <span className="text-red-400 font-bold">-110 880€ par an</span>
                  </p>
                  <p className="text-xl text-orange-400 mt-4">
                    💡 Soit l'équivalent de <span className="font-bold">1 employé à temps plein</span> gaspillé
                  </p>
                </div>
              </div>
            </div>

            {/* Message de transition */}
            <div className="bg-gradient-to-r from-indigo-950/50 via-purple-950/50 to-pink-950/50 
                            rounded-2xl p-12 border-2 border-indigo-500/30">
              <h3 className="text-4xl font-black text-white mb-6">
                Et si vous pouviez publier sur{' '}
                <span className="text-indigo-400">6 portails simultanément</span>
                <br />
                en <span className="text-green-400">12 minutes</span> au lieu de 2 heures ?
              </h3>
              <p className="text-xl text-gray-300 mb-8">
                Une seule saisie • Diffusion automatique • Zéro erreur • SEO optimisé par IA
              </p>
              <button onClick={scrollToDemo} className="px-12 py-5 bg-gradient-to-r from-indigo-500 to-purple-600 text-white 
                           font-black text-2xl rounded-xl shadow-[0_0_40px_rgba(99,102,241,0.5)]
                           hover:shadow-[0_0_60px_rgba(99,102,241,0.7)] hover:scale-105 
                           transition-all duration-300">
                ⚡ DÉCOUVRIR LA MAGIE
              </button>
            </div>
          </div>
        </section>

        {/* KPI DASHBOARD */}
        <section className="px-8 py-20 bg-black">
          <div className="max-w-7xl mx-auto">
            
            <h2 className="text-4xl font-bold text-center mb-12 text-white">
              ⚡ L'Automatisation Qui Change Tout
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              
              <div className="group bg-gradient-to-br from-green-950/50 to-green-900/30 
                              rounded-2xl p-8 border-2 border-green-500/30
                              hover:scale-105 transition-all duration-300
                              shadow-[0_0_20px_rgba(74,222,128,0.2)]">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-green-400 text-sm font-bold uppercase">Temps Publication</span>
                  <span className="text-3xl">⚡</span>
                </div>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">Manuel:</span>
                    <span className="text-2xl text-gray-400 line-through font-orbitron">100min</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-green-400 font-bold">Auto:</span>
                    <span className="text-5xl font-black text-green-400 font-orbitron">
                      12min
                    </span>
                  </div>
                </div>
                
                <div className="bg-green-500/10 rounded-lg p-2 text-center">
                  <span className="text-green-400 font-bold text-sm">
                    -88% de temps
                  </span>
                </div>
              </div>

              <div className="group bg-gradient-to-br from-cyan-950/50 to-cyan-900/30 
                              rounded-2xl p-8 border-2 border-cyan-500/30
                              hover:scale-105 transition-all duration-300
                              shadow-[0_0_20px_rgba(6,182,212,0.2)]">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-cyan-400 text-sm font-bold uppercase">Taux Erreur</span>
                  <span className="text-3xl">✅</span>
                </div>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">Manuel:</span>
                    <span className="text-2xl text-red-400 line-through font-orbitron">18%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-cyan-400 font-bold">Auto:</span>
                    <span className="text-5xl font-black text-cyan-400 font-orbitron">
                      2%
                    </span>
                  </div>
                </div>
                
                <div className="bg-cyan-500/10 rounded-lg p-2 text-center">
                  <span className="text-cyan-400 font-bold text-sm">
                    -89% d'erreurs
                  </span>
                </div>
              </div>

              <div className="group bg-gradient-to-br from-purple-950/50 to-purple-900/30 
                              rounded-2xl p-8 border-2 border-purple-500/30
                              hover:scale-105 transition-all duration-300
                              shadow-[0_0_20px_rgba(168,85,247,0.2)]">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-purple-400 text-sm font-bold uppercase">Visibilité</span>
                  <span className="text-3xl">📈</span>
                </div>
                
                <div className="mb-4">
                  <div className="text-6xl font-black text-purple-400 font-orbitron">
                    +25%
                  </div>
                  <p className="text-sm text-gray-400 mt-2">de portée moyenne par bien</p>
                </div>
                
                <div className="bg-purple-500/10 rounded-lg p-2 text-center text-xs text-gray-400">
                  6 portails vs 3-4 en manuel
                </div>
              </div>

              <div className="group bg-gradient-to-br from-orange-950/50 to-red-950/30 
                              rounded-2xl p-8 border-2 border-orange-500/30
                              hover:scale-105 transition-all duration-300
                              shadow-[0_0_20px_rgba(251,146,60,0.2)]">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-orange-400 text-sm font-bold uppercase">Gain Mensuel</span>
                  <span className="text-3xl">💰</span>
                </div>
                
                <div className="mb-4">
                  <div className="text-6xl font-black text-orange-400 font-orbitron animate-pulse">
                    +1 540€
                  </div>
                  <p className="text-sm text-gray-400 mt-2">par agent et par mois</p>
                </div>
                
                <div className="bg-orange-500/10 rounded-lg p-2 text-center">
                  <span className="text-orange-400 font-bold text-sm">
                    ROI en 7 jours
                  </span>
                </div>
              </div>
            </div>

            {/* Résumé impact */}
            <div className="bg-gradient-to-r from-green-950/50 via-cyan-950/50 to-purple-950/50 
                            rounded-2xl p-10 border-2 border-cyan-400">
              <h3 className="text-3xl font-bold text-center text-cyan-400 mb-8">
                📊 Impact Global sur Votre Agence (6 agents)
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-5xl mb-3">⏱️</div>
                  <div className="text-5xl font-black text-white mb-2 font-orbitron">
                    264h
                  </div>
                  <p className="text-gray-300">
                    économisées par mois<br />
                    <span className="text-cyan-400 text-sm">(6 agents × 44h)</span>
                  </p>
                </div>

                <div>
                  <div className="text-5xl mb-3">💰</div>
                  <div className="text-5xl font-black text-green-400 mb-2 font-orbitron">
                    +9.2k€
                  </div>
                  <p className="text-gray-300">
                    gagnés par mois<br />
                    <span className="text-green-400 text-sm">(264h × 35€/h)</span>
                  </p>
                </div>

                <div>
                  <div className="text-5xl mb-3">👤</div>
                  <div className="text-5xl font-black text-purple-400 mb-2 font-orbitron">
                    1 ETP
                  </div>
                  <p className="text-gray-300">
                    économisé<br />
                    <span className="text-purple-400 text-sm">(≈ 30k€/an)</span>
                  </p>
                </div>

                <div>
                  <div className="text-5xl mb-3">📈</div>
                  <div className="text-5xl font-black text-orange-400 mb-2 font-orbitron">
                    +25%
                  </div>
                  <p className="text-gray-300">
                    de visibilité<br />
                    <span className="text-orange-400 text-sm">sur tous vos biens</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DEMO SECTION */}
        <section id="demo-section" className="px-8 py-20 bg-gradient-to-b from-black via-purple-950/10 to-black">
          <div className="max-w-7xl mx-auto">
            
            <div className="text-center mb-16">
              <h2 className="text-5xl font-black mb-6 text-white">
                🚀 La Magie en Action
              </h2>
              <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
                Une seule saisie → Diffusion automatique sur 6 portails en 12 minutes
              </p>
            </div>

            <AutoPublishVisualizer />
          </div>
        </section>

        {/* TABLEAU PUBLICATIONS */}
        <section className="px-8 py-20 bg-black">
          <div className="max-w-7xl mx-auto">
            
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-4xl font-bold text-white">
                📊 Historique des Publications
              </h2>
              
              <div className="flex items-center gap-4">
                <select className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 
                                   text-white focus:border-indigo-500 focus:outline-none">
                  <option>Tous les portails</option>
                  <option>SeLoger</option>
                  <option>Leboncoin</option>
                  <option>Bien'ici</option>
                </select>
                
                <select className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 
                                   text-white focus:border-indigo-500 focus:outline-none">
                  <option>Tous les statuts</option>
                  <option>✅ Publié</option>
                  <option>⚠️ Erreur corrigée</option>
                </select>

                <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 
                                   text-white rounded-lg font-semibold transition-all
                                   flex items-center gap-2">
                  <span>📥</span>
                  <span>Exporter</span>
                </button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl 
                            border border-indigo-500/30 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-700 bg-gray-950/50">
                      <th className="text-left p-4 text-indigo-400 font-semibold text-sm">BIEN</th>
                      <th className="text-left p-4 text-indigo-400 font-semibold text-sm">PRIX</th>
                      <th className="text-center p-4 text-indigo-400 font-semibold text-sm">PORTAILS</th>
                      <th className="text-center p-4 text-indigo-400 font-semibold text-sm">STATUT</th>
                      <th className="text-center p-4 text-indigo-400 font-semibold text-sm">VISIBILITÉ</th>
                      <th className="text-right p-4 text-indigo-400 font-semibold text-sm">DATE</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockPublications.slice(0, 5).map((pub, index) => <PublicationTableRow key={pub.id} publication={pub} index={index} />)}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* GRAPHIQUES */}
        <section className="px-8 py-20 bg-gradient-to-b from-black via-gray-950 to-black">
          <div className="max-w-7xl mx-auto">
            
            <h2 className="text-4xl font-bold text-center mb-12 text-white">
              📊 Analytics & Performance
            </h2>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 
                            rounded-2xl p-8 border border-purple-500/30">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span>📈</span>
                <span>Volume de Publications (4 dernières semaines)</span>
              </h3>
              
              <PublicationLineChart />
            </div>
          </div>
        </section>

        {/* ROI CALCULATOR */}
        <section className="px-8 py-20 bg-gradient-to-b from-black via-indigo-950/20 to-black">
          <div className="max-w-6xl mx-auto">
            
            <div className="text-center mb-16">
              <div className="text-indigo-500 text-sm font-bold uppercase tracking-widest mb-4">
                💸 CALCULATEUR D'IMPACT
              </div>
              <h2 className="text-6xl font-black mb-6 font-orbitron">
                <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
                               bg-clip-text text-transparent">
                  Combien Vous Coûte la Saisie Manuelle ?
                </span>
              </h2>
              <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
                Calculez le temps et l'argent perdus chaque mois
              </p>
            </div>

            <PublicationROICalculator />
          </div>
        </section>

        {/* WORKFLOW */}
        <section className="px-8 py-20 bg-black">
          <div className="max-w-7xl mx-auto">
            
            <h2 className="text-4xl font-bold text-center mb-12 text-white">
              🔄 Le Workflow Automatique en Détail
            </h2>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-12 
                            border border-indigo-500/30">
              
              <PublicationWorkflowDiagram />
            </div>
          </div>
        </section>

        {/* BENEFITS FINAL */}
        <section className="px-8 py-20 bg-gradient-to-b from-black via-indigo-950/20 to-black">
          <div className="max-w-7xl mx-auto">
            
            <h2 className="text-5xl font-bold text-center mb-16 text-white">
              🎯 Pourquoi Choisir MT03 ?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              
              <div className="group bg-gradient-to-br from-green-950/50 to-green-900/30 
                              rounded-2xl p-8 border-2 border-green-500/30
                              hover:scale-105 hover:border-green-400 
                              hover:shadow-[0_0_40px_rgba(74,222,128,0.4)]
                              transition-all duration-300">
                <div className="text-6xl mb-6 text-center">⚡</div>
                <h3 className="text-2xl font-bold text-white mb-4 text-center">
                  Rapidité Extrême
                </h3>
                <p className="text-gray-300 text-center leading-relaxed">
                  <span className="text-green-400 font-bold">12 minutes</span> au lieu de 100.
                  Publiez sur 6 portails en moins de temps qu'il ne faut pour en faire un seul manuellement.
                </p>
              </div>

              <div className="group bg-gradient-to-br from-cyan-950/50 to-cyan-900/30 
                              rounded-2xl p-8 border-2 border-cyan-500/30
                              hover:scale-105 hover:border-cyan-400 
                              hover:shadow-[0_0_40px_rgba(6,182,212,0.4)]
                              transition-all duration-300">
                <div className="text-6xl mb-6 text-center">✅</div>
                <h3 className="text-2xl font-bold text-white mb-4 text-center">
                  Fiabilité Totale
                </h3>
                <p className="text-gray-300 text-center leading-relaxed">
                  <span className="text-cyan-400 font-bold">2% d'erreurs</span> vs 18% en manuel.
                  L'IA détecte et corrige automatiquement : orthographe, formats, champs obligatoires.
                </p>
              </div>

              <div className="group bg-gradient-to-br from-purple-950/50 to-purple-900/30 
                              rounded-2xl p-8 border-2 border-purple-500/30
                              hover:scale-105 hover:border-purple-400 
                              hover:shadow-[0_0_40px_rgba(168,85,247,0.4)]
                              transition-all duration-300">
                <div className="text-6xl mb-6 text-center">🌍</div>
                <h3 className="text-2xl font-bold text-white mb-4 text-center">
                  Visibilité Maximale
                </h3>
                <p className="text-gray-300 text-center leading-relaxed">
                  <span className="text-purple-400 font-bold">+25% de portée</span> en moyenne.
                  Vos annonces sont partout, tout le temps, optimisées pour chaque plateforme.
                </p>
              </div>

              <div className="group bg-gradient-to-br from-orange-950/50 to-red-950/30 
                              rounded-2xl p-8 border-2 border-orange-500/30
                              hover:scale-105 hover:border-orange-400 
                              hover:shadow-[0_0_40px_rgba(251,146,60,0.4)]
                              transition-all duration-300">
                <div className="text-6xl mb-6 text-center">🤖</div>
                <h3 className="text-2xl font-bold text-white mb-4 text-center">
                  Zéro Saisie Manuelle
                </h3>
                <p className="text-gray-300 text-center leading-relaxed">
                  Créez <span className="text-orange-400 font-bold">une seule fois</span> dans votre CRM.
                  L'IA adapte, optimise et publie partout. Vos agents se concentrent sur la vente.
                </p>
              </div>
            </div>

            {/* CTA Final */}
            <div className="text-center">
              <button className="group relative px-20 py-10 
                                 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600
                                 text-white font-black text-4xl rounded-3xl
                                 shadow-[0_0_80px_rgba(99,102,241,0.8)]
                                 hover:shadow-[0_0_120px_rgba(99,102,241,1)]
                                 hover:scale-110 transition-all duration-500
                                 border-4 border-white/30 overflow-hidden">
                <span className="relative z-10 flex flex-col items-center gap-4">
                  <span className="text-6xl animate-bounce">🚀</span>
                  <span>DÉMARRER MAINTENANT</span>
                  <span className="text-xl font-normal text-white/90">
                    Setup en 48h • Résultats immédiats • Sans engagement
                  </span>
                </span>
                
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {[...Array(30)].map((_, i) => <div key={i} className="absolute w-2 h-2 bg-white rounded-full animate-ping" style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${1 + Math.random() * 2}s`
              }} />)}
              </button>

              <div className="mt-8 flex items-center justify-center gap-12 text-base text-gray-400">
                <div className="flex items-center gap-3">
                  <div className="text-3xl">⭐</div>
                  <div>
                    <div className="text-white font-bold">4.9/5</div>
                    <div className="text-xs">2 avis vérifiés</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="text-3xl">🏆</div>
                  <div>
                    <div className="text-white font-bold">2 agences</div>
                    <div className="text-xs">nous font confiance</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="text-3xl">💰</div>
                  <div>
                    <div className="text-white font-bold">1.54k€</div>
                    <div className="text-xs">économisés/agent/mois</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex items-center justify-center gap-8 text-sm">
                <div className="flex items-center gap-2 text-green-400">
                  <span className="text-xl">✓</span>
                  <span>Satisfait ou remboursé 30j</span>
                </div>
                <div className="flex items-center gap-2 text-green-400">
                  <span className="text-xl">✓</span>
                  <span>Support 7j/7 inclus</span>
                </div>
                <div className="flex items-center gap-2 text-green-400">
                  <span className="text-xl">✓</span>
                  <span>Formation offerte</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <CTABooking subtitle="Simulons une publication sur 6 portails ensemble" />
      <Footer />
    </div>;
};
export default PublicationMultiPlateformes;