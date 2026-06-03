// Email signature, scripture template, accessibility matrix, downloads.

const EmailSignature = () => (
  <DCArtboard id="email-sig" label="Email signature" width={760} height={420}>
    <div style={{ width: 760, height: 420, background: "var(--paper)", padding: 40, fontFamily: "var(--brand-body)", boxSizing: "border-box" }}>
      <div style={{ fontFamily: "var(--brand-mono)", fontSize: 11, letterSpacing: "0.22em", color: "var(--ink-soft)" }}>15 / EMAIL SIGNATURE</div>
      <div style={{ fontFamily: "var(--brand-display)", fontSize: 26, fontWeight: 600, color: "var(--brand-deep)", marginTop: 6, letterSpacing: "-0.01em" }}>
        Drop this into Gmail.
      </div>
      <div style={{ marginTop: 28, padding: 20, background: "#fff", border: "1px solid var(--surface)" }}>
        <table cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse", fontFamily: "Arial, sans-serif" }}>
          <tbody>
            <tr>
              <td style={{ paddingRight: 18, borderRight: "2px solid var(--brand-green)", verticalAlign: "top" }}>
                <GCCMark size={80} color="var(--brand-green)"/>
              </td>
              <td style={{ paddingLeft: 18, verticalAlign: "top" }}>
                <div style={{ fontFamily: "Georgia, serif", fontSize: 16, fontWeight: 700, color: "#1F3D2A" }}>Dawson Smith</div>
                <div style={{ fontSize: 11, color: "#1F3D2A", letterSpacing: "0.1em", marginTop: 2 }}>LEAD PASTOR · GRACE COMMUNITY CHURCH</div>
                <div style={{ fontSize: 12, color: "#444", marginTop: 8, lineHeight: 1.5 }}>
                  dawson@gracecommunity.church · +61 8 9000 0000<br/>
                  <span style={{ color: "var(--brand-green)" }}>gracecommunity.church</span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div style={{ fontFamily: "var(--brand-mono)", fontSize: 9, letterSpacing: "0.18em", color: "var(--ink-soft)", marginTop: 18 }}>
        TABLE-BASED HTML · WORKS IN GMAIL, OUTLOOK, APPLE MAIL
      </div>
    </div>
  </DCArtboard>
);

const ScriptureTemplate = ({ variant = "dark" }) => {
  const dark = variant === "dark";
  return (
    <div style={{ width: 320, height: 320, background: dark ? "var(--brand-deep)" : "var(--paper)", color: dark ? "var(--paper)" : "var(--ink)", position: "relative", overflow: "hidden", padding: 32, boxSizing: "border-box", display: "flex", flexDirection: "column", justifyContent: "center" }}>
      {dark && <LeafPattern color="var(--brand-green)" opacity={0.15} size={50}/>}
      <div style={{ position: "relative" }}>
        <div style={{ fontFamily: "var(--brand-display)", fontSize: 60, lineHeight: 0.2, color: dark ? "var(--brand-green)" : "var(--brand-green)", opacity: 0.6 }}>“</div>
        <div style={{ fontFamily: "var(--brand-display)", fontStyle: "italic", fontSize: 22, lineHeight: 1.25, marginTop: 12, fontWeight: 500 }}>
          Be still, and know that I am God.
        </div>
        <div style={{ fontFamily: "var(--brand-mono)", fontSize: 10, letterSpacing: "0.22em", color: dark ? "var(--brand-green)" : "var(--brand-green)", marginTop: 18 }}>PSALM 46 : 10</div>
        <div style={{ position: "absolute", bottom: -18, right: -10 }}><SingleLeaf size={26} color={dark ? "var(--brand-green)" : "var(--brand-green)"}/></div>
      </div>
    </div>
  );
};

const ScriptureSection = () => (
  <DCArtboard id="scripture" label="Scripture / quote template" width={1320} height={480}>
    <div style={{ width: 1320, height: 480, background: "var(--paper)", padding: 56, fontFamily: "var(--brand-body)", boxSizing: "border-box", display: "grid", gridTemplateColumns: "1fr 2fr", gap: 48, alignItems: "center" }}>
      <div>
        <div style={{ fontFamily: "var(--brand-mono)", fontSize: 11, letterSpacing: "0.22em", color: "var(--ink-soft)" }}>16 / SCRIPTURE</div>
        <div style={{ fontFamily: "var(--brand-display)", fontSize: 44, lineHeight: 1.0, fontWeight: 600, color: "var(--brand-deep)", marginTop: 14, letterSpacing: "-0.01em" }}>
          Verses, three<br/>ways.
        </div>
        <div style={{ fontSize: 14, lineHeight: 1.6, color: "var(--ink)", marginTop: 18, maxWidth: 320 }}>
          A workhorse social layout. Always: italic serif, one verse, mono reference, leaf glyph bottom-right.
        </div>
      </div>
      <div style={{ display: "flex", gap: 16, justifyContent: "flex-end", flexWrap: "wrap" }}>
        <ScriptureTemplate variant="dark"/>
        <ScriptureTemplate variant="light"/>
        <div style={{ width: 320, height: 320, background: "var(--brand-green)", color: "var(--paper)", padding: 32, boxSizing: "border-box", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div style={{ fontFamily: "var(--brand-display)", fontStyle: "italic", fontSize: 22, lineHeight: 1.25, fontWeight: 500 }}>
            Love your neighbour as yourself.
          </div>
          <div style={{ fontFamily: "var(--brand-mono)", fontSize: 10, letterSpacing: "0.22em", marginTop: 18, opacity: 0.85 }}>MARK 12 : 31</div>
          <div style={{ position: "relative", marginTop: 30, display: "flex", justifyContent: "flex-end" }}>
            <SingleLeaf size={28} color="var(--paper)"/>
          </div>
        </div>
      </div>
    </div>
  </DCArtboard>
);

// ---------- Accessibility / WCAG contrast ----------
function relLum(hex) {
  const c = hex.replace("#", "").match(/.{2}/g).map(h => {
    const v = parseInt(h, 16) / 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
}
function contrast(a, b) {
  const la = relLum(a), lb = relLum(b);
  return (Math.max(la, lb) + 0.05) / (Math.min(la, lb) + 0.05);
}
function grade(r) {
  if (r >= 7) return { tag: "AAA", color: "#2D5A3D" };
  if (r >= 4.5) return { tag: "AA", color: "#2D5A3D" };
  if (r >= 3) return { tag: "AA·LG", color: "#C9A961" };
  return { tag: "FAIL", color: "#C97B5C" };
}

const AccessibilitySection = () => {
  const t = React.useContext ? null : null; // we'll read CSS vars directly
  // Build pairs from the live palette
  const [pairs, setPairs] = React.useState([]);
  React.useEffect(() => {
    const getVar = (n) => getComputedStyle(document.documentElement).getPropertyValue(n).trim();
    const colors = {
      Green: getVar("--brand-green"),
      Deep: getVar("--brand-deep"),
      Surface: getVar("--surface"),
      Paper: getVar("--paper"),
      Accent: getVar("--brand-accent"),
      Ink: getVar("--ink"),
    };
    const rows = [
      ["Ink", "Paper"], ["Ink", "Surface"],
      ["Paper", "Green"], ["Paper", "Deep"],
      ["Green", "Paper"], ["Green", "Surface"],
      ["Accent", "Paper"], ["Accent", "Deep"], ["Paper", "Accent"],
    ];
    setPairs(rows.map(([fg, bg]) => ({
      fg, bg, fgHex: colors[fg], bgHex: colors[bg],
      ratio: contrast(colors[fg], colors[bg]),
    })));
    // re-run whenever palette CSS vars change (poll lightly via mutation observer on <html>)
    const obs = new MutationObserver(() => {
      const cs = {
        Green: getVar("--brand-green"),
        Deep: getVar("--brand-deep"),
        Surface: getVar("--surface"),
        Paper: getVar("--paper"),
        Accent: getVar("--brand-accent"),
        Ink: getVar("--ink"),
      };
      setPairs(rows.map(([fg, bg]) => ({
        fg, bg, fgHex: cs[fg], bgHex: cs[bg],
        ratio: contrast(cs[fg], cs[bg]),
      })));
    });
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ["style"] });
    return () => obs.disconnect();
  }, []);

  return (
    <DCArtboard id="accessibility" label="Accessibility / WCAG" width={1320} height={520}>
      <div style={{ width: 1320, height: 520, background: "var(--paper)", padding: 56, fontFamily: "var(--brand-body)", boxSizing: "border-box", display: "grid", gridTemplateColumns: "1fr 2.4fr", gap: 48 }}>
        <div>
          <div style={{ fontFamily: "var(--brand-mono)", fontSize: 11, letterSpacing: "0.22em", color: "var(--ink-soft)" }}>17 / A11Y</div>
          <div style={{ fontFamily: "var(--brand-display)", fontSize: 40, lineHeight: 1.0, fontWeight: 600, color: "var(--brand-deep)", marginTop: 14, letterSpacing: "-0.01em" }}>
            Readable by<br/>everyone.
          </div>
          <div style={{ fontSize: 14, lineHeight: 1.6, color: "var(--ink)", marginTop: 18, maxWidth: 320 }}>
            Live contrast ratios per WCAG 2.2. Toggle the palette in Tweaks to see which combos still pass.
          </div>
          <div style={{ marginTop: 22, display: "flex", flexDirection: "column", gap: 6, fontFamily: "var(--brand-mono)", fontSize: 10, color: "var(--ink-soft)" }}>
            <div><span style={{ color: "#2D5A3D", fontWeight: 700 }}>AAA</span> · ≥ 7.0</div>
            <div><span style={{ color: "#2D5A3D", fontWeight: 700 }}>AA</span> · ≥ 4.5</div>
            <div><span style={{ color: "#C9A961", fontWeight: 700 }}>AA-LG</span> · ≥ 3.0 (large text only)</div>
            <div><span style={{ color: "#C97B5C", fontWeight: 700 }}>FAIL</span> · &lt; 3.0</div>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, alignContent: "start" }}>
          {pairs.map(({ fg, bg, fgHex, bgHex, ratio }, i) => {
            const g = grade(ratio);
            return (
              <div key={i} style={{ background: bgHex, color: fgHex, padding: 16, position: "relative", minHeight: 100, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div style={{ fontFamily: "var(--brand-display)", fontSize: 22, fontWeight: 600, lineHeight: 1.0 }}>
                  Aa
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                  <div style={{ fontFamily: "var(--brand-mono)", fontSize: 9, letterSpacing: "0.14em", opacity: 0.85 }}>
                    {fg.toUpperCase()} / {bg.toUpperCase()}
                  </div>
                  <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                    <div style={{ fontFamily: "var(--brand-mono)", fontSize: 11, fontWeight: 600 }}>{ratio.toFixed(2)}</div>
                    <div style={{ fontFamily: "var(--brand-mono)", fontSize: 8, letterSpacing: "0.18em", padding: "2px 6px", background: g.color, color: "#fff" }}>{g.tag}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </DCArtboard>
  );
};

// ---------- Downloadable logo pack ----------
const downloadLogoSVG = (id, filename) => {
  const el = document.getElementById(id);
  if (!el) return;
  const svg = el.querySelector("svg");
  if (!svg) return;
  // resolve CSS vars to actual hex so the SVG is self-contained
  const style = getComputedStyle(document.documentElement);
  const cloned = svg.cloneNode(true);
  cloned.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  cloned.querySelectorAll("[fill], [stroke]").forEach(node => {
    ["fill", "stroke"].forEach(attr => {
      const val = node.getAttribute(attr);
      if (val && val.startsWith("var(--")) {
        const m = val.match(/var\((--[\w-]+)\)/);
        if (m) {
          const v = style.getPropertyValue(m[1]).trim();
          if (v) node.setAttribute(attr, v);
        }
      }
    });
  });
  const xml = new XMLSerializer().serializeToString(cloned);
  const blob = new Blob(['<?xml version="1.0"?>\n', xml], { type: "image/svg+xml" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = filename;
  a.click();
};

const LogoPackSection = () => {
  const items = [
    { id: "dl-primary", label: "Primary", file: "gcc-primary.svg", el: () => <GCCMark size={140} showWordmark={true} color="var(--brand-green)" wordmarkColor="var(--brand-green)"/> },
    { id: "dl-mono", label: "Monogram", file: "gcc-monogram.svg", el: () => <GCCMark size={120} color="var(--brand-green)"/> },
    { id: "dl-badge", label: "Badge", file: "gcc-badge.svg", el: () => <GCCBadge size={120} color="var(--brand-green)"/> },
    { id: "dl-horiz", label: "Horizontal", file: "gcc-horizontal.svg", el: () => <GCCHorizontal size={220} color="var(--brand-green)"/> },
    { id: "dl-reverse", label: "Reversed", file: "gcc-reversed.svg", el: () => <div style={{ background: "var(--brand-deep)", padding: 12 }}><GCCMark size={120} color="var(--paper)"/></div> },
    { id: "dl-mono-ink", label: "Single-color", file: "gcc-single-color.svg", el: () => <GCCMark size={120} color="var(--ink)"/> },
  ];
  return (
    <DCArtboard id="logo-pack" label="Logo pack (downloadable)" width={1320} height={460}>
      <div style={{ width: 1320, height: 460, background: "var(--paper)", padding: 48, fontFamily: "var(--brand-body)", boxSizing: "border-box" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 20 }}>
          <div>
            <div style={{ fontFamily: "var(--brand-mono)", fontSize: 11, letterSpacing: "0.22em", color: "var(--ink-soft)" }}>18 / DOWNLOADS</div>
            <div style={{ fontFamily: "var(--brand-display)", fontSize: 32, fontWeight: 600, color: "var(--brand-deep)", marginTop: 6, letterSpacing: "-0.01em" }}>
              Click any to download the SVG.
            </div>
          </div>
          <div style={{ fontFamily: "var(--brand-mono)", fontSize: 10, letterSpacing: "0.18em", color: "var(--ink-soft)" }}>SVG · COLOR-LOCKED</div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 14 }}>
          {items.map(({ id, label, file, el }) => (
            <button key={id} onClick={() => downloadLogoSVG(id, file)} style={{
              background: "var(--paper)", border: "1px solid var(--surface)", padding: 16,
              cursor: "pointer", display: "flex", flexDirection: "column", gap: 10,
              transition: "background .15s, border-color .15s",
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--brand-green)"; e.currentTarget.style.background = "var(--surface)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--surface)"; e.currentTarget.style.background = "var(--paper)"; }}>
              <div id={id} style={{ height: 150, display: "flex", alignItems: "center", justifyContent: "center" }}>
                {el()}
              </div>
              <div style={{ borderTop: "1px solid var(--surface)", paddingTop: 10, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ fontFamily: "var(--brand-body)", fontSize: 13, fontWeight: 600, color: "var(--brand-deep)" }}>{label}</div>
                <div style={{ fontFamily: "var(--brand-mono)", fontSize: 9, letterSpacing: "0.18em", color: "var(--brand-green)" }}>↓ SVG</div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </DCArtboard>
  );
};

Object.assign(window, { EmailSignature, ScriptureSection, AccessibilitySection, LogoPackSection });
