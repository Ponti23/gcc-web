// GCC logo system — re-drawn from the original mark.
// Pure SVG so it scales cleanly to any size, color, and background.

const GCCMark = ({
  color = "var(--brand-green)",
  textColor,
  showWordmark = false,
  wordmarkColor,
  size = 220,
  weight = 800,
  letterSpacing = "-0.02em",
}) => {
  const _text = textColor || color;
  const _word = wordmarkColor || color;
  return (
    <svg viewBox={showWordmark ? "0 0 600 360" : "0 0 600 320"} width={size} style={{ display: "block" }}>
      {/* Two leaves above the second C */}
      <g transform="translate(420 18)">
        {/* left leaf */}
        <path
          d="M 0 60 C -28 50, -38 24, -32 0 C -8 4, 12 22, 18 50 C 12 56, 4 60, 0 60 Z"
          fill={color}
        />
        {/* right leaf */}
        <path
          d="M 8 60 C 36 50, 46 24, 40 0 C 16 4, -4 22, -10 50 C -4 56, 4 60, 8 60 Z"
          fill={color}
          opacity="0.95"
        />
        {/* stem */}
        <rect x="-1.5" y="50" width="3" height="22" fill={color} />
      </g>
      {/* GCC wordmark */}
      <text
        x="300"
        y="248"
        textAnchor="middle"
        fontFamily="var(--brand-display), 'Outfit', sans-serif"
        fontSize="240"
        fontWeight={weight}
        letterSpacing={letterSpacing}
        fill={_text}
      >
        GCC
      </text>
      {showWordmark && (
        <text
          x="300"
          y="320"
          textAnchor="middle"
          fontFamily="var(--brand-body), 'Outfit', sans-serif"
          fontSize="38"
          fontWeight="600"
          letterSpacing="0.18em"
          fill={_word}
        >
          GRACE COMMUNITY CHURCH
        </text>
      )}
    </svg>
  );
};

const GCCBadge = ({ color = "var(--brand-green)", size = 240 }) => (
  <svg viewBox="0 0 400 400" width={size} style={{ display: "block" }}>
    {/* outer crescent — open on the right */}
    <path
      d="M 200 30 A 170 170 0 1 0 370 200"
      fill="none"
      stroke={color}
      strokeWidth="14"
      strokeLinecap="round"
    />
    {/* inner thin crescent */}
    <path
      d="M 200 60 A 140 140 0 1 0 340 200"
      fill="none"
      stroke={color}
      strokeWidth="3"
      strokeLinecap="round"
      opacity="0.55"
    />
    {/* inner GCC mark */}
    <g transform="translate(80 100) scale(0.4)">
      <g transform="translate(420 18)">
        <path
          d="M 0 60 C -28 50, -38 24, -32 0 C -8 4, 12 22, 18 50 C 12 56, 4 60, 0 60 Z"
          fill={color}
        />
        <path
          d="M 8 60 C 36 50, 46 24, 40 0 C 16 4, -4 22, -10 50 C -4 56, 4 60, 8 60 Z"
          fill={color}
          opacity="0.95"
        />
        <rect x="-1.5" y="50" width="3" height="22" fill={color} />
      </g>
      <text
        x="300"
        y="248"
        textAnchor="middle"
        fontFamily="var(--brand-display), 'Outfit', sans-serif"
        fontSize="240"
        fontWeight="800"
        letterSpacing="-0.02em"
        fill={color}
      >
        GCC
      </text>
    </g>
  </svg>
);

const GCCHorizontal = ({
  color = "var(--brand-green)",
  textColor,
  size = 360,
}) => {
  const _text = textColor || color;
  return (
    <svg viewBox="0 0 900 200" width={size} style={{ display: "block" }}>
      {/* mark */}
      <g transform="translate(20 -20) scale(0.55)">
        <g transform="translate(420 18)">
          <path
            d="M 0 60 C -28 50, -38 24, -32 0 C -8 4, 12 22, 18 50 C 12 56, 4 60, 0 60 Z"
            fill={color}
          />
          <path
            d="M 8 60 C 36 50, 46 24, 40 0 C 16 4, -4 22, -10 50 C -4 56, 4 60, 8 60 Z"
            fill={color}
            opacity="0.95"
          />
          <rect x="-1.5" y="50" width="3" height="22" fill={color} />
        </g>
        <text
          x="300"
          y="248"
          textAnchor="middle"
          fontFamily="var(--brand-display), 'Outfit', sans-serif"
          fontSize="240"
          fontWeight="800"
          letterSpacing="-0.02em"
          fill={_text}
        >
          GCC
        </text>
      </g>
      {/* divider */}
      <rect x="395" y="55" width="2" height="80" fill={_text} opacity="0.35" />
      {/* wordmark stack */}
      <text
        x="425"
        y="92"
        fontFamily="var(--brand-display), 'Playfair Display', serif"
        fontSize="36"
        fontWeight="600"
        fill={_text}
      >
        Grace Community
      </text>
      <text
        x="425"
        y="135"
        fontFamily="var(--brand-body), 'Outfit', sans-serif"
        fontSize="20"
        fontWeight="500"
        letterSpacing="0.22em"
        fill={_text}
        opacity="0.7"
      >
        CHURCH · EST. PERTH
      </text>
    </svg>
  );
};

const LeafIcon = ({ color = "var(--brand-green)", size = 80 }) => (
  <svg viewBox="0 0 100 100" width={size} style={{ display: "block" }}>
    <g transform="translate(50 22)">
      <path
        d="M 0 60 C -28 50, -38 24, -32 0 C -8 4, 12 22, 18 50 C 12 56, 4 60, 0 60 Z"
        fill={color}
      />
      <path
        d="M 8 60 C 36 50, 46 24, 40 0 C 16 4, -4 22, -10 50 C -4 56, 4 60, 8 60 Z"
        fill={color}
        opacity="0.9"
      />
      <rect x="-1.5" y="50" width="3" height="20" fill={color} />
    </g>
  </svg>
);

const SingleLeaf = ({ color = "var(--brand-green)", size = 60, flip = false }) => (
  <svg viewBox="-50 0 100 80" width={size} style={{ display: "block", transform: flip ? "scaleX(-1)" : "" }}>
    <path
      d="M 8 70 C 36 60, 46 34, 40 10 C 16 14, -4 32, -10 60 C -4 66, 4 70, 8 70 Z"
      fill={color}
    />
  </svg>
);

Object.assign(window, { GCCMark, GCCBadge, GCCHorizontal, LeafIcon, SingleLeaf });
