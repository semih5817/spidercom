import { useState } from "react";
import { Download, CheckCircle, XCircle, AlertCircle, ZoomIn } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { mockRapports, mockDossiers, type EDLRapport, type Anomalie } from "@/data/edlMockData";
import { Progress } from "@/components/ui/progress";

interface EDLRapportsZoneProps {
  selectedDossierId?: string;
}

// Composant pour afficher une photo avec annotation
const AnnotatedPhoto = ({ 
  anomalie, 
  type 
}: { 
  anomalie: Anomalie; 
  type: "entree" | "sortie" 
}) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const photo = type === "entree" ? anomalie.photoEntree : anomalie.photoSortie;
  const showAnnotation = type === "sortie" && anomalie.annotation;

  const PhotoContent = ({ className = "" }: { className?: string }) => (
    <div className={`relative ${className}`}>
      <img
        src={photo}
        alt={`${anomalie.piece} - ${type}`}
        className="w-full h-full object-cover rounded-lg"
      />
      {showAnnotation && (
        <>
          {/* Cercle rouge pour l'anomalie */}
          <div
            className="absolute border-4 border-red-500 rounded-full animate-pulse"
            style={{
              left: `${anomalie.annotation!.x}%`,
              top: `${anomalie.annotation!.y}%`,
              width: `${anomalie.annotation!.radius * 2}%`,
              height: `${anomalie.annotation!.radius * 2}%`,
              transform: "translate(-50%, -50%)",
            }}
          />
          {/* Point central */}
          <div
            className="absolute w-2 h-2 bg-red-500 rounded-full"
            style={{
              left: `${anomalie.annotation!.x}%`,
              top: `${anomalie.annotation!.y}%`,
              transform: "translate(-50%, -50%)",
            }}
          />
        </>
      )}
      <div className="absolute top-2 left-2 bg-black/70 px-2 py-1 rounded text-xs font-bold text-white">
        {type === "entree" ? "ENTRÉE" : "SORTIE"}
      </div>
      {type === "sortie" && (
        <Button
          size="sm"
          variant="secondary"
          className="absolute top-2 right-2"
          onClick={() => setIsFullscreen(true)}
        >
          <ZoomIn className="w-4 h-4" />
        </Button>
      )}
    </div>
  );

  return (
    <>
      <PhotoContent />
      
      {/* Modal plein écran */}
      <Dialog open={isFullscreen} onOpenChange={setIsFullscreen}>
        <DialogContent className="max-w-7xl bg-black/95">
          <PhotoContent className="h-[80vh]" />
        </DialogContent>
      </Dialog>
    </>
  );
};

// Composant pour une carte d'anomalie
const AnomalieCard = ({ anomalie }: { anomalie: Anomalie }) => {
  const getSeverityColor = (severite: Anomalie["severite"]) => {
    switch (severite) {
      case "conforme":
        return "border-emerald-500/50 bg-emerald-500/10";
      case "a_verifier":
        return "border-yellow-500/50 bg-yellow-500/10";
      case "non_conforme":
        return "border-red-500/50 bg-red-500/10";
    }
  };

  const getSeverityIcon = (severite: Anomalie["severite"]) => {
    switch (severite) {
      case "conforme":
        return <CheckCircle className="w-5 h-5 text-emerald-400" />;
      case "a_verifier":
        return <AlertCircle className="w-5 h-5 text-yellow-400" />;
      case "non_conforme":
        return <XCircle className="w-5 h-5 text-red-400" />;
    }
  };

  const getSeverityLabel = (severite: Anomalie["severite"]) => {
    switch (severite) {
      case "conforme":
        return "Conforme";
      case "a_verifier":
        return "À Vérifier";
      case "non_conforme":
        return "Non Conforme";
    }
  };

  return (
    <Card className={`border-2 ${getSeverityColor(anomalie.severite)}`}>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="font-orbitron text-lg text-white">
            {anomalie.piece}
          </CardTitle>
          <Badge
            className={`${
              anomalie.severite === "conforme"
                ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/30"
                : anomalie.severite === "a_verifier"
                ? "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                : "bg-red-500/20 text-red-400 border-red-500/30"
            }`}
          >
            {getSeverityIcon(anomalie.severite)}
            <span className="ml-1">{getSeverityLabel(anomalie.severite)}</span>
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <p className="text-sm text-white/70">{anomalie.description}</p>

        {/* Comparaison photos */}
        <div className="grid grid-cols-2 gap-3">
          <AnnotatedPhoto anomalie={anomalie} type="entree" />
          <AnnotatedPhoto anomalie={anomalie} type="sortie" />
        </div>
      </CardContent>
    </Card>
  );
};

export const EDLRapportsZone = ({ selectedDossierId }: EDLRapportsZoneProps) => {
  const [selectedRapportId, setSelectedRapportId] = useState<string>();

  const dossier = mockDossiers.find((d) => d.id === selectedDossierId);
  const rapport = dossier?.rapportId
    ? mockRapports.find((r) => r.id === dossier.rapportId)
    : undefined;

  // Si aucun rapport sélectionné, afficher la liste
  if (!rapport) {
    return (
      <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-cyan-500/30 h-full">
        <CardHeader>
          <CardTitle className="font-orbitron text-white flex items-center gap-2">
            📄 Rapports d'Analyse
          </CardTitle>
        </CardHeader>
        <CardContent>
          {mockRapports.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-white/60">Aucun rapport généré pour l'instant</p>
              <p className="text-sm text-white/40 mt-2">
                Sélectionnez un dossier et lancez l'analyse
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {mockRapports.map((rap) => {
                const doss = mockDossiers.find((d) => d.id === rap.dossierId);
                return (
                  <div
                    key={rap.id}
                    onClick={() => setSelectedRapportId(rap.id)}
                    className="p-4 rounded-lg border-2 border-white/10 bg-black/20 hover:border-cyan-500/50 cursor-pointer transition-all hover:scale-[1.02]"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-orbitron text-white font-bold">
                        {doss?.nomLocataire}
                      </h3>
                      <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30">
                        {rap.scoreGlobal}% conforme
                      </Badge>
                    </div>
                    <p className="text-sm text-white/60">
                      {new Date(rap.dateGeneration).toLocaleDateString('fr-FR', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </p>
                  </div>
                );
              })}
            </div>
          )}
        </CardContent>
      </Card>
    );
  }

  // Afficher le rapport sélectionné
  return (
    <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-cyan-500/30 h-full">
      <CardHeader className="border-b border-white/10">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="font-orbitron text-white flex items-center gap-2 mb-2">
              📄 Rapport d'Analyse
            </CardTitle>
            <p className="text-sm text-white/60">
              {dossier?.nomLocataire} - {dossier?.adresse}
            </p>
          </div>
          <Button
            className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600"
          >
            <Download className="w-4 h-4 mr-2" />
            Télécharger PDF
          </Button>
        </div>
      </CardHeader>

      <CardContent className="pt-6 max-h-[600px] overflow-y-auto pr-2">
        <div className="space-y-6">
          {/* Score global */}
          <div className="bg-gradient-to-br from-purple-500/20 to-gray-800 border-2 border-purple-500/50 rounded-xl p-6">
            <div className="text-center mb-4">
              <h3 className="font-orbitron text-2xl text-white mb-2">
                Score de Conformité
              </h3>
              <div className="font-orbitron text-6xl font-black text-purple-400 mb-2">
                {rapport.scoreGlobal}%
              </div>
              <p className="text-white/60">
                Analyse générée en {rapport.tempAnalyse} secondes
              </p>
            </div>

            <Progress value={rapport.scoreGlobal} className="h-3 mb-4" />

            <div className="grid grid-cols-3 gap-3 mt-4">
              <div className="bg-emerald-500/10 rounded-lg p-3 text-center">
                <div className="text-2xl font-black text-emerald-400">
                  {rapport.statistiques.conforme}
                </div>
                <div className="text-xs text-white/60">Conforme</div>
              </div>
              <div className="bg-yellow-500/10 rounded-lg p-3 text-center">
                <div className="text-2xl font-black text-yellow-400">
                  {rapport.statistiques.aVerifier}
                </div>
                <div className="text-xs text-white/60">À Vérifier</div>
              </div>
              <div className="bg-red-500/10 rounded-lg p-3 text-center">
                <div className="text-2xl font-black text-red-400">
                  {rapport.statistiques.nonConforme}
                </div>
                <div className="text-xs text-white/60">Non Conforme</div>
              </div>
            </div>

            {rapport.montantRetenuEstime > 0 && (
              <div className="mt-4 bg-orange-500/10 border border-orange-500/30 rounded-lg p-3 text-center">
                <p className="text-sm text-white/60 mb-1">Montant estimé à retenir</p>
                <p className="font-orbitron text-2xl font-black text-orange-400">
                  {rapport.montantRetenuEstime}€
                </p>
              </div>
            )}
          </div>

          {/* Tabs par catégorie */}
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-4 bg-gray-900/50 border border-cyan-500/20">
              <TabsTrigger value="all">Toutes</TabsTrigger>
              <TabsTrigger value="conforme">Conformes</TabsTrigger>
              <TabsTrigger value="a_verifier">À Vérifier</TabsTrigger>
              <TabsTrigger value="non_conforme">Non Conformes</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-4 mt-4">
              {rapport.anomalies.map((anomalie) => (
                <AnomalieCard key={anomalie.id} anomalie={anomalie} />
              ))}
            </TabsContent>

            <TabsContent value="conforme" className="space-y-4 mt-4">
              {rapport.anomalies
                .filter((a) => a.severite === "conforme")
                .map((anomalie) => (
                  <AnomalieCard key={anomalie.id} anomalie={anomalie} />
                ))}
            </TabsContent>

            <TabsContent value="a_verifier" className="space-y-4 mt-4">
              {rapport.anomalies
                .filter((a) => a.severite === "a_verifier")
                .map((anomalie) => (
                  <AnomalieCard key={anomalie.id} anomalie={anomalie} />
                ))}
            </TabsContent>

            <TabsContent value="non_conforme" className="space-y-4 mt-4">
              {rapport.anomalies
                .filter((a) => a.severite === "non_conforme")
                .map((anomalie) => (
                  <AnomalieCard key={anomalie.id} anomalie={anomalie} />
                ))}
            </TabsContent>
          </Tabs>
        </div>
      </CardContent>
    </Card>
  );
};
