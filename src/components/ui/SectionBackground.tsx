export type BackgroundVariant = "grid" | "map" | "waves" | "dots" | "none" | "aurora";

export function SectionBackground({ variant = "grid" }: { variant?: BackgroundVariant }) {
  if (variant === "none") return null;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      
      {/* --- VARIANTS --- */}
      {variant === "grid" && (
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundSize: '60px 60px',
            backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)',
            maskImage: 'radial-gradient(ellipse at center, black 0%, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black 0%, transparent 80%)'
          }}
        />
      )}

      {variant === "dots" && (
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
            maskImage: 'radial-gradient(ellipse at center, black 0%, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black 0%, transparent 80%)'
          }}
        />
      )}

      {variant === "map" && (
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundSize: '80px 80px',
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.01) 2px, transparent 2px), linear-gradient(90deg, rgba(255,255,255,0.01) 2px, transparent 2px)'
          }}
        />
      )}

      {variant === "waves" && (
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(ellipse at center, rgba(255,255,255,0.05) 0%, transparent 70%)',
            backgroundSize: '100% 100%'
          }}
        />
      )}

      {variant === "aurora" && (
        <div className="absolute inset-0 opacity-30 mix-blend-screen">
          <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-[var(--brand-primary)] blur-[120px] mix-blend-screen animate-pulse motion-reduce:animate-none opacity-50" style={{ animationDuration: '8s' }} />
          <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-[var(--brand-blue)] blur-[120px] mix-blend-screen animate-pulse motion-reduce:animate-none opacity-50" style={{ animationDuration: '10s', animationDelay: '2s' }} />
        </div>
      )}

      {/* Local Glows (Static) to all except Aurora */}
      {variant !== "aurora" && (
        <>
          <div className="absolute top-0 left-0 w-1/3 h-1/3 rounded-full bg-[var(--brand-primary)]/5 blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-1/3 h-1/3 rounded-full bg-[var(--brand-blue)]/5 blur-[120px]" />
        </>
      )}
    </div>
  );
}
