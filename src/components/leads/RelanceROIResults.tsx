interface RelanceROIResultsProps {
  nbVisites: number;
  nbAgents: number;
  tjm: number;
  avgCommission: number;
}
const RelanceROIResults = ({
  nbVisites,
  nbAgents,
  tjm,
  avgCommission
}: RelanceROIResultsProps) => {
  // CALCULS PERTES ACTUELLES (sans automatisation)
  const tauxRelanceManuels = 0.33;
  const visitesNonRelancees = Math.floor(nbVisites * (1 - tauxRelanceManuels));
  const tauxConversionSansRelance = 0.08;
  const tauxConversionAvecRelance = 0.14;
  const tauxConversionAvecAuto = 0.19;
  const ventesPerduesTotales = visitesNonRelancees * (tauxConversionAvecRelance - tauxConversionSansRelance);
  const manqueAGagner = ventesPerduesTotales * avgCommission;
  const tempsRelanceManuelle = 20;
  const tempsPerduMois = nbVisites * tauxRelanceManuels * tempsRelanceManuelle / 60;
  const coutTempsPerdu = tempsPerduMois * tjm;

  // CALCULS AVEC AUTOMATISATION
  const toutesVisitesRelancees = nbVisites;
  const ventesAvecAuto = toutesVisitesRelancees * tauxConversionAvecAuto;
  const ventesActuelles = nbVisites * tauxRelanceManuels * tauxConversionAvecRelance + visitesNonRelancees * tauxConversionSansRelance;
  const ventesSupplementaires = ventesAvecAuto - ventesActuelles;
  const gainCommissions = ventesSupplementaires * avgCommission;
  const tempsGagneParAgent = 4 * 4.3;
  const valeurTempsGagne = tempsGagneParAgent * nbAgents * tjm;
  const gainTotal = gainCommissions + valeurTempsGagne;
  const coutSpydercom = 180 * nbAgents;
  const gainNet = gainTotal - coutSpydercom;
  const roi = (gainNet / coutSpydercom * 100).toFixed(0);
  return <>
      {/* SECTION 1 : Vos pertes actuelles */}
      <div className="mb-12 bg-gradient-to-r from-red-950/50 to-red-900/30 
                      rounded-2xl p-10 border-2 border-red-500
                      shadow-[0_0_40px_rgba(239,68,68,0.3)]">
        <div className="flex items-center gap-4 mb-8">
          <div className="text-6xl">💔</div>
          <h3 className="text-3xl font-black text-red-400">
            VOS PERTES ACTUELLES (mode manuel)
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-black/30 rounded-xl p-6 text-center">
            <div className="text-red-400 text-sm mb-2">VISITES NON RELANCÉES</div>
            <div className="text-5xl font-black text-white mb-2 font-orbitron">
              {visitesNonRelancees}
            </div>
            <div className="text-xs text-gray-500">
              sur {nbVisites} visites ({(visitesNonRelancees / nbVisites * 100).toFixed(0)}%)
            </div>
          </div>

          <div className="bg-black/30 rounded-xl p-6 text-center">
            <div className="text-red-400 text-sm mb-2">VENTES PERDUES</div>
            <div className="text-5xl font-black text-white mb-2 font-orbitron">
              {Math.floor(ventesPerduesTotales)}
            </div>
            <div className="text-xs text-gray-500">
              par mois (différence de conversion)
            </div>
          </div>

          <div className="bg-black/30 rounded-xl p-6 text-center">
            <div className="text-red-400 text-sm mb-2">TEMPS PERDU</div>
            <div className="text-5xl font-black text-white mb-2 font-orbitron">
              {Math.floor(tempsPerduMois)}h
            </div>
            <div className="text-xs text-gray-500">
              en relances manuelles inefficaces
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-black/50 to-red-950/50 rounded-xl p-8 text-center">
          <div className="text-red-400 text-lg mb-3 font-bold">
            💸 MANQUE À GAGNER MENSUEL
          </div>
          <div className="text-7xl font-black text-red-500 mb-4 font-orbitron tabular-nums">
            -{Math.floor((manqueAGagner + coutTempsPerdu) / 1000)}k€
          </div>
          <div className="text-sm text-gray-400 space-y-1">
            <div>= {Math.floor(ventesPerduesTotales)} ventes perdues × {avgCommission.toLocaleString()}€ 
              = -{Math.floor(manqueAGagner / 1000)}k€</div>
            <div>+ {Math.floor(tempsPerduMois)}h perdues × {tjm}€/h 
              = -{Math.floor(coutTempsPerdu / 1000)}k€</div>
          </div>
        </div>
      </div>

      {/* SECTION 2 : Avec automatisation Spydercom */}
      <div className="mb-12 bg-gradient-to-r from-green-950/50 via-cyan-950/50 to-blue-950/50 
                      rounded-2xl p-10 border-2 border-cyan-400
                      shadow-[0_0_40px_rgba(6,182,212,0.3)]">
        <div className="flex items-center gap-4 mb-8">
          <div className="text-6xl">🚀</div>
          <h3 className="text-3xl font-black text-cyan-400">
            AVEC SPYDERCOM (automatisation complète)
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-black/30 rounded-xl p-6 text-center border border-cyan-500/30">
            <div className="text-cyan-400 text-sm mb-2">VISITES RELANCÉES</div>
            <div className="text-5xl font-black text-white mb-2 font-orbitron">
              {toutesVisitesRelancees}
            </div>
            <div className="text-xs text-gray-500">
              100% couverture multicanal
            </div>
            <div className="mt-3 text-green-400 font-bold text-sm">
              +{visitesNonRelancees} vs actuel
            </div>
          </div>

          <div className="bg-black/30 rounded-xl p-6 text-center border border-green-500/30">
            <div className="text-green-400 text-sm mb-2">VENTES GAGNÉES</div>
            <div className="text-5xl font-black text-white mb-2 font-orbitron">
              +{Math.floor(ventesSupplementaires)}
            </div>
            <div className="text-xs text-gray-500">
              conversions supplémentaires/mois
            </div>
            <div className="mt-3 text-green-400 font-bold">
              = +{Math.floor(gainCommissions / 1000)}k€
            </div>
          </div>

          <div className="bg-black/30 rounded-xl p-6 text-center border border-purple-500/30">
            <div className="text-purple-400 text-sm mb-2">TEMPS LIBÉRÉ</div>
            <div className="text-5xl font-black text-white mb-2 font-orbitron">
              +{Math.floor(tempsGagneParAgent * nbAgents)}h
            </div>
            <div className="text-xs text-gray-500">
              pour se concentrer sur la vente
            </div>
            <div className="mt-3 text-purple-400 font-bold">
              = +{Math.floor(valeurTempsGagne / 1000)}k€
            </div>
          </div>
        </div>

        <div className="bg-black/30 rounded-xl p-6 mb-8">
          <h4 className="text-lg font-bold text-white mb-4 text-center">
            📊 Évolution du taux de conversion
          </h4>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-gray-500 text-xs mb-2">Sans relance</div>
              <div className="text-3xl font-bold text-red-400">8%</div>
              <div className="text-xs text-gray-600 mt-1">Mode actuel (67% des visites)</div>
            </div>
            <div className="text-center">
              <div className="text-gray-500 text-xs mb-2">Relance manuelle</div>
              <div className="text-3xl font-bold text-orange-400">14%</div>
              <div className="text-xs text-gray-600 mt-1">Mode actuel (33% des visites)</div>
            </div>
            <div className="text-center">
              <div className="text-cyan-400 text-xs mb-2 font-bold">Relance auto</div>
              <div className="text-4xl font-black text-green-400">19%</div>
              <div className="text-xs text-green-400 mt-1">Avec Spidercom (100%)</div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-yellow-600 to-orange-600 rounded-2xl p-8 
                        text-center shadow-[0_0_60px_rgba(251,191,36,0.5)]">
          <div className="text-white text-xl mb-3 font-bold">
            💰 GAIN NET MENSUEL
          </div>
          <div className="text-5xl font-black text-white mb-4 font-orbitron tabular-nums">
            +{Math.floor(gainNet / 1000)}k€
          </div>
          <div className="flex items-center justify-center gap-8 text-white/90 text-sm">
            <div>
              <div className="text-xs opacity-70">Coût Spydercom</div>
              
            </div>
            <div className="text-4xl">→</div>
            <div>
              <div className="text-xs opacity-70">ROI</div>
              <div className="text-2xl font-bold">×{roi}</div>
            </div>
            <div className="text-4xl">→</div>
            <div>
              <div className="text-xs opacity-70">Amorti en</div>
              <div className="text-2xl font-bold">&lt;5 jours</div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 3 : Projection annuelle */}
      <div className="bg-gradient-to-r from-purple-950/50 to-pink-950/50 
                      rounded-2xl p-10 border border-purple-500/30 mb-12">
        <h3 className="text-3xl font-bold text-center text-purple-400 mb-8">
          📅 Projection sur 12 mois
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-5xl mb-3">💰</div>
            <div className="text-gray-400 text-sm mb-2">GAIN ANNUEL NET</div>
            <div className="text-4xl font-black text-white">+100k€{Math.floor(gainNet * 12 / 1000)}k€
            </div>
          </div>

          <div className="text-center">
            <div className="text-5xl mb-3">🎯</div>
            <div className="text-gray-400 text-sm mb-2">VENTES SUPPLÉMENTAIRES</div>
            <div className="text-4xl font-black text-white">+5{Math.floor(ventesSupplementaires * 12)}
            </div>
          </div>

          <div className="text-center">
            <div className="text-5xl mb-3">⏱️</div>
            <div className="text-gray-400 text-sm mb-2">HEURES LIBÉRÉES</div>
            <div className="text-4xl font-black text-white">
              {Math.floor(tempsGagneParAgent * nbAgents * 12)}h
            </div>
          </div>

          <div className="text-center">
            <div className="text-5xl mb-3">📈</div>
            <div className="text-gray-400 text-sm mb-2">AUGMENTATION CA</div>
            <div className="text-4xl font-black text-white">+10%{(ventesSupplementaires * 12 / (ventesActuelles * 12) * 100).toFixed(0)}%
            </div>
          </div>
        </div>
      </div>

      {/* CTA Final */}
      <div className="text-center">
        <button className="group relative px-16 py-8 
                           bg-gradient-to-r from-orange-500 via-red-500 to-pink-500
                           text-white font-black text-3xl rounded-2xl
                           shadow-[0_0_60px_rgba(251,146,60,0.6)]
                           hover:shadow-[0_0_80px_rgba(251,146,60,0.8)]
                           hover:scale-110 transition-all duration-300
                           border-4 border-orange-300 overflow-hidden">
          <span className="relative z-10 flex items-center gap-4">💸 JE RÉCUPÈRE MES 10K€ PAR MOIS<span className="text-5xl">💸</span>
            JE RÉCUPÈRE MES {Math.floor(gainNet / 1000)}K€ PAR MOIS
          </span>
          
          {[...Array(20)].map((_, i) => <div key={i} className="absolute w-2 h-2 bg-white rounded-full animate-ping" style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 2}s`,
          animationDuration: `${1 + Math.random()}s`
        }} />)}
        </button>
        
        <p className="text-gray-400 mt-6 text-xl">
          ⚡ Setup en 48h • 🔒 Satisfait ou remboursé • 📈 Résultats dès J+1
        </p>

        <div className="mt-8 flex items-center justify-center gap-8 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <span className="text-green-500 text-xl">✓</span>
            <span>247 agences équipées</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-500 text-xl">✓</span>
            <span>4.9/5 (189 avis)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-500 text-xl">✓</span>
            <span>Support 7j/7</span>
          </div>
        </div>
      </div>
    </>;
};
export default RelanceROIResults;