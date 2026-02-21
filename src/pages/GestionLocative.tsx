import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackgroundEffects from "@/components/BackgroundEffects";
import ParticlesBackground from "@/components/leads/ParticlesBackground";
import PropertyManagerChaosAnimation from "@/components/leads/PropertyManagerChaosAnimation";
import TicketKanbanBoard from "@/components/leads/TicketKanbanBoard";
import PropertyManagementROICalculator from "@/components/leads/PropertyManagementROICalculator";
import PropertyManagementWorkflowDiagram from "@/components/leads/PropertyManagementWorkflowDiagram";
import CTABooking from "@/components/CTABooking";
import { useState } from "react";
const GestionLocative = () => {
  const [biensGeres, setBiensGeres] = useState(120);
  const [heuresParBien, setHeuresParBien] = useState(10);
  const [coutHoraire, setCoutHoraire] = useState(35);
  const coutMensuel = biensGeres * heuresParBien * coutHoraire;
  const coutAnnuel = coutMensuel * 12;
  const scrollToDemo = () => {
    document.getElementById('kanban-section')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <div className="min-h-screen">
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
                <div className="text-5xl font-black text-red-500 mb-3 font-orbitron">
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
                <div className="text-5xl font-black text-orange-500 mb-3 font-orbitron">
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
                <div className="text-5xl font-black text-yellow-500 mb-3 font-orbitron">
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
                <div className="text-5xl font-black text-purple-500 mb-3 font-orbitron">
                  3h
                </div>
                <p className="text-lg text-gray-300">
                  <span className="text-purple-400 font-bold">perdues par jour</span> en pompier
                </p>
              </div>
            </div>

            {/* Calculateur interactif */}
            <div className="bg-gradient-to-r from-red-950/50 via-orange-950/50 to-yellow-950/50 
                            rounded-2xl p-12 border-2 border-red-500/30 mb-12
                            shadow-[0_0_60px_rgba(239,68,68,0.3)]">
              <h3 className="text-3xl font-black text-white mb-8">
                💰 Le Coût de la Gestion Locative Manuelle
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-center mb-8">
                <div className="text-center">
                  <div className="text-gray-400 text-sm mb-3 font-medium">Biens gérés</div>
                  <input type="number" min="1" max="1000" value={biensGeres} onChange={e => setBiensGeres(Number(e.target.value))} className="w-full min-h-[100px] text-4xl md:text-5xl font-black text-white font-orbitron bg-transparent 
                             border-2 border-white/20 rounded-xl px-4 py-4 text-center
                             focus:border-white/50 focus:outline-none transition-all
                             [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" />
                </div>
                
                <div className="text-5xl text-gray-500 hidden md:block text-center">×</div>
                
                <div className="text-center">
                  <div className="text-gray-400 text-sm mb-3 font-medium">Heures/bien/mois</div>
                  <input type="number" min="1" max="50" value={heuresParBien} onChange={e => setHeuresParBien(Number(e.target.value))} className="w-full min-h-[100px] text-4xl md:text-5xl font-black text-white font-orbitron bg-transparent 
                             border-2 border-white/20 rounded-xl px-4 py-4 text-center
                             focus:border-white/50 focus:outline-none transition-all
                             [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" />
                </div>
                
                <div className="text-5xl text-gray-500 hidden md:block text-center">×</div>
                
                <div className="text-center">
                  <div className="text-gray-400 text-sm mb-3 font-medium">Coût horaire</div>
                  <div className="relative">
                    <input type="number" min="1" max="200" value={coutHoraire} onChange={e => setCoutHoraire(Number(e.target.value))} className="w-full min-h-[100px] text-4xl md:text-5xl font-black text-white font-orbitron bg-transparent 
                               border-2 border-white/20 rounded-xl px-4 py-4 pr-12 text-center
                               focus:border-white/50 focus:outline-none transition-all
                               [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-2xl md:text-3xl text-white font-orbitron">€</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <div className="text-red-400 text-lg mb-2 font-bold">= COÛT MENSUEL CACHÉ</div>
                <div className="text-6xl font-black text-red-500 animate-pulse mb-4">
                  {coutMensuel.toLocaleString('fr-FR')}€
                </div>
                <p className="text-gray-300 text-xl">
                  par mois = <span className="text-red-400 font-bold">{coutAnnuel.toLocaleString('fr-FR')}€ par an</span> en pure perte
                </p>
              </div>

              {/* Détail des 10 heures */}
              <div className="mt-12 bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-2xl p-8 border border-red-500/20">
                <h4 className="text-2xl font-bold text-white mb-6 text-center">
                  🔍 Détail des 10h de Gestion par Logement
                </h4>
                <p className="text-gray-300 text-center mb-8 max-w-3xl mx-auto">
                  Ces heures s'accumulent à travers des dizaines de micro-tâches répétitives et manuelles.
                  Voici la répartition mensuelle moyenne :
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {/* Catégorie 1 */}
                  <div className="bg-black/40 rounded-xl p-5 border border-cyan-500/20 hover:border-cyan-500/50 transition-all">
                    <div className="flex items-start gap-3 mb-2">
                      <div className="text-3xl">💬</div>
                      <div className="flex-1">
                        <h5 className="text-cyan-400 font-bold text-sm mb-1">Communication</h5>
                        <p className="text-xs text-gray-400 mb-2">Locataire / Propriétaire</p>
                      </div>
                      <div className="text-2xl font-black text-cyan-400 font-orbitron">2-3h</div>
                    </div>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      Appels, emails, SMS pour suivi, réclamations, pannes, documents, relances
                    </p>
                  </div>

                  {/* Catégorie 2 */}
                  <div className="bg-black/40 rounded-xl p-5 border border-purple-500/20 hover:border-purple-500/50 transition-all">
                    <div className="flex items-start gap-3 mb-2">
                      <div className="text-3xl">🧾</div>
                      <div className="flex-1">
                        <h5 className="text-purple-400 font-bold text-sm mb-1">Administratif & Financier</h5>
                        <p className="text-xs text-gray-400 mb-2">Suivi comptable</p>
                      </div>
                      <div className="text-2xl font-black text-purple-400 font-orbitron">2h</div>
                    </div>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      Vérification loyers, relances impayés, reçus, rapprochement bancaire, quittances
                    </p>
                  </div>

                  {/* Catégorie 3 */}
                  <div className="bg-black/40 rounded-xl p-5 border border-orange-500/20 hover:border-orange-500/50 transition-all">
                    <div className="flex items-start gap-3 mb-2">
                      <div className="text-3xl">🧰</div>
                      <div className="flex-1">
                        <h5 className="text-orange-400 font-bold text-sm mb-1">Maintenance</h5>
                        <p className="text-xs text-gray-400 mb-2">Interventions & travaux</p>
                      </div>
                      <div className="text-2xl font-black text-orange-400 font-orbitron">1-2h</div>
                    </div>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      Gestion prestataires, devis, suivi travaux, comptes rendus
                    </p>
                  </div>

                  {/* Catégorie 4 */}
                  <div className="bg-black/40 rounded-xl p-5 border border-green-500/20 hover:border-green-500/50 transition-all">
                    <div className="flex items-start gap-3 mb-2">
                      <div className="text-3xl">📑</div>
                      <div className="flex-1">
                        <h5 className="text-green-400 font-bold text-sm mb-1">Dossiers & Contrats</h5>
                        <p className="text-xs text-gray-400 mb-2">Mise à jour légale</p>
                      </div>
                      <div className="text-2xl font-black text-green-400 font-orbitron">1h</div>
                    </div>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      Assurances, états des lieux, documents légaux, renouvellement bail
                    </p>
                  </div>

                  {/* Catégorie 5 */}
                  <div className="bg-black/40 rounded-xl p-5 border border-yellow-500/20 hover:border-yellow-500/50 transition-all">
                    <div className="flex items-start gap-3 mb-2">
                      <div className="text-3xl">🧮</div>
                      <div className="flex-1">
                        <h5 className="text-yellow-400 font-bold text-sm mb-1">Comptabilité</h5>
                        <p className="text-xs text-gray-400 mb-2">Reporting & régularisations</p>
                      </div>
                      <div className="text-2xl font-black text-yellow-400 font-orbitron">1h</div>
                    </div>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      Calcul charges, régularisations, export comptable
                    </p>
                  </div>

                  {/* Catégorie 6 */}
                  <div className="bg-black/40 rounded-xl p-5 border border-pink-500/20 hover:border-pink-500/50 transition-all">
                    <div className="flex items-start gap-3 mb-2">
                      <div className="text-3xl">📸</div>
                      <div className="flex-1">
                        <h5 className="text-pink-400 font-bold text-sm mb-1">Visites & Relocations</h5>
                        <p className="text-xs text-gray-400 mb-2">Selon turnover</p>
                      </div>
                      <div className="text-2xl font-black text-pink-400 font-orbitron">2-3h</div>
                    </div>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      Photos, rédaction annonces, visites, filtrage candidats
                    </p>
                  </div>
                </div>

                <div className="mt-8 bg-red-950/30 rounded-xl p-6 border border-red-500/30">
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <div className="text-4xl">⚠️</div>
                    <h5 className="text-xl font-bold text-red-400">Pourquoi c'est une moyenne réaliste ?</h5>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-300">
                    <div className="flex items-start gap-2">
                      <span className="text-red-400 font-bold">•</span>
                      <p>Certains mois (sans problème) = 2h, d'autres (dégât des eaux, impayé) = 20h</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-red-400 font-bold">•</span>
                      <p>Tâches réparties entre plusieurs personnes (coût horaire cumulé ≈ 35€/h)</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-red-400 font-bold">•</span>
                      <p>Temps non automatisé : emails manuels, suivis Excel, relances individuelles</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <div className="inline-flex items-center gap-4 bg-gradient-to-r from-emerald-950/50 to-cyan-950/50 
                                  rounded-full px-8 py-4 border border-emerald-500/30">
                    <span className="text-3xl">🤖</span>
                    <p className="text-emerald-400 font-bold text-base md:text-lg">
                      Avec l'automatisation : réduction à <span className="text-2xl md:text-3xl font-orbitron mx-1">1-2h/mois</span>
                    </p>
                    <span className="text-emerald-400 text-xs md:text-sm font-medium">= 80-90% d'économie</span>
                  </div>
                </div>
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
              <button onClick={scrollToDemo} className="px-12 py-5 bg-gradient-to-r from-emerald-500 to-teal-600 text-white 
                           font-black text-2xl rounded-xl shadow-[0_0_40px_rgba(16,185,129,0.5)]
                           hover:shadow-[0_0_60px_rgba(16,185,129,0.7)] hover:scale-105 
                           transition-all duration-300">
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
                    <span className="text-4xl font-black text-green-400 font-orbitron">
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
                    <span className="text-4xl font-black text-cyan-400 font-orbitron">
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
                    <span className="text-4xl font-black text-purple-400 font-orbitron">
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
                  <div className="text-5xl font-black text-orange-400 font-orbitron animate-pulse">
                    +14k€
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
                  <div className="text-4xl font-black text-white mb-2 font-orbitron">
                    400h
                  </div>
                  <p className="text-gray-300">
                    économisées par mois<br />
                    <span className="text-cyan-400 text-sm">(10h × 120 / 3)</span>
                  </p>
                </div>

                <div>
                  <div className="text-5xl mb-3">💰</div>
                  <div className="text-4xl font-black text-green-400 mb-2 font-orbitron">
                    +14k€
                  </div>
                  <p className="text-gray-300">
                    gagnés par mois<br />
                    <span className="text-green-400 text-sm">(400h × 35€/h)</span>
                  </p>
                </div>

                <div>
                  <div className="text-5xl mb-3">📞</div>
                  <div className="text-4xl font-black text-purple-400 mb-2 font-orbitron">
                    -30%
                  </div>
                  <p className="text-gray-300">
                    d'appels entrants<br />
                    <span className="text-purple-400 text-sm">Locataires autonomes</span>
                  </p>
                </div>

                <div>
                  <div className="text-5xl mb-3">😊</div>
                  <div className="text-4xl font-black text-orange-400 mb-2 font-orbitron">
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

        {/* ROI CALCULATOR */}
        <section className="px-8 py-20 bg-gradient-to-b from-black via-emerald-950/20 to-black">
          <div className="max-w-6xl mx-auto">
            
            <div className="text-center mb-16">
              <div className="text-emerald-500 text-sm font-bold uppercase tracking-widest mb-4">
                💸 CALCULATEUR D'IMPACT
              </div>
              <h2 className="text-6xl font-black mb-6 font-orbitron">
                <span className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 
                               bg-clip-text text-transparent">
                  Combien Vous Coûte la Gestion Manuelle ?
                </span>
              </h2>
              <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
                Calculez le temps et l'argent perdus chaque mois sur votre parc locatif
              </p>
            </div>

            <PropertyManagementROICalculator />
          </div>
        </section>

        {/* WORKFLOW */}
        <section className="px-8 py-20 bg-black">
          <div className="max-w-7xl mx-auto">
            
            <h2 className="text-4xl font-bold text-center mb-12 text-white">
              🔄 Le Workflow Automatique en Détail
            </h2>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-12 
                            border border-emerald-500/30">
              
              <PropertyManagementWorkflowDiagram />

              {/* Détails workflow */}
              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                
                <div className="bg-black/30 rounded-xl p-6 border border-cyan-500/30">
                  <h4 className="text-lg font-bold text-cyan-400 mb-4 flex items-center gap-2">
                    <span>🎯</span>
                    <span>Déclencheurs</span>
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400">▸</span>
                      <span>Formulaire incident (site/WhatsApp/email)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400">▸</span>
                      <span>Échéance bail (J-30)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400">▸</span>
                      <span>Loyer impayé (J+2)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400">▸</span>
                      <span>Paiement reçu (quittance auto)</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-black/30 rounded-xl p-6 border border-purple-500/30">
                  <h4 className="text-lg font-bold text-purple-400 mb-4 flex items-center gap-2">
                    <span>🤖</span>
                    <span>Traitement IA</span>
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400">▸</span>
                      <span>Classification (plomberie/élec/chauffage...)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400">▸</span>
                      <span>Détection urgence (urgent/normal/faible)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400">▸</span>
                      <span>Attribution prestataire optimal</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400">▸</span>
                      <span>Génération emails personnalisés</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-black/30 rounded-xl p-6 border border-green-500/30">
                  <h4 className="text-lg font-bold text-green-400 mb-4 flex items-center gap-2">
                    <span>⚡</span>
                    <span>Actions & Suivi</span>
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">▸</span>
                      <span>Notification prestataire + locataire</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">▸</span>
                      <span>Suivi temps réel (SMS + email)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">▸</span>
                      <span>Relances auto si délai dépassé</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">▸</span>
                      <span>Clôture + satisfaction locataire</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL BENEFITS */}
        <section className="px-8 py-20 bg-gradient-to-b from-black via-emerald-950/20 to-black">
          <div className="max-w-7xl mx-auto">
            
            <h2 className="text-5xl font-bold text-center mb-16 text-white">🎯 Pourquoi Choisir MT03 ?</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              
              <div className="group bg-gradient-to-br from-green-950/50 to-green-900/30 
                              rounded-2xl p-8 border-2 border-green-500/30
                              hover:scale-105 hover:border-green-400 
                              hover:shadow-[0_0_40px_rgba(74,222,128,0.4)]
                              transition-all duration-300">
                <div className="text-6xl mb-6 text-center">⚡</div>
                <h3 className="text-2xl font-bold text-white mb-4 text-center">
                  Réactivité Extrême
                </h3>
                <p className="text-gray-300 text-center leading-relaxed">
                  <span className="text-green-400 font-bold">2 minutes</span> de la déclaration à l'assignation.
                  Zéro attente, zéro oubli, satisfaction locataire maximale.
                </p>
              </div>

              <div className="group bg-gradient-to-br from-cyan-950/50 to-cyan-900/30 
                              rounded-2xl p-8 border-2 border-cyan-500/30
                              hover:scale-105 hover:border-cyan-400 
                              hover:shadow-[0_0_40px_rgba(6,182,212,0.4)]
                              transition-all duration-300">
                <div className="text-6xl mb-6 text-center">🤖</div>
                <h3 className="text-2xl font-bold text-white mb-4 text-center">
                  IA Intelligente
                </h3>
                <p className="text-gray-300 text-center leading-relaxed">
                  Classification automatique, détection d'urgence, choix du meilleur prestataire.
                  <span className="text-cyan-400 font-bold"> Zéro intervention manuelle.</span>
                </p>
              </div>

              <div className="group bg-gradient-to-br from-purple-950/50 to-purple-900/30 
                              rounded-2xl p-8 border-2 border-purple-500/30
                              hover:scale-105 hover:border-purple-400 
                              hover:shadow-[0_0_40px_rgba(168,85,247,0.4)]
                              transition-all duration-300">
                <div className="text-6xl mb-6 text-center">📊</div>
                <h3 className="text-2xl font-bold text-white mb-4 text-center">
                  Suivi Total
                </h3>
                <p className="text-gray-300 text-center leading-relaxed">
                  Dashboard temps réel, historique complet, KPI détaillés.
                  <span className="text-purple-400 font-bold"> Visibilité à 360° sur votre parc.</span>
                </p>
              </div>

              <div className="group bg-gradient-to-br from-orange-950/50 to-red-950/30 
                              rounded-2xl p-8 border-2 border-orange-500/30
                              hover:scale-105 hover:border-orange-400 
                              hover:shadow-[0_0_40px_rgba(251,146,60,0.4)]
                              transition-all duration-300">
                <div className="text-6xl mb-6 text-center">💰</div>
                <h3 className="text-2xl font-bold text-white mb-4 text-center">
                  ROI Immédiat
                </h3>
                <p className="text-gray-300 text-center leading-relaxed">
                  Payback en <span className="text-orange-400 font-bold">14 jours.</span>
                  60% de temps économisé = plus de prospection, moins de pompier.
                </p>
              </div>
            </div>

            {/* Final CTA */}
            <div className="text-center">
              <button className="group relative px-20 py-10 
                                 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600
                                 text-white font-black text-4xl rounded-3xl
                                 shadow-[0_0_80px_rgba(16,185,129,0.8)]
                                 hover:shadow-[0_0_120px_rgba(16,185,129,1)]
                                 hover:scale-110 transition-all duration-500
                                 border-4 border-white/30 overflow-hidden">
                <span className="relative z-10 flex flex-col items-center gap-4">
                  <span className="text-6xl animate-bounce">🚀</span>
                  <span>DÉMARRER MAINTENANT</span>
                  <span className="text-xl font-normal text-white/90">
                    Automatisation complète • Résultats J+1 • Sans engagement
                  </span>
                </span>
                
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-teal-600 to-emerald-600 
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
                    <div className="text-white font-bold">14k€</div>
                    <div className="text-xs">économisés/mois (120 biens)</div>
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

      <CTABooking subtitle="Testons la gestion d'incident automatique en live" />
      <Footer />
    </div>;
};
export default GestionLocative;