import Link from "next/link";

export function HeroSection() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-copy hero-copy-expanded">
          <span className="eyebrow reveal">Design that connects. Development that delivers.</span>
          <h1 className="reveal delay-1">
            <span>Digital experiences</span>
            <span className="hero-emphasis">designed around</span>
            <span>the way your business works.</span>
          </h1>
          <p className="reveal delay-2">
            Custom websites, applications, interactive sales tools, and business solutions
            created with thoughtful design, practical functionality, and real-world
            usability.
          </p>
          <div className="hero-actions reveal delay-2">
            <Link className="button" href="/#start-project">
              Start a Project
            </Link>
            <Link className="button-secondary" href="/portfolio">
              View Portfolio
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
