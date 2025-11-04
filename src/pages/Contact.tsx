import { useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackgroundEffects from "@/components/BackgroundEffects";
import CTABooking from "@/components/CTABooking";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Message envoyé !",
      description: "Nous vous répondrons dans les plus brefs délais.",
    });

    setFormData({ name: "", email: "", company: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen">
      <Header />
      <BackgroundEffects />
      
      <main className="relative py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="font-orbitron text-4xl md:text-6xl font-black text-white mb-4">
              Contactez-nous
            </h1>
            <p className="font-inter text-xl text-white/70 max-w-2xl mx-auto">
              Une question ? Un projet ? Nous sommes là pour vous aider.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
                <h2 className="font-orbitron text-2xl font-bold text-white mb-6">
                  Informations de contact
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-spider-red/20 rounded-lg">
                      <Mail className="w-6 h-6 text-spider-red" />
                    </div>
                    <div>
                      <h3 className="font-inter font-semibold text-white mb-1">Email</h3>
                      <a 
                        href="mailto:contact@spydercom.fr" 
                        className="font-inter text-white/70 hover:text-spider-red transition-colors"
                      >
                        contact@spydercom.fr
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-spider-cyan/20 rounded-lg">
                      <MapPin className="w-6 h-6 text-spider-cyan" />
                    </div>
                    <div>
                      <h3 className="font-inter font-semibold text-white mb-1">Localisation</h3>
                      <p className="font-inter text-white/70">
                        Vosges, Grand Est, France
                      </p>
                      <p className="font-inter text-white/50 text-sm mt-1">
                        Rendez-vous possibles en physique
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-spider-red/20 to-spider-cyan/20 border border-spider-red/30 rounded-2xl p-8">
                <h3 className="font-orbitron text-xl font-bold text-white mb-3">
                  Réponse rapide garantie
                </h3>
                <p className="font-inter text-white/70">
                  Nous nous engageons à répondre à tous les messages dans les 24h ouvrées.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block font-inter font-medium text-white mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white font-inter focus:outline-none focus:border-spider-red transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-inter font-medium text-white mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white font-inter focus:outline-none focus:border-spider-red transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block font-inter font-medium text-white mb-2">
                    Entreprise
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white font-inter focus:outline-none focus:border-spider-red transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block font-inter font-medium text-white mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white font-inter focus:outline-none focus:border-spider-red transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-gradient-to-r from-spider-red to-spider-red/80 text-white font-inter font-semibold rounded-lg hover:shadow-lg hover:shadow-spider-red/50 transition-all flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Envoyer le message
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>

      <CTABooking subtitle="Planifiez une démo personnalisée pour découvrir Spydercom en action" />
      <Footer />
    </div>
  );
};

export default Contact;
