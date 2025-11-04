import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackgroundEffects from "@/components/BackgroundEffects";
import ParticlesBackground from "@/components/leads/ParticlesBackground";
import PropertyManagerChaosAnimation from "@/components/leads/PropertyManagerChaosAnimation";
import TicketKanbanBoard from "@/components/leads/TicketKanbanBoard";

const GestionLocative = () => {
  const scrollToDemo = () => {
    document.getElementById('kanban-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <Header />
      <BackgroundEffects />
      
      <main className="relative">
        {/* HERO SECTION */}
        <section className="relative min-h-screen bg-gradient-to-b from-black via-emerald-950/10 to-black 
                            px-8 py-20 overflow-hidden">
          
          {/* Particules animées */}
          <ParticlesBackground color="cyan" density={50} />

          {/* Scénario dramatique */}
          <div className="max-w-7xl mx-auto text-center mb-16">
            <div className="inline-block mb-8">
              <div className="text-emerald-500 text-sm font-bold uppercase tracking-widest mb-4">
                😫 LE CAUCHEMAR QUOTIDIEN
              </div>
              <h1 className="text-6xl md:text-8xl font-black mb-6 font-orbitron">
                <span className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 
                               bg-clip-text text-transparent">
                  NOYÉ SOUS LES APPELS & TICKETS
                </span>
              </h1>
              <p className="text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                8h47 : <span className="text-cyan-400 font-black">"Le chauffe-eau fuit !"</span>
                <br />
                9h12 : <span className="text-orange-400 font-black">"Où est ma quittance ?"</span>
                <br />
                10h05 : <span className="text-red-500 font-black">"Le loyer n'est pas passé..."</span>
              </p>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Pendant ce temps, vos agents courent dans tous les sens. 
                <span className="text-red-400 font-bold"> 3h perdues par jour</span> en pompier.
              </p>
            </div>

            {/* Animation agent débordé */}
            <div className="relative max-w-6xl mx-auto mb-16">
              <PropertyManagerChaosAnimation />
            </div>

            {/* Stats choc */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
              
              <div className="group bg-gradient-to-br from-red-950/50 to-red-900/30 
                              rounded-2xl p-8 border-2 border-red-500/30
                              hover:border-red-500 hover:shadow-[0_0_60px_rgba(239,68,68,0.4)]
                              transition-all duration-300">
                <div className="text-6xl mb-4">📞</div>
                <div className="text-7xl font-black text-red-500 mb-3 font-orbitron">
                  72h
                </div>
                <p className="text-lg text-gray-300">
                  délai moyen <span className="text-red-400 font-bold">résolution incident</span>
                </p>
              </div>

              <div className="group bg-gradient-to-br from-orange-950/50 to-orange-900/30 
                              rounded-2xl p-8 border-2 border-orange-500/30
                              hover:border-orange-500 hover:shadow-[0_0_60px_rgba(251,146,60,0.4)]
                              transition-all duration-300">
                <div className="text-6xl mb-4">😡</div>
                <div className="text-7xl font-black text-orange-500 mb-3 font-orbitron">
                  100+
                </div>
                <p className="text-lg text-gray-300">
                  <span className="text-orange-400 font-bold">appels entrants</span> par semaine
                </p>
              </div>

              <div className="group bg-gradient-to-br from-yellow-950/50 to-yellow-900/30 
                              rounded-2xl p-8 border-2 border-yellow-500/30
                              hover:border-yellow-500 hover:shadow-[0_0_60px_rgba(251,191,36,0.4)]
                              transition-all duration-300">
                <div className="text-6xl mb-4">💸</div>
                <div className="text-7xl font-black text-yellow-500 mb-3 font-orbitron">
                  10%
                </div>
                <p className="text-lg text-gray-300">
                  de loyers <span className="text-yellow-400 font-bold">en retard +5j</span>
                </p>
              </div>

              <div className="group bg-gradient-to-br from-purple-950/50 to-purple-900/30 
                              rounded-2xl p-8 border-2 border-purple-500/30
                              hover:border-purple-500 hover:shadow-[0_0_60px_rgba(168,85,247,0.4)]
                              transition-all duration-300">
                <div className="text-6xl mb-4">⏰</div>
                <div className="text-7xl font-black text-purple-500 mb-3 font-orbitron">
                  3h
                </div>
                <p className="text-lg text-gray-300">
                  <span className="text-purple-400 font-bold">perdues par jour</span> en pompier
                </p>
              </div>
            </div>

            {/* Calcul du coût */}
            <div className="bg-gradient-to-r from-red-950/50 via-orange-950/50 to-yellow-950/50 
                            rounded-2xl p-12 border-2 border-red-500/30 mb-12
                            shadow-[0_0_60px_rgba(239,68,68,0.3)]">
              <h3 className="text-3xl font-black text-white mb-8">
                💰 Le Coût de la Gestion Locative Manuelle
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-center">
                <div className="text-center">
                  <div className="text-gray-400 text-sm mb-2">Biens gérés</div>
                  <div className="text-5xl font-black text-white font-orbitron">
                    120
                  </div>
                </div>
                
                <div className="text-6xl text-gray-500 hidden md:block text-center">×</div>
                
                <div className="text-center">
                  <div className="text-gray-400 text-sm mb-2">Heures/bien/mois</div>
                  <div className="text-5xl font-black text-white font-orbitron">
                    12h
                  </div>
                </div>
                
                <div className="text-6xl text-gray-500 hidden md:block text-center">×</div>
                
                <div className="text-center">
                  <div className="text-gray-400 text-sm mb-2">Coût horaire</div>
                  <div className="text-5xl font-black text-white font-orbitron">
                    35€
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <div className="text-red-400 text-lg mb-2 font-bold">= COÛT MENSUEL CACHÉ</div>
                <div className="text-8xl font-black text-red-500 animate-pulse mb-4">
                  50 400€
                </div>
                <p className="text-gray-300 text-xl">
                  par mois = <span className="text-red-400 font-bold">604 800€ par an</span> en pure perte
                </p>
              </div>
            </div>

            {/* Message de transition */}
            <div className="bg-gradient-to-r from-emerald-950/50 via-teal-950/50 to-cyan-950/50 
                            rounded-2xl p-12 border-2 border-emerald-500/30">
              <h3 className="text-4xl font-black text-white mb-6">
                Et si <span className="text-emerald-400">chaque incident</span> était{' '}
                <span className="text-cyan-400">classé, assigné et suivi automatiquement</span> ?
              </h3>
              <p className="text-xl text-gray-300 mb-8">
                IA + Automatisation • Maintenance préventive • Relances auto • Zéro oubli
              </p>
              <button 
                onClick={scrollToDemo}
                className="px-12 py-5 bg-gradient-to-r from-emerald-500 to-teal-600 text-white 
                           font-black text-2xl rounded-xl shadow-[0_0_40px_rgba(16,185,129,0.5)]
                           hover:shadow-[0_0_60px_rgba(16,185,129,0.7)] hover:scale-105 
                           transition-all duration-300"
              >
                ⚡ DÉCOUVRIR LA SOLUTION
              </button>
            </div>
          </div>
        </section>

        {/* KPI DASHBOARD */}
        <section className="px-8 py-20 bg-black">
          <div className="max-w-7xl mx-auto">
            
            <h2 className="text-4xl font-bold text-center mb-12 text-white">
              ⚡ L'Automatisation Qui Transforme Tout
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              
              {/* KPI 1 */}
              <div className="group bg-gradient-to-br from-green-950/50 to-green-900/30 
                              rounded-2xl p-8 border-2 border-green-500/30
                              hover:scale-105 transition-all duration-300
                              shadow-[0_0_20px_rgba(74,222,128,0.2)]">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-green-400 text-sm font-bold uppercase">Temps Résolution</span>
                  <span className="text-3xl">⚡</span>
                </div>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">Manuel:</span>
                    <span className="text-2xl text-gray-400 line-through font-orbitron">72h</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-green-400 font-bold">Auto:</span>
                    <span className="text-5xl font-black text-green-400 font-orbitron">
                      36h
                    </span>
                  </div>
                </div>
                
                <div className="bg-green-500/10 rounded-lg p-2 text-center">
                  <span className="text-green-400 font-bold text-sm">
                    -50% de délai
                  </span>
                </div>
              </div>

              {/* KPI 2 */}
              <div className="group bg-gradient-to-br from-cyan-950/50 to-cyan-900/30 
                              rounded-2xl p-8 border-2 border-cyan-500/30
                              hover:scale-105 transition-all duration-300
                              shadow-[0_0_20px_rgba(6,182,212,0.2)]">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-cyan-400 text-sm font-bold uppercase">Appels Entrants</span>
                  <span className="text-3xl">📞</span>
                </div>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">Avant:</span>
                    <span className="text-2xl text-red-400 line-through font-orbitron">100%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-cyan-400 font-bold">Après:</span>
                    <span className="text-5xl font-black text-cyan-400 font-orbitron">
                      70%
                    </span>
                  </div>
                </div>
                
                <div className="bg-cyan-500/10 rounded-lg p-2 text-center">
                  <span className="text-cyan-400 font-bold text-sm">
                    -30% d'appels
                  </span>
                </div>
              </div>

              {/* KPI 3 */}
              <div className="group bg-gradient-to-br from-purple-950/50 to-purple-900/30 
                              rounded-2xl p-8 border-2 border-purple-500/30
                              hover:scale-105 transition-all duration-300
                              shadow-[0_0_20px_rgba(168,85,247,0.2)]">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-purple-400 text-sm font-bold uppercase">Loyers Retard</span>
                  <span className="text-3xl">💰</span>
                </div>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">Manuel:</span>
                    <span className="text-2xl text-red-400 line-through font-orbitron">10%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-purple-400 font-bold">Auto:</span>
                    <span className="text-5xl font-black text-purple-400 font-orbitron">
                      3%
                    </span>
                  </div>
                </div>
                
                <div className="bg-purple-500/10 rounded-lg p-2 text-center">
                  <span className="text-purple-400 font-bold text-sm">
                    -70% d'impayés
                  </span>
                </div>
              </div>

              {/* KPI 4 */}
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
                    +16.8k€
                  </div>
                  <p className="text-sm text-gray-400 mt-2">pour 120 biens (3 agents)</p>
                </div>
                
                <div className="bg-orange-500/10 rounded-lg p-2 text-center">
                  <span className="text-orange-400 font-bold text-sm">
                    Payback 14 jours
                  </span>
                </div>
              </div>
            </div>

            {/* Résumé impact */}
            <div className="bg-gradient-to-r from-green-950/50 via-cyan-950/50 to-purple-950/50 
                            rounded-2xl p-10 border-2 border-cyan-400">
              <h3 className="text-3xl font-bold text-center text-cyan-400 mb-8">
                📊 Impact Global (120 biens • 3 agents)
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-5xl mb-3">⏱️</div>
                  <div className="text-5xl font-black text-white mb-2 font-orbitron">
                    480h
                  </div>
                  <p className="text-gray-300">
                    économisées par mois<br />
                    <span className="text-cyan-400 text-sm">(12h × 120 / 3)</span>
                  </p>
                </div>

                <div>
                  <div className="text-5xl mb-3">💰</div>
                  <div className="text-5xl font-black text-green-400 mb-2 font-orbitron">
                    +16.8k€
                  </div>
                  <p className="text-gray-300">
                    gagnés par mois<br />
                    <span className="text-green-400 text-sm">(480h × 35€/h)</span>
                  </p>
                </div>

                <div>
                  <div className="text-5xl mb-3">📞</div>
                  <div className="text-5xl font-black text-purple-400 mb-2 font-orbitron">
                    -30%
                  </div>
                  <p className="text-gray-300">
                    d'appels entrants<br />
                    <span className="text-purple-400 text-sm">Locataires autonomes</span>
                  </p>
                </div>

                <div>
                  <div className="text-5xl mb-3">😊</div>
                  <div className="text-5xl font-black text-orange-400 mb-2 font-orbitron">
                    +50%
                  </div>
                  <p className="text-gray-300">
                    satisfaction locataire<br />
                    <span className="text-orange-400 text-sm">Résolution rapide</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* KANBAN BOARD */}
        <section id="kanban-section" className="px-8 py-20 bg-gradient-to-b from-black via-teal-950/10 to-black">
          <div className="max-w-7xl mx-auto">
            
            <div className="text-center mb-16">
              <h2 className="text-5xl font-black mb-6 text-white">
                🎫 Board de Suivi en Temps Réel
              </h2>
              <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
                Chaque incident classé, assigné et suivi automatiquement par l'IA
              </p>
            </div>

            <TicketKanbanBoard />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default GestionLocative;
