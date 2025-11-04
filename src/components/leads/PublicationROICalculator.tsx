import { useState } from 'react';

interface PublicationROIResultsProps {
  timeSaved: number;
  moneySaved: number;
  errorsSaved: number;
  errorCostSaved: number;
  totalSaved: number;
  totalSavedYear: number;
  propertiesPerMonth: number;
  agents: number;
}

export function PublicationROIResults({
  timeSaved,
  moneySaved,
  errorsSaved,
  errorCostSaved,
  totalSaved,
  totalSavedYear,
  propertiesPerMonth,
  agents
}: PublicationROIResultsProps) {
  return (
    <>
      {/* Section Économies */}
      <div className="mb-12 bg-gradient-to-r from-green-950/50 via-cyan-950/50 to-purple-950/50 
                      rounded-2xl p-10 border-2 border-green-500">
        <div className="flex items-center gap-4 mb-8">
          <div className="text-6xl">💰</div>
          <h3 className="text-3xl font-black text-green-400">
            VOS ÉCONOMIES PAR MOIS
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-black/30 rounded-xl p-6 text-center border border-green-500/30">
            <div className="text-green-400 text-sm mb-2 font-bold">TEMPS GAGNÉ</div>
            <div className="text-5xl font-black text-white mb-2 font-orbitron">
              {Math.floor(timeSaved)}h
            </div>
            <div className="text-xs text-gray-400">
              par mois ({Math.round(propertiesPerMonth)} annonces)
            </div>
          </div>

          <div className="bg-black/30 rounded-xl p-6 text-center border border-cyan-500/30">
            <div className="text-cyan-400 text-sm mb-2 font-bold">VALEUR TEMPS</div>
            <div className="text-5xl font-black text-white mb-2 font-orbitron">
              {Math.floor(moneySaved)}€
            </div>
            <div className="text-xs text-gray-400">
              économisés sur la publication
            </div>
          </div>

          <div className="bg-black/30 rounded-xl p-6 text-center border border-purple-500/30">
            <div className="text-purple-400 text-sm mb-2 font-bold">ERREURS ÉVITÉES</div>
            <div className="text-5xl font-black text-white mb-2 font-orbitron">
              {Math.floor(errorsSaved)}
            </div>
            <div className="text-xs text-gray-400">
              annonces avec erreurs évitées
            </div>
          </div>
        </div>

        {/* Total économies */}
        <div className="bg-gradient-to-r from-yellow-600 to-orange-600 rounded-2xl p-8 
                        text-center shadow-[0_0_60px_rgba(251,191,36,0.5)]">
          <div className="text-white text-xl mb-3 font-bold">
            💰 ÉCONOMIE TOTALE MENSUELLE
          </div>
          <div className="text-8xl font-black text-white mb-4 font-orbitron tabular-nums animate-pulse">
            +{Math.floor(totalSaved)}€
          </div>
          <div className="flex items-center justify-center gap-8 text-white/90 text-sm">
            <div>
              <div className="text-xs opacity-70">Temps économisé</div>
              <div className="text-2xl font-bold">{Math.floor(moneySaved)}€</div>
            </div>
            <div className="text-4xl">+</div>
            <div>
              <div className="text-xs opacity-70">Erreurs évitées</div>
              <div className="text-2xl font-bold">{Math.floor(errorCostSaved)}€</div>
            </div>
            <div className="text-4xl">=</div>
            <div>
              <div className="text-xs opacity-70">Total mensuel</div>
              <div className="text-2xl font-bold">{Math.floor(totalSaved)}€</div>
            </div>
          </div>
        </div>
      </div>

      {/* Projection annuelle */}
      <div className="bg-gradient-to-r from-purple-950/50 to-pink-950/50 
                      rounded-2xl p-10 border border-purple-500/30 mb-12">
        <h3 className="text-3xl font-bold text-center text-purple-400 mb-8">
          📅 Projection sur 12 mois
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-5xl mb-3">💰</div>
            <div className="text-gray-400 text-sm mb-2">ÉCONOMIE ANNUELLE</div>
            <div className="text-4xl font-black text-white font-orbitron">
              +{Math.floor(totalSavedYear / 1000)}k€
            </div>
          </div>

          <div className="text-center">
            <div className="text-5xl mb-3">📊</div>
            <div className="text-gray-400 text-sm mb-2">ANNONCES PUBLIÉES</div>
            <div className="text-4xl font-black text-white font-orbitron">
              {Math.round(propertiesPerMonth * 12)}
            </div>
          </div>

          <div className="text-center">
            <div className="text-5xl mb-3">⏱️</div>
            <div className="text-gray-400 text-sm mb-2">HEURES LIBÉRÉES</div>
            <div className="text-4xl font-black text-white font-orbitron">
              {Math.floor(timeSaved * 12)}h
            </div>
          </div>

          <div className="text-center">
            <div className="text-5xl mb-3">✅</div>
            <div className="text-gray-400 text-sm mb-2">ERREURS ÉVITÉES</div>
            <div className="text-4xl font-black text-white font-orbitron">
              {Math.floor(errorsSaved * 12)}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Final */}
      <div className="text-center">
        <button className="group relative px-16 py-8 
                           bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
                           text-white font-black text-3xl rounded-2xl
                           shadow-[0_0_60px_rgba(99,102,241,0.6)]
                           hover:shadow-[0_0_80px_rgba(99,102,241,0.8)]
                           hover:scale-110 transition-all duration-300
                           border-4 border-indigo-300 overflow-hidden">
          <span className="relative z-10 flex items-center gap-4">
            <span className="text-5xl">🚀</span>
            JE RÉCUPÈRE MES {Math.floor(totalSaved)}€ PAR MOIS
          </span>
          
          {/* Sparkles animation */}
          {[...Array(20)].map((_, i) => (
            <div 
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full animate-ping"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${1 + Math.random()}s`
              }}
            />
          ))}
        </button>
        
        <p className="text-gray-400 mt-6 text-xl">
          ⚡ Setup en 48h • 🔒 Satisfait ou remboursé • 📈 Résultats dès J+1
        </p>

        <div className="mt-8 flex items-center justify-center gap-8 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <span className="text-green-500 text-xl">✓</span>
            <span>156 agences automatisées</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-500 text-xl">✓</span>
            <span>4.9/5 (203 avis)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-500 text-xl">✓</span>
            <span>Support 7j/7</span>
          </div>
        </div>
      </div>
    </>
  );
}

export function PublicationROICalculator() {
  const [propertiesPerWeek, setPropertiesPerWeek] = useState(25);
  const [agents, setAgents] = useState(6);
  const [tjm, setTjm] = useState(35);
  const [platforms, setPlatforms] = useState(6);

  // CALCULS
  const propertiesPerMonth = propertiesPerWeek * 4.3;
  
  // Temps manuel
  const timeManualPerProperty = 15 * platforms; // 15 min par portail
  const totalTimeManualMonth = (propertiesPerMonth * timeManualPerProperty) / 60; // en heures
  
  // Temps auto
  const timeAutoPerProperty = 12; // minutes
  const totalTimeAutoMonth = (propertiesPerMonth * timeAutoPerProperty) / 60;
  
  // Économie
  const timeSaved = totalTimeManualMonth - totalTimeAutoMonth;
  const moneySaved = timeSaved * tjm;
  
  // Erreurs
  const errorRateManual = 0.18;
  const errorRateAuto = 0.02;
  const propertiesWithErrorsManual = propertiesPerMonth * errorRateManual;
  const propertiesWithErrorsAuto = propertiesPerMonth * errorRateAuto;
  const errorsSaved = propertiesWithErrorsManual - propertiesWithErrorsAuto;
  
  // Coût erreurs (estimation)
  const costPerError = 45; // minutes perdues à corriger × tjm
  const costErrorsManual = propertiesWithErrorsManual * costPerError;
  const costErrorsAuto = propertiesWithErrorsAuto * costPerError;
  const errorCostSaved = costErrorsManual - costErrorsAuto;
  
  // TOTAL
  const totalSaved = moneySaved + errorCostSaved;
  const totalSavedYear = totalSaved * 12;

  return (
    <div className="bg-gradient-to-br from-gray-900 via-indigo-900/10 to-gray-900 
                    rounded-3xl p-12 border-2 border-indigo-500/30
                    shadow-[0_0_60px_rgba(99,102,241,0.2)]">
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        
        {/* Input 1 : Annonces par semaine */}
        <div>
          <label className="flex items-center gap-3 text-xl font-bold text-white mb-4">
            <span className="text-4xl">🏠</span>
            Annonces publiées par semaine
          </label>
          <div className="bg-black/30 rounded-xl p-6 border border-indigo-500/30">
            <input 
              type="range"
              min="5"
              max="50"
              step="5"
              value={propertiesPerWeek}
              onChange={(e) => setPropertiesPerWeek(parseInt(e.target.value))}
              className="w-full h-3 bg-gray-700 rounded-full appearance-none cursor-pointer
                         [&::-webkit-slider-thumb]:appearance-none
                         [&::-webkit-slider-thumb]:w-8
                         [&::-webkit-slider-thumb]:h-8
                         [&::-webkit-slider-thumb]:rounded-full
                         [&::-webkit-slider-thumb]:bg-gradient-to-r
                         [&::-webkit-slider-thumb]:from-indigo-500
                         [&::-webkit-slider-thumb]:to-purple-500
                         [&::-webkit-slider-thumb]:shadow-[0_0_20px_rgba(99,102,241,0.8)]"
            />
          </div>
          <div className="text-center mt-4">
            <div className="text-6xl font-black text-indigo-400 font-orbitron tabular-nums">
              {propertiesPerWeek}
            </div>
            <div className="text-sm text-gray-500">= {Math.round(propertiesPerMonth)} par mois</div>
          </div>
        </div>

        {/* Input 2 : Nombre de portails */}
        <div>
          <label className="flex items-center gap-3 text-xl font-bold text-white mb-4">
            <span className="text-4xl">📡</span>
            Nombre de portails utilisés
          </label>
          <div className="bg-black/30 rounded-xl p-6 border border-purple-500/30">
            <input 
              type="range"
              min="3"
              max="8"
              value={platforms}
              onChange={(e) => setPlatforms(parseInt(e.target.value))}
              className="w-full h-3 bg-gray-700 rounded-full appearance-none cursor-pointer
                         [&::-webkit-slider-thumb]:appearance-none
                         [&::-webkit-slider-thumb]:w-8
                         [&::-webkit-slider-thumb]:h-8
                         [&::-webkit-slider-thumb]:rounded-full
                         [&::-webkit-slider-thumb]:bg-gradient-to-r
                         [&::-webkit-slider-thumb]:from-purple-500
                         [&::-webkit-slider-thumb]:to-pink-500
                         [&::-webkit-slider-thumb]:shadow-[0_0_20px_rgba(168,85,247,0.8)]"
            />
          </div>
          <div className="text-center mt-4">
            <div className="text-6xl font-black text-purple-400 font-orbitron tabular-nums">
              {platforms}
            </div>
            <div className="text-sm text-gray-500">portails par annonce</div>
          </div>
        </div>

        {/* Input 3 : Agents */}
        <div>
          <label className="flex items-center gap-3 text-xl font-bold text-white mb-4">
            <span className="text-4xl">👥</span>
            Agents dans l'équipe
          </label>
          <div className="bg-black/30 rounded-xl p-6 border border-cyan-500/30">
            <input 
              type="range"
              min="1"
              max="20"
              value={agents}
              onChange={(e) => setAgents(parseInt(e.target.value))}
              className="w-full h-3 bg-gray-700 rounded-full appearance-none cursor-pointer
                         [&::-webkit-slider-thumb]:appearance-none
                         [&::-webkit-slider-thumb]:w-8
                         [&::-webkit-slider-thumb]:h-8
                         [&::-webkit-slider-thumb]:rounded-full
                         [&::-webkit-slider-thumb]:bg-gradient-to-r
                         [&::-webkit-slider-thumb]:from-cyan-500
                         [&::-webkit-slider-thumb]:to-blue-500
                         [&::-webkit-slider-thumb]:shadow-[0_0_20px_rgba(6,182,212,0.8)]"
            />
          </div>
          <div className="text-center mt-4">
            <div className="text-6xl font-black text-cyan-400 font-orbitron tabular-nums">
              {agents}
            </div>
          </div>
        </div>

        {/* Input 4 : TJM */}
        <div>
          <label className="flex items-center gap-3 text-xl font-bold text-white mb-4">
            <span className="text-4xl">💰</span>
            Coût horaire agent (salaire chargé)
          </label>
          <div className="bg-black/30 rounded-xl p-6 border border-yellow-500/30">
            <input 
              type="number"
              min="25"
              max="80"
              step="5"
              value={tjm}
              onChange={(e) => setTjm(parseInt(e.target.value))}
              className="w-full bg-gray-800 border-2 border-yellow-500/30 rounded-lg 
                         px-6 py-4 text-4xl font-bold text-white text-center
                         focus:border-yellow-400 focus:outline-none font-orbitron"
            />
          </div>
          <div className="text-center mt-4">
            <div className="text-4xl font-black text-yellow-400">
              {tjm}€/heure
            </div>
          </div>
        </div>
      </div>

      {/* RÉSULTATS */}
      <PublicationROIResults 
        timeSaved={timeSaved}
        moneySaved={moneySaved}
        errorsSaved={errorsSaved}
        errorCostSaved={errorCostSaved}
        totalSaved={totalSaved}
        totalSavedYear={totalSavedYear}
        propertiesPerMonth={propertiesPerMonth}
        agents={agents}
      />
    </div>
  );
}
