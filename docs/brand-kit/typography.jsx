// Typography pairings — three explorations.

const TYPE_SETS = {
  heritage: {
    id: "heritage",
    name: "Heritage",
    blurb: "Closest to today's site. Stately serif headlines, warm sans body.",
    display: { family: "'Playfair Display', serif", weights: "400 / 600 / 700", url: "Playfair+Display:wght@400;500;600;700;800" },
    body: { family: "'Source Sans 3', sans-serif", weights: "400 / 500 / 600", url: "Source+Sans+3:wght@400;500;600;700" },
    mono: { family: "'JetBrains Mono', monospace", weights: "400 / 500", url: "JetBrains+Mono:wght@400;500" },
  },
  modern: {
    id: "modern",
    name: "Modern",
    blurb: "One family, doing it all. Clean and contemporary — works hardest on screen.",
    display: { family: "'Manrope', sans-serif", weights: "400 / 600 / 800", url: "Manrope:wght@400;500;600;700;800" },
    body: { family: "'Manrope', sans-serif", weights: "400 / 500 / 600", url: "Manrope:wght@400;500;600;700;800" },
    mono: { family: "'JetBrains Mono', monospace", weights: "400 / 500", url: "JetBrains+Mono:wght@400;500" },
  },
  sanctuary: {
    id: "sanctuary",
    name: "Sanctuary",
    blurb: "Most traditional. Old-style book serif paired with a quiet neo-grotesque.",
    display: { family: "'EB Garamond', serif", weights: "400 / 500 / 700", url: "EB+Garamond:wght@400;500;600;700" },
    body: { family: "'DM Sans', sans-serif", weights: "400 / 500 / 600", url: "DM+Sans:wght@400;500;600;700" },
    mono: { family: "'JetBrains Mono', monospace", weights: "400 / 500", url: "JetBrains+Mono:wght@400;500" },
  },
};

const TypeCard = ({ set, active }) => (
  <div style={{
    width: 560,
    padding: "32px",
    background: "var(--paper)",
    border: active ? "2px solid var(--brand-green)" : "1px solid #E5E1D6",
    display: "flex", flexDirection: "column", gap: 20,
    fontFamily: set.body.family,
  }}>
    <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
      <div style={{ fontFamily: set.display.family, fontSize: 28, fontWeight: 600, color: "var(--ink)" }}>
        {set.name}
      </div>
      {active && (
        <div style={{
          fontFamily: "var(--brand-mono)",
          fontSize: 10, letterSpacing: "0.18em",
          padding: "4px 10px",
          background: "var(--brand-green)", color: "var(--paper)",
        }}>
          ACTIVE
        </div>
      )}
    </div>
    <div style={{ fontSize: 14, color: "var(--ink-soft)", maxWidth: 440 }}>{set.blurb}</div>

    {/* Display specimen */}
    <div style={{ borderTop: "1px solid #E5E1D6", paddingTop: 18 }}>
      <div style={{ fontFamily: "var(--brand-mono)", fontSize: 10, letterSpacing: "0.18em", color: "var(--ink-soft)" }}>
        DISPLAY · {set.display.family.split(",")[0].replace(/'/g, "")}
      </div>
      <div style={{ fontFamily: set.display.family, fontSize: 64, lineHeight: 1.0, fontWeight: 600, color: "var(--brand-green)", marginTop: 6, letterSpacing: "-0.01em" }}>
        Grace &<br/>community.
      </div>
      <div style={{ fontFamily: "var(--brand-mono)", fontSize: 11, color: "var(--ink-soft)", marginTop: 10 }}>
        Weights: {set.display.weights}
      </div>
    </div>

    {/* Body specimen */}
    <div style={{ borderTop: "1px solid #E5E1D6", paddingTop: 18 }}>
      <div style={{ fontFamily: "var(--brand-mono)", fontSize: 10, letterSpacing: "0.18em", color: "var(--ink-soft)" }}>
        BODY · {set.body.family.split(",")[0].replace(/'/g, "")}
      </div>
      <div style={{ fontFamily: set.body.family, fontSize: 16, lineHeight: 1.55, color: "var(--ink)", marginTop: 8 }}>
        We are an everyday church for everyday people, gathering each week
        to know Jesus and to make Him known. You're welcome here, exactly as you are.
      </div>
      <div style={{ fontFamily: "var(--brand-mono)", fontSize: 11, color: "var(--ink-soft)", marginTop: 10 }}>
        Weights: {set.body.weights}
      </div>
    </div>

    {/* Alphabet */}
    <div style={{ borderTop: "1px solid #E5E1D6", paddingTop: 14 }}>
      <div style={{ fontFamily: set.display.family, fontSize: 18, color: "var(--ink)", lineHeight: 1.4, letterSpacing: "0.02em" }}>
        ABCDEFGHIJKLMNOPQRSTUVWXYZ<br/>
        abcdefghijklmnopqrstuvwxyz 0123456789
      </div>
    </div>
  </div>
);

Object.assign(window, { TYPE_SETS, TypeCard });
