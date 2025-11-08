import { motion } from 'framer-motion';
import { useCalendly } from '@/hooks/useCalendly';

interface CTABookingProps {
  subtitle?: string;
}

const CTABooking = ({ 
  subtitle = "30 minutes pour découvrir comment Spidercom transforme votre agence"
}: CTABookingProps) => {
  const { openCalendly } = useCalendly();

  return (
    <section className="px-8 py-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto bg-gradient-to-r from-primary/20 via-primary/10 to-secondary/20 
                   rounded-3xl p-12 md:p-16 border-2 border-primary
                   shadow-[0_0_80px_hsl(var(--primary)/0.4)] text-center mb-20"
      >
        {/* Badge */}
        <div className="inline-block mb-6">
          <span className="px-4 py-2 bg-primary/20 rounded-full text-primary 
                         text-sm font-bold uppercase tracking-wider">
            🎯 PRÊT À AUTOMATISER ?
          </span>
        </div>

        {/* Titre */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6 font-inter">
          Réservez Votre Démo Personnalisée
        </h2>

        {/* Sous-titre (dynamique) */}
        <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto">
          {subtitle}
        </p>

        {/* Promesses */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-10">
          <div className="flex items-center gap-3 bg-muted px-6 py-4 rounded-xl 
                         border border-border w-full md:w-auto">
            <span className="text-2xl md:text-3xl">⚡</span>
            <span className="text-foreground font-semibold text-sm md:text-base">
              Démo live de vos automatisations
            </span>
          </div>
          <div className="flex items-center gap-3 bg-muted px-6 py-4 rounded-xl 
                         border border-border w-full md:w-auto">
            <span className="text-2xl md:text-3xl">💰</span>
            <span className="text-foreground font-semibold text-sm md:text-base">
              Calcul ROI pour votre agence
            </span>
          </div>
          <div className="flex items-center gap-3 bg-muted px-6 py-4 rounded-xl 
                         border border-border w-full md:w-auto">
            <span className="text-2xl md:text-3xl">🎁</span>
            <span className="text-foreground font-semibold text-sm md:text-base">
              Audit gratuit de vos process
            </span>
          </div>
        </div>

        {/* Bouton CTA */}
        <motion.button
          onClick={openCalendly}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          data-event="cta-booking-clicked"
          data-page={typeof window !== 'undefined' ? window.location.pathname : ''}
          data-source="end-of-page"
          className="group relative px-8 md:px-12 py-5 md:py-6
                     bg-gradient-to-r from-primary via-primary/90 to-primary
                     text-primary-foreground font-black text-xl md:text-2xl rounded-2xl
                     shadow-[0_0_60px_hsl(var(--primary)/0.6)]
                     hover:shadow-[0_0_80px_hsl(var(--primary)/0.8)]
                     transition-all duration-300 cursor-pointer
                     overflow-hidden w-full md:w-auto"
        >
          <span className="relative z-10 flex items-center justify-center gap-3">
            <span className="text-2xl md:text-3xl">📅</span>
            <span>Prendre Rendez-vous Maintenant</span>
          </span>

          {/* Sparkles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-primary-foreground rounded-full"
              animate={{
                x: [0, Math.random() * 200 - 100],
                y: [0, Math.random() * 100 - 50],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2 + Math.random(),
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </motion.button>

        {/* Sous-texte */}
        <p className="text-xs md:text-sm text-muted-foreground mt-6">
          ⚡ Disponibilité immédiate • 🎯 Sans engagement • 🔒 Confidentiel
        </p>

        {/* Social proof */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-xs md:text-sm text-muted-foreground mt-8">
          <div className="flex items-center gap-2">
            <span className="text-green-500 text-base md:text-lg">✓</span>
            <span>156 agences équipées</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-500 text-base md:text-lg">✓</span>
            <span>4.9/5 (203 avis)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-500 text-base md:text-lg">✓</span>
            <span>Support dédié 7j/7</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CTABooking;
