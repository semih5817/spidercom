import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, ChevronUp, Eye, FileText, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { edlMockData } from "@/data/mockDataEDL";

const EDLComparisonTable = () => {
  const [expandedRow, setExpandedRow] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'full_return':
        return <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30">✅ Restitution totale</Badge>;
      case 'partial_retention':
        return <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30">⚠️ Retenue partielle</Badge>;
      case 'major_retention':
        return <Badge className="bg-spider-red/20 text-spider-red border-spider-red/30">🔴 Retenue importante</Badge>;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      {/* Stats rapides */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-spider-cyan/30 p-4">
          <div className="font-orbitron text-3xl text-spider-cyan font-black">{edlMockData.stats.monthlyComparisons}</div>
          <div className="text-sm text-white/60">comparaisons ce mois</div>
        </Card>
        <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-emerald-500/30 p-4">
          <div className="font-orbitron text-3xl text-emerald-400 font-black">{edlMockData.stats.fullReturnRate}%</div>
          <div className="text-sm text-white/60">restitutions totales</div>
        </Card>
        <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-orange-500/30 p-4">
          <div className="font-orbitron text-3xl text-orange-400 font-black">{edlMockData.stats.avgRetention}€</div>
          <div className="text-sm text-white/60">montant moyen retenu</div>
        </Card>
        <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-purple-500/30 p-4">
          <div className="font-orbitron text-3xl text-purple-400 font-black">{edlMockData.stats.avgTime} min</div>
          <div className="text-sm text-white/60">temps moyen</div>
        </Card>
      </div>

      {/* Filtres */}
      <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-white/10 p-4">
        <div className="flex flex-wrap gap-4">
          <Input 
            placeholder="🔍 Rechercher un locataire..." 
            className="max-w-xs bg-white/5 border-white/10 text-white"
          />
          <Button variant="outline" className="border-spider-cyan/30 text-spider-cyan">
            📥 Exporter CSV
          </Button>
        </div>
      </Card>

      {/* Tableau */}
      <Card className="bg-gradient-to-br from-gray-900 to-black border-white/10 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-white/5 border-b border-white/10">
              <tr>
                <th className="text-left p-4 text-white/60 font-inter text-sm">Date</th>
                <th className="text-left p-4 text-white/60 font-inter text-sm">Bien</th>
                <th className="text-left p-4 text-white/60 font-inter text-sm">Locataire</th>
                <th className="text-left p-4 text-white/60 font-inter text-sm">Type</th>
                <th className="text-left p-4 text-white/60 font-inter text-sm">Différences</th>
                <th className="text-right p-4 text-white/60 font-inter text-sm">Montant</th>
                <th className="text-left p-4 text-white/60 font-inter text-sm">Statut</th>
                <th className="text-right p-4 text-white/60 font-inter text-sm">Actions</th>
              </tr>
            </thead>
            <tbody>
              {edlMockData.comparisons.map((comparison) => (
                <>
                  <motion.tr
                    key={comparison.id}
                    className="border-b border-white/5 hover:bg-white/5 transition-colors cursor-pointer"
                    onClick={() => setExpandedRow(expandedRow === comparison.id ? null : comparison.id)}
                  >
                    <td className="p-4 text-white/80">{comparison.date}</td>
                    <td className="p-4 text-white/80 text-sm">{comparison.property}</td>
                    <td className="p-4 text-white">{comparison.tenant}</td>
                    <td className="p-4 text-white/60">{comparison.type}</td>
                    <td className="p-4">
                      <div className="text-white">
                        {comparison.differences > 0 ? (
                          <span>
                            {comparison.differences} <span className="text-xs text-white/60">
                              ({comparison.differencesDetail.major} majeures, {comparison.differencesDetail.minor} mineures)
                            </span>
                          </span>
                        ) : (
                          <span className="text-emerald-400">Aucune</span>
                        )}
                      </div>
                    </td>
                    <td className="p-4 text-right">
                      <span className={`font-orbitron font-bold ${comparison.amount > 0 ? 'text-spider-red' : 'text-emerald-400'}`}>
                        {comparison.amount > 0 ? `${comparison.amount}€` : '0€'}
                      </span>
                    </td>
                    <td className="p-4">{getStatusBadge(comparison.status)}</td>
                    <td className="p-4">
                      <div className="flex items-center justify-end gap-2">
                        <Button size="sm" variant="ghost" className="text-spider-cyan">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="ghost" className="text-white/60">
                          <FileText className="w-4 h-4" />
                        </Button>
                        {expandedRow === comparison.id ? (
                          <ChevronUp className="w-4 h-4 text-white/60" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-white/60" />
                        )}
                      </div>
                    </td>
                  </motion.tr>

                  {/* Expanded row */}
                  <AnimatePresence>
                    {expandedRow === comparison.id && comparison.items.length > 0 && (
                      <motion.tr
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                      >
                        <td colSpan={8} className="bg-white/5 p-6">
                          <div className="space-y-4">
                            <h4 className="font-orbitron text-white text-lg mb-4">Détail des différences</h4>
                            <div className="grid gap-3">
                              {comparison.items.map((item, idx) => (
                                <div
                                  key={idx}
                                  className="flex items-center justify-between p-3 bg-black/30 rounded-lg border border-white/10"
                                >
                                  <div className="flex-1">
                                    <div className="text-white font-semibold">{item.room} - {item.element}</div>
                                    <div className="text-sm text-white/60 mt-1">
                                      Entrée: {item.entry} → Sortie: {item.exit}
                                    </div>
                                  </div>
                                  <div className="flex items-center gap-4">
                                    <Badge className={
                                      item.category === 'major' ? 'bg-spider-red/20 text-spider-red border-spider-red/30' :
                                      item.category === 'minor' ? 'bg-orange-500/20 text-orange-400 border-orange-500/30' :
                                      'bg-emerald-500/20 text-emerald-400 border-emerald-500/30'
                                    }>
                                      {item.category === 'major' ? '🔴 Majeure' : 
                                       item.category === 'minor' ? '⚠️ Mineure' : '✅ Normal'}
                                    </Badge>
                                    <div className="font-orbitron text-white font-bold min-w-[80px] text-right">
                                      {item.amount > 0 ? `${item.amount}€` : '-'}
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </td>
                      </motion.tr>
                    )}
                  </AnimatePresence>
                </>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="p-4 border-t border-white/10 flex items-center justify-between">
          <div className="text-sm text-white/60">
            Affichage 1-10 sur 156 comparaisons
          </div>
          <div className="flex items-center gap-2">
            <Button size="sm" variant="outline" className="border-white/10 text-white">
              Précédent
            </Button>
            <Button size="sm" variant="outline" className="border-spider-cyan/30 text-spider-cyan bg-spider-cyan/10">
              1
            </Button>
            <Button size="sm" variant="outline" className="border-white/10 text-white/60">
              2
            </Button>
            <Button size="sm" variant="outline" className="border-white/10 text-white/60">
              3
            </Button>
            <span className="text-white/60">...</span>
            <Button size="sm" variant="outline" className="border-white/10 text-white/60">
              16
            </Button>
            <Button size="sm" variant="outline" className="border-white/10 text-white">
              Suivant
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default EDLComparisonTable;
