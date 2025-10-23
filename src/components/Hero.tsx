import { Button } from "@/components/ui/button";
import { Gift, CheckCircle2, MapPin } from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard.png";
import spiderLogo from "@/assets/spider-logo.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-deep-black via-background to-background" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-spider-red/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-spider-red/5 rounded-full blur-3xl" />

      <div className="container relative z-10 mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img src={spiderLogo} alt="SPYDERCOM" className="w-12 h-12" />
              <div>
                <h1 className="text-3xl font-bold text-gradient">SPYDERCOM</h1>
                <p className="text-sm text-muted-foreground">L'agence vosgienne qui combine humain + IA + automatisation</p>
              </div>
            </div>

            {/* Main headline */}
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Pendant que vous gérez votre entreprise,{" "}
                <span className="text-gradient">votre site travaille pour vous 24/7</span>
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground">
                Nous créons des sites web intelligents + automatisations sur mesure pour les entreprises vosgiennes qui veulent scaler sans s'épuiser
              </p>
            </div>

            {/* CTA */}
            <div className="space-y-4">
              <Button variant="cta" size="xl" className="w-full sm:w-auto">
                <Gift className="w-5 h-5" />
                Réserver mon audit gratuit (30 min)
              </Button>
              <p className="text-sm text-muted-foreground flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                Basé dans les Vosges • Réponse sous 24h
              </p>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <span className="font-semibold block">Basé dans les Vosges</span>
                  <span className="text-muted-foreground">Proximité garantie</span>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <span className="font-semibold block">Abonnement 4 ans</span>
                  <span className="text-muted-foreground">Tout inclus</span>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <span className="font-semibold block">Déjà 2 entreprises</span>
                  <span className="text-muted-foreground">Nous font confiance</span>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <span className="font-semibold block">Site + IA + Auto</span>
                  <span className="text-muted-foreground">Maintenance incluse</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right content - Dashboard mockup */}
          <div className="relative animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative rounded-2xl overflow-hidden shadow-elegant glow-red">
              <img 
                src={heroDashboard} 
                alt="Dashboard d'automatisation SPYDERCOM" 
                className="w-full h-auto"
              />
            </div>
            {/* Floating stats */}
            <div className="absolute -bottom-6 -left-6 bg-card border border-border-subtle rounded-xl p-4 shadow-card">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl">⚡</span>
                </div>
                <div>
                  <div className="font-bold text-xl">10h/semaine</div>
                  <div className="text-sm text-muted-foreground">de temps gagné</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
