import { MapPin, Mail, Phone } from "lucide-react";
import spiderLogo from "@/assets/spider-logo.png";

import SpiderLogo from "./SpiderLogo";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-spider-red/20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Colonne 1 : À propos */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-6">
              <SpiderLogo size={50} />
              <span className="font-orbitron text-2xl font-black text-white">SPYDERCOM</span>
            </div>
            <p className="text-white/60 font-inter text-sm leading-relaxed">
              La première agence dans les Vosges spécialisée en IA et automatisations
            </p>
            <p className="text-white/80 font-inter text-sm leading-relaxed pt-4">
              <span className="font-bold text-white">Mission :</span><br />
              Rendre accessible aux TPE/PME vosgiennes les outils digitaux des grands groupes.
            </p>
          </div>

          {/* Colonne 2 : Liens rapides */}
          <div>
            <h3 className="font-orbitron text-lg font-bold text-white mb-6">Liens rapides</h3>
            <ul className="space-y-3">
              {[
                { label: "Accueil", href: "#hero" },
                { label: "Nos automatisations", href: "#cas-usage" },
                { label: "La méthode", href: "#methode" },
                { label: "FAQ", href: "#faq" },
                { label: "Réserver un audit", href: "#audit" }
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-spider-red transition-colors font-inter text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3 : Contact */}
          <div>
            <h3 className="font-orbitron text-lg font-bold text-white mb-6">Contact</h3>
            <ul className="space-y-3 font-inter text-sm text-white/60">
              <li>
                <span className="text-spider-red">📍</span> Vosges, Grand Est, France
                <br />
                <span className="text-white/40 text-xs">(Rendez-vous possibles en physique)</span>
              </li>
              <li>
                <span className="text-spider-red">📧</span>{" "}
                <a href="mailto:contact@spydercom.fr" className="hover:text-spider-red transition-colors">
                  contact@spydercom.fr
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Barre du bas */}
        <div className="border-t border-spider-red/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50 font-inter">
            <p>© 2025 SPYDERCOM. Tous droits réservés.</p>
            <p className="text-white/60">Fièrement basé dans les Vosges 🏔️</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-spider-red transition-colors">Mentions légales</a>
              <a href="#" className="hover:text-spider-red transition-colors">CGV</a>
              <a href="#" className="hover:text-spider-red transition-colors">Confidentialité</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
