"use client";

import Link from "next/link";
import BrandLogo from "./brand-logo";
import { languages, useLanguage } from "./language-provider";

const links = [
  ["/", "home"],
  ["/about", "about"],
  ["/services", "services"],
  ["/portfolio", "portfolio"],
  ["/projects", "projects"],
  ["/network", "network"],
  ["/join", "join"],
  ["/rules", "rules"],
  ["/contact", "contact"],
];

export default function SiteHeader() {
  const { language, setLanguage, t } = useLanguage();

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
        <details className="mobile-menu">
          <summary aria-label="Open navigation">☰</summary>
          <nav>
            {links.map(([href, key]) => (
              <Link key={href} href={href}>{t(key)}</Link>
            ))}
            <Link href="/app">{t("portal")} ↗</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
