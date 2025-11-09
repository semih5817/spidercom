import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AgencesImmobilieres from "./pages/AgencesImmobilieres";
import QualificationLeads from "./pages/QualificationLeads";
import EmailsRelances from "./pages/EmailsRelances";
import IntegrationCRM from "./pages/IntegrationCRM";
import PublicationMultiPlateformes from "./pages/PublicationMultiPlateformes";
import GestionLocative from "./pages/GestionLocative";
import HomeStagingVirtuel from "./pages/HomeStagingVirtuel";
import Contact from "./pages/Contact";
import ComparateurEtatsLieux from "./pages/ComparateurEtatsLieux";
import ProjetsRealises from "./pages/ProjetsRealises";
import Take5Project from "./pages/Take5Project";
import AGIAProject from "./pages/AGIAProject";
import Outils from "./pages/Outils";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/agences-immobilieres" element={<AgencesImmobilieres />} />
          <Route path="/qualification-leads" element={<QualificationLeads />} />
          <Route path="/emails-relances" element={<EmailsRelances />} />
          <Route path="/integration-crm" element={<IntegrationCRM />} />
          <Route path="/publication-multi-plateformes" element={<PublicationMultiPlateformes />} />
          <Route path="/gestion-locative" element={<GestionLocative />} />
          <Route path="/home-staging-virtuel" element={<HomeStagingVirtuel />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/comparateur-etats-lieux" element={<ComparateurEtatsLieux />} />
          <Route path="/projets-realises" element={<ProjetsRealises />} />
          <Route path="/projets/take-5" element={<Take5Project />} />
          <Route path="/projets/agia" element={<AGIAProject />} />
          <Route path="/outils" element={<Outils />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
