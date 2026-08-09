export default function Stats() {
  return (
    <div style={{ background: "var(--surface-alt)", borderBottom: "1px solid rgba(0,0,0,0.05)" }}>
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div>
          <h3 className="text-4xl font-bold text-[var(--brand-blue)] mb-2">99.9%</h3>
          <p className="text-sm font-medium text-[var(--text-muted)]">Uptime garantido</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold text-[var(--brand-blue)] mb-2">100%</h3>
          <p className="text-sm font-medium text-[var(--text-muted)]">Fibra óptica</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold text-[var(--brand-blue)] mb-2">24/7</h3>
          <p className="text-sm font-medium text-[var(--text-muted)]">Suporte local</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold text-[var(--brand-blue)] mb-2">Zero</h3>
          <p className="text-sm font-medium text-[var(--text-muted)]">Franquia de dados</p>
        </div>
      </div>
    </div>
  );
}
