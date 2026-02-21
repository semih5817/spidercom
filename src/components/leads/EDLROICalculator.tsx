import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
const EDLROICalculator = () => {
  const [properties, setProperties] = useState(120);
  const [rotationRate, setRotationRate] = useState(50);
  const [agents, setAgents] = useState(3);
  const [hourlyRate, setHourlyRate] = useState(35);

  // Calculs
  const comparisonsPerYear = Math.round(properties * rotationRate / 100) * 2;
  const manualTimeHours = Math.round(comparisonsPerYear * 45 / 60);
  const manualTimeCost = Math.round(manualTimeHours * hourlyRate);
  const missedLitigations = Math.round(comparisonsPerYear * 0.18);
  const missedLitigationsCost = missedLitigations * 450;
  const totalLoss = manualTimeCost + missedLitigationsCost;
  const autoTimeHours = Math.round(comparisonsPerYear * 2 / 60);
  const timeSaved = manualTimeHours - autoTimeHours;
  const timeSavings = Math.round(timeSaved * hourlyRate);
  const litigationsSavings = missedLitigationsCost;
  const totalGain = timeSavings + litigationsSavings;
  const paybackDays = Math.round(59 * 12 / (totalGain / 365));
  const roi = Math.round(totalGain / (59 * 12) * 100);
  return <div className="space-y-8">
      <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-spider-cyan/30 p-8">
        <h3 className="font-orbitron text-2xl text-white mb-8">⚙️ Configurez Votre Profil</h3>
        
        <div className="space-y-6">
          {/* Slider 1 */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <label className="text-white/80">Nombre de biens gérés</label>
              <div className="font-orbitron text-3xl text-spider-cyan font-black">{properties}</div>
            </div>
            <Slider value={[properties]} onValueChange={value => setProperties(value[0])} min={10} max={500} step={10} className="w-full" />
          </div>

          {/* Slider 2 */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <label className="text-white/80">Taux rotation annuel</label>
              <div className="font-orbitron text-3xl text-spider-cyan font-black">{rotationRate}%</div>
            </div>
            <Slider value={[rotationRate]} onValueChange={value => setRotationRate(value[0])} min={10} max={100} step={5} className="w-full" />
            <div className="text-sm text-white/60 mt-2">
              = {Math.round(properties * rotationRate / 100)} biens × 2 EDL = {comparisonsPerYear} comparaisons/an
            </div>
          </div>

          {/* Slider 3 */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <label className="text-white/80">Agents gestionnaires</label>
              <div className="font-orbitron text-3xl text-spider-cyan font-black">{agents}</div>
            </div>
            <Slider value={[agents]} onValueChange={value => setAgents(value[0])} min={1} max={20} step={1} className="w-full" />
          </div>

          {/* Slider 4 */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <label className="text-white/80">TJM agent (€/h)</label>
              <div className="font-orbitron text-3xl text-spider-cyan font-black">{hourlyRate}€</div>
            </div>
            <Slider value={[hourlyRate]} onValueChange={value => setHourlyRate(value[0])} min={25} max={80} step={5} className="w-full" />
          </div>
        </div>
      </Card>

      {/* Pertes actuelles */}
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      delay: 0.2
    }}>
        <Card className="bg-gradient-to-br from-spider-red/20 to-gray-900 border-spider-red p-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-4xl">😫</span>
            <h3 className="font-orbitron text-2xl text-white">VOS PERTES ACTUELLES (Comparaison Manuelle)</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-black/30 p-4 rounded-lg">
              <div className="text-white/60 text-sm mb-1">Comparaisons par an</div>
              <div className="font-orbitron text-2xl text-white">{comparisonsPerYear}</div>
            </div>
            <div className="bg-black/30 p-4 rounded-lg">
              <div className="text-white/60 text-sm mb-1">Temps perdu</div>
              <div className="font-orbitron text-2xl text-white">{manualTimeHours}h</div>
            </div>
            <div className="bg-black/30 p-4 rounded-lg">
              <div className="text-white/60 text-sm mb-1">Coût temps</div>
              <div className="font-orbitron text-2xl text-spider-red">{manualTimeCost.toLocaleString()}€</div>
            </div>
            <div className="bg-black/30 p-4 rounded-lg">
              <div className="text-white/60 text-sm mb-1">Litiges oubliés</div>
              <div className="font-orbitron text-2xl text-white">{missedLitigations}</div>
            </div>
            <div className="bg-black/30 p-4 rounded-lg md:col-span-2">
              <div className="text-white/60 text-sm mb-1">Coût litiges</div>
              <div className="font-orbitron text-2xl text-spider-red">{missedLitigationsCost.toLocaleString()}€</div>
            </div>
          </div>

          <div className="bg-spider-red/20 border border-spider-red rounded-lg p-6 text-center">
            <div className="text-white/60 text-sm mb-2">TOTAL PERDU PAR AN</div>
            <motion.div className="font-orbitron text-5xl text-spider-red font-black" animate={{
            scale: [1, 1.05, 1]
          }} transition={{
            duration: 2,
            repeat: Infinity
          }}>
              -{totalLoss.toLocaleString()}€/an
            </motion.div>
          </div>
        </Card>
      </motion.div>

      {/* Gains avec MT03 */}
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      delay: 0.4
    }}>
        <Card className="bg-gradient-to-br from-emerald-500/20 to-gray-900 border-emerald-500 p-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-4xl">🚀</span>
            <h3 className="font-orbitron text-2xl text-white">AVEC MT03 (Automatisation IA)</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-black/30 p-4 rounded-lg">
              <div className="text-white/60 text-sm mb-1">Temps par comparaison</div>
              <div className="font-orbitron text-2xl text-emerald-400">2 min</div>
            </div>
            <div className="bg-black/30 p-4 rounded-lg">
              <div className="text-white/60 text-sm mb-1">Temps total</div>
              <div className="font-orbitron text-2xl text-emerald-400">{autoTimeHours}h</div>
            </div>
            <div className="bg-black/30 p-4 rounded-lg">
              <div className="text-white/60 text-sm mb-1">Économie temps</div>
              <div className="font-orbitron text-2xl text-emerald-400">{timeSaved}h</div>
            </div>
            <div className="bg-black/30 p-4 rounded-lg">
              <div className="text-white/60 text-sm mb-1">Valeur temps</div>
              <div className="font-orbitron text-2xl text-emerald-400">+{timeSavings.toLocaleString()}€</div>
            </div>
            <div className="bg-black/30 p-4 rounded-lg">
              <div className="text-white/60 text-sm mb-1">Litiges évités</div>
              <div className="font-orbitron text-2xl text-emerald-400">{missedLitigations} → 0</div>
            </div>
            <div className="bg-black/30 p-4 rounded-lg">
              <div className="text-white/60 text-sm mb-1">Économie litiges</div>
              <div className="font-orbitron text-2xl text-emerald-400">+{litigationsSavings.toLocaleString()}€</div>
            </div>
          </div>

          <div className="bg-emerald-500/20 border border-emerald-500 rounded-lg p-6 text-center mb-6">
            <div className="text-white/60 text-sm mb-2">TOTAL GAIN NET PAR AN</div>
            <motion.div className="font-orbitron text-5xl text-emerald-400 font-black" animate={{
            scale: [1, 1.05, 1]
          }} transition={{
            duration: 2,
            repeat: Infinity
          }}>
              +{totalGain.toLocaleString()}€/an
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-black/30 p-4 rounded-lg text-center">
              <div className="text-white/60 text-sm mb-1">Payback</div>
              <div className="font-orbitron text-3xl text-white">{paybackDays} jours</div>
            </div>
            <div className="bg-black/30 p-4 rounded-lg text-center">
              <div className="text-white/60 text-sm mb-1">ROI sur 1 an</div>
              <div className="font-orbitron text-3xl text-white">{roi}%</div>
            </div>
          </div>

          <motion.div whileHover={{
          scale: 1.02
        }} whileTap={{
          scale: 0.98
        }}>
            <Button className="w-full bg-gradient-to-r from-spider-cyan to-blue-500 text-black font-orbitron font-black text-xl py-8 hover:shadow-lg hover:shadow-spider-cyan/50">
              🚀 JE RÉCUPÈRE MES {totalGain.toLocaleString()}€ PAR AN
            </Button>
          </motion.div>

          <div className="text-center mt-4 text-sm text-white/60">
            ⚡ Setup 48h • 🎯 Premiers résultats J+1 • 🔒 Satisfait ou remboursé 30j
          </div>
        </Card>
      </motion.div>
    </div>;
};
export default EDLROICalculator;