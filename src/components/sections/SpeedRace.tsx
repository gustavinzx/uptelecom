import { useState, useRef } from "react";
import { Zap } from "lucide-react";

const connections = [
  {
    id: "satelite",
    label: "Satélite",
    sublabel: "Ex: Starlink",
    latencyMs: 600,
    color: "#94a3b8",
    glowColor: "transparent",
    isFibra: false,
  },
  {
    id: "radio",
    label: "Rádio / DSL",
    sublabel: "Conexão convencional",
    latencyMs: 40,
    color: "#f59e0b",
    glowColor: "transparent",
    isFibra: false,
  },
  {
    id: "fibra",
    label: "UP Fibra Óptica",
    sublabel: "Velocidade da luz",
    latencyMs: 2,
    color: "var(--brand-primary)",
    glowColor: "var(--brand-primary)",
    isFibra: true,
  },
];

// Visual duration proportional to real latency, with a scale factor so the fiber
// pulse is still visible (not instantaneous) but clearly wins the race.
const SCALE = 3.5;
const BASE = 300;
const getDuration = (ms: number) => BASE + ms * SCALE;

export default function SpeedRace() {
  const [racing, setRacing] = useState(false);
  const [finished, setFinished] = useState<string[]>([]);
  const [widths, setWidths] = useState<Record<string, string>>({});
  const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  const startRace = () => {
    // Clear any lingering timeouts
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];

    setFinished([]);
    // Reset widths to 0 without transition, then start racing
    setWidths({ satelite: "0%", radio: "0%", fibra: "0%" });
    setRacing(true);

    // Small delay so the 0% reset paints before we kick off the animation
    const kickoff = setTimeout(() => {
      setWidths({ satelite: "100%", radio: "100%", fibra: "100%" });

      connections.forEach((c) => {
        const t = setTimeout(() => {
          setFinished((prev) => [...prev, c.id]);
          if (c.id === "satelite") setRacing(false);
        }, getDuration(c.latencyMs));
        timeoutsRef.current.push(t);
      });
    }, 80);

    timeoutsRef.current.push(kickoff);
  };

  const allFinished = finished.length === connections.length;

  // Sorted finish order for podium display
  const finishOrder = [...connections].sort((a, b) => a.latencyMs - b.latencyMs);

  return (
    <section className="py-20 bg-[var(--surface-dark)] overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[var(--brand-primary)]/20 text-[var(--brand-primary)] px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-widest mb-6">
            <Zap size={14} fill="currentColor" />
            Demonstração interativa
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight">
            Veja a diferença<br />
            <span className="text-[var(--brand-primary)]">na prática</span>
          </h2>
          <p className="text-gray-400 text-lg font-medium max-w-xl mx-auto">
            Clique em Simular e observe como cada tipo de conexão se comporta em tempo real.
          </p>
        </div>

        {/* Race Track */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-10">

          {/* Tracks */}
          <div className="space-y-8 mb-10">
            {connections.map((c, i) => {
              const isFinished = finished.includes(c.id);
              const position = finished.indexOf(c.id) + 1;
              const duration = getDuration(c.latencyMs);
              const hasReset = widths[c.id] === "0%";

              return (
                <div key={c.id}>
                  {/* Track labels */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      {/* Position badge */}
                      <div className={`
                        w-7 h-7 rounded-full flex items-center justify-center text-xs font-black transition-all duration-300
                        ${isFinished
                          ? i === finishOrder.findIndex(f => f.id === c.id) && position === 1
                            ? "bg-[var(--brand-primary)] text-white scale-110"
                            : "bg-white/10 text-gray-400"
                          : "bg-white/5 text-gray-600"
                        }
                      `}>
                        {isFinished ? position : i + 1}
                      </div>
                      <div>
                        <p className={`font-bold text-base ${c.isFibra ? "text-white" : "text-gray-300"}`}>
                          {c.label}
                        </p>
                        <p className="text-xs text-gray-500 font-medium">{c.sublabel}</p>
                      </div>
                    </div>

                    {/* Latency revealed on finish */}
                    <div className={`transition-all duration-500 ${isFinished ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"}`}>
                      <span className={`font-mono text-lg font-black ${c.isFibra ? "text-[var(--brand-primary)]" : "text-gray-400"}`}>
                        {c.latencyMs}ms
                      </span>
                    </div>
                  </div>

                  {/* Track bar */}
                  <div className="h-3 rounded-full bg-white/5 border border-white/5 overflow-hidden relative">
                    {/* Pulse dot that travels along the track */}
                    <div
                      className="absolute inset-y-0 left-0 rounded-full"
                      style={{
                        background: c.isFibra
                          ? `linear-gradient(90deg, ${c.color}88, ${c.color})`
                          : c.color,
                        width: hasReset ? "0%" : (racing || isFinished ? "100%" : "0%"),
                        transition: hasReset
                          ? "none"
                          : `width ${duration}ms cubic-bezier(0.4, 0, 0.2, 1)`,
                        boxShadow: c.isFibra && (racing || isFinished)
                          ? `0 0 16px 2px ${c.glowColor}, 0 0 6px ${c.glowColor}`
                          : "none",
                      }}
                    />
                    {/* Leading photon dot */}
                    {(racing || isFinished) && !hasReset && (
                      <div
                        className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full -ml-2"
                        style={{
                          background: c.color,
                          left: isFinished ? "calc(100%)" : undefined,
                          transition: hasReset
                            ? "none"
                            : `left ${duration}ms cubic-bezier(0.4, 0, 0.2, 1)`,
                          boxShadow: c.isFibra
                            ? `0 0 10px 4px ${c.glowColor}`
                            : `0 0 6px 2px ${c.color}88`,
                        }}
                      />
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA button */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <button
              onClick={startRace}
              disabled={racing}
              className={`
                flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-lg uppercase tracking-wide transition-all duration-300
                ${racing
                  ? "bg-white/10 text-gray-500 cursor-not-allowed"
                  : "bg-[var(--brand-primary)] text-white hover:bg-[var(--brand-primary-hover)] hover:shadow-lg hover:shadow-[var(--brand-primary)]/30 hover:-translate-y-0.5 active:translate-y-0"
                }
              `}
            >
              <Zap size={20} fill={racing ? "currentColor" : "currentColor"} className={racing ? "animate-pulse" : ""} />
              {racing ? "Simulando..." : finished.length > 0 ? "Simular novamente" : "Simular corrida"}
            </button>

            {/* Result callout */}
            <div className={`transition-all duration-700 ${allFinished ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"}`}>
              <p className="text-sm text-gray-400 font-mono text-center sm:text-right max-w-xs leading-relaxed">
                A luz na fibra viaja a ~200.000 km/s —<br />
                <span className="text-[var(--brand-primary)] font-bold">é por isso que a UP Fibra chega primeiro.</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom context strip */}
        <div className={`mt-6 grid grid-cols-3 gap-4 transition-all duration-500 ${allFinished ? "opacity-100" : "opacity-0"}`}>
          {finishOrder.map((c, i) => (
            <div key={c.id} className={`text-center p-4 rounded-xl border ${c.isFibra ? "border-[var(--brand-primary)]/30 bg-[var(--brand-primary)]/10" : "border-white/5 bg-white/5"}`}>
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                {i === 0 ? "🥇 1º lugar" : i === 1 ? "🥈 2º lugar" : "🥉 3º lugar"}
              </p>
              <p className={`font-bold text-sm ${c.isFibra ? "text-[var(--brand-primary)]" : "text-gray-400"}`}>{c.label}</p>
              <p className={`font-mono text-2xl font-black ${c.isFibra ? "text-white" : "text-gray-500"}`}>{c.latencyMs}ms</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
