import { useState, useRef, useEffect } from "react";
import { Maximize2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface StagingImageSliderProps {
  beforeImage: string;
  afterImage: string;
  afterNight?: string;
  onFullscreen?: () => void;
  showFullscreenButton?: boolean;
  className?: string;
}

export const StagingImageSlider = ({
  beforeImage,
  afterImage,
  afterNight,
  onFullscreen,
  showFullscreenButton = false,
  className = "",
}: StagingImageSliderProps) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  const handleMouseDown = () => setIsDragging(true);

  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleClick = (e: React.MouseEvent) => {
    handleMove(e.clientX);
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleGlobalMouseUp);
    return () => window.removeEventListener('mouseup', handleGlobalMouseUp);
  }, []);

  return (
    <div className={`relative ${className}`}>
      <div
        ref={containerRef}
        className="relative h-full w-full cursor-ew-resize select-none overflow-hidden rounded-xl"
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        onClick={handleClick}
      >
        {/* After Image */}
        <img
          src={afterNight || afterImage}
          alt="After transformation"
          className="h-full w-full object-cover"
          draggable={false}
        />

        {/* Before Image (clipped) */}
        <div
          className="absolute inset-0"
          style={{
            clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
          }}
        >
          <img
            src={beforeImage}
            alt="Before transformation"
            className="h-full w-full object-cover"
            draggable={false}
          />
        </div>

        {/* Labels */}
        <div className="absolute left-4 top-4 rounded-md bg-black/70 px-3 py-1 text-xs font-bold text-white backdrop-blur">
          AVANT
        </div>
        <div className="absolute right-4 top-4 rounded-md bg-primary/90 px-3 py-1 text-xs font-bold text-white backdrop-blur">
          APRÈS
        </div>

        {/* Slider Handle */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-primary"
          style={{ left: `${sliderPosition}%` }}
        >
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex h-12 w-12 cursor-ew-resize items-center justify-center rounded-full border-4 border-primary bg-background shadow-lg"
            onMouseDown={handleMouseDown}
          >
            <span className="text-xl text-primary font-bold">⟷</span>
          </div>
        </div>
      </div>

      {showFullscreenButton && onFullscreen && (
        <Button
          size="icon"
          variant="secondary"
          onClick={onFullscreen}
          className="absolute right-4 bottom-4 h-10 w-10 rounded-lg bg-background/80 backdrop-blur hover:bg-primary hover:text-white"
        >
          <Maximize2 className="h-5 w-5" />
        </Button>
      )}
    </div>
  );
};
