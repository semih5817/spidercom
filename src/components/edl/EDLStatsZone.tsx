import { TrendingUp, Clock, AlertTriangle, CheckCircle, XCircle, AlertCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { calculateGlobalStats } from "./edlMockData";

export const EDLStatsZone = () => {
  const stats = calculateGlobalStats();

  return (
    <div className="space-y-6">
      {/* Titre de la section */}
      <div className="text-center">
        <h2 className="font-orbitron text-3xl md:text-4xl font-black text-white mb-2">
          📊 Vue d'Ensemble
        </h2>
        <p className="text-white/60">Statistiques globales de tous les dossiers traités</p>
      </div>

      {/* Grille de statistiques principales */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* Argent économisé */}
        <Card className="bg-gradient-to-br from-emerald-500/20 to-gray-900 border-emerald-500/50 hover:scale-105 transition-transform">
          <CardContent className="pt-6 text-center">
            <div className="text-4xl mb-2">💰</div>
            <div className="font-orbitron text-3xl md:text-4xl text-emerald-400 font-black mb-2">
              {stats.argentEconomise}€
            </div>
            <div className="text-sm text-white/70">économisés au total</div>
            <div className="text-xs text-emerald-400/70 mt-1">
              {stats.totalDossiers} dossiers × 26,25€
            </div>
          </CardContent>
        </Card>

        {/* Temps gagné */}
        <Card className="bg-gradient-to-br from-cyan-500/20 to-gray-900 border-cyan-500/50 hover:scale-105 transition-transform">
          <CardContent className="pt-6 text-center">
            <div className="text-4xl mb-2">⏱️</div>
            <div className="font-orbitron text-3xl md:text-4xl text-cyan-400 font-black mb-2">
              {stats.tempsGagneHeures}h{Math.round((stats.tempsGagneMinutes % 60))}
            </div>
            <div className="text-sm text-white/70">temps gagné</div>
            <div className="text-xs text-cyan-400/70 mt-1">
              45 min → 45 sec par dossier
            </div>
          </CardContent>
        </Card>

        {/* Litiges évités */}
        <Card className="bg-gradient-to-br from-orange-500/20 to-gray-900 border-orange-500/50 hover:scale-105 transition-transform">
          <CardContent className="pt-6 text-center">
            <div className="text-4xl mb-2">⚖️</div>
            <div className="font-orbitron text-3xl md:text-4xl text-orange-400 font-black mb-2">
              {stats.litigesEvites}
            </div>
            <div className="text-sm text-white/70">litiges évités</div>
            <div className="text-xs text-orange-400/70 mt-1">
              Désaccords détectés automatiquement
            </div>
          </CardContent>
        </Card>

        {/* Score global */}
        <Card className="bg-gradient-to-br from-purple-500/20 to-gray-900 border-purple-500/50 hover:scale-105 transition-transform">
          <CardContent className="pt-6 text-center">
            <div className="text-4xl mb-2">🎯</div>
            <div className="font-orbitron text-3xl md:text-4xl text-purple-400 font-black mb-2">
              {stats.scoreGlobalMoyen}%
            </div>
            <div className="text-sm text-white/70">conformité moyenne</div>
            <div className="text-xs text-purple-400/70 mt-1">
              Score moyen tous dossiers
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Statistiques détaillées par catégorie */}
      <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-cyan-500/30">
        <CardContent className="pt-6">
          <h3 className="font-orbitron text-xl font-bold text-white mb-6 flex items-center gap-2">
            <span>📋</span>
            Répartition des Anomalies
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Conforme */}
            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4 hover:border-emerald-500/60 transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <CheckCircle className="w-6 h-6 text-emerald-400" />
                <span className="font-orbitron text-emerald-400 font-bold text-lg">Conforme</span>
              </div>
              <div className="font-orbitron text-4xl text-emerald-400 font-black mb-1">
                {stats.totalConforme}
              </div>
              <div className="text-sm text-white/60">
                Aucune dégradation détectée
              </div>
              <div className="mt-2 h-2 bg-gray-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400"
                  style={{ 
                    width: `${(stats.totalConforme / (stats.totalConforme + stats.totalAVerifier + stats.totalNonConforme)) * 100}%` 
                  }}
                />
              </div>
            </div>

            {/* À vérifier */}
            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 hover:border-yellow-500/60 transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <AlertCircle className="w-6 h-6 text-yellow-400" />
                <span className="font-orbitron text-yellow-400 font-bold text-lg">À Vérifier</span>
              </div>
              <div className="font-orbitron text-4xl text-yellow-400 font-black mb-1">
                {stats.totalAVerifier}
              </div>
              <div className="text-sm text-white/60">
                Inspection manuelle recommandée
              </div>
              <div className="mt-2 h-2 bg-gray-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-yellow-500 to-yellow-400"
                  style={{ 
                    width: `${(stats.totalAVerifier / (stats.totalConforme + stats.totalAVerifier + stats.totalNonConforme)) * 100}%` 
                  }}
                />
              </div>
            </div>

            {/* Non conforme */}
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 hover:border-red-500/60 transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <XCircle className="w-6 h-6 text-red-400" />
                <span className="font-orbitron text-red-400 font-bold text-lg">Non Conforme</span>
              </div>
              <div className="font-orbitron text-4xl text-red-400 font-black mb-1">
                {stats.totalNonConforme}
              </div>
              <div className="text-sm text-white/60">
                Dégradations importantes détectées
              </div>
              <div className="mt-2 h-2 bg-gray-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-red-500 to-red-400"
                  style={{ 
                    width: `${(stats.totalNonConforme / (stats.totalConforme + stats.totalAVerifier + stats.totalNonConforme)) * 100}%` 
                  }}
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
