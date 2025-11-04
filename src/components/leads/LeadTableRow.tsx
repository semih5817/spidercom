import { useState } from 'react';
import { motion } from 'framer-motion';

interface Lead {
  id: string;
  source: string;
  nom: string;
  email: string;
  telephone: string;
  budget: string;
  type: string;
  statut: string;
  iaChecks: {
    duplicate: boolean;
    validation: boolean;
    enrichment: boolean;
  };
  integreIl: string;
  tags: string[];
  notes?: string;
}

interface LeadTableRowProps {
  lead: Lead;
  index: number;
}

export function LeadTableRow({ lead, index }: LeadTableRowProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const sourceColors: Record<string, string> = {
    'SeLoger': 'bg-orange-500/20 text-orange-400 border-orange-500/30',
    'Leboncoin': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    'Site Web': 'bg-purple-500/20 text-purple-400 border-purple-500/30',
    'Facebook': 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
    'Email': 'bg-green-500/20 text-green-400 border-green-500/30'
  };

  const statusColors: Record<string, string> = {
    'Nouveau': 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
    'En qualification': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    'En RDV': 'bg-orange-500/20 text-orange-400 border-orange-500/30',
    'Converti': 'bg-green-500/20 text-green-400 border-green-500/30'
  };

  return (
    <>
      <motion.tr
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.05 }}
        className="border-b border-gray-800 hover:bg-gray-800/50 transition-all cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {/* Source */}
        <td className="p-4">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${sourceColors[lead.source]}`}>
            {lead.source}
          </span>
        </td>

        {/* Nom */}
        <td className="p-4">
          <div className="text-white font-semibold">{lead.nom}</div>
        </td>

        {/* Email */}
        <td className="p-4">
          <div className="text-gray-300 text-sm font-mono">{lead.email}</div>
        </td>

        {/* Téléphone */}
        <td className="p-4">
          <div className="text-gray-300 text-sm font-mono">{lead.telephone}</div>
        </td>

        {/* Budget */}
        <td className="p-4">
          <div className="text-white font-semibold">{lead.budget}</div>
        </td>

        {/* Type */}
        <td className="p-4">
          <div className="text-gray-300">{lead.type}</div>
        </td>

        {/* Statut */}
        <td className="p-4 text-center">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${statusColors[lead.statut]}`}>
            {lead.statut}
          </span>
        </td>

        {/* IA Check */}
        <td className="p-4">
          <div className="flex items-center justify-center gap-1">
            <div className={`w-2 h-2 rounded-full ${lead.iaChecks.duplicate ? 'bg-green-500' : 'bg-red-500'}`} 
                 title="Dédoublonnage" />
            <div className={`w-2 h-2 rounded-full ${lead.iaChecks.validation ? 'bg-green-500' : 'bg-red-500'}`} 
                 title="Validation" />
            <div className={`w-2 h-2 rounded-full ${lead.iaChecks.enrichment ? 'bg-green-500' : 'bg-red-500'}`} 
                 title="Enrichissement" />
          </div>
        </td>

        {/* Intégré il y a */}
        <td className="p-4 text-right">
          <div className="text-sm text-gray-400">{lead.integreIl}</div>
        </td>
      </motion.tr>

      {/* Ligne étendue avec détails */}
      {isExpanded && (
        <motion.tr
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-gray-900/50 border-b border-gray-800"
        >
          <td colSpan={9} className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Tags */}
              <div>
                <div className="text-cyan-400 text-sm font-bold mb-3">TAGS AUTOMATIQUES</div>
                <div className="flex flex-wrap gap-2">
                  {lead.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-purple-500/20 text-purple-400 
                                             rounded-full text-xs font-semibold border border-purple-500/30">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Checks IA détaillés */}
              <div>
                <div className="text-cyan-400 text-sm font-bold mb-3">VÉRIFICATIONS IA</div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className={lead.iaChecks.duplicate ? 'text-green-400' : 'text-red-400'}>
                      {lead.iaChecks.duplicate ? '✓' : '✗'}
                    </span>
                    <span className="text-sm text-gray-300">Dédoublonnage effectué</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={lead.iaChecks.validation ? 'text-green-400' : 'text-red-400'}>
                      {lead.iaChecks.validation ? '✓' : '✗'}
                    </span>
                    <span className="text-sm text-gray-300">Email & téléphone validés</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={lead.iaChecks.enrichment ? 'text-green-400' : 'text-red-400'}>
                      {lead.iaChecks.enrichment ? '✓' : '✗'}
                    </span>
                    <span className="text-sm text-gray-300">Données enrichies (LinkedIn)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Notes si présentes */}
            {lead.notes && (
              <div className="mt-4 p-4 bg-black/30 rounded-lg border border-cyan-500/20">
                <div className="text-cyan-400 text-xs font-bold mb-2">NOTES</div>
                <div className="text-sm text-gray-300">{lead.notes}</div>
              </div>
            )}
          </td>
        </motion.tr>
      )}
    </>
  );
}
