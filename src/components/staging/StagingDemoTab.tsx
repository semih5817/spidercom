import { useState, useEffect } from "react";
import { Upload, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { StagingImageSlider } from "./StagingImageSlider";
import { stagingStyles, stagingTransformations } from "@/data/stagingMockData";

type Step = 1 | 2 | 3 | 4;

export const StagingDemoTab = () => {
  const [currentStep, setCurrentStep] = useState<Step>(1);
  const [selectedStyle, setSelectedStyle] = useState("");
  const [uploadedImage, setUploadedImage] = useState("");
  const [progress, setProgress] = useState(0);

  const steps = [
    { number: 1, emoji: "📸", title: "Upload", description: "Importez votre photo" },
    { number: 2, emoji: "🎨", title: "Style", description: "Choisissez le style" },
    { number: 3, emoji: "⚙️", title: "Traitement", description: "Transformation en cours" },
    { number: 4, emoji: "✨", title: "Résultat", description: "Votre photo transformée" },
  ];

  useEffect(() => {
    if (currentStep === 3) {
      setProgress(0);
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => setCurrentStep(4), 500);
            return 100;
          }
          return prev + 2;
        });
      }, 40);
      return () => clearInterval(interval);
    }
  }, [currentStep]);

  const handleUpload = () => {
    setUploadedImage(stagingTransformations[0].before);
    setCurrentStep(2);
  };

  const handleStyleSelect = (style: string) => {
    setSelectedStyle(style);
  };

  const handleTransform = () => {
    if (selectedStyle) {
      setCurrentStep(3);
    }
  };

  const handleReset = () => {
    setCurrentStep(1);
    setSelectedStyle("");
    setUploadedImage("");
    setProgress(0);
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Progress Steps */}
      <div className="flex items-center justify-center gap-4">
        {steps.map((step, index) => (
          <div key={step.number} className="flex items-center">
            <div className="flex flex-col items-center">
              <div
                className={`flex h-16 w-16 items-center justify-center rounded-full border-2 transition-all ${
                  currentStep >= step.number
                    ? "border-primary bg-primary"
                    : "border-border bg-card"
                }`}
              >
                <span className="text-3xl">{step.emoji}</span>
              </div>
              <div className="mt-2 text-center">
                <p className="text-xs font-semibold text-foreground">{step.title}</p>
                <p className="text-[10px] text-muted-foreground">{step.description}</p>
              </div>
            </div>
            {index < steps.length - 1 && (
              <div
                className={`mx-2 h-0.5 w-12 md:w-24 transition-colors ${
                  currentStep > step.number ? "bg-primary" : "bg-border"
                }`}
              />
            )}
          </div>
        ))}
      </div>

      {/* Step Content */}
      <div className="rounded-xl border border-border bg-card p-8">
        {/* Step 1: Upload */}
        {currentStep === 1 && (
          <div className="flex flex-col items-center justify-center space-y-6">
            <div className="flex h-64 w-full max-w-2xl cursor-pointer items-center justify-center rounded-xl border-4 border-dashed border-muted/50 bg-muted/10 transition-all hover:border-muted hover:bg-muted/20">
              <div className="text-center">
                <Upload className="mx-auto mb-4 h-16 w-16 text-muted-foreground" />
                <p className="text-lg font-semibold text-foreground">Glissez votre photo ici</p>
                <p className="mt-2 text-sm text-muted-foreground">ou cliquez pour sélectionner</p>
              </div>
            </div>
            <Button onClick={handleUpload} size="lg">
              Continuer →
            </Button>
          </div>
        )}

        {/* Step 2: Style Selection */}
        {currentStep === 2 && (
          <div className="space-y-6">
            <h3 className="text-center text-2xl font-bold text-foreground">
              Choisissez votre style
            </h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {stagingStyles.slice(1).map((style) => (
                <div
                  key={style.id}
                  onClick={() => handleStyleSelect(style.id)}
                  className={`group cursor-pointer rounded-xl border-2 p-6 text-center transition-all ${
                    selectedStyle === style.id
                      ? "border-primary bg-primary/10"
                      : "border-border bg-card hover:border-primary/50"
                  }`}
                >
                  <div className="text-6xl mb-3">{style.emoji}</div>
                  <p className="font-semibold text-foreground">{style.name}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-lg border border-border bg-muted p-4">
              <p className="mb-3 text-center text-sm text-muted-foreground">
                Ou importez une photo d'inspiration
              </p>
              <Button variant="outline" className="w-full">
                🖼️ Photo d'inspiration
              </Button>
            </div>
            <div className="flex justify-center">
              <Button
                onClick={handleTransform}
                disabled={!selectedStyle}
                size="lg"
                className="disabled:opacity-50"
              >
                Lancer la transformation →
              </Button>
            </div>
          </div>
        )}

        {/* Step 3: Processing */}
        {currentStep === 3 && (
          <div className="flex flex-col items-center justify-center space-y-8">
            <div className="text-6xl animate-pulse">⚙️</div>
            <h3 className="text-2xl font-bold text-foreground">
              Transformation en cours...
            </h3>
            <div className="w-full max-w-md space-y-3">
              <Progress value={progress} className="h-8" />
              <p className="text-center text-2xl font-bold text-primary">
                {progress}%
              </p>
            </div>
          </div>
        )}

        {/* Step 4: Result */}
        {currentStep === 4 && (
          <div className="space-y-6">
            <div className="text-center">
              <div className="mb-4 text-6xl">✨</div>
              <h3 className="text-2xl font-bold text-primary">
                Transformation terminée !
              </h3>
            </div>
            <StagingImageSlider
              beforeImage={stagingTransformations[0].before}
              afterImage={stagingTransformations[0].after}
              className="h-[500px]"
            />
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Button size="lg">
                📥 Télécharger
              </Button>
              <Button onClick={handleReset} size="lg" variant="outline">
                🔄 Nouvelle transformation
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
