"use client";

import Link from "next/link";
import PageHero from "@/components/page-hero";
import { useLanguage } from "@/components/language-provider";

const modules = [
  {
    number: "01",
    title: "Membership",
    urTitle: "رکنیت",
    description: "Registration applications, member profiles and approval records.",
    urDescription: "رکنیت کی درخواستیں، ممبران کے پروفائلز اور منظوری کا ریکارڈ۔",
  },
  {
    number: "02",
    title: "Administration",
    urTitle: "انتظامیہ",
    description: "Authorized administration and organizational control.",
    urDescription: "مجاز انتظامیہ اور تنظیمی امور کا کنٹرول۔",
  },
  {
    number: "03",
    title: "Departments & Roles",
    urTitle: "شعبہ جات اور ذمہ داریاں",
    description: "Department assignments, responsibilities and reporting hierarchy.",
    urDescription: "شعبہ جات کی تقسیم، ذمہ داریاں اور رپورٹنگ کا نظام۔",
  },
  {
    number: "04",
    title: "Projects & Tasks",
    urTitle: "منصوبے اور کام",
    description: "Project requests, task assignments and progress updates.",
    urDescription: "منصوبوں کی درخواستیں، کام کی تقسیم اور پیش رفت کی معلومات۔",
  },
  {
    number: "05",
    title: "Accounts & Records",
    urTitle: "اکاؤنٹس اور ریکارڈ",
    description: "Approved financial records, transactions and accountability.",
    urDescription: "منظور شدہ مالی ریکارڈ، لین دین اور جواب دہی کا نظام۔",
  },
  {
    number: "06",
    title: "Notifications & Reports",
    urTitle: "اطلاعات اور رپورٹس",
    description: "Important updates, activity records and organizational reports.",
    urDescription: "اہم اطلاعات، سرگرمیوں کا ریکارڈ اور تنظیمی رپورٹس۔",
  },
];

export default function MemberPortalContent() {
  const { language } = useLanguage();
  const ur = language === "ur";

  return (
    <main>
      <PageHero
        eyebrow={ur ? "بسم اللہ نیٹ ورک ڈیجیٹل پلیٹ فارم" : "BISMILLAH NETWORK DIGITAL PLATFORM"}
        title={ur ? "ایک پلیٹ فارم، سب لوگ منسلک" : "One Platform. Connected People."}
        description={
          ur
            ? "ممبران، مجاز منتظمین اور تنظیمی قیادت کے لیے ایک مجوزہ ڈیجیٹل ورک اسپیس۔"
            : "A planned digital workspace for members, authorized administrators and organizational leadership."
        }
      />

      <section className="section-pad">
        <div className="container">
          <p className="eyebrow">{ur ? "پلیٹ فارم کے ماڈیولز" : "PLATFORM MODULES"}</p>
          <h2 className="content-title">
            {ur ? "ایک مربوط " : "A Connected "}
            <span>{ur ? "انتظامی نظام" : "Management System"}</span>
          </h2>

          <div className="portal-module-grid">
            {modules.map((item) => (
              <Link
                href={`/contact?module=${encodeURIComponent(item.title)}`}
                className={`portal-module portal-module-clickable portal-module-${item.number}`}
                key={item.number}
              >
                <div className="portal-module-image">
                  <img
                    src={`/images/${[
                      "digital-platforms.jpg",
                      "business-technology.jpg",
                      "mobile-app-development.jpg",
                      "website-development.jpg",
                      "business-technology.jpg",
                      "digital-platforms.jpg"
                    ][Number(item.number) - 1]}`}
                    alt=""
                  />
                </div>
                <span>{item.number}</span>
                <h3>{ur ? item.urTitle : item.title}</h3>
                <p>{ur ? item.urDescription : item.description}</p>
                <small>{ur ? "مزید جانیں ↗" : "Explore Module ↗"}</small>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mission-section section-pad">
        <div className="container mission-content">
          <p className="eyebrow">{ur ? "سیکیورٹی اور رسائی" : "SECURITY & ACCESS"}</p>
          <h2>
            {ur ? "درست رسائی۔" : "Right access."}
            <br />
            <span>{ur ? "درست ذمہ داری۔" : "Right responsibility."}</span>
          </h2>
          <p>
            {ur
              ? "مستقبل میں رسائی عہدے اور ذمہ داری کے مطابق دی جائے گی۔ بانی کے خصوصی اختیارات صرف بانی کے پاس رہیں گے، جبکہ دیگر صارفین کو صرف اپنے کردار کے مطابق منظور شدہ اجازتیں ملیں گی۔"
              : "Future access will be role-based. Founder-level controls will remain restricted to the Founder, while other users will receive only the permissions authorized for their roles."}
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container join-panel">
          <p className="eyebrow">{ur ? "ممبر رسائی" : "MEMBER ACCESS"}</p>
          <h2>
            {ur ? "پورٹل ابھی" : "Portal is under"}
            <br />
            <span>{ur ? "تیاری کے مراحل میں ہے۔" : "development."}</span>
          </h2>
          <p>
            {ur
              ? "محفوظ لاگ اِن، رجسٹریشن، ڈیٹا بیس کنکشن اور ممبر ڈیش بورڈ ابھی فعال نہیں ہیں۔ تصدیق، اجازتوں اور ڈیٹا بیس کا نظام مکمل اور ٹیسٹ ہونے کے بعد یہ سہولیات متعارف کرائی جائیں گی۔"
              : "Secure login, registration, database connection and member dashboards are not active yet. They will be introduced after authentication, permissions and database integration are implemented and tested."}
          </p>
          <span className="portal-status">
            {ur ? "سسٹم کی حالت — تیاری جاری ہے" : "SYSTEM STATUS — IN DEVELOPMENT"}
          </span>
          <div className="join-actions">
            <Link href="/join" className="button button-gold">
              {ur ? "رکنیت کی معلومات" : "Membership Information"}
            </Link>
            <Link href="/contact" className="text-link">
              {ur ? "رابطہ کریں ↗" : "Contact Us ↗"}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
