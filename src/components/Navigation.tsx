"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  {
    href: "/portfolio",
    label: "Portfolio",
    matches: (pathname: string) => pathname === "/portfolio",
  },
  {
    href: "/#services",
    label: "Services",
    matches: (pathname: string) =>
      pathname === "/services" ||
      pathname === "/presentation-design" ||
      pathname === "/website-design" ||
      pathname === "/mobile-app-solutions",
  },
  {
    href: "/about",
    label: "About",
    matches: (pathname: string) => pathname === "/about",
  },
  {
    href: "/#start-project",
    label: "Contact",
    matches: (pathname: string) => pathname === "/start-a-project",
  },
];

export function Navigation() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container">
        <Link className="brand-mark" href="/" aria-label="Designs & Development by Danielle Dockery home">
          <Image
            src="/branding/danielle-logo-transparent.png"
            alt="Designs & Development by Danielle Dockery"
            width={1536}
            height={1024}
            className="brand-logo-image"
            priority
          />
        </Link>

        <button
          type="button"
          className="nav-menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="sr-only">Toggle navigation menu</span>
          <span />
          <span />
          <span />
        </button>

        <nav
          id="primary-navigation"
          className={`nav-links${menuOpen ? " is-open" : ""}`}
          aria-label="Primary navigation"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-link${item.matches(pathname) ? " is-active" : ""}`}
              aria-current={item.matches(pathname) ? "page" : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link className="button nav-cta nav-cta-mobile" href="/#start-project" onClick={() => setMenuOpen(false)}>
            Let&apos;s Work Together
          </Link>
        </nav>

        <div className="header-cta">
          <Link className="button nav-cta" href="/#start-project">
            Let&apos;s Work Together
          </Link>
        </div>
      </div>
    </header>
  );
}
