import { Users } from "lucide-react";
import founderImage from "@/assets/founder-semih.png";

const Founder = () => {
  return (
    <section id="fondateur" className="relative py-24 bg-deep-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-orbitron text-4xl md:text-5xl font-black text-white">
            Rencontrez <span className="text-spider-red glow-red">Semih</span>, votre partenaire digital
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Photo */}
            <div className="flex justify-center">
              <div className="relative group">
                <div className="absolute inset-0 bg-spider-red/20 rounded-lg blur-xl group-hover:bg-spider-red/30 transition-all duration-400" />
                <img
                  src={founderImage}
                  alt="Semih, fondateur de SPIDERCOM"
                  className="relative rounded-lg border-2 border-spider-red/50 w-full max-w-md object-cover group-hover:border-spider-red transition-all duration-400"
                />
              </div>
            </div>

            {/* Bio */}
            <div className="space-y-6 font-inter text-white/80 leading-relaxed">
              <p className="text-xl">
                👋 Moi c'est Semih, créateur de SPIDERCOM.
              </p>
              <p>
                Après plusieurs années à aider des entreprises à digitaliser leurs process, j'ai créé cette agence pour accompagner les entrepreneurs vosgiens vers le digital intelligent.
              </p>
              <p>
                <span className="font-bold text-white">Ma mission :</span> Rendre accessible à une TPE les outils qu'utilisent les grandes entreprises (IA, automatisations, CRM intelligents).
              </p>
              <p>
                Je travaille en direct avec vous pour l'audit et la stratégie. Pour la partie technique, je m'appuie sur une équipe d'experts développeurs et intégrateurs que je manage personnellement.
              </p>
              <p>
                <span className="font-bold text-white">Ce qui me motive :</span> Voir un artisan gagner 10h/semaine grâce à un chatbot IA, ou voir un restaurateur doubler ses réservations grâce à des automatisations simples.
              </p>
              <p className="text-spider-red font-bold text-lg">
                Mon engagement : Transparence totale, accompagnement sur le long terme, résultats mesurables.
              </p>

              {/* Équipe */}
              <div className="mt-8 p-6 bg-spider-red/5 border border-spider-red/20 rounded-lg">
                <h3 className="font-orbitron text-xl font-bold text-white mb-4">Notre équipe</h3>
                <ul className="space-y-3 text-white/80">
                  <li className="flex items-start gap-3">
                    <span className="text-spider-red">🎯</span>
                    <span><span className="font-bold text-white">Semih :</span> Stratégie, audit, gestion client, suivi</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-spider-red">💻</span>
                    <span><span className="font-bold text-white">Équipe technique :</span> Développement, intégration IA, automatisations N8N</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-spider-red">🤝</span>
                    <span><span className="font-bold text-white">Modèle hybride :</span> Proximité locale et expertise technique internationale</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
