"use client";

import Link from "next/link";
import BrandLogo from "./brand-logo";
import { useLanguage } from "./language-provider";

export default function SiteFooter() {
  const { language } = useLanguage();
  const ur = language === "ur";

  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div>
          <BrandLogo />
          <p className="footer-message">
            {ur
              ? "ایک نیٹ ورک • ایک وژن۔ ٹیکنالوجی اور مقصد کے ذریعے لوگوں، صلاحیتوں اور مواقع کو آپس میں جوڑنا۔"
              : "One Network • One Vision. Connecting people, skills and opportunities through technology and purpose."}
          </p>
        </div>

        <div>
          <h3>{ur ? "مزید معلومات" : "Explore"}</h3>
          <Link href="/about">{ur ? "ہمارے بارے میں" : "About Us"}</Link>
          <Link href="/services">{ur ? "ہماری خدمات" : "Our Services"}</Link>
          <Link href="/portfolio">{ur ? "پورٹ فولیو" : "Portfolio"}</Link>
          <Link href="/projects">{ur ? "جاری منصوبے" : "Projects in Progress"}</Link>
          <Link href="/opportunities">{ur ? "مواقع" : "Opportunities"}</Link>
        </div>

        <div>
          <h3>{ur ? "ہمارا نیٹ ورک" : "Our Network"}</h3>
          <Link href="/network">{ur ? "نیٹ ورک کا ڈھانچہ" : "Network Structure"}</Link>
          <Link href="/join">{ur ? "شامل ہونے کا طریقہ" : "How to Join"}</Link>
          <Link href="/roles">{ur ? "عہدے اور ذمہ داریاں" : "Roles & Responsibilities"}</Link>
          <Link href="/participation">{ur ? "شرکت" : "Participation"}</Link>
          <Link href="/rules">{ur ? "قواعد و ضوابط" : "Rules & Regulations"}</Link>
          <Link href="/app">{ur ? "ممبر پورٹل" : "Member Portal"}</Link>
        </div>

        <div>
          <h3>{ur ? "رابطہ" : "Contact"}</h3>
          <Link href="/contact">{ur ? "ہم سے رابطہ کریں" : "Contact Us"}</Link>
          <a href="tel:+923146083782">0314 6083782</a>
          <a href="https://wa.me/923146083782" target="_blank" rel="noopener noreferrer">WhatsApp ↗</a>
          <a href="mailto:waseemtariq068@gmail.com">waseemtariq068@gmail.com</a>
          <p>{ur ? "بانی اور مینیجنگ ڈائریکٹر" : "Founder & Managing Director"}</p>
          <p>Muhammad Waseem Tariq</p>
        </div>
      </div>

      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} BISMILLAH NETWORK.{" "}
          {ur ? "جملہ حقوق محفوظ ہیں۔" : "All Rights Reserved."}
        </span>
        <span>
          {ur
            ? "کوئی پیچھے نہ رہے۔ ہر زندگی ایک موقع کی حق دار ہے۔"
            : "No One Left Behind. Every Life Deserves a Chance."}
        </span>
      </div>
    </footer>
  );
}
