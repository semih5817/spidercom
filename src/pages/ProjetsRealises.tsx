import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/projects/ProjectCard";
import FeaturedProject from "@/components/projects/FeaturedProject";
import ProjectFilters from "@/components/projects/ProjectFilters";
import EmptyState from "@/components/projects/EmptyState";
import { projects, sectors, technologies } from "@/data/mockProjects";
import { useCalendly } from "@/hooks/useCalendly";
import { Helmet } from "react-helmet";

const ProjetsRealises = () => {
  const { openCalendly } = useCalendly();
  const [selectedSector, setSelectedSector] = useState(sectors[0]);
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('recent');

  // Featured project
  const featuredProject = projects.find(p => p.isFeatured);

  // Filter and sort projects
  const filteredProjects = useMemo(() => {
    let filtered = projects.filter(p => !p.isFeatured);

    // Filter by sector
    if (selectedSector !== sectors[0]) {
      filtered = filtered.filter(p => p.sector === selectedSector.replace(/^..\s/, ''));
    }

    // Filter by technologies
    if (selectedTechnologies.length > 0) {
      filtered = filtered.filter(p =>
        selectedTechnologies.some(tech =>
          p.technologies.includes(tech.replace(/^..\s/, ''))
        )
      );
    }

    // Sort
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'recent':
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        case 'oldest':
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        case 'popular':
          return (b.isPopular ? 1 : 0) - (a.isPopular ? 1 : 0);
        default:
          return 0;
      }
    });

    return filtered;
  }, [selectedSector, selectedTechnologies, sortBy]);

  const handleTechnologyToggle = (tech: string) => {
    setSelectedTechnologies(prev =>
      prev.includes(tech)
        ? prev.filter(t => t !== tech)
        : [...prev, tech]
    );
  };

  const handleReset = () => {
    setSelectedSector(sectors[0]);
    setSelectedTechnologies([]);
    setSortBy('recent');
  };

  return (
    <>
      <Helmet>
        <title>Projets Réalisés - Portfolio Spidercom | Automatisation & Outils</title>
        <meta
          name="description"
          content="Découvrez les projets concrets réalisés par Spidercom : automatisations N8N, outils Lovable, dashboards IA pour agences immobilières, restaurants, e-commerce et plus."
        />
        <meta
          name="keywords"
          content="projets automatisation, portfolio spidercom, n8n projets, outils no-code, dashboard sur mesure"
        />
      </Helmet>

      <div className="min-h-screen bg-black text-white">
        <Header />

        {/* Hero Section */}
        <section className="relative py-20 px-4 bg-gradient-to-b from-black via-spider-red/10 to-black overflow-hidden">
          <div className="container mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-2 bg-spider-red/20 rounded-full text-spider-red text-sm font-bold uppercase">
                🚀 NOTRE PORTFOLIO
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-7xl font-black text-white mb-6 font-['Orbitron']"
            >
              Projets Réalisés par Spidercom
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12"
            >
              Chez Spidercom, chaque projet est une expérimentation concrète de nos solutions
              d'automatisation, de conception et de performance. Découvrez comment nous aidons nos
              clients à gagner du temps, à automatiser leurs processus et à valoriser leur activité.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
            >
              {[
                { icon: '🎯', number: '12+', text: 'Projets livrés' },
                { icon: '🏢', number: '5', text: "Secteurs d'activité" },
                { icon: '⚡', number: '87%', text: 'Temps économisé en moyenne' },
                { icon: '😊', number: '4.9/5', text: 'Satisfaction client' }
              ].map((stat, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-2 bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-spider-cyan transition-all"
                >
                  <span className="text-3xl">{stat.icon}</span>
                  <div className="text-3xl font-black text-white font-['Orbitron']">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-400 text-center">{stat.text}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Featured Project */}
        {featuredProject && <FeaturedProject project={featuredProject} />}

        {/* Projects Grid */}
        <section className="py-12 px-4">
          <div className="container mx-auto">
            {filteredProjects.length === 0 ? (
              <EmptyState onReset={handleReset} />
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-spider-red/50 to-orange-950/50">
          <div className="container mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-black text-white mb-6">
                🚀 Votre Projet, Notre Prochain Défi
              </h2>
              <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
                Vous avez un projet d'automatisation, de création d'outil ou de transformation
                digitale ? Parlons-en. Chaque projet commence par une discussion.
              </p>
              <button
                onClick={openCalendly}
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-spider-red to-spider-red/80 text-white text-lg font-bold rounded-lg hover:shadow-2xl hover:shadow-spider-red/50 transition-all animate-pulse hover:animate-none"
              >
                💬 Discutons de Votre Projet
              </button>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default ProjetsRealises;
