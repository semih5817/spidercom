import { Network } from "lucide-react";
import spiderLogo from "@/assets/spider-logo.png";

const Philosophy = () => {
  return (
    <section className="py-20 px-4 relative bg-gradient-to-b from-card-dark to-background">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-4">
            <img src={spiderLogo} alt="SPYDERCOM" className="w-12 h-12" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Pourquoi on fait ça ?
          </h2>
        </div>

        {/* Content */}
        <div className="space-y-6 text-lg text-muted-foreground mb-12">
          <p>
            Chez <span className="text-primary font-semibold">SPYDERCOM</span>, on pense qu'une petite entreprise peut avoir les mêmes outils qu'un grand groupe.
          </p>
          
          <p>
            Grâce à l'IA et à l'automatisation, on aide les pros des Vosges à se concentrer sur leur métier pendant qu'on fait tourner le reste.
          </p>

          <div className="bg-card border-l-4 border-primary rounded-r-xl p-6 my-8">
            <p className="font-semibold text-foreground text-xl mb-2">Notre conviction</p>
            <p>
              Vous n'avez pas besoin d'un site vitrine qui dort. Vous avez besoin d'un écosystème digital qui travaille pour vous 24/7.
            </p>
          </div>

          <p className="font-semibold text-foreground text-xl">
            On ne vend pas de site web. On vend du temps libre et de la sérénité.
          </p>

          <p>
            Et on le fait avec une équipe basée dans les Vosges (Semih) + des experts techniques Upwork triés sur le volet, pour vous garantir le meilleur rapport qualité/prix.
          </p>
        </div>

        {/* Spider metaphor */}
        <div className="bg-gradient-to-br from-card to-card-dark border border-border-subtle rounded-2xl p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          
          <div className="relative z-10 flex items-start gap-6">
            <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Network className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">La métaphore de la toile d'araignée</h3>
              <p className="text-muted-foreground">
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
