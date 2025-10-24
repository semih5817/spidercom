import { Network } from "lucide-react";
import spiderLogo from "@/assets/spider-logo.png";

const Philosophy = () => {
  return (
    <section className="py-24 px-4 relative bg-gradient-to-b from-deep-black via-spider-red/3 to-deep-black">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16 space-y-6 animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-spider-red/10 mb-4 animate-float">
            <img src={spiderLogo} alt="SPYDERCOM" className="w-12 h-12" />
          </div>
          <h2 className="font-orbitron text-4xl md:text-5xl font-black text-white">
            Pourquoi on fait ça ?
          </h2>
        </div>

        {/* Content */}
        <div className="space-y-6 text-lg text-white/80 mb-12 font-inter leading-relaxed">
          <p>
            Chez <span className="text-spider-red font-semibold">SPYDERCOM</span>, on pense qu'une petite entreprise peut avoir les mêmes outils qu'un grand groupe.
          </p>
          
          <p>
            Grâce à l'IA et à l'automatisation, on aide les entrepreneurs des Vosges à se concentrer sur leur métier pendant qu'on fait tourner le reste.
          </p>

          <div className="bg-spider-red/5 border-l-4 border-spider-red rounded-r-xl p-6 my-8 backdrop-blur-sm">
            <p className="font-orbitron font-bold text-white text-xl mb-2">Notre conviction</p>
            <p className="text-white/90">
              Vous n'avez pas besoin d'un site vitrine qui dort. Vous avez besoin d'un écosystème digital qui travaille pour vous 24/7.
            </p>
          </div>

          <p className="font-orbitron font-bold text-white text-xl">
            On ne vend pas de site web. On vend du temps libre et de la sérénité.
          </p>

          <p>
            Et on le fait avec une équipe basée dans les Vosges (Semih) + des experts techniques triés sur le volet, pour vous garantir le meilleur rapport qualité/prix.
          </p>
        </div>

        {/* Spider metaphor */}
        <div className="bg-spider-red/5 border border-spider-red/30 rounded-lg p-8 relative overflow-hidden group hover:border-spider-red/60 transition-all duration-400 hover:-translate-y-1">
          <div className="absolute top-0 right-0 w-64 h-64 bg-spider-red/10 rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          
          <div className="relative z-10 flex items-start gap-6">
            <div className="w-16 h-16 rounded-xl bg-spider-red/10 flex items-center justify-center flex-shrink-0">
              <Network className="w-8 h-8 text-spider-red" />
            </div>
            <div>
              <h3 className="font-orbitron text-xl font-bold text-white mb-3">La métaphore de la toile d'araignée</h3>
              <p className="text-white/80 font-inter">
                On connecte tous vos outils comme une toile d'araignée intelligente. Quand un élément bouge (nouveau lead), toute la toile réagit (notification, CRM, relance auto).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
