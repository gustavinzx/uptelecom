type DarkImageOverlayProps = {
  fadeHeight?: string;       // altura do fade topo/base em telas grandes
  fadeHeightMobile?: string; // altura do fade em telas pequenas
  multiplyOpacity?: number;  // opacidade da névoa mix-blend-multiply
  vignetteOpacity?: number;  // opacidade da vinheta radial central
};

export function DarkImageOverlay({
  fadeHeight = "600px",
  fadeHeightMobile = "300px",
  multiplyOpacity = 0.6,
  vignetteOpacity = 0.5,
}: DarkImageOverlayProps) {
  return (
    <>
      {/* Névoa suave com mix-blend-mode para escurecimento orgânico */}
      <div
        className="absolute inset-0 bg-[#0b1220] mix-blend-multiply z-0 pointer-events-none"
        style={{ opacity: multiplyOpacity }}
      />

      {/* Vinheta radial suave para focar no centro */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse farthest-corner at center, transparent 0%, rgba(11,18,32,0.4) 60%, #0b1220 100%)",
          opacity: vignetteOpacity,
        }}
      />

      {/* Fade suave no topo — múltiplos stops para eliminar linha de corte */}
      <div
        className="absolute top-0 inset-x-0 z-0 pointer-events-none lg:hidden"
        style={{
          height: fadeHeightMobile,
          background:
            "linear-gradient(to bottom, #0b1220 0%, rgba(11,18,32,0.85) 25%, rgba(11,18,32,0.5) 55%, rgba(11,18,32,0.15) 80%, transparent 100%)",
        }}
      />
      <div
        className="absolute top-0 inset-x-0 z-0 pointer-events-none hidden lg:block"
        style={{
          height: fadeHeight,
          background:
            "linear-gradient(to bottom, #0b1220 0%, rgba(11,18,32,0.85) 25%, rgba(11,18,32,0.5) 55%, rgba(11,18,32,0.15) 80%, transparent 100%)",
        }}
      />

      {/* Fade suave na base */}
      <div
        className="absolute bottom-0 inset-x-0 z-0 pointer-events-none lg:hidden"
        style={{
          height: fadeHeightMobile,
          background:
            "linear-gradient(to top, #0b1220 0%, rgba(11,18,32,0.85) 25%, rgba(11,18,32,0.5) 55%, rgba(11,18,32,0.15) 80%, transparent 100%)",
        }}
      />
      <div
        className="absolute bottom-0 inset-x-0 z-0 pointer-events-none hidden lg:block"
        style={{
          height: fadeHeight,
          background:
            "linear-gradient(to top, #0b1220 0%, rgba(11,18,32,0.85) 25%, rgba(11,18,32,0.5) 55%, rgba(11,18,32,0.15) 80%, transparent 100%)",
        }}
      />
    </>
  );
}
