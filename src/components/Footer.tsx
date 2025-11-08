import { MapPin, Mail, Phone } from "lucide-react";
import spiderLogo from "@/assets/spider-logo.png";
import SpiderLogo from "./SpiderLogo";
const Footer = () => {
  return <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Colonne 1 : À propos */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-6">
              <SpiderLogo size={50} />
              <span className="font-inter text-2xl font-black text-foreground">SPIDERCOM</span>
            </div>
            <p className="text-muted-foreground font-inter text-sm leading-relaxed">
              La première agence dans les Vosges spécialisée en IA et automatisations
            </p>
            <p className="text-muted-foreground font-inter text-sm leading-relaxed pt-4">
              <span className="font-bold text-foreground">Mission :</span><br />
              Rendre accessible aux TPE/PME vosgiennes les outils digitaux des grands groupes.
            </p>
          </div>

          {/* Colonne 2 : Solutions */}
          <div>
            <h3 className="font-inter text-lg font-bold text-foreground mb-6">Solutions</h3>
            <ul className="space-y-3">
              <li>
                <a href="/qualification-leads" className="text-muted-foreground hover:text-primary transition-colors font-inter text-sm">
                  Qualification de Leads
                </a>
              </li>
              <li>
                <a href="/emails-relances" className="text-muted-foreground hover:text-primary transition-colors font-inter text-sm">
                  Emails & Relances
                </a>
              </li>
              <li>
                <a href="/integration-crm" className="text-muted-foreground hover:text-primary transition-colors font-inter text-sm">
                  Intégration CRM
                </a>
              </li>
              <li>
                <a href="/publication-multi-plateformes" className="text-muted-foreground hover:text-primary transition-colors font-inter text-sm">
                  Publication Multi-Plateformes
                </a>
              </li>
              <li>
                <a href="/gestion-locative" className="text-muted-foreground hover:text-primary transition-colors font-inter text-sm">
                  Gestion Locative
                </a>
              </li>
            </ul>
          </div>

          {/* Colonne 3 : Entreprise */}
          <div>
            <h3 className="font-inter text-lg font-bold text-foreground mb-6">Entreprise</h3>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-muted-foreground hover:text-primary transition-colors font-inter text-sm">
                  À propos
                </a>
              </li>
              <li>
                <a href="/contact" className="text-muted-foreground hover:text-primary transition-colors font-inter text-sm">
                  Contact
                </a>
              </li>
              <li>
                <span className="text-muted-foreground/60 font-inter text-sm">Blog (à venir)</span>
              </li>
              <li>
                <span className="text-muted-foreground/60 font-inter text-sm">Témoignages (à venir)</span>
              </li>
            </ul>
          </div>

          {/* Colonne 4 : Contact */}
          <div>
            <h3 className="font-inter text-lg font-bold text-foreground mb-6">Contact</h3>
            <ul className="space-y-3 font-inter text-sm text-muted-foreground">
              <li>
                <span className="text-primary">📍</span> Vosges, Grand Est, France
                <br />
                <span className="text-muted-foreground/60 text-xs">(Rendez-vous possibles en physique)</span>
              </li>
              <li>
                <span className="text-primary">📧</span>{" "}
                <a href="mailto:contact@spidercom.fr" className="hover:text-primary transition-colors">
                  contact@spidercom.fr
                </a>
              </li>
              <li>
                {" "}
                
              </li>
            </ul>
          </div>
        </div>

        {/* Barre du bas */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground font-inter">
            <p>© 2025 SPIDERCOM. Tous droits réservés.</p>
            <p className="text-muted-foreground">Fièrement basé dans les Vosges 🏔️</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors">Mentions légales</a>
              <a href="#" className="hover:text-primary transition-colors">CGV</a>
              <a href="#" className="hover:text-primary transition-colors">Confidentialité</a>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;