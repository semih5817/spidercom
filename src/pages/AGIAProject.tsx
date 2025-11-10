import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, ArrowRight, XCircle, CheckCircle2, TrendingDown, TrendingUp } from "lucide-react";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import agiaLogo from "@/assets/agia-logo.png";

const AGIAProject = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>AGIA - Analyse Intelligente d'Images Aériennes | Spidercom</title>
        <meta name="description" content="Plateforme IA pour analyser automatiquement les images thermiques de panneaux photovoltaïques. 90% de temps économisé, 97.8% de précision." />
      </Helmet>

      <Header />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Problem/Solution Section */}
      <ProblemSolutionSection />
      
      {/* Technology Stack */}
      <TechStackSection />
      
      {/* Process Flow */}
      <ProcessFlowSection />
      
      {/* Results Section */}
      <ResultsSection />
      
      {/* Testimonial Section */}
      <TestimonialSection />
      
      {/* CTA Section */}
      <CTASection />
      
      <Footer />
    </div>
  );
};

// Hero Section with animated background
const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-cyan-600 via-blue-700 to-cyan-900">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.1)_1px,_transparent_1px)] bg-[length:50px_50px] animate-[grid-move_20s_linear_infinite]" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block bg-white/10 backdrop-blur-md px-8 py-6 rounded-3xl mb-8 animate-[float_3s_ease-in-out_infinite]"
        >
          <img src={agiaLogo} alt="AGIA Logo" className="h-20 md:h-24" />
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-black text-white mb-6"
        >
          Analyse Intelligente d'Images Aériennes
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto"
        >
          L'IA détecte automatiquement les anomalies sur vos panneaux photovoltaïques<br />
          <span className="font-bold">42 minutes au lieu de 4 heures • 97.8% de précision • Rapports PDF automatiques</span>
        </motion.p>

        {/* Animated Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <StatBox number="90" suffix="%" label="Temps économisé" delay={0.1} />
          <StatBox number="97.8" suffix="%" label="Précision IA" delay={0.2} />
          <StatBox number="25000" prefix="" suffix="€" label="Économies/an" delay={0.3} />
          <StatBox number="4.9" suffix="/5" label="Satisfaction" delay={0.4} />
        </div>
      </div>
    </section>
  );
};

// Animated Stat Box Component
const StatBox = ({
  number,
  suffix = "",
  prefix = "",
  label,
  delay
}: {
  number: string;
  suffix?: string;
  prefix?: string;
  label: string;
  delay: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      const target = parseFloat(number);
      const duration = 2000;
      const increment = target / (duration / 30);
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(current);
        }
      }, 30);

      return () => clearInterval(timer);
    }
  }, [isInView, number]);

  const displayValue = number.includes(".") ? count.toFixed(1) : Math.floor(count);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6"
    >
      <div className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-white to-gray-200 bg-clip-text text-transparent mb-2">
        {prefix}{displayValue}{suffix}
      </div>
      <div className="text-sm uppercase tracking-wider text-white/90">{label}</div>
    </motion.div>
  );
};

// Problem vs Solution Section
const ProblemSolutionSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background via-muted/30 to-background">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-black text-center mb-4 bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent"
        >
          La Révolution de l'Inspection Solaire
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-center text-muted-foreground mb-16 text-lg"
        >
          De l'analyse manuelle chronophage à l'automatisation IA
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-start">
          {/* Before - Problems */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-2xl bg-gradient-to-br from-red-500/20 to-red-600/20 border-2 border-red-500/30 flex items-center justify-center">
                <TrendingDown className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-red-500" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-red-500">Avant AGIA</h3>
                <p className="text-xs md:text-sm text-muted-foreground">Analyse manuelle</p>
              </div>
            </div>
            
            <div className="space-y-2 md:space-y-3">
              <ProblemItem>4 heures d'analyse par parc</ProblemItem>
              <ProblemItem>Erreurs humaines (~15%)</ProblemItem>
              <ProblemItem>Rapports manuels (2h supplémentaires)</ProblemItem>
              <ProblemItem>Détection incomplète</ProblemItem>
              <ProblemItem>Coûts d'inspection élevés</ProblemItem>
              <ProblemItem>Expertise thermique requise</ProblemItem>
            </div>
          </motion.div>

          {/* After - Solutions */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-600/20 border-2 border-green-500/30 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-green-500" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-green-500">Avec AGIA</h3>
                <p className="text-xs md:text-sm text-muted-foreground">Automatisation IA</p>
              </div>
            </div>
            
            <div className="space-y-2 md:space-y-3">
              <SolutionItem>42 minutes d'analyse automatique</SolutionItem>
              <SolutionItem>97.8% de précision constante</SolutionItem>
              <SolutionItem>Rapports PDF instantanés</SolutionItem>
              <SolutionItem>Détection exhaustive</SolutionItem>
              <SolutionItem>Coûts réduits de 60%</SolutionItem>
              <SolutionItem>Aucune expertise nécessaire</SolutionItem>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ProblemItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="group flex items-start gap-2 md:gap-3 p-3 md:p-4 rounded-xl bg-card/30 border border-red-500/20 hover:border-red-500/40 hover:bg-card/50 transition-all duration-300"
    >
      <div className="mt-0.5 w-5 h-5 md:w-6 md:h-6 rounded-lg bg-red-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-red-500/20 transition-colors">
        <XCircle className="w-3 h-3 md:w-4 md:h-4 text-red-500" />
      </div>
      <span className="text-sm md:text-base text-foreground/90 leading-relaxed">{children}</span>
    </motion.div>
  );
};

const SolutionItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="group flex items-start gap-2 md:gap-3 p-3 md:p-4 rounded-xl bg-card/30 border border-green-500/20 hover:border-green-500/40 hover:bg-card/50 transition-all duration-300"
    >
      <div className="mt-0.5 w-5 h-5 md:w-6 md:h-6 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-green-500/20 transition-colors">
        <CheckCircle2 className="w-3 h-3 md:w-4 md:h-4 text-green-500" />
      </div>
      <span className="text-sm md:text-base text-foreground/90 leading-relaxed">{children}</span>
    </motion.div>
  );
};

// Technology Stack Section
const TechStackSection = () => {
  const technologies = [
    { icon: "🤖", name: "Intelligence Artificielle", desc: "Computer Vision avancée" },
    { icon: "🛸", name: "Imagerie Drone", desc: "Capture thermique aérienne" },
    { icon: "🔥", name: "Détection Thermique", desc: "Analyse infrarouge" },
    { icon: "📊", name: "Dashboard Analytics", desc: "Visualisation temps réel" },
    { icon: "📄", name: "Rapports Auto", desc: "PDF générés instantanément" },
    { icon: "☁️", name: "Cloud Storage", desc: "Archivage sécurisé" }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background via-muted/50 to-background">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-black text-center mb-16 bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent"
        >
          Technologies de Pointe
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 text-center transition-all duration-300 hover:scale-105 hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/30 cursor-pointer"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{tech.icon}</div>
              <div className="font-bold text-lg mb-2">{tech.name}</div>
              <div className="text-sm text-muted-foreground">{tech.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Process Flow Section
const ProcessFlowSection = () => {
  const steps = [
    {
      number: "1",
      title: "Upload Images Thermiques",
      details: "Importez vos photos drone (RGB + thermique). L'IA traite des centaines d'images en quelques minutes."
    },
    {
      number: "2",
      title: "Détection Automatique",
      details: "Computer Vision analyse chaque panneau : points chauds, fissures, snail trails, ombrage. Précision 97.8%."
    },
    {
      number: "3",
      title: "Dashboard Interactif",
      details: "Visualisez tous les défauts sur une carte. Classement par sévérité : critique, élevée, moyenne."
    },
    {
      number: "4",
      title: "Rapports PDF Instantanés",
      details: "Téléchargez votre rapport complet avec synthèse visuelle, données chiffrées et recommandations d'action."
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-black text-center mb-16 bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent"
        >
          Processus en 4 Étapes
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative bg-gradient-to-br from-cyan-600/10 to-blue-500/10 border-2 border-cyan-600/30 rounded-2xl p-8 transition-all duration-300 hover:scale-105 hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/40"
            >
              <div className="absolute -top-5 left-6 w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center font-bold text-xl text-white">
                {step.number}
              </div>
              
              <h3 className="text-xl font-bold mb-4 mt-2">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.details}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Results Section
const ResultsSection = () => {
  const results = [
    { metric: "-90%", label: "Temps d'analyse", detail: "De 4h à 42 minutes" },
    { metric: "97.8%", label: "Précision IA", detail: "vs ~85% analyse manuelle" },
    { metric: "25 000€", label: "Économies/an", detail: "ROI mesuré sur 1 an" },
    { metric: "4.9/5", label: "Satisfaction", detail: "Note moyenne clients" }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background via-muted/50 to-background">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-black text-center mb-16 bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent"
        >
          Résultats Mesurables
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {results.map((result, index) => (
            <motion.div
              key={result.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative bg-card/50 backdrop-blur-sm rounded-2xl p-6 text-center overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-600" />
              
              <div className="text-5xl font-bold bg-gradient-to-br from-green-500 to-cyan-500 bg-clip-text text-transparent my-4">
                {result.metric}
              </div>
              
              <div className="text-lg font-semibold mb-2">{result.label}</div>
              <div className="text-sm text-muted-foreground">{result.detail}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Testimonial Section
const TestimonialSection = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-br from-cyan-600/10 to-blue-500/10 border-2 border-cyan-600/30 rounded-3xl p-8 md:p-12"
        >
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-6xl">⭐</div>
          
          <blockquote className="text-xl md:text-2xl text-center mb-6 italic text-foreground/90">
            "AGIA a transformé notre processus d'inspection. Avant, on passait 20h/mois sur l'analyse manuelle. Maintenant, 2h de validation suffisent. Le ROI est impressionnant."
          </blockquote>
          
          <div className="text-center">
            <div className="font-bold text-lg">Opérateur de Parcs Solaires</div>
            <div className="text-sm text-muted-foreground">5 parcs photovoltaïques • 1200 panneaux</div>
            <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm font-semibold">
              <span>📊</span>
              25 000€ économisés sur 1 an
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// CTA Section
const CTASection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-cyan-600 via-blue-600 to-cyan-900">
      <div className="container mx-auto max-w-4xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-black text-white mb-6"
        >
          Prêt à Révolutionner Vos Inspections ?
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-white/90 mb-8"
        >
          Découvrez tous les détails de la plateforme AGIA
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <a
            href="/outils"
            className="inline-flex items-center gap-3 px-10 py-5 bg-white text-cyan-600 font-bold text-xl rounded-xl hover:shadow-2xl hover:shadow-white/30 transition-all hover:scale-105"
          >
            Découvrir la Plateforme Complète
            <ArrowRight className="w-6 h-6" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default AGIAProject;
