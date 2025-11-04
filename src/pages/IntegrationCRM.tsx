import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackgroundEffects from "@/components/BackgroundEffects";
import ParticlesBackground from "@/components/leads/ParticlesBackground";
import CopyPasteNightmareAnimation from "@/components/leads/CopyPasteNightmareAnimation";
import DataMappingVisualizer from "@/components/leads/DataMappingVisualizer";
import LiveStat from "@/components/leads/LiveStat";

const IntegrationCRM = () => {
  const scrollToDemo = () => {
    document.getElementById('kpi-dashboard')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-deep-black">
      <Header />
      <BackgroundEffects />

      <main className="relative">
        {/* HERO SECTION */}
        <section className="relative min-h-screen bg-gradient-to-b from-deep-black via-blue-950/10 to-deep-black px-8 py-20 overflow-hidden">
          <ParticlesBackground color="blue" density={50} />

          <div className="max-w-7xl mx-auto text-center mb-16 relative z-10">
            <div className="inline-block mb-8">
              <div className="text-blue-500 text-sm font-bold uppercase tracking-widest mb-4">
                🤯 LE CAUCHEMAR QUOTIDIEN
              </div>
              <h1 className="text-6xl md:text-8xl font-black mb-6 font-orbitron">
                <span className="bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 bg-clip-text text-transparent">
                  COPIER-COLLER : LE TUEUR SILENCIEUX
                </span>
              </h1>
              <p className="text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                Vos agents passent <span className="text-red-500 font-black">2h par jour</span>{' '}
                à recopier des données d'un outil à l'autre.
              </p>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Et pendant ce temps... ils ne vendent pas.
              </p>
            </div>

            <div className="relative max-w-5xl mx-auto mb-16">
              <CopyPasteNightmareAnimation />
            </div>

            {/* Stats choc */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
              <div className="group bg-gradient-to-br from-red-950/50 to-red-900/30 rounded-2xl p-8 border-2 border-red-500/30 hover:border-red-500 hover:shadow-[0_0_60px_rgba(239,68,68,0.4)] transition-all duration-300">
                <div className="text-6xl mb-4">⏰</div>
                <div className="text-7xl font-black text-red-500 mb-3 font-orbitron">10min</div>
                <p className="text-lg text-gray-300">
                  par lead saisi <span className="text-red-400 font-bold">manuellement</span>
                </p>
              </div>

              <div className="group bg-gradient-to-br from-orange-950/50 to-orange-900/30 rounded-2xl p-8 border-2 border-orange-500/30 hover:border-orange-500 hover:shadow-[0_0_60px_rgba(251,146,60,0.4)] transition-all duration-300">
                <div className="text-6xl mb-4">❌</div>
                <div className="text-7xl font-black text-orange-500 mb-3 font-orbitron">12%</div>
                <p className="text-lg text-gray-300">
                  de <span className="text-orange-400 font-bold">données erronées</span> dans le CRM
                </p>
              </div>

              <div className="group bg-gradient-to-br from-yellow-950/50 to-yellow-900/30 rounded-2xl p-8 border-2 border-yellow-500/30 hover:border-yellow-500 hover:shadow-[0_0_60px_rgba(251,191,36,0.4)] transition-all duration-300">
                <div className="text-6xl mb-4">👥</div>
                <div className="text-7xl font-black text-yellow-500 mb-3 font-orbitron">8%</div>
                <p className="text-lg text-gray-300">
                  de <span className="text-yellow-400 font-bold">doublons</span> créés chaque mois
                </p>
              </div>

              <div className="group bg-gradient-to-br from-purple-950/50 to-purple-900/30 rounded-2xl p-8 border-2 border-purple-500/30 hover:border-purple-500 hover:shadow-[0_0_60px_rgba(168,85,247,0.4)] transition-all duration-300">
                <div className="text-6xl mb-4">💸</div>
                <div className="text-7xl font-black text-purple-500 mb-3 font-orbitron">50h</div>
                <p className="text-lg text-gray-300">
                  <span className="text-purple-400 font-bold">perdues</span> par agent/mois
                </p>
              </div>
            </div>

            {/* Calcul du coût */}
            <div className="bg-gradient-to-r from-red-950/50 via-orange-950/50 to-yellow-950/50 rounded-2xl p-12 border-2 border-red-500/30 mb-12 shadow-[0_0_60px_rgba(239,68,68,0.3)]">
              <div className="flex items-center justify-center gap-8 flex-wrap">
                <div className="text-center">
                  <div className="text-gray-400 text-sm mb-2">Temps perdu</div>
                  <div className="text-5xl font-black text-white font-orbitron">50h</div>
                </div>
                <div className="text-6xl text-gray-500">×</div>
                <div className="text-center">
                  <div className="text-gray-400 text-sm mb-2">Coût horaire</div>
                  <div className="text-5xl font-black text-white font-orbitron">35€</div>
                </div>
                <div className="text-6xl text-red-500">=</div>
                <div className="text-center">
                  <div className="text-red-400 text-sm mb-2 font-bold">PERTE MENSUELLE</div>
                  <div className="text-7xl font-black text-red-500 font-orbitron">1 750€</div>
                  <div className="text-xs text-gray-500 mt-2">par agent !</div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <p className="text-2xl text-gray-300 mb-4">
                  Pour une équipe de <span className="text-cyan-400 font-bold">6 agents</span> :
                </p>
                <div className="text-6xl font-black text-red-500 animate-pulse">-10 500€ / mois</div>
                <p className="text-gray-400 mt-4">
                  = <span className="text-red-400 font-bold">-126 000€ par an</span> en pure perte
                </p>
              </div>
            </div>

            {/* Message de transition */}
            <div className="bg-gradient-to-r from-cyan-950/50 via-blue-950/50 to-purple-950/50 rounded-2xl p-12 border-2 border-cyan-500/30">
              <h3 className="text-4xl font-black text-white mb-6">
                Et si <span className="text-cyan-400">chaque lead</span> arrivait directement dans votre CRM,{' '}
                <span className="text-green-400">propre, enrichi et classé</span> ?
              </h3>
              <p className="text-xl text-gray-300 mb-8">
                Plus de copier-coller • Plus d'erreurs • Plus de doublons • Juste de la vente pure
              </p>
              <button 
                onClick={scrollToDemo}
                className="px-12 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white 
                           font-black text-2xl rounded-xl shadow-[0_0_40px_rgba(6,182,212,0.5)]
                           hover:shadow-[0_0_60px_rgba(6,182,212,0.7)] hover:scale-105 
                           transition-all duration-300">
                ⚡ VOIR LA MAGIE EN ACTION
              </button>
            </div>
          </div>
        </section>

        {/* KPI DASHBOARD */}
        <section id="kpi-dashboard" className="px-8 py-20 bg-deep-black">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-white">
              ⚡ L'Automatisation en Chiffres
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="group bg-gradient-to-br from-green-950/50 to-green-900/30 rounded-2xl p-8 border-2 border-green-500/30 hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(74,222,128,0.2)]">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-green-400 text-sm font-bold uppercase">Temps Gagné</span>
                  <span className="text-3xl">⚡</span>
                </div>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">Avant:</span>
                    <span className="text-2xl text-gray-400 line-through font-orbitron">10min</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-green-400 font-bold">Après:</span>
                    <span className="text-5xl font-black text-green-400 font-orbitron">1min</span>
                  </div>
                </div>
                <div className="bg-green-500/10 rounded-lg p-2 text-center">
                  <span className="text-green-400 font-bold text-sm">-90% de temps</span>
                </div>
              </div>

              <div className="group bg-gradient-to-br from-cyan-950/50 to-cyan-900/30 rounded-2xl p-8 border-2 border-cyan-500/30 hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.2)]">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-cyan-400 text-sm font-bold uppercase">Taux Erreur</span>
                  <span className="text-3xl">✅</span>
                </div>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">Manuel:</span>
                    <span className="text-2xl text-red-400 line-through font-orbitron">12%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-cyan-400 font-bold">Auto:</span>
                    <span className="text-5xl font-black text-cyan-400 font-orbitron">2%</span>
                  </div>
                </div>
                <div className="bg-cyan-500/10 rounded-lg p-2 text-center">
                  <span className="text-cyan-400 font-bold text-sm">-83% d'erreurs</span>
                </div>
              </div>

              <div className="group bg-gradient-to-br from-purple-950/50 to-purple-900/30 rounded-2xl p-8 border-2 border-purple-500/30 hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(168,85,247,0.2)]">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-purple-400 text-sm font-bold uppercase">Doublons</span>
                  <span className="text-3xl">👥</span>
                </div>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">Avant:</span>
                    <span className="text-2xl text-orange-400 line-through font-orbitron">8%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-purple-400 font-bold">Après:</span>
                    <span className="text-5xl font-black text-purple-400 font-orbitron">1%</span>
                  </div>
                </div>
                <div className="bg-purple-500/10 rounded-lg p-2 text-center">
                  <span className="text-purple-400 font-bold text-sm">-87% de doublons</span>
                </div>
              </div>

              <div className="group bg-gradient-to-br from-orange-950/50 to-red-950/30 rounded-2xl p-8 border-2 border-orange-500/30 hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(251,146,60,0.2)]">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-orange-400 text-sm font-bold uppercase">ROI Mensuel</span>
                  <span className="text-3xl">💰</span>
                </div>
                <div className="mb-4">
                  <div className="text-6xl font-black text-orange-400 font-orbitron animate-pulse">+1 645€</div>
                  <p className="text-sm text-gray-400 mt-2">par agent et par mois</p>
                </div>
                <div className="bg-orange-500/10 rounded-lg p-2 text-center">
                  <span className="text-orange-400 font-bold text-sm">Amorti en 7 jours</span>
                </div>
              </div>
            </div>

            {/* Résumé impact global */}
            <div className="bg-gradient-to-r from-green-950/50 via-cyan-950/50 to-purple-950/50 rounded-2xl p-10 border-2 border-cyan-400">
              <h3 className="text-3xl font-bold text-center text-cyan-400 mb-8">
                📈 Impact Global sur Votre Agence
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-5xl mb-3">⏱️</div>
                  <div className="text-5xl font-black text-white mb-2 font-orbitron">300h</div>
                  <p className="text-gray-300">
                    libérées par mois<br />
                    <span className="text-cyan-400 text-sm">(6 agents × 50h)</span>
                  </p>
                </div>
                <div>
                  <div className="text-5xl mb-3">💰</div>
                  <div className="text-5xl font-black text-green-400 mb-2 font-orbitron">+10k€</div>
                  <p className="text-gray-300">
                    économisés par mois<br />
                    <span className="text-green-400 text-sm">(300h × 35€/h)</span>
                  </p>
                </div>
                <div>
                  <div className="text-5xl mb-3">📊</div>
                  <div className="text-5xl font-black text-purple-400 mb-2 font-orbitron">100%</div>
                  <p className="text-gray-300">
                    de fiabilité CRM<br />
                    <span className="text-purple-400 text-sm">Données propres et enrichies</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MAPPING VISUEL INTERACTIF */}
        <section className="px-8 py-20 bg-gradient-to-b from-deep-black via-cyan-950/10 to-deep-black">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-black mb-6 text-white">
                🔄 Synchronisation en Temps Réel
              </h2>
              <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
                Tous vos leads arrivent automatiquement dans le CRM, enrichis et classés
              </p>
            </div>

            <DataMappingVisualizer />

            {/* Stats en temps réel */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
              <LiveStat 
                icon="✅"
                value="247"
                label="Leads intégrés aujourd'hui"
                color="green"
              />
              <LiveStat 
                icon="⚡"
                value="8.2s"
                label="Temps moyen d'intégration"
                color="cyan"
              />
              <LiveStat 
                icon="🎯"
                value="1/300"
                label="Erreurs détectées ce mois"
                color="purple"
              />
              <LiveStat 
                icon="🔄"
                value="10:43"
                label="Dernière synchro CRM"
                color="blue"
                live
              />
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="px-8 py-20 bg-gradient-to-b from-deep-black via-spider-red/10 to-deep-black">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-black mb-6 text-white">
              Prêt à Libérer Vos Agents ?
            </h2>
            <p className="text-2xl text-gray-300 mb-12">
              Plus de copier-coller • CRM propre • Temps gagné
            </p>
            <button className="px-16 py-6 bg-gradient-to-r from-cyan-500 to-blue-600 
                               text-white font-black text-3xl rounded-2xl
                               shadow-[0_0_60px_rgba(6,182,212,0.6)]
                               hover:scale-110 transition-transform">
              🚀 JE VEUX AUTOMATISER
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default IntegrationCRM;
