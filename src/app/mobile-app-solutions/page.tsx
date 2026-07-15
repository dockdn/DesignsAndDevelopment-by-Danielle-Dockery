import Link from "next/link";
import { BackToHomeLink } from "@/components/BackToHomeLink";
import { ServiceAddOnsSection } from "@/components/ServiceAddOnsSection";
import { ServiceFaqSection } from "@/components/ServiceFaqSection";
import { buildInquiryHref } from "@/lib/inquiry";

const appPackages = [
  {
    title: "Workflow Starter",
    bestFor: "Businesses replacing one repetitive manual process with a focused digital tool.",
    items: [
      "Simple focused workflow",
      "Core screens only",
      "Basic form and data handling",
      "One primary user flow",
      "Planning and delivery guidance",
    ],
    button: "Ask About Starter",
  },
  {
    title: "Operational App",
    bestFor: "Businesses that need a custom internal app supporting field or office operations.",
    items: [
      "Multiple workflow screens",
      "Structured data capture",
      "PDF or report generation",
      "Cloud sync planning",
      "Role-based flow considerations",
      "Revision rounds during build",
    ],
    button: "Ask About Operational App",
    highlight: "Most Popular",
  },
  {
    title: "Custom App System",
    bestFor: "Teams with more complex workflows, multiple user types, or broader operational requirements.",
    items: [
      "Expanded workflow architecture",
      "Custom feature planning",
      "Advanced data handling",
      "Integration planning",
      "Deployment guidance",
      "Future growth considerations",
    ],
    button: "Request a Custom Quote",
  },
];

const mobileHighlights = [
  "Custom tools built around existing workflows",
  "Operational clarity for field and office use",
  "Structured data capture and organization",
  "Scalable planning for future improvements",
];

const mobileAddOns = [
  {
    title: "PDF and Reporting Tools",
    description: "Add document generation, exports, summaries, or formatted reports tied to the app workflow.",
    items: ["PDF creation", "Report exports", "File sharing", "Structured summaries"],
  },
  {
    title: "Cloud Sync Setup",
    description: "Plan for shared records, syncing, and document access across devices or team members.",
    items: ["Cloud storage setup", "Sync planning", "Shared records", "Backup considerations"],
  },
  {
    title: "Offline Workflow Support",
    description: "Support work completed in environments with inconsistent signal or limited connectivity.",
    items: ["Offline capture", "Queued syncing", "Connection recovery planning", "Field-use considerations"],
  },
  {
    title: "Admin or Dashboard Views",
    description: "Add a management layer when app activity also needs to be monitored, reviewed, or organized centrally.",
    items: ["Admin views", "Status tracking", "Record review", "Management tools"],
  },
  {
    title: "Training and Rollout Support",
    description: "Help your team adopt the new workflow with launch guidance and practical documentation.",
    items: ["Launch planning", "Usage guidance", "Team walkthroughs", "Workflow documentation"],
  },
  {
    title: "Ongoing Improvements",
    description: "Continue expanding the application as the business learns more about what would be most useful.",
    items: ["Feature updates", "Workflow refinements", "New screens", "Long-term support planning"],
  },
];

const faqs = [
  {
    question: "Do you only build public App Store apps?",
    answer:
      "No. Some projects are private business applications built specifically for internal teams, field workflows, or operational use rather than public distribution.",
  },
  {
    question: "How do we know if a custom app is the right solution?",
    answer:
      "That depends on how repetitive the workflow is, how much manual handling is involved, and whether a tailored digital tool would save time or reduce friction. I help evaluate that before development begins.",
  },
  {
    question: "Can the app include forms, signatures, PDFs, or saved records?",
    answer:
      "Yes. Many custom app projects involve structured data capture, document generation, signatures, exports, syncing, or other workflow-specific features.",
  },
  {
    question: "What happens after the app is built?",
    answer:
      "Projects can be planned with future updates in mind so the app can continue evolving as workflows change or new needs are identified.",
  },
];

export default function MobileAppSolutionsPage() {
  return (
    <main className="mobile-app-page">
      <BackToHomeLink />

      <section className="section service-page-hero-section">
        <div className="container presentation-hero-shell reveal">
          <div className="presentation-hero-copy">
            <span className="eyebrow">Mobile App Solutions</span>
            <h1>Custom business apps built around the way your company works.</h1>
            <p>
              I design and develop custom iPhone and iPad applications that streamline
              business operations, replace repetitive manual tasks, organize information,
              and improve the way companies work in the field and in the office.
            </p>
            <div className="hero-actions">
              <Link className="button" href={buildInquiryHref("Mobile App Development")}>
                Start an App Project
              </Link>
            </div>
          </div>

          <div className="service-hero-summary reveal delay-1">
            <span className="eyebrow">Service snapshot</span>
            <h2>Built for practical workflows, not one-size-fits-all software.</h2>
            <ul className="presentation-benefits-list" aria-label="Mobile app service highlights">
              {mobileHighlights.map((point) => (
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
            <h2>Software built around the way your team already works.</h2>
            <p>
              Custom business applications can reduce repetitive tasks, organize
              information, and support field or office operations without forcing your
              company into generic off-the-shelf software.
            </p>
          </div>

          <div className="presentation-benefits-card reveal delay-1">
            <p className="mobile-app-overview-copy">
              The goal is to create something practical, focused, and genuinely useful
              for the workflow it is meant to support, whether that includes forms,
              records, signatures, reporting, or operational coordination.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header reveal section-header-centered">
            <span className="eyebrow">Packages</span>
            <h2>Mobile app project options</h2>
            <p>Projects are scoped around workflow complexity, feature needs, and how the application will be used.</p>
          </div>

          <div className="presentation-packages-grid">
            {appPackages.map((pkg, index) => (
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
        heading="Optional app add-ons"
        description="Additional capabilities can be added based on your workflow, team needs, and long-term operational goals."
        addOns={mobileAddOns}
        service="Mobile App Development"
        ctaLabel="Discuss App Add-ons"
      />

      <ServiceFaqSection
        description="A few common questions about scope, workflow planning, and custom business applications."
        faqs={faqs}
        service="Mobile App Development"
        ctaLabel="Start Your App Project"
      />

      <section className="section">
        <div className="container presentation-inquiry-card reveal">
          <span className="eyebrow">Start Your Project</span>
          <h2>Let&apos;s solve your workflow.</h2>
          <p>
            If your business is spending too much time on paperwork, repetitive
            processes, or disconnected systems, let&apos;s plan a custom solution built
            around the way your company operates.
          </p>
          <div>
            <Link className="button" href={buildInquiryHref("Mobile App Development")}>
              Start an App Project
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
