"use client";

import Link from "next/link";
import PageHero from "@/components/page-hero";
import { useLanguage } from "@/components/language-provider";

const levels = [
  ["01", "Founder & Managing Director", "Overall vision, leadership, strategic direction and final organizational authority.", "فاؤنڈر اور مینیجنگ ڈائریکٹر", "مجموعی وژن، قیادت، حکمتِ عملی اور ادارے کی حتمی انتظامی ذمہ داری۔"],
  ["02", "Central Administration", "Central coordination, records, administration and implementation of approved policies.", "مرکزی انتظامیہ", "مرکزی رابطہ کاری، ریکارڈ، انتظامی امور اور منظور شدہ پالیسیوں پر عمل درآمد۔"],
  ["03", "Department Heads", "Leading their respective departments, managing tasks and reporting progress.", "محکمہ جات کے سربراہان", "اپنے محکموں کی قیادت، کاموں کا انتظام اور پیش رفت کی رپورٹنگ۔"],
  ["04", "Provincial Coordinators", "Coordinating approved activities and teams across provinces.", "صوبائی کوآرڈینیٹرز", "صوبوں میں منظور شدہ سرگرمیوں اور ٹیموں کے درمیان رابطہ کاری۔"],
  ["05", "District / Tehsil / City Incharges", "Local coordination, member support and area-level reporting.", "ضلع / تحصیل / شہر انچارجز", "مقامی رابطہ کاری، ممبران کی معاونت اور علاقے کی سطح پر رپورٹنگ۔"],
  ["06", "Team Leaders", "Organizing assigned teams, distributing approved tasks and tracking progress.", "ٹیم لیڈرز", "مقرر کردہ ٹیموں کو منظم کرنا، منظور شدہ کام تقسیم کرنا اور پیش رفت دیکھنا۔"],
  ["07", "Members", "Contributing skills, participating in approved activities and working responsibly.", "ممبران", "اپنی صلاحیتوں کے ذریعے حصہ لینا، منظور شدہ سرگرمیوں میں شرکت اور ذمہ داری سے کام کرنا۔"]
];

const departments = [
  ["Technology & Development", "Websites, mobile applications and digital systems.", "ٹیکنالوجی اور ڈیولپمنٹ", "ویب سائٹس، موبائل ایپلی کیشنز اور ڈیجیٹل سسٹمز۔"],
  ["Administration", "Organizational records, coordination and internal processes.", "انتظامیہ", "ادارے کا ریکارڈ، رابطہ کاری اور اندرونی انتظامی امور۔"],
  ["Accounts & Finance", "Financial records, approved budgets and transparent reporting.", "اکاؤنٹس اور فنانس", "مالی ریکارڈ، منظور شدہ بجٹ اور شفاف رپورٹنگ۔"],
  ["Marketing & Communication", "Public communication, outreach and brand development.", "مارکیٹنگ اور کمیونیکیشن", "عوامی رابطہ، تشہیر اور برانڈ کی ترقی۔"],
  ["Projects & Operations", "Project planning, assignments and progress coordination.", "پروجیکٹس اور آپریشنز", "پروجیکٹ کی منصوبہ بندی، ذمہ داریوں کی تقسیم اور پیش رفت کی نگرانی۔"],
  ["Training & Skills", "Learning, skill development and knowledge sharing.", "ٹریننگ اور اسکلز", "سیکھنے، صلاحیتیں بڑھانے اور علم کے تبادلے کے مواقع۔"]
];

export default function NetworkContent() {
  const { language } = useLanguage();
  const ur = language === "ur";

  return (
    <main>
      <PageHero
        eyebrow="ONE NETWORK • ONE VISION"
        title={ur ? "لوگوں کے گرد قائم ایک منظم ڈھانچہ۔" : "A Structure Built Around People."}
        description={ur
          ? "ہمارا مجوزہ تنظیمی ماڈل واضح ذمہ داریوں کے ذریعے قیادت، محکموں، مقامی ٹیموں اور ممبران کو آپس میں جوڑتا ہے۔"
          : "Our planned organizational model connects leadership, departments, local teams and members through clear responsibilities."}
      />

      <section className="section-pad">
        <div className="container">
          <p className="eyebrow">{ur ? "تنظیمی ڈھانچہ" : "ORGANIZATIONAL STRUCTURE"}</p>
          <h2 className="content-title">
            {ur ? <>ایک وژن۔ <span>واضح ذمہ داریاں۔</span></> : <>One Vision. <span>Clear Responsibilities.</span></>}
          </h2>
          <p className="section-description">
            {ur
              ? "درج ذیل عہدوں کی ترتیب ہمارے مجوزہ تنظیمی ڈھانچے کو ظاہر کرتی ہے۔ تقرریاں اور عملی اختیارات باقاعدہ منظوری کے ذریعے طے کیے جائیں گے۔"
              : "The following hierarchy represents our proposed organizational framework. Appointments and operational authority will be established through formal approval."}
          </p>

          <div className="network-levels">
            {levels.map(([number, title, description, urTitle, urDescription]) => (
              <article className="network-level" key={number}>
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

      <section className="values-section section-pad">
        <div className="container">
          <p className="eyebrow">{ur ? "مل کر کام کرنا" : "WORKING TOGETHER"}</p>
          <h2 className="content-title">
            {ur ? <>ہمارے مجوزہ <span>محکمے</span></> : <>Our Planned <span>Departments</span></>}
          </h2>
          <div className="department-grid">
            {departments.map(([name, description, urName, urDescription], index) => (
              <Link
                href={`/contact?department=${encodeURIComponent(name)}`}
                className={`department-card department-card-clickable department-image-${index + 1}`}
                key={name}
              >
                <div className="department-card-image">
                  <img
                    src={`/images/${[
                      "digital-platforms.jpg",
                      "business-technology.jpg",
                      "business-technology.jpg",
                      "website-development.jpg",
                      "digital-platforms.jpg",
                      "mobile-app-development.jpg"
                    ][index]}`}
                    alt=""
                  />
                </div>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{ur ? urName : name}</h3>
                <p>{ur ? urDescription : description}</p>
                <small className="department-explore">{ur ? "مزید معلومات ↗" : "Explore Department ↗"}</small>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mission-section section-pad">
        <div className="container mission-content">
          <p className="eyebrow">{ur ? "ایک مربوط ادارہ" : "A CONNECTED ORGANIZATION"}</p>
          <h2>
            {ur ? <>مختلف ذمہ داریاں۔<br /><span>ایک مشترکہ مقصد۔</span></> : <>Different roles.<br /><span>One shared purpose.</span></>}
          </h2>
          <p>
            {ur
              ? "ہر سطح پر باہمی احترام، واضح ذمہ داریوں، شفاف رابطے اور جواب دہی کے ساتھ کام ہونا چاہیے۔"
              : "Every level should work with mutual respect, defined responsibilities, transparent communication and accountability."}
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container content-grid">
          <div>
            <p className="eyebrow">{ur ? "انتظام اور ذمہ داری" : "GOVERNANCE & RESPONSIBILITY"}</p>
            <h2 className="content-title">
              {ur ? <>اختیار کے ساتھ <span>جواب دہی۔</span></> : <>Authority with <span>Accountability.</span></>}
            </h2>
          </div>
          <div className="prose">
            <p>
              {ur
                ? "تنظیمی عہدہ خود بخود غیر محدود اختیارات نہیں دیتا۔ رسائی، ذمہ داریاں اور رپورٹنگ کا طریقہ منظور شدہ پالیسیوں کے مطابق طے ہوگا۔"
                : "Organizational positions do not automatically grant unrestricted authority. Access, responsibilities and reporting lines will be assigned according to approved policies."}
            </p>
            <p>
              {ur
                ? "مالی فیصلے، تقرریاں اور اہم انتظامی اقدامات مجاز طریقہ کار کے مطابق ریکارڈ اور انجام دیے جائیں گے۔"
                : "Financial decisions, appointments and important administrative actions must be recorded and handled through authorized procedures."}
            </p>
            <Link href="/roles" className="text-link">
              {ur ? "عہدے اور ذمہ داریاں دیکھیں ↗" : "Explore Roles & Responsibilities ↗"}
            </Link>
            <br />
            <Link href="/rules" className="text-link">
              {ur ? "قواعد و ضوابط پڑھیں ↗" : "Read Rules & Regulations ↗"}
            </Link>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-inner">
          <p className="eyebrow">{ur ? "آپ کی صلاحیت اہم ہے" : "YOUR SKILLS HAVE VALUE"}</p>
          <h2>
            {ur ? <>نیٹ ورک میں<br /><span>اپنی جگہ بنائیں۔</span></> : <>Find your place<br /><span>in the network.</span></>}
          </h2>
          <Link href="/join" className="button button-gold">
            {ur ? "ممبرشپ کے بارے میں جانیں ↗" : "Explore Membership ↗"}
          </Link>
        </div>
      </section>
    </main>
  );
}
