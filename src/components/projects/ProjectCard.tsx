import { motion } from "framer-motion";
import { Project } from "@/data/mockProjects";
import { ArrowRight } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const isComingSoon = project.isComingSoon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className={`group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden border-2 ${
        isComingSoon ? 'border-gray-700 opacity-60' : 'border-gray-700 hover:border-spider-cyan'
      } transition-all duration-300 shadow-lg ${
        !isComingSoon && 'hover:scale-105 hover:shadow-[0_0_40px_rgba(180,235,245,0.3)] cursor-pointer'
      }`}
    >
      {/* Image */}
      <div className="relative aspect-video overflow-hidden bg-gray-800">
        {project.image && (
          <div className="w-full h-full bg-gradient-to-br from-spider-red/20 to-spider-cyan/20 flex items-center justify-center">
            <span className="text-6xl">🚀</span>
          </div>
        )}
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex gap-2">
          {project.isNew && !isComingSoon && (
            <span className="px-3 py-1 bg-spider-red text-white text-xs font-bold rounded-full uppercase">
              Nouveau
            </span>
          )}
          {isComingSoon && (
            <span className="px-3 py-1 bg-gray-600 text-white text-xs font-bold rounded-full uppercase">
              🚧 À venir
            </span>
          )}
        </div>

        {/* Overlay on hover */}
        {!isComingSoon && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-spider-red/20 text-spider-red text-xs font-semibold rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-white mb-3 line-clamp-2">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
          {project.shortDescription}
        </p>

        {/* Info grid */}
        {!isComingSoon && (
          <div className="grid grid-cols-2 gap-4 mb-4 text-xs text-gray-400">
            <div>
              <div className="flex items-center gap-1 mb-1">
                <span className="text-spider-cyan">📅</span>
                <span>Date</span>
              </div>
              <div className="font-semibold">
                {new Date(project.date).toLocaleDateString('fr-FR', { month: 'short', year: 'numeric' })}
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1 mb-1">
                <span className="text-spider-cyan">⏱️</span>
                <span>Durée</span>
              </div>
              <div className="font-semibold">{project.duration}</div>
            </div>
            <div>
              <div className="flex items-center gap-1 mb-1">
                <span className="text-spider-cyan">🎯</span>
                <span>ROI</span>
              </div>
              <div className="font-semibold text-green-400">{project.roi}</div>
            </div>
            <div>
              <div className="flex items-center gap-1 mb-1">
                <span className="text-spider-cyan">🏢</span>
                <span>Secteur</span>
              </div>
              <div className="font-semibold">{project.sector}</div>
            </div>
          </div>
        )}

        {/* CTA Button */}
        {!isComingSoon ? (
          <a
            href={project.demoUrl || '#'}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-spider-red to-spider-red/80 text-white font-bold rounded-lg hover:from-spider-red/80 hover:to-spider-red transition-all group"
          >
            Voir le projet complet
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        ) : (
          <div className="w-full text-center px-4 py-3 bg-gray-800 text-gray-400 font-semibold rounded-lg">
            Disponible prochainement
          </div>
        )}

        {/* Popular badge */}
        {project.isPopular && !isComingSoon && (
          <div className="absolute bottom-6 right-6">
            <span className="px-2 py-1 bg-orange-500/20 text-orange-400 text-xs font-bold rounded">
              🔥 Populaire
            </span>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
