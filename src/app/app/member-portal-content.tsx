"use client";

import Link from "next/link";
import PageHero from "@/components/page-hero";
import { useLanguage } from "@/components/language-provider";

const applications = [
  {
    id: "owner",
    number: "01",
    title: "Owner Application",
    urTitle: "اونر بننے کی درخواست",
    description: "Apply to become an owner or organizational partner.",
    urDescription: "اونر یا تنظیمی شراکت دار بننے کے لیے درخواست دیں۔",
  },
  {
    id: "job",
    number: "02",
    title: "Job Application",
    urTitle: "ملازمت کی درخواست",
    description: "Apply for an available job or position.",
    urDescription: "ملازمت یا کسی عہدے کے لیے درخواست دیں۔",
  },
  {
    id: "contractor",
    number: "03",
    title: "Contractor Application",
    urTitle: "ٹھیکیداری کی درخواست",
    description: "Apply for projects, contracts or contractor opportunities.",
    urDescription: "منصوبوں اور ٹھیکیداری کے مواقع کے لیے درخواست دیں۔",
  },
  {
    id: "resignation",
    number: "04",
    title: "Resignation Application",
    urTitle: "استعفیٰ کی درخواست",
    description: "Submit a formal resignation request.",
    urDescription: "باقاعدہ استعفیٰ جمع کروائیں۔",
  },
  {
    id: "complaint",
    number: "05",
    title: "Complaint & Problem Resolution",
    urTitle: "شکایت اور مسئلے کا حل",
    description: "Report a problem or request help resolving an issue.",
    urDescription: "اپنا مسئلہ یا شکایت درج کروائیں اور حل کی درخواست دیں۔",
  },
];

export default function MemberPortalContent() {
  const { language } = useLanguage();
  const ur = language === "ur";

  return (
    <main>
      <PageHero
        eyebrow={ur ? "بسم اللہ نیٹ ورک ممبر پورٹل" : "BISMILLAH NETWORK MEMBER PORTAL"}
        title={ur ? "آپ کی درخواست، ہمارا نظام" : "Your Application. One Connected System."}
        description={
          ur
            ? "اپنی ضرورت کے مطابق درخواست کی قسم منتخب کریں۔"
            : "Choose the application type that matches your requirement."
        }
      />

      <section className="section-pad">
        <div className="container">
          <p className="eyebrow">{ur ? "درخواستوں کا مرکز" : "APPLICATION CENTER"}</p>
          <h2 className="content-title">
            {ur ? "درخواست کی " : "Choose Your "}
            <span>{ur ? "قسم منتخب کریں" : "Application Type"}</span>
          </h2>

          <div className="portal-module-grid">
            {applications.map((item) => (
              <Link
                href={`/app/apply?type=${item.id}`}
                className={`portal-module portal-module-clickable portal-application-${item.id}`}
                key={item.id}
              >
                <span>{item.number}</span>
                <h3>{ur ? item.urTitle : item.title}</h3>
                <p>{ur ? item.urDescription : item.description}</p>
                <small>{ur ? "درخواست کھولیں ↗" : "Open Application ↗"}</small>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mission-section section-pad">
        <div className="container mission-content">
          <p className="eyebrow">{ur ? "درخواست کا طریقہ" : "APPLICATION PROCESS"}</p>
          <h2>
            {ur ? "شفاف نظام۔" : "A transparent process."}
            <br />
            <span>{ur ? "منصفانہ فیصلہ۔" : "A fair decision."}</span>
          </h2>
          <p>
            {ur
              ? "ہر درخواست متعلقہ شعبے کو بھیجی جائے گی۔ درخواست کا جائزہ، منظوری اور جواب کا نظام مرحلہ وار فعال کیا جائے گا۔"
              : "Applications will be reviewed by the relevant department. Review, approval and response workflows will be activated in stages."}
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container join-panel">
          <p className="eyebrow">{ur ? "پورٹل کی حالت" : "PORTAL STATUS"}</p>
          <h2>
            {ur ? "پورٹل ابھی" : "Portal is under"}
            <br />
            <span>{ur ? "تیاری کے مراحل میں ہے۔" : "development."}</span>
          </h2>
          <p>
            {ur
              ? "درخواستوں کے محفوظ اندراج، ڈیٹا بیس، انتظامی جائزے اور جواب بھیجنے کی سہولت مکمل ہونے کے بعد فعال ہوگی۔"
              : "Secure application submission, database storage, administrative review and response features will be activated after implementation and testing."}
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
