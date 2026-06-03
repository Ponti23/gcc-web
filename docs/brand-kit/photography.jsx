// Photography direction — mood, do/don't, overlay recipe.

const PhotographyDirection = () => (
  <DCArtboard id="photography" label="Photography direction" width={1320} height={620}>
    <div style={{ width: 1320, height: 620, background: "var(--paper)", padding: 56, fontFamily: "var(--brand-body)", boxSizing: "border-box", display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 48 }}>
      <div>
        <div style={{ fontFamily: "var(--brand-mono)", fontSize: 11, letterSpacing: "0.22em", color: "var(--ink-soft)" }}>11 / PHOTOGRAPHY</div>
        <div style={{ fontFamily: "var(--brand-display)", fontSize: 44, lineHeight: 1.0, fontWeight: 600, color: "var(--brand-deep)", marginTop: 14, letterSpacing: "-0.01em" }}>
          Real people.<br/>Real light.<br/><em style={{ fontStyle: "italic", color: "var(--brand-green)" }}>Real moments.</em>
        </div>
        <div style={{ fontSize: 14, lineHeight: 1.6, color: "var(--ink)", marginTop: 18, maxWidth: 360 }}>
          Shoot what's actually happening on a Sunday. Window light, hands, faces in conversation, kids mid-chaos. Crop tight. Embrace imperfection.
        </div>
        <div style={{ marginTop: 28, padding: 18, background: "var(--surface)", borderLeft: "3px solid var(--brand-green)" }}>
          <div style={{ fontFamily: "var(--brand-mono)", fontSize: 10, letterSpacing: "0.2em", color: "var(--brand-deep)" }}>OVERLAY RECIPE</div>
          <div style={{ fontSize: 13, color: "var(--ink)", marginTop: 8, lineHeight: 1.5 }}>
            <div>· Warm white balance (+5)</div>
            <div>· Slight desaturation (−10)</div>
            <div>· Lift shadows (+15)</div>
            <div>· 8% forest-green overlay (multiply)</div>
            <div>· Light film grain (5%)</div>
          </div>
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
        <PhotoTile id="photo-1" tone="warm" subject="Hands & coffee" tag="DO"/>
        <PhotoTile id="photo-2" tone="natural" subject="Candid conversation" tag="DO"/>
        <PhotoTile id="photo-3" tone="window" subject="Window-lit portrait" tag="DO"/>
        <PhotoTile id="photo-4" tone="kids" subject="Kids mid-laugh" tag="DO"/>
        <PhotoTile id="photo-5" tone="exterior" subject="Building / exterior" tag="DO"/>
        <PhotoDont/>
      </div>
    </div>
  </DCArtboard>
);

const PhotoTile = ({ id, subject, tone, tag }) => (
  <div style={{ position: "relative", height: 230, overflow: "hidden", background: "var(--surface)" }}>
    <image-slot
      id={`gcc-${id}`}
      placeholder={`Drop a "${subject.toLowerCase()}" photo`}
      style={{ width: "100%", height: "100%", display: "block" }}
    ></image-slot>
    <div style={{
      position: "absolute", top: 8, left: 8,
      fontFamily: "var(--brand-mono)", fontSize: 9, letterSpacing: "0.18em",
      padding: "3px 8px",
      background: "var(--brand-green)", color: "var(--paper)",
    }}>{tag}</div>
    <div style={{
      position: "absolute", bottom: 8, left: 8, right: 8,
      fontFamily: "var(--brand-mono)", fontSize: 9, letterSpacing: "0.16em",
      color: "var(--paper)", textShadow: "0 1px 2px rgba(0,0,0,0.4)",
    }}>{subject.toUpperCase()}</div>
  </div>
);

const PhotoDont = () => (
  <div style={{ position: "relative", height: 230, background: "repeating-linear-gradient(135deg, #ddd, #ddd 10px, #ccc 10px, #ccc 20px)", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
    <div style={{
      position: "absolute", top: 8, left: 8,
      fontFamily: "var(--brand-mono)", fontSize: 9, letterSpacing: "0.18em",
      padding: "3px 8px",
      background: "var(--brand-accent)", color: "var(--paper)",
    }}>DON'T</div>
    <div style={{ textAlign: "center", padding: 16, fontFamily: "var(--brand-body)", fontSize: 12, color: "var(--ink)" }}>
      Stock photos. Posed "diverse smiling group" shots. Heavy filters. Overhead worship hands cliché.
    </div>
  </div>
);

Object.assign(window, { PhotographyDirection });
