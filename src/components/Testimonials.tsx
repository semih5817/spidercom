import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Thomas D.",
    role: "Artisan électricien, Épinal",
    content: "Avant SPIDERCOM, je perdais 2h/jour à relancer les devis et à répondre aux mêmes questions. Maintenant tout est automatisé : chatbot la nuit, relances programmées, notifications instantanées. Je me concentre enfin sur mes chantiers. Le ROI a été immédiat.",
    rating: 5
  },
  {
    name: "Sophie L.",
    role: "Coach professionnelle, Saint-Dié-des-Vosges",
    content: "J'avais peur que ce soit trop compliqué techniquement. Semih a tout géré de A à Z. Je reçois maintenant mes leads directement sur WhatsApp et dans mon Google Sheet. Mes avis Google ont explosé grâce au système de demande automatique. C'est vraiment magique !",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="relative py-24 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-inter text-4xl md:text-5xl font-black text-foreground mb-4">
            Ce que nos clients <span className="text-primary">disent</span> de nous
          </h2>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-primary/5 border-l-4 border-primary rounded-lg p-8 hover:bg-primary/8 transition-all duration-400 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <Quote className="w-10 h-10 text-primary/30 mb-4" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              <p className="font-inter text-foreground leading-relaxed mb-6 text-lg">
                "{testimonial.content}"
              </p>

              <div className="border-t border-primary/20 pt-4">
                <p className="font-inter font-bold text-foreground">— {testimonial.name}</p>
                <p className="font-inter text-muted-foreground text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
