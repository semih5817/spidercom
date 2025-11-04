import { motion } from "framer-motion";
import { X } from "lucide-react";

interface ProjectFiltersProps {
  selectedSector: string;
  selectedTechnologies: string[];
  sortBy: string;
  onSectorChange: (sector: string) => void;
  onTechnologyToggle: (tech: string) => void;
  onSortChange: (sort: string) => void;
  onReset: () => void;
  resultCount: number;
  sectors: string[];
  technologies: string[];
}

const ProjectFilters = ({
  selectedSector,
  selectedTechnologies,
  sortBy,
  onSectorChange,
  onTechnologyToggle,
  onSortChange,
  onReset,
  resultCount,
  sectors,
  technologies
}: ProjectFiltersProps) => {
  const hasActiveFilters = selectedSector !== sectors[0] || selectedTechnologies.length > 0 || sortBy !== 'recent';

  return (
    <motion.section
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="sticky top-20 z-40 bg-black/95 backdrop-blur-sm border-b border-gray-800 py-6"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-black text-white mb-6">🔍 Explorer nos projets</h2>

        {/* Filters Row */}
        <div className="flex flex-col lg:flex-row gap-6 mb-4">
          {/* Sector Filter */}
          <div className="flex-1">
            <label className="block text-sm font-bold text-gray-400 mb-2 uppercase tracking-wider">
              Par secteur
            </label>
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
              {sectors.map((sector) => (
                <button
                  key={sector}
                  onClick={() => onSectorChange(sector)}
                  className={`px-4 py-2 rounded-lg font-semibold text-sm whitespace-nowrap transition-all ${
                    selectedSector === sector
                      ? 'bg-spider-red text-white shadow-lg shadow-spider-red/50'
                      : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                  }`}
                >
                  {sector}
                </button>
              ))}
            </div>
          </div>

          {/* Sort */}
          <div className="w-full lg:w-64">
            <label className="block text-sm font-bold text-gray-400 mb-2 uppercase tracking-wider">
              Tri
            </label>
            <select
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value)}
              className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-spider-cyan focus:outline-none"
            >
              <option value="recent">🆕 Plus récents d'abord</option>
              <option value="oldest">📅 Plus anciens d'abord</option>
              <option value="popular">🔥 Plus populaires</option>
            </select>
          </div>
        </div>

        {/* Technology Filter */}
        <div className="mb-4">
          <label className="block text-sm font-bold text-gray-400 mb-2 uppercase tracking-wider">
            Par technologie
          </label>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <button
                key={tech}
                onClick={() => onTechnologyToggle(tech)}
                className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all ${
                  selectedTechnologies.includes(tech)
                    ? 'bg-spider-cyan text-black shadow-lg shadow-spider-cyan/50'
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                }`}
              >
                {tech}
              </button>
            ))}
          </div>
        </div>

        {/* Result Count & Reset */}
        <div className="flex items-center justify-between">
          <div className="text-gray-400">
            Affichage de <span className="text-white font-bold">{resultCount}</span> projet{resultCount !== 1 ? 's' : ''}
          </div>

          {hasActiveFilters && (
            <button
              onClick={onReset}
              className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition-all"
            >
              <X className="w-4 h-4" />
              Réinitialiser les filtres
            </button>
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default ProjectFilters;
