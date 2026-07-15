const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We discuss the business, the problem, the audience, and what the final solution needs to accomplish.",
  },
  {
    number: "02",
    title: "Define",
    description:
      "I organize the project requirements, content, user flow, technical needs, and overall direction.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "The visual system and user experience are developed through thoughtful layouts, clear hierarchy, and practical interaction design.",
  },
  {
    number: "04",
    title: "Build",
    description:
      "The approved direction is developed, tested, refined, and prepared for real-world use.",
  },
  {
    number: "05",
    title: "Deliver",
    description:
      "The final project is launched or delivered with supporting documentation and guidance.",
  },
];

export function ProcessSection() {
  return (
    <section className="section" id="process">
      <div className="container">
        <div className="section-header reveal section-header-centered">
          <span className="eyebrow">Process</span>
          <h2>A thoughtful process from idea to launch.</h2>
        </div>

        <div className="process-grid">
          {steps.map((step, index) => (
            <article
              className="process-step reveal"
              key={step.number}
              style={{ animationDelay: `${index * 70}ms` }}
            >
              <span>
                {step.number} - {step.title}
              </span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
