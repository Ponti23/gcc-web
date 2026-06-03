// Merch mockups — t-shirt + tote, front/back, two colorways each.
// Pure SVG, no external assets.

const TShirt = ({ shirtColor = "#1F3D2A", inkColor = "#F8F5EE", children, label = "" }) => (
  <div style={{ display: "flex", flexDirection: "column", gap: 10, alignItems: "center" }}>
    <div style={{ position: "relative", width: 360, height: 420 }}>
      <svg viewBox="0 0 360 420" width="360" height="420" style={{ position: "absolute", inset: 0 }}>
        {/* shirt body */}
        <path
          d="M 70 70 L 130 40 C 140 70, 220 70, 230 40 L 290 70 L 330 130 L 280 165 L 280 380 L 80 380 L 80 165 L 30 130 Z"
          fill={shirtColor}
          stroke="rgba(0,0,0,0.18)"
          strokeWidth="1"
        />
        {/* collar */}
        <path
          d="M 130 40 C 140 70, 220 70, 230 40 C 215 50, 200 56, 180 56 C 160 56, 145 50, 130 40 Z"
          fill="rgba(0,0,0,0.25)"
        />
        {/* fold shadow */}
        <path d="M 80 165 L 80 380 L 88 380 L 88 168 Z" fill="rgba(0,0,0,0.12)" />
        <path d="M 280 165 L 280 380 L 272 380 L 272 168 Z" fill="rgba(255,255,255,0.05)" />
      </svg>
      <div style={{
        position: "absolute",
        top: 110, left: 80, width: 200, height: 230,
        display: "flex", alignItems: "center", justifyContent: "center",
        color: inkColor,
      }}>
        {children}
      </div>
    </div>
    <div style={{ fontFamily: "var(--brand-mono)", fontSize: 10, letterSpacing: "0.18em", color: "var(--ink-soft)" }}>
      {label}
    </div>
  </div>
);

const Tote = ({ bagColor = "#E8DDC8", inkColor = "#1F3D2A", children, label = "" }) => (
  <div style={{ display: "flex", flexDirection: "column", gap: 10, alignItems: "center" }}>
    <div style={{ position: "relative", width: 320, height: 380 }}>
      <svg viewBox="0 0 320 380" width="320" height="380" style={{ position: "absolute", inset: 0 }}>
        {/* handles */}
        <path d="M 95 50 C 95 10, 145 10, 145 50" fill="none" stroke={inkColor} strokeWidth="6" opacity="0.7"/>
        <path d="M 175 50 C 175 10, 225 10, 225 50" fill="none" stroke={inkColor} strokeWidth="6" opacity="0.7"/>
        {/* bag body */}
        <rect x="50" y="50" width="220" height="290" fill={bagColor} stroke="rgba(0,0,0,0.18)" strokeWidth="1"/>
        {/* canvas texture lines */}
        <g opacity="0.06">
          {Array.from({length: 30}).map((_, i) => (
            <line key={i} x1="50" y1={55 + i*10} x2="270" y2={55 + i*10} stroke="#000" strokeWidth="0.5"/>
          ))}
        </g>
        {/* fold shadow */}
        <rect x="50" y="50" width="6" height="290" fill="rgba(0,0,0,0.08)"/>
      </svg>
      <div style={{
        position: "absolute",
        top: 100, left: 50, width: 220, height: 200,
        display: "flex", alignItems: "center", justifyContent: "center",
        color: inkColor,
      }}>
        {children}
      </div>
    </div>
    <div style={{ fontFamily: "var(--brand-mono)", fontSize: 10, letterSpacing: "0.18em", color: "var(--ink-soft)" }}>
      {label}
    </div>
  </div>
);

const Hoodie = ({ shirtColor = "#1A1F1B", inkColor = "#F8F5EE", children, label = "" }) => (
  <div style={{ display: "flex", flexDirection: "column", gap: 10, alignItems: "center" }}>
    <div style={{ position: "relative", width: 360, height: 420 }}>
      <svg viewBox="0 0 360 420" width="360" height="420" style={{ position: "absolute", inset: 0 }}>
        <path
          d="M 60 90 L 120 50 C 130 40, 230 40, 240 50 L 300 90 L 340 150 L 290 180 L 290 390 L 70 390 L 70 180 L 20 150 Z"
          fill={shirtColor}
          stroke="rgba(0,0,0,0.2)"
          strokeWidth="1"
        />
        {/* hood */}
        <path d="M 120 50 C 130 80, 230 80, 240 50 C 220 95, 140 95, 120 50 Z" fill={shirtColor} stroke="rgba(0,0,0,0.3)" strokeWidth="1"/>
        {/* drawstrings */}
        <line x1="160" y1="80" x2="158" y2="160" stroke={inkColor} strokeWidth="2" opacity="0.5"/>
        <line x1="200" y1="80" x2="202" y2="160" stroke={inkColor} strokeWidth="2" opacity="0.5"/>
        {/* pocket */}
        <path d="M 110 250 L 250 250 L 240 320 L 120 320 Z" fill="none" stroke={inkColor} strokeWidth="1" opacity="0.25"/>
      </svg>
      <div style={{
        position: "absolute",
        top: 130, left: 80, width: 200, height: 110,
        display: "flex", alignItems: "center", justifyContent: "center",
        color: inkColor,
      }}>
        {children}
      </div>
    </div>
    <div style={{ fontFamily: "var(--brand-mono)", fontSize: 10, letterSpacing: "0.18em", color: "var(--ink-soft)" }}>
      {label}
    </div>
  </div>
);

Object.assign(window, { TShirt, Tote, Hoodie });
