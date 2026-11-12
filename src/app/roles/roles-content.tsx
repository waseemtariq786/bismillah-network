"use client";

import Link from "next/link";
import PageHero from "@/components/page-hero";
import { useLanguage } from "@/components/language-provider";

const roles = [
  ["01", "Founder & Managing Director", "Sets the vision, leads the organization, approves major decisions and holds final organizational authority.", "بانی اور مینیجنگ ڈائریکٹر", "ادارے کا وژن طے کرتے ہیں، قیادت کرتے ہیں، اہم فیصلوں کی منظوری دیتے ہیں اور حتمی تنظیمی اختیار رکھتے ہیں۔"],
  ["02", "Central Administration", "Manages approved administrative processes, official records, coordination and implementation of policies.", "مرکزی انتظامیہ", "منظور شدہ انتظامی امور، سرکاری ریکارڈ، رابطہ کاری اور پالیسیوں پر عمل درآمد سنبھالتی ہے۔"],
  ["03", "Department Heads", "Lead their departments, organize work, guide teams and report departmental progress.", "شعبہ جات کے سربراہان", "اپنے شعبوں کی قیادت، کام کی تنظیم، ٹیموں کی رہنمائی اور پیش رفت کی رپورٹنگ کرتے ہیں۔"],
  ["04", "Provincial Coordinators", "Coordinate approved activities across their province and support district-level teams.", "صوبائی کوآرڈینیٹرز", "اپنے صوبے میں منظور شدہ سرگرمیوں کی رابطہ کاری اور ضلعی ٹیموں کی معاونت کرتے ہیں۔"],
  ["05", "District / Tehsil / City Incharges", "Coordinate local activities, support members and communicate local requirements to the relevant leadership.", "ضلعی، تحصیل اور سٹی انچارجز", "مقامی سرگرمیوں کی نگرانی، ممبران کی معاونت اور مقامی ضروریات متعلقہ قیادت تک پہنچاتے ہیں۔"],
  ["06", "Team Leaders", "Guide assigned teams, distribute approved tasks, monitor progress and report results.", "ٹیم لیڈرز", "مقررہ ٹیموں کی رہنمائی، منظور شدہ کاموں کی تقسیم، پیش رفت کی نگرانی اور نتائج کی رپورٹنگ کرتے ہیں۔"],
  ["07", "Members", "Contribute skills, follow assigned responsibilities, cooperate with others and communicate honestly.", "ممبران", "اپنی صلاحیتوں کے ذریعے حصہ لیتے، دی گئی ذمہ داریاں پوری کرتے، دوسروں سے تعاون اور سچائی سے رابطہ رکھتے ہیں۔"],
];

export default function RolesContent() {
  const { language } = useLanguage();
  const ur = language === "ur";

  return (
    <main>
      <PageHero
        eyebrow={ur ? "افراد • ذمہ داری • قیادت" : "PEOPLE • RESPONSIBILITY • LEADERSHIP"}
        title={ur ? "ہر عہدے کا ایک مقصد ہے۔" : "Every Role Has a Purpose."}
        description={ur ? "ایک ذمہ دار ادارہ تب ترقی کرتا ہے جب ہر شخص اپنے فرائض، اختیار اور جواب دہی کو سمجھتا ہے۔" : "A responsible organization grows when everyone understands their duties, authority and accountability."}
      />

      <section className="section-pad">
        <div className="container">
          <p className="eyebrow">{ur ? "مجوزہ تنظیمی عہدے" : "PROPOSED ORGANIZATIONAL ROLES"}</p>
          <h2 className="content-title">
            {ur ? "قیادت اور " : "Leadership & "}
            <span>{ur ? "ذمہ داریاں" : "Responsibilities"}</span>
          </h2>
          <p className="section-description">
            {ur
              ? "یہ عہدوں کی مجوزہ اقسام ہیں۔ اصل تقرریاں، اختیارات اور رپورٹنگ کے تعلقات باضابطہ منظوری کے ذریعے طے کیے جائیں گے۔"
              : "These are planned role categories. Actual appointments, permissions and reporting relationships will be established through official approval."}
          </p>

          <div className="roles-list">
            {roles.map(([number, title, description, urTitle, urDescription]) => (
              <article className="role-item role-item-visual" key={number}>
                <div className="role-item-image">
                  <img src={`/images/${[
                    "digital-platforms.jpg",
                    "business-technology.jpg",
                    "mobile-app-development.jpg",
                    "digital-platforms.jpg",
                    "website-development.jpg",
                    "business-technology.jpg",
                    "mobile-app-development.jpg"
                  ][Number(number) - 1]}`} alt="" />
                </div>
                <span>{number}</span>
                <div>
                  <h3>{ur ? urTitle : title}</h3>
                  <p>{ur ? urDescription : description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mission-section section-pad">
        <div className="container mission-content">
          <p className="eyebrow">{ur ? "ہمارا اصولِ قیادت" : "OUR LEADERSHIP PRINCIPLE"}</p>
          <h2>
            {ur ? "اختیار ایک امانت ہے۔" : "Authority is a duty."}
            <br />
            <span>{ur ? "قیادت خدمت کا نام ہے۔" : "Leadership is service."}</span>
          </h2>
          <p>
            {ur
              ? "ہر رہنما کو انصاف سے کام لینا، دوسروں کا احترام کرنا، واضح رابطہ رکھنا اور اپنے فیصلوں و ذمہ داریوں کے لیے جواب دہ رہنا چاہیے۔"
              : "Every leader should act fairly, respect others, communicate clearly and remain accountable for decisions and assigned responsibilities."}
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container content-grid">
          <div>
            <p className="eyebrow">{ur ? "رپورٹنگ اور رابطہ کاری" : "REPORTING & COORDINATION"}</p>
            <h2 className="content-title">
              {ur ? "رابطے کا واضح " : "Clear Lines of "}
              <span>{ur ? "نظام" : "Communication"}</span>
            </h2>
          </div>
          <div className="prose">
            <p>
              {ur
                ? "ہر مقرر کردہ فرد کا رپورٹنگ کا طریقہ واضح ہوگا۔ اہم فیصلے، کاموں کی تقسیم اور پیش رفت منظور شدہ ذرائع سے ریکارڈ کی جانی چاہیے۔"
                : "Each appointed person will have a defined reporting line. Important decisions, task assignments and progress updates should be recorded through approved channels."}
            </p>
            <p>
              {ur
                ? "کوئی عہدہ خود بخود مالی اختیار، نجی معلومات تک رسائی یا ادارے کی طرف سے وعدے کرنے کی اجازت نہیں دیتا۔"
                : "No role automatically grants financial authority, access to private information or permission to make commitments on behalf of the organization."}
            </p>
            <Link href="/network" className="text-link">
              {ur ? "تنظیمی ڈھانچہ دیکھیں ↗" : "View Organizational Structure ↗"}
            </Link>
            <br />
            <Link href="/rules" className="text-link">
              {ur ? "انتظامی اصول پڑھیں ↗" : "Read Governance Principles ↗"}
            </Link>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-inner">
          <p className="eyebrow">{ur ? "مقصد کے ساتھ اپنا کردار ادا کریں" : "CONTRIBUTE WITH PURPOSE"}</p>
          <h2>
            {ur ? "آپ کی صلاحیت۔" : "Your skills."}
            <br />
            <span>{ur ? "آپ کی ذمہ داری۔" : "Your responsibility."}</span>
          </h2>
          <Link href="/participation" className="button button-gold">
            {ur ? "شرکت کے طریقے دیکھیں ↗" : "Explore Participation ↗"}
          </Link>
        </div>
      </section>
    </main>
  );
}
