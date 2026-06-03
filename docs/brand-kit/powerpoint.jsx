// PowerPoint / Keynote slide templates — 16:9 mini slides.

const Slide = ({ children, bg = "var(--paper)", label }) => (
  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
    <div style={{ width: 400, height: 225, background: bg, position: "relative", overflow: "hidden", boxShadow: "0 1px 0 var(--surface)" }}>
      {children}
    </div>
    <div style={{ fontFamily: "var(--brand-mono)", fontSize: 10, letterSpacing: "0.18em", color: "var(--ink-soft)" }}>{label}</div>
  </div>
);

const SlideTitle = () => (
  <Slide bg="var(--brand-deep)" label="01 · TITLE SLIDE">
    <LeafPattern color="var(--brand-green)" opacity={0.18} size={50}/>
    <div style={{ position: "absolute", inset: 0, padding: 24, color: "var(--paper)", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
      <div style={{ fontFamily: "var(--brand-mono)", fontSize: 8, letterSpacing: "0.2em", opacity: 0.7 }}>SUNDAY SERVICE · MAY 11</div>
      <div>
        <div style={{ fontFamily: "var(--brand-display)", fontSize: 40, lineHeight: 0.95, fontWeight: 600, letterSpacing: "-0.01em" }}>
          Lord, Your<br/>Kingdom <em>come.</em>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
        <SingleLeaf color="var(--paper)" size={20}/>
        <div style={{ fontFamily: "var(--brand-mono)", fontSize: 8, letterSpacing: "0.2em", opacity: 0.6 }}>GRACE COMMUNITY CHURCH</div>
      </div>
    </div>
  </Slide>
);

const SlideSection = () => (
  <Slide bg="var(--brand-green)" label="02 · SECTION BREAK">
    <div style={{ position: "absolute", inset: 0, padding: 24, color: "var(--paper)", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
      <div style={{ fontFamily: "var(--brand-mono)", fontSize: 9, letterSpacing: "0.3em", opacity: 0.7 }}>PART TWO</div>
      <div style={{ fontFamily: "var(--brand-display)", fontSize: 38, fontWeight: 600, marginTop: 8, letterSpacing: "-0.01em" }}>
        Praying the prayer
      </div>
      <div style={{ width: 40, height: 1, background: "var(--paper)", opacity: 0.5, marginTop: 14 }}/>
    </div>
  </Slide>
);

const SlideScripture = () => (
  <Slide bg="var(--paper)" label="03 · SCRIPTURE">
    <div style={{ position: "absolute", inset: 0, padding: 28, display: "flex", flexDirection: "column", justifyContent: "center" }}>
      <div style={{ fontFamily: "var(--brand-display)", fontSize: 9, color: "var(--brand-green)" }}>“</div>
      <div style={{ fontFamily: "var(--brand-display)", fontStyle: "italic", fontSize: 19, lineHeight: 1.3, color: "var(--brand-deep)", marginTop: 2 }}>
        Your kingdom come, your will be done, on earth as it is in heaven.
      </div>
      <div style={{ fontFamily: "var(--brand-mono)", fontSize: 9, letterSpacing: "0.18em", color: "var(--brand-green)", marginTop: 14 }}>MATTHEW 6 : 10</div>
    </div>
  </Slide>
);

const SlideContent = () => (
  <Slide bg="var(--paper)" label="04 · CONTENT">
    <div style={{ position: "absolute", inset: 0, padding: 24, display: "flex", flexDirection: "column" }}>
      <div style={{ fontFamily: "var(--brand-mono)", fontSize: 8, letterSpacing: "0.2em", color: "var(--ink-soft)" }}>THREE THINGS TO REMEMBER</div>
      <div style={{ fontFamily: "var(--brand-display)", fontSize: 22, fontWeight: 600, color: "var(--brand-deep)", marginTop: 4 }}>
        How we pray together.
      </div>
      <div style={{ marginTop: 14, display: "flex", flexDirection: "column", gap: 8 }}>
        {["With expectation, not formula", "For others before ourselves", "Listening as much as speaking"].map((t, i) => (
          <div key={i} style={{ display: "flex", gap: 10, alignItems: "baseline" }}>
            <div style={{ fontFamily: "var(--brand-mono)", fontSize: 11, color: "var(--brand-green)", fontWeight: 600 }}>0{i+1}</div>
            <div style={{ fontFamily: "var(--brand-body)", fontSize: 11, color: "var(--ink)" }}>{t}</div>
          </div>
        ))}
      </div>
    </div>
  </Slide>
);

const SlideAnnounce = () => (
  <Slide bg="var(--surface)" label="05 · ANNOUNCEMENT">
    <div style={{ position: "absolute", inset: 0, padding: 24, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
      <div style={{ fontFamily: "var(--brand-mono)", fontSize: 8, letterSpacing: "0.2em", color: "var(--brand-deep)" }}>WHAT'S ON</div>
      <div>
        <div style={{ fontFamily: "var(--brand-display)", fontSize: 26, fontWeight: 600, color: "var(--brand-deep)", lineHeight: 1.05 }}>
          Welcome Sunday<br/><em style={{ fontStyle: "italic", color: "var(--brand-green)" }}>+ lunch.</em>
        </div>
        <div style={{ fontFamily: "var(--brand-mono)", fontSize: 9, letterSpacing: "0.18em", color: "var(--ink)", marginTop: 10 }}>NEXT SUN · 10AM · STAY AFTER</div>
      </div>
      <div style={{ display: "flex", justifyContent: "flex-end" }}><LeafIcon size={28} color="var(--brand-green)"/></div>
    </div>
  </Slide>
);

const SlideLowerThird = () => (
  <Slide bg="#222" label="06 · LIVESTREAM LOWER-THIRD">
    <div style={{ position: "absolute", inset: 0, background: "repeating-linear-gradient(45deg, #1a1a1a, #1a1a1a 20px, #222 20px, #222 40px)" }}/>
    <div style={{ position: "absolute", left: 24, bottom: 24, right: 24, background: "var(--brand-deep)", color: "var(--paper)", padding: "10px 14px", display: "flex", alignItems: "center", gap: 12 }}>
      <SingleLeaf size={20} color="var(--brand-green)"/>
      <div>
        <div style={{ fontFamily: "var(--brand-display)", fontSize: 13, fontWeight: 600 }}>Pastor Dawson Smith</div>
        <div style={{ fontFamily: "var(--brand-mono)", fontSize: 8, letterSpacing: "0.18em", opacity: 0.7 }}>LEAD PASTOR · GRACE COMMUNITY</div>
      </div>
    </div>
  </Slide>
);

const SlideClosing = () => (
  <Slide bg="var(--brand-green)" label="07 · CLOSING">
    <div style={{ position: "absolute", inset: 0, padding: 24, color: "var(--paper)", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
      <GCCMark size={90} color="var(--paper)"/>
      <div style={{ fontFamily: "var(--brand-display)", fontStyle: "italic", fontSize: 22, marginTop: 14, fontWeight: 500 }}>
        See you next Sunday.
      </div>
      <div style={{ fontFamily: "var(--brand-mono)", fontSize: 8, letterSpacing: "0.22em", opacity: 0.7, marginTop: 12 }}>
        GRACECOMMUNITY.CHURCH
      </div>
    </div>
  </Slide>
);

const PowerPointSection = () => (
  <DCArtboard id="powerpoint" label="Slide templates" width={1320} height={620}>
    <div style={{ width: 1320, height: 620, background: "var(--paper)", padding: 56, fontFamily: "var(--brand-body)", boxSizing: "border-box" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 24 }}>
        <div>
          <div style={{ fontFamily: "var(--brand-mono)", fontSize: 11, letterSpacing: "0.22em", color: "var(--ink-soft)" }}>12 / PRESENTATION DECK</div>
          <div style={{ fontFamily: "var(--brand-display)", fontSize: 32, fontWeight: 600, color: "var(--brand-deep)", marginTop: 6, letterSpacing: "-0.01em" }}>
            Seven slides to copy from.
          </div>
        </div>
        <div style={{ fontFamily: "var(--brand-mono)", fontSize: 10, letterSpacing: "0.18em", color: "var(--ink-soft)" }}>16 : 9 · 1920 × 1080</div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, marginTop: 8 }}>
        <SlideTitle/><SlideSection/><SlideScripture/>
        <SlideContent/><SlideAnnounce/><SlideLowerThird/>
      </div>
      <div style={{ marginTop: 18, width: "calc(33.33% - 16px)" }}><SlideClosing/></div>
    </div>
  </DCArtboard>
);

Object.assign(window, { PowerPointSection });
