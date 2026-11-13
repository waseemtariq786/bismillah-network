"use client";

import Link from "next/link";
import { useLanguage } from "@/components/language-provider";

const forms: Record<string, {
  title: string;
  urTitle: string;
  description: string;
  urDescription: string;
  fields: { name: string; ur: string; type?: string; area?: boolean }[];
}> = {
  owner: {
    title: "Owner Application",
    urTitle: "اونر بننے کی درخواست",
    description: "Apply to become an owner or organizational partner.",
    urDescription: "اونر یا تنظیمی شراکت دار بننے کے لیے اپنی معلومات درج کریں۔",
    fields: [
      { name: "Full Name", ur: "پورا نام" },
      { name: "Email Address", ur: "ای میل", type: "email" },
      { name: "Phone / WhatsApp", ur: "فون / واٹس ایپ", type: "tel" },
      { name: "Proposed Investment or Contribution", ur: "مجوزہ سرمایہ یا تعاون" },
      { name: "Experience and Skills", ur: "تجربہ اور مہارت", area: true },
      { name: "Why do you want to become an owner?", ur: "آپ اونر کیوں بننا چاہتے ہیں؟", area: true },
    ],
  },
  job: {
    title: "Job Application",
    urTitle: "ملازمت کی درخواست",
    description: "Apply for a job or position in BISMILLAH NETWORK.",
    urDescription: "بسم اللہ نیٹ ورک میں ملازمت یا عہدے کے لیے درخواست دیں۔",
    fields: [
      { name: "Full Name", ur: "پورا نام" },
      { name: "Email Address", ur: "ای میل", type: "email" },
      { name: "Phone / WhatsApp", ur: "فون / واٹس ایپ", type: "tel" },
      { name: "Position Applied For", ur: "مطلوبہ عہدہ" },
      { name: "Education", ur: "تعلیم" },
      { name: "Experience and Skills", ur: "تجربہ اور مہارت", area: true },
    ],
  },
  contractor: {
    title: "Contractor Application",
    urTitle: "ٹھیکیداری کی درخواست",
    description: "Apply for projects, contracts or contractor opportunities.",
    urDescription: "منصوبوں اور ٹھیکیداری کے مواقع کے لیے درخواست دیں۔",
    fields: [
      { name: "Full Name / Company", ur: "نام / کمپنی" },
      { name: "Email Address", ur: "ای میل", type: "email" },
      { name: "Phone / WhatsApp", ur: "فون / واٹس ایپ", type: "tel" },
      { name: "Type of Work", ur: "کام کی نوعیت" },
      { name: "Previous Projects and Experience", ur: "سابقہ منصوبے اور تجربہ", area: true },
      { name: "Proposal / Details", ur: "تجویز / تفصیلات", area: true },
    ],
  },
  resignation: {
    title: "Resignation Application",
    urTitle: "استعفیٰ کی درخواست",
    description: "Submit a formal resignation request.",
    urDescription: "استعفیٰ کی درخواست کے لیے اپنی معلومات درج کریں۔",
    fields: [
      { name: "Full Name", ur: "پورا نام" },
      { name: "Member / Employee ID (if available)", ur: "ممبر / ملازم آئی ڈی (اگر موجود ہو)" },
      { name: "Phone / WhatsApp", ur: "فون / واٹس ایپ", type: "tel" },
      { name: "Department / Position", ur: "شعبہ / عہدہ" },
      { name: "Last Working Date", ur: "آخری کام کا دن", type: "date" },
      { name: "Reason for Resignation", ur: "استعفیٰ کی وجہ", area: true },
    ],
  },
  complaint: {
    title: "Complaint & Problem Resolution",
    urTitle: "شکایت اور مسئلے کا حل",
    description: "Report a problem and request help from the relevant team.",
    urDescription: "اپنی شکایت یا مسئلہ متعلقہ ٹیم تک پہنچائیں۔",
    fields: [
      { name: "Full Name", ur: "پورا نام" },
      { name: "Email Address", ur: "ای میل", type: "email" },
      { name: "Phone / WhatsApp", ur: "فون / واٹس ایپ", type: "tel" },
      { name: "Department / Related Person", ur: "متعلقہ شعبہ / شخص" },
      { name: "Problem Category", ur: "مسئلے کی قسم" },
      { name: "Explain Your Problem", ur: "اپنا مسئلہ تفصیل سے بیان کریں", area: true },
      { name: "Requested Solution", ur: "آپ کیا حل چاہتے ہیں؟", area: true },
    ],
  },
};

export default function ApplyContent({ type }: { type: string }) {
  const { language } = useLanguage();
  const ur = language === "ur";
  const item = forms[type] || forms.job;

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">BISMILLAH NETWORK • APPLICATION CENTER</p>
          <h1>{ur ? item.urTitle : item.title}</h1>
          <p>{ur ? item.urDescription : item.description}</p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <form className="application-form" onSubmit={(e) => e.preventDefault()}>
            {item.fields.map((field) => (
              <label className="application-field" key={field.name}>
                <span>{ur ? field.ur : field.name}</span>
                {field.area ? (
                  <textarea rows={4} placeholder={ur ? field.ur : field.name} />
                ) : (
                  <input type={field.type || "text"} placeholder={ur ? field.ur : field.name} />
                )}
              </label>
            ))}
            <p className="portal-status">
              {ur
                ? "درخواست جمع کروانے کا نظام ابھی فعال نہیں۔ محفوظ ڈیٹا بیس اور انتظامی نظام منسلک ہونے کے بعد درخواستیں جمع ہوں گی۔"
                : "Application submission is not active yet. Forms will be enabled after secure database and administration integration."}
            </p>
            <button className="button button-gold" type="button" disabled>
              {ur ? "درخواست جمع کروانا — جلد دستیاب ہوگا" : "Submit Application — Coming Soon"}
            </button>
          </form>
          <div className="join-actions">
            <Link href="/app" className="text-link">
              {ur ? "← ممبر پورٹل پر واپس جائیں" : "← Back to Member Portal"}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
