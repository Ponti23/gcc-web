// Brand color palettes — three explorations rooted in the existing green.

const PALETTES = {
  heritage: {
    id: "heritage",
    name: "Heritage Forest",
    blurb: "Closest to today's site. Deep forest, sage, cream, with a warm clay accent.",
    colors: [
      { name: "Forest", hex: "#2D5A3D", role: "Primary", on: "#F8F5EE" },
      { name: "Pine", hex: "#1F3D2A", role: "Deep", on: "#F8F5EE" },
      { name: "Sage", hex: "#D5DCD0", role: "Surface", on: "#1F3D2A" },
      { name: "Cream", hex: "#F8F5EE", role: "Paper", on: "#1F3D2A" },
      { name: "Clay", hex: "#C97B5C", role: "Accent", on: "#F8F5EE" },
      { name: "Ink", hex: "#1A1F1B", role: "Text", on: "#F8F5EE" },
    ],
  },
  bloom: {
    id: "bloom",
    name: "Garden Bloom",
    blurb: "Lighter, more pastoral. Olive-leaning green with sand and dusty rose.",
    colors: [
      { name: "Olive", hex: "#6B7F3F", role: "Primary", on: "#FAF8F2" },
      { name: "Moss", hex: "#243B26", role: "Deep", on: "#FAF8F2" },
      { name: "Linen", hex: "#EDE5D2", role: "Surface", on: "#243B26" },
      { name: "Paper", hex: "#FAF8F2", role: "Paper", on: "#243B26" },
      { name: "Rose", hex: "#C58F8A", role: "Accent", on: "#FAF8F2" },
      { name: "Ink", hex: "#221E18", role: "Text", on: "#FAF8F2" },
    ],
  },
  stillwater: {
    id: "stillwater",
    name: "Stillwater",
    blurb: "Quieter, more reverent. Teal-green, mist, and a soft brass accent.",
    colors: [
      { name: "Cypress", hex: "#1F4A3D", role: "Primary", on: "#FFFCF5" },
      { name: "Slate", hex: "#2A3A33", role: "Deep", on: "#FFFCF5" },
      { name: "Mist", hex: "#E8EDE6", role: "Surface", on: "#2A3A33" },
      { name: "Vellum", hex: "#FFFCF5", role: "Paper", on: "#2A3A33" },
      { name: "Brass", hex: "#C9A961", role: "Accent", on: "#2A3A33" },
      { name: "Ink", hex: "#15201A", role: "Text", on: "#FFFCF5" },
    ],
  },
};

const PaletteCard = ({ palette, active }) => (
  <div
    style={{
      width: 560,
      padding: "32px 32px 28px",
      background: "var(--paper)",
      border: active ? "2px solid var(--brand-green)" : "1px solid #E5E1D6",
      borderRadius: 0,
      boxShadow: active ? "0 1px 0 var(--brand-green)" : "none",
      display: "flex",
      flexDirection: "column",
      gap: 20,
    }}
  >
    <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
      <div>
        <div style={{ fontFamily: "var(--brand-display)", fontSize: 28, fontWeight: 600, color: "var(--ink)" }}>
          {palette.name}
        </div>
        <div style={{ fontFamily: "var(--brand-body)", fontSize: 14, color: "var(--ink-soft)", marginTop: 6, maxWidth: 440 }}>
          {palette.blurb}
        </div>
      </div>
      {active && (
        <div style={{
          fontFamily: "var(--brand-mono)",
          fontSize: 10,
          letterSpacing: "0.18em",
          padding: "4px 10px",
          background: "var(--brand-green)",
          color: "var(--paper)",
        }}>
          ACTIVE
        </div>
      )}
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gridTemplateRows: "120px 80px", gap: 4 }}>
      {/* Big primary */}
      <div style={{
        gridRow: "span 2",
        background: palette.colors[0].hex,
        color: palette.colors[0].on,
        padding: 18,
        display: "flex", flexDirection: "column", justifyContent: "space-between",
      }}>
        <div style={{ fontFamily: "var(--brand-mono)", fontSize: 10, letterSpacing: "0.18em", opacity: 0.7 }}>
          {palette.colors[0].role.toUpperCase()}
        </div>
        <div>
          <div style={{ fontFamily: "var(--brand-display)", fontSize: 22, fontWeight: 600 }}>{palette.colors[0].name}</div>
          <div style={{ fontFamily: "var(--brand-mono)", fontSize: 12, opacity: 0.85, marginTop: 2 }}>{palette.colors[0].hex}</div>
        </div>
      </div>
      {palette.colors.slice(1).map((c) => (
        <div key={c.name} style={{
          background: c.hex, color: c.on, padding: 12,
          display: "flex", flexDirection: "column", justifyContent: "space-between",
        }}>
          <div style={{ fontFamily: "var(--brand-mono)", fontSize: 9, letterSpacing: "0.16em", opacity: 0.7 }}>
            {c.role.toUpperCase()}
          </div>
          <div>
            <div style={{ fontFamily: "var(--brand-display)", fontSize: 14, fontWeight: 600 }}>{c.name}</div>
            <div style={{ fontFamily: "var(--brand-mono)", fontSize: 10, opacity: 0.85 }}>{c.hex}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

Object.assign(window, { PALETTES, PaletteCard });
