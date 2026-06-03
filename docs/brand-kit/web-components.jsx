// Web components for the developer — buttons, nav, cards, CTA.

const BtnPrimary = ({ children = "Plan your visit" }) => (
  <button style={{
    background: "var(--brand-green)", color: "var(--paper)",
    border: "none", padding: "14px 24px",
    fontFamily: "var(--brand-body)", fontSize: 14, fontWeight: 600,
    letterSpacing: "0.02em", cursor: "pointer",
  }}>{children} →</button>
);

const BtnSecondary = ({ children = "Watch a sermon" }) => (
  <button style={{
    background: "transparent", color: "var(--brand-green)",
    border: "1.5px solid var(--brand-green)", padding: "12px 22px",
    fontFamily: "var(--brand-body)", fontSize: 14, fontWeight: 600,
    cursor: "pointer",
  }}>{children}</button>
);

const BtnGhost = ({ children = "Give online" }) => (
  <button style={{
    background: "transparent", color: "var(--brand-deep)",
    border: "none", padding: "10px 0",
    fontFamily: "var(--brand-mono)", fontSize: 11, letterSpacing: "0.2em",
    fontWeight: 600, cursor: "pointer", borderBottom: "1.5px solid var(--brand-green)",
  }}>{children.toUpperCase()} →</button>
);

const Nav = () => (
  <div style={{ width: "100%", padding: "18px 24px", background: "var(--paper)", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid var(--surface)" }}>
    <GCCHorizontal size={180} color="var(--brand-green)"/>
    <div style={{ display: "flex", gap: 28, alignItems: "center" }}>
      {["About", "Sundays", "Sermons", "Events", "Give"].map(l => (
        <div key={l} style={{ fontFamily: "var(--brand-body)", fontSize: 13, fontWeight: 500, color: "var(--ink)" }}>{l}</div>
      ))}
      <BtnPrimary>Visit</BtnPrimary>
    </div>
  </div>
);

const SermonCard = () => (
  <div style={{ width: 280, background: "var(--paper)", border: "1px solid var(--surface)" }}>
    <div style={{ width: "100%", height: 160, background: "var(--brand-deep)", position: "relative", overflow: "hidden" }}>
      <LeafPattern color="var(--brand-green)" opacity={0.2} size={50}/>
      <div style={{ position: "absolute", top: 12, left: 14, fontFamily: "var(--brand-mono)", fontSize: 9, letterSpacing: "0.2em", color: "var(--paper)" }}>WEEK 03</div>
      <div style={{ position: "absolute", bottom: 12, left: 14, right: 14, fontFamily: "var(--brand-display)", fontSize: 22, fontWeight: 600, color: "var(--paper)", lineHeight: 1.0, letterSpacing: "-0.01em" }}>
        Lord, Your<br/><em style={{ fontStyle: "italic" }}>Kingdom come.</em>
      </div>
    </div>
    <div style={{ padding: 18 }}>
      <div style={{ fontFamily: "var(--brand-mono)", fontSize: 9, letterSpacing: "0.18em", color: "var(--ink-soft)" }}>11 MAY · DAWSON SMITH</div>
      <div style={{ fontFamily: "var(--brand-body)", fontSize: 13, color: "var(--ink)", marginTop: 8, lineHeight: 1.5 }}>
        What does it mean to actually pray the Lord's prayer — line by line, like we mean it?
      </div>
      <div style={{ marginTop: 14 }}><BtnGhost>Listen</BtnGhost></div>
    </div>
  </div>
);

const EventListItem = () => (
  <div style={{ width: 300, padding: "16px 0", borderBottom: "1px solid var(--surface)", display: "grid", gridTemplateColumns: "60px 1fr auto", gap: 16, alignItems: "center" }}>
    <div style={{ textAlign: "center" }}>
      <div style={{ fontFamily: "var(--brand-mono)", fontSize: 9, letterSpacing: "0.2em", color: "var(--brand-green)" }}>FRI</div>
      <div style={{ fontFamily: "var(--brand-display)", fontSize: 32, fontWeight: 600, color: "var(--brand-deep)", lineHeight: 0.9 }}>19</div>
      <div style={{ fontFamily: "var(--brand-mono)", fontSize: 8, letterSpacing: "0.18em", color: "var(--ink-soft)" }}>DEC</div>
    </div>
    <div>
      <div style={{ fontFamily: "var(--brand-display)", fontSize: 17, fontWeight: 600, color: "var(--brand-deep)", letterSpacing: "-0.01em" }}>Carols by Candlelight</div>
      <div style={{ fontFamily: "var(--brand-body)", fontSize: 12, color: "var(--ink-soft)", marginTop: 2 }}>7pm · Whitman Park</div>
    </div>
    <div style={{ fontFamily: "var(--brand-mono)", fontSize: 9, letterSpacing: "0.2em", color: "var(--brand-green)" }}>RSVP →</div>
  </div>
);

const GivingBlock = () => (
  <div style={{ width: 320, padding: 24, background: "var(--brand-green)", color: "var(--paper)", position: "relative", overflow: "hidden" }}>
    <LeafPattern color="var(--paper)" opacity={0.08} size={50}/>
    <div style={{ position: "relative" }}>
      <div style={{ fontFamily: "var(--brand-mono)", fontSize: 10, letterSpacing: "0.22em", opacity: 0.75 }}>GIVE</div>
      <div style={{ fontFamily: "var(--brand-display)", fontSize: 24, fontWeight: 600, marginTop: 6, lineHeight: 1.0, letterSpacing: "-0.01em" }}>
        Everything we<br/>do is funded<br/><em style={{ fontStyle: "italic" }}>by people like you.</em>
      </div>
      <div style={{ marginTop: 18 }}>
        <button style={{ background: "var(--paper)", color: "var(--brand-deep)", border: "none", padding: "12px 22px", fontFamily: "var(--brand-body)", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>Give online →</button>
      </div>
    </div>
  </div>
);

const WebComponents = () => (
  <DCArtboard id="web-components" label="Web components" width={1320} height={680}>
    <div style={{ width: 1320, height: 680, background: "var(--paper)", padding: 48, fontFamily: "var(--brand-body)", boxSizing: "border-box" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 24 }}>
        <div>
          <div style={{ fontFamily: "var(--brand-mono)", fontSize: 11, letterSpacing: "0.22em", color: "var(--ink-soft)" }}>14 / WEB</div>
          <div style={{ fontFamily: "var(--brand-display)", fontSize: 32, fontWeight: 600, color: "var(--brand-deep)", marginTop: 6, letterSpacing: "-0.01em" }}>
            For the developer.
          </div>
        </div>
        <div style={{ fontFamily: "var(--brand-mono)", fontSize: 10, letterSpacing: "0.18em", color: "var(--ink-soft)" }}>HAND TO CLAUDE CODE →</div>
      </div>

      {/* Nav */}
      <div style={{ marginBottom: 20, border: "1px solid var(--surface)" }}>
        <Nav/>
      </div>

      {/* Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "auto auto 1fr auto", gap: 32, alignItems: "flex-start" }}>
        <div>
          <div style={{ fontFamily: "var(--brand-mono)", fontSize: 9, letterSpacing: "0.18em", color: "var(--ink-soft)", marginBottom: 14 }}>BUTTONS</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: "flex-start" }}>
            <BtnPrimary/>
            <BtnSecondary/>
            <BtnGhost/>
          </div>
        </div>
        <div>
          <div style={{ fontFamily: "var(--brand-mono)", fontSize: 9, letterSpacing: "0.18em", color: "var(--ink-soft)", marginBottom: 14 }}>SERMON CARD</div>
          <SermonCard/>
        </div>
        <div>
          <div style={{ fontFamily: "var(--brand-mono)", fontSize: 9, letterSpacing: "0.18em", color: "var(--ink-soft)", marginBottom: 14 }}>EVENT LIST</div>
          <EventListItem/>
          <EventListItem/>
        </div>
        <div>
          <div style={{ fontFamily: "var(--brand-mono)", fontSize: 9, letterSpacing: "0.18em", color: "var(--ink-soft)", marginBottom: 14 }}>GIVING BLOCK</div>
          <GivingBlock/>
        </div>
      </div>
    </div>
  </DCArtboard>
);

Object.assign(window, { WebComponents });
