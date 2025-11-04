import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackgroundEffects from "@/components/BackgroundEffects";
import ParticlesBackground from "@/components/leads/ParticlesBackground";
import LeadTimelineManual from "@/components/leads/LeadTimelineManual";
import LeadTimelineAutomated from "@/components/leads/LeadTimelineAutomated";
import ChatBubble from "@/components/leads/ChatBubble";
import ProcessStep from "@/components/leads/ProcessStep";
import StatBar from "@/components/leads/StatBar";
import EmailCard from "@/components/leads/EmailCard";
import BenchmarkCard from "@/components/leads/BenchmarkCard";
import FunnelStage from "@/components/leads/FunnelStage";
import FunnelConnector from "@/components/leads/FunnelConnector";
import ROICalculationResults from "@/components/leads/ROICalculationResults";
import { Slider } from "@/components/ui/slider";

const QualificationLeads = () => {
  const [funnelMode, setFunnelMode] = useState<'before' | 'after'>('before');
  const [nbAgents, setNbAgents] = useState(5);
  const [nbLeads, setNbLeads] = useState(300);
  const [tjm, setTjm] = useState(35);
  const [avgCommission, setAvgCommission] = useState(8000);

  const scrollToDemo = () => {
    document.getElementById('kpi-dashboard')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Calculs ROI (old calculator for backward compatibility)
  const hoursPerMonth = 15 * nbAgents * 4;
  const savingsPerMonth = hoursPerMonth * 35;
  const roiAnnual = savingsPerMonth * 12;
  const paybackDays = Math.round((500 / savingsPerMonth) * 30);

  return (
    <div className="min-h-screen">
      <Header />
      <BackgroundEffects />

      <main className="relative">
        {/* HERO SECTION */}
        <section className="relative min-h-screen bg-gradient-to-b from-deep-black via-spider-red/10 to-deep-black px-8 py-20 overflow-hidden">
          <ParticlesBackground color="red" density={50} />

          <div className="max-w-7xl mx-auto text-center mb-16 relative z-10">
            <div className="inline-block mb-8">
              <div className="text-spider-red text-sm font-bold uppercase tracking-widest mb-4">
                ⚠️ STATISTIQUE CHOC
              </div>
              <h1 className="text-6xl md:text-8xl font-black mb-6 font-orbitron">
                <span className="bg-gradient-to-r from-spider-red via-orange-500 to-yellow-500 bg-clip-text text-transparent">
                  ⏰ LA GUERRE DES 60 SECONDES
                </span>
              </h1>
              <p className="text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Un lead vous contacte. Vous avez{' '}
                <span className="text-spider-red font-black text-4xl animate-pulse">60 secondes</span>{' '}
                avant qu'il appelle votre concurrent.
              </p>
            </div>

            {/* Stats choc */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="group bg-gradient-to-br from-red-950/50 to-red-900/30 rounded-2xl p-8 border-2 border-spider-red/30 hover:border-spider-red hover:shadow-[0_0_60px_rgba(239,68,68,0.4)] transition-all duration-300 cursor-pointer">
                <div className="text-6xl mb-4">🚀</div>
                <div className="text-7xl font-black text-spider-red mb-3 font-orbitron">×21</div>
                <p className="text-xl text-gray-300 mb-4">
                  Plus de chances de conversion si vous répondez en{' '}
                  <span className="text-red-400 font-bold">5 minutes</span> vs 30 min
                </p>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="text-xs text-gray-500 bg-black/30 rounded px-3 py-2 inline-block">
                    📚 Source : MIT / InsideSales / Velocify
                  </div>
                </div>
              </div>

              <div className="group bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border-2 border-gray-700 hover:border-orange-500 hover:shadow-[0_0_60px_rgba(251,146,60,0.4)] transition-all duration-300 cursor-pointer">
                <div className="text-6xl mb-4">😱</div>
                <div className="text-7xl font-black text-orange-500 mb-3 font-orbitron">42h</div>
                <p className="text-xl text-gray-300 mb-4">
                  Délai de réponse moyen des agences immobilières{' '}
                  <span className="text-orange-400 font-bold">AUJOURD'HUI</span>
                </p>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="text-xs text-gray-500 bg-black/30 rounded px-3 py-2 inline-block">
                    📚 Source : Harvard Business Review (2 241 entreprises)
                  </div>
                </div>
              </div>

              <div className="group bg-gradient-to-br from-cyan-950/50 to-cyan-900/30 rounded-2xl p-8 border-2 border-spider-cyan/30 hover:border-spider-cyan hover:shadow-[0_0_60px_rgba(6,182,212,0.4)] transition-all duration-300 cursor-pointer">
                <div className="text-6xl mb-4">🤖</div>
                <div className="text-7xl font-black text-spider-cyan mb-3 font-orbitron">+40%</div>
                <p className="text-xl text-gray-300 mb-4">
                  De conversion avec chatbot IA répondant en{' '}
                  <span className="text-spider-cyan font-bold">&lt;60 secondes</span>
                </p>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="text-xs text-gray-500 bg-black/30 rounded px-3 py-2 inline-block">
                    📚 Source : Agentive AI / Sidetool (secteur immobilier)
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-bounce">
              <button
                onClick={scrollToDemo}
                className="px-10 py-5 bg-gradient-to-r from-spider-red to-red-600 text-white font-black text-xl rounded-xl shadow-[0_0_40px_rgba(239,68,68,0.5)] hover:shadow-[0_0_60px_rgba(239,68,68,0.7)] hover:scale-105 transition-all duration-300"
              >
                ⚡ VOIR LA DÉMO EN ACTION
              </button>
            </div>
          </div>
        </section>

        {/* KPI DASHBOARD */}
        <section id="kpi-dashboard" className="px-8 py-20 bg-deep-black">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-white">
              📊 Performance en Temps Réel
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* KPI 1 */}
              <div className="group bg-gradient-to-br from-green-950/50 to-green-900/30 rounded-2xl p-8 border-2 border-green-500/30 hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(74,222,128,0.2)]">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-green-400 text-sm font-bold uppercase">SLA Réponse</span>
                  <span className="text-3xl">⚡</span>
                </div>
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-6xl font-black text-green-400 font-orbitron tabular-nums">00:47</span>
                  <span className="text-2xl text-gray-400">s</span>
                </div>
                <p className="text-sm text-gray-400 mb-4">Temps de réponse moyen</p>
                <div className="relative h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-400 rounded-full animate-pulse" style={{ width: '78%' }} />
                </div>
                <p className="text-xs text-green-400 mt-2">🎯 Objectif: &lt;60s atteint à 78%</p>
              </div>

              {/* KPI 2 */}
              <div className="group bg-gradient-to-br from-cyan-950/50 to-cyan-900/30 rounded-2xl p-8 border-2 border-spider-cyan/30 hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.2)]">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-spider-cyan text-sm font-bold uppercase">Gain RDV</span>
                  <span className="text-3xl">📅</span>
                </div>
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-6xl font-black text-spider-cyan font-orbitron">+22</span>
                  <span className="text-2xl text-gray-400">%</span>
                </div>
                <p className="text-sm text-gray-400 mb-4">vs période sans automatisation</p>
                <div className="flex items-end gap-1 h-8">
                  {[40, 50, 45, 60, 70, 65, 80, 85].map((h, i) => (
                    <div key={i} className="flex-1 bg-gradient-to-t from-spider-cyan to-cyan-400 rounded-t" style={{ height: `${h}%` }} />
                  ))}
                </div>
                <p className="text-xs text-spider-cyan mt-2">📈 Tendance: +12% vs mois dernier</p>
              </div>

              {/* KPI 3 */}
              <div className="group bg-gradient-to-br from-purple-950/50 to-purple-900/30 rounded-2xl p-8 border-2 border-purple-500/30 hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(168,85,247,0.2)]">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-purple-400 text-sm font-bold uppercase">Temps Gagné</span>
                  <span className="text-3xl">⏱️</span>
                </div>
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-6xl font-black text-purple-400 font-orbitron">6</span>
                  <span className="text-2xl text-gray-400">h/sem</span>
                </div>
                <p className="text-sm text-gray-400 mb-4">par agent commercial</p>
                <div className="text-xs text-gray-500 space-y-1">
                  <div className="flex justify-between">
                    <span>Réponses auto:</span>
                    <span className="text-purple-400">3.5h</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Qualification:</span>
                    <span className="text-purple-400">1.5h</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Prise RDV:</span>
                    <span className="text-purple-400">1h</span>
                  </div>
                </div>
              </div>

              {/* KPI 4 */}
              <div className="group bg-gradient-to-br from-yellow-950/50 to-orange-900/30 rounded-2xl p-8 border-2 border-yellow-500/30 hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(251,191,36,0.2)]">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-yellow-400 text-sm font-bold uppercase">Conversion</span>
                  <span className="text-3xl">🎯</span>
                </div>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Avant:</span>
                    <span className="text-2xl text-gray-400 line-through">12%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-yellow-400 font-bold">Après:</span>
                    <span className="text-5xl font-black text-yellow-400 font-orbitron">17%</span>
                  </div>
                </div>
                <div className="bg-yellow-500/10 rounded-lg p-2 text-center">
                  <span className="text-yellow-400 font-bold text-sm">+5 points = +42% de gain</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BATTLE VISUELLE */}
        <section className="px-8 py-20 bg-gradient-to-b from-deep-black via-gray-900 to-deep-black">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-black mb-6 text-white">⚔️ Duel en Temps Réel</h2>
              <p className="text-2xl text-gray-300">
                Même lead, même moment, deux approches radicalement différentes...
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {/* AGENCE A : Sans Spydercom */}
              <div className="relative">
                <div className="absolute -top-4 -left-4 bg-spider-red text-white px-4 py-2 rounded-full font-bold text-sm z-10 shadow-lg">
                  ❌ TROP LENT
                </div>
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border-2 border-gray-700 h-full">
                  <div className="flex items-center gap-4 mb-8 pb-6 border-b border-gray-700">
                    <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center">
                      <span className="text-3xl">🏢</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-400">Agence A</h3>
                      <p className="text-sm text-gray-500">Mode manuel classique</p>
                    </div>
                  </div>

                  <LeadTimelineManual />

                  <div className="mt-8 bg-red-950/50 border-2 border-spider-red rounded-xl p-6">
                    <div className="text-center">
                      <div className="text-6xl mb-4 animate-bounce">💸</div>
                      <div className="text-3xl font-black text-red-400 mb-2">LEAD PERDU</div>
                      <p className="text-gray-400 text-sm mb-6">
                        Réponse après <span className="text-red-400 font-bold">4h12</span>
                        <br />
                        Le client a déjà visité 2 autres biens
                      </p>
                      <div className="bg-black/30 rounded-lg p-4">
                        <div className="text-5xl font-black text-spider-red mb-2 font-orbitron">-8 000€</div>
                        <div className="text-xs text-gray-500">Commission moyenne perdue (vente à 320k€)</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-3 gap-3">
                    <div className="bg-gray-800/50 rounded-lg p-3 text-center">
                      <div className="text-red-400 text-2xl font-bold">30%</div>
                      <div className="text-xs text-gray-500">leads non rappelés</div>
                    </div>
                    <div className="bg-gray-800/50 rounded-lg p-3 text-center">
                      <div className="text-red-400 text-2xl font-bold">42h</div>
                      <div className="text-xs text-gray-500">délai moyen</div>
                    </div>
                    <div className="bg-gray-800/50 rounded-lg p-3 text-center">
                      <div className="text-red-400 text-2xl font-bold">12%</div>
                      <div className="text-xs text-gray-500">taux conversion</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* AGENCE B : Avec Spydercom */}
              <div className="relative">
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-3 rounded-full font-black text-lg z-10 shadow-[0_0_30px_rgba(251,191,36,0.6)] animate-pulse">
                  👑 GAGNANT
                </div>
                <div className="bg-gradient-to-br from-cyan-950/50 via-blue-950/50 to-purple-950/50 rounded-2xl p-8 border-2 border-spider-cyan h-full shadow-[0_0_60px_rgba(6,182,212,0.3)]">
                  <div className="flex items-center gap-4 mb-8 pb-6 border-b border-spider-cyan/30">
                    <div className="w-16 h-16 bg-gradient-to-br from-spider-red to-red-600 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(239,68,68,0.5)]">
                      <span className="text-3xl">⚡</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-spider-cyan">Agence B</h3>
                      <p className="text-sm text-cyan-300">Propulsée par Spydercom IA</p>
                    </div>
                  </div>

                  <LeadTimelineAutomated />

                  <div className="mt-8 bg-emerald-950/50 border-2 border-green-500 rounded-xl p-6">
                    <div className="text-center">
                      <div className="text-6xl mb-4 animate-bounce">🎉</div>
                      <div className="text-3xl font-black text-green-400 mb-2">LEAD CONVERTI</div>
                      <p className="text-gray-400 text-sm mb-6">
                        Réponse en <span className="text-green-400 font-bold">42 secondes</span>
                        <br />
                        RDV pris • Visite faite • Offre signée
                      </p>
                      <div className="bg-black/30 rounded-lg p-4">
                        <div className="text-5xl font-black text-green-500 mb-2 font-orbitron">+8 000€</div>
                        <div className="text-xs text-gray-500">Commission gagnée (vente à 320k€)</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-3 gap-3">
                    <div className="bg-spider-cyan/10 rounded-lg p-3 text-center border border-spider-cyan/30">
                      <div className="text-spider-cyan text-2xl font-bold">100%</div>
                      <div className="text-xs text-gray-400">leads traités</div>
                    </div>
                    <div className="bg-spider-cyan/10 rounded-lg p-3 text-center border border-spider-cyan/30">
                      <div className="text-spider-cyan text-2xl font-bold">47s</div>
                      <div className="text-xs text-gray-400">délai moyen</div>
                    </div>
                    <div className="bg-spider-cyan/10 rounded-lg p-3 text-center border border-spider-cyan/30">
                      <div className="text-spider-cyan text-2xl font-bold">17%</div>
                      <div className="text-xs text-gray-400">taux conversion</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Comparaison finale */}
            <div className="bg-gradient-to-r from-red-950/30 via-purple-950/30 to-cyan-950/30 rounded-2xl p-12 border border-purple-500/30">
              <h3 className="text-3xl font-bold text-center mb-10 text-white">
                💰 Impact sur 300 leads par mois
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-gray-500 text-sm mb-2">AGENCE A (sans auto)</div>
                  <div className="text-5xl font-black text-spider-red mb-2">-72k€</div>
                  <p className="text-gray-400 text-sm">30% leads perdus × 8k€ × 300 leads</p>
                </div>
                <div className="flex items-center justify-center">
                  <div className="text-6xl animate-pulse">VS</div>
                </div>
                <div>
                  <div className="text-spider-cyan text-sm mb-2 font-bold">AGENCE B (Spydercom)</div>
                  <div className="text-5xl font-black text-green-500 mb-2">+126k€</div>
                  <p className="text-gray-400 text-sm">100% traités • 17% conversion • 8k€</p>
                </div>
              </div>
              <div className="mt-10 text-center">
                <div className="inline-block bg-gradient-to-r from-green-500 to-spider-cyan text-white px-8 py-4 rounded-xl font-black text-3xl shadow-[0_0_40px_rgba(74,222,128,0.5)]">
                  = 198 000€ de différence par an ! 🚀
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CHATBOT INTERACTIF */}
        <section className="px-8 py-20 bg-deep-black">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-white">🤖 Chatbot IA en Action</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Fenêtre de chat */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border-2 border-spider-cyan/30 overflow-hidden shadow-[0_0_40px_rgba(6,182,212,0.2)]">
                <div className="bg-gradient-to-r from-spider-cyan to-blue-600 px-6 py-4 flex items-center gap-3">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    <span className="text-xl">🤖</span>
                  </div>
                  <div>
                    <div className="text-white font-bold">Assistant Spydercom</div>
                    <div className="text-cyan-200 text-xs flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                      En ligne • Répond en &lt;2 secondes
                    </div>
                  </div>
                </div>

                <div className="p-6 space-y-4 h-[500px] overflow-y-auto bg-gray-950">
                  <ChatBubble type="bot" message="👋 Bonjour ! Je peux vous aider sur quel bien ?" time="10:23" />
                  <ChatBubble type="user" message="Le T3 rue de la Paix" time="10:24" />
                  <ChatBubble
                    type="bot"
                    message="Excellent choix ! 🏠 Ce bien est disponible. Préférez-vous une visite cette semaine ou ce week-end ?"
                    time="10:24"
                    buttons={['Cette semaine', 'Ce week-end']}
                  />
                  <ChatBubble type="user" message="Cette semaine" time="10:25" />
                  <ChatBubble
                    type="bot"
                    message="Parfait ! J'ai 2 créneaux disponibles :\n• Mercredi 18h (15 min)\n• Jeudi 12h30 (15 min)\n\nLequel vous arrange ?"
                    time="10:25"
                    buttons={['Mercredi 18h', 'Jeudi 12h30']}
                  />
                  <ChatBubble type="user" message="Mercredi 18h" time="10:25" />
                  <ChatBubble
                    type="bot"
                    message="✅ C'est réservé ! Mercredi 15/11 à 18h00.\n\nVous recevrez un email de confirmation avec :\n• L'adresse exacte\n• Le dossier du bien\n• Un rappel 1h avant\n\nÀ mercredi ! 🎉"
                    time="10:26"
                  />
                  <div className="flex items-center gap-2">
                    <div className="bg-gray-800 rounded-2xl px-4 py-3 flex gap-1">
                      <span className="w-2 h-2 bg-spider-cyan rounded-full animate-bounce"></span>
                      <span className="w-2 h-2 bg-spider-cyan rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                      <span className="w-2 h-2 bg-spider-cyan rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-900 px-6 py-4 border-t border-gray-700">
                  <div className="flex gap-3">
                    <input
                      type="text"
                      placeholder="Mode démo - conversation pré-enregistrée"
                      disabled
                      className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-gray-500 cursor-not-allowed"
                    />
                    <button disabled className="px-6 py-3 bg-spider-cyan/30 text-cyan-300 rounded-lg cursor-not-allowed">
                      Envoyer
                    </button>
                  </div>
                </div>
              </div>

              {/* Panneau infos */}
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-purple-950/50 to-purple-900/30 rounded-2xl p-8 border border-purple-500/30">
                  <h3 className="text-2xl font-bold text-purple-400 mb-6 flex items-center gap-3">
                    <span className="text-3xl">⚙️</span>
                    En coulisses (invisible pour le client)
                  </h3>
                  <div className="space-y-4">
                    <ProcessStep icon="📊" title="Analyse IA du message" description="Détection intention : recherche info → RDV" color="purple" />
                    <ProcessStep icon="🎯" title="Scoring du prospect" description="Score: 82/100 (chaud) • Budget: 280-320k€" color="purple" />
                    <ProcessStep icon="📅" title="Calendly sync" description="Créneaux disponibles récupérés en temps réel" color="purple" />
                    <ProcessStep icon="📧" title="Email auto envoyé" description="Confirmation + dossier bien + rappel programmé" color="purple" />
                    <ProcessStep icon="💾" title="CRM mis à jour" description="Contact créé • Statut: RDV pris • Agent: Sophie L." color="purple" />
                  </div>
                </div>

                <div className="bg-gradient-to-br from-cyan-950/50 to-cyan-900/30 rounded-2xl p-8 border border-spider-cyan/30">
                  <h3 className="text-2xl font-bold text-spider-cyan mb-6">📈 Performance Chatbot</h3>
                  <div className="space-y-4">
                    <StatBar label="Taux de réponse" value={100} color="cyan" />
                    <StatBar label="Prise RDV auto" value={68} color="green" />
                    <StatBar label="Satisfaction client" value={94} color="yellow" />
                    <StatBar label="Disponibilité 24/7" value={100} color="purple" />
                  </div>
                  <div className="mt-6 bg-black/30 rounded-lg p-4">
                    <div className="text-center">
                      <div className="text-spider-cyan text-sm mb-2">Leads traités ce mois</div>
                      <div className="text-4xl font-black text-white font-orbitron">1 247</div>
                      <p className="text-xs text-gray-500 mt-2">vs 840 le mois dernier (+48%)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SÉQUENCES EMAIL */}
        <section className="px-8 py-20 bg-gradient-to-b from-deep-black via-gray-900 to-deep-black">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-white">📬 Séquences de Relance Automatiques</h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <EmailCard
                day="J+0"
                title="Réponse instantanée"
                timing="< 60 secondes après le contact"
                openRate={52}
                clickRate={11}
                replyRate={13}
                subject="Re: [Nom du bien] — dispo & prochaine visite"
                body={`Bonjour [Prénom],

Merci pour votre intérêt pour le [Type bien] situé [Adresse] !

✅ Le bien est disponible
✅ Visite possible dès cette semaine
✅ Dossier complet en pièce jointe

📅 Je vous propose 2 créneaux :
- Mercredi 18h (15 min)
- Jeudi 12h30 (15 min)

👉 Réserver mon créneau : [Lien Calendly]

À très vite !
[Signature]`}
                color="green"
              />

              <EmailCard
                day="J+2"
                title="Relance valeur"
                timing="Si email ouvert mais pas de clic"
                openRate={47}
                clickRate={9}
                replyRate={10}
                subject="3 raisons pour lesquelles [Adresse] part vite"
                body={`Bonjour [Prénom],

Vous avez consulté le bien [Adresse]. Voici pourquoi il intéresse beaucoup :

🎯 Emplacement exceptionnel (métro 3min)
💰 Charges réduites (85€/mois)
✨ Rénové récemment (cuisine équipée)

⚠️ 4 autres visites programmées cette semaine.

Je bloque un créneau pour vous ?
👉 [Lien Calendly - 15 min]

[Signature]`}
                color="orange"
              />

              <EmailCard
                day="J+7"
                title="Dernière relance douce"
                timing="Si toujours pas de réponse"
                openRate={41}
                clickRate={7}
                replyRate={8}
                subject="Toujours intéressé par [Adresse] ?"
                body={`Bonjour [Prénom],

Je n'ai pas eu de retour concernant le bien [Adresse].

Si celui-ci ne correspond plus, j'ai 2 alternatives qui pourraient vous plaire :

🏠 [Bien similaire 1] - [Prix]
🏠 [Bien similaire 2] - [Prix]

Souhaitez-vous que je vous envoie les dossiers ?

Répondez simplement OUI ou NON.

[Signature]`}
                color="cyan"
              />
            </div>

            {/* SMS Rappel */}
            <div className="mt-12">
              <div className="bg-gradient-to-r from-purple-950/50 to-pink-950/50 rounded-2xl p-8 border border-purple-500/30">
                <div className="flex items-start gap-6">
                  <div className="text-6xl">📱</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-purple-400 mb-4">SMS de Rappel (J+2 si pas de réponse)</h3>
                    <div className="bg-black/30 rounded-xl p-6 mb-6">
                      <p className="text-gray-300 leading-relaxed">
                        "Bonjour [Prénom], toujours partant pour [Adresse] ?<br />
                        2 créneaux libres aujourd'hui :<br />
                        <span className="text-spider-cyan">1️⃣ 12h20</span> ou <span className="text-spider-cyan">2️⃣ 17h10</span>
                        <br />
                        Répondez 1 ou 2 ✅"
                      </p>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-purple-500/10 rounded-lg p-4 text-center border border-purple-500/30">
                        <div className="text-purple-400 text-sm mb-2">Taux de réponse</div>
                        <div className="text-3xl font-black text-white">34%</div>
                      </div>
                      <div className="bg-purple-500/10 rounded-lg p-4 text-center border border-purple-500/30">
                        <div className="text-purple-400 text-sm mb-2">Réponse &lt; 2h</div>
                        <div className="text-3xl font-black text-white">78%</div>
                      </div>
                      <div className="bg-purple-500/10 rounded-lg p-4 text-center border border-purple-500/30">
                        <div className="text-purple-400 text-sm mb-2">RDV pris</div>
                        <div className="text-3xl font-black text-white">61%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Benchmarks */}
            <div className="mt-12 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">📊 Benchmarks Secteur Immobilier</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <BenchmarkCard label="Taux d'ouverture" value="30-40%" icon="📧" source="Campaign Monitor" />
                <BenchmarkCard label="Taux de clic" value="6-12%" icon="🖱️" source="Luxury Presence" />
                <BenchmarkCard label="Taux de réponse" value="8-20%" icon="💬" source="Realtor.com" />
                <BenchmarkCard label="Conversion email" value="2-5%" icon="🎯" source="HubSpot" />
              </div>
            </div>
          </div>
        </section>

        {/* ROI CALCULATOR */}
        <section className="px-8 py-20 bg-deep-black">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-white">💰 ROI Cumulé des 5 Automatisations</h2>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border-2 border-spider-cyan/30">
              <div className="mb-8">
                <div className="flex justify-between mb-4">
                  <label className="text-white font-semibold">Nombre d'agents</label>
                  <span className="text-spider-cyan font-black text-2xl font-orbitron">{nbAgents}</span>
                </div>
                <Slider value={[nbAgents]} onValueChange={(val) => setNbAgents(val[0])} min={1} max={20} step={1} className="w-full" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-black/30 rounded-xl p-6 text-center">
                  <div className="text-gray-400 text-sm mb-2">Heures gagnées/mois</div>
                  <div className="text-4xl font-black text-spider-cyan font-orbitron">{hoursPerMonth}h</div>
                </div>
                <div className="bg-black/30 rounded-xl p-6 text-center">
                  <div className="text-gray-400 text-sm mb-2">Économies/mois</div>
                  <div className="text-4xl font-black text-green-500 font-orbitron">{savingsPerMonth.toLocaleString()}€</div>
                </div>
                <div className="bg-black/30 rounded-xl p-6 text-center">
                  <div className="text-gray-400 text-sm mb-2">ROI annuel</div>
                  <div className="text-4xl font-black text-yellow-400 font-orbitron">{roiAnnual.toLocaleString()}€</div>
                </div>
                <div className="bg-black/30 rounded-xl p-6 text-center">
                  <div className="text-gray-400 text-sm mb-2">Payback</div>
                  <div className="text-4xl font-black text-purple-400 font-orbitron">{paybackDays} jours</div>
                </div>
              </div>

              <div className="bg-spider-cyan/10 border border-spider-cyan/30 rounded-xl p-4 text-center">
                <p className="text-gray-300 text-sm">
                  Pour <span className="text-spider-cyan font-bold">{nbAgents}</span> agents :<br />
                  <span className="text-white font-semibold">(15h × 35€) × {nbAgents} agents × 4 semaines = {savingsPerMonth.toLocaleString()}€/mois</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FUNNEL INTERACTIF - ajouté avant CTA */}
        <section className="px-8 py-20 bg-gradient-to-b from-deep-black via-purple-950/10 to-deep-black" id="funnel-section">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-black mb-6 text-white">🎯 Funnel de Conversion</h2>
              <div className="inline-flex bg-gray-900 rounded-xl p-2 border border-gray-700">
                <button 
                  onClick={() => setFunnelMode('before')}
                  className={`px-8 py-3 rounded-lg font-bold transition-all ${
                    funnelMode === 'before' ? 'bg-spider-red text-white' : 'text-gray-400'
                  }`}>
                  ❌ AVANT
                </button>
                <button 
                  onClick={() => setFunnelMode('after')}
                  className={`px-8 py-3 rounded-lg font-bold transition-all ${
                    funnelMode === 'after' ? 'bg-spider-cyan text-white' : 'text-gray-400'
                  }`}>
                  ✅ APRÈS
                </button>
              </div>
            </div>
            <div className="relative max-w-5xl mx-auto">
              <FunnelStage icon="📱" title="Leads Captés" valueBefore={420} valueAfter={420} mode={funnelMode} color="cyan" width="100%" description="Tous canaux" />
              <FunnelConnector lossBefore={160} lossAfter={20} mode={funnelMode} reason={funnelMode === 'before' ? '38% perdus' : '5% filtrés'} />
              <FunnelStage icon="🎯" title="Qualifiés" valueBefore={260} valueAfter={400} mode={funnelMode} color="purple" width="85%" description="Score ≥60" />
              <FunnelConnector lossBefore={142} lossAfter={80} mode={funnelMode} reason={funnelMode === 'before' ? '55% abandons' : '20% no-show'} />
              <FunnelStage icon="📅" title="RDV Pris" valueBefore={118} valueAfter={320} mode={funnelMode} color="yellow" width="70%" description="Visites programmées" />
              <FunnelConnector lossBefore={84} lossAfter={90} mode={funnelMode} reason={funnelMode === 'before' ? '71% perdus' : '28% refus'} />
              <FunnelStage icon="🎉" title="Ventes" valueBefore={34} valueAfter={230} mode={funnelMode} color="green" width="55%" description="Compromis signés" />
            </div>
          </div>
        </section>

        {/* CALCULATEUR ROI */}
        <section className="px-8 py-20 bg-gradient-to-b from-deep-black via-purple-950/20 to-deep-black">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-6xl font-black mb-6 font-['Orbitron'] bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
                💸 Calculez Vos Pertes Actuelles
              </h2>
            </div>
            <div className="bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 rounded-3xl p-12 border-2 border-purple-500/30">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div>
                  <label className="flex items-center gap-3 text-xl font-bold text-white mb-4">
                    <span className="text-4xl">👥</span> Nombre d'agents
                  </label>
                  <input type="range" min="1" max="50" value={nbAgents} onChange={(e) => setNbAgents(parseInt(e.target.value))} className="w-full" />
                  <div className="text-center mt-4 text-6xl font-black text-spider-cyan font-['Orbitron']">{nbAgents}</div>
                </div>
                <div>
                  <label className="flex items-center gap-3 text-xl font-bold text-white mb-4">
                    <span className="text-4xl">📞</span> Leads/mois
                  </label>
                  <input type="range" min="50" max="1000" step="50" value={nbLeads} onChange={(e) => setNbLeads(parseInt(e.target.value))} className="w-full" />
                  <div className="text-center mt-4 text-6xl font-black text-green-400 font-['Orbitron']">{nbLeads}</div>
                </div>
              </div>
              <ROICalculationResults nbAgents={nbAgents} nbLeads={nbLeads} tjm={tjm} avgCommission={avgCommission} />
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="px-8 py-20 bg-gradient-to-b from-deep-black via-spider-red/10 to-deep-black">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-black mb-6 text-white">Prêt à Automatiser Votre Agence ?</h2>
            <p className="text-2xl text-gray-300 mb-12">Démo gratuite • Setup en 48h • ROI garanti</p>
            <button className="px-12 py-6 bg-gradient-to-r from-spider-red to-red-600 text-white font-black text-2xl rounded-xl shadow-[0_0_60px_rgba(239,68,68,0.6)] hover:shadow-[0_0_80px_rgba(239,68,68,0.8)] hover:scale-105 transition-all duration-300">
              Demander une démo ✨
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default QualificationLeads;
