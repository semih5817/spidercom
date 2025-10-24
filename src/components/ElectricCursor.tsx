import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
}

const ElectricCursor = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const lastEmitRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const updateSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    updateSize();
    window.addEventListener("resize", updateSize);

    // Track mouse position
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Animation loop
    let animationId: number;
    const animate = (timestamp: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Emit particles
      if (timestamp - lastEmitRef.current > 16) { // ~60fps
        const mouse = mouseRef.current;
        for (let i = 0; i < 3; i++) {
          particlesRef.current.push({
            x: mouse.x + (Math.random() - 0.5) * 10,
            y: mouse.y + (Math.random() - 0.5) * 10,
            vx: (Math.random() - 0.5) * 2,
            vy: (Math.random() - 0.5) * 2,
            life: 1,
            maxLife: 30 + Math.random() * 20,
          });
        }
        lastEmitRef.current = timestamp;
      }

      // Update and draw particles
      particlesRef.current = particlesRef.current.filter((particle) => {
        particle.life++;
        particle.x += particle.vx;
        particle.y += particle.vy;

        const alpha = 1 - particle.life / particle.maxLife;
        if (alpha <= 0) return false;

        // Draw electric particle with glow
        const gradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          8
        );
        
        // Electric blue color - plus vif et électrique
        gradient.addColorStop(0, `rgba(0, 255, 255, ${alpha * 1})`);
        gradient.addColorStop(0.5, `rgba(50, 200, 255, ${alpha * 0.6})`);
        gradient.addColorStop(1, `rgba(0, 150, 255, 0)`);

        ctx.fillStyle = gradient;
        ctx.fillRect(particle.x - 8, particle.y - 8, 16, 16);

        // Draw lightning bolt effect occasionally
        if (Math.random() < 0.1) {
          ctx.strokeStyle = `rgba(0, 255, 255, ${alpha * 0.8})`;
          ctx.lineWidth = 2;
          ctx.shadowBlur = 15;
          ctx.shadowColor = "rgba(0, 255, 255, 1)";
          
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          const endX = particle.x + (Math.random() - 0.5) * 30;
          const endY = particle.y + (Math.random() - 0.5) * 30;
          const midX = (particle.x + endX) / 2 + (Math.random() - 0.5) * 15;
          const midY = (particle.y + endY) / 2 + (Math.random() - 0.5) * 15;
          
          ctx.lineTo(midX, midY);
          ctx.lineTo(endX, endY);
          ctx.stroke();
          
          ctx.shadowBlur = 0;
        }

        return true;
      });

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", updateSize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-50"
      style={{ mixBlendMode: "screen" }}
    />
  );
};

export default ElectricCursor;
