import { useState } from "react";
import { Plus, Upload, FileText, CheckCircle, Clock, Play } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { mockDossiers, type EDLDossier } from "./edlMockData";
import { Progress } from "@/components/ui/progress";

interface EDLDossiersZoneProps {
  onSelectDossier: (dossierId: string) => void;
  selectedDossierId?: string;
}

export const EDLDossiersZone = ({ onSelectDossier, selectedDossierId }: EDLDossiersZoneProps) => {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisStep, setAnalysisStep] = useState(0);
  const [analysisProgress, setAnalysisProgress] = useState(0);

  const analysisSteps = [
    { icon: "🔍", text: "Détection des pièces..." },
    { icon: "✅", text: "Analyse cuisine en cours..." },
    { icon: "🎯", text: "Comparaison salon..." },
    { icon: "🔬", text: "Analyse chambre..." },
    { icon: "🛁", text: "Vérification salle de bain..." },
    { icon: "📊", text: "Génération du rapport..." },
  ];

  const handleLaunchAnalysis = (dossierId: string) => {
    setIsAnalyzing(true);
    setAnalysisStep(0);
    setAnalysisProgress(0);

    const interval = setInterval(() => {
      setAnalysisProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsAnalyzing(false);
            // Ici on simule que le dossier est maintenant terminé avec un rapport
            onSelectDossier(dossierId);
          }, 500);
          return 100;
        }
        return prev + 2;
      });

      setAnalysisStep((prev) => {
        const newStep = Math.floor((analysisProgress / 100) * analysisSteps.length);
        return Math.min(newStep, analysisSteps.length - 1);
      });
    }, 90); // 45 secondes total (100 / 2 * 90ms = 4500ms)
  };

  const getStatusBadge = (statut: EDLDossier["statut"]) => {
    switch (statut) {
      case "termine":
        return (
          <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30">
            <CheckCircle className="w-3 h-3 mr-1" />
            Terminé
          </Badge>
        );
      case "en_attente":
        return (
          <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30">
            <Clock className="w-3 h-3 mr-1" />
            En attente
          </Badge>
        );
      case "analyse_en_cours":
        return (
          <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30 animate-pulse">
            <Play className="w-3 h-3 mr-1" />
            Analyse...
          </Badge>
        );
    }
  };

  return (
    <>
      <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-cyan-500/30 h-full">
        <CardHeader className="border-b border-white/10">
          <div className="flex items-center justify-between">
            <CardTitle className="font-orbitron text-white flex items-center gap-2">
              <FileText className="w-5 h-5 text-cyan-400" />
              Dossiers États des Lieux
            </CardTitle>
            <Button
              onClick={() => setShowCreateModal(true)}
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600"
            >
              <Plus className="w-4 h-4 mr-2" />
              Nouveau Dossier
            </Button>
          </div>
        </CardHeader>

        <CardContent className="pt-6">
          <div className="space-y-3 max-h-[600px] overflow-y-auto pr-2">
            {mockDossiers.map((dossier) => (
              <div
                key={dossier.id}
                onClick={() => onSelectDossier(dossier.id)}
                className={`p-4 rounded-lg border-2 cursor-pointer transition-all hover:scale-[1.02] ${
                  selectedDossierId === dossier.id
                    ? "border-cyan-500 bg-cyan-500/10"
                    : "border-white/10 bg-black/20 hover:border-cyan-500/50"
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <h3 className="font-orbitron text-white font-bold text-lg mb-1">
                      {dossier.nomLocataire}
                    </h3>
                    <p className="text-sm text-white/60 mb-2">{dossier.adresse}</p>
                  </div>
                  {getStatusBadge(dossier.statut)}
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="text-white/60">
                    <span className="text-white/40">Entrée:</span> {new Date(dossier.dateEntree).toLocaleDateString('fr-FR')}
                  </div>
                  {dossier.dateSortie && (
                    <div className="text-white/60">
                      <span className="text-white/40">Sortie:</span> {new Date(dossier.dateSortie).toLocaleDateString('fr-FR')}
                    </div>
                  )}
                  <div className="text-white/60">
                    <span className="text-white/40">Loyer:</span> {dossier.loyer}€
                  </div>
                  <div className="text-white/60">
                    <span className="text-white/40">Caution:</span> {dossier.caution}€
                  </div>
                </div>

                {dossier.statut === "en_attente" && (
                  <Button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleLaunchAnalysis(dossier.id);
                    }}
                    className="w-full mt-3 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
                    size="sm"
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Lancer l'Analyse
                  </Button>
                )}

                {dossier.statut === "termine" && dossier.rapportId && (
                  <div className="mt-3 text-xs text-emerald-400 flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" />
                    Rapport disponible
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Modal de création de dossier */}
      <Dialog open={showCreateModal} onOpenChange={setShowCreateModal}>
        <DialogContent className="bg-gray-900 border-cyan-500/30 text-white max-w-2xl">
          <DialogHeader>
            <DialogTitle className="font-orbitron text-2xl">
              Créer un Nouveau Dossier
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-4 py-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="nomLocataire" className="text-white/80">
                  Nom du Locataire
                </Label>
                <Input
                  id="nomLocataire"
                  placeholder="Ex: Sophie Dupont"
                  className="bg-black/40 border-white/20 text-white"
                />
              </div>
              <div>
                <Label htmlFor="dateEntree" className="text-white/80">
                  Date d'Entrée
                </Label>
                <Input
                  id="dateEntree"
                  type="date"
                  className="bg-black/40 border-white/20 text-white"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="adresse" className="text-white/80">
                Adresse Complète
              </Label>
              <Input
                id="adresse"
                placeholder="Ex: 15 rue de Paris, 75009 Paris"
                className="bg-black/40 border-white/20 text-white"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="loyer" className="text-white/80">
                  Loyer Mensuel (€)
                </Label>
                <Input
                  id="loyer"
                  type="number"
                  placeholder="Ex: 1200"
                  className="bg-black/40 border-white/20 text-white"
                />
              </div>
              <div>
                <Label htmlFor="caution" className="text-white/80">
                  Montant Caution (€)
                </Label>
                <Input
                  id="caution"
                  type="number"
                  placeholder="Ex: 2400"
                  className="bg-black/40 border-white/20 text-white"
                />
              </div>
            </div>

            <div className="border-2 border-dashed border-cyan-500/30 rounded-lg p-6 text-center hover:border-cyan-500/60 transition-colors cursor-pointer">
              <Upload className="w-12 h-12 text-cyan-400 mx-auto mb-3" />
              <p className="text-white/80 font-medium mb-1">
                Déposer les photos d'entrée ici
              </p>
              <p className="text-sm text-white/50">
                ou cliquez pour sélectionner (JPG, PNG, max 20MB)
              </p>
              <p className="text-xs text-cyan-400 mt-2">
                L'IA détectera automatiquement les pièces
              </p>
            </div>

            <div className="flex gap-3">
              <Button
                onClick={() => setShowCreateModal(false)}
                variant="outline"
                className="flex-1 border-white/20 text-white hover:bg-white/10"
              >
                Annuler
              </Button>
              <Button
                onClick={() => {
                  setShowCreateModal(false);
                  // Simulation de création
                }}
                className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600"
              >
                Créer le Dossier
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Modal d'analyse en cours */}
      <Dialog open={isAnalyzing} onOpenChange={setIsAnalyzing}>
        <DialogContent className="bg-gray-900 border-cyan-500/30 text-white max-w-xl">
          <DialogHeader>
            <DialogTitle className="font-orbitron text-2xl text-center">
              Analyse en Cours...
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6 py-6">
            {/* Progression */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-white/60">Progression</span>
                <span className="text-cyan-400 font-bold">{Math.round(analysisProgress)}%</span>
              </div>
              <Progress value={analysisProgress} className="h-2" />
            </div>

            {/* Étapes */}
            <div className="space-y-3">
              {analysisSteps.map((step, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-3 p-3 rounded-lg transition-all ${
                    index === analysisStep
                      ? "bg-cyan-500/20 border border-cyan-500/50 scale-105"
                      : index < analysisStep
                      ? "bg-emerald-500/10 border border-emerald-500/30"
                      : "bg-black/20 border border-white/10"
                  }`}
                >
                  <span className="text-2xl">{step.icon}</span>
                  <span
                    className={`font-medium ${
                      index === analysisStep
                        ? "text-cyan-400"
                        : index < analysisStep
                        ? "text-emerald-400"
                        : "text-white/40"
                    }`}
                  >
                    {step.text}
                  </span>
                  {index < analysisStep && (
                    <CheckCircle className="w-5 h-5 text-emerald-400 ml-auto" />
                  )}
                </div>
              ))}
            </div>

            <p className="text-center text-sm text-white/60">
              Temps estimé : 45 secondes
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
