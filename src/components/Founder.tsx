import { Users } from "lucide-react";
import founderImage from "@/assets/founder-semih.png";

const Founder = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <div className="bg-card border border-border-subtle rounded-2xl overflow-hidden shadow-card">
          <div className="grid md:grid-cols-5 gap-8 p-8 md:p-12">
            {/* Photo */}
            <div className="md:col-span-2">
              <div className="relative rounded-2xl overflow-hidden aspect-square shadow-lg">
                <img 
                  src={founderImage} 
                  alt="Semih, Fondateur SPYDERCOM" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <h3 className="text-2xl font-bold text-white">Semih</h3>
                  <p className="text-white/90 text-sm">Président & Fondateur</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="md:col-span-3 space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-4xl">👋</span>
                <h2 className="text-3xl font-bold">Qui est Semih ?</h2>
              </div>

              <p className="text-muted-foreground">
                Après plusieurs années à aider des entreprises à digitaliser leurs process, j'ai créé SPYDERCOM pour accompagner les entrepreneurs vosgiens vers le digital intelligent.
              </p>

              <div className="bg-primary/5 border-l-4 border-primary rounded-r-lg p-4">
                <p className="font-semibold text-primary mb-2">Ma mission</p>
                <p className="text-sm text-muted-foreground">
                  Rendre accessible à une TPE les outils qu'utilisent les grandes entreprises (IA, automatisations, CRM intelligents).
                </p>
              </div>

              <p className="text-muted-foreground">
                Je travaille en direct avec vous pour l'audit et la stratégie. Pour la partie technique, je m'appuie sur une équipe Upwork d'experts développeurs et intégrateurs que je manage personnellement.
              </p>

              <div className="bg-gradient-to-r from-primary/10 to-transparent border border-primary/20 rounded-lg p-4">
                <p className="font-semibold mb-2 flex items-center gap-2">
                  <span>💡</span> Ce qui me motive
                </p>
                <p className="text-sm text-muted-foreground">
                  Voir un artisan gagner 10h/semaine grâce à un chatbot IA ou voir un restaurateur doubler ses réservations grâce à des automatisations simples.
                </p>
              </div>

              {/* Team info */}
              <div className="flex items-start gap-3 pt-4 border-t border-border-subtle">
                <Users className="w-5 h-5 text-primary mt-1" />
                <div className="text-sm">
                  <p className="font-semibold mb-1">Notre équipe</p>
                  <p className="text-muted-foreground">
                    Semih (stratégie + audit + gestion client) + Équipe Upwork (développement, IA, automatisations N8N)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
