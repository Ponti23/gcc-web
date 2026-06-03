// Main brand kit app — composes all sections inside a DesignCanvas.

const { useState, useEffect, useMemo } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": "heritage",
  "typeset": "heritage"
}/*EDITMODE-END*/;

// Inject Google Fonts dynamically based on selected typeset
function useFontLoader(typesetId) {
  useEffect(() => {
    const set = TYPE_SETS[typesetId];
    if (!set) return;
    const families = new Set([set.display.url, set.body.url, set.mono.url]);
    const id = "brand-kit-fonts";
    let link = document.getElementById(id);
    if (!link) {
      link = document.createElement("link");
      link.id = id;
      link.rel = "stylesheet";
      document.head.appendChild(link);
    }
    link.href = `https://fonts.googleapis.com/css2?${[...families].map(f => `family=${f}`).join("&")}&display=swap`;
  }, [typesetId]);
}

// Apply CSS variables based on palette + type
function useBrandVars(paletteId, typesetId) {
  useEffect(() => {
    const p = PALETTES[paletteId];
    const t = TYPE_SETS[typesetId];
    const root = document.documentElement;
    root.style.setProperty("--brand-green", p.colors[0].hex);
    root.style.setProperty("--brand-deep", p.colors[1].hex);
    root.style.setProperty("--surface", p.colors[2].hex);
    root.style.setProperty("--paper", p.colors[3].hex);
    root.style.setProperty("--brand-accent", p.colors[4].hex);
    root.style.setProperty("--ink", p.colors[5].hex);
    root.style.setProperty("--ink-soft", p.colors[5].hex + "99");
    root.style.setProperty("--brand-display", t.display.family);
    root.style.setProperty("--brand-body", t.body.family);
    root.style.setProperty("--brand-mono", t.mono.family);
  }, [paletteId, typesetId]);
}

// ---------- Section: Brand Essence ----------
const BrandEssence = () => (
  <DCArtboard id="essence" label="Brand essence" width={1320} height={520}>
    <div style={{
      width: 1320, height: 520,
      background: "var(--paper)",
      padding: 64,
      display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64,
      fontFamily: "var(--brand-body)",
      boxSizing: "border-box",
    }}>
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <div style={{ fontFamily: "var(--brand-mono)", fontSize: 11, letterSpacing: "0.24em", color: "var(--ink-soft)" }}>
          GRACE COMMUNITY CHURCH · BRAND KIT v1.0 · 2026
        </div>
        <div>
          <div style={{ fontFamily: "var(--brand-display)", fontSize: 72, lineHeight: 1.0, fontWeight: 600, color: "var(--brand-deep)", letterSpacing: "-0.02em" }}>
            An everyday<br/>
            church for<br/>
            everyday<br/>
            <em style={{ fontStyle: "italic", color: "var(--brand-green)" }}>people.</em>
          </div>
        </div>
        <div style={{ fontFamily: "var(--brand-mono)", fontSize: 11, letterSpacing: "0.18em", color: "var(--brand-green)" }}>
          ↓ SCROLL FOR THE FULL SYSTEM
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 28, justifyContent: "center" }}>
        {[
          { k: "Refined", v: "Quiet confidence. Nothing shouts. Whitespace is a value, not a flaw." },
          { k: "Rooted", v: "The leaf isn't decoration — it's growth, life, scripture. Use it sparingly and with weight." },
          { k: "Welcoming", v: "Warm greens, soft creams, and conversational copy. Never formal, never flippant." },
          { k: "Timeless", v: "Built to look right in a print bulletin, on a tee, and on a phone five years from now." },
        ].map(({ k, v }) => (
          <div key={k} style={{ display: "grid", gridTemplateColumns: "140px 1fr", gap: 20, alignItems: "baseline" }}>
            <div style={{ fontFamily: "var(--brand-display)", fontSize: 24, fontWeight: 600, color: "var(--brand-green)" }}>
              {k}
            </div>
            <div style={{ fontSize: 15, lineHeight: 1.55, color: "var(--ink)" }}>{v}</div>
          </div>
        ))}
      </div>
    </div>
  </DCArtboard>
);

// ---------- Section: Logo ----------
const LogoLockups = () => ([
    <DCArtboard key="logo-primary" id="logo-primary" label="Primary lockup" width={520} height={520}>
      <div style={{ width: 520, height: 520, background: "var(--paper)", display: "flex", alignItems: "center", justifyContent: "center", padding: 60 }}>
        <GCCMark size={360} showWordmark={true} color="var(--brand-green)" wordmarkColor="var(--brand-green)"/>
      </div>
    </DCArtboard>
    ,<DCArtboard key="logo-mono" id="logo-mono" label="Monogram" width={520} height={520}>
      <div style={{ width: 520, height: 520, background: "var(--paper)", display: "flex", alignItems: "center", justifyContent: "center", padding: 60 }}>
        <GCCMark size={360} color="var(--brand-green)"/>
      </div>
    </DCArtboard>
    ,<DCArtboard key="logo-badge" id="logo-badge" label="Circular badge" width={520} height={520}>
      <div style={{ width: 520, height: 520, background: "var(--paper)", display: "flex", alignItems: "center", justifyContent: "center", padding: 50 }}>
        <GCCBadge size={400} color="var(--brand-green)"/>
      </div>
    </DCArtboard>
    ,<DCArtboard key="logo-horizontal" id="logo-horizontal" label="Horizontal lockup" width={760} height={300}>
      <div style={{ width: 760, height: 300, background: "var(--paper)", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <GCCHorizontal size={620} color="var(--brand-green)"/>
      </div>
    </DCArtboard>
    ,<DCArtboard key="logo-reversed" id="logo-reversed" label="Reversed (on color)" width={520} height={520}>
      <div style={{ width: 520, height: 520, background: "var(--brand-deep)", display: "flex", alignItems: "center", justifyContent: "center", padding: 60 }}>
        <GCCMark size={360} showWordmark={true} color="var(--paper)" wordmarkColor="var(--paper)"/>
      </div>
    </DCArtboard>
    ,<DCArtboard key="logo-mono-black" id="logo-mono-black" label="Single-color (mono)" width={520} height={520}>
      <div style={{ width: 520, height: 520, background: "var(--paper)", display: "flex", alignItems: "center", justifyContent: "center", padding: 60 }}>
        <GCCMark size={360} showWordmark={true} color="var(--ink)" wordmarkColor="var(--ink)"/>
      </div>
    </DCArtboard>
  ]);

const LogoRules = () => (
  <DCArtboard id="logo-rules" label="Clear space & sizing" width={1320} height={520}>
    <div style={{ width: 1320, height: 520, background: "var(--paper)", padding: 56, display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 48, fontFamily: "var(--brand-body)", boxSizing: "border-box" }}>
      <div>
        <div style={{ fontFamily: "var(--brand-mono)", fontSize: 11, letterSpacing: "0.22em", color: "var(--ink-soft)" }}>02 / CLEAR SPACE</div>
        <div style={{ fontFamily: "var(--brand-display)", fontSize: 36, fontWeight: 600, color: "var(--brand-deep)", marginTop: 10, letterSpacing: "-0.01em" }}>
          Give the mark room to breathe.
        </div>
        <div style={{ fontSize: 14, color: "var(--ink)", marginTop: 14, lineHeight: 1.55, maxWidth: 480 }}>
          Maintain padding equal to the height of the leaf <strong>(× 1)</strong> on every side. No text, no edges,
          no other graphics inside this zone. When in doubt, give it more.
        </div>
        <div style={{ marginTop: 28, position: "relative", display: "inline-block" }}>
          {/* clear-space diagram */}
          <div style={{
            border: "1px dashed var(--brand-green)",
            padding: "60px",
            position: "relative",
          }}>
            <div style={{
              position: "absolute", top: 4, left: 4,
              fontFamily: "var(--brand-mono)", fontSize: 9, letterSpacing: "0.18em", color: "var(--brand-green)",
            }}>1×</div>
            <GCCMark size={200} color="var(--brand-green)" showWordmark={true} wordmarkColor="var(--brand-green)"/>
          </div>
        </div>
      </div>
      <div>
        <div style={{ fontFamily: "var(--brand-mono)", fontSize: 11, letterSpacing: "0.22em", color: "var(--ink-soft)" }}>03 / MINIMUM SIZE</div>
        <div style={{ fontFamily: "var(--brand-display)", fontSize: 36, fontWeight: 600, color: "var(--brand-deep)", marginTop: 10, letterSpacing: "-0.01em" }}>
          Don't go smaller than these.
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginTop: 32 }}>
          <div style={{ borderTop: "1px solid var(--brand-deep)", paddingTop: 16 }}>
            <div style={{ fontFamily: "var(--brand-mono)", fontSize: 10, letterSpacing: "0.18em", color: "var(--ink-soft)" }}>DIGITAL</div>
            <div style={{ marginTop: 18, marginBottom: 12 }}>
              <GCCMark size={70} color="var(--brand-green)"/>
            </div>
            <div style={{ fontFamily: "var(--brand-mono)", fontSize: 11, color: "var(--ink)" }}>32 px tall</div>
            <div style={{ fontSize: 12, color: "var(--ink-soft)", marginTop: 4 }}>Monogram only — drop the wordmark.</div>
          </div>
          <div style={{ borderTop: "1px solid var(--brand-deep)", paddingTop: 16 }}>
            <div style={{ fontFamily: "var(--brand-mono)", fontSize: 10, letterSpacing: "0.18em", color: "var(--ink-soft)" }}>PRINT</div>
            <div style={{ marginTop: 18, marginBottom: 12 }}>
              <GCCMark size={120} color="var(--brand-green)" showWordmark={true} wordmarkColor="var(--brand-green)"/>
            </div>
            <div style={{ fontFamily: "var(--brand-mono)", fontSize: 11, color: "var(--ink)" }}>20 mm tall</div>
            <div style={{ fontSize: 12, color: "var(--ink-soft)", marginTop: 4 }}>Full lockup with wordmark.</div>
          </div>
        </div>
      </div>
    </div>
  </DCArtboard>
);

const LogoDonts = () => {
  const Card = ({ children, label }) => (
    <div style={{ display: "flex", flexDirection: "column", gap: 10, minWidth: 0 }}>
      <div style={{
        width: "100%", height: 200,
        background: "var(--surface)",
        display: "flex", alignItems: "center", justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        {children}
        <div style={{
          position: "absolute", top: 8, right: 8,
          width: 22, height: 22, borderRadius: "50%",
          background: "var(--brand-accent)", color: "var(--paper)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 14, fontWeight: 700,
        }}>×</div>
      </div>
      <div style={{ fontFamily: "var(--brand-body)", fontSize: 12, color: "var(--ink)", lineHeight: 1.4 }}>
        {label}
      </div>
    </div>
  );
  return (
    <DCArtboard id="logo-donts" label="Don'ts" width={1320} height={460}>
      <div style={{ width: 1320, height: 460, background: "var(--paper)", padding: 56, fontFamily: "var(--brand-body)", boxSizing: "border-box" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
          <div>
            <div style={{ fontFamily: "var(--brand-mono)", fontSize: 11, letterSpacing: "0.22em", color: "var(--ink-soft)" }}>04 / DON'TS</div>
            <div style={{ fontFamily: "var(--brand-display)", fontSize: 32, fontWeight: 600, color: "var(--brand-deep)", marginTop: 8, letterSpacing: "-0.01em" }}>
              Six things never to do.
            </div>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 16, marginTop: 28 }}>
          <Card label="Don't stretch or distort.">
            <div style={{ transform: "scaleX(1.5)" }}><GCCMark size={100} color="var(--brand-green)"/></div>
          </Card>
          <Card label="Don't rotate the mark.">
            <div style={{ transform: "rotate(-12deg)" }}><GCCMark size={100} color="var(--brand-green)"/></div>
          </Card>
          <Card label="Don't recolor outside the palette.">
            <GCCMark size={100} color="#E14B4B"/>
          </Card>
          <Card label="Don't drop a shadow on the mark.">
            <div style={{ filter: "drop-shadow(4px 4px 0 rgba(0,0,0,0.3))" }}><GCCMark size={100} color="var(--brand-green)"/></div>
          </Card>
          <Card label="Don't place on busy imagery.">
            <div style={{
              width: "100%", height: "100%",
              background: "repeating-linear-gradient(45deg, #888, #888 8px, #aaa 8px, #aaa 16px)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <GCCMark size={100} color="var(--brand-green)"/>
            </div>
          </Card>
          <Card label="Don't outline or hollow out.">
            <svg viewBox="0 0 600 320" width="130">
              <text x="300" y="248" textAnchor="middle"
                fontFamily="var(--brand-display), serif" fontSize="240" fontWeight="800"
                letterSpacing="-0.02em" fill="none" stroke="var(--brand-green)" strokeWidth="6">GCC</text>
            </svg>
          </Card>
        </div>
      </div>
    </DCArtboard>
  );
};

// ---------- Section: Iconography / Leaf motif ----------
const Iconography = () => (
  <DCArtboard id="iconography" label="The leaf motif" width={1320} height={520}>
    <div style={{ width: 1320, height: 520, background: "var(--paper)", padding: 56, display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 56, fontFamily: "var(--brand-body)", boxSizing: "border-box" }}>
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div style={{ fontFamily: "var(--brand-mono)", fontSize: 11, letterSpacing: "0.22em", color: "var(--ink-soft)" }}>
          06 / MOTIF
        </div>
        <div style={{ fontFamily: "var(--brand-display)", fontSize: 48, lineHeight: 1.0, fontWeight: 600, color: "var(--brand-deep)", marginTop: 14, letterSpacing: "-0.01em" }}>
          The leaf is<br/>the brand.
        </div>
        <div style={{ fontSize: 15, lineHeight: 1.6, color: "var(--ink)", marginTop: 18, maxWidth: 360 }}>
          Two leaves growing from a single stem — community, growth, scripture rooted.
          Lift it from the logo and use it as a standalone graphic, an end-of-article mark,
          a section divider, a sticker, an embroidery patch.
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        {/* Leaf scale */}
        <div style={{ display: "flex", alignItems: "flex-end", gap: 28, padding: "20px 0", borderBottom: "1px solid var(--surface)" }}>
          <LeafIcon size={140} color="var(--brand-green)"/>
          <LeafIcon size={100} color="var(--brand-green)"/>
          <LeafIcon size={70} color="var(--brand-green)"/>
          <LeafIcon size={48} color="var(--brand-green)"/>
          <LeafIcon size={32} color="var(--brand-green)"/>
          <div style={{ flex: 1 }}/>
          <div style={{ fontFamily: "var(--brand-mono)", fontSize: 10, letterSpacing: "0.18em", color: "var(--ink-soft)" }}>
            SCALE
          </div>
        </div>

        {/* Leaf colorways */}
        <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
          <div style={{ width: 80, height: 80, background: "var(--paper)", border: "1px solid var(--surface)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <LeafIcon size={50} color="var(--brand-green)"/>
          </div>
          <div style={{ width: 80, height: 80, background: "var(--surface)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <LeafIcon size={50} color="var(--brand-deep)"/>
          </div>
          <div style={{ width: 80, height: 80, background: "var(--brand-green)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <LeafIcon size={50} color="var(--paper)"/>
          </div>
          <div style={{ width: 80, height: 80, background: "var(--brand-deep)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <LeafIcon size={50} color="var(--brand-accent)"/>
          </div>
          <div style={{ width: 80, height: 80, background: "var(--brand-accent)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <LeafIcon size={50} color="var(--paper)"/>
          </div>
          <div style={{ flex: 1 }}/>
          <div style={{ fontFamily: "var(--brand-mono)", fontSize: 10, letterSpacing: "0.18em", color: "var(--ink-soft)" }}>
            COLORWAYS
          </div>
        </div>

        {/* Single-leaf usage */}
        <div style={{ display: "flex", gap: 18, alignItems: "center", paddingTop: 8 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 16px", background: "var(--surface)", color: "var(--brand-deep)", fontFamily: "var(--brand-display)", fontWeight: 600, fontSize: 18 }}>
            <SingleLeaf size={20} color="var(--brand-green)"/> Welcome
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 6, fontFamily: "var(--brand-display)", fontStyle: "italic", fontSize: 22, color: "var(--brand-deep)" }}>
            chapter end
            <SingleLeaf size={18} color="var(--brand-green)"/>
            <SingleLeaf size={18} color="var(--brand-green)" flip={true}/>
          </div>
          <div style={{ flex: 1 }}/>
          <div style={{ fontFamily: "var(--brand-mono)", fontSize: 10, letterSpacing: "0.18em", color: "var(--ink-soft)" }}>
            IN USE
          </div>
        </div>
      </div>
    </div>
  </DCArtboard>
);

// ---------- Section: Voice & Tone ----------
const VoiceTone = () => {
  const ThisNotThat = ({ title, yes, no }) => (
    <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 16, alignItems: "start" }}>
      <div style={{
        fontFamily: "var(--brand-display)", fontSize: 22, fontWeight: 600, color: "var(--brand-green)",
        minWidth: 110,
      }}>{title}</div>
      <div>
        <div style={{
          fontFamily: "var(--brand-body)", fontSize: 15, color: "var(--ink)", lineHeight: 1.5,
          paddingLeft: 14, borderLeft: "3px solid var(--brand-green)",
        }}>“{yes}”</div>
        <div style={{
          fontFamily: "var(--brand-body)", fontSize: 13, color: "var(--ink-soft)", lineHeight: 1.5, marginTop: 10,
          paddingLeft: 14, borderLeft: "3px solid var(--brand-accent)",
          textDecoration: "line-through", textDecorationColor: "var(--brand-accent)",
        }}>{no}</div>
      </div>
    </div>
  );
  return (
    <DCArtboard id="voice" label="Voice & tone" width={1320} height={620}>
      <div style={{ width: 1320, height: 620, background: "var(--paper)", padding: 56, display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 56, fontFamily: "var(--brand-body)", boxSizing: "border-box" }}>
        <div>
          <div style={{ fontFamily: "var(--brand-mono)", fontSize: 11, letterSpacing: "0.22em", color: "var(--ink-soft)" }}>07 / VOICE</div>
          <div style={{ fontFamily: "var(--brand-display)", fontSize: 48, lineHeight: 1.0, fontWeight: 600, color: "var(--brand-deep)", marginTop: 14, letterSpacing: "-0.01em" }}>
            We sound like<br/>a friend who's<br/>glad you came.
          </div>
          <div style={{ fontSize: 14, lineHeight: 1.6, color: "var(--ink)", marginTop: 22, maxWidth: 380 }}>
            Plain speech over churchy speech. Specific over vague.
            We can be reverent without being stiff, and warm without being saccharine.
          </div>
          <div style={{ marginTop: 36, display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
            {[
              ["Warm", "Cold"],
              ["Plain", "Jargon"],
              ["Specific", "Vague"],
              ["Inviting", "Hyped"],
            ].map(([a, b]) => (
              <div key={a} style={{ borderTop: "1px solid var(--brand-deep)", paddingTop: 10 }}>
                <div style={{ fontFamily: "var(--brand-display)", fontSize: 18, fontWeight: 600, color: "var(--brand-green)" }}>{a}</div>
                <div style={{ fontSize: 12, color: "var(--ink-soft)", marginTop: 2 }}>not {b.toLowerCase()}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 26, justifyContent: "center" }}>
          <ThisNotThat
            title="Welcome"
            yes="New here? Come at 9:50, grab a coffee, sit anywhere. We'll save you a seat."
            no="We warmly invite all guests to join us for our weekly worship celebration."
          />
          <ThisNotThat
            title="Sermons"
            yes="This Sunday: what does it mean to actually love your neighbour when they're loud?"
            no="Join us as Pastor Dawson unpacks the deep biblical truths of Christian neighbourliness."
          />
          <ThisNotThat
            title="Events"
            yes="Carols, candles, and an excessive amount of mince pies. Bring a friend."
            no="A festive seasonal experience for the whole family — don't miss out!"
          />
          <ThisNotThat
            title="Giving"
            yes="Everything we do — from Sunday lunch to overseas partners — is funded by people like you."
            no="Support our ministry today and become a partner in the Kingdom mission."
          />
        </div>
      </div>
    </DCArtboard>
  );
};

// ---------- Section: Social ----------
const SocialSection = () => ([
    <DCArtboard key="social-square" id="social-square" label="Instagram post" width={420} height={520}>
      <div style={{ width: 420, height: 520, background: "var(--surface)", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <InstaSquare/>
      </div>
    </DCArtboard>
    ,<DCArtboard key="social-story" id="social-story" label="Instagram story" width={320} height={520}>
      <div style={{ width: 320, height: 520, background: "var(--paper)", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <PhoneFrame width={240} height={420}>
          <InstaStory/>
        </PhoneFrame>
      </div>
    </DCArtboard>
    ,<DCArtboard key="social-event" id="social-event" label="Event card" width={420} height={520}>
      <div style={{ width: 420, height: 520, background: "var(--surface)", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <EventCard/>
      </div>
    </DCArtboard>
  ]);

// ---------- Section: Merch ----------
const MerchSection = () => ([
    <DCArtboard key="tee-front" id="tee-front" label="T-shirt — front (heritage)" width={460} height={520}>
      <div style={{ width: 460, height: 520, background: "var(--surface)", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <TShirt shirtColor="var(--brand-deep)" inkColor="var(--paper)" label="FRONT · CENTER CHEST">
          <GCCMark size={120} color="var(--paper)"/>
        </TShirt>
      </div>
    </DCArtboard>
    ,<DCArtboard key="tee-back" id="tee-back" label="T-shirt — back" width={460} height={520}>
      <div style={{ width: 460, height: 520, background: "var(--surface)", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <TShirt shirtColor="var(--brand-deep)" inkColor="var(--paper)" label="BACK · BELOW NECKLINE">
          <div style={{ textAlign: "center", color: "var(--paper)", fontFamily: "var(--brand-display)" }}>
            <div style={{ fontSize: 14, letterSpacing: "0.18em", fontFamily: "var(--brand-mono)", opacity: 0.7 }}>EST. PERTH</div>
            <div style={{ fontSize: 32, fontWeight: 600, lineHeight: 1.05, marginTop: 12, fontStyle: "italic" }}>
              Lord, Your<br/>Kingdom<br/>come.
            </div>
            <div style={{ marginTop: 14, display: "flex", justifyContent: "center" }}>
              <SingleLeaf size={28} color="var(--paper)"/>
            </div>
          </div>
        </TShirt>
      </div>
    </DCArtboard>
    ,<DCArtboard key="tee-cream" id="tee-cream" label="T-shirt — cream colorway" width={460} height={520}>
      <div style={{ width: 460, height: 520, background: "var(--surface)", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <TShirt shirtColor="var(--paper)" inkColor="var(--brand-green)" label="ALT COLORWAY">
          <div style={{ textAlign: "center" }}>
            <GCCMark size={130} color="var(--brand-green)" showWordmark={true} wordmarkColor="var(--brand-green)"/>
          </div>
        </TShirt>
      </div>
    </DCArtboard>
    ,<DCArtboard key="hoodie" id="hoodie" label="Hoodie" width={460} height={520}>
      <div style={{ width: 460, height: 520, background: "var(--surface)", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Hoodie shirtColor="var(--brand-deep)" inkColor="var(--paper)" label="HOODIE · CHEST">
          <GCCMark size={100} color="var(--paper)"/>
        </Hoodie>
      </div>
    </DCArtboard>
    ,<DCArtboard key="tote-natural" id="tote-natural" label="Tote — natural canvas" width={420} height={520}>
      <div style={{ width: 420, height: 520, background: "var(--surface)", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Tote bagColor="#E8DDC8" inkColor="var(--brand-green)" label="NATURAL CANVAS">
          <div style={{ textAlign: "center" }}>
            <GCCMark size={120} color="var(--brand-green)" showWordmark={true} wordmarkColor="var(--brand-green)"/>
          </div>
        </Tote>
      </div>
    </DCArtboard>
    ,<DCArtboard key="tote-green" id="tote-green" label="Tote — green" width={420} height={520}>
      <div style={{ width: 420, height: 520, background: "var(--surface)", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Tote bagColor="var(--brand-deep)" inkColor="var(--paper)" label="GREEN CANVAS">
          <div style={{ textAlign: "center", color: "var(--paper)" }}>
            <SingleLeaf size={50} color="var(--paper)"/>
            <div style={{ fontFamily: "var(--brand-display)", fontStyle: "italic", fontSize: 26, marginTop: 14, fontWeight: 500 }}>
              an everyday<br/>church.
            </div>
          </div>
        </Tote>
      </div>
    </DCArtboard>
  ]);

// ---------- Top-level App ----------
const App = () => {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  useFontLoader(t.typeset);
  useBrandVars(t.palette, t.typeset);

  return (
    <>
      <DesignCanvas
        title="Grace Community Church · Brand Kit"
        subtitle="A reusable system for web, slides, social, and merch — designed in the spirit of the existing Grace mark."
      >
        <DCSection id="essence" title="01 · Essence">
          {BrandEssence()}
        </DCSection>

        <DCSection id="logo" title="02 · Logo system">
          {LogoLockups()}
        </DCSection>

        <DCSection id="logo-rules-section" title="03 · Logo rules">
          {LogoRules()}
          {LogoDonts()}
        </DCSection>

        <DCSection id="palette" title="04 · Color palette · 3 explorations">
          {Object.values(PALETTES).map(p => (
            <DCArtboard key={p.id} id={`palette-${p.id}`} label={p.name} width={620} height={380}>
              <PaletteCard palette={p} active={t.palette === p.id}/>
            </DCArtboard>
          ))}
        </DCSection>

        <DCSection id="typography" title="05 · Typography · 3 explorations">
          {Object.values(TYPE_SETS).map(s => (
            <DCArtboard key={s.id} id={`type-${s.id}`} label={s.name} width={620} height={620}>
              <TypeCard set={s} active={t.typeset === s.id}/>
            </DCArtboard>
          ))}
        </DCSection>

        <DCSection id="iconography" title="06 · Iconography & motif">
          {Iconography()}
        </DCSection>

        <DCSection id="voice" title="07 · Voice & tone">
          {VoiceTone()}
        </DCSection>

        <DCSection id="social" title="08 · Social templates">
          {SocialSection()}
        </DCSection>

        <DCSection id="merch" title="09 · Merch">
          {MerchSection()}
        </DCSection>

        <DCSection id="pattern" title="10 · Pattern / texture">
          <PatternSection/>
        </DCSection>

        <DCSection id="photography" title="11 · Photography direction">
          <PhotographyDirection/>
        </DCSection>

        <DCSection id="powerpoint" title="12 · Presentation deck">
          <PowerPointSection/>
        </DCSection>

        <DCSection id="print" title="13 · Print collateral">
          <PrintSection/>
        </DCSection>

        <DCSection id="web" title="14 · Web components">
          <WebComponents/>
        </DCSection>

        <DCSection id="email-sig" title="15 · Email signature">
          <EmailSignature/>
        </DCSection>

        <DCSection id="scripture" title="16 · Scripture / quote template">
          <ScriptureSection/>
        </DCSection>

        <DCSection id="accessibility" title="17 · Accessibility / WCAG">
          <AccessibilitySection/>
        </DCSection>

        <DCSection id="logo-pack" title="18 · Downloadable logo pack">
          <LogoPackSection/>
        </DCSection>
      </DesignCanvas>

      <TweaksPanel title="Tweaks">
        <TweakSection label="Active palette">
          <TweakRadio
            label="Palette"
            value={t.palette}
            onChange={v => setTweak("palette", v)}
            options={Object.values(PALETTES).map(p => ({ value: p.id, label: p.name }))}
          />
        </TweakSection>
        <TweakSection label="Active type pairing">
          <TweakRadio
            label="Type"
            value={t.typeset}
            onChange={v => setTweak("typeset", v)}
            options={Object.values(TYPE_SETS).map(s => ({ value: s.id, label: s.name }))}
          />
        </TweakSection>
        <TweakSection label="About">
          <div style={{ fontSize: 12, color: "#666", lineHeight: 1.5 }}>
            Toggling a palette or type pairing updates the entire kit live —
            every logo, mockup, and template re-skins to match. Use this to
            audition directions before locking one in.
          </div>
        </TweakSection>
      </TweaksPanel>
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
