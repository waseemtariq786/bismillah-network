"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import BrandLogo from "./brand-logo";
import { languages, useLanguage } from "./language-provider";

const links = [
  ["/", "home"],
  ["/services", "services"],
  ["/portfolio", "portfolio"],
  ["/projects", "projects"],
  ["/network", "network"],
  ["/join", "join"],
  ["/rules", "rules"],
  ["/contact", "contact"],
  ["/about", "about"],
];

export default function SiteHeader() {
  const { language, setLanguage, t } = useLanguage();
  const pathname = usePathname();
  const mobileMenuRef = useRef<HTMLDetailsElement>(null);

  const closeMobileMenu = () => {
    if (mobileMenuRef.current) {
      mobileMenuRef.current.open = false;
    }
  };

  useEffect(() => {
    closeMobileMenu();
  }, [pathname]);

  return (
    <header className="site-header">
      <div className="nav-wrap">
        <BrandLogo />
        <nav className="desktop-nav">
          {links.map(([href, key]) => (
            <Link key={href} href={href}>{t(key)}</Link>
          ))}
        </nav>
        <select
          className="language-select"
          aria-label="Select language"
          value={language}
          onChange={(event) => setLanguage(event.target.value as typeof language)}
        >
          {languages.map(([code, name]) => (
            <option key={code} value={code}>{name}</option>
          ))}
        </select>
        <Link href="/app" className="nav-cta">{t("portal")} <span>↗</span></Link>
        <details className="mobile-menu" ref={mobileMenuRef}>
          <summary aria-label="Open navigation">☰</summary>
          <nav>
            {links.map(([href, key]) => (
              <Link key={href} href={href} onClick={closeMobileMenu}>
                {t(key)}
              </Link>
            ))}
            <Link href="/app" onClick={closeMobileMenu}>
              {t("portal")} ↗
            </Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
