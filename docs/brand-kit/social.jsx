// Social media template mockups — Instagram square, story, and event card.

const PhoneFrame = ({ children, height = 580, width = 290 }) => (
  <div style={{
    width, height,
    background: "#0E0E0E",
    borderRadius: 36,
    padding: 8,
    boxShadow: "0 30px 60px -20px rgba(0,0,0,0.25)",
  }}>
    <div style={{
      width: "100%", height: "100%",
      borderRadius: 28,
      overflow: "hidden",
      background: "#fff",
      position: "relative",
    }}>
      {children}
    </div>
  </div>
);

const InstaSquare = () => (
  <div style={{
    width: 320, height: 320,
    background: "var(--brand-green)",
    color: "var(--paper)",
    padding: 28,
    display: "flex", flexDirection: "column", justifyContent: "space-between",
    fontFamily: "var(--brand-body)",
  }}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <LeafIcon color="var(--paper)" size={28}/>
      <div style={{ fontFamily: "var(--brand-mono)", fontSize: 9, letterSpacing: "0.22em" }}>SUNDAY · 10AM</div>
    </div>
    <div>
      <div style={{ fontFamily: "var(--brand-mono)", fontSize: 9, letterSpacing: "0.22em", opacity: 0.8 }}>
        SERMON SERIES
      </div>
      <div style={{ fontFamily: "var(--brand-display)", fontSize: 44, lineHeight: 1.0, fontWeight: 600, marginTop: 8, letterSpacing: "-0.01em" }}>
        Lord, Your<br/>Kingdom<br/><em style={{ fontStyle: "italic" }}>come.</em>
      </div>
    </div>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
      <div style={{ fontFamily: "var(--brand-body)", fontSize: 11, fontWeight: 500 }}>
        Grace Community Church
      </div>
      <div style={{ fontFamily: "var(--brand-mono)", fontSize: 9, letterSpacing: "0.18em", opacity: 0.7 }}>
        @gracecomm
      </div>
    </div>
  </div>
);

const InstaStory = () => (
  <div style={{
    width: 220, height: 390,
    background: "var(--surface)",
    color: "var(--ink)",
    padding: 24,
    display: "flex", flexDirection: "column", justifyContent: "space-between",
  }}>
    <div>
      <GCCMark size={70} color="var(--brand-green)" weight={800}/>
    </div>
    <div>
      <div style={{ fontFamily: "var(--brand-mono)", fontSize: 9, letterSpacing: "0.22em", color: "var(--brand-accent)" }}>
        THIS SUNDAY
      </div>
      <div style={{ fontFamily: "var(--brand-display)", fontSize: 36, lineHeight: 1.05, fontWeight: 600, color: "var(--brand-deep)", marginTop: 10, letterSpacing: "-0.01em" }}>
        Bring a friend.<br/>Lunch is on us.
      </div>
      <div style={{ fontFamily: "var(--brand-body)", fontSize: 12, color: "var(--ink-soft)", marginTop: 14, lineHeight: 1.45 }}>
        Welcome Sunday — a relaxed gathering for anyone curious about Grace. Stay for lunch right after.
      </div>
    </div>
    <div style={{
      borderTop: "1px solid var(--brand-deep)",
      opacity: 0.3,
      paddingTop: 10,
      fontFamily: "var(--brand-mono)",
      fontSize: 9,
      letterSpacing: "0.2em",
      color: "var(--brand-deep)",
    }}>
      GRACECOMMUNITY.CHURCH
    </div>
  </div>
);

const EventCard = () => (
  <div style={{
    width: 320, height: 320,
    background: "var(--paper)",
    color: "var(--ink)",
    padding: 0,
    display: "flex", flexDirection: "column",
    border: "1px solid var(--brand-deep)",
  }}>
    <div style={{
      flex: 1,
      background: "var(--brand-green)",
      color: "var(--paper)",
      padding: 24,
      display: "flex", flexDirection: "column", justifyContent: "space-between",
    }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ fontFamily: "var(--brand-mono)", fontSize: 9, letterSpacing: "0.22em" }}>EVENT</div>
        <SingleLeaf color="var(--paper)" size={28}/>
      </div>
      <div>
        <div style={{ fontFamily: "var(--brand-display)", fontSize: 38, lineHeight: 1.0, fontWeight: 600, letterSpacing: "-0.01em" }}>
          Carols<br/>by Candlelight
        </div>
      </div>
    </div>
    <div style={{ padding: "18px 22px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <div>
        <div style={{ fontFamily: "var(--brand-mono)", fontSize: 9, letterSpacing: "0.2em", color: "var(--ink-soft)" }}>FRI · DEC 19 · 7PM</div>
        <div style={{ fontFamily: "var(--brand-body)", fontSize: 13, fontWeight: 500, marginTop: 4 }}>Whitman Park, Perth</div>
      </div>
      <div style={{
        fontFamily: "var(--brand-mono)", fontSize: 9, letterSpacing: "0.2em",
        padding: "8px 12px",
        border: "1px solid var(--brand-green)", color: "var(--brand-green)",
      }}>
        RSVP →
      </div>
    </div>
  </div>
);

Object.assign(window, { PhoneFrame, InstaSquare, InstaStory, EventCard });
