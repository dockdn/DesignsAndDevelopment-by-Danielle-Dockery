import Link from "next/link";
import { BackToHomeLink } from "@/components/BackToHomeLink";
import { ServiceAddOnsSection } from "@/components/ServiceAddOnsSection";
import { ServiceFaqSection } from "@/components/ServiceFaqSection";
import { buildInquiryHref } from "@/lib/inquiry";

const websitePackages = [
  {
    title: "Business Starter",
    bestFor: "Small businesses that simply need a professional online presence.",
    items: [
      "Home page",
      "About page",
      "Services",
      "Contact form",
      "Mobile responsive",
      "Basic SEO setup",
    ],
    button: "Inquire About Starter",
  },
  {
    title: "Growth Website",
    bestFor: "Businesses that want to attract new customers and generate leads.",
    items: [
      "Multiple service pages",
      "Portfolio or gallery",
      "Testimonials",
      "Lead capture forms",
      "Calls to action",
      "Google Maps",
      "Mobile optimization",
      "SEO foundation",
    ],
    button: "Inquire About Growth",
    highlight: "Most Popular",
  },
  {
    title: "Business Platform",
    bestFor: "Businesses that need advanced functionality.",
    items: [
      "Large multi-page website",
      "Appointment requests",
      "Client forms",
      "Interactive content",
      "Custom functionality",
      "Resource pages",
      "Blog or news section",
      "CMS integration where appropriate",
    ],
    button: "Request a Custom Quote",
  },
  {
    title: "E-Commerce",
    bestFor: "Businesses selling products online.",
    items: [
      "Online storefront",
      "Shopping cart",
      "Secure checkout",
      "Product management",
      "Order tracking",
      "Inventory integration",
      "Customer accounts (when applicable)",
    ],
    button: "Request a Custom Quote",
  },
];

const websiteHighlights = [
  "Professional, responsive custom design",
  "Clear service structure and navigation",
  "Lead generation and inquiry-focused layouts",
  "Flexible scope based on goals and functionality",
];

const websiteAddOns = [
  {
    title: "Additional Service Pages",
    description: "Expand the site with more detailed pages for specific services, locations, or offerings.",
    items: ["Service detail pages", "Location pages", "Specialized landing pages", "Content organization"],
  },
  {
    title: "Blog or Resource Center",
    description: "Add a structured content area for updates, insights, educational content, or SEO support.",
    items: ["Blog setup", "Category structure", "Featured posts", "Search-friendly organization"],
  },
  {
    title: "Booking or Lead Capture Tools",
    description: "Add stronger inquiry tools when the website needs to support scheduling or guided lead collection.",
    items: ["Appointment requests", "Multi-step forms", "Lead routing", "Confirmation flows"],
  },
  {
    title: "Content Migration and Cleanup",
    description: "Help moving, refining, and organizing existing content into the new site structure.",
    items: ["Page content migration", "Content cleanup", "Image organization", "Formatting support"],
  },
  {
    title: "SEO and Launch Support",
    description: "Additional setup to strengthen discoverability and make launch feel complete and polished.",
    items: ["Metadata setup", "Redirect planning", "Launch checklist", "Analytics support"],
  },
  {
    title: "Ongoing Updates",
    description: "Continued support for future edits, new pages, content changes, and feature improvements.",
    items: ["Content edits", "New page creation", "Design refinements", "Feature updates"],
  },
];

const faqs = [
  {
    question: "How do I know which website package is right for me?",
    answer:
      "That depends on your goals, the number of pages you need, and whether the site needs lead generation, advanced functionality, or e-commerce. I can help recommend the best fit after a planning conversation.",
  },
  {
    question: "Can you redesign an existing website instead of starting from scratch?",
    answer:
      "Yes. Some projects are complete rebuilds, while others are redesigns built around improving structure, visual clarity, and conversions.",
  },
  {
    question: "Do I need to provide all of the written content first?",
    answer:
      "No. Existing content is helpful, but the project can also begin with planning, page mapping, and identifying what content still needs to be created or refined.",
  },
  {
    question: "Will my website be mobile responsive?",
    answer:
      "Yes. Websites are designed and developed to work cleanly across desktop, tablet, and mobile screen sizes.",
  },
];

export default function WebsiteDesignPage() {
  return (
    <main className="presentation-design-page">
      <BackToHomeLink />

      <section className="section service-page-hero-section">
        <div className="container presentation-hero-shell reveal">
          <div className="presentation-hero-copy">
            <span className="eyebrow">Website Design</span>
            <h1>Websites built around the way your business grows.</h1>
            <p>
              I design and develop modern websites that help businesses build trust,
              explain their services, generate leads, and create a professional online
              presence.
            </p>
            <div className="hero-actions">
              <Link className="button" href={buildInquiryHref("Website Design & Development")}>
                Start a Website Project
              </Link>
            </div>
          </div>

          <div className="service-hero-summary reveal delay-1">
            <span className="eyebrow">Service snapshot</span>
            <h2>Built to support trust, clarity, and real business goals.</h2>
            <ul className="presentation-benefits-list" aria-label="Website service highlights">
              {websiteHighlights.map((point) => (
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
            <h2>Not every business needs the same website.</h2>
            <p>
              Some businesses need a simple online presence. Others need lead
              generation, online bookings, customer portals, or more advanced custom
              functionality.
            </p>
          </div>

          <div className="presentation-benefits-card reveal delay-1">
            <p className="mobile-app-overview-copy">
              Every website is designed around your business goals rather than forcing
              every client into the same template. The result should feel clear,
              trustworthy, organized, and ready to support growth.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header reveal section-header-centered">
            <span className="eyebrow">Packages</span>
            <h2>Website packages</h2>
          </div>

          <div className="website-packages-grid">
            {websitePackages.map((pkg, index) => (
              <article
                className={`presentation-package-card ${pkg.highlight ? "presentation-package-featured" : ""} reveal`}
                key={pkg.title}
                style={{ animationDelay: `${index * 70}ms` }}
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
        </div>
      </section>

      <ServiceAddOnsSection
        heading="Optional website add-ons"
        description="Expand the project with additional features, content support, and launch planning when your website needs to do more."
        addOns={websiteAddOns}
        service="Website Design & Development"
        ctaLabel="Discuss Website Add-ons"
      />

      <ServiceFaqSection
        description="A few common questions about planning, scope, content, and launch."
        faqs={faqs}
        service="Website Design & Development"
        ctaLabel="Start Your Website Project"
      />

      <section className="section">
        <div className="container presentation-inquiry-card reveal">
          <span className="eyebrow">Start Your Project</span>
          <h2>Ready to create a website that works for your business?</h2>
          <p>
            Whether you need a polished online presence or a more advanced platform, I
            can help plan the right structure, scope, and next steps for your project.
          </p>
          <div>
            <Link className="button" href={buildInquiryHref("Website Design & Development")}>
              Start a Website Project
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
