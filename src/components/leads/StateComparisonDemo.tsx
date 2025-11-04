import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Upload, Loader2, CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const StateComparisonDemo = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);

  const analysisSteps = [
    "Lecture OCR état entrée... ✓",
    "Lecture OCR état sortie... ✓",
    "Analyse IA Vision photos... ✓",
    "Détection différences... ✓",
    "Calcul montants... ✓",
    "Génération rapport... ✓"
  ];

  const entryItems = [
    { icon: "✅", text: "Murs salon : Bon état", status: "ok" },
    { icon: "✅", text: "Robinet cuisine : Neuf", status: "ok" },
    { icon: "✅", text: "Parquet chambre : Très bon état", status: "ok" },
    { icon: "✅", text: "Porte palier : Intact", status: "ok" },
    { icon: "✅", text: "Fenêtres : Excellent état", status: "ok" },
  ];

  const exitItems = [
    { icon: "🔴", text: "Murs salon : Trou 5cm + griffures", status: "major" },
    { icon: "⚠️", text: "Robinet cuisine : Fuite légère", status: "minor" },
    { icon: "✅", text: "Parquet chambre : Rayures légères (normal)", status: "ok" },
    { icon: "🔴", text: "Porte palier : Poignée cassée", status: "major" },
    { icon: "✅", text: "Fenêtres : Excellent état", status: "ok" },
  ];

  const differences = [
    { element: "Murs salon", entry: "Bon état", exit: "Trou 5cm + griffures", category: "🔴 Dégradation", type: "Anormal", amount: 120 },
    { element: "Robinet cuisine", entry: "Neuf", exit: "Fuite légère", category: "⚠️ Dégradation", type: "Anormal", amount: 85 },
    { element: "Parquet chambre", entry: "Très bon", exit: "Rayures légères", category: "✅ Normal", type: "Usure normale", amount: 0 },
    { element: "Porte palier", entry: "Intact", exit: "Poignée cassée", category: "🔴 Dégradation", type: "Anormal", amount: 65 },
    { element: "Plomberie", entry: "Fonctionnelle", exit: "Légère usure", category: "⚠️ Attention", type: "Limite", amount: 30 },
  ];

  useEffect(() => {
    if (isAnalyzing) {
      const progressInterval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(progressInterval);
            setTimeout(() => {
              setShowResults(true);
              setIsAnalyzing(false);
            }, 500);
            return 100;
          }
          return prev + 2;
        });
      }, 30);

      const stepInterval = setInterval(() => {
        setCurrentStep(prev => (prev < analysisSteps.length - 1 ? prev + 1 : prev));
      }, 800);

      const timeInterval = setInterval(() => {
        setTimeElapsed(prev => prev + 1);
      }, 100);

      return () => {
        clearInterval(progressInterval);
        clearInterval(stepInterval);
        clearInterval(timeInterval);
      };
    }
  }, [isAnalyzing]);

  const startDemo = () => {
    setIsAnalyzing(true);
    setProgress(0);
    setCurrentStep(0);
    setShowResults(false);
    setTimeElapsed(0);
  };

  return (
    <div className="space-y-8">
      {/* Three columns */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Left: Entry state */}
        <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-spider-cyan/30 p-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="px-3 py-1 bg-spider-cyan/20 text-spider-cyan rounded-full text-sm font-orbitron">
              ENTRÉE
            </div>
          </div>
          
          <div className="space-y-3">
            {entryItems.map((item, idx) => (
              <motion.div
                key={idx}
                className="flex items-start gap-2 text-white/80 text-sm"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <span className="text-lg">{item.icon}</span>
                <span>{item.text}</span>
              </motion.div>
            ))}
          </div>
        </Card>

        {/* Center: AI Analysis */}
        <Card className="bg-gradient-to-br from-purple-900/20 to-gray-900 border-purple-500/30 p-6">
          <div className="flex flex-col items-center justify-center h-full space-y-4">
            <motion.div
              animate={isAnalyzing ? { scale: [1, 1.2, 1], rotate: [0, 360] } : {}}
              transition={{ duration: 2, repeat: isAnalyzing ? Infinity : 0 }}
              className="text-5xl"
            >
              🤖
            </motion.div>

            {!isAnalyzing && !showResults && (
              <Button
                onClick={startDemo}
                className="bg-gradient-to-r from-spider-cyan to-blue-500 text-black font-bold hover:shadow-lg hover:shadow-spider-cyan/50"
              >
                🚀 Lancer l'Analyse IA
              </Button>
            )}

            {isAnalyzing && (
              <div className="w-full space-y-3">
                <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-spider-cyan to-purple-500"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                  />
                </div>

                <div className="space-y-1 text-sm">
                  {analysisSteps.map((step, idx) => (
                    <motion.div
                      key={idx}
                      className={`transition-all ${idx <= currentStep ? 'text-spider-cyan' : 'text-white/30'}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: idx <= currentStep ? 1 : 0.3 }}
                    >
                      {step}
                    </motion.div>
                  ))}
                </div>

                <div className="text-center">
                  <div className="font-orbitron text-2xl text-white">
                    {(timeElapsed / 10).toFixed(1)}s
                  </div>
                  <div className="text-xs text-white/60">Temps écoulé</div>
                </div>
              </div>
            )}

            {showResults && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="text-center space-y-2"
              >
                <CheckCircle2 className="w-16 h-16 text-emerald-400 mx-auto" />
                <div className="font-orbitron text-emerald-400 text-xl">Terminé !</div>
                <div className="text-white/60 text-sm">{(timeElapsed / 10).toFixed(1)}s</div>
              </motion.div>
            )}
          </div>
        </Card>

        {/* Right: Exit state */}
        <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-orange-500/30 p-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="px-3 py-1 bg-orange-500/20 text-orange-500 rounded-full text-sm font-orbitron">
              SORTIE
            </div>
          </div>
          
          <div className="space-y-3">
            {exitItems.map((item, idx) => (
              <motion.div
                key={idx}
                className="flex items-start gap-2 text-white/80 text-sm"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <span className="text-lg">{item.icon}</span>
                <span>{item.text}</span>
              </motion.div>
            ))}
          </div>
        </Card>
      </div>

      {/* Results table */}
      <AnimatePresence>
        {showResults && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <Card className="bg-gradient-to-br from-gray-900 to-black border-spider-red/30 p-6">
              <h3 className="font-orbitron text-2xl text-white mb-6">📊 Résultats de la Comparaison</h3>
              
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left text-white/60 pb-3 font-inter">Élément</th>
                      <th className="text-left text-white/60 pb-3 font-inter">État Entrée</th>
                      <th className="text-left text-white/60 pb-3 font-inter">État Sortie</th>
                      <th className="text-left text-white/60 pb-3 font-inter">Différence</th>
                      <th className="text-left text-white/60 pb-3 font-inter">Catégorie</th>
                      <th className="text-right text-white/60 pb-3 font-inter">Montant</th>
                    </tr>
                  </thead>
                  <tbody>
                    {differences.map((diff, idx) => (
                      <motion.tr
                        key={idx}
                        className="border-b border-white/5"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <td className="py-3 text-white">{diff.element}</td>
                        <td className="py-3 text-white/70">{diff.entry}</td>
                        <td className="py-3 text-white/70">{diff.exit}</td>
                        <td className="py-3">{diff.category}</td>
                        <td className="py-3 text-white/70">{diff.type}</td>
                        <td className="py-3 text-right font-orbitron text-white font-bold">
                          {diff.amount > 0 ? `${diff.amount}€` : '-'}
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="flex items-center justify-between mb-4">
                  <div className="space-y-1">
                    <div className="text-sm text-white/60">Légende:</div>
                    <div className="flex gap-4 text-xs">
                      <span>🔴 Rouge : Dégradation majeure</span>
                      <span>⚠️ Orange : Dégradation mineure</span>
                      <span>✅ Vert : Usure normale</span>
                    </div>
                  </div>
                </div>

                <div className="bg-spider-red/10 border border-spider-red/30 rounded-lg p-4">
                  <div className="font-orbitron text-spider-red text-3xl font-black mb-2">
                    💰 TOTAL RETENU SUR CAUTION : 300€
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm text-white/70">
                    <div>• Dégradations anormales : 270€</div>
                    <div>• Caution initiale : 1 200€</div>
                    <div>• Frais divers : 30€</div>
                    <div>• Caution restituée : 900€</div>
                  </div>
                </div>

                <Button className="w-full mt-4 bg-gradient-to-r from-spider-cyan to-blue-500 text-black font-bold">
                  📥 Télécharger le Rapport PDF
                </Button>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default StateComparisonDemo;
