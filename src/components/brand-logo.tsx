import Link from "next/link";

export default function BrandLogo() {
  return (
    <Link href="/" className="brand" aria-label="Bismillah Network Home">
      <svg viewBox="0 0 64 64" className="brand-mark" role="img" aria-label="Golden rotating Earth">
        <defs>
          <linearGradient id="earthGold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#fff4c7"/>
            <stop offset="48%" stopColor="#d6ad58"/>
            <stop offset="100%" stopColor="#8e6324"/>
          </linearGradient>
          <radialGradient id="earthShade" cx="30%" cy="25%">
            <stop offset="0%" stopColor="#59431f"/>
            <stop offset="100%" stopColor="#100e0a"/>
          </radialGradient>
          <clipPath id="earthClip"><circle cx="32" cy="32" r="27"/></clipPath>
        </defs>
        <circle cx="32" cy="32" r="29" fill="url(#earthShade)" stroke="url(#earthGold)" strokeWidth="2"/>
        <g clipPath="url(#earthClip)">
          <g className="globe-spin">
            <path d="M8 15L15 10 22 12 25 17 21 21 17 20 14 26 10 25 7 20Z M25 24L31 20 37 22 40 27 37 32 39 38 35 46 31 44 29 37 25 33 23 28Z M39 13L46 10 54 14 57 20 52 24 48 21 44 25 40 21Z M43 29L49 27 55 31 53 37 48 39 45 35Z M13 39L18 36 22 40 20 46 15 49 11 45Z" fill="url(#earthGold)" stroke="#f8df9d" strokeWidth=".5"/>
            <path d="M4 32H60M7 21H57M7 43H57" fill="none" stroke="#e6c477" strokeWidth=".65" opacity=".7"/>
            <ellipse cx="32" cy="32" rx="12" ry="27" fill="none" stroke="#e6c477" strokeWidth=".8" opacity=".65"/>
            <ellipse cx="32" cy="32" rx="23" ry="27" fill="none" stroke="#e6c477" strokeWidth=".55" opacity=".35"/>
          </g>
        </g>
        <circle cx="32" cy="32" r="28" fill="none" stroke="url(#earthGold)" strokeWidth="1.5"/>
      </svg>

      <svg className="pak-flag" viewBox="0 0 42 30" role="img" aria-label="Pakistan flag">
        <path d="M4 2V28" stroke="#d6ad58" strokeWidth="1.5"/>
        <g className="flag-cloth">
          <rect x="6" y="3" width="32" height="23" rx="1" fill="#01411C"/>
          <rect x="6" y="3" width="7" height="23" fill="#fff"/>
          <circle cx="26" cy="14" r="7" fill="#fff"/>
          <circle cx="29" cy="12" r="6" fill="#01411C"/>
          <path d="M32 6L33.2 9.2L36.5 9.3L33.9 11.3L34.8 14.5L32 12.6L29.2 14.5L30.1 11.3L27.5 9.3L30.8 9.2Z" fill="#fff"/>
        </g>
      </svg>

      <span className="brand-name">
        <span className="brand-bismillah">بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ</span>
        BISMILLAH <b>NETWORK</b>
        <small>ONE NETWORK • ONE VISION</small>
        <span className="waseem-name"><span className="wave-word" style={{["--wave-index" as string]: 0}}>Waseem</span></span>
      </span>
    </Link>
  );
}
