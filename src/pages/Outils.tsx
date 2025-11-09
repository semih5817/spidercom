import React, { useState, useRef } from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Upload, Search, FileText, TrendingUp, AlertTriangle, CheckCircle, Download, Settings, Users, BarChart3, Zap, Clock, Grid, Map, X, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'sonner';

const Outils = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedImage, setSelectedImage] = useState(0);
  const [uploadedImages, setUploadedImages] = useState<File[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisComplete, setAnalysisComplete] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

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
    toast.info("Analyse en cours...");

    // Simulation de l'analyse IA (2-3 secondes)
    await new Promise(resolve => setTimeout(resolve, 3000));

    // Mise à jour des stats
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

  return (
    <>
      <Helmet>
        <title>Outils AGIA - Dashboard d'Analyse IA | Spidercom</title>
        <meta
          name="description"
          content="Dashboard professionnel AGIA pour l'analyse d'images thermiques de panneaux solaires par intelligence artificielle."
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
        <Header />

        {/* Dashboard Header */}
        <div className="bg-white border-b border-slate-200 shadow-sm">
          <div className="container mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-slate-900">AGIA Dashboard</h1>
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
              <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-semibold text-blue-900">
                    Images uploadées ({uploadedImages.length})
                  </h3>
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
          <aside className="w-64 bg-white border-r border-slate-200 min-h-screen p-4">
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
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-xl shadow-sm border border-slate-200 p-6"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-slate-600 text-sm">Images traitées</span>
                  <Upload className="w-5 h-5 text-blue-600" />
                </div>
                <p className="text-3xl font-bold text-slate-900">{stats.imagesProcessed.toLocaleString()}</p>
                <p className="text-xs text-green-600 mt-1 flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" />
                  +12% vs mois dernier
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-xl shadow-sm border border-slate-200 p-6"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-slate-600 text-sm">Anomalies détectées</span>
                  <AlertTriangle className="w-5 h-5 text-orange-600" />
                </div>
                <p className="text-3xl font-bold text-slate-900">{stats.anomaliesDetected}</p>
                <p className="text-xs text-slate-500 mt-1">Taux de détection: 97.8%</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-xl shadow-sm border border-slate-200 p-6"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-slate-600 text-sm">Projets actifs</span>
                  <Map className="w-5 h-5 text-purple-600" />
                </div>
                <p className="text-3xl font-bold text-slate-900">{stats.activeProjects}</p>
                <p className="text-xs text-slate-500 mt-1">8 en cours d'analyse</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl shadow-sm border border-green-200 p-6"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-green-700 text-sm font-medium">Temps moyen</span>
                  <Zap className="w-5 h-5 text-green-600" />
                </div>
                <p className="text-3xl font-bold text-green-900">42 min</p>
                <p className="text-xs text-green-700 mt-1">vs 4h en manuel</p>
              </motion.div>
            </div>

            <div className="grid grid-cols-3 gap-6">
              {/* Thermal Analysis Viewer */}
              <div className="col-span-2 bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold text-slate-900">Analyse thermique en cours</h2>
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
                  {/* Grid overlay */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="grid grid-cols-8 grid-rows-6 h-full">
                      {[...Array(48)].map((_, i) => (
                        <div key={i} className="border border-white"></div>
                      ))}
                    </div>
                  </div>

                  {/* Simulated thermal gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-red-900 opacity-60"></div>

                  {/* Hot spots */}
                  {thermalImages.map((spot, idx) => (
                    <motion.div
                      key={spot.id}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: idx * 0.2 }}
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
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white px-2 py-1 rounded shadow-lg text-xs font-semibold whitespace-nowrap">
                        {spot.temp}
                      </div>
                    </motion.div>
                  ))}

                  {/* Temperature scale */}
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

                  {/* Info panel */}
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                    <div className="text-xs font-semibold text-slate-700 mb-1">Panneau sélectionné</div>
                    <div className="text-lg font-bold text-slate-900">{thermalImages[selectedImage].panel}</div>
                    <div className="flex items-center gap-4 mt-2">
                      <div>
                        <div className="text-xs text-slate-600">Température</div>
                        <div className="text-sm font-semibold text-red-600">{thermalImages[selectedImage].temp}</div>
                      </div>
                      <div>
                        <div className="text-xs text-slate-600">Sévérité</div>
                        <div className={`text-sm font-semibold ${
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

                {/* Analysis info */}
                <div className="mt-4 grid grid-cols-3 gap-3">
                  <div className="bg-slate-50 rounded-lg p-3">
                    <div className="text-xs text-slate-600 mb-1">Images analysées</div>
                    <div className="text-xl font-bold text-slate-900">456/456</div>
                  </div>
                  <div className="bg-slate-50 rounded-lg p-3">
                    <div className="text-xs text-slate-600 mb-1">Durée traitement</div>
                    <div className="text-xl font-bold text-slate-900">38 min</div>
                  </div>
                  <div className="bg-slate-50 rounded-lg p-3">
                    <div className="text-xs text-slate-600 mb-1">Confiance IA</div>
                    <div className="text-xl font-bold text-green-600">97.8%</div>
                  </div>
                </div>
              </div>

              {/* Anomaly Detection Panel */}
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                <h2 className="text-lg font-semibold text-slate-900 mb-4">Anomalies détectées</h2>
                
                <div className="space-y-3 mb-6">
                  {anomalyTypes.map((anomaly, idx) => (
                    <div key={idx} className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-700 font-medium">{anomaly.type}</span>
                        <span className="text-slate-900 font-semibold">{anomaly.count}</span>
                      </div>
                      <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: `${anomaly.percentage}%` }}
                          transition={{ duration: 1, delay: idx * 0.1 }}
                          className={`h-full ${anomaly.color} rounded-full`}
                        ></motion.div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-slate-200 pt-4">
                  <h3 className="text-sm font-semibold text-slate-900 mb-3">Actions recommandées</h3>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2 p-2 bg-red-50 rounded-lg border border-red-200">
                      <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                      <div className="text-xs">
                        <div className="font-semibold text-red-900">3 panneaux critiques</div>
                        <div className="text-red-700">Intervention urgente requise</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 p-2 bg-orange-50 rounded-lg border border-orange-200">
                      <AlertTriangle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                      <div className="text-xs">
                        <div className="font-semibold text-orange-900">12 panneaux à surveiller</div>
                        <div className="text-orange-700">Planifier maintenance</div>
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleGenerateReport}
                  className="w-full mt-4 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 font-medium"
                >
                  <Download className="w-4 h-4" />
                  Générer le rapport PDF
                </button>
              </div>
            </div>

            {/* Recent Analyses */}
            <div className="mt-6 bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-slate-900">Analyses récentes</h2>
                <button className="text-blue-600 text-sm font-medium hover:text-blue-700">
                  Voir tout
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-slate-200">
                      <th className="text-left text-xs font-semibold text-slate-600 pb-3 px-2">Projet</th>
                      <th className="text-left text-xs font-semibold text-slate-600 pb-3 px-2">Date</th>
                      <th className="text-left text-xs font-semibold text-slate-600 pb-3 px-2">Images</th>
                      <th className="text-left text-xs font-semibold text-slate-600 pb-3 px-2">Anomalies</th>
                      <th className="text-left text-xs font-semibold text-slate-600 pb-3 px-2">Sévérité</th>
                      <th className="text-left text-xs font-semibold text-slate-600 pb-3 px-2">Statut</th>
                      <th className="text-left text-xs font-semibold text-slate-600 pb-3 px-2">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentAnalyses.map((analysis) => (
                      <tr key={analysis.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                        <td className="py-3 px-2">
                          <div className="font-medium text-slate-900 text-sm">{analysis.name}</div>
                        </td>
                        <td className="py-3 px-2 text-sm text-slate-600">{analysis.date}</td>
                        <td className="py-3 px-2 text-sm text-slate-900 font-medium">{analysis.images}</td>
                        <td className="py-3 px-2">
                          <span className="text-sm font-semibold text-orange-600">{analysis.anomalies}</span>
                        </td>
                        <td className="py-3 px-2">
                          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                            analysis.severity === 'high' ? 'bg-red-100 text-red-700' :
                            analysis.severity === 'medium' ? 'bg-orange-100 text-orange-700' :
                            'bg-yellow-100 text-yellow-700'
                          }`}>
                            {analysis.severity === 'high' ? 'Élevée' :
                             analysis.severity === 'medium' ? 'Moyenne' : 'Faible'}
                          </span>
                        </td>
                        <td className="py-3 px-2">
                          <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                            analysis.status === 'completed' ? 'bg-green-100 text-green-700' :
                            'bg-blue-100 text-blue-700'
                          }`}>
                            {analysis.status === 'completed' ? (
                              <>
                                <CheckCircle className="w-3 h-3" />
                                Terminé
                              </>
                            ) : (
                              <>
                                <Loader2 className="w-3 h-3 animate-spin" />
                                En cours
                              </>
                            )}
                          </span>
                        </td>
                        <td className="py-3 px-2">
                          <div className="flex gap-2">
                            <button className="p-1 hover:bg-slate-100 rounded transition-colors">
                              <FileText className="w-4 h-4 text-slate-600" />
                            </button>
                            <button className="p-1 hover:bg-slate-100 rounded transition-colors">
                              <Download className="w-4 h-4 text-slate-600" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </main>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Outils;
