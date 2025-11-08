import { Users } from "lucide-react";
import founderImage from "@/assets/founder-semih.png";

const Founder = () => {
  return (
    <section id="fondateur" className="relative py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-inter text-4xl md:text-5xl font-black text-foreground">
            Rencontrez <span className="text-primary">Semih</span>, votre partenaire digital
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Photo */}
            <div className="flex justify-center">
              <div className="relative group">
                <div className="absolute inset-0 bg-primary/20 rounded-lg blur-xl group-hover:bg-primary/30 transition-all duration-400" />
                <img
                  src={founderImage}
                  alt="Semih, fondateur de SPIDERCOM"
                  className="relative rounded-lg border-2 border-primary/50 w-full max-w-md object-cover group-hover:border-primary transition-all duration-400"
                />
              </div>
            </div>

            {/* Bio */}
            <div className="space-y-6 font-inter text-muted-foreground leading-relaxed">
              <p className="text-xl">
                👋 Moi c'est Semih, créateur de SPIDERCOM.
              </p>
              <p>
                Après plusieurs années à aider des entreprises à digitaliser leurs process, j'ai créé cette agence pour accompagner les entrepreneurs vosgiens vers le digital intelligent.
              </p>
              <p>
                <span className="font-bold text-foreground">Ma mission :</span> Rendre accessible à une TPE les outils qu'utilisent les grandes entreprises (IA, automatisations, CRM intelligents).
              </p>
              <p>
                Je travaille en direct avec vous pour l'audit et la stratégie. Pour la partie technique, je m'appuie sur une équipe d'experts développeurs et intégrateurs que je manage personnellement.
              </p>
              <p>
                <span className="font-bold text-foreground">Ce qui me motive :</span> Voir un artisan gagner 10h/semaine grâce à un chatbot IA, ou voir un restaurateur doubler ses réservations grâce à des automatisations simples.
              </p>
              <p className="text-primary font-bold text-lg">
                Mon engagement : Transparence totale, accompagnement sur le long terme, résultats mesurables.
              </p>

              {/* Équipe */}
              <div className="mt-8 p-6 bg-primary/5 border border-primary/20 rounded-lg">
                <h3 className="font-inter text-xl font-bold text-foreground mb-4">Notre équipe</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-primary">🎯</span>
                    <span><span className="font-bold text-foreground">Semih :</span> Stratégie, audit, gestion client, suivi</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary">💻</span>
                    <span><span className="font-bold text-foreground">Équipe technique :</span> Développement, intégration IA, automatisations N8N</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary">🤝</span>
                    <span><span className="font-bold text-foreground">Modèle hybride :</span> Proximité locale et expertise technique internationale</span>
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
