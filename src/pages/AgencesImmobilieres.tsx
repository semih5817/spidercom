import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Clock, DollarSign, Users, Sparkles, Calculator, Star } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackgroundEffects from "@/components/BackgroundEffects";
import CTABooking from "@/components/CTABooking";
import { useCalendly } from "@/hooks/useCalendly";
import { Slider } from "@/components/ui/slider";
const AgencesImmobilieres = () => {
  const {
    openCalendly
  } = useCalendly();
  const [agentCount, setAgentCount] = useState(3);
  const [animatedMetrics, setAnimatedMetrics] = useState({
    time: 0,
    conversion: 0,
    satisfaction: 0,
    hours: 0,
    roi: 0
  });

  // Animation des métriques au chargement
  useEffect(() => {
    const animateValue = (start: number, end: number, duration: number, key: string) => {
      const startTime = Date.now();
      const animate = () => {
        const now = Date.now();
        const progress = Math.min((now - startTime) / duration, 1);
        const value = start + (end - start) * progress;
        setAnimatedMetrics(prev => ({
          ...prev,
          [key]: Math.round(value)
        }));
        if (progress < 1) requestAnimationFrame(animate);
      };
      animate();
    };
    animateValue(0, 87, 2000, 'time');
    animateValue(0, 40, 2000, 'conversion');
    animateValue(0, 87, 2000, 'satisfaction');
    animateValue(0, 15, 2000, 'hours');
    animateValue(0, 3200, 2000, 'roi');
  }, []);
  const solutions = [{
    id: 1,
    icon: "🎯",
    color: "#06b6d4",
    title: "Qualification & Suivi des Leads",
    description: "Score intelligent de 0 à 100 pour chaque prospect. L'IA analyse comportement, budget, timing et priorise automatiquement.",
    stats: ["-2h/jour de tri", "+40% conversion", "ROI : +1 200€/mois"],
    tag: "IA + CRM",
    link: "/qualification-leads"
  }, {
    id: 2,
    icon: "📧",
    color: "#a855f7",
    title: "Emails & Relances Post-Visite",
    description: "Scénarios email personnalisés selon le profil. Relances intelligentes après visites. GPT génère le contenu parfait.",
    stats: ["-5h/semaine", "+62% ouverture", "ROI : +800€/mois"],
    tag: "IA + Email",
    link: "/emails-relances"
  }, {
    id: 3,
    icon: "🔗",
    color: "#10b981",
    title: "Intégration Automatique CRM",
    description: "Synchronisation temps réel avec tous vos outils. Portails → CRM → Email → Calendrier. Zéro saisie manuelle.",
    stats: ["-3h/jour de saisie", "0 erreur", "ROI : +1 050€/mois"],
    tag: "Connecteurs API",
    link: "/integration-crm"
  }, {
    id: 4,
    icon: "📡",
    color: "#6366f1",
    title: "Publication Multi-Plateformes",
    description: "Publiez sur 6 portails (SeLoger, Leboncoin, PAP...) en 12 min au lieu de 100. L'IA adapte chaque annonce.",
    stats: ["-88% de temps", "6 portails synchro", "ROI : +1 540€/mois"],
    tag: "IA + N8N",
    link: "/publication-multi-plateformes"
  }, {
    id: 5,
    icon: "🏘️",
    color: "#f97316",
    title: "Gestion Locative & Maintenance",
    description: "Incidents, loyers, quittances, relances : tout géré automatiquement. Classement IA + assignation prestataires.",
    stats: ["-60% temps incident", "-70% impayés", "ROI : +1 680€/mois"],
    tag: "IA + Workflow",
    link: "/gestion-locative"
  }, {
    id: 6,
    icon: "🎨",
    color: "#ec4899",
    title: "Home Staging Virtuel IA",
    description: "Transformez n'importe quelle pièce vide en intérieur design en 30 secondes. IA génère un style parisien contemporain sur vos photos.",
    stats: ["30 sec/image", "+35% visites", "-80% coût staging"],
    tag: "IA Génération",
    link: "/home-staging-virtuel",
    badge: "NOUVEAU"
  }, {
    id: 7,
    icon: "📋",
    color: "#14b8a6",
    title: "Comparateur États des Lieux IA",
    description: "Comparez automatiquement état des lieux d'entrée et de sortie. L'IA détecte les différences et génère le rapport en 2 minutes.",
    stats: ["2 min vs 45 min", "100% légal", "0 litige oublié"],
    tag: "IA Vision + OCR",
    link: "/comparateur-etats-lieux",
    badge: "NOUVEAU"
  }];
  const processSteps = [{
    num: 1,
    icon: "📥",
    title: "Collecte Leads",
    desc: "Agrégation multi-sources"
  }, {
    num: 2,
    icon: "🎯",
    title: "Qualification",
    desc: "Score IA 0-100"
  }, {
    num: 3,
    icon: "📧",
    title: "Emails",
    desc: "GPT adaptatif"
  }, {
    num: 4,
    icon: "🔗",
    title: "Sync CRM",
    desc: "Temps réel"
  }, {
    num: 5,
    icon: "🎨",
    title: "Staging",
    desc: "IA génération"
  }, {
    num: 6,
    icon: "📡",
    title: "Publication",
    desc: "6 portails/12min"
  }, {
    num: 7,
    icon: "🏘️",
    title: "Gestion",
    desc: "Workflow incidents"
  }, {
    num: 8,
    icon: "📋",
    title: "États lieux",
    desc: "Comparaison IA"
  }, {
    num: 9,
    icon: "📊",
    title: "Analytics",
    desc: "Dashboards live"
  }];
  const testimonials = [{
    name: "Thomas Dubois",
    role: "Gestionnaire - Agence Immobilière Strasbourg",
    avatar: "👨‍💼",
    quote: "Le comparateur d'états des lieux nous a sauvé sur 12 litiges ce mois-ci. C'est incroyable.",
    results: "0 litige perdu en 6 mois"
  }, {
    name: "Marie Lefèvre",
    role: "Agent - Agence Immobilière Nancy",
    avatar: "👩",
    quote: "Le home staging virtuel a transformé nos annonces. +41% de visites en moyenne depuis qu'on l'utilise.",
    results: "+41% de visites générées"
  }];

  // Calcul ROI
  const hoursPerMonth = 15 * 4 * agentCount;
  const savingsPerMonth = Math.round(15 * 35 * agentCount * 4);
  const roiPerYear = savingsPerMonth * 12;
  const paybackDays = 7;
  return <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
      <Header />
      <BackgroundEffects />
      
      <main className="relative">
        {/* HERO SECTION IMMERSIVE */}
        <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
          {/* Animated background */}
          <div className="absolute inset-0 bg-gradient-to-br from-spider-red/20 via-transparent to-spider-cyan/20 animate-pulse" style={{
          animationDuration: '4s'
        }} />
          
          {/* Radial gradients */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-spider-red/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-spider-cyan/20 rounded-full blur-3xl animate-float" style={{
          animationDelay: '2s'
        }} />

          <div className="container mx-auto relative z-10">
            <div className="text-center space-y-8 max-w-5xl mx-auto">
              {/* Badge principal */}
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6
            }} className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-spider-red/20 to-orange-500/20 border border-spider-red/30 rounded-full backdrop-blur-sm">
                <span className="text-3xl">🏢</span>
                <span className="font-inter font-bold text-white uppercase text-sm tracking-widest">
                  7 Solutions Transformatrices
                </span>
              </motion.div>

              {/* Mega titre animé */}
              <motion.h1 initial={{
              opacity: 0,
              scale: 0.9
            }} animate={{
              opacity: 1,
              scale: 1
            }} transition={{
              duration: 0.8,
              delay: 0.2
            }} className="font-orbitron text-5xl md:text-7xl lg:text-8xl font-black leading-tight">
                <span className="bg-gradient-to-r from-white via-orange-200 to-white bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                  Transformez Votre Agence Immobilière
                </span>
              </motion.h1>

              {/* Sous-titre */}
              <motion.p initial={{
              opacity: 0
            }} animate={{
              opacity: 1
            }} transition={{
              duration: 0.8,
              delay: 0.4
            }} className="font-inter text-2xl md:text-3xl text-white/80 font-light max-w-3xl mx-auto">
                5 Automatisations + 2 Outils IA = <span className="text-spider-red font-bold">87% de temps économisé</span>
              </motion.p>

              {/* Métriques animées */}
              <motion.div initial={{
              opacity: 0,
              y: 30
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.8,
              delay: 0.6
            }} className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-12">
                <div className="p-6 bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl hover:border-spider-red/50 transition-all hover:scale-105">
                  <div className="text-5xl font-orbitron font-black text-orange-400 mb-2">
                    {animatedMetrics.time}%
                  </div>
                  <div className="text-sm text-white/70 font-inter">Temps économisé</div>
                </div>

                <div className="p-6 bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl hover:border-spider-cyan/50 transition-all hover:scale-105">
                  <div className="text-5xl font-orbitron font-black text-spider-cyan mb-2">
                    +{animatedMetrics.conversion}%
                  </div>
                  <div className="text-sm text-white/70 font-inter">Conversion leads</div>
                </div>

                <div className="p-6 bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl hover:border-emerald-500/50 transition-all hover:scale-105">
                  <div className="text-5xl font-orbitron font-black text-emerald-400 mb-2">
                    {animatedMetrics.hours}h
                  </div>
                  <div className="text-sm text-white/70 font-inter">Gagnées/semaine</div>
                </div>

                <div className="p-6 bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl hover:border-orange-500/50 transition-all hover:scale-105">
                  <div className="text-5xl font-orbitron font-black text-orange-400 mb-2">
                    4.9
                  </div>
                  <div className="text-sm text-white/70 font-inter">Satisfaction/5</div>
                </div>

                <div className="p-6 bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl hover:border-spider-red/50 transition-all hover:scale-105">
                  <div className="text-4xl font-orbitron font-black text-spider-red mb-2">
                    {animatedMetrics.roi}€
                  </div>
                  <div className="text-sm text-white/70 font-inter">/agent/mois</div>
                </div>
              </motion.div>

              {/* CTA Principal */}
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.8,
              delay: 0.8
            }} className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
                <button onClick={openCalendly} className="group inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-primary via-accent to-primary text-white font-inter font-bold text-xl rounded-xl hover:shadow-2xl hover:shadow-primary/50 transition-all hover:scale-105 bg-[length:200%_auto] hover:bg-right animate-gradient">
                  <Sparkles className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                  Voir une Démo Complète
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </button>

                <a href="#roi-calculator" className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white/5 backdrop-blur-sm border-2 border-white/20 text-white font-inter font-bold text-xl rounded-xl hover:bg-white/10 hover:border-spider-cyan/50 transition-all hover:scale-105">
                  <Calculator className="w-6 h-6" />
                  Calculer mon ROI
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SECTION: 7 SOLUTIONS */}
        <section className="px-4 py-20 relative">
          <div className="container mx-auto">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="text-center mb-16">
              <h2 className="font-orbitron text-4xl md:text-6xl font-black text-white mb-4">
                🚀 Les 7 Solutions Qui Transforment
              </h2>
              <p className="font-inter text-xl text-white/60 max-w-3xl mx-auto">
                5 automatisations process + 2 outils IA spécialisés pour révolutionner votre quotidien
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {solutions.map((solution, index) => <motion.div key={solution.id} initial={{
              opacity: 0,
              y: 30
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.5,
              delay: index * 0.1
            }}>
                  <Link to={solution.link} className="group block p-8 bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm rounded-2xl border-2 transition-all duration-300 hover:scale-105 cursor-pointer relative overflow-hidden" style={{
                borderColor: `${solution.color}30`
              }} onMouseEnter={e => {
                e.currentTarget.style.borderColor = solution.color;
                e.currentTarget.style.boxShadow = `0 20px 60px ${solution.color}66`;
              }} onMouseLeave={e => {
                e.currentTarget.style.borderColor = `${solution.color}30`;
                e.currentTarget.style.boxShadow = 'none';
              }}>
                    {/* Gradient overlay au hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity" style={{
                  background: `linear-gradient(135deg, ${solution.color} 0%, transparent 100%)`
                }} />

                    {/* Badge NOUVEAU */}
                    {solution.badge && <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full text-xs font-inter font-black text-white animate-pulse">
                        ✨ {solution.badge}
                      </div>}

                    {/* Numéro */}
                    <div className="absolute top-4 left-4 w-8 h-8 rounded-full flex items-center justify-center font-orbitron font-bold text-sm" style={{
                  backgroundColor: `${solution.color}30`,
                  color: solution.color
                }}>
                      {solution.id}
                    </div>

                    {/* Icône */}
                    <div className="text-6xl mb-4 mt-4 transform group-hover:scale-110 group-hover:rotate-6 transition-all">
                      {solution.icon}
                    </div>

                    {/* Tag */}
                    <div className="inline-block px-3 py-1 rounded-full text-xs font-inter font-semibold mb-4" style={{
                  backgroundColor: `${solution.color}20`,
                  color: solution.color
                }}>
                      {solution.tag}
                    </div>

                    {/* Titre */}
                    <h3 className="font-orbitron text-xl font-bold text-white mb-3 leading-tight group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all">
                      {solution.title}
                    </h3>

                    {/* Description */}
                    <p className="font-inter text-gray-400 text-sm leading-relaxed mb-6">
                      {solution.description}
                    </p>

                    {/* Stats */}
                    <div className="space-y-2 mb-6">
                      {solution.stats.map((stat, i) => <div key={i} className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs font-inter text-white/80 mr-2 mb-2 group-hover:bg-white/10 group-hover:border-white/20 transition-all">
                          {stat}
                        </div>)}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center gap-2 font-inter font-semibold group-hover:gap-4 transition-all" style={{
                  color: solution.color
                }}>
                      {solution.id <= 5 ? 'Découvrir' : 'Essayer l\'outil'}
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </Link>
                </motion.div>)}
            </div>
          </div>
        </section>

        {/* SECTION: PROCESSUS TIMELINE */}
        <section className="px-4 py-20 bg-gradient-to-b from-transparent via-spider-red/5 to-transparent">
          <div className="container mx-auto">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="text-center mb-16">
              <h2 className="font-orbitron text-4xl md:text-6xl font-black text-white mb-4">
                🔄 Le Processus Complet en 9 Étapes
              </h2>
              <p className="font-inter text-xl text-white/60 max-w-3xl mx-auto">
                De la collecte des leads au reporting final, tout est automatisé
              </p>
            </motion.div>

            {/* Timeline Desktop */}
            <div className="hidden lg:grid grid-cols-9 gap-4 max-w-7xl mx-auto relative">
              {/* Ligne de connexion */}
              <div className="absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-spider-red via-orange-500 to-spider-cyan opacity-30" />

              {processSteps.map((step, index) => <motion.div key={step.num} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.5,
              delay: index * 0.1
            }} className="relative z-10 group">
                  {/* Circle */}
                  <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-gray-900 to-black border-2 border-primary/30 flex items-center justify-center mb-4 group-hover:border-primary group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/50 transition-all">
                    <div className="text-center">
                      <div className="text-3xl mb-1">{step.icon}</div>
                      <div className="text-xs font-orbitron font-bold text-spider-red">{step.num}</div>
                    </div>
                  </div>

                  {/* Titre */}
                  <h4 className="font-inter font-bold text-white text-xs text-center mb-2">
                    {step.title}
                  </h4>

                  {/* Description */}
                  <p className="font-inter text-[10px] text-white/60 text-center">
                    {step.desc}
                  </p>
                </motion.div>)}
            </div>

            {/* Timeline Mobile */}
            <div className="lg:hidden space-y-4 max-w-md mx-auto">
              {processSteps.map((step, index) => <motion.div key={step.num} initial={{
              opacity: 0,
              x: -20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.5,
              delay: index * 0.1
            }} className="flex items-center gap-4 p-4 bg-gradient-to-r from-gray-900/80 to-black/80 rounded-xl border border-spider-red/20 backdrop-blur-sm hover:border-spider-red/50 transition-all">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gray-900 to-black border-2 border-spider-red/30 flex items-center justify-center flex-shrink-0">
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
                </motion.div>)}
            </div>
          </div>
        </section>

        {/* SECTION: COMPARAISON AVANT/APRÈS */}
        <section className="px-4 py-20">
          <div className="container mx-auto">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="text-center mb-16">
              <h2 className="font-orbitron text-4xl md:text-6xl font-black text-white mb-4">
                ⚡ Avant / Après
              </h2>
              <p className="font-inter text-xl text-white/60 max-w-3xl mx-auto">
                La transformation concrète de votre quotidien
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* AVANT */}
              <motion.div initial={{
              opacity: 0,
              x: -30
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6
            }} className="group p-8 bg-gradient-to-br from-red-900/20 to-red-950/40 border-2 border-red-500/30 rounded-2xl hover:border-red-500/50 transition-all">
                <div className="text-center mb-6">
                  <div className="text-5xl mb-3">😰</div>
                  <h3 className="font-orbitron text-2xl font-bold text-red-400 mb-2">AVANT</h3>
                  <p className="text-red-300/80 font-inter">La galère quotidienne</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-3 bg-red-950/30 rounded-lg">
                    <span className="text-2xl flex-shrink-0">⏱️</span>
                    <div>
                      <div className="font-inter font-semibold text-white mb-1">15h perdues/semaine</div>
                      <div className="text-sm text-red-300/70">Tâches répétitives et manuelles</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-red-950/30 rounded-lg">
                    <span className="text-2xl flex-shrink-0">📉</span>
                    <div>
                      <div className="font-inter font-semibold text-white mb-1">40% de leads ignorés</div>
                      <div className="text-sm text-red-300/70">Pas le temps de tous les traiter</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-red-950/30 rounded-lg">
                    <span className="text-2xl flex-shrink-0">😓</span>
                    <div>
                      <div className="font-inter font-semibold text-white mb-1">100 min pour 6 portails</div>
                      <div className="text-sm text-red-300/70">Copier-coller sans fin</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-red-950/30 rounded-lg">
                    <span className="text-2xl flex-shrink-0">❌</span>
                    <div>
                      <div className="font-inter font-semibold text-white mb-1">45 min par état des lieux</div>
                      <div className="text-sm text-red-300/70">Comparaison manuelle fastidieuse</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-red-950/30 rounded-lg">
                    <span className="text-2xl flex-shrink-0">💸</span>
                    <div>
                      <div className="font-inter font-semibold text-white mb-1">Staging physique : 800€</div>
                      <div className="text-sm text-red-300/70">Par bien + délai de 2 semaines</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* APRÈS */}
              <motion.div initial={{
              opacity: 0,
              x: 30
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6
            }} className="group p-8 bg-gradient-to-br from-emerald-900/20 to-emerald-950/40 border-2 border-emerald-500/30 rounded-2xl hover:border-emerald-500/50 transition-all">
                <div className="text-center mb-6">
                  <div className="text-5xl mb-3">🚀</div>
                  <h3 className="font-orbitron text-2xl font-bold text-emerald-400 mb-2">APRÈS</h3>
                  <p className="text-emerald-300/80 font-inter">L'automatisation intelligente</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-3 bg-emerald-950/30 rounded-lg">
                    <span className="text-2xl flex-shrink-0">✨</span>
                    <div>
                      <div className="font-inter font-semibold text-white mb-1">30 min supervision/semaine</div>
                      <div className="text-sm text-emerald-300/70">87% de temps économisé</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-emerald-950/30 rounded-lg">
                    <span className="text-2xl flex-shrink-0">🎯</span>
                    <div>
                      <div className="font-inter font-semibold text-white mb-1">100% des leads traités</div>
                      <div className="text-sm text-emerald-300/70">Score IA + priorisation auto</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-emerald-950/30 rounded-lg">
                    <span className="text-2xl flex-shrink-0">⚡</span>
                    <div>
                      <div className="font-inter font-semibold text-white mb-1">12 min pour 6 portails</div>
                      <div className="text-sm text-emerald-300/70">IA adapte chaque annonce</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-emerald-950/30 rounded-lg">
                    <span className="text-2xl flex-shrink-0">🤖</span>
                    <div>
                      <div className="font-inter font-semibold text-white mb-1">2 min par état des lieux</div>
                      <div className="text-sm text-emerald-300/70">IA Vision + rapport PDF auto</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-emerald-950/30 rounded-lg">
                    <span className="text-2xl flex-shrink-0">🎨</span>
                    <div>
                      <div className="font-inter font-semibold text-white mb-1">Staging virtuel : 30 sec</div>
                      <div className="text-sm text-emerald-300/70">IA génère 8 styles en HD/4K</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SECTION: CALCULATEUR ROI */}
        <section id="roi-calculator" className="px-4 py-20 bg-gradient-to-b from-transparent via-spider-cyan/5 to-transparent">
          <div className="container mx-auto max-w-4xl">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="text-center mb-12">
              <h2 className="font-orbitron text-4xl md:text-6xl font-black text-white mb-4">
                💰 Calculateur de ROI
              </h2>
              <p className="font-inter text-xl text-white/60">
                Estimez vos économies potentielles
              </p>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            scale: 0.95
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="p-8 md:p-12 bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border-2 border-spider-cyan/30 rounded-3xl">
              {/* Slider */}
              <div className="mb-12">
                <div className="flex items-center justify-between mb-6">
                  <label className="font-inter font-semibold text-white text-lg">
                    Nombre d'agents dans votre agence
                  </label>
                  <div className="text-5xl font-orbitron font-black text-spider-cyan">
                    {agentCount}
                  </div>
                </div>
                
                <Slider value={[agentCount]} onValueChange={value => setAgentCount(value[0])} min={1} max={20} step={1} className="mb-2" />
                
                <div className="flex justify-between text-sm text-white/50 font-inter">
                  <span>1 agent</span>
                  <span>20 agents</span>
                </div>
              </div>

              {/* Résultats */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="p-6 bg-gradient-to-br from-spider-red/20 to-orange-500/20 border border-spider-red/30 rounded-2xl">
                  <div className="flex items-center gap-2 mb-3">
                    <Clock className="w-5 h-5 text-spider-red" />
                    <div className="text-sm text-white/70 font-inter">Heures économisées</div>
                  </div>
                  <div className="text-4xl font-orbitron font-black text-white mb-1">
                    {hoursPerMonth}h
                  </div>
                  <div className="text-xs text-white/50 font-inter">par mois</div>
                </div>

                <div className="p-6 bg-gradient-to-br from-spider-cyan/20 to-blue-500/20 border border-spider-cyan/30 rounded-2xl">
                  <div className="flex items-center gap-2 mb-3">
                    <DollarSign className="w-5 h-5 text-spider-cyan" />
                    <div className="text-sm text-white/70 font-inter">Économies mensuelles</div>
                  </div>
                  <div className="text-4xl font-orbitron font-black text-white mb-1">
                    {savingsPerMonth.toLocaleString()}€
                  </div>
                  <div className="text-xs text-white/50 font-inter">par mois</div>
                </div>

                <div className="p-6 bg-gradient-to-br from-emerald-500/20 to-green-500/20 border border-emerald-500/30 rounded-2xl">
                  <div className="flex items-center gap-2 mb-3">
                    <TrendingUp className="w-5 h-5 text-emerald-400" />
                    <div className="text-sm text-white/70 font-inter">ROI annuel</div>
                  </div>
                  <div className="text-4xl font-orbitron font-black text-white mb-1">
                    {roiPerYear.toLocaleString()}€
                  </div>
                  <div className="text-xs text-white/50 font-inter">par an</div>
                </div>
              </div>

              {/* Info supplémentaire */}
              <div className="p-6 bg-gradient-to-r from-orange-500/10 to-spider-red/10 border border-orange-500/30 rounded-xl">
                <div className="flex items-start gap-4">
                  <Sparkles className="w-6 h-6 text-orange-400 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-inter font-semibold text-white mb-2">
                      Retour sur investissement garanti en {paybackDays} jours
                    </div>
                    <div className="text-sm text-white/70 font-inter leading-relaxed">
                      Calcul basé sur un taux horaire moyen de 35€ et 15h économisées par agent par semaine. 
                      ROI réel observé chez nos clients actuels.
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8 text-center">
                <button onClick={openCalendly} className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-spider-cyan to-blue-500 text-white font-inter font-bold text-lg rounded-xl hover:shadow-2xl hover:shadow-spider-cyan/50 transition-all hover:scale-105">
                  <Calculator className="w-5 h-5" />
                  Obtenir une simulation personnalisée
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECTION: TÉMOIGNAGES */}
        <section className="px-4 py-20">
          <div className="container mx-auto">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="text-center mb-16">
              <h2 className="font-orbitron text-4xl md:text-6xl font-black text-white mb-4">
                ⭐ Ce Que Disent Nos Clients
              </h2>
              <p className="font-inter text-xl text-white/60 max-w-3xl mx-auto">2 agences transformées, des résultats concrets</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => <motion.div key={index} initial={{
              opacity: 0,
              y: 30
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6,
              delay: index * 0.2
            }} className="p-6 bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-spider-cyan/50 transition-all hover:scale-105">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-4xl">{testimonial.avatar}</div>
                    <div>
                      <div className="font-inter font-bold text-white">{testimonial.name}</div>
                      <div className="text-sm text-white/60">{testimonial.role}</div>
                    </div>
                  </div>

                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />)}
                  </div>

                  <p className="font-inter text-white/80 italic mb-4 leading-relaxed">
                    "{testimonial.quote}"
                  </p>

                  <div className="pt-4 border-t border-white/10">
                    <div className="text-sm font-inter font-semibold text-spider-cyan">
                      {testimonial.results}
                    </div>
                  </div>
                </motion.div>)}
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <CTABooking />
      </main>

      <Footer />
    </div>;
};
export default AgencesImmobilieres;