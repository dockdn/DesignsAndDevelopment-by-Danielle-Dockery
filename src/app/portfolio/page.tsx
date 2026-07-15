import Image from "next/image";
import { Footer } from "@/components/Footer";

const projects = [
  {
    title: "Panther Interactive Sales Presentation",
    client: "Panther Siding & Windows",
    description:
      "A large interactive sales presentation designed to organize services, educate customers, and support in-person consultations.",
    image: "/projects/panther/panther-featured-card.png",
    alt: "Panther interactive sales presentation shown across tablet and phone devices",
  },
  {
    title: "VoicePDFMemo iOS Application",
    client: "Panther Siding & Windows",
    description:
      "A private custom iOS application created to improve contract documentation and field workflows.",
    image: "/projects/voicepdfmemo/voicepdfmemo-featured-card.png",
    alt: "VoicePDFMemo iOS application shown across two phone screens",
  },
  {
    title: "Elite Construction Website Redesign",
    client: "Elite Construction of NY",
    description:
      "A website redesign focused on improving clarity, trust, navigation, and the presentation of company services.",
    image: null,
    alt: "Elite Construction website redesign preview",
  },
];

export default function PortfolioPage() {
  return (
    <>
      <main className="portfolio-page">
        <section className="section service-page-hero-section">
          <div className="container">
            <div className="section-header reveal">
              <span className="eyebrow">Portfolio</span>
              <h1 className="portfolio-page-title">Selected work.</h1>
              <p>
                A selection of websites, interactive presentation systems, and custom
                business applications created to solve real business needs.
              </p>
            </div>

            <div className="portfolio-grid">
              {projects.map((project, index) => (
                <article
                  className="portfolio-card reveal"
                  key={project.title}
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <div className="portfolio-card-media">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.alt}
                        fill
                        className="portfolio-card-image"
                        sizes="(max-width: 760px) 100vw, (max-width: 1120px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="portfolio-card-placeholder" aria-hidden="true">
                        <span>Elite Construction</span>
                      </div>
                    )}
                  </div>
                  <div className="portfolio-card-copy">
                    <span className="eyebrow">{project.client}</span>
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
