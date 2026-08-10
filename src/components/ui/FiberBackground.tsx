import { useEffect, useState } from "react";

export function FiberBackground() {
  const [fibers, setFibers] = useState<any[]>([]);

  useEffect(() => {
    // Determine number of fibers based on screen width to avoid clutter on mobile
    const numFibers = window.innerWidth < 768 ? 10 : 25;
    
    const newFibers = Array.from({ length: numFibers }).map((_, i) => {
      const isHorizontal = Math.random() > 0.5;
      const isReverse = Math.random() > 0.5;
      const color = Math.random() > 0.5 ? "var(--brand-primary)" : "var(--brand-blue)";
      
      return {
        id: i,
        isHorizontal,
        isReverse,
        // Positioning
        top: isHorizontal ? `${Math.random() * 100}%` : (isReverse ? "100%" : "-200px"),
        left: isHorizontal ? (isReverse ? "100%" : "-200px") : `${Math.random() * 100}%`,
        // Length and thickness of the light pulse
        width: isHorizontal ? "200px" : "2px",
        height: isHorizontal ? "2px" : "200px",
        // Animation params
        duration: 3 + Math.random() * 7,
        delay: Math.random() * 15,
        color,
        // Calculate the gradient direction
        gradientDir: isHorizontal ? (isReverse ? '270deg' : '90deg') : (isReverse ? '0deg' : '180deg'),
        // Determine the animation class
        animClass: isHorizontal 
          ? (isReverse ? 'animate-fiber-move-left' : 'animate-fiber-move-right') 
          : (isReverse ? 'animate-fiber-move-up' : 'animate-fiber-move-down'),
      };
    });
    setFibers(newFibers);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden mix-blend-screen opacity-60">
      {fibers.map((fiber) => (
        <div
          key={fiber.id}
          className={`absolute rounded-full opacity-0 ${fiber.animClass}`}
          style={{
            top: fiber.top,
            left: fiber.left,
            width: fiber.width,
            height: fiber.height,
            background: `linear-gradient(${fiber.gradientDir}, transparent, ${fiber.color})`,
            boxShadow: `0 0 10px ${fiber.color}, 0 0 20px ${fiber.color}`,
            animationDelay: `${fiber.delay}s`,
            ['--fiber-duration' as any]: `${fiber.duration}s`,
          }}
        />
      ))}
    </div>
  );
}
