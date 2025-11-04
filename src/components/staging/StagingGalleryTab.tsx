import { useState } from "react";
import { Download, Moon, Sun } from "lucide-react";
import { StagingImageSlider } from "./StagingImageSlider";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { stagingTransformations } from "@/data/stagingMockData";

export const StagingGalleryTab = () => {
  const [selectedImage, setSelectedImage] = useState(stagingTransformations[0]);
  const [isNightMode, setIsNightMode] = useState(false);
  const [nightTransition, setNightTransition] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const currentAfterImage = isNightMode
    ? selectedImage.afterNight
    : selectedImage.after;

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Main Viewer */}
      <div className="rounded-xl border border-border bg-card p-4 md:p-6">
        <StagingImageSlider
          beforeImage={selectedImage.before}
          afterImage={currentAfterImage}
          showFullscreenButton
          onFullscreen={() => setIsFullscreen(true)}
          className="h-[400px] md:h-[600px]"
        />

        {/* Controls */}
        <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-foreground">
              {selectedImage.style}
            </h3>
            <div className="flex gap-4 text-sm text-muted-foreground">
              <span>⚡ {selectedImage.processingTime}s</span>
              <span>⭐ {selectedImage.rating}</span>
            </div>
          </div>

          <div className="flex flex-col gap-4 md:items-end">
            {/* Toggle Switch */}
            <div className="flex items-center gap-3">
              <Button
                size="sm"
                variant={!isNightMode ? "default" : "outline"}
                onClick={() => {
                  setIsNightMode(false);
                  setNightTransition(0);
                }}
              >
                <Sun className="mr-2 h-4 w-4" />
                Mode Jour
              </Button>
              <Button
                size="sm"
                variant={isNightMode ? "default" : "outline"}
                onClick={() => {
                  setIsNightMode(true);
                  setNightTransition(100);
                }}
                className={isNightMode ? "bg-blue-600" : ""}
              >
                <Moon className="mr-2 h-4 w-4" />
                Mode Nuit
              </Button>
            </div>

            {/* Progressive Slider */}
            <div className="flex w-full items-center gap-4 md:w-64">
              <Sun className="h-4 w-4 text-yellow-500" />
              <Slider
                value={[nightTransition]}
                onValueChange={(value) => {
                  setNightTransition(value[0]);
                  setIsNightMode(value[0] > 50);
                }}
                max={100}
                step={1}
                className="flex-1"
              />
              <Moon className="h-4 w-4 text-blue-400" />
            </div>

            <Button className="w-full md:w-auto">
              <Download className="mr-2 h-4 w-4" />
              Télécharger
            </Button>
          </div>
        </div>
      </div>

      {/* Thumbnail Gallery */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stagingTransformations.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedImage(item)}
            className={`group relative cursor-pointer overflow-hidden rounded-lg border transition-all ${
              selectedImage.id === item.id
                ? "border-primary"
                : "border-border hover:border-primary/50"
            }`}
          >
            <div className="flex h-64">
              {/* Before Half */}
              <div className="relative w-1/2 overflow-hidden">
                <img
                  src={item.before}
                  alt="Before"
                  className="h-full w-full object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute left-2 top-2 rounded bg-black/70 px-2 py-1 text-[10px] font-bold text-white">
                  AVANT
                </div>
              </div>

              {/* Divider */}
              <div className="w-0.5 bg-primary" />

              {/* After Half */}
              <div className="relative w-1/2 overflow-hidden">
                <img
                  src={item.after}
                  alt="After"
                  className="h-full w-full object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute right-2 top-2 rounded bg-primary/90 px-2 py-1 text-[10px] font-bold text-white">
                  APRÈS
                </div>
              </div>
            </div>

            {/* Info Overlay */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-3">
              <p className="text-sm font-semibold text-white">{item.style}</p>
              <div className="mt-1 flex items-center gap-3 text-xs text-white/80">
                <span>⭐ {item.rating}</span>
                <span>⚡ {item.processingTime}s</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div
          className="fixed inset-0 z-[9999] bg-black/95 p-4 md:p-8"
          onClick={() => setIsFullscreen(false)}
        >
          <StagingImageSlider
            beforeImage={selectedImage.before}
            afterImage={currentAfterImage}
            className="h-full"
          />
          <Button
            size="lg"
            variant="outline"
            onClick={() => setIsFullscreen(false)}
            className="absolute right-4 top-4 md:right-8 md:top-8"
          >
            Fermer
          </Button>
        </div>
      )}
    </div>
  );
};
