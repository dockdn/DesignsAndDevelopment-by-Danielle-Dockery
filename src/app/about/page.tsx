import { existsSync } from "node:fs";
import { join } from "node:path";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";

const approachCards = [
  {
    title: "Strategy First",
    description:
      "Every project begins by understanding the business, the audience, and the overall goals before any design or development begins.",
  },
  {
    title: "Purposeful Design",
    description:
      "Every screen, layout, and interaction should have a purpose. I focus on creating digital experiences that are both visually engaging and genuinely easy to use.",
  },
  {
    title: "Built to Last",
    description:
      "I create websites, presentations, and applications that remain organized, maintainable, and ready to grow as businesses evolve.",
  },
];

const buildInterests = [
  {
    title: "Business Websites",
    description:
      "Professional websites designed to build trust, explain services, and support business growth.",
  },
  {
    title: "Interactive Presentations",
    description:
      "Presentation systems that educate customers, organize information, and improve in-person conversations.",
  },
  {
    title: "Business Applications",
    description:
      "Custom internal software designed around unique workflows and operational needs.",
  },
  {
    title: "Digital Workflows",
    description:
      "Solutions that replace repetitive manual processes with organized digital systems.",
  },
  {
    title: "User Experience Design",
    description:
      "Interfaces that make complex information feel simple and intuitive.",
  },
  {
    title: "Custom Digital Solutions",
    description:
      "Projects tailored to a specific business challenge rather than using one-size-fits-all templates.",
  },
];

const featuredClients = [
  {
    name: "Panther Siding & Windows",
    summary: "Interactive sales presentation and custom iOS business application.",
  },
  {
    name: "Elite Construction of NY",
    summary: "Website redesign focused on improving navigation, branding, and customer experience.",
  },
  {
    name: "KNC Studios",
    summary: "Digital design support, presentations, and creative visual materials.",
  },
];

const headshotSrc = "/about/danielle-dockery-headshot.jpg";
const hasHeadshot = existsSync(join(process.cwd(), "public/about/danielle-dockery-headshot.jpg"));

export default function AboutPage() {
  return (
    <>
      <main className="about-page">
        <section className="section">
          <div className="container about-page-hero">
            <div className="about-page-visual reveal">
              {hasHeadshot ? (
                <div className="about-page-headshot-frame">
                  <Image
                    src={headshotSrc}
                    alt="Portrait of Danielle Dockery"
                    fill
                    className="about-page-headshot-image"
                    sizes="(max-width: 1120px) 100vw, 36vw"
                    priority
                  />
                </div>
              ) : (
                <div
                  className="about-page-headshot-placeholder"
                  role="img"
                  aria-label="Portrait placeholder for Danielle Dockery"
                />
              )}

              <div className="about-caption">
                <strong>Danielle Dockery</strong>
                <span>Designer and Developer</span>
              </div>
            </div>

            <div className="about-page-copy reveal delay-1">
              <span className="eyebrow">About</span>
              <h1>Designing solutions that are as organized as they are beautiful.</h1>
              <p>
                I believe great design is about much more than appearance. The best
                digital experiences make information easier to understand, simplify
                everyday tasks, and help businesses communicate with confidence.
              </p>
              <p>
                Every project begins by understanding how a business actually works
                before making design decisions. Whether I&apos;m creating a website,
                developing a custom business application, or designing an interactive
                presentation, my goal is to create something that feels intuitive,
                organized, and genuinely useful for the people using it.
              </p>
              <p>
                I enjoy working with businesses that value thoughtful design, clear
                communication, and practical solutions that continue delivering value
                long after the project is complete.
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-header reveal">
              <h2>My approach</h2>
            </div>

            <div className="about-approach-grid">
              {approachCards.map((card, index) => (
                <article
                  className="about-story-card reveal"
                  key={card.title}
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <span className="about-story-kicker">0{index + 1}</span>
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-header reveal">
              <h2>What I enjoy building</h2>
              <p>
                I enjoy creating projects that combine creativity, organization, and
                technology to solve real business problems.
              </p>
            </div>

            <div className="about-interest-grid">
              {buildInterests.map((item, index) => (
                <article
                  className="about-interest-card reveal"
                  key={item.title}
                  style={{ animationDelay: `${index * 60}ms` }}
                >
                  <span className="about-interest-mark" aria-hidden="true" />
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-header reveal">
              <h2>Featured clients</h2>
              <p>A selection of businesses I&apos;ve had the opportunity to work with.</p>
            </div>

            <div className="about-clients-grid">
              {featuredClients.map((client, index) => (
                <article
                  className="about-client-card reveal"
                  key={client.name}
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <span className="eyebrow">Featured Client</span>
                  <h3>{client.name}</h3>
                  <p>{client.summary}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="about-beyond-panel reveal">
              <span className="eyebrow">Beyond the project</span>
              <p>
                Outside of development, I enjoy studying modern user experiences,
                exploring thoughtful design, and continuously learning new technologies
                through hands-on projects. I believe the strongest digital products come
                from combining creativity with organization, paying attention to
                details, and always looking for better ways to solve real problems.
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container about-final-cta reveal">
            <span className="eyebrow">Start a project</span>
            <h2>Let&apos;s build something together.</h2>
            <p>
              Whether you&apos;re starting with an idea, improving an existing process,
              or looking for a better way to present your business, I&apos;d love to hear
              about your project and explore how we can build something meaningful
              together.
            </p>
            <div>
              <Link className="button" href="/#start-project">
                Start a Project
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
