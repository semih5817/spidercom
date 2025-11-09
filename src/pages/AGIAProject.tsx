import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Upload, Search, FileText, TrendingUp, AlertTriangle, CheckCircle, Download, Settings, Users, BarChart3, Zap, Clock, Grid, Map, Sun, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const AGIAProject = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedImage, setSelectedImage] = useState(0);

  // Données simulées
  const stats = {
    imagesProcessed: 15847,
    timesSaved: 423,
    anomaliesDetected: 1256,
    activeProjects: 34
  };

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

  return (
    <>
      <Helmet>
        <title>Projet AGIA - Analyse Intelligente d'Images Aériennes | Spidercom</title>
        <meta
          name="description"
          content="AGIA : plateforme d'analyse IA pour la détection d'anomalies sur panneaux solaires via imagerie thermique aérienne. Réduction de 90% du temps d'inspection."
        />
      </Helmet>

      <div className="min-h-screen bg-black text-white">
        <Header />

        {/* Hero Section */}
        <section className="relative py-20 px-4 bg-gradient-to-b from-black via-blue-950/20 to-black overflow-hidden">
          <div className="container mx-auto relative z-10">
            <Link
              to="/projets-realises"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour aux projets
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-2 bg-blue-600/20 rounded-full text-blue-400 text-sm font-bold uppercase">
                🛰️ ANALYSE AÉRIENNE IA
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-black text-white mb-6 font-['Orbitron']"
            >
              AGIA - Analyse Intelligente d'Images Aériennes
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-300 max-w-4xl mb-12"
            >
              Plateforme complète d'analyse IA pour la détection automatique d'anomalies sur panneaux photovoltaïques via imagerie thermique aérienne par drone.
            </motion.p>

            {/* Key Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl"
            >
              <div className="bg-gray-900/50 border border-blue-500/20 rounded-xl p-6">
                <div className="text-3xl font-black text-blue-400 font-['Orbitron']">90%</div>
                <div className="text-sm text-gray-400 mt-1">Temps économisé</div>
              </div>
              <div className="bg-gray-900/50 border border-blue-500/20 rounded-xl p-6">
                <div className="text-3xl font-black text-blue-400 font-['Orbitron']">97.8%</div>
                <div className="text-sm text-gray-400 mt-1">Précision IA</div>
              </div>
              <div className="bg-gray-900/50 border border-blue-500/20 rounded-xl p-6">
                <div className="text-3xl font-black text-blue-400 font-['Orbitron']">15K+</div>
                <div className="text-sm text-gray-400 mt-1">Images traitées</div>
              </div>
              <div className="bg-gray-900/50 border border-blue-500/20 rounded-xl p-6">
                <div className="text-3xl font-black text-blue-400 font-['Orbitron']">42 min</div>
                <div className="text-sm text-gray-400 mt-1">vs 4h manuel</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Dashboard Section */}
        <section className="py-12 px-4">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12 text-center"
            >
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4 font-['Orbitron']">
                Interface de la Plateforme
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Dashboard professionnel avec analyse thermique en temps réel et détection automatique des anomalies
              </p>
            </motion.div>

            {/* Embedded Dashboard */}
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl overflow-hidden shadow-2xl">
              {/* Dashboard Header */}
              <div className="bg-white border-b border-slate-200 shadow-sm">
                <div className="px-6 py-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900">AGIA</h3>
                      <p className="text-xs text-slate-500">Analyse Intelligente d'Images Aériennes</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2 transition-colors">
                      <Upload className="w-4 h-4" />
                      Nouveau projet
                    </button>
                    <button className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center hover:bg-slate-200 transition-colors">
                      <Settings className="w-5 h-5 text-slate-600" />
                    </button>
                  </div>
                </div>
              </div>

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
                            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white px-2 py-1 rounded shadow-lg text-xs font-semibold whitespace-nowrap">
                              {spot.temp}
                            </div>
                          </div>
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
                      <h4 className="text-lg font-semibold text-slate-900 mb-4">Anomalies détectées</h4>
                      
                      <div className="space-y-3 mb-6">
                        {anomalyTypes.map((anomaly, idx) => (
                          <div key={idx} className="space-y-2">
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-slate-700 font-medium">{anomaly.type}</span>
                              <span className="text-slate-900 font-semibold">{anomaly.count}</span>
                            </div>
                            <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                              <div 
                                className={`h-full ${anomaly.color} rounded-full transition-all duration-500`}
                                style={{ width: `${anomaly.percentage}%` }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="border-t border-slate-200 pt-4">
                        <h5 className="text-sm font-semibold text-slate-900 mb-3">Actions recommandées</h5>
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

                      <button className="w-full mt-4 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 font-medium">
                        <Download className="w-4 h-4" />
                        Générer le rapport PDF
                      </button>
                    </div>
                  </div>

                  {/* Recent Analyses */}
                  <div className="mt-6 bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-lg font-semibold text-slate-900">Analyses récentes</h4>
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
                                      <div className="w-3 h-3 border-2 border-blue-700 border-t-transparent rounded-full animate-spin"></div>
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
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default AGIAProject;
