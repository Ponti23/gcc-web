// Print collateral — letterhead, business card, bulletin, welcome card.

const Letterhead = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
    <div style={{ width: 280, height: 396, background: "var(--paper)", boxShadow: "0 1px 0 var(--surface)", position: "relative", padding: 28, boxSizing: "border-box", fontFamily: "var(--brand-body)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <GCCMark size={80} color="var(--brand-green)"/>
        <div style={{ textAlign: "right", fontFamily: "var(--brand-mono)", fontSize: 7, letterSpacing: "0.18em", color: "var(--ink-soft)", lineHeight: 1.6 }}>
          GRACE COMMUNITY CHURCH<br/>
          12 ELDER ST, PERTH WA<br/>
          GRACECOMMUNITY.CHURCH
        </div>
      </div>
      <div style={{ marginTop: 30 }}>
        <div style={{ fontFamily: "var(--brand-mono)", fontSize: 7, letterSpacing: "0.2em", color: "var(--ink-soft)" }}>11 MAY 2026</div>
        <div style={{ fontSize: 8, color: "var(--ink)", marginTop: 16, lineHeight: 1.5 }}>
          Dear friend,<br/><br/>
          Thank you for visiting Grace last Sunday. We're so glad you came, and hope it felt like a place where you could simply be. If you'd like to grab coffee sometime, just reply to this letter — we'd love to.<br/><br/>
          Warmly,<br/>
          Pastor Dawson
        </div>
      </div>
      <div style={{ position: "absolute", bottom: 20, left: 28, right: 28, borderTop: "1px solid var(--surface)", paddingTop: 10, display: "flex", justifyContent: "space-between" }}>
        <div style={{ fontFamily: "var(--brand-mono)", fontSize: 6, letterSpacing: "0.18em", color: "var(--ink-soft)" }}>EST. 1997 · PERTH</div>
        <SingleLeaf size={14} color="var(--brand-green)"/>
      </div>
    </div>
    <div style={{ fontFamily: "var(--brand-mono)", fontSize: 10, letterSpacing: "0.18em", color: "var(--ink-soft)" }}>LETTERHEAD · A4</div>
  </div>
);

const BusinessCard = ({ side = "front" }) => (
  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
    <div style={{ width: 280, height: 165, background: side === "front" ? "var(--paper)" : "var(--brand-deep)", position: "relative", overflow: "hidden", boxShadow: "0 1px 0 var(--surface)" }}>
      {side === "front" ? (
        <div style={{ padding: 20, height: "100%", boxSizing: "border-box", display: "flex", flexDirection: "column", justifyContent: "space-between", fontFamily: "var(--brand-body)" }}>
          <GCCMark size={70} color="var(--brand-green)"/>
          <div>
            <div style={{ fontFamily: "var(--brand-display)", fontSize: 14, fontWeight: 600, color: "var(--brand-deep)" }}>Dawson Smith</div>
            <div style={{ fontFamily: "var(--brand-mono)", fontSize: 7, letterSpacing: "0.18em", color: "var(--ink-soft)", marginTop: 2 }}>LEAD PASTOR</div>
            <div style={{ fontSize: 8, color: "var(--ink)", marginTop: 8, lineHeight: 1.5 }}>
              dawson@gracecommunity.church<br/>
              +61 8 9000 0000
            </div>
          </div>
        </div>
      ) : (
        <>
          <LeafPattern color="var(--brand-green)" opacity={0.2} size={50}/>
          <div style={{ position: "absolute", inset: 0, padding: 20, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
            <SingleLeaf size={22} color="var(--paper)"/>
            <div style={{ fontFamily: "var(--brand-display)", fontStyle: "italic", fontSize: 18, color: "var(--paper)", marginTop: 10, fontWeight: 500 }}>
              an everyday<br/>church.
            </div>
            <div style={{ fontFamily: "var(--brand-mono)", fontSize: 7, letterSpacing: "0.22em", color: "var(--paper)", opacity: 0.6, marginTop: 8 }}>
              GRACECOMMUNITY.CHURCH
            </div>
          </div>
        </>
      )}
    </div>
    <div style={{ fontFamily: "var(--brand-mono)", fontSize: 10, letterSpacing: "0.18em", color: "var(--ink-soft)" }}>BUSINESS CARD · {side.toUpperCase()}</div>
  </div>
);

const Bulletin = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
    <div style={{ width: 260, height: 368, background: "var(--paper)", position: "relative", padding: 24, boxSizing: "border-box", overflow: "hidden", boxShadow: "0 1px 0 var(--surface)" }}>
      <div style={{ fontFamily: "var(--brand-mono)", fontSize: 7, letterSpacing: "0.22em", color: "var(--brand-green)" }}>ORDER OF SERVICE</div>
      <div style={{ fontFamily: "var(--brand-display)", fontSize: 26, fontWeight: 600, color: "var(--brand-deep)", marginTop: 4, lineHeight: 1.0, letterSpacing: "-0.01em" }}>
        Sunday<br/><em style={{ fontStyle: "italic", color: "var(--brand-green)" }}>11 May.</em>
      </div>
      <div style={{ marginTop: 16, borderTop: "1px solid var(--surface)", paddingTop: 10 }}>
        {[
          ["Welcome", "Dawson"],
          ["Songs (×3)", "Worship team"],
          ["Prayer", "Rachel"],
          ["Scripture", "Matthew 6"],
          ["Sermon", "Lord, Your Kingdom come"],
          ["Response & song", ""],
          ["Communion", ""],
          ["Blessing", ""],
        ].map(([k, v], i) => (
          <div key={i} style={{ display: "grid", gridTemplateColumns: "20px 1fr auto", gap: 8, padding: "5px 0", borderBottom: "1px dashed var(--surface)", alignItems: "baseline" }}>
            <div style={{ fontFamily: "var(--brand-mono)", fontSize: 7, color: "var(--ink-soft)" }}>0{i+1}</div>
            <div style={{ fontFamily: "var(--brand-body)", fontSize: 9, color: "var(--ink)" }}>{k}</div>
            <div style={{ fontFamily: "var(--brand-mono)", fontSize: 7, color: "var(--ink-soft)", letterSpacing: "0.1em" }}>{v}</div>
          </div>
        ))}
      </div>
      <div style={{ position: "absolute", bottom: 16, left: 24, right: 24, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <SingleLeaf size={14} color="var(--brand-green)"/>
        <div style={{ fontFamily: "var(--brand-mono)", fontSize: 6, letterSpacing: "0.18em", color: "var(--ink-soft)" }}>GRACE COMMUNITY · PERTH</div>
      </div>
    </div>
    <div style={{ fontFamily: "var(--brand-mono)", fontSize: 10, letterSpacing: "0.18em", color: "var(--ink-soft)" }}>BULLETIN · A5</div>
  </div>
);

const WelcomeCard = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
    <div style={{ width: 280, height: 200, background: "var(--brand-green)", position: "relative", overflow: "hidden", boxShadow: "0 1px 0 var(--surface)" }}>
      <LeafPattern color="var(--paper)" opacity={0.12} size={60}/>
      <div style={{ position: "absolute", inset: 0, padding: 22, color: "var(--paper)", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <div style={{ fontFamily: "var(--brand-mono)", fontSize: 8, letterSpacing: "0.24em", opacity: 0.75 }}>NEW HERE?</div>
        <div style={{ fontFamily: "var(--brand-display)", fontSize: 28, lineHeight: 0.95, fontWeight: 600, letterSpacing: "-0.01em" }}>
          We saved<br/>you a seat.
        </div>
        <div style={{ fontFamily: "var(--brand-body)", fontSize: 9, opacity: 0.85, lineHeight: 1.5 }}>
          Drop this card in the welcome box and we'll buy you a coffee next Sunday.
        </div>
      </div>
    </div>
    <div style={{ fontFamily: "var(--brand-mono)", fontSize: 10, letterSpacing: "0.18em", color: "var(--ink-soft)" }}>WELCOME CARD · DL</div>
  </div>
);

const PrintSection = () => (
  <DCArtboard id="print" label="Print collateral" width={1320} height={520}>
    <div style={{ width: 1320, height: 520, background: "var(--paper)", padding: 56, fontFamily: "var(--brand-body)", boxSizing: "border-box" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 24 }}>
        <div>
          <div style={{ fontFamily: "var(--brand-mono)", fontSize: 11, letterSpacing: "0.22em", color: "var(--ink-soft)" }}>13 / PRINT</div>
          <div style={{ fontFamily: "var(--brand-display)", fontSize: 32, fontWeight: 600, color: "var(--brand-deep)", marginTop: 6, letterSpacing: "-0.01em" }}>
            On paper, on Sundays.
          </div>
        </div>
      </div>
      <div style={{ display: "flex", gap: 40, justifyContent: "center", marginTop: 20, flexWrap: "wrap" }}>
        <Letterhead/>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <BusinessCard side="front"/>
          <BusinessCard side="back"/>
        </div>
        <Bulletin/>
        <div style={{ display: "flex", flexDirection: "column", gap: 24, justifyContent: "center" }}>
          <WelcomeCard/>
        </div>
      </div>
    </div>
  </DCArtboard>
);

Object.assign(window, { PrintSection });
