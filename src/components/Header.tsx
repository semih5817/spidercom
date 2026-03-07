import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isMenuOpen]);

  const agenciesSolutions = {
    automations: [
      { name: "Publication Multi-Plateformes", path: "/publication-multi-plateformes" },
      { name: "Qualification de Leads", path: "/qualification-leads" },
      { name: "Emails & Relances", path: "/emails-relances" },
      { name: "Gestion Locative", path: "/gestion-locative" },
      { name: "Intégration CRM", path: "/integration-crm" },
    ],
    outils: [
      { name: "Home Staging Virtuel", path: "/home-staging-virtuel" },
      { name: "Comparateur États des Lieux", path: "/comparateur-etats-lieux" },
    ],
  };

  const outilsItems = [
    { name: "AGIA Dashboard", path: "/outils" },
    { name: "Home Staging Virtuel", path: "/home-staging-virtuel" },
    { name: "Comparateur États des Lieux", path: "/comparateur-etats-lieux" },
  ];

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `font-inter text-sm font-medium tracking-wide transition-colors duration-200 ${
      isActive ? "text-primary" : "text-white/70 hover:text-white"
    }`;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Burger - left */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white/70 hover:text-white p-2 transition-colors"
              aria-label="Menu"
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

            {/* Logo - center */}
            <Link
              to="/"
              className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2 hover:opacity-90 transition-opacity"
            >
              <span className="font-orbitron text-xl md:text-2xl font-black text-white tracking-[3px]">
                MT03
              </span>
            </Link>

            {/* Right spacer for symmetry */}
            <div className="w-10" />
          </div>
        </div>
      </header>

      {/* Spacer */}
      <div className="h-16 md:h-20" />

      {/* Full-screen menu overlay */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-background/98 backdrop-blur-xl"
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Menu content */}
        <nav className="relative z-10 flex flex-col items-center justify-center h-full px-6">
          <div className="w-full max-w-md space-y-1">
            {/* Agence Immobilière dropdown */}
            <div>
              <button
                onClick={() => setOpenDropdown(openDropdown === "agence" ? null : "agence")}
                className="w-full flex items-center justify-between py-4 font-orbitron text-lg font-bold text-white/80 hover:text-white transition-colors"
              >
                <span>Agence Immobilière</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-300 ${
                    openDropdown === "agence" ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-400 ${
                  openDropdown === "agence" ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="pl-4 pb-4 space-y-1">
                  <p className="text-[10px] font-orbitron font-bold text-primary uppercase tracking-[3px] py-2">
                    Automatisations
                  </p>
                  {agenciesSolutions.automations.map((item) => (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={({ isActive }) =>
                        `block py-2.5 pl-3 font-inter text-sm border-l-2 transition-all duration-200 ${
                          isActive
                            ? "text-primary border-primary"
                            : "text-white/60 border-white/10 hover:text-white hover:border-white/30"
                        }`
                      }
                    >
                      {item.name}
                    </NavLink>
                  ))}
                  <p className="text-[10px] font-orbitron font-bold text-accent uppercase tracking-[3px] py-2 mt-3">
                    Outils
                  </p>
                  {agenciesSolutions.outils.map((item) => (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={({ isActive }) =>
                        `block py-2.5 pl-3 font-inter text-sm border-l-2 transition-all duration-200 ${
                          isActive
                            ? "text-accent border-accent"
                            : "text-white/60 border-white/10 hover:text-white hover:border-white/30"
                        }`
                      }
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>

            <div className="h-px bg-white/5" />

            {/* Outils dropdown */}
            <div>
              <button
                onClick={() => setOpenDropdown(openDropdown === "outils" ? null : "outils")}
                className="w-full flex items-center justify-between py-4 font-orbitron text-lg font-bold text-white/80 hover:text-white transition-colors"
              >
                <span>Outils</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-300 ${
                    openDropdown === "outils" ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-400 ${
                  openDropdown === "outils" ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="pl-4 pb-4 space-y-1">
                  {outilsItems.map((item) => (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={({ isActive }) =>
                        `block py-2.5 pl-3 font-inter text-sm border-l-2 transition-all duration-200 ${
                          isActive
                            ? "text-accent border-accent"
                            : "text-white/60 border-white/10 hover:text-white hover:border-white/30"
                        }`
                      }
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>

            <div className="h-px bg-white/5" />

            {/* Simple links */}
            <NavLink
              to="/projets-realises"
              onClick={() => setIsMenuOpen(false)}
              className="block py-4 font-orbitron text-lg font-bold text-white/80 hover:text-white transition-colors"
            >
              Projets Réalisés
            </NavLink>

            <div className="h-px bg-white/5" />

            <NavLink
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="block py-4 font-orbitron text-lg font-bold text-white/80 hover:text-white transition-colors"
            >
              Contact
            </NavLink>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
