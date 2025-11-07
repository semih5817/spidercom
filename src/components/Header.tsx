import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import SpiderLogo from "./SpiderLogo";
import { useCalendly } from "@/hooks/useCalendly";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { openCalendly } = useCalendly();

  const agenciesSolutions = {
    automations: [
      { name: "Publication Multi-Plateformes", path: "/publication-multi-plateformes" },
      { name: "Qualification de Leads", path: "/qualification-leads" },
      { name: "Emails & Relances", path: "/emails-relances" },
      { name: "Gestion Locative", path: "/gestion-locative" },
      { name: "Comparateur États des Lieux", path: "/comparateur-etats-lieux" },
    ],
    outils: [
      { name: "Home Staging Virtuel", path: "/home-staging-virtuel" },
      { name: "Intégration CRM", path: "/integration-crm" },
    ]
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <SpiderLogo size={40} />
            <span className="font-inter text-xl font-semibold text-foreground">SPIDERCOM</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `font-inter font-medium transition-colors ${
                  isActive ? "text-primary" : "text-foreground/80 hover:text-primary"
                }`
              }
            >
              Accueil
            </NavLink>

            {/* Agences Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className="flex items-center gap-1 font-inter font-medium text-foreground/80 hover:text-primary transition-colors">
                Agences
                <ChevronDown className="w-4 h-4" />
              </button>

              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 glass-effect border border-border rounded-lg shadow-large overflow-hidden">
                  {/* Automatisations Section */}
                  <div className="px-4 py-2 bg-primary/10 border-b border-border">
                    <span className="text-xs font-inter font-semibold text-primary uppercase tracking-wider">
                      Automatisations
                    </span>
                  </div>
                  {agenciesSolutions.automations.map((item) => (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      className={({ isActive }) =>
                        `block px-4 py-2.5 font-inter text-sm transition-colors ${
                          isActive
                            ? "bg-primary/20 text-primary"
                            : "text-foreground/80 hover:bg-muted hover:text-primary"
                        }`
                      }
                    >
                      {item.name}
                    </NavLink>
                  ))}
                  
                  {/* Outils Section */}
                  <div className="px-4 py-2 bg-spider-cyan/10 border-b border-t border-border">
                    <span className="text-xs font-inter font-semibold text-spider-cyan uppercase tracking-wider">
                      Outils
                    </span>
                  </div>
                  {agenciesSolutions.outils.map((item) => (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      className={({ isActive }) =>
                        `block px-4 py-2.5 font-inter text-sm transition-colors ${
                          isActive
                            ? "bg-spider-cyan/20 text-spider-cyan"
                            : "text-foreground/80 hover:bg-muted hover:text-spider-cyan"
                        }`
                      }
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>

            <NavLink
              to="/projets-realises"
              className={({ isActive }) =>
                `font-inter font-medium transition-colors ${
                  isActive ? "text-primary border-b-2 border-primary" : "text-foreground/80 hover:text-primary"
                }`
              }
            >
              Projets Réalisés
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `font-inter font-medium transition-colors ${
                  isActive ? "text-primary border-b-2 border-primary" : "text-foreground/80 hover:text-primary"
                }`
              }
            >
              À propos
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `font-inter font-medium transition-colors ${
                  isActive ? "text-primary border-b-2 border-primary" : "text-foreground/80 hover:text-primary"
                }`
              }
            >
              Contact
            </NavLink>

            <button
              onClick={openCalendly}
              className="px-6 py-2.5 bg-gradient-to-r from-primary to-spider-blue text-white font-inter font-semibold rounded-lg hover:shadow-blue-glow transition-all"
            >
              Démo Gratuite
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-foreground p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <NavLink
                to="/"
                end
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `font-inter font-medium transition-colors ${
                    isActive ? "text-primary" : "text-foreground/80"
                  }`
                }
              >
                Accueil
              </NavLink>

              <div className="space-y-2">
                <div className="font-inter font-medium text-foreground/60 text-sm uppercase tracking-wider mb-2">
                  Agences
                </div>
                
                {/* Automatisations */}
                <div className="pl-2">
                  <div className="text-xs font-inter font-semibold text-primary uppercase tracking-wider mb-2">
                    Automatisations
                  </div>
                  {agenciesSolutions.automations.map((item) => (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={({ isActive }) =>
                        `block pl-4 py-2 font-inter text-sm transition-colors ${
                          isActive ? "text-primary" : "text-foreground/80"
                        }`
                      }
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>

                {/* Outils */}
                <div className="pl-2 mt-3">
                  <div className="text-xs font-inter font-semibold text-spider-cyan uppercase tracking-wider mb-2">
                    Outils
                  </div>
                  {agenciesSolutions.outils.map((item) => (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={({ isActive }) =>
                        `block pl-4 py-2 font-inter text-sm transition-colors ${
                          isActive ? "text-spider-cyan" : "text-foreground/80"
                        }`
                      }
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              </div>

              <NavLink
                to="/projets-realises"
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `font-inter font-medium transition-colors ${
                    isActive ? "text-primary" : "text-foreground/80"
                  }`
                }
              >
                Projets Réalisés
              </NavLink>

              <NavLink
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `font-inter font-medium transition-colors ${
                    isActive ? "text-primary" : "text-foreground/80"
                  }`
                }
              >
                À propos
              </NavLink>

              <NavLink
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `font-inter font-medium transition-colors ${
                    isActive ? "text-primary" : "text-foreground/80"
                  }`
                }
              >
                Contact
              </NavLink>

              <button
                onClick={() => {
                  openCalendly();
                  setIsMenuOpen(false);
                }}
                className="px-6 py-2.5 bg-gradient-to-r from-primary to-spider-blue text-white font-inter font-semibold rounded-lg"
              >
                Démo Gratuite
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
