import {
  ArrowRight,
  BarChart3,
  Code2,
  Globe2,
  Settings,
  UsersRound
} from "lucide-react";
import lumenorLogo from "./assets/lumenor-logo-cropped.png";
import lumeSymbol from "./assets/lume-symbol-transparent.png";
import snapcashLogo from "./assets/snapcash-logo.svg";
import dataseaLogo from "./assets/datasea-logo.svg";
import desktopParityReference from "./assets/desktop-parity-reference.png";

const capabilities = [
  {
    title: "Development",
    body: "We build scalable, user-centric products with modern technology and a focus on quality.",
    Icon: Code2
  },
  {
    title: "Distribution",
    body: "We expand reach across channels and markets to connect products with the right audiences.",
    Icon: Globe2
  },
  {
    title: "Operations",
    body: "We optimize performance through data-driven operations and relentless improvement.",
    Icon: Settings
  }
];

const portfolio = [
  {
    name: "SnapCash",
    logo: snapcashLogo,
    body: "Rewards and payouts platform for digital users and engagement.",
    badge: "Rewards",
    tone: "green"
  },
  {
    name: "DataSea",
    logo: dataseaLogo,
    body: "Data collection and proxy infrastructure for modern web operations.",
    badge: "Data Infrastructure",
    tone: "blue"
  }
];

function Logo({ className = "" }: { className?: string }) {
  return <img className={`logo-image ${className}`} src={lumenorLogo} alt="Lumenor" />;
}

function HeroNetwork() {
  return (
    <div className="hero-visual" aria-hidden="true">
      <svg className="network-lines" viewBox="0 0 520 410" fill="none">
        <ellipse cx="265" cy="207" rx="231" ry="160" stroke="#DFE7F2" strokeWidth="1" />
        <ellipse
          cx="265"
          cy="207"
          rx="186"
          ry="119"
          stroke="#E8EEF6"
          strokeWidth="1"
          transform="rotate(-12 265 207)"
        />
        <path d="M70 210H178L245 160H330L440 112" stroke="#BCC7DA" strokeWidth="1.25" />
        <path d="M120 102L190 124L250 198L354 250L474 250" stroke="#BCC7DA" strokeWidth="1.25" />
        <path d="M125 318L210 252L250 198L332 160L451 190" stroke="#BCC7DA" strokeWidth="1.25" />
        <path d="M210 252L280 316L363 264" stroke="#BCC7DA" strokeWidth="1.25" />
        <path d="M250 198L256 96L336 126" stroke="#BCC7DA" strokeWidth="1.25" />
        <path d="M330 160L356 198L452 126" stroke="#BCC7DA" strokeWidth="1.25" />
        <path d="M190 124L330 160" stroke="#D2D9E6" strokeWidth="1.25" />
        <path d="M356 198L474 250" stroke="#D2D9E6" strokeWidth="1.25" />
        {[
          [70, 210],
          [120, 102],
          [125, 318],
          [178, 210],
          [190, 124],
          [210, 252],
          [245, 160],
          [250, 198],
          [256, 96],
          [280, 316],
          [330, 160],
          [336, 126],
          [354, 250],
          [356, 198],
          [363, 264],
          [440, 112],
          [451, 190],
          [452, 126],
          [474, 250]
        ].map(([cx, cy]) => (
          <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="3" fill="#B7C2D4" />
        ))}
        <circle cx="190" cy="124" r="5" fill="#8491A7" />
        <circle cx="210" cy="252" r="5.5" fill="#0B1D3D" />
        <circle cx="440" cy="112" r="5.5" fill="#0B1D3D" />
      </svg>
      <div className="dot-field dot-field-top" />
      <div className="dot-field dot-field-bottom" />
      <div className="hero-tile hero-tile-small hero-tile-chart">
        <BarChart3 aria-hidden="true" />
      </div>
      <div className="hero-tile hero-tile-small hero-tile-users">
        <UsersRound aria-hidden="true" />
      </div>
      <div className="hero-tile hero-tile-small hero-tile-globe">
        <Globe2 aria-hidden="true" />
      </div>
      <div className="hero-tile hero-tile-small hero-tile-code">
        <Code2 aria-hidden="true" />
      </div>
      <div className="hero-tile hero-tile-center">
        <img src={lumeSymbol} alt="" />
      </div>
    </div>
  );
}

export function App() {
  return (
    <div className="page-shell">
      <img
        className="desktop-parity-layer"
        src={desktopParityReference}
        alt=""
        aria-hidden="true"
      />
      <header className="site-header">
        <div className="container">
          <Logo />
        </div>
      </header>

      <main>
        <section className="hero-section">
          <div className="container hero-grid">
            <div className="hero-copy">
              <h1>Building and Scaling Technology Properties</h1>
              <p>
                Lumenor develops, acquires, and distributes digital products across multiple
                markets&mdash;creating value through innovation, reach, and operational
                excellence.
              </p>
              <a className="button-primary" href="mailto:hello@lumenor.com">
                <span>Get In Touch</span>
                <ArrowRight aria-hidden="true" size={22} strokeWidth={1.9} />
              </a>
            </div>
            <HeroNetwork />
          </div>
        </section>

        <section className="section section-divider capabilities-section" aria-labelledby="capabilities-heading">
          <div className="container">
            <p className="eyebrow">WHAT WE DO</p>
            <h2 id="capabilities-heading" className="section-heading">
              End-to-End Capabilities That Drive Growth
            </h2>
            <div className="capability-grid">
              {capabilities.map(({ title, body, Icon }) => (
                <article className="card capability-card" key={title}>
                  <div className="icon-circle">
                    <Icon aria-hidden="true" size={35} strokeWidth={1.9} />
                  </div>
                  <div>
                    <h3>{title}</h3>
                    <p>{body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section portfolio-section" aria-labelledby="portfolio-heading">
          <div className="container">
            <p className="eyebrow">OUR PORTFOLIO</p>
            <h2 id="portfolio-heading" className="section-heading">
              Technology Properties We Own and Operate
            </h2>
            <div className="portfolio-grid">
              {portfolio.map((property) => (
                <article className="card portfolio-card" key={property.name}>
                  <img className="portfolio-logo" src={property.logo} alt={`${property.name} logo`} />
                  <p className="portfolio-description">{property.body}</p>
                  <span className={`badge badge-${property.tone}`}>{property.badge}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="philosophy-section" aria-labelledby="philosophy-heading">
          <div className="container">
            <article className="card philosophy-card">
              <div className="philosophy-logo-orb">
                <img src={lumeSymbol} alt="" />
              </div>
              <div className="philosophy-copy">
                <p className="eyebrow">OUR PHILOSOPHY</p>
                <h2 id="philosophy-heading">Built for the Long Term</h2>
                <p>
                  We believe the most enduring companies are built with purpose, patience,
                  and discipline. We partner with exceptional teams, invest for the long term,
                  and focus on creating lasting value through thoughtful growth and operational
                  excellence.
                </p>
              </div>
            </article>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <Logo className="footer-logo" />
          <p>Building and scaling technology properties that serve millions.</p>
          <p className="footer-meta">(c) 2026 Lumenor Holdings. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
