// Pattern / texture — repeating leaf pattern usable as background.

const LeafPattern = ({ color = "var(--brand-green)", bg = "transparent", opacity = 0.12, size = 80, density = 1 }) => {
  const id = `leaf-pat-${Math.random().toString(36).slice(2, 8)}`;
  return (
    <svg width="100%" height="100%" style={{ display: "block", background: bg }}>
      <defs>
        <pattern id={id} x="0" y="0" width={size * density} height={size * density} patternUnits="userSpaceOnUse" patternTransform="rotate(15)">
          <g transform={`translate(${size*density/2} ${size*density/2}) scale(${size/120})`} opacity={opacity}>
            <path d="M -28 28 C -2 22, 14 6, 8 -24 C -16 -20, -34 -2, -38 24 C -34 28, -32 28, -28 28 Z" fill={color}/>
            <path d="M 28 28 C 2 22, -14 6, -8 -24 C 16 -20, 34 -2, 38 24 C 34 28, 32 28, 28 28 Z" fill={color} opacity="0.85"/>
          </g>
          <g transform={`translate(0 0) scale(${size/200})`} opacity={opacity * 0.6}>
            <path d="M 28 28 C 2 22, -14 6, -8 -24 C 16 -20, 34 -2, 38 24 C 34 28, 32 28, 28 28 Z" fill={color}/>
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`}/>
    </svg>
  );
};

const PatternSection = () => (
  <DCArtboard id="pattern" label="Leaf pattern" width={1320} height={520}>
    <div style={{ width: 1320, height: 520, background: "var(--paper)", padding: 56, fontFamily: "var(--brand-body)", boxSizing: "border-box", display: "grid", gridTemplateColumns: "1fr 2fr", gap: 48 }}>
      <div>
        <div style={{ fontFamily: "var(--brand-mono)", fontSize: 11, letterSpacing: "0.22em", color: "var(--ink-soft)" }}>10 / PATTERN</div>
        <div style={{ fontFamily: "var(--brand-display)", fontSize: 44, lineHeight: 1.0, fontWeight: 600, color: "var(--brand-deep)", marginTop: 14, letterSpacing: "-0.01em" }}>
          A quiet<br/>repeating<br/>leaf.
        </div>
        <div style={{ fontSize: 14, lineHeight: 1.6, color: "var(--ink)", marginTop: 18, maxWidth: 320 }}>
          For tote linings, gift-card backs, title-slide backdrops, social-post fills. Keep it under 15% opacity so it never competes with the mark.
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 14 }}>
        <div style={{ position: "relative", height: 380, background: "var(--paper)", border: "1px solid var(--surface)", overflow: "hidden" }}>
          <LeafPattern color="var(--brand-green)" opacity={0.15} size={70}/>
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 8 }}>
            <GCCMark size={120} color="var(--brand-green)"/>
            <div style={{ fontFamily: "var(--brand-mono)", fontSize: 9, letterSpacing: "0.18em", color: "var(--ink-soft)" }}>ON PAPER · 15%</div>
          </div>
        </div>
        <div style={{ position: "relative", height: 380, background: "var(--brand-green)", overflow: "hidden" }}>
          <LeafPattern color="var(--paper)" opacity={0.12} size={70}/>
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 8 }}>
            <GCCMark size={120} color="var(--paper)"/>
            <div style={{ fontFamily: "var(--brand-mono)", fontSize: 9, letterSpacing: "0.18em", color: "var(--paper)", opacity: 0.7 }}>ON GREEN · 12%</div>
          </div>
        </div>
        <div style={{ position: "relative", height: 380, background: "var(--brand-deep)", overflow: "hidden" }}>
          <LeafPattern color="var(--brand-accent)" opacity={0.25} size={70}/>
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 8 }}>
            <GCCMark size={120} color="var(--paper)"/>
            <div style={{ fontFamily: "var(--brand-mono)", fontSize: 9, letterSpacing: "0.18em", color: "var(--paper)", opacity: 0.7 }}>ACCENT · 25%</div>
          </div>
        </div>
      </div>
    </div>
  </DCArtboard>
);

Object.assign(window, { LeafPattern, PatternSection });
