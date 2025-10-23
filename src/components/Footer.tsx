import { MapPin, Mail, Phone } from "lucide-react";
import spiderLogo from "@/assets/spider-logo.png";

const Footer = () => {
  return (
    <footer className="bg-card-dark border-t border-border-subtle py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={spiderLogo} alt="SPYDERCOM" className="w-10 h-10" />
              <div>
                <h3 className="text-xl font-bold text-gradient">SPYDERCOM</h3>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              L'agence vosgienne qui combine humain + IA + automatisation
            </p>
            <div className="flex items-center gap-2 text-sm text-primary">
              <MapPin className="w-4 h-4" />
              <span>Fièrement basé dans les Vosges 🏔️</span>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contact</h4>
            <div className="space-y-3">
              <a href="mailto:contact@spydercom.fr" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                contact@spydercom.fr
              </a>
              <a href="tel:+33000000000" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                +33 (0)X XX XX XX XX
              </a>
            </div>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Légal</h4>
            <div className="space-y-2">
              <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Mentions légales
              </a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                CGV
              </a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Politique de confidentialité
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border-subtle pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} SPYDERCOM. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
