import Link from "next/link";

type CaseStudyCardProps = {
  title: string;
  type: string;
  description: string;
  tags: string[];
  href: string;
  placeholderTitle: string;
  placeholderNote: string;
  accentLabel: string;
};

export function CaseStudyCard({
  title,
  type,
  description,
  tags,
  href,
  placeholderTitle,
  placeholderNote,
  accentLabel,
}: CaseStudyCardProps) {
  return (
    <article className="case-study-card reveal">
      <div
        className="case-study-placeholder"
        aria-label={`${placeholderTitle} placeholder image area. ${placeholderNote}`}
      >
        <div className="case-study-placeholder-inner">
          <span className="case-study-badge" aria-hidden="true">
            {accentLabel}
          </span>
          <strong>{placeholderTitle}</strong>
          <p>{placeholderNote}</p>
        </div>
      </div>

      <div className="case-study-content">
        <span className="case-study-type">{type}</span>
        <h3>{title}</h3>
        <p>{description}</p>
        <ul className="tag-list" aria-label={`${title} disciplines`}>
          {tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        <div>
          <Link className="button-secondary" href={href}>
            Read Case Study
          </Link>
        </div>
      </div>
    </article>
  );
}
