export function CleanBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[5] overflow-hidden">
      {/* Subtle moving grid */}
      <div 
        className="absolute inset-0 animate-grid-flow opacity-30"
        style={{
          backgroundSize: '60px 60px',
          backgroundImage: 'linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)'
        }}
      />
      
      {/* Radial fade to make the grid disappear at the edges */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#0b1220_80%)]" />

      {/* Soft gradient glows (Static, zero lag) */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[var(--brand-primary)]/10 blur-[150px]" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[var(--brand-blue)]/10 blur-[150px]" />
    </div>
  );
}
