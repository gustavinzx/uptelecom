export function FiberMeshBackground() {
  // 5 paths curvos cruzando a tela em ângulos variados
  const paths = [
    "M -50 100 C 200 50, 400 200, 700 80 S 1100 150, 1400 60",
    "M -50 300 C 250 350, 500 200, 800 320 S 1200 250, 1450 350",
    "M -50 500 C 300 450, 550 550, 850 480 S 1250 520, 1500 460",
    "M -50 200 C 150 250, 300 100, 600 150 S 1000 250, 1400 180",
    "M -50 400 C 200 380, 450 450, 750 350 S 1150 420, 1450 400",
  ];

  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none opacity-40 z-0"
      viewBox="0 0 1400 600"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      {paths.map((d, i) => (
        <g key={i}>
          {/* linha do "cabo", quase invisível */}
          <path d={d} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1.5" />
          
          {/* pulso de luz percorrendo o caminho - com motion-reduce para desativar a animação */}
          <circle 
            r="3" 
            fill={i % 2 === 0 ? "var(--brand-blue)" : "var(--brand-primary)"}
            className="motion-reduce:hidden"
            style={{
              filter: `drop-shadow(0 0 6px ${i % 2 === 0 ? "var(--brand-blue)" : "var(--brand-primary)"})`
            }}
          >
            <animateMotion
              dur={`${4 + i * 1.3}s`}
              repeatCount="indefinite"
              path={d}
              begin={`${i * 0.8}s`}
            />
            <animate
              attributeName="opacity"
              values="0;1;1;0"
              keyTimes="0;0.1;0.9;1"
              dur={`${4 + i * 1.3}s`}
              repeatCount="indefinite"
              begin={`${i * 0.8}s`}
            />
          </circle>
        </g>
      ))}
    </svg>
  );
}
