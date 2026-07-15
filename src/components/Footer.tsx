import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { href: "/portfolio", label: "Portfolio" },
  { href: "/#services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/#start-project", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-shell">
        <div className="footer-brand">
          <Image
            src="/branding/danielle-logo-transparent.png"
            alt="Designs & Development by Danielle Dockery"
            width={1536}
            height={1024}
            className="brand-logo-image footer-brand-logo"
          />
          <div>
            <strong>Designs & Development by Danielle Dockery</strong>
            <p className="footer-note">Digital products and experiences designed with purpose.</p>
          </div>
        </div>
        <nav className="footer-links" aria-label="Footer links">
          {footerLinks.map((item) => (
            <Link key={item.label} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
