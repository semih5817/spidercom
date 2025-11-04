import { useState } from "react";
import { Link } from "react-router-dom";
import { Target, Mail, Link as LinkIcon, Radio, Home, ArrowRight, TrendingUp, Clock, DollarSign, Users, Star, Sparkles } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackgroundEffects from "@/components/BackgroundEffects";
import { useCalendly } from "@/hooks/useCalendly";

const AgencesImmobilieres = () => {
  const { openCalendly } = useCalendly();
  const [agentCount, setAgentCount] = useState(3);

  const automations = [
    {
      id: 1,
      icon: "🎯",
      color: "cyan",
      colorHex: "#06b6d4",
      title: "Qualification & Suivi Automatique des Leads",
      description: "Score intelligent de 0 à 100 pour chaque prospect. L'IA analyse comportement, budget, timing et priorise automatiquement.",
      stats: ["-2h/jour de tri manuel", "+40% de conversion", "ROI : +1 200€/mois"],
      tag: "IA + CRM",
      link: "/qualification-leads"
    },
    {
      id: 2,
      icon: "📧",
      color: "purple",
      colorHex: "#a855f7",
      title: "Emails & Relances Post-Visite Automatiques",
      description: "Scénarios email personnalisés selon le profil. Relances intelligentes après visites. GPT génère le contenu parfait.",
      stats: ["-5h/semaine d'emails manuels", "+62% de taux d'ouverture", "ROI : +800€/mois"],
      tag: "IA + Email",
      link: "/emails-relances"
    },
    {
      id: 3,
      icon: "🔗",
      color: "emerald",
      colorHex: "#10b981",
      title: "Intégration Automatique des Données CRM",
      description: "Synchronisation temps réel avec tous vos outils. Portails → CRM → Email → Calendrier. Zéro saisie manuelle.",
      stats: ["-3h/jour de double saisie", "0 erreur de données", "ROI : +1 050€/mois"],
      tag: "Connecteurs API",
      link: "/integration-crm"
    },
    {
      id: 4,
      icon: "📡",
      color: "indigo",
      colorHex: "#6366f1",
      title: "Publication Automatique Multi-Plateformes",
      description: "Publiez sur 6 portails (SeLoger, Leboncoin, PAP...) en 12 min au lieu de 100. L'IA adapte chaque annonce.",
      stats: ["-88% de temps de publication", "6 portails synchronisés", "ROI : +1 540€/mois"],
      tag: "IA + N8N",
      link: "/publication-multi-plateformes"
    },
    {
      id: 5,
      icon: "🏘️",
      color: "orange",
      colorHex: "#f97316",
      title: "Gestion Locative & Maintenance Automatisées",
      description: "Incidents, loyers, quittances, relances : tout géré automatiquement. Classement IA + assignation prestataires.",
      stats: ["-60% temps traitement incident", "-70% loyers impayés", "ROI : +1 680€/mois"],
      tag: "IA + Workflow",
      link: "/gestion-locative"
    }
  ];

  const processSteps = [
    { num: 1, icon: "📥", title: "Collecte Leads", desc: "Agrégation multi-sources" },
    { num: 2, icon: "🎯", title: "Qualification automatique", desc: "Score IA 0-100" },
    { num: 3, icon: "📧", title: "Emails personnalisés", desc: "GPT adaptatif" },
    { num: 4, icon: "🔗", title: "Sync CRM temps réel", desc: "Zéro saisie manuelle" },
    { num: 5, icon: "📡", title: "Publication multi-plateformes", desc: "6 portails en 12 min" },
    { num: 6, icon: "🏘️", title: "Gestion locative automatisée", desc: "Workflow incidents" },
    { num: 7, icon: "📊", title: "Analytics & ROI", desc: "Tableaux de bord live" }
  ];

  // Calcul ROI
  const hoursPerMonth = 15 * 4 * agentCount;
  const savingsPerMonth = Math.round(15 * 35 * agentCount * 4);
  const roiPerYear = savingsPerMonth * 12;
  const paybackDays = 7;

  return (
    <div className="min-h-screen">
      <Header />
      <BackgroundEffects />
      
      <main className="relative">
        {/* HERO SECTION */}
        <section className="px-4 py-20 md:py-32">
          <div className="container mx-auto">
            <div className="text-center space-y-8 max-w-5xl mx-auto">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-spider-red/10 border border-spider-red/30 rounded-full">
                <span className="text-2xl">🏢</span>
                <span className="font-inter font-semibold text-spider-red uppercase text-sm tracking-wide">
                  Solutions pour Agences Immobilières
                </span>
              </div>

              {/* Titre */}
              <h1 className="font-orbitron text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight">
                5 Automatisations Qui Transforment Votre Agence
              </h1>

              {/* Sous-titre */}
              <p className="font-inter text-xl md:text-2xl text-white/70 max-w-3xl mx-auto">
                Gagnez 15h par semaine • Doublez vos conversions • Zéro tâche répétitive
              </p>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <div className="p-6 bg-gradient-to-br from-gray-900 to-gray-800 border border-spider-red/20 rounded-2xl hover:border-spider-red/50 transition-all">
                  <div className="text-5xl mb-3">⚡</div>
                  <div className="font-orbitron text-3xl font-black text-white mb-2">15h/semaine</div>
                  <div className="font-inter text-white/60">gagnées en moyenne</div>
                </div>

                <div className="p-6 bg-gradient-to-br from-gray-900 to-gray-800 border border-spider-cyan/20 rounded-2xl hover:border-spider-cyan/50 transition-all">
                  <div className="text-5xl mb-3">💰</div>
                  <div className="font-orbitron text-3xl font-black text-white mb-2">+3 200€</div>
                  <div className="font-inter text-white/60">/agent/mois économisés</div>
                </div>

                <div className="p-6 bg-gradient-to-br from-gray-900 to-gray-800 border border-emerald-500/20 rounded-2xl hover:border-emerald-500/50 transition-all">
                  <div className="text-5xl mb-3">📈</div>
                  <div className="font-orbitron text-3xl font-black text-white mb-2">+87%</div>
                  <div className="font-inter text-white/60">de satisfaction client</div>
                </div>
              </div>

              {/* CTA */}
              <button
                onClick={openCalendly}
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-spider-red to-spider-red/80 text-white font-inter font-bold text-lg rounded-xl hover:shadow-lg hover:shadow-spider-red/50 transition-all hover:scale-105 mt-8"
              >
                <Sparkles className="w-5 h-5" />
                Voir une démo complète
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>

        {/* SECTION: LES 5 AUTOMATISATIONS */}
        <section className="px-4 py-20 bg-gradient-to-b from-transparent to-spider-red/5">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-orbitron text-4xl md:text-5xl font-black text-white mb-4">
                🎯 Nos Automatisations IA
              </h2>
              <p className="font-inter text-xl text-white/60 max-w-2xl mx-auto">
                5 solutions qui révolutionnent votre quotidien d'agent immobilier
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {automations.map((auto, index) => (
                <Link
                  key={auto.id}
                  to={auto.link}
                  className="group p-8 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border-2 transition-all duration-300 hover:scale-105 cursor-pointer"
                  style={{
                    borderColor: `${auto.colorHex}30`,
                    animationDelay: `${index * 100}ms`
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `0 0 40px ${auto.colorHex}66`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  {/* Icône */}
                  <div className="text-6xl mb-4">{auto.icon}</div>

                  {/* Tag */}
                  <div 
                    className="inline-block px-3 py-1 rounded-full text-xs font-inter font-semibold mb-4"
                    style={{
                      backgroundColor: `${auto.colorHex}20`,
                      color: auto.colorHex
                    }}
                  >
                    {auto.tag}
                  </div>

                  {/* Titre */}
                  <h3 className="font-orbitron text-2xl font-bold text-white mb-4 leading-tight">
                    {auto.title}
                  </h3>

                  {/* Description */}
                  <p className="font-inter text-gray-300 leading-relaxed mb-6">
                    {auto.description}
                  </p>

                  {/* Stats */}
                  <div className="space-y-2 mb-6">
                    {auto.stats.map((stat, i) => (
                      <div 
                        key={i}
                        className="inline-block px-3 py-1 bg-white/5 rounded-lg text-sm font-inter text-white/80 mr-2 mb-2"
                      >
                        {stat}
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center gap-2 font-inter font-semibold group-hover:gap-4 transition-all"
                    style={{ color: auto.colorHex }}
                  >
                    Découvrir
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION: PROCESSUS COMPLET */}
        <section className="px-4 py-20">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-orbitron text-4xl md:text-5xl font-black text-white mb-4">
                🔄 Le Processus Complet
              </h2>
              <p className="font-inter text-xl text-white/60 max-w-2xl mx-auto">
                De la collecte des leads au reporting final
              </p>
            </div>

            {/* Timeline Desktop */}
            <div className="hidden lg:flex items-start justify-between max-w-6xl mx-auto relative">
              {/* Ligne de connexion */}
              <div className="absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-spider-red via-spider-cyan to-spider-red opacity-30" 
                style={{ top: '60px' }}
              />

              {processSteps.map((step, index) => (
                <div key={step.num} className="flex flex-col items-center relative z-10 group" style={{ width: '120px' }}>
                  {/* Numéro + Icône */}
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-spider-red/30 flex items-center justify-center mb-4 group-hover:border-spider-red group-hover:scale-110 transition-all">
                    <div className="text-center">
                      <div className="text-3xl mb-1">{step.icon}</div>
                      <div className="text-xs font-orbitron font-bold text-spider-red">{step.num}</div>
                    </div>
                  </div>

                  {/* Titre */}
                  <h4 className="font-inter font-bold text-white text-sm text-center mb-2 px-2">
                    {step.title}
                  </h4>

                  {/* Description */}
                  <p className="font-inter text-xs text-white/60 text-center px-2">
                    {step.desc}
                  </p>

                  {/* Flèche animée */}
                  {index < processSteps.length - 1 && (
                    <div className="absolute -right-12 top-12 text-spider-red animate-pulse">
                      <ArrowRight className="w-6 h-6" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Timeline Mobile */}
            <div className="lg:hidden space-y-4 max-w-md mx-auto">
              {processSteps.map((step) => (
                <div key={step.num} className="flex items-center gap-4 p-4 bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl border border-spider-red/20">
                  <div className="w-16 h-16 rounded-full bg-gray-800 border-2 border-spider-red/30 flex items-center justify-center flex-shrink-0">
                    <div className="text-center">
                      <div className="text-2xl mb-1">{step.icon}</div>
                      <div className="text-xs font-orbitron font-bold text-spider-red">{step.num}</div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-inter font-bold text-white text-sm mb-1">
                      {step.title}
                    </h4>
                    <p className="font-inter text-xs text-white/60">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION: TÉMOIGNAGE */}
        <section className="px-4 py-20 bg-gradient-to-b from-spider-cyan/5 to-transparent">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto p-8 md:p-12 bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl border-2 border-spider-cyan/30 relative overflow-hidden"
              style={{ boxShadow: '0 0 60px rgba(6, 182, 212, 0.15)' }}
            >
              {/* Glow effect */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-spider-cyan/10 rounded-full blur-3xl" />
              
              <div className="relative z-10">
                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="font-inter text-2xl md:text-3xl italic text-white leading-relaxed mb-8">
                  "Spydercom nous a fait gagner 15h par semaine. On traite 2x plus de leads avec la même équipe. Le ROI est juste dingue."
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-6">
                  {/* Photo placeholder */}
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-spider-red to-spider-cyan flex items-center justify-center text-3xl flex-shrink-0">
                    👩‍💼
                  </div>

                  <div>
                    <div className="font-inter font-bold text-xl text-white mb-1">Sophie Martin</div>
                    <div className="font-inter text-spider-cyan mb-2">Directrice d'agence</div>
                    <div className="font-inter text-sm text-white/60 mb-2">Martin Immobilier - Paris 15e</div>
                    <div className="font-inter text-xs text-white/50">
                      42 biens gérés • +87% conversion
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: ROI GLOBAL */}
        <section className="px-4 py-20">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-orbitron text-4xl md:text-5xl font-black text-white mb-4">
                💰 ROI Cumulé des 5 Automatisations
              </h2>
              <p className="font-inter text-xl text-white/60 max-w-2xl mx-auto">
                Calculez vos économies en temps réel
              </p>
            </div>

            <div className="max-w-3xl mx-auto p-8 md:p-12 bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl border-2 border-spider-red/30">
              {/* Slider */}
              <div className="mb-12">
                <label className="font-inter text-white text-lg mb-4 block">
                  Nombre d'agents : <span className="font-orbitron font-black text-spider-red text-2xl">{agentCount}</span>
                </label>
                <input
                  type="range"
                  min="1"
                  max="20"
                  value={agentCount}
                  onChange={(e) => setAgentCount(Number(e.target.value))}
                  className="w-full h-3 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-spider-red"
                  style={{
                    background: `linear-gradient(to right, hsl(var(--spider-red)) 0%, hsl(var(--spider-red)) ${(agentCount / 20) * 100}%, rgb(55, 65, 81) ${(agentCount / 20) * 100}%, rgb(55, 65, 81) 100%)`
                  }}
                />
                <div className="flex justify-between text-xs text-white/40 mt-2">
                  <span>1 agent</span>
                  <span>20 agents</span>
                </div>
              </div>

              {/* Results */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="p-4 bg-black/30 rounded-xl border border-white/10">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-4 h-4 text-spider-cyan" />
                    <div className="text-xs text-white/60">Heures/mois</div>
                  </div>
                  <div className="font-orbitron font-black text-2xl text-white">{hoursPerMonth}h</div>
                </div>

                <div className="p-4 bg-black/30 rounded-xl border border-white/10">
                  <div className="flex items-center gap-2 mb-2">
                    <DollarSign className="w-4 h-4 text-emerald-400" />
                    <div className="text-xs text-white/60">Économies/mois</div>
                  </div>
                  <div className="font-orbitron font-black text-2xl text-white">{savingsPerMonth.toLocaleString()}€</div>
                </div>

                <div className="p-4 bg-black/30 rounded-xl border border-white/10">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-4 h-4 text-spider-red" />
                    <div className="text-xs text-white/60">ROI annuel</div>
                  </div>
                  <div className="font-orbitron font-black text-2xl text-white">{roiPerYear.toLocaleString()}€</div>
                </div>

                <div className="p-4 bg-black/30 rounded-xl border border-white/10">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="w-4 h-4 text-yellow-400" />
                    <div className="text-xs text-white/60">Payback</div>
                  </div>
                  <div className="font-orbitron font-black text-2xl text-white">{paybackDays}j</div>
                </div>
              </div>

              {/* Formule */}
              <div className="p-6 bg-spider-red/10 border border-spider-red/30 rounded-xl">
                <div className="font-inter text-sm text-white/80 leading-relaxed">
                  <strong className="text-white">Pour {agentCount} agent{agentCount > 1 ? 's' : ''} :</strong><br/>
                  (15h × 35€) × {agentCount} agent{agentCount > 1 ? 's' : ''} × 4 semaines = <span className="font-orbitron font-black text-spider-red text-lg">{savingsPerMonth.toLocaleString()}€/mois</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="px-4 py-20 bg-gradient-to-b from-spider-red/5 to-transparent">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center p-12 md:p-16 bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl border-2 border-spider-red/50 relative overflow-hidden"
              style={{ boxShadow: '0 0 80px rgba(235, 45, 58, 0.3)' }}
            >
              {/* Glow effects */}
              <div className="absolute top-0 left-0 w-96 h-96 bg-spider-red/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-spider-cyan/20 rounded-full blur-3xl" />
              
              <div className="relative z-10">
                <h2 className="font-orbitron text-4xl md:text-5xl font-black text-white mb-6">
                  Prêt à Automatiser Votre Agence ?
                </h2>
                <p className="font-inter text-xl text-white/70 mb-8 max-w-2xl mx-auto">
                  Démo gratuite • Setup en 48h • ROI garanti
                </p>

                <button
                  onClick={openCalendly}
                  className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-spider-red to-spider-red/80 text-white font-inter font-bold text-xl rounded-xl hover:shadow-lg hover:shadow-spider-red/50 transition-all hover:scale-105 mb-8"
                >
                  <Sparkles className="w-6 h-6" />
                  Demander une démo
                  <Sparkles className="w-6 h-6" />
                </button>

                {/* Social proof */}
                <div className="flex flex-wrap items-center justify-center gap-8 text-white/60 font-inter text-sm">
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-spider-cyan" />
                    <span>156 agences équipées</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    <span>4.9/5 (203 avis)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-spider-red" />
                    <span>Support 7j/7</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AgencesImmobilieres;
