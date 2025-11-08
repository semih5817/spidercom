interface ROICalculationResultsProps {
  nbAgents: number;
  nbLeads: number;
  tjm: number;
  avgCommission: number;
}
const ROICalculationResults = ({
  nbAgents,
  nbLeads,
  tjm,
  avgCommission
}: ROICalculationResultsProps) => {
  // Calculs
  const tempsGagneParAgent = 6 * 4.3; // 6h/sem × 4.3 semaines
  const tempsGagneTotal = Math.floor(tempsGagneParAgent * nbAgents);
  const valeurTempsGagne = tempsGagneTotal * tjm;
  const leadsActuellementPerdus = Math.floor(nbLeads * 0.30);
  const manqueAGagnerLeads = leadsActuellementPerdus * avgCommission * 0.12; // 12% conversion perdue

  const leadsRecuperes = Math.floor(leadsActuellementPerdus * 0.95); // 95% récupérés
  const gainConversionApres = leadsRecuperes * avgCommission * 0.17; // 17% conversion avec auto

  const gainTotal = valeurTempsGagne + gainConversionApres;
  const coutSpydercom = 250 * nbAgents; // Estimation coût mensuel
  const gainNet = gainTotal - coutSpydercom;
  const roi = (gainNet / coutSpydercom * 100).toFixed(0);
  return <>
      {/* Section AVANT : Pertes actuelles */}
      <div className="mb-12 bg-gradient-to-r from-red-950/50 to-red-900/30 
                      rounded-2xl p-10 border-2 border-red-500
                      shadow-[0_0_40px_rgba(239,68,68,0.3)]">
        <div className="flex items-center gap-4 mb-8">
          <div className="text-6xl">😱</div>
          <h3 className="text-3xl font-black text-red-400">
            VOS PERTES ACTUELLES (mode manuel)
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-black/30 rounded-xl p-6 text-center">
            <div className="text-red-400 text-sm mb-2">TEMPS PERDU</div>
            <div className="text-5xl font-black text-white mb-2 font-['Orbitron']">
              {tempsGagneTotal}h
            </div>
            <div className="text-xs text-gray-500">
              = {nbAgents} agents × 26h/mois
            </div>
          </div>

          <div className="bg-black/30 rounded-xl p-6 text-center">
            <div className="text-red-400 text-sm mb-2">LEADS PERDUS</div>
            <div className="text-5xl font-black text-white mb-2 font-['Orbitron']">
              {leadsActuellementPerdus}
            </div>
            <div className="text-xs text-gray-500">
              30% non traités (norme secteur)
            </div>
          </div>

          <div className="bg-black/30 rounded-xl p-6 text-center">
            <div className="text-red-400 text-sm mb-2">MANQUE À GAGNER TOTAL</div>
            <div className="text-5xl font-black text-red-500 mb-2 font-['Orbitron']">
              -{Math.floor((valeurTempsGagne + manqueAGagnerLeads) / 1000)}k€
            </div>
            <div className="text-xs text-gray-500">
              par mois actuellement
            </div>
          </div>
        </div>
      </div>

      {/* Section APRÈS : Gains avec Spydercom */}
      <div className="mb-12 bg-gradient-to-r from-green-950/50 via-cyan-950/50 to-blue-950/50 
                      rounded-2xl p-10 border-2 border-cyan-400
                      shadow-[0_0_40px_rgba(6,182,212,0.3)]">
        <div className="flex items-center gap-4 mb-8">
          <div className="text-6xl">🚀</div>
          <h3 className="text-3xl font-black text-cyan-400">VOS GAINS AVEC SPIDERCOM</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-black/30 rounded-xl p-6 text-center border border-cyan-500/30">
            <div className="text-cyan-400 text-sm mb-2">TEMPS LIBÉRÉ</div>
            <div className="text-5xl font-black text-white mb-2 font-['Orbitron']">
              +{tempsGagneTotal}h
            </div>
            <div className="text-xs text-gray-500">
              pour se concentrer sur la vente
            </div>
            <div className="mt-3 text-cyan-400 font-bold">
              = {valeurTempsGagne.toLocaleString()}€
            </div>
          </div>

          <div className="bg-black/30 rounded-xl p-6 text-center border border-green-500/30">
            <div className="text-green-400 text-sm mb-2">LEADS RÉCUPÉRÉS</div>
            <div className="text-5xl font-black text-white mb-2 font-['Orbitron']">
              +{leadsRecuperes}
            </div>
            <div className="text-xs text-gray-500">
              traités en &lt;60s (95% du total perdu)
            </div>
            <div className="mt-3 text-green-400 font-bold">
              = {Math.floor(gainConversionApres / 1000)}k€
            </div>
          </div>

          <div className="bg-black/30 rounded-xl p-6 text-center border border-purple-500/30">
            <div className="text-purple-400 text-sm mb-2">TAUX DE CONVERSION</div>
            <div className="flex items-center justify-center gap-3 mb-2">
              <span className="text-2xl text-gray-500 line-through">12%</span>
              <span className="text-3xl">→</span>
              <span className="text-5xl font-black text-white font-['Orbitron']">17%</span>
            </div>
            <div className="text-xs text-gray-500">
              +42% d'efficacité commerciale
            </div>
          </div>
        </div>

        {/* Total gains */}
        <div className="bg-gradient-to-r from-yellow-600 to-orange-600 rounded-2xl p-8 
                        text-center shadow-[0_0_60px_rgba(251,191,36,0.5)]">
          <div className="text-white text-xl mb-3 font-bold">
            💰 GAIN MENSUEL NET (après déduction Spydercom)
          </div>
          <div className="text-8xl font-black text-white mb-4 font-['Orbitron'] tabular-nums
                          animate-pulse">
            +{Math.floor(gainNet / 1000)}k€
          </div>
          <div className="flex items-center justify-center gap-8 text-white/90 flex-wrap">
            <div>
              <div className="text-sm">Coût Spydercom</div>
              <div className="text-2xl font-bold">{coutSpydercom}€/mois</div>
            </div>
            <div className="text-4xl">→</div>
            <div>
              <div className="text-sm">ROI</div>
              <div className="text-2xl font-bold">×{roi}</div>
            </div>
            <div className="text-4xl">→</div>
            <div>
              <div className="text-sm">Amorti en</div>
              <div className="text-2xl font-bold">&lt;1 sem</div>
            </div>
          </div>
        </div>
      </div>

      {/* Projection annuelle */}
      <div className="bg-gradient-to-r from-purple-950/50 to-pink-950/50 
                      rounded-2xl p-8 border border-purple-500/30">
        <h4 className="text-2xl font-bold text-center text-purple-400 mb-6">
          📊 Projection sur 12 mois
        </h4>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-gray-400 text-sm mb-2">GAIN ANNUEL</div>
            <div className="text-4xl font-black text-white">
              +{Math.floor(gainNet * 12 / 1000)}k€
            </div>
          </div>
          <div>
            <div className="text-gray-400 text-sm mb-2">VENTES SUPPLÉMENTAIRES</div>
            <div className="text-4xl font-black text-white">
              +{Math.floor(leadsRecuperes * 0.17 * 12)}
            </div>
          </div>
          <div>
            <div className="text-gray-400 text-sm mb-2">TEMPS TOTAL LIBÉRÉ</div>
            <div className="text-4xl font-black text-white">
              {Math.floor(tempsGagneTotal * 12)}h
            </div>
          </div>
        </div>
      </div>

      {/* CTA final */}
      <div className="text-center mt-12">
        <button className="group relative px-16 py-8 
                           bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500
                           text-white font-black text-2xl md:text-3xl rounded-2xl
                           shadow-[0_0_60px_rgba(251,191,36,0.6)]
                           hover:shadow-[0_0_80px_rgba(251,191,36,0.8)]
                           hover:scale-110 transition-all duration-300
                           border-4 border-yellow-300 overflow-hidden">
          <span className="relative z-10 flex items-center gap-4">
            <span className="text-5xl">🎯</span>
            JE RÉCUPÈRE MES {Math.floor(gainNet / 1000)}K€ PAR MOIS
          </span>
          
          {/* Sparkles */}
          {[...Array(15)].map((_, i) => <div key={i} className="absolute w-2 h-2 bg-white rounded-full animate-ping" style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 2}s`,
          animationDuration: `${1 + Math.random()}s`
        }} />)}
        </button>
        
        <p className="text-gray-400 mt-6 text-xl">
          ⚡ Démo live en 15 min • 🔒 Sans CB • 🚀 Setup en 48h • 💪 Satisfait ou remboursé
        </p>
      </div>
    </>;
};
export default ROICalculationResults;