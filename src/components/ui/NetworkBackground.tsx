import { useEffect, useRef } from "react";

export function NetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particlesArray: Particle[] = [];
    let animationFrameId: number;
    
    let mouse = { x: -1000, y: -1000 };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Set canvas to full screen
    const setSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init(); // Reinitialize particles on resize to maintain density
    };
    
    setSize();
    window.addEventListener('resize', setSize);

    // Particle class
    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;

      constructor() {
        this.x = Math.random() * window.innerWidth;
        this.y = Math.random() * window.innerHeight;
        // Slow, elegant movement
        this.vx = (Math.random() - 0.5) * 0.6;
        this.vy = (Math.random() - 0.5) * 0.6;
        this.size = Math.random() * 2 + 0.5;
        // UP Telecom Colors: 230,0,0 (Red) and 0,85,255 (Blue)
        this.color = Math.random() > 0.5 ? '230, 0, 0' : '0, 85, 255';
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off walls
        if (this.x < 0 || this.x > window.innerWidth) this.vx = -this.vx;
        if (this.y < 0 || this.y > window.innerHeight) this.vy = -this.vy;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.color}, 0.8)`;
        ctx.fill();
        
        // Add a soft glow
        ctx.shadowBlur = 10;
        ctx.shadowColor = `rgba(${this.color}, 1)`;
      }
    }

    const init = () => {
      particlesArray = [];
      // Adjust density based on screen size (less dense on mobile)
      const density = window.innerWidth < 768 ? 20000 : 12000;
      const numberOfParticles = Math.min(Math.floor((canvas.width * canvas.height) / density), 150); // Cap at 150 for performance
      
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    };

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      
      // Clear with a very slight trailing effect (optional, set to clearRect for clean look)
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Reset shadow for lines
      ctx.shadowBlur = 0;

      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();

        // Check distance to mouse for interactive lines
        const dxMouse = particlesArray[i].x - mouse.x;
        const dyMouse = particlesArray[i].y - mouse.y;
        const distanceMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

        if (distanceMouse < 180) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(${particlesArray[i].color}, ${0.5 * (1 - distanceMouse / 180)})`;
          ctx.lineWidth = 1.5;
          ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
          
          // Slight parallax pull towards mouse
          particlesArray[i].x -= dxMouse * 0.005;
          particlesArray[i].y -= dyMouse * 0.005;
        }

        // Draw lines between particles
        for (let j = i; j < particlesArray.length; j++) {
          const dx = particlesArray[i].x - particlesArray[j].x;
          const dy = particlesArray[i].y - particlesArray[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.beginPath();
            // Mix opacity based on distance
            ctx.strokeStyle = `rgba(${particlesArray[i].color}, ${0.2 * (1 - distance / 120)})`;
            ctx.lineWidth = 1;
            ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
            ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
            ctx.stroke();
          }
        }
      }
    };

    init();
    animate();

    return () => {
      window.removeEventListener('resize', setSize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[5] opacity-60"
    />
  );
}
