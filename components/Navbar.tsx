/* eslint-disable @next/next/no-html-link-for-pages -- Native document navigation is intentional for these fallback links. */
"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  { label: "About", href: "/about" },
  { label: "Work experience", href: "/work-experience" },
  { label: "Projects", href: "/projects" },
  { label: "Resume", href: "/resume" },
];

function Navigation({ pathname }: { pathname: string }) {
  const menu = useRef<HTMLDetailsElement>(null);
  function isCurrent(href: string) {
    return (
      pathname === href || (href !== "/" && pathname.startsWith(`${href}/`))
    );
  }

  // Native links load the destination document, including when client-side
  // routing is unavailable. Native details keeps the mobile menu usable too.
  return (
    <header
      className="site-header"
      onKeyDown={(event) => {
        if (event.key === "Escape" && menu.current?.open) {
          menu.current.open = false;
          menu.current.querySelector("summary")?.focus();
        }
      }}
    >
      <nav className="container nav" aria-label="Main navigation">
        <a className="wordmark" href="/" aria-label="Astha Singh - home">
          as<span>.</span>
          <span className="wordmark-name">ASTHA SINGH</span>
        </a>
        <div className="desktop-nav">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              aria-current={isCurrent(href) ? "page" : undefined}
            >
              {label}
            </a>
          ))}
          <a
            href="/contact"
            className="nav-contact"
            aria-current={isCurrent("/contact") ? "page" : undefined}
          >
            Let’s connect <ArrowUpRight size={15} />
          </a>
        </div>
        <details className="mobile-menu" ref={menu}>
          <summary className="menu-toggle" aria-label="Toggle navigation menu">
            <Menu className="menu-open-icon" size={23} aria-hidden="true" />
            <X className="menu-close-icon" size={23} aria-hidden="true" />
          </summary>
          <nav className="mobile-nav" aria-label="Mobile navigation">
            {[
              { href: "/", label: "Home" },
              ...links,
              { href: "/contact", label: "Contact" },
            ].map(({ href, label }) => (
              <a
                key={href}
                href={href}
                aria-current={isCurrent(href) ? "page" : undefined}
              >
                {label}
                <ArrowUpRight size={17} />
              </a>
            ))}
          </nav>
        </details>
      </nav>
    </header>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  useEffect(() => {
    const redirects: Record<string, string> = {
      "#about": "/about",
      "#education": "/about#education",
      "#skills": "/about#skills",
      "#experience": "/work-experience",
      "#work": "/projects",
      "#contact": "/contact",
    };
    const handleHash = () => {
      const target = redirects[window.location.hash];
      if (pathname === "/" && target) router.replace(target);
    };
    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, [pathname, router]);
  return <Navigation key={pathname} pathname={pathname} />;
}
