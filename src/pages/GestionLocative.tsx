import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackgroundEffects from "@/components/BackgroundEffects";

const GestionLocative = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <BackgroundEffects />
      
      <main className="relative">
        <section className="min-h-[80vh] flex items-center justify-center px-4 py-20">
          <div className="container mx-auto text-center space-y-6">
            <h1 className="font-orbitron text-4xl md:text-6xl font-black text-white mb-4">
              Gestion Locative
            </h1>
            <p className="font-inter text-xl text-white/70 max-w-2xl mx-auto">
              Automatisez la gestion de vos biens locatifs et gagnez du temps
            </p>
            
            <div className="py-12">
              <div className="inline-block px-8 py-4 bg-gray-900/50 border border-spider-red/30 rounded-lg">
                <p className="font-inter text-spider-cyan text-lg">
                  ⚙️ Module en cours d'intégration...
                </p>
              </div>
            </div>

            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-spider-red to-spider-red/80 text-white font-inter font-semibold rounded-lg hover:shadow-lg hover:shadow-spider-red/50 transition-all"
            >
              <ArrowLeft size={20} />
              Retour à l'accueil
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default GestionLocative;
