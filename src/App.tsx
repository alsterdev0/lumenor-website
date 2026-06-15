import {
  ArrowRight,
  Code2,
  Globe2,
  Settings
} from "lucide-react";
import lumenorLogo from "./assets/lumenor-logo-cropped.png";
import heroImage from "./assets/lumenor-hero.png";
import lumeSymbol from "./assets/lume-symbol-transparent.png";
import snapcashLogo from "./assets/snapcash-logo.svg";
import dataseaLogo from "./assets/datasea-logo.svg";

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

function HeroArtwork() {
  return (
    <div className="hero-visual" aria-hidden="true">
      <img src={heroImage} alt="" loading="eager" decoding="async" />
    </div>
  );
}

export function App() {
  return (
    <div className="page-shell">
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
            <HeroArtwork />
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
