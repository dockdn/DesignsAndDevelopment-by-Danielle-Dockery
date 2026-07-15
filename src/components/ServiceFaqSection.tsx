import Link from "next/link";
import { buildInquiryHref } from "@/lib/inquiry";

type FaqItem = {
  question: string;
  answer: string;
};

type ServiceFaqSectionProps = {
  heading?: string;
  description: string;
  faqs: FaqItem[];
  service: string;
  ctaLabel?: string;
};

export function ServiceFaqSection({
  heading = "Frequently asked questions",
  description,
  faqs,
  service,
  ctaLabel = "Start Your Project",
}: ServiceFaqSectionProps) {
  return (
    <section className="section">
      <div className="container">
        <div className="section-header reveal section-header-centered">
          <span className="eyebrow">Frequently Asked Questions</span>
          <h2>{heading}</h2>
          <p>{description}</p>
        </div>

        <div className="service-faq-list">
          {faqs.map((faq, index) => (
            <details
              className="service-faq-item reveal"
              key={faq.question}
              style={{ animationDelay: `${index * 60}ms` }}
            >
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>

        <div className="presentation-enhancements-cta">
          <Link className="button-secondary" href={buildInquiryHref(service)}>
            {ctaLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
