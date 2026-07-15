import Link from "next/link";
import { BackToHomeLink } from "@/components/BackToHomeLink";
import { PresentationEnhancements } from "@/components/PresentationEnhancements";
import { ServiceFaqSection } from "@/components/ServiceFaqSection";
import { buildInquiryHref } from "@/lib/inquiry";

const packages = [
  {
    title: "Essential Presentation",
    bestFor: "Short company introductions, proposals, or focused service presentations.",
    items: [
      "Up to 10 custom slides",
      "Branded visual design",
      "Clear content organization",
      "One navigation style",
      "One revision round",
      "Final editable presentation file",
    ],
    button: "Inquire About Essential",
  },
  {
    title: "Interactive Presentation",
    bestFor: "Sales presentations, service guides, catalogs, and customer-facing experiences.",
    items: [
      "Up to 25 custom slides",
      "Interactive buttons and navigation",
      "Custom section structure",
      "Branded design system",
      "Touch-friendly layout",
      "Two revision rounds",
      "Final editable presentation file",
    ],
    button: "Inquire About Interactive",
    highlight: "Most Popular",
  },
  {
    title: "Custom Presentation System",
    bestFor:
      "Large presentations, extensive catalogs, multi-section sales tools, or custom business experiences.",
    items: [
      "Custom slide count",
      "Advanced interactive navigation",
      "Multiple service or product sections",
      "Lookbooks, reviews, team, and company content",
      "Custom icons and visual components",
      "Tablet or iPad optimization",
      "Multiple revision rounds",
      "Final editable presentation file",
    ],
    button: "Request a Custom Quote",
  },
];

const heroPoints = [
  "Sales tools and service presentations",
  "Touch-friendly interactive navigation",
  "Clear information hierarchy and branded design",
  "Organized structure built around real conversations",
];

const faqs = [
  {
    question: "What types of presentations do you design?",
    answer:
      "I design interactive sales presentations, company introductions, service overviews, digital catalogs, internal training materials, and other presentation systems built around how a business actually uses them.",
  },
  {
    question: "Do I need all of my content ready before we begin?",
    answer:
      "No. Existing content is helpful, but I can help organize what you already have and recommend the right structure before final design begins.",
  },
  {
    question: "Can these presentations be used on an iPad or in person with clients?",
    answer:
      "Yes. Presentation projects can be planned specifically for touch interaction, guided selling, and in-person use depending on your workflow.",
  },
  {
    question: "Will I receive an editable file at the end?",
    answer:
      "Yes. Final presentations are delivered in an editable format so future updates can be made as your business evolves.",
  },
];

export default function PresentationDesignPage() {
  return (
    <main className="presentation-design-page">
      <BackToHomeLink />

      <section className="section service-page-hero-section">
        <div className="container presentation-hero-shell reveal">
          <div className="presentation-hero-copy">
            <span className="eyebrow">Presentation Design</span>
            <h1>Interactive presentations that inform, engage, and guide.</h1>
            <p>
              I design custom presentation systems that help businesses explain services,
              organize information, guide customer conversations, and present themselves
              with confidence.
            </p>
            <div className="hero-actions">
              <Link className="button" href={buildInquiryHref("Presentation Design")}>
                Inquire About a Presentation
              </Link>
            </div>
          </div>

          <div className="service-hero-summary reveal delay-1">
            <span className="eyebrow">Service snapshot</span>
            <h2>Built for presentations that need to work in real conversations.</h2>
            <ul className="presentation-benefits-list" aria-label="Presentation service highlights">
              {heroPoints.map((point) => (
                <li key={point}>
                  <span className="panther-feature-icon" aria-hidden="true" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container presentation-overview-shell">
          <div className="section-aside reveal">
            <span className="eyebrow">Overview</span>
            <h2>More than a slide deck.</h2>
            <p>
              Interactive presentations can function as sales tools, educational guides,
              service catalogs, digital lookbooks, company introductions, or internal
              training resources. Each project is structured around the way the
              presentation will actually be used.
            </p>
          </div>

          <div className="presentation-benefits-card reveal delay-1">
            <ul className="presentation-benefits-list" aria-label="Presentation service benefits">
              {heroPoints.map((point) => (
                <li key={point}>
                  <span className="panther-feature-icon" aria-hidden="true" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header reveal section-header-centered">
            <span className="eyebrow">Packages</span>
            <h2>Presentation packages</h2>
          </div>

          <div className="presentation-packages-grid">
            {packages.map((pkg, index) => (
              <article
                className={`presentation-package-card ${pkg.highlight ? "presentation-package-featured" : ""} reveal`}
                key={pkg.title}
                style={{ animationDelay: `${index * 80}ms` }}
              >
                {pkg.highlight ? <span className="presentation-package-badge">{pkg.highlight}</span> : null}
                <h3>{pkg.title}</h3>
                <p className="presentation-package-bestfor">
                  <strong>Best for:</strong> {pkg.bestFor}
                </p>
                <ul className="presentation-package-list">
                  {pkg.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <Link className="button-secondary" href={buildInquiryHref(pkg.title)}>
                  {pkg.button}
                </Link>
              </article>
            ))}
          </div>

          <p className="presentation-package-note">
            Every presentation project is customized based on slide count, content
            readiness, complexity, interactivity, and intended use.
          </p>
        </div>
      </section>

      <PresentationEnhancements />

      <ServiceFaqSection
        description="A few common questions about planning, content, format, and delivery."
        faqs={faqs}
        service="Presentation Design"
        ctaLabel="Start Your Presentation Project"
      />

      <section className="section">
        <div className="container presentation-inquiry-card reveal">
          <span className="eyebrow">Start Your Project</span>
          <h2>Ready to create a presentation that works harder?</h2>
          <p>
            Tell me what you need to present, who the audience is, and how you plan to
            use it. I will help determine the right structure and package for your
            project.
          </p>
          <div>
            <Link className="button" href={buildInquiryHref("Presentation Design")}>
              Start a Presentation Request
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
