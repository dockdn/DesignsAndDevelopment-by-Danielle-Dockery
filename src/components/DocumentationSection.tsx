const documentationItems = [
  "Project overview",
  "Business challenge",
  "User and workflow considerations",
  "Design direction",
  "Development process",
  "Features and functionality",
  "Final outcome",
  "Future recommendations",
];

export function DocumentationSection() {
  return (
    <section className="section">
      <div className="container documentation-layout">
        <div className="section-aside reveal">
          <span className="eyebrow">Documentation</span>
          <h2>More than a finished product.</h2>
          <p>
            Every project includes a complete professional write-up documenting the
            challenge, goals, research, design decisions, development process, final
            solution, and opportunities for future growth.
          </p>
        </div>

        <div className="documentation-panel reveal delay-1">
          <em>Documentation is part of the value, not an afterthought.</em>
          <ul className="documentation-list" aria-label="Project write-up contents">
            {documentationItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
