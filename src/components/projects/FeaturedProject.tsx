import { motion } from "framer-motion";
import { Project } from "@/data/mockProjects";
import { ArrowRight, ExternalLink } from "lucide-react";
import WorkflowDiagram from "@/components/leads/WorkflowDiagram";
import agiaLogo from "@/assets/agia-logo.png";
import agenceImmoImage from "@/assets/agence-immo-automation.png";

interface FeaturedProjectProps {
  project: Project;
}

const FeaturedProject = ({ project }: FeaturedProjectProps) => {
  return (
    <section className="py-12 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h2 className="text-4xl font-black text-white mb-2 flex items-center gap-3">
            <span>⭐</span> Projet Phare
          </h2>
          <p className="text-gray-400">Notre réalisation la plus aboutie</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-2 border-gray-700 flex items-center justify-center p-4">
              {project.slug === 'take-5-automatisation-google-business' && project.image ? (
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover rounded-xl"
                />
              ) : project.slug === 'agia' ? (
                <div className="w-full h-full bg-gradient-to-br from-blue-900 to-slate-900 rounded-xl flex items-center justify-center p-8">
                  <img 
                    src={agiaLogo} 
                    alt="AGIA Logo"
                    className="w-auto h-full max-h-64 object-contain"
                  />
                </div>
              ) : project.slug === 'automatisation-agences-immobilieres' ? (
                <img 
                  src={agenceImmoImage} 
                  alt={project.title}
                  className="w-full h-full object-cover rounded-xl"
                />
              ) : (
                <WorkflowDiagram />
              )}
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col justify-center"
          >
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 bg-spider-red/20 text-spider-red text-sm font-bold rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <h3 className="text-5xl font-black text-white mb-4 font-['Orbitron']">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              {project.shortDescription}
            </p>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">⏱️</span>
                  <span className="text-gray-400 text-sm">Temps économisé</span>
                </div>
                <div className="text-2xl font-black text-spider-cyan font-['Orbitron']">
                  {project.metrics.timeSaved}
                </div>
              </div>

              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">📈</span>
                  <span className="text-gray-400 text-sm">Conversion</span>
                </div>
                <div className="text-2xl font-black text-green-400 font-['Orbitron']">
                  {project.metrics.conversion}
                </div>
              </div>

              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">💰</span>
                  <span className="text-gray-400 text-sm">Économies</span>
                </div>
                <div className="text-2xl font-black text-yellow-400 font-['Orbitron']">
                  {project.metrics.savings}
                </div>
              </div>

              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">😊</span>
                  <span className="text-gray-400 text-sm">Satisfaction</span>
                </div>
                <div className="text-2xl font-black text-spider-red font-['Orbitron']">
                  {project.metrics.satisfaction}
                </div>
              </div>
            </div>

            {/* Technologies */}
            <div className="mb-6">
              <h4 className="text-sm font-bold text-gray-400 mb-3 uppercase tracking-wider">
                Technologies utilisées
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 bg-spider-cyan/10 border border-spider-cyan/30 text-spider-cyan text-xs font-semibold rounded-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={project.demoUrl || '#'}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-accent text-white font-bold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all"
              >
                Voir le projet complet
                <ArrowRight className="w-5 h-5" />
              </a>
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-spider-cyan text-spider-cyan font-bold rounded-lg hover:bg-spider-cyan hover:text-black transition-all"
                >
                  Voir la démo live
                  <ExternalLink className="w-5 h-5" />
                </a>
              )}
            </div>

            {/* Testimonial */}
            {project.clientTestimonial && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-8 p-6 bg-gradient-to-br from-gray-900 to-gray-800 border-l-4 border-spider-cyan rounded-xl"
              >
                <p className="text-gray-300 italic mb-4">
                  "{project.clientTestimonial.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-spider-cyan/20 flex items-center justify-center text-2xl">
                    👤
                  </div>
                  <div>
                    <div className="text-white font-bold">
                      {project.clientTestimonial.author}
                    </div>
                    <div className="text-gray-400 text-sm">
                      {project.clientTestimonial.role} - {project.clientTestimonial.company}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
