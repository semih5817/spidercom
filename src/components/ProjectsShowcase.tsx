import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "@/data/mockProjects";
import WorkflowDiagram from "@/components/leads/WorkflowDiagram";
import agiaLogo from "@/assets/agia-logo.png";
import agenceImmoImage from "@/assets/agence-immo-automation.png";

const ProjectsShowcase = () => {
  // Filter out coming soon projects and featured ones for the homepage
  const showcaseProjects = projects.filter(p => !p.isComingSoon).slice(0, 3);

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-black via-gray-900/50 to-black">
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-spider-red/20 rounded-full text-spider-red text-sm font-bold uppercase mb-4">
            🚀 NOS RÉALISATIONS
          </span>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 font-['Orbitron']">
            Projets Réalisés
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Découvrez comment nous transformons les défis de nos clients en solutions concrètes et performantes
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {showcaseProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={project.slug === 'take-5-automatisation-google-business' ? '/projets/take-5' : '/projets-realises'}
                className="group block bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden border-2 border-gray-700 hover:border-spider-cyan transition-all duration-300 shadow-lg hover:scale-105 hover:shadow-[0_0_40px_rgba(180,235,245,0.3)]"
              >
                {/* Image */}
                <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-gray-900/50 to-gray-800/50 flex items-center justify-center">
                  {project.slug === 'take-5-automatisation-google-business' && project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  ) : project.slug === 'agia' ? (
                    <div className="w-full h-full bg-gradient-to-br from-blue-900 to-slate-900 flex items-center justify-center p-8">
                      <img 
                        src={agiaLogo} 
                        alt="AGIA Logo"
                        className="w-auto h-full max-h-48 object-contain"
                      />
                    </div>
                  ) : project.slug === 'automatisation-agences-immobilieres' ? (
                    <img 
                      src={agenceImmoImage} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="p-2 scale-75">
                      <WorkflowDiagram />
                    </div>
                  )}
                  
                  {/* Badges */}
                  {project.isNew && (
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-spider-red text-white text-xs font-bold rounded-full uppercase">
                        Nouveau
                      </span>
                    </div>
                  )}
                  
                  {project.isPopular && (
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-orange-500/90 text-white text-xs font-bold rounded-full">
                        🔥 Populaire
                      </span>
                    </div>
                  )}

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
                  <h3 className="text-2xl font-bold text-white mb-3 line-clamp-2 group-hover:text-spider-cyan transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                    {project.shortDescription}
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="bg-gray-900/50 rounded-lg p-3">
                      <div className="flex items-center gap-1 mb-1">
                        <span className="text-spider-cyan">⏱️</span>
                        <span className="text-xs text-gray-400">Temps</span>
                      </div>
                      <div className="text-sm font-bold text-white">{project.metrics.timeSaved}</div>
                    </div>
                    <div className="bg-gray-900/50 rounded-lg p-3">
                      <div className="flex items-center gap-1 mb-1">
                        <span className="text-spider-cyan">💰</span>
                        <span className="text-xs text-gray-400">Gains</span>
                      </div>
                      <div className="text-sm font-bold text-white">{project.metrics.savings}</div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex items-center justify-between text-spider-cyan font-semibold text-sm group-hover:text-spider-red transition-colors">
                    <span>Voir le projet</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <Link
            to="/projets-realises"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-spider-red to-spider-red/80 text-white text-lg font-bold rounded-lg hover:shadow-lg hover:shadow-spider-red/50 transition-all group"
          >
            Voir tous nos projets
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;
