import Link from "next/link";

const features = [
  "Fully interactive navigation",
  "Custom service and material sections",
  "Built for iPad and touch navigation",
  "Roofing, siding, windows, and masonry education",
  "Reviews and company information",
  "Kitchen and bathroom lookbooks",
  "Flexible payment information",
  "License and insurance documentation",
  "Consistent navigation throughout",
];

const supportingSlides = [
  {
    title: "Roofing Anatomy screen",
    path: "/public/projects/panther/roofing-anatomy.png",
  },
  {
    title: "Product detail or window information screen",
    path: "/public/projects/panther/product-detail-slide.png",
  },
  {
    title: "License or insurance slide",
    path: "/public/projects/panther/license-insurance-slide.png",
  },
];

export function PantherPresentationShowcase() {
  return (
    <section
      className="section panther-showcase"
      aria-labelledby="panther-showcase-title"
    >
      <div className="container">
        <div className="panther-showcase-shell reveal">
          <div className="panther-showcase-copy">
            <span className="eyebrow">Featured Presentation Project</span>
            <h2 id="panther-showcase-title">
              <span>Interactive presentations</span>
              <span>
                that <span className="panther-showcase-emphasis">inform, engage</span>
              </span>
              <span>and guide.</span>
            </h2>
            <p>
              A large, fully interactive sales presentation designed for Panther Siding &
              Windows to help organize services, educate customers, and support an
              engaging in-person sales experience.
            </p>

            <ul className="panther-feature-list" aria-label="Panther presentation features">
              {features.map((feature) => (
                <li key={feature}>
                  <span className="panther-feature-icon" aria-hidden="true" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="panther-showcase-meta">
              <strong>Designed and developed by Danielle Dockery</strong>
            </div>

            <div className="voicepdfmemo-actions">
              <Link className="button" href="/case-studies/panther-sales-experience">
                View Presentation Project
              </Link>
            </div>
          </div>

          <div className="panther-showcase-visual">
            <div className="panther-device-stage" aria-hidden="true">
              <span className="panther-stage-wash" />
              <span className="panther-stage-dots" />
            </div>

            <div className="panther-tablet">
              <div className="panther-tablet-frame">
                <div
                  className="panther-tablet-screen panther-promotional-preview"
                  role="img"
                  aria-label="Promotional preview for the Panther interactive sales presentation"
                />
              </div>
            </div>

            <div className="panther-support-card panther-support-card-phone">
              <div
                className="panther-support-placeholder"
                role="img"
                aria-label="Placeholder for the Roofing Anatomy presentation screenshot"
              >
                <strong>Roofing Anatomy</strong>
                <span>/public/projects/panther/roofing-anatomy.png</span>
              </div>
            </div>

            <div className="panther-support-stack">
              {supportingSlides.slice(1).map((slide) => (
                <div className="panther-support-card" key={slide.title}>
                  <div
                    className="panther-support-placeholder"
                    role="img"
                    aria-label={`${slide.title} placeholder`}
                  >
                    <strong>{slide.title}</strong>
                    <span>{slide.path}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="panther-stats-card">
              <div>
                <strong>Multi-section interactive presentation</strong>
                <p>Structured for in-person sales conversations on iPad.</p>
              </div>
              <div>
                <strong>Built to educate and guide</strong>
                <p>Clear navigation, touch-friendly screens, and organized content.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
