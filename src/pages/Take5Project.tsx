import { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Take5Project = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Take 5 - Révolution IA pour Google Business | Spidercom</title>
        <meta name="description" content="Automatisation complète de Google Business avec IA : gestion des avis, métriques temps réel et rapports WhatsApp. 85% de temps économisé, 100% d'avis traités." />
      </Helmet>

      <Header />
      
      {/* Hero Section avec animation grid */}
      <HeroSection />
      
      {/* Problem/Solution Section */}
      <ProblemSolutionSection />
      
      {/* Technology Stack */}
      <TechStackSection />
      
      {/* Process Flow */}
      <ProcessFlowSection />
      
      {/* Results Section */}
      <ResultsSection />
      
      {/* Testimonial */}
      <TestimonialSection />
      
      {/* CTA Section */}
      <CTASection />
      
      {/* Live Widget */}
      <LiveWidget />
      
      <Footer />
    </div>
  );
};

// Hero Section with animated grid and counters
const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[hsl(var(--primary))] via-purple-600 to-[hsl(var(--primary))]">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.1)_1px,_transparent_1px)] bg-[length:50px_50px] animate-[grid-move_20s_linear_infinite]" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block bg-white/10 backdrop-blur-md px-8 py-4 rounded-full mb-8 animate-[float_3s_ease-in-out_infinite]"
        >
          <span className="text-3xl">🚀 TAKE 5 by SPIDERCOM</span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-black text-white mb-6"
        >
          La Révolution IA pour Google Business
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto"
        >
          Gérez vos avis, analysez vos métriques et recevez des rapports sur WhatsApp<br />
          <span className="font-bold">100% automatique • 24/7 • Sans intervention humaine</span>
        </motion.p>

        {/* Animated Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <StatBox number="85" suffix="%" label="Temps économisé" delay={0.1} />
          <StatBox number="100" suffix="%" label="Avis traités" delay={0.2} />
          <StatBox number="60" prefix="+" suffix="%" label="Engagement client" delay={0.3} />
          <StatBox number="25" prefix="+" suffix="%" label="Avis 5 étoiles" delay={0.4} />
        </div>
      </div>
    </section>
  );
};

// Animated Stat Box Component
const StatBox = ({ number, suffix = "", prefix = "", label, delay }: { number: string; suffix?: string; prefix?: string; label: string; delay: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      const target = parseInt(number);
      const duration = 2000;
      const increment = target / (duration / 30);
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, 30);

      return () => clearInterval(timer);
    }
  }, [isInView, number]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6"
    >
      <div className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-white to-gray-200 bg-clip-text text-transparent mb-2">
        {prefix}{count}{suffix}
      </div>
      <div className="text-sm uppercase tracking-wider text-white/90">{label}</div>
    </motion.div>
  );
};

// Problem vs Solution Section
const ProblemSolutionSection = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-black text-center mb-16 bg-gradient-to-r from-[hsl(var(--primary))] to-purple-600 bg-clip-text text-transparent"
        >
          La Transformation Take 5
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Before - Problems */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-red-950/20 to-background border-2 border-red-500 rounded-3xl p-8 overflow-hidden"
          >
            <div className="absolute -top-px left-8 bg-background px-4 py-2 rounded-b-xl">
              <span className="font-bold text-red-500">❌ AVANT</span>
            </div>
            
            <h3 className="text-2xl font-bold text-red-500 mb-8 mt-4">Les Galères du Quotidien</h3>
            
            <div className="space-y-4">
              <ProblemItem>3-5 heures/mois perdues sur les avis</ProblemItem>
              <ProblemItem>40% des avis sans réponse</ProblemItem>
              <ProblemItem>Aucune vision des performances</ProblemItem>
              <ProblemItem>Réponses tardives ou génériques</ProblemItem>
              <ProblemItem>WhatsApp Business non exploité</ProblemItem>
              <ProblemItem>Rapports manuels chronophages</ProblemItem>
            </div>
          </motion.div>

          {/* After - Solutions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-green-950/20 to-background border-2 border-green-500 rounded-3xl p-8 overflow-hidden"
          >
            <div className="absolute -top-px left-8 bg-background px-4 py-2 rounded-b-xl">
              <span className="font-bold text-green-500">✅ APRÈS</span>
            </div>
            
            <h3 className="text-2xl font-bold text-green-500 mb-8 mt-4">La Magie Spidercom</h3>
            
            <div className="space-y-4">
              <SolutionItem>5 minutes/semaine de supervision</SolutionItem>
              <SolutionItem>100% de réponses automatiques IA</SolutionItem>
              <SolutionItem>Dashboard temps réel accessible</SolutionItem>
              <SolutionItem>Réponses personnalisées en 2min</SolutionItem>
              <SolutionItem>WhatsApp = centre de contrôle</SolutionItem>
              <SolutionItem>Rapports automatiques mensuels</SolutionItem>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ProblemItem = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center gap-3 text-lg text-foreground/90">
    <span className="text-2xl">😫</span>
    <span>{children}</span>
  </div>
);

const SolutionItem = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center gap-3 text-lg text-foreground/90">
    <span className="text-2xl">🚀</span>
    <span>{children}</span>
  </div>
);

// Technology Stack Section
const TechStackSection = () => {
  const technologies = [
    { icon: "⚙️", name: "N8N", desc: "Orchestration des workflows" },
    { icon: "🤖", name: "OpenAI GPT", desc: "IA conversationnelle" },
    { icon: "📱", name: "WhatsApp API", desc: "Notifications & rapports" },
    { icon: "🔗", name: "Google Business API", desc: "Synchronisation données" },
    { icon: "📊", name: "Analytics", desc: "Métriques temps réel" },
    { icon: "☁️", name: "Cloud Storage", desc: "Archivage sécurisé" }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background via-muted/50 to-background">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-black text-center mb-16 bg-gradient-to-r from-[hsl(var(--primary))] to-purple-600 bg-clip-text text-transparent"
        >
          Stack Technologique Ultra-Moderne
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 text-center transition-all duration-300 hover:scale-105 hover:border-primary hover:shadow-lg hover:shadow-primary/30 cursor-pointer"
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
      title: "Connexion API Google Business",
      details: "Récupération quotidienne/hebdomadaire des données : vues, appels, clics site, demandes d'itinéraire et nouveaux avis clients."
    },
    {
      number: "2",
      title: "Analyse IA des avis",
      details: "Détection automatique du ton (positif/neutre/négatif) et génération de réponses adaptées au contexte et à l'identité de l'entreprise."
    },
    {
      number: "3",
      title: "Envoi automatique sur WhatsApp",
      details: "Rapport mensuel synthétique et visuel : nombre d'avis, note moyenne, appels et visites. Format PDF complet automatiquement envoyé."
    },
    {
      number: "4",
      title: "Archivage & suivi",
      details: "Sauvegarde automatique Google Drive/Notion/Airtable avec historique mensuel complet et progression de la visibilité trackée."
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-black text-center mb-16 bg-gradient-to-r from-[hsl(var(--primary))] to-purple-600 bg-clip-text text-transparent"
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
              className="relative bg-gradient-to-br from-primary/10 to-purple-500/10 border-2 border-primary/30 rounded-2xl p-8 transition-all duration-300 hover:scale-105 hover:border-primary hover:shadow-lg hover:shadow-primary/40"
            >
              <div className="absolute -top-5 left-6 w-10 h-10 bg-gradient-to-br from-[hsl(var(--primary))] to-purple-600 rounded-full flex items-center justify-center font-bold text-xl text-white">
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
    {
      metric: "847%",
      label: "ROI sur 1 an",
      detail: "Retour sur investissement massif"
    },
    {
      metric: "-85%",
      label: "Temps de gestion",
      detail: "De 3-5h/mois à 0,5h/mois"
    },
    {
      metric: "100%",
      label: "Taux de réponse",
      detail: "De 40% à 100% des avis traités"
    },
    {
      metric: "+25%",
      label: "Avis positifs",
      detail: "Augmentation moyenne constatée"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background via-muted/50 to-background">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-black text-center mb-16 bg-gradient-to-r from-[hsl(var(--primary))] to-purple-600 bg-clip-text text-transparent"
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
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[hsl(var(--primary))] to-purple-600" />
              
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
          className="relative bg-gradient-to-br from-primary/10 to-purple-500/10 border-2 border-primary/30 rounded-3xl p-12 text-center"
        >
          <div className="text-6xl opacity-30 absolute top-8 left-8">"</div>
          
          <p className="text-2xl italic leading-relaxed mb-8 relative z-10">
            Avant Take 5, je passais mes soirées à répondre aux avis Google. Maintenant l'IA le fait pour moi avec un ton parfait, et je reçois un rapport clair chaque mois sur WhatsApp. C'est magique.
          </p>
          
          <div className="mt-8">
            <div className="font-bold text-xl text-primary mb-2">Jean-Pierre Fontaine</div>
            <div className="text-muted-foreground">Propriétaire • Restaurant Le Petit Zinc - Lyon</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// CTA Section
const CTASection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-[hsl(var(--primary))] via-purple-600 to-[hsl(var(--primary))]">
      <div className="container mx-auto max-w-4xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-black text-white mb-8"
        >
          Prêt à Révolutionner Votre Google Business ?
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <Button
            asChild
            size="lg"
            className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 rounded-full font-bold shadow-xl hover:scale-105 transition-transform"
          >
            <a href="https://takefive.fr" target="_blank" rel="noopener noreferrer">
              🚀 Découvrir Take 5
              <ExternalLink className="ml-2 w-5 h-5" />
            </a>
          </Button>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="bg-transparent text-white border-2 border-white hover:bg-white/10 text-lg px-8 py-6 rounded-full font-bold"
          >
            <a href="/contact">
              Demander une démo
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

// Live Widget
const LiveWidget = () => {
  const [metrics, setMetrics] = useState({
    avisTraites: 12,
    conversationsActives: 3,
    tempsEconomise: 45,
    satisfaction: 96
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => ({
        ...prev,
        avisTraites: prev.avisTraites + Math.floor(Math.random() * 3),
        tempsEconomise: prev.tempsEconomise + Math.floor(Math.random() * 5)
      }));
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1 }}
      className="fixed bottom-6 right-6 bg-background/95 backdrop-blur-xl border-2 border-primary rounded-2xl p-6 max-w-xs shadow-2xl shadow-primary/20 z-50 animate-[pulse_2s_infinite] hidden md:block"
    >
      <div className="flex items-center gap-2 mb-4">
        <div className="w-3 h-3 bg-green-500 rounded-full animate-[blink_1s_infinite]" />
        <span className="font-bold text-sm">EN DIRECT</span>
      </div>

      <div className="space-y-3 text-sm">
        <div className="flex justify-between">
          <span className="text-muted-foreground">Avis traités :</span>
          <span className="font-bold text-primary">{metrics.avisTraites}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Conversations IA :</span>
          <span className="font-bold text-primary">{metrics.conversationsActives}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Temps économisé :</span>
          <span className="font-bold text-primary">{metrics.tempsEconomise}min</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Satisfaction :</span>
          <span className="font-bold text-primary">{metrics.satisfaction}%</span>
        </div>
      </div>
    </motion.div>
  );
};

export default Take5Project;
