import Link from "next/link";

type ComingSoonPageProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function ComingSoonPage({ eyebrow, title, description }: ComingSoonPageProps) {
  return (
    <main className="coming-soon">
      <div className="coming-soon-card reveal">
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{description}</p>
        <div className="hero-actions" style={{ justifyContent: "center" }}>
          <Link className="button" href="/">
            Return Home
          </Link>
          <Link className="button-secondary" href="/start-a-project">
            Start a Project
          </Link>
        </div>
      </div>
    </main>
  );
}
