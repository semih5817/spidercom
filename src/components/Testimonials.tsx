import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Thomas",
    role: "Artisan électricien, Épinal",
    content: "Avant SPYDERCOM, je perdais 2h/jour à relancer les devis. Maintenant tout est automatisé et je me concentre sur mes chantiers. Le chatbot répond même la nuit !",
    rating: 5
  },
  {
    name: "Sophie",
    role: "Coach professionnelle, Saint-Dié",
    content: "J'avais peur que ce soit compliqué techniquement. Semih a tout géré de A à Z. Je reçois mes leads directement sur WhatsApp et dans mon Google Sheet. C'est magique.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 px-4 relative bg-gradient-to-b from-background to-card-dark">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Ils nous font déjà confiance
          </h2>
          <p className="text-lg text-muted-foreground">
            Découvrez ce que disent nos clients
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card border border-border-subtle rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 shadow-card hover:shadow-elegant group"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-muted-foreground mb-6 italic leading-relaxed">
                "{testimonial.content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-spider-red-glow flex items-center justify-center text-white font-bold text-xl">
                  {testimonial.name[0]}
                </div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>

              {/* Decorative quote */}
              <div className="absolute top-6 right-6 text-6xl text-primary/5 group-hover:text-primary/10 transition-colors">
                "
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
