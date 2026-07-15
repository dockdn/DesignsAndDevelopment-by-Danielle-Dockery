import Link from "next/link";
import { buildInquiryHref } from "@/lib/inquiry";

type AddOn = {
  title: string;
  description: string;
  items: string[];
};

type ServiceAddOnsSectionProps = {
  eyebrow?: string;
  heading: string;
  description: string;
  addOns: AddOn[];
  service: string;
  ctaLabel: string;
};

export function ServiceAddOnsSection({
  eyebrow = "Optional Add-ons",
  heading,
  description,
  addOns,
  service,
  ctaLabel,
}: ServiceAddOnsSectionProps) {
  return (
    <section className="section">
      <div className="container">
        <div className="section-header reveal section-header-centered">
          <span className="eyebrow">{eyebrow}</span>
          <h2>{heading}</h2>
          <p>{description}</p>
        </div>

        <div className="service-addons-grid">
          {addOns.map((addOn, index) => (
            <article
              className="service-addon-card reveal"
              key={addOn.title}
              style={{ animationDelay: `${index * 70}ms` }}
            >
              <span className="service-addon-icon" aria-hidden="true">
                <span />
              </span>
              <h3>{addOn.title}</h3>
              <p>{addOn.description}</p>
              <ul className="presentation-package-list">
                {addOn.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Link
                className="button-secondary"
                href={buildInquiryHref(service, addOn.title)}
              >
                Ask About This Add-on
              </Link>
            </article>
          ))}
        </div>

        <div className="presentation-enhancements-cta">
          <Link className="button" href={buildInquiryHref(service)}>
            {ctaLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
