import founderImage from "@/assets/founder-semih.png";


const TeamMember = ({
  image,
  name,
  role,
  alt,
  children,
}: {
  image: string;
  name: string;
  role: string;
  alt: string;
  children: React.ReactNode;
}) => (
  <div className="flex flex-col items-center text-center">
    <div className="relative group mb-6">
      <div className="absolute inset-0 bg-primary/20 rounded-xl blur-xl group-hover:bg-primary/30 transition-all duration-400" />
      <img
        src={image}
        alt={alt}
        className="relative rounded-xl border-2 border-primary/40 w-64 h-80 object-cover object-top group-hover:border-primary transition-all duration-400"
      />
    </div>
    <h3 className="font-orbitron text-2xl font-bold text-white mb-1">{name}</h3>
    <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">{role}</p>
    <div className="text-white/70 font-inter leading-relaxed max-w-sm space-y-3 text-sm">
      {children}
    </div>
  </div>
);

const Founder = () => {
  return (
    <section id="fondateur" className="relative py-24 bg-deep-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-4xl md:text-5xl font-black text-white mb-4">
            L'équipe <span className="text-primary">MT03</span>
          </h2>
          <p className="text-white/60 font-inter text-lg max-w-2xl mx-auto">
            Vision stratégique & excellence technique, réunies pour transformer votre business.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          {/* Semih */}
          <TeamMember
            image={founderImage}
            name="Semih"
            role="Fondateur & Visionnaire"
            alt="Semih, fondateur de MT03"
          >
            <p>
              Créateur de MT03. Je détecte les meilleures opportunités d'automatisation et de micro-SaaS pour votre activité.
            </p>
            <p>
              <span className="text-white font-medium">Stratégie, audit, idéation,</span> suivi client et direction créative — je suis votre interlocuteur unique de A à Z.
            </p>
            <p className="text-primary/90 font-medium">
              "Rendre accessible aux TPE les outils des grandes entreprises."
            </p>
          </TeamMember>

          {/* À venir */}
          <div className="flex flex-col items-center text-center">
            <div className="relative group mb-6">
              <div className="absolute inset-0 bg-primary/20 rounded-xl blur-xl group-hover:bg-primary/30 transition-all duration-400" />
              <div className="relative rounded-xl border-2 border-dashed border-primary/30 w-64 h-80 flex items-center justify-center bg-white/5">
                <span className="text-white/20 text-6xl">?</span>
              </div>
            </div>
            <h3 className="font-orbitron text-2xl font-bold text-white/40 mb-1">À venir</h3>
            <p className="text-primary/50 font-semibold text-sm uppercase tracking-wider mb-4">Prochain talent</p>
            <p className="text-white/40 font-inter leading-relaxed max-w-sm text-sm">
              Un nouveau membre rejoindra bientôt l'équipe MT03…
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
