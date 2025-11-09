import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { ChevronLeft, ChevronRight, Check, AlertTriangle, XCircle, Eye } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import BeforeAfterSlider from "./BeforeAfterSlider";
import ConformityGauge from "./ConformityGauge";
import IssueCard from "./IssueCard";
import { toast } from "sonner";
import rayureParquet from "@/assets/edl/rayure-parquet.png";

interface Issue {
  id: number;
  type: string;
  description: string;
  severity: "low" | "medium" | "high";
  location: { x: number; y: number };
}

interface PhotoPair {
  id: number;
  room: string;
  entryPhoto: string;
  exitPhoto: string;
  score: number;
  status: "compliant" | "to_verify" | "non_compliant" | null;
  issues: Issue[];
  notes?: string;
}

const mockPairs: PhotoPair[] = [
  {
    id: 1,
    room: "Salon",
    entryPhoto: rayureParquet,
    exitPhoto: rayureParquet,
    score: 65,
    status: null,
    issues: [
      { id: 1, type: "Dégradation", description: "Tache sur le mur (15cm)", severity: "medium", location: { x: 120, y: 200 } },
      { id: 2, type: "Usure", description: "Rayures parquet légères", severity: "low", location: { x: 300, y: 450 } },
    ]
  },
  {
    id: 2,
    room: "Cuisine",
    entryPhoto: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800",
    exitPhoto: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=800",
    score: 92,
    status: null,
    issues: []
  },
  {
    id: 3,
    room: "Chambre",
    entryPhoto: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800",
    exitPhoto: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800",
    score: 45,
    status: null,
    issues: [
      { id: 3, type: "Dégradation", description: "Trou dans le mur (5cm)", severity: "high", location: { x: 200, y: 150 } },
      { id: 4, type: "Propreté", description: "Traces de moisissure", severity: "high", location: { x: 350, y: 100 } },
      { id: 5, type: "Usure", description: "Peinture écaillée", severity: "medium", location: { x: 450, y: 300 } },
    ]
  },
];

const InteractiveComparison = () => {
  const [currentPairIndex, setCurrentPairIndex] = useState(0);
  const [pairs, setPairs] = useState(mockPairs);
  const [notes, setNotes] = useState("");
  const [showAnalysis, setShowAnalysis] = useState(false);

  const currentPair = pairs[currentPairIndex];

  const handlePrevious = () => {
    if (currentPairIndex > 0) {
      setCurrentPairIndex(currentPairIndex - 1);
      setNotes("");
      setShowAnalysis(false);
    }
  };

  const handleNext = () => {
    if (currentPairIndex < pairs.length - 1) {
      setCurrentPairIndex(currentPairIndex + 1);
      setNotes("");
      setShowAnalysis(false);
    }
  };

  const handleClassify = (status: "compliant" | "to_verify" | "non_compliant") => {
    const updatedPairs = [...pairs];
    updatedPairs[currentPairIndex] = { ...currentPair, status, notes };
    setPairs(updatedPairs);
    
    toast.success(`${currentPair.room} marqué comme ${
      status === "compliant" ? "conforme ✅" :
      status === "to_verify" ? "à vérifier ⚠️" : "non conforme ❌"
    }`);

    setTimeout(() => {
      if (currentPairIndex < pairs.length - 1) {
        handleNext();
      }
    }, 500);
  };

  const getStatusBadge = (status: PhotoPair["status"]) => {
    if (!status) return null;
    
    const config = {
      compliant: { color: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30", label: "✅ Conforme" },
      to_verify: { color: "bg-orange-500/20 text-orange-400 border-orange-500/30", label: "⚠️ À vérifier" },
      non_compliant: { color: "bg-spider-red/20 text-spider-red border-spider-red/30", label: "❌ Non conforme" },
    };

    return <Badge className={config[status].color}>{config[status].label}</Badge>;
  };

  return (
    <div className="space-y-6">
      {/* Header avec navigation */}
      <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-spider-cyan/30 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={handlePrevious}
              disabled={currentPairIndex === 0}
              className="text-white disabled:opacity-30"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <div className="flex items-center gap-3">
              <div className="font-orbitron text-white text-lg font-bold">
                {currentPair.room}
              </div>
              <Badge variant="outline" className="border-spider-cyan/30 text-spider-cyan">
                {currentPairIndex + 1}/{pairs.length}
              </Badge>
              {getStatusBadge(currentPair.status)}
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleNext}
              disabled={currentPairIndex === pairs.length - 1}
              className="text-white disabled:opacity-30"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
          
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowAnalysis(!showAnalysis)}
            className="border-spider-cyan/30 text-spider-cyan"
          >
            <Eye className="w-4 h-4 mr-2" />
            {showAnalysis ? "Masquer l'analyse" : "Voir l'analyse"}
          </Button>
        </div>
      </Card>

      {/* Main comparison grid */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Viewer */}
        <div className="lg:col-span-2">
          <BeforeAfterSlider
            beforeImage={currentPair.entryPhoto}
            afterImage={currentPair.exitPhoto}
            height="600px"
          />
        </div>

        {/* Analysis Panel */}
        <AnimatePresence>
          {showAnalysis && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="space-y-6"
            >
              {/* Score */}
              <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-white/10 p-6 text-center">
                <h3 className="text-sm font-semibold text-white/60 mb-4 uppercase tracking-wider">
                  Score de conformité
                </h3>
                <div className="flex justify-center mb-4">
                  <ConformityGauge score={currentPair.score} />
                </div>
                <p className="text-sm text-white/80">
                  Conforme à <span className="font-orbitron font-bold text-lg text-white">{currentPair.score}%</span>
                </p>
              </Card>

              {/* Issues */}
              <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-white/10 p-6">
                <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
                  Anomalies détectées ({currentPair.issues.length})
                </h3>
                <div className="space-y-2 max-h-64 overflow-y-auto">
                  {currentPair.issues.length > 0 ? (
                    currentPair.issues.map((issue) => (
                      <IssueCard key={issue.id} issue={issue} thumbnail={currentPair.exitPhoto} />
                    ))
                  ) : (
                    <p className="text-sm text-emerald-400 text-center py-4">
                      ✅ Aucune anomalie détectée
                    </p>
                  )}
                </div>
              </Card>

              {/* Actions */}
              <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-white/10 p-6 space-y-4">
                <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Classification</h3>

                <div className="space-y-2">
                  <Button
                    className="w-full justify-start gap-2 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                    onClick={() => handleClassify("compliant")}
                  >
                    <Check className="w-4 h-4" />
                    Conforme
                  </Button>
                  <Button
                    className="w-full justify-start gap-2 bg-orange-500/10 hover:bg-orange-500/20 text-orange-400 border border-orange-500/30"
                    onClick={() => handleClassify("to_verify")}
                  >
                    <AlertTriangle className="w-4 h-4" />
                    À vérifier
                  </Button>
                  <Button
                    className="w-full justify-start gap-2 bg-spider-red/10 hover:bg-spider-red/20 text-spider-red border border-spider-red/30"
                    onClick={() => handleClassify("non_compliant")}
                  >
                    <XCircle className="w-4 h-4" />
                    Non conforme
                  </Button>
                </div>

                <Textarea
                  placeholder="+ Ajouter une note (optionnel)"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="bg-black/30 border-white/10 text-white"
                  rows={3}
                />
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Progress indicator */}
      <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-white/10 p-4">
        <div className="flex items-center gap-2">
          {pairs.map((pair, idx) => (
            <div
              key={pair.id}
              className={`flex-1 h-2 rounded-full transition-all ${
                idx < currentPairIndex
                  ? pair.status === "compliant"
                    ? "bg-emerald-500"
                    : pair.status === "non_compliant"
                    ? "bg-spider-red"
                    : "bg-orange-500"
                  : idx === currentPairIndex
                  ? "bg-spider-cyan animate-pulse"
                  : "bg-white/10"
              }`}
            />
          ))}
        </div>
        <div className="mt-2 text-center text-sm text-white/60">
          {pairs.filter(p => p.status !== null).length}/{pairs.length} pièces classifiées
        </div>
      </Card>
    </div>
  );
};

export default InteractiveComparison;
