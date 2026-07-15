import Link from "next/link";

export function AboutSection() {
  return (
    <section className="section" id="about">
      <div className="container about-editorial-layout">
        <div className="about-portrait-panel reveal">
          <div
            className="about-portrait-placeholder"
            role="img"
            aria-label="Placeholder for Danielle Dockery headshot"
          />
          <div className="about-caption">
            <strong>Danielle Dockery</strong>
            <span>Designer and Developer</span>
          </div>
        </div>

        <div className="about-copy-panel reveal delay-1">
          <span className="eyebrow">Hi, I&apos;m Danielle</span>
          <h2>Design, organization, and development working together.</h2>
          <p>
            I create polished digital solutions for businesses by combining design,
            structure, and development into work that feels clear, useful, and ready to
            support real operations.
          </p>
          <p className="about-supporting-statement">
            My goal is not only to make something look good, but to create tools that
            support how a business communicates, presents itself, and stays organized.
          </p>
          <div>
            <Link className="button-secondary" href="/about">
              More About Me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
