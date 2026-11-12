import Link from "next/link";

export default function BrandLogo() {
  return (
    <Link href="/" className="brand" aria-label="Bismillah Network Home">
      <svg viewBox="0 0 64 64" className="brand-mark" role="img" aria-label="BN Globe">
        <defs>
          <linearGradient id="gold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#fff0b8"/>
            <stop offset="48%" stopColor="#d6ad58"/>
            <stop offset="100%" stopColor="#8e6324"/>
          </linearGradient>
        </defs>
        <circle cx="32" cy="32" r="28" fill="none" stroke="url(#gold)" strokeWidth="2"/>
        <ellipse cx="32" cy="32" rx="13" ry="28" fill="none" stroke="url(#gold)" strokeWidth="1.4"/>
        <path d="M5 32h54M10 19h44M10 45h44" fill="none" stroke="url(#gold)" strokeWidth="1.2"/>
        <path d="M21 43V21h10c7 0 9 9 2 11 9 2 7 11-2 11H21zm7-17v5h3c3 0 3-5 0-5h-3zm0 9v5h4c4 0 4-5 0-5h-4z" fill="url(#gold)"/>
        <path d="M39 43V21h5l8 13V21h5v22h-5l-8-13v13z" fill="url(#gold)"/>
      </svg>
      <span className="brand-name">BISMILLAH <b>NETWORK</b><small>ONE NETWORK • ONE VISION</small></span>
    </Link>
  );
}
