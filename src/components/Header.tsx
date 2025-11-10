import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import SpiderLogo from "./SpiderLogo";
import { useCalendly } from "@/hooks/useCalendly";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isAgenciesMenuOpen, setIsAgenciesMenuOpen] = useState(false);
  const [isOutilsMenuOpen, setIsOutilsMenuOpen] = useState(false);
  
  const {
    openCalendly
  } = useCalendly();
  const agenciesSolutions = {
    automations: [{
      name: "Publication Multi-Plateformes",
      path: "/publication-multi-plateformes"
    }, {
      name: "Qualification de Leads",
      path: "/qualification-leads"
    }, {
      name: "Emails & Relances",
      path: "/emails-relances"
    }, {
      name: "Gestion Locative",
      path: "/gestion-locative"
    }, {
      name: "Intégration CRM",
      path: "/integration-crm"
    }],
    outils: [{
      name: "Home Staging Virtuel",
      path: "/home-staging-virtuel"
    }, {
      name: "Comparateur États des Lieux",
      path: "/comparateur-etats-lieux"
    }]
  };
  const tools = [{
    name: "Qualification de Leads",
    path: "/qualification-leads"
  }, {
    name: "Emails & Relances",
    path: "/emails-relances"
  }, {
    name: "Intégration CRM",
    path: "/integration-crm"
  }, {
    name: "Publication Multi-Plateformes",
    path: "/publication-multi-plateformes"
  }, {
    name: "Gestion Locative",
    path: "/gestion-locative"
  }];
  return <header className="sticky top-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden text-white p-2">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {/* Agence Immobilière Dropdown */}
            <div className="relative" onMouseEnter={() => setIsDropdownOpen(true)} onMouseLeave={() => setIsDropdownOpen(false)}>
              <button className="flex items-center gap-1 font-inter font-medium text-white/80 hover:text-spider-red transition-colors">
                Agence Immobilière
                <ChevronDown className="w-4 h-4" />
              </button>

              {isDropdownOpen && <div className="absolute top-full left-0 mt-2 w-72 bg-black border border-gray-700 rounded-lg shadow-2xl overflow-hidden z-50">
                  {/* Automatisations Section */}
                  <div className="px-4 py-2 bg-spider-red/10 border-b border-gray-800">
                    <span className="text-xs font-orbitron font-bold text-spider-red uppercase tracking-wider">
                      Automatisations
                    </span>
                  </div>
                  {agenciesSolutions.automations.map(item => <NavLink key={item.path} to={item.path} className={({
                isActive
              }) => `block px-4 py-2.5 font-inter text-sm transition-colors ${isActive ? "bg-spider-red/20 text-spider-red" : "text-white/80 hover:bg-gray-900 hover:text-spider-red"}`}>
                      {item.name}
                    </NavLink>)}
                  
                  {/* Outils Section */}
                  <div className="px-4 py-2 bg-spider-cyan/10 border-b border-t border-gray-800">
                    <span className="text-xs font-orbitron font-bold text-spider-cyan uppercase tracking-wider">
                      Outils
                    </span>
                  </div>
                  {agenciesSolutions.outils.map(item => <NavLink key={item.path} to={item.path} className={({
                isActive
              }) => `block px-4 py-2.5 font-inter text-sm transition-colors ${isActive ? "bg-spider-cyan/20 text-spider-cyan" : "text-white/80 hover:bg-gray-900 hover:text-spider-cyan"}`}>
                      {item.name}
                    </NavLink>)}
                </div>}
            </div>

            {/* Outils Dropdown */}
            <div className="relative" onMouseEnter={() => setIsOutilsMenuOpen(true)} onMouseLeave={() => setIsOutilsMenuOpen(false)}>
              <button className="flex items-center gap-1 font-inter font-medium text-white/80 hover:text-spider-cyan transition-colors">
                Outils
                <ChevronDown className="w-4 h-4" />
              </button>

              {isOutilsMenuOpen && <div className="absolute top-full left-0 mt-2 w-64 bg-black border border-gray-700 rounded-lg shadow-2xl overflow-hidden z-50">
                  <NavLink to="/outils" className={({
                isActive
              }) => `block px-4 py-2.5 font-inter text-sm transition-colors ${isActive ? "bg-spider-cyan/20 text-spider-cyan" : "text-white/80 hover:bg-gray-900 hover:text-spider-cyan"}`}>
                    AGIA Dashboard
                  </NavLink>
                  <NavLink to="/home-staging-virtuel" className={({
                isActive
              }) => `block px-4 py-2.5 font-inter text-sm transition-colors ${isActive ? "bg-spider-cyan/20 text-spider-cyan" : "text-white/80 hover:bg-gray-900 hover:text-spider-cyan"}`}>
                    Home Staging Virtuel
                  </NavLink>
                  <NavLink to="/comparateur-etats-lieux" className={({
                isActive
              }) => `block px-4 py-2.5 font-inter text-sm transition-colors ${isActive ? "bg-spider-cyan/20 text-spider-cyan" : "text-white/80 hover:bg-gray-900 hover:text-spider-cyan"}`}>
                    Comparateur États des Lieux
                  </NavLink>
                </div>}
            </div>

            <NavLink to="/projets-realises" className={({
            isActive
          }) => `font-inter font-medium transition-colors ${isActive ? "text-spider-red border-b-2 border-spider-red" : "text-white/80 hover:text-spider-red"}`}>
              Projets Réalisés
            </NavLink>

            <NavLink to="/contact" className={({
            isActive
          }) => `font-inter font-medium transition-colors ${isActive ? "text-spider-red border-b-2 border-spider-red" : "text-white/80 hover:text-spider-red"}`}>
              À propos
            </NavLink>

            <NavLink to="/contact" className={({
            isActive
          }) => `font-inter font-medium transition-colors ${isActive ? "text-spider-red border-b-2 border-spider-red" : "text-white/80 hover:text-spider-red"}`}>
              Contact
            </NavLink>
          </nav>

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <SpiderLogo size={40} />
            <span className="font-orbitron text-xl font-black text-white">SPIDERCOM</span>
          </Link>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <nav className="lg:hidden py-4 border-t border-gray-800">
            <div className="flex flex-col space-y-2">
              
              {/* Agence Immobilière Accordion */}
              <div>
                <button
                  onClick={() => setIsAgenciesMenuOpen(!isAgenciesMenuOpen)}
                  className="w-full flex items-center justify-between px-4 py-2 font-inter font-medium text-white/80 hover:text-spider-red transition-colors"
                >
                  <span>Agence Immobilière</span>
                  <ChevronRight className={`w-4 h-4 transition-transform ${isAgenciesMenuOpen ? 'rotate-90' : ''}`} />
                </button>
                
                {isAgenciesMenuOpen && (
                  <div className="space-y-2 mt-2">
                    {/* Automatisations */}
                    <div className="pl-4">
                      <div className="text-xs font-orbitron font-bold text-spider-red uppercase tracking-wider mb-2 px-4">
                        Automatisations
                      </div>
                      {agenciesSolutions.automations.map(item => (
                        <NavLink
                          key={item.path}
                          to={item.path}
                          onClick={() => setIsMenuOpen(false)}
                          className={({ isActive }) => 
                            `block pl-8 py-2 font-inter text-sm transition-colors ${
                              isActive ? "text-spider-red" : "text-white/80"
                            }`
                          }
                        >
                          {item.name}
                        </NavLink>
                      ))}
                    </div>

                    {/* Outils Agence */}
                    <div className="pl-4 mt-3">
                      <div className="text-xs font-orbitron font-bold text-spider-cyan uppercase tracking-wider mb-2 px-4">
                        Outils
                      </div>
                      {agenciesSolutions.outils.map(item => (
                        <NavLink
                          key={item.path}
                          to={item.path}
                          onClick={() => setIsMenuOpen(false)}
                          className={({ isActive }) => 
                            `block pl-8 py-2 font-inter text-sm transition-colors ${
                              isActive ? "text-spider-cyan" : "text-white/80"
                            }`
                          }
                        >
                          {item.name}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Outils Accordion */}
              <div>
                <button
                  onClick={() => setIsOutilsMenuOpen(!isOutilsMenuOpen)}
                  className="w-full flex items-center justify-between px-4 py-2 font-inter font-medium text-white/80 hover:text-spider-cyan transition-colors"
                >
                  <span>Outils</span>
                  <ChevronRight className={`w-4 h-4 transition-transform ${isOutilsMenuOpen ? 'rotate-90' : ''}`} />
                </button>
                
                {isOutilsMenuOpen && (
                  <div className="pl-8 space-y-2 mt-2">
                    <NavLink
                      to="/outils"
                      onClick={() => setIsMenuOpen(false)}
                      className={({ isActive }) => 
                        `block py-2 font-inter text-sm transition-colors ${
                          isActive ? "text-spider-cyan" : "text-white/80"
                        }`
                      }
                    >
                      AGIA Dashboard
                    </NavLink>
                    <NavLink
                      to="/home-staging-virtuel"
                      onClick={() => setIsMenuOpen(false)}
                      className={({ isActive }) => 
                        `block py-2 font-inter text-sm transition-colors ${
                          isActive ? "text-spider-cyan" : "text-white/80"
                        }`
                      }
                    >
                      Home Staging Virtuel
                    </NavLink>
                    <NavLink
                      to="/comparateur-etats-lieux"
                      onClick={() => setIsMenuOpen(false)}
                      className={({ isActive }) => 
                        `block py-2 font-inter text-sm transition-colors ${
                          isActive ? "text-spider-cyan" : "text-white/80"
                        }`
                      }
                    >
                      Comparateur États des Lieux
                    </NavLink>
                  </div>
                )}
              </div>

              {/* Projets Réalisés */}
              <NavLink
                to="/projets-realises"
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) => 
                  `px-4 py-2 font-inter font-medium transition-colors ${
                    isActive ? "text-spider-red" : "text-white/80"
                  }`
                }
              >
                Projets Réalisés
              </NavLink>

              {/* À propos */}
              <NavLink
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) => 
                  `px-4 py-2 font-inter font-medium transition-colors ${
                    isActive ? "text-spider-red" : "text-white/80"
                  }`
                }
              >
                À propos
              </NavLink>

              {/* Contact */}
              <NavLink
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) => 
                  `px-4 py-2 font-inter font-medium transition-colors ${
                    isActive ? "text-spider-red" : "text-white/80"
                  }`
                }
              >
                Contact
              </NavLink>

            </div>
          </nav>}
      </div>
    </header>;
};
export default Header;