import React, { useState, useRef } from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Upload, Search, FileText, TrendingUp, AlertTriangle, CheckCircle, Download, Settings, Users, BarChart3, Zap, Clock, Grid, Map, X, Loader2, Sun, Activity, Target, Rocket, Shield, Cpu, Database, Cloud, ChevronRight, PlayCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'sonner';
import { useCalendly } from '@/hooks/useCalendly';

const Outils = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedImage, setSelectedImage] = useState(0);
  const [uploadedImages, setUploadedImages] = useState<File[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisComplete, setAnalysisComplete] = useState(false);
  const [roiMissions, setRoiMissions] = useState(50);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { openCalendly } = useCalendly();

  // Données dynamiques
  const [stats, setStats] = useState({
    imagesProcessed: 15847,
    timesSaved: 423,
    anomaliesDetected: 1256,
    activeProjects: 34
  });

  const recentAnalyses = [
    { 
      id: 1, 
      name: "Parc PV Saint-Martin", 
      date: "07/11/2025 14:32", 
      images: 456, 
      anomalies: 23, 
      status: "completed",
      severity: "medium"
    },
    { 
      id: 2, 
      name: "Inspection Ferme Solaire Nord", 
      date: "07/11/2025 12:15", 
      images: 892, 
      anomalies: 47, 
      status: "completed",
      severity: "high"
    },
    { 
      id: 3, 
      name: "Site Industriel Toulouse", 
      date: "07/11/2025 09:23", 
      images: 234, 
      anomalies: 8, 
      status: "processing",
      severity: "low"
    },
    { 
      id: 4, 
      name: "Parc Photovoltaïque Lyon", 
      date: "06/11/2025 16:45", 
      images: 567, 
      anomalies: 31, 
      status: "completed",
      severity: "medium"
    }
  ];

  const anomalyTypes = [
    { type: "Points chauds", count: 487, color: "bg-red-500", percentage: 38 },
    { type: "Microfissures", count: 342, color: "bg-orange-500", percentage: 27 },
    { type: "Snail trails", count: 256, color: "bg-yellow-500", percentage: 20 },
    { type: "Ombrage", count: 171, color: "bg-blue-500", percentage: 15 }
  ];

  const thermalImages = [
    { id: 0, panel: "A-245", temp: "78.5°C", severity: "high", x: 34, y: 45 },
    { id: 1, panel: "B-112", temp: "65.2°C", severity: "medium", x: 67, y: 32 },
    { id: 2, panel: "C-089", temp: "82.1°C", severity: "critical", x: 23, y: 78 },
  ];

  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Analyse Ultra-Rapide",
      description: "1000 photos analysées en 2 minutes au lieu de 5 heures. IA de dernière génération pour une détection instantanée.",
      gradient: "from-red-500 to-orange-500"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Précision 99%",
      description: "Détection ultra-précise des anomalies thermiques : points chauds, cellules défaillantes, micro-fissures.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Map className="w-8 h-8" />,
      title: "Géolocalisation GPS",
      description: "Chaque défaut est localisé avec précision GPS pour une intervention rapide et ciblée.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Rapports Professionnels",
      description: "Génération automatique de rapports PDF détaillés avec photos, cartographie et recommandations.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Marque Blanche",
      description: "Personnalisez l'interface avec votre logo et vos couleurs. Vos clients ne voient que vous.",
      gradient: "from-yellow-500 to-amber-500"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Dashboard Cloud",
      description: "Accédez à vos analyses depuis n'importe où. Synchronisation automatique multi-appareils.",
      gradient: "from-indigo-500 to-blue-500"
    }
  ];

  const processSteps = [
    { number: 1, icon: <Upload />, title: "Upload", description: "Importez vos photos thermiques" },
    { number: 2, icon: <Cpu />, title: "IA Analyse", description: "Traitement automatique 2min" },
    { number: 3, icon: <Target />, title: "Détection", description: "Anomalies identifiées" },
    { number: 4, icon: <Map />, title: "Géolocalisation", description: "Cartographie GPS précise" },
    { number: 5, icon: <FileText />, title: "Rapport", description: "PDF professionnel généré" }
  ];

  const techStack = [
    { icon: "🤖", name: "OpenAI GPT-4 Vision", description: "Analyse d'images" },
    { icon: "🐍", name: "Python + TensorFlow", description: "Deep Learning" },
    { icon: "⚛️", name: "React + TypeScript", description: "Interface moderne" },
    { icon: "🗄️", name: "PostgreSQL", description: "Base de données" },
    { icon: "☁️", name: "AWS S3", description: "Stockage cloud" },
    { icon: "📊", name: "Recharts", description: "Visualisation" }
  ];

  const pricingPlans = [
    {
      name: "STARTER",
      price: "2 500€",
      period: "Installation unique",
      monthly: "149€/mois",
      features: [
        "1 utilisateur",
        "50 analyses/mois",
        "Support email",
        "Rapports PDF",
        "Mises à jour incluses"
      ],
      popular: false
    },
    {
      name: "PRO",
      price: "4 500€",
      period: "Installation unique",
      monthly: "299€/mois",
      features: [
        "5 utilisateurs",
        "200 analyses/mois",
        "Marque blanche",
        "Support prioritaire",
        "Formations incluses",
        "API access"
      ],
      popular: true
    },
    {
      name: "ENTERPRISE",
      price: "Sur devis",
      period: "Installation personnalisée",
      monthly: "599€+/mois",
      features: [
        "Utilisateurs illimités",
        "Analyses illimitées",
        "Multi-sites",
        "Support 24/7",
        "Développements sur-mesure",
        "SLA garanti"
      ],
      popular: false
    }
  ];

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length === 0) return;

    setUploadedImages(prev => [...prev, ...files]);
    toast.success(`${files.length} image(s) ajoutée(s)`);
  };

  const handleAnalyze = async () => {
    if (uploadedImages.length === 0) {
      toast.error("Veuillez d'abord uploader des images");
      return;
    }

    setIsAnalyzing(true);
    toast.info("Analyse IA en cours...");

    await new Promise(resolve => setTimeout(resolve, 3000));

    setStats(prev => ({
      imagesProcessed: prev.imagesProcessed + uploadedImages.length,
      timesSaved: prev.timesSaved + Math.floor(uploadedImages.length * 0.5),
      anomaliesDetected: prev.anomaliesDetected + Math.floor(Math.random() * 50),
      activeProjects: prev.activeProjects
    }));

    setIsAnalyzing(false);
    setAnalysisComplete(true);
    toast.success("Analyse terminée ! Anomalies détectées.", {
      description: `${uploadedImages.length} images analysées avec succès`
    });
  };

  const handleRemoveImage = (index: number) => {
    setUploadedImages(prev => prev.filter((_, i) => i !== index));
    toast.info("Image supprimée");
  };

  const handleGenerateReport = () => {
    toast.success("Rapport PDF en cours de génération...", {
      description: "Le téléchargement démarrera dans quelques secondes"
    });
    
    setTimeout(() => {
      toast.success("Rapport généré avec succès !");
    }, 2000);
  };

  const calculateROI = () => {
    const hourlyRate = 35;
    const hoursPerMission = 4;
    const costPerMission = hourlyRate * hoursPerMission; // 140€
    const totalSavings = roiMissions * costPerMission;
    const starterCost = 2500;
    const monthlyMaintenance = 149;
    const monthsToBreakEven = Math.ceil((starterCost + monthlyMaintenance) / costPerMission);
    
    return {
      savingsPerMission: costPerMission,
      totalSavings,
      monthsToBreakEven,
      roi: ((totalSavings - starterCost) / starterCost * 100).toFixed(0)
    };
  };

  const roi = calculateROI();

  return (
    <>
      <Helmet>
        <title>AGIA - L'IA qui Révolutionne l'Analyse Thermique par Drone | Spidercom</title>
        <meta
          name="description"
          content="AGIA : Analysez 1000 photos thermiques en 2 minutes au lieu de 5 heures. Détection automatique des défauts, géolocalisation GPS, rapport PDF professionnel. ROI en 6 semaines."
        />
      </Helmet>

      <div className="min-h-screen bg-black text-white overflow-x-hidden">
        <Header />

        {/* Hero Section Futuriste */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Animated grid background */}
          <div className="absolute inset-0 opacity-10">
            <div 
              className="absolute inset-0" 
              style={{
                backgroundImage: 'url(data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect x="0" y="0" width="1" height="1" fill="white" opacity="0.1"/></svg>)',
                backgroundSize: '20px 20px',
                animation: 'gridScan 10s linear infinite'
              }}
            />
          </div>

          {/* Radial gradients */}
          <div className="absolute inset-0">
            <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-red-500/30 rounded-full blur-3xl" />
            <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-block px-6 py-2 bg-gradient-to-r from-red-500 to-blue-500 rounded-full mb-8 font-bold animate-pulse"
            >
              🚁 RÉVOLUTION ANALYSE THERMIQUE
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-white via-red-400 to-blue-400 bg-clip-text text-transparent"
              style={{ fontFamily: 'Orbitron, sans-serif' }}
            >
              AGIA
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-2xl md:text-4xl mb-12 opacity-90 max-w-4xl"
            >
              Analysez 1000 photos thermiques en <span className="text-red-400 font-bold">2 minutes</span> au lieu de <span className="text-blue-400 font-bold">5 heures</span>
            </motion.p>

            {/* Hero Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mb-12"
            >
              {[
                { number: "150x", label: "Plus rapide" },
                { number: "99%", label: "Précision IA" },
                { number: "2 min", label: "Analyse complète" },
                { number: "6 sem", label: "ROI garanti" }
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
                >
                  <div className="text-4xl font-black bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm uppercase tracking-wider opacity-80">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex gap-4"
            >
              <button
                onClick={() => openCalendly()}
                className="px-8 py-4 bg-gradient-to-r from-red-500 to-blue-500 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-red-500/50 transition-all hover:scale-105 flex items-center gap-2"
              >
                <PlayCircle className="w-5 h-5" />
                Demander une démo
              </button>
              <button
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full font-bold text-lg hover:bg-white/20 transition-all"
              >
                Découvrir AGIA
              </button>
            </motion.div>
          </div>

          <style>{`
            @keyframes gridScan {
              0% { transform: translateY(-100%); }
              100% { transform: translateY(100%); }
            }
          `}</style>
        </section>

        {/* Problem vs Solution */}
        <section className="py-20 px-6 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto max-w-6xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl font-black text-center mb-16 bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text text-transparent"
            >
              Le Problème vs La Solution
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Problem Card */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-red-900/30 to-red-950/30 border-2 border-red-500 rounded-3xl p-8"
              >
                <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  ❌ Méthode Manuelle
                </h3>
                <ul className="space-y-4">
                  {[
                    "4-5 heures pour analyser 1000 photos",
                    "Erreurs humaines 15-20% des cas",
                    "Technicien mobilisé = perte revenus",
                    "Rapports incohérents et incomplets",
                    "Impossible de scaler les missions"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-lg">
                      <span className="text-2xl">❌</span>
                      <span className="opacity-90">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Solution Card */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-green-900/30 to-green-950/30 border-2 border-green-500 rounded-3xl p-8"
              >
                <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  ✅ Avec AGIA
                </h3>
                <ul className="space-y-4">
                  {[
                    "2 minutes pour 1000 photos analysées",
                    "Précision IA 99% (meilleure qu'humain)",
                    "Multipliez par 5 votre capacité",
                    "Rapports PDF professionnels automatiques",
                    "Scalez sans limites vos missions"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-lg">
                      <span className="text-2xl">✅</span>
                      <span className="opacity-90">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 px-6 bg-black">
          <div className="container mx-auto max-w-7xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl font-black text-center mb-16 bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text text-transparent"
            >
              Fonctionnalités Clés
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-6">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="relative bg-gradient-to-br from-white/5 to-white/10 border border-white/20 rounded-2xl p-8 overflow-hidden group"
                >
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient}`} />
                  
                  <div className={`text-white mb-4 bg-gradient-to-r ${feature.gradient} w-16 h-16 rounded-2xl flex items-center justify-center`}>
                    {feature.icon}
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-yellow-400">
                    {feature.title}
                  </h3>

                  <p className="opacity-90 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Timeline */}
        <section className="py-20 px-6 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto max-w-6xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl font-black text-center mb-16 bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text text-transparent"
            >
              Comment ça marche ?
            </motion.h2>

            <div className="relative flex justify-between items-center">
              {/* Connection line */}
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-red-500 to-blue-500 -translate-y-1/2 z-0" />

              {processSteps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  whileHover={{ scale: 1.1 }}
                  className="relative z-10 bg-black border-3 border-transparent bg-gradient-to-br from-red-500/20 to-blue-500/20 rounded-2xl p-6 text-center flex-1 mx-2"
                  style={{ borderImageSource: 'linear-gradient(135deg, #ef4444, #3b82f6)', borderImageSlice: 1 }}
                >
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-to-r from-red-500 to-blue-500 flex items-center justify-center font-bold text-lg">
                    {step.number}
                  </div>

                  <div className="text-white text-4xl mb-3">
                    {step.icon}
                  </div>

                  <h3 className="text-lg font-bold text-yellow-400 mb-2">
                    {step.title}
                  </h3>

                  <p className="text-sm opacity-80">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="py-20 px-6 bg-black">
          <div className="container mx-auto max-w-5xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl font-black text-center mb-16 bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text text-transparent"
            >
              Technologies de Pointe
            </motion.h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {techStack.map((tech, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, rotateY: 90 }}
                  whileInView={{ opacity: 1, rotateY: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ scale: 1.1, rotateZ: 5 }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center"
                >
                  <div className="text-5xl mb-3">{tech.icon}</div>
                  <h3 className="font-bold text-yellow-400 mb-1">{tech.name}</h3>
                  <p className="text-sm opacity-70">{tech.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ROI Calculator */}
        <section className="py-20 px-6 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto max-w-4xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl font-black text-center mb-8 bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text text-transparent"
            >
              Calculez votre ROI
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xl text-center mb-12 opacity-80"
            >
              Découvrez combien vous économisez avec AGIA
            </motion.p>

            <div className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8">
              <div className="mb-8">
                <label className="block text-lg font-semibold mb-4">
                  Nombre de missions par mois : <span className="text-red-400">{roiMissions}</span>
                </label>
                <input
                  type="range"
                  min="10"
                  max="200"
                  value={roiMissions}
                  onChange={(e) => setRoiMissions(Number(e.target.value))}
                  className="w-full h-2 bg-gradient-to-r from-red-500 to-blue-500 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-green-900/30 to-green-950/30 border border-green-500/50 rounded-2xl p-6">
                  <div className="text-sm opacity-70 mb-2">Économies mensuelles</div>
                  <div className="text-4xl font-black text-green-400">{roi.totalSavings.toLocaleString()}€</div>
                  <div className="text-sm opacity-70 mt-2">{roi.savingsPerMission}€ par mission</div>
                </div>

                <div className="bg-gradient-to-br from-blue-900/30 to-blue-950/30 border border-blue-500/50 rounded-2xl p-6">
                  <div className="text-sm opacity-70 mb-2">Retour sur investissement</div>
                  <div className="text-4xl font-black text-blue-400">{roi.monthsToBreakEven} mois</div>
                  <div className="text-sm opacity-70 mt-2">ROI : +{roi.roi}% la 1ère année</div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-red-500/20 to-blue-500/20 border border-white/10 rounded-2xl">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-green-400" />
                  <span className="font-bold text-lg">Votre gain annuel</span>
                </div>
                <div className="text-5xl font-black bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  {(roi.totalSavings * 12 - 2500 - (149 * 12)).toLocaleString()}€
                </div>
                <p className="text-sm opacity-70 mt-2">Après déduction des frais d'installation et maintenance</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-6 bg-black">
          <div className="container mx-auto max-w-6xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl font-black text-center mb-16 bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text text-transparent"
            >
              Tarifs Simples et Transparents
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-6">
              {pricingPlans.map((plan, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`relative bg-white/5 border-2 rounded-3xl p-8 ${
                    plan.popular 
                      ? 'border-red-500 scale-105 shadow-2xl shadow-red-500/30' 
                      : 'border-white/20'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-1 bg-gradient-to-r from-red-500 to-blue-500 rounded-full text-sm font-bold">
                      POPULAIRE
                    </div>
                  )}

                  <h3 className="text-2xl font-bold text-yellow-400 mb-4">{plan.name}</h3>
                  
                  <div className="mb-2">
                    <span className="text-5xl font-black bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text text-transparent">
                      {plan.price}
                    </span>
                  </div>
                  <p className="text-sm opacity-70 mb-4">{plan.period}</p>
                  
                  <div className="mb-6 p-3 bg-white/5 rounded-xl">
                    <span className="text-lg font-bold">{plan.monthly}</span>
                    <span className="text-sm opacity-70"> maintenance</span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, fidx) => (
                      <li key={fidx} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="opacity-90">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => openCalendly()}
                    className={`w-full py-4 rounded-xl font-bold transition-all ${
                      plan.popular
                        ? 'bg-gradient-to-r from-red-500 to-blue-500 hover:shadow-xl hover:shadow-red-500/50'
                        : 'bg-white/10 hover:bg-white/20'
                    }`}
                  >
                    Demander une démo
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Dashboard Preview */}
        <section className="py-20 px-6 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl font-black text-center mb-16 bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text text-transparent"
            >
              Aperçu du Dashboard
            </motion.h2>

            <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl overflow-hidden shadow-2xl">
              {/* Dashboard Header */}
              <div className="bg-white border-b border-slate-200 shadow-sm">
                <div className="px-6 py-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900">AGIA Dashboard</h3>
                      <p className="text-xs text-slate-500">Analyse Intelligente d'Images Aériennes</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                    <button
                      onClick={() => fileInputRef.current?.click()}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2 transition-colors"
                    >
                      <Upload className="w-4 h-4" />
                      Upload Images
                    </button>
                    {uploadedImages.length > 0 && (
                      <button
                        onClick={handleAnalyze}
                        disabled={isAnalyzing}
                        className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center gap-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isAnalyzing ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            Analyse...
                          </>
                        ) : (
                          <>
                            <Zap className="w-4 h-4" />
                            Analyser ({uploadedImages.length})
                          </>
                        )}
                      </button>
                    )}
                    <button className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center hover:bg-slate-200 transition-colors">
                      <Settings className="w-5 h-5 text-slate-600" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Uploaded Images Preview */}
              <AnimatePresence>
                {uploadedImages.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="bg-blue-50 border-b border-blue-200"
                  >
                    <div className="px-6 py-4">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-sm font-semibold text-blue-900">
                          Images uploadées ({uploadedImages.length})
                        </h4>
                        <button
                          onClick={() => setUploadedImages([])}
                          className="text-xs text-blue-600 hover:text-blue-700"
                        >
                          Tout effacer
                        </button>
                      </div>
                      <div className="grid grid-cols-6 gap-3">
                        {uploadedImages.map((file, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="relative group"
                          >
                            <div className="aspect-square bg-slate-200 rounded-lg overflow-hidden">
                              <img
                                src={URL.createObjectURL(file)}
                                alt={file.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <button
                              onClick={() => handleRemoveImage(idx)}
                              className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="flex">
                {/* Sidebar */}
                <aside className="w-64 bg-white border-r border-slate-200 p-4">
                  <nav className="space-y-2">
                    {[
                      { id: 'dashboard', icon: Grid, label: 'Dashboard' },
                      { id: 'analyses', icon: Search, label: 'Analyses' },
                      { id: 'reports', icon: FileText, label: 'Rapports' },
                      { id: 'projects', icon: Map, label: 'Projets' },
                      { id: 'stats', icon: BarChart3, label: 'Statistiques' },
                      { id: 'clients', icon: Users, label: 'Clients' }
                    ].map(item => (
                      <button
                        key={item.id}
                        onClick={() => setActiveTab(item.id)}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                          activeTab === item.id 
                            ? 'bg-blue-50 text-blue-700 font-medium' 
                            : 'text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        <item.icon className="w-5 h-5" />
                        {item.label}
                      </button>
                    ))}
                  </nav>

                  <div className="mt-8 p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-100">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="w-4 h-4 text-blue-600" />
                      <span className="text-sm font-semibold text-blue-900">Temps économisé</span>
                    </div>
                    <p className="text-2xl font-bold text-blue-700">{stats.timesSaved}h</p>
                    <p className="text-xs text-blue-600 mt-1">Ce mois-ci</p>
                  </div>
                </aside>

                {/* Main Content */}
                <main className="flex-1 p-6">
                  {/* Stats Cards */}
                  <div className="grid grid-cols-4 gap-4 mb-6">
                    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-slate-600 text-sm">Images traitées</span>
                        <Upload className="w-5 h-5 text-blue-600" />
                      </div>
                      <p className="text-3xl font-bold text-slate-900">{stats.imagesProcessed.toLocaleString()}</p>
                      <p className="text-xs text-green-600 mt-1 flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" />
                        +12% vs mois dernier
                      </p>
                    </div>

                    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-slate-600 text-sm">Anomalies détectées</span>
                        <AlertTriangle className="w-5 h-5 text-orange-600" />
                      </div>
                      <p className="text-3xl font-bold text-slate-900">{stats.anomaliesDetected}</p>
                      <p className="text-xs text-slate-500 mt-1">Taux de détection: 97.8%</p>
                    </div>

                    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-slate-600 text-sm">Projets actifs</span>
                        <Map className="w-5 h-5 text-purple-600" />
                      </div>
                      <p className="text-3xl font-bold text-slate-900">{stats.activeProjects}</p>
                      <p className="text-xs text-slate-500 mt-1">8 en cours d'analyse</p>
                    </div>

                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl shadow-sm border border-green-200 p-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-green-700 text-sm font-medium">Temps moyen</span>
                        <Zap className="w-5 h-5 text-green-600" />
                      </div>
                      <p className="text-3xl font-bold text-green-900">42 min</p>
                      <p className="text-xs text-green-700 mt-1">vs 4h en manuel</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-6">
                    {/* Thermal Analysis Viewer */}
                    <div className="col-span-2 bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-lg font-semibold text-slate-900">Analyse thermique en cours</h4>
                        <div className="flex gap-2">
                          <button className="px-3 py-1 bg-slate-100 text-slate-700 rounded-lg text-sm hover:bg-slate-200 transition-colors">
                            Thermique
                          </button>
                          <button className="px-3 py-1 bg-slate-50 text-slate-600 rounded-lg text-sm hover:bg-slate-100 transition-colors">
                            RGB
                          </button>
                        </div>
                      </div>

                      {/* Simulated thermal image viewer */}
                      <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg overflow-hidden" style={{ height: '400px' }}>
                        <div className="absolute inset-0 opacity-10">
                          <div className="grid grid-cols-8 grid-rows-6 h-full">
                            {[...Array(48)].map((_, i) => (
                              <div key={i} className="border border-white"></div>
                            ))}
                          </div>
                        </div>

                        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-red-900 opacity-60"></div>

                        {thermalImages.map((spot, idx) => (
                          <div
                            key={spot.id}
                            className={`absolute w-16 h-16 rounded-full cursor-pointer transition-transform hover:scale-110 ${
                              selectedImage === idx ? 'ring-4 ring-white' : ''
                            }`}
                            style={{ 
                              left: `${spot.x}%`, 
                              top: `${spot.y}%`,
                              background: spot.severity === 'critical' 
                                ? 'radial-gradient(circle, rgba(255,0,0,0.9) 0%, rgba(255,100,0,0.6) 50%, rgba(255,200,0,0.2) 100%)'
                                : spot.severity === 'high'
                                ? 'radial-gradient(circle, rgba(255,100,0,0.8) 0%, rgba(255,150,0,0.5) 50%, rgba(255,200,0,0.2) 100%)'
                                : 'radial-gradient(circle, rgba(255,200,0,0.7) 0%, rgba(255,220,0,0.4) 50%, rgba(255,240,0,0.1) 100%)'
                            }}
                            onClick={() => setSelectedImage(idx)}
                          >
                            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white px-2 py-1 rounded shadow-lg text-xs font-semibold whitespace-nowrap text-slate-900">
                              {spot.temp}
                            </div>
                          </div>
                        ))}

                        <div className="absolute right-4 top-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                          <div className="text-xs font-semibold text-slate-700 mb-2">Température</div>
                          <div className="flex flex-col gap-1">
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-2 bg-gradient-to-r from-red-600 to-red-500 rounded"></div>
                              <span className="text-xs text-slate-600">&gt;75°C</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-2 bg-gradient-to-r from-orange-500 to-orange-400 rounded"></div>
                              <span className="text-xs text-slate-600">60-75°C</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-2 bg-gradient-to-r from-yellow-500 to-yellow-400 rounded"></div>
                              <span className="text-xs text-slate-600">45-60°C</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-2 bg-gradient-to-r from-blue-500 to-blue-400 rounded"></div>
                              <span className="text-xs text-slate-600">&lt;45°C</span>
                            </div>
                          </div>
                        </div>

                        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                          <div className="text-xs font-semibold text-slate-700 mb-1">Panneau sélectionné</div>
                          <div className="text-lg font-bold text-slate-900">{thermalImages[selectedImage].panel}</div>
                          <div className="flex items-center gap-4 mt-2">
                            <div>
                              <div className="text-xs text-slate-600">Température</div>
                              <div className="text-sm font-bold text-red-600">{thermalImages[selectedImage].temp}</div>
                            </div>
                            <div>
                              <div className="text-xs text-slate-600">Sévérité</div>
                              <div className={`text-sm font-bold ${
                                thermalImages[selectedImage].severity === 'critical' ? 'text-red-600' :
                                thermalImages[selectedImage].severity === 'high' ? 'text-orange-600' :
                                'text-yellow-600'
                              }`}>
                                {thermalImages[selectedImage].severity === 'critical' ? 'Critique' :
                                 thermalImages[selectedImage].severity === 'high' ? 'Élevée' : 'Moyenne'}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Anomaly Detection Summary */}
                    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                      <h4 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5 text-orange-600" />
                        Anomalies détectées
                      </h4>
                      <div className="space-y-3">
                        {anomalyTypes.map((anomaly, idx) => (
                          <div key={idx}>
                            <div className="flex justify-between text-sm mb-1">
                              <span className="text-slate-700 font-medium">{anomaly.type}</span>
                              <span className="text-slate-900 font-bold">{anomaly.count}</span>
                            </div>
                            <div className="w-full bg-slate-100 rounded-full h-2">
                              <div
                                className={`${anomaly.color} h-2 rounded-full transition-all duration-500`}
                                style={{ width: `${anomaly.percentage}%` }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="mt-6 p-4 bg-red-50 rounded-lg border border-red-200">
                        <div className="flex items-start gap-2">
                          <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <div className="font-semibold text-red-900 text-sm">Action requise</div>
                            <div className="text-xs text-red-700 mt-1">
                              3 panneaux nécessitent une intervention urgente
                            </div>
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={handleGenerateReport}
                        className="w-full mt-4 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center justify-center gap-2 transition-colors font-medium"
                      >
                        <Download className="w-4 h-4" />
                        Télécharger le rapport
                      </button>
                    </div>
                  </div>

                  {/* Recent Analyses Table */}
                  <div className="mt-6 bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                    <h4 className="text-lg font-semibold text-slate-900 mb-4">Analyses récentes</h4>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-slate-200">
                            <th className="text-left py-3 px-4 text-sm font-semibold text-slate-700">Projet</th>
                            <th className="text-left py-3 px-4 text-sm font-semibold text-slate-700">Date</th>
                            <th className="text-left py-3 px-4 text-sm font-semibold text-slate-700">Images</th>
                            <th className="text-left py-3 px-4 text-sm font-semibold text-slate-700">Anomalies</th>
                            <th className="text-left py-3 px-4 text-sm font-semibold text-slate-700">Statut</th>
                          </tr>
                        </thead>
                        <tbody>
                          {recentAnalyses.map(analysis => (
                            <tr key={analysis.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                              <td className="py-3 px-4 text-sm text-slate-900 font-medium">{analysis.name}</td>
                              <td className="py-3 px-4 text-sm text-slate-600">{analysis.date}</td>
                              <td className="py-3 px-4 text-sm text-slate-600">{analysis.images}</td>
                              <td className="py-3 px-4">
                                <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                                  analysis.severity === 'high' ? 'bg-red-100 text-red-700' :
                                  analysis.severity === 'medium' ? 'bg-orange-100 text-orange-700' :
                                  'bg-yellow-100 text-yellow-700'
                                }`}>
                                  {analysis.anomalies}
                                </span>
                              </td>
                              <td className="py-3 px-4">
                                {analysis.status === 'completed' ? (
                                  <span className="inline-flex items-center gap-1 text-green-600 text-sm">
                                    <CheckCircle className="w-4 h-4" />
                                    Terminé
                                  </span>
                                ) : (
                                  <span className="inline-flex items-center gap-1 text-blue-600 text-sm">
                                    <Loader2 className="w-4 h-4 animate-spin" />
                                    En cours
                                  </span>
                                )}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </main>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 px-6 bg-gradient-to-r from-red-500 to-blue-500">
          <div className="container mx-auto text-center max-w-4xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl font-black mb-6"
            >
              Prêt à Révolutionner vos Analyses ?
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl mb-8 opacity-90"
            >
              Rejoignez les entreprises qui ont multiplié par 5 leur capacité d'analyse
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex gap-4 justify-center"
            >
              <button
                onClick={() => openCalendly()}
                className="px-8 py-4 bg-white text-blue-600 rounded-full font-bold text-lg hover:shadow-2xl transition-all hover:scale-105 flex items-center gap-2"
              >
                <PlayCircle className="w-5 h-5" />
                Réserver une démo gratuite
              </button>
              <button
                onClick={() => window.location.href = 'mailto:contact@spidercom.fr'}
                className="px-8 py-4 bg-black/20 backdrop-blur-xl border-2 border-white rounded-full font-bold text-lg hover:bg-black/40 transition-all"
              >
                Nous contacter
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-12 flex items-center justify-center gap-8 text-sm"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>ROI garanti en 6 semaines</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Installation en 2h</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Support dédié</span>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Outils;
