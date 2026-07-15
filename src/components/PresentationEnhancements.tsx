import Link from "next/link";
import { buildInquiryHref } from "@/lib/inquiry";

type Enhancement = {
  title: string;
  description: string;
  includes: string[];
};

const enhancements: Enhancement[] = [
  {
    title: "Brand Identity Kit",
    description:
      "A coordinated visual system that helps keep your presentation and future materials consistent.",
    includes: [
      "Custom color palette",
      "Typography recommendations",
      "Icon style direction",
      "Presentation visual language",
      "One-page brand reference sheet",
    ],
  },
  {
    title: "Custom Presentation Template",
    description:
      "A reusable branded slide system your team can continue using after the project is complete.",
    includes: [
      "Branded title slide",
      "Section divider layouts",
      "Standard content layouts",
      "Quote or testimonial slide",
      "Comparison layout",
      "Closing and thank-you slides",
      "Blank branded slide layouts",
    ],
  },
  {
    title: "Custom Icon Library",
    description:
      "A matching set of icons designed or selected to support your services, features, navigation, and presentation content.",
    includes: [
      "Service icons",
      "Feature icons",
      "Navigation icons",
      "Callout icons",
      "Consistent visual style",
    ],
  },
  {
    title: "Content Refinement",
    description:
      "Support organizing, simplifying, and improving the wording of your existing presentation content.",
    includes: [
      "Content restructuring",
      "Readability improvements",
      "Simplified technical language",
      "Stronger headings",
      "Clearer calls to action",
    ],
  },
  {
    title: "Image Sourcing and Editing",
    description:
      "Professional support selecting and preparing images that match the presentation style.",
    includes: [
      "Image sourcing",
      "Cropping and resizing",
      "Background removal",
      "Basic color correction",
      "Consistent formatting",
      "Presentation-ready optimization",
    ],
  },
  {
    title: "Ongoing Presentation Updates",
    description:
      "Continued support for future edits, updated information, new services, pricing changes, or additional slides.",
    includes: [
      "New slide creation",
      "Content updates",
      "Photo replacements",
      "Service additions",
      "Navigation updates",
      "Layout adjustments",
    ],
  },
];

export function PresentationEnhancements() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-header reveal section-header-centered">
          <span className="eyebrow">Optional Enhancements</span>
          <h2>Customize your presentation.</h2>
          <p>
            Every presentation can be tailored with additional design, branding,
            content, and functionality based on how your business plans to use it.
          </p>
        </div>

        <div className="presentation-enhancements-grid">
          {enhancements.map((enhancement, index) => (
            <article
              className="presentation-enhancement-card reveal"
              key={enhancement.title}
              style={{ animationDelay: `${index * 70}ms` }}
            >
              <span className="presentation-enhancement-icon" aria-hidden="true">
                <span />
              </span>
              <h3>{enhancement.title}</h3>
              <p>{enhancement.description}</p>
              <ul className="presentation-package-list">
                {enhancement.includes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Link
                className="button-secondary"
                href={buildInquiryHref("Presentation Design", enhancement.title)}
              >
                Ask About This Enhancement
              </Link>
            </article>
          ))}
        </div>

        <p className="presentation-package-note">
          Enhancements are quoted separately based on the amount of content, design
          complexity, and level of customization required.
        </p>

        <div className="presentation-enhancements-cta">
          <Link className="button" href={buildInquiryHref("Presentation Design")}>
            Discuss Presentation Enhancements
          </Link>
        </div>
      </div>
    </section>
  );
}
