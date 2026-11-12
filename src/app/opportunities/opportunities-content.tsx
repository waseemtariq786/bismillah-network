"use client";

import Link from "next/link";
import PageHero from "@/components/page-hero";
import { useLanguage } from "@/components/language-provider";

const opportunities = [
  ["01", "Technology & Development", "Website development, Android applications, software planning and digital problem-solving.", "ٹیکنالوجی اور ڈیولپمنٹ", "ویب سائٹ ڈیولپمنٹ، اینڈرائیڈ ایپلی کیشنز، سافٹ ویئر کی منصوبہ بندی اور ڈیجیٹل مسائل کا حل۔"],
  ["02", "Administration & Coordination", "Organizational planning, documentation, communication and team coordination.", "انتظامیہ اور رابطہ کاری", "تنظیمی منصوبہ بندی، دستاویزات، رابطہ کاری اور ٹیموں کے درمیان تعاون۔"],
  ["03", "Marketing & Communication", "Brand communication, outreach, content planning and community engagement.", "مارکیٹنگ اور کمیونیکیشن", "برانڈ کا تعارف، لوگوں تک رسائی، مواد کی منصوبہ بندی اور کمیونٹی سے رابطہ۔"],
  ["04", "Accounts & Management", "Record keeping, financial documentation, budgeting support and reporting.", "اکاؤنٹس اور مینجمنٹ", "ریکارڈ کی حفاظت، مالی دستاویزات، بجٹ میں معاونت اور رپورٹنگ۔"],
  ["05", "Projects & Operations", "Project planning, task coordination, quality checks and progress reporting.", "منصوبے اور آپریشنز", "منصوبہ بندی، کاموں کی تقسیم، معیار کی جانچ اور پیش رفت کی رپورٹنگ۔"],
  ["06", "Learning & Skills Development", "Knowledge sharing, practical learning and development of useful professional skills.", "تعلیم اور صلاحیتوں کی ترقی", "علم کا تبادلہ، عملی سیکھنے کے مواقع اور مفید پیشہ ورانہ صلاحیتوں کی ترقی۔"],
];

export default function OpportunitiesContent() {
  const { language } = useLanguage();
  const ur = language === "ur";

  return (
    <main>
      <PageHero
        eyebrow={ur ? "صلاحیت • مہارت • مواقع" : "POTENTIAL • SKILLS • OPPORTUNITY"}
        title={ur ? "آپ کی صلاحیتیں نئے راستے کھول سکتی ہیں۔" : "Your Abilities Can Open Doors."}
        description={ur ? "ہمارا مقصد ایسا نیٹ ورک بنانا ہے جہاں لوگ اپنا کردار ادا کرنے، تعاون کرنے اور اپنی صلاحیتیں بڑھانے کے مواقع تلاش کر سکیں۔" : "We aim to build a network where people can discover ways to contribute, collaborate and develop their capabilities."}
      />

      <section className="section-pad">
        <div className="container">
          <p className="eyebrow">{ur ? "ممکنہ شرکت کے شعبے" : "AREAS OF POSSIBLE CONTRIBUTION"}</p>
          <h2 className="content-title">
            {ur ? "اپنے " : "Explore Your "}
            <span>{ur ? "مواقع تلاش کریں" : "Possibilities"}</span>
          </h2>
          <p className="section-description">
            {ur
              ? "یہ شرکت کے ممکنہ شعبے ہیں، موجودہ خالی اسامیاں یا یقینی ملازمتیں نہیں۔ حقیقی مواقع منظور شدہ منصوبوں اور تنظیمی ضروریات پر منحصر ہوں گے۔"
              : "These are potential areas of participation, not current vacancies or guaranteed jobs. Actual opportunities will depend on approved projects and organizational needs."}
          </p>
          <div className="opportunity-grid">
            {opportunities.map(([number, title, description, urTitle, urDescription]) => (
              <Link
                href={`/contact?opportunity=${encodeURIComponent(title)}`}
                className={`opportunity-card opportunity-card-clickable opportunity-${number}`}
                key={number}
              >
                <div className="opportunity-card-image">
                  <img
                    src={`/images/${[
                      "mobile-app-development.jpg",
                      "business-technology.jpg",
                      "website-development.jpg",
                      "business-technology.jpg",
                      "digital-platforms.jpg",
                      "mobile-app-development.jpg"
                    ][Number(number) - 1]}`}
                    alt=""
                  />
                </div>
                <span>{number}</span>
                <h3>{ur ? urTitle : title}</h3>
                <p>{ur ? urDescription : description}</p>
                <small>{ur ? "مزید جانیں ↗" : "Explore Area ↗"}</small>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mission-section section-pad">
        <div className="container mission-content">
          <p className="eyebrow">{ur ? "ہمارا یقین" : "OUR BELIEF"}</p>
          <h2>
            {ur ? "ایک موقع" : "One opportunity"}
            <br />
            <span>{ur ? "زندگی کا سفر بدل سکتا ہے۔" : "can change a journey."}</span>
          </h2>
          <p>
            {ur
              ? "ہمارا یقین ہے کہ ہر شخص کو اپنی صلاحیت دکھانے کا منصفانہ موقع ملنا چاہیے۔ نام یا پہچان سے زیادہ اہم مہارت، محنت، سچائی اور ذمہ داری ہیں۔"
              : "We believe people should be given a fair chance to demonstrate what they can do. Skills, effort, honesty and responsibility matter more than labels."}
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container content-grid">
          <div>
            <p className="eyebrow">{ur ? "غلط وعدوں سے گریز" : "NO FALSE PROMISES"}</p>
            <h2 className="content-title">
              {ur ? "دیانت داری کے ساتھ " : "Opportunity with "}
              <span>{ur ? "مواقع" : "Integrity"}</span>
            </h2>
          </div>
          <div className="prose">
            <p>
              {ur
                ? "کسی شعبے کا ذکر ہونے کا مطلب یہ نہیں کہ اس وقت وہاں کوئی عہدہ دستیاب ہے۔ انتخاب، منصوبے کی ذمہ داریاں اور ممکنہ معاوضہ حقیقی ضروریات اور منظور شدہ شرائط کے مطابق ہوں گے۔"
                : "Listing an area of interest does not mean a position is currently available. Selection, project assignments and any compensation will depend on actual requirements and approved terms."}
            </p>
            <p>
              {ur
                ? "صرف نیٹ ورک میں شامل ہونے پر یقینی ملازمت، آمدنی، کمیشن یا منافع کا وعدہ نہیں کیا جائے گا۔"
                : "We will not promise guaranteed employment, income, commission or profit merely for joining the network."}
            </p>
            <Link href="/participation" className="text-link">
              {ur ? "شرکت کے اصول سمجھیں ↗" : "Understand Participation ↗"}
            </Link>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-inner">
          <p className="eyebrow">{ur ? "ہر زندگی ایک موقع کی حق دار ہے" : "EVERY LIFE DESERVES A CHANCE"}</p>
          <h2>
            {ur ? "اپنی صلاحیتیں لائیں۔" : "Bring your skills."}
            <br />
            <span>{ur ? "ہمارے وژن کا حصہ بنیں۔" : "Be part of the vision."}</span>
          </h2>
          <Link href="/join" className="button button-gold">
            {ur ? "شمولیت کے طریقے دیکھیں ↗" : "Explore Joining ↗"}
          </Link>
        </div>
      </section>
    </main>
  );
}
