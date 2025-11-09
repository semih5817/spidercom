import { useState } from 'react';
const PropertyManagementROICalculator = () => {
  const [properties, setProperties] = useState(120);
  const [agents, setAgents] = useState(3);
  const [tjm, setTjm] = useState(35);

  // CALCULS
  const hoursPerPropertyPerMonth = 12;
  const totalHoursLost = properties * hoursPerPropertyPerMonth;
  const hoursPerAgent = totalHoursLost / agents;
  const totalCostLost = totalHoursLost * tjm;

  // AVEC AUTOMATISATION
  const timeSavedPercentage = 0.6;
  const hoursSaved = totalHoursLost * timeSavedPercentage;
  const moneySaved = hoursSaved * tjm;

  // Incidents
  const avgIncidentsPerPropertyPerMonth = 1.5;
  const totalIncidents = properties * avgIncidentsPerPropertyPerMonth;
  const timePerIncidentManual = 0.75;
  const timePerIncidentAuto = 0.25;
  const timeSavedIncidents = totalIncidents * (timePerIncidentManual - timePerIncidentAuto);
  const moneySavedIncidents = timeSavedIncidents * tjm;

  // Loyers impayés
  const rentDelayBefore = 0.10;
  const rentDelayAfter = 0.03;
  const avgRent = 1200;
  const avgDelayDays = 15;
  const interestRate = 0.05 / 365;
  const costDelayBefore = properties * avgRent * rentDelayBefore * avgDelayDays * interestRate;
  const costDelayAfter = properties * avgRent * rentDelayAfter * avgDelayDays * interestRate;
  const moneySavedRentDelay = costDelayBefore - costDelayAfter;

  // TOTAL
  const totalMoneySaved = moneySaved + moneySavedIncidents + moneySavedRentDelay;
  const totalYearlySaved = totalMoneySaved * 12;
  const costSpydercom = 180 * agents;
  const netGain = totalMoneySaved - costSpydercom;
  const paybackDays = (costSpydercom / (netGain / 30)).toFixed(0);
  return <div className="bg-gradient-to-br from-gray-900 via-emerald-900/10 to-gray-900 
                    rounded-3xl p-12 border-2 border-emerald-500/30
                    shadow-[0_0_60px_rgba(16,185,129,0.2)]">
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        
        {/* Input 1 */}
        <div>
          <label className="flex items-center gap-3 text-xl font-bold text-white mb-4">
            <span className="text-4xl">🏠</span>
            Biens gérés
          </label>
          <div className="bg-black/30 rounded-xl p-6 border border-emerald-500/30">
            <input type="range" min="20" max="500" step="10" value={properties} onChange={e => setProperties(parseInt(e.target.value))} className="w-full h-3 bg-gray-700 rounded-full appearance-none cursor-pointer
                         [&::-webkit-slider-thumb]:appearance-none
                         [&::-webkit-slider-thumb]:w-8
                         [&::-webkit-slider-thumb]:h-8
                         [&::-webkit-slider-thumb]:rounded-full
                         [&::-webkit-slider-thumb]:bg-gradient-to-r
                         [&::-webkit-slider-thumb]:from-emerald-500
                         [&::-webkit-slider-thumb]:to-teal-500
                         [&::-webkit-slider-thumb]:shadow-[0_0_20px_rgba(16,185,129,0.8)]" />
            <div className="flex justify-between text-xs text-gray-500 mt-2">
              <span>20</span>
              <span>250</span>
              <span>500</span>
            </div>
          </div>
          <div className="text-center mt-4">
            <div className="text-6xl font-black text-emerald-400 font-orbitron tabular-nums">
              {properties}
            </div>
            <div className="text-sm text-gray-500">appartements/maisons</div>
          </div>
        </div>

        {/* Input 2 */}
        <div>
          <label className="flex items-center gap-3 text-xl font-bold text-white mb-4">
            <span className="text-4xl">👥</span>
            Agents property manager
          </label>
          <div className="bg-black/30 rounded-xl p-6 border border-teal-500/30">
            <input type="range" min="1" max="20" value={agents} onChange={e => setAgents(parseInt(e.target.value))} className="w-full h-3 bg-gray-700 rounded-full appearance-none cursor-pointer
                         [&::-webkit-slider-thumb]:appearance-none
                         [&::-webkit-slider-thumb]:w-8
                         [&::-webkit-slider-thumb]:h-8
                         [&::-webkit-slider-thumb]:rounded-full
                         [&::-webkit-slider-thumb]:bg-gradient-to-r
                         [&::-webkit-slider-thumb]:from-teal-500
                         [&::-webkit-slider-thumb]:to-cyan-500
                         [&::-webkit-slider-thumb]:shadow-[0_0_20px_rgba(20,184,166,0.8)]" />
          </div>
          <div className="text-center mt-4">
            <div className="text-6xl font-black text-teal-400 font-orbitron tabular-nums">
              {agents}
            </div>
            <div className="text-sm text-gray-500">dans l'équipe</div>
          </div>
        </div>

        {/* Input 3 */}
        <div>
          <label className="flex items-center gap-3 text-xl font-bold text-white mb-4">
            <span className="text-4xl">💰</span>
            Coût horaire (salaire chargé)
          </label>
          <div className="bg-black/30 rounded-xl p-6 border border-cyan-500/30">
            <input type="number" min="25" max="80" step="5" value={tjm} onChange={e => setTjm(parseInt(e.target.value))} className="w-full bg-gray-800 border-2 border-cyan-500/30 rounded-lg 
                         px-6 py-4 text-4xl font-bold text-white text-center
                         focus:border-cyan-400 focus:outline-none font-orbitron" />
          </div>
          <div className="text-center mt-4">
            <div className="text-4xl font-black text-cyan-400">
              {tjm}€/heure
            </div>
          </div>
        </div>
      </div>

      {/* RÉSULTATS */}
      <PropertyManagementROIResults properties={properties} agents={agents} tjm={tjm} totalHoursLost={totalHoursLost} hoursPerAgent={hoursPerAgent} totalCostLost={totalCostLost} hoursSaved={hoursSaved} moneySaved={moneySaved} timeSavedIncidents={timeSavedIncidents} moneySavedIncidents={moneySavedIncidents} moneySavedRentDelay={moneySavedRentDelay} totalMoneySaved={totalMoneySaved} totalYearlySaved={totalYearlySaved} costSpydercom={costSpydercom} netGain={netGain} paybackDays={paybackDays} totalIncidents={totalIncidents} />
    </div>;
};
interface ROIResultsProps {
  properties: number;
  agents: number;
  tjm: number;
  totalHoursLost: number;
  hoursPerAgent: number;
  totalCostLost: number;
  hoursSaved: number;
  moneySaved: number;
  timeSavedIncidents: number;
  moneySavedIncidents: number;
  moneySavedRentDelay: number;
  totalMoneySaved: number;
  totalYearlySaved: number;
  costSpydercom: number;
  netGain: number;
  paybackDays: string;
  totalIncidents: number;
}
const PropertyManagementROIResults = ({
  properties,
  agents,
  tjm,
  totalHoursLost,
  hoursPerAgent,
  totalCostLost,
  hoursSaved,
  moneySaved,
  timeSavedIncidents,
  moneySavedIncidents,
  moneySavedRentDelay,
  totalMoneySaved,
  totalYearlySaved,
  costSpydercom,
  netGain,
  paybackDays,
  totalIncidents
}: ROIResultsProps) => {
  return <>
      {/* SECTION 1 */}
      <div className="mb-12 bg-gradient-to-r from-red-950/50 to-red-900/30 
                      rounded-2xl p-10 border-2 border-red-500
                      shadow-[0_0_40px_rgba(239,68,68,0.3)]">
        <div className="flex items-center gap-4 mb-8">
          <div className="text-6xl">💔</div>
          <h3 className="text-3xl font-black text-red-400">
            VOS PERTES ACTUELLES (Gestion Manuelle)
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-black/30 rounded-xl p-6 text-center">
            <div className="text-red-400 text-sm mb-2">TEMPS PERDU TOTAL</div>
            <div className="text-5xl font-black text-white mb-2 font-orbitron">
              {Math.round(totalHoursLost)}h
            </div>
            <div className="text-xs text-gray-500">
              par mois sur {properties} biens
            </div>
          </div>

          <div className="bg-black/30 rounded-xl p-6 text-center">
            <div className="text-red-400 text-sm mb-2">PAR AGENT</div>
            <div className="text-5xl font-black text-white mb-2 font-orbitron">
              {Math.round(hoursPerAgent)}h
            </div>
            <div className="text-xs text-gray-500">
              soit ~{Math.round(hoursPerAgent / 22)} h/jour de pompier
            </div>
          </div>

          <div className="bg-black/30 rounded-xl p-6 text-center">
            <div className="text-red-400 text-sm mb-2">INCIDENTS / MOIS</div>
            <div className="text-5xl font-black text-white mb-2 font-orbitron">
              {Math.round(totalIncidents)}
            </div>
            <div className="text-xs text-gray-500">
              à gérer manuellement
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-black/50 to-red-950/50 rounded-xl p-8 text-center">
          <div className="text-red-400 text-lg mb-3 font-bold">
            💸 COÛT MENSUEL DE LA GESTION MANUELLE
          </div>
          <div className="text-7xl font-black text-red-500 mb-4 font-orbitron tabular-nums">
            -{Math.round(totalCostLost / 1000)}k€
          </div>
          <div className="text-sm text-gray-400">
            = {Math.round(totalHoursLost)}h × {tjm}€/h
          </div>
          <div className="mt-4 text-red-300 text-xl">
            soit <span className="font-black">-{Math.round(totalCostLost * 12 / 1000)}k€ par an</span> en pure perte
          </div>
        </div>
      </div>

      {/* SECTION 2 */}
      <div className="mb-12 bg-gradient-to-r from-green-950/50 via-teal-950/50 to-cyan-950/50 
                      rounded-2xl p-10 border-2 border-emerald-400
                      shadow-[0_0_40px_rgba(16,185,129,0.3)]">
        <div className="flex items-center gap-4 mb-8">
          <div className="text-6xl">🚀</div>
          <h3 className="text-3xl font-black text-emerald-400">AVEC SPIDERCOM (Automatisation Totale)</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-black/30 rounded-xl p-6 text-center border border-green-500/30">
            <div className="text-green-400 text-sm mb-2">TEMPS ÉCONOMISÉ</div>
            <div className="text-5xl font-black text-white mb-2 font-orbitron">
              {Math.round(hoursSaved)}h
            </div>
            <div className="text-xs text-gray-500">
              = {Math.round(hoursSaved / agents)}h par agent/mois
            </div>
            <div className="mt-3 text-green-400 font-bold text-sm">
              = {Math.round(moneySaved / 1000)}k€ valorisés
            </div>
          </div>

          <div className="bg-black/30 rounded-xl p-6 text-center border border-teal-500/30">
            <div className="text-teal-400 text-sm mb-2">INCIDENTS AUTO</div>
            <div className="text-5xl font-black text-white mb-2 font-orbitron">
              {Math.round(timeSavedIncidents)}h
            </div>
            <div className="text-xs text-gray-500">
              économisées (classification + assignation)
            </div>
            <div className="mt-3 text-teal-400 font-bold text-sm">
              = {Math.round(moneySavedIncidents / 1000)}k€ économisés
            </div>
          </div>

          <div className="bg-black/30 rounded-xl p-6 text-center border border-cyan-500/30">
            <div className="text-cyan-400 text-sm mb-2">LOYERS RÉCUPÉRÉS</div>
            <div className="text-5xl font-black text-white mb-2 font-orbitron">
              -70%
            </div>
            <div className="text-xs text-gray-500">
              d'impayés (10% → 3%)
            </div>
            <div className="mt-3 text-cyan-400 font-bold text-sm">
              = {Math.round(moneySavedRentDelay)}€ économisés
            </div>
          </div>
        </div>

        <div className="bg-black/30 rounded-xl p-6 mb-8">
          <h4 className="text-lg font-bold text-white mb-4 text-center">
            💰 Détail des Économies Mensuelles
          </h4>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-green-950/30 rounded-lg">
              <span className="text-gray-300">Temps gestion économisé</span>
              <span className="text-xl font-bold text-green-400">
                +{Math.round(moneySaved / 1000)}k€
              </span>
            </div>
            <div className="flex items-center justify-between p-3 bg-teal-950/30 rounded-lg">
              <span className="text-gray-300">Incidents automatisés</span>
              <span className="text-xl font-bold text-teal-400">
                +{Math.round(moneySavedIncidents / 1000)}k€
              </span>
            </div>
            <div className="flex items-center justify-between p-3 bg-cyan-950/30 rounded-lg">
              <span className="text-gray-300">Loyers récupérés plus vite</span>
              <span className="text-xl font-bold text-cyan-400">
                +{Math.round(moneySavedRentDelay)}€
              </span>
            </div>
            
          </div>
        </div>

        <div className="bg-gradient-to-r from-yellow-600 to-orange-600 rounded-2xl p-8 
                        text-center shadow-[0_0_60px_rgba(251,191,36,0.5)]">
          <div className="text-white text-xl mb-3 font-bold">
            💰 GAIN NET MENSUEL
          </div>
          <div className="text-8xl font-black text-white mb-4 font-orbitron tabular-nums
                          animate-pulse">
            +{Math.round(netGain / 1000)}k€
          </div>
          
        </div>
      </div>

      {/* SECTION 3 */}
      <div className="bg-gradient-to-r from-purple-950/50 to-pink-950/50 
                      rounded-2xl p-10 border border-purple-500/30 mb-12">
        <h3 className="text-3xl font-bold text-center text-purple-400 mb-8">
          📅 Impact sur 12 Mois
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-4xl mb-3">💰</div>
            <div className="text-gray-400 text-xs mb-2 font-medium uppercase tracking-wide">GAIN ANNUEL NET</div>
            <div className="text-2xl md:text-3xl font-black text-white font-orbitron tabular-nums">
              {Math.round(netGain * 12 / 1000)}k€
            </div>
          </div>

          <div className="text-center">
            <div className="text-4xl mb-3">⏱️</div>
            <div className="text-gray-400 text-xs mb-2 font-medium uppercase tracking-wide">HEURES LIBÉRÉES</div>
            <div className="text-2xl md:text-3xl font-black text-white font-orbitron tabular-nums">
              {Math.round(hoursSaved * 12)}h
            </div>
          </div>

          <div className="text-center">
            <div className="text-4xl mb-3">🎫</div>
            <div className="text-gray-400 text-xs mb-2 font-medium uppercase tracking-wide">INCIDENTS GÉRÉS</div>
            <div className="text-2xl md:text-3xl font-black text-white font-orbitron tabular-nums">
              {Math.round(totalIncidents * 12)}
            </div>
          </div>

          <div className="text-center">
            <div className="text-4xl mb-3">😊</div>
            <div className="text-gray-400 text-xs mb-2 font-medium uppercase tracking-wide">SATISFACTION</div>
            <div className="text-2xl md:text-3xl font-black text-white font-orbitron tabular-nums">
              +50%
            </div>
          </div>
        </div>
      </div>

      {/* CTA Final */}
      <div className="text-center">
        <button className="group relative px-16 py-8 
                           bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500
                           text-white font-black text-3xl rounded-2xl
                           shadow-[0_0_60px_rgba(16,185,129,0.6)]
                           hover:shadow-[0_0_80px_rgba(16,185,129,0.8)]
                           hover:scale-110 transition-all duration-300
                           border-4 border-emerald-300 overflow-hidden">
          <span className="relative z-10 flex items-center gap-4">
            <span className="text-5xl">🚀</span>
            JE RÉCUPÈRE MES {Math.round(netGain / 1000)}K€ PAR MOIS
          </span>
          
          {[...Array(20)].map((_, i) => <div key={i} className="absolute w-2 h-2 bg-white rounded-full animate-ping" style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 2}s`,
          animationDuration: `${1 + Math.random()}s`
        }} />)}
        </button>
        
        <p className="text-gray-400 mt-6 text-xl">
          ⚡ Setup en 48h • 🎯 Résultats dès J+1 • 🔒 Satisfait ou remboursé 30j
        </p>

        <div className="mt-8 flex items-center justify-center gap-8 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <span className="text-green-500 text-xl">✓</span>
            <span>2 agences équipées</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-500 text-xl">✓</span>
            <span>4.9/5 (2 avis)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-500 text-xl">✓</span>
            <span>Support dédié 7j/7</span>
          </div>
        </div>
      </div>
    </>;
};
export default PropertyManagementROICalculator;