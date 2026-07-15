import Link from "next/link";

const primaryServices = [
  {
    title: "Website Design & Development",
    description:
      "Professional websites designed around your business goals, customers, content, and required functionality.",
    href: "/website-design",
    tone: "sky",
  },
  {
    title: "Mobile Business Applications",
    description:
      "Custom iPhone and iPad applications created around specific business workflows and operational needs.",
    href: "/mobile-app-solutions",
    tone: "white",
  },
  {
    title: "Interactive Sales Presentations",
    description:
      "Custom presentation systems designed to organize information, guide conversations, and support confident selling.",
    href: "/presentation-design",
    tone: "navy",
  },
];

const supportingCapabilities = [
  "UI and UX Design",
  "Front-End Development",
  "Custom Digital Solutions",
];

export function ServicesSection() {
  return (
    <section className="section" id="services">
      <div className="container services-section-shell">
        <div className="section-header reveal">
          <span className="eyebrow">Services</span>
          <h2>What can clients hire Danielle to create?</h2>
          <p>
            Focused digital services built around clarity, usefulness, and real business
            goals.
          </p>
        </div>

        <div className="services-cards-grid services-primary-grid">
          {primaryServices.map((service, index) => (
            <article
              className={`service-showcase-card service-tone-${service.tone} reveal`}
              key={service.title}
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <span className="service-showcase-icon" aria-hidden="true">
                <span />
              </span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <Link className="button-secondary service-showcase-button" href={service.href}>
                Learn More
              </Link>
            </article>
          ))}
        </div>

        <div className="services-supporting-shell reveal">
          <span className="eyebrow">Supporting capabilities</span>
          <div className="services-supporting-list" aria-label="Supporting capabilities">
            {supportingCapabilities.map((capability) => (
              <span className="services-supporting-pill" key={capability}>
                {capability}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
