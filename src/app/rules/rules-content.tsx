"use client";

import Link from "next/link";
import PageHero from "@/components/page-hero";
import { useLanguage } from "@/components/language-provider";

const rules = [
  ["01", "Respect & Dignity", "Every person must be treated fairly and respectfully. Harassment, discrimination, threats and humiliation have no place in the network.", "عزت اور احترام", "ہر شخص کے ساتھ انصاف اور احترام سے پیش آنا ضروری ہے۔ ہراسانی، امتیاز، دھمکی اور تذلیل کی نیٹ ورک میں کوئی جگہ نہیں۔"],
  ["02", "Honesty & Integrity", "Members and representatives must communicate honestly, avoid false claims and provide accurate information.", "سچائی اور دیانت داری", "ممبران اور نمائندگان سچائی سے بات کریں، جھوٹے دعووں سے بچیں اور درست معلومات فراہم کریں۔"],
  ["03", "Organizational Authority", "Official decisions and appointments must follow the authorized organizational structure. No one may claim powers they have not been granted.", "تنظیمی اختیار", "سرکاری فیصلے اور تقرریاں منظور شدہ تنظیمی ڈھانچے کے مطابق ہوں گی۔ کوئی شخص ایسا اختیار ظاہر نہیں کر سکتا جو اسے دیا نہ گیا ہو۔"],
  ["04", "Responsibilities", "Every assigned role must have clear duties. Members should complete accepted tasks responsibly and communicate delays or difficulties.", "ذمہ داریاں", "ہر عہدے کی ذمہ داریاں واضح ہونی چاہئیں۔ ممبران قبول کردہ کام ذمہ داری سے مکمل کریں اور تاخیر یا مشکلات سے آگاہ کریں۔"],
  ["05", "Communication", "Official communication must remain professional, relevant and respectful. Confidential organizational information must not be shared without authorization.", "رابطہ اور گفتگو", "سرکاری رابطہ پیشہ ورانہ، متعلقہ اور بااحترام ہونا چاہیے۔ خفیہ تنظیمی معلومات اجازت کے بغیر شیئر نہیں کی جا سکتیں۔"],
  ["06", "Work & Projects", "Projects and assignments must have clear requirements, responsible persons and progress records. Work must not be falsely reported as completed.", "کام اور منصوبے", "منصوبوں اور کاموں کے تقاضے، ذمہ دار افراد اور پیش رفت کا ریکارڈ واضح ہونا چاہیے۔ نامکمل کام کو مکمل ظاہر نہیں کیا جا سکتا۔"],
  ["07", "Financial Transparency", "All approved payments, expenses, commissions and financial arrangements must have documented terms and proper records. No guaranteed income or profit may be promised without an authorized written agreement.", "مالی شفافیت", "تمام منظور شدہ ادائیگیوں، اخراجات، کمیشن اور مالی معاملات کی شرائط تحریری اور ریکارڈ شدہ ہونی چاہئیں۔ مجاز تحریری معاہدے کے بغیر آمدنی یا منافع کی ضمانت نہیں دی جا سکتی۔"],
  ["08", "Data Protection", "Personal information, passwords and private records must be protected. Access should be limited to authorized purposes and people.", "ڈیٹا کا تحفظ", "ذاتی معلومات، پاس ورڈز اور نجی ریکارڈ محفوظ رکھنا ضروری ہے۔ رسائی صرف مجاز افراد اور مقاصد تک محدود ہونی چاہیے۔"],
  ["09", "Accountability", "Misconduct, misuse of authority, financial irregularities and repeated failure to follow approved procedures may be reviewed by authorized leadership.", "جواب دہی", "بدعنوانی، اختیارات کا غلط استعمال، مالی بے ضابطگیوں اور منظور شدہ طریقہ کار کی بار بار خلاف ورزی کا مجاز قیادت جائزہ لے سکتی ہے۔"],
  ["10", "Fair Review", "Any complaint or dispute should be reviewed fairly, with an opportunity for the concerned people to explain their position.", "منصفانہ جائزہ", "ہر شکایت یا اختلاف کا منصفانہ جائزہ لیا جانا چاہیے اور متعلقہ افراد کو اپنا مؤقف پیش کرنے کا موقع ملنا چاہیے۔"],
];

export default function RulesContent() {
  const { language } = useLanguage();
  const ur = language === "ur";

  return (
    <main>
      <PageHero
        eyebrow={ur ? "ہمارے انتظامی اصول" : "OUR GOVERNANCE PRINCIPLES"}
        title={ur ? "اعتماد کے لیے ذمہ داری ضروری ہے۔" : "Trust Requires Responsibility."}
        description={ur ? "بااحترام شرکت، شفاف فیصلوں اور جواب دہ ٹیم ورک کے لیے مشترکہ اصول۔" : "A shared standard for respectful participation, transparent decisions and accountable teamwork."}
      />

      <section className="section-pad">
        <div className="container">
          <p className="eyebrow">{ur ? "تنظیمی اصول" : "ORGANIZATIONAL PRINCIPLES"}</p>
          <h2 className="content-title">
            {ur ? "وہ اصول جو " : "Rules That Guide "}
            <span>{ur ? "ہمارے نیٹ ورک کی رہنمائی کرتے ہیں" : "Our Network"}</span>
          </h2>
          <div className="rules-list">
            {rules.map(([number, title, description, urTitle, urDescription]) => (
              <article className="rule-item rule-item-visual" key={number}>
                <div className="rule-item-image">
                  <img
                    src={`/images/${[
                      "digital-platforms.jpg",
                      "business-technology.jpg",
                      "digital-platforms.jpg",
                      "mobile-app-development.jpg",
                      "website-development.jpg",
                      "business-technology.jpg",
                      "business-technology.jpg",
                      "digital-platforms.jpg",
                      "mobile-app-development.jpg",
                      "website-development.jpg"
                    ][Number(number) - 1]}`}
                    alt=""
                  />
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
          <p className="eyebrow">{ur ? "اہم پالیسی وضاحت" : "IMPORTANT POLICY NOTICE"}</p>
          <h2>
            {ur ? "واضح اصول۔" : "Clear principles."}
            <br />
            <span>{ur ? "باضابطہ منظوری۔" : "Formal approval."}</span>
          </h2>
          <p>
            {ur
              ? "یہ صفحہ BISMILLAH NETWORK کے موجودہ انتظامی اصول بیان کرتا ہے۔ یہ باضابطہ منظور شدہ قانونی دستاویزات، ملازمت کے معاہدوں، رکنیت کے معاہدوں یا تفصیلی مالی پالیسیوں کا متبادل نہیں۔ ایسی دستاویزات کو پابند شرائط قرار دینے سے پہلے الگ سے تیار اور منظور کرنا ضروری ہوگا۔"
              : "This page communicates the current governance principles of BISMILLAH NETWORK. It is not a substitute for formally approved legal documents, employment contracts, membership agreements or detailed financial policies. Such documents must be prepared and approved separately before being treated as binding terms."}
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container content-grid">
          <div>
            <p className="eyebrow">{ur ? "متعلقہ معلومات" : "RELATED INFORMATION"}</p>
            <h2 className="content-title">
              {ur ? "اپنی " : "Understand Your "}
              <span>{ur ? "ذمہ داری سمجھیں" : "Role"}</span>
            </h2>
          </div>
          <div className="prose">
            <p>
              {ur
                ? "نیٹ ورک میں ہر عہدے کی ذمہ داریاں، مناسب رسائی اور رپورٹنگ کا واضح طریقہ ہونا چاہیے۔"
                : "Every position in the network should have defined responsibilities, appropriate access and a clear reporting line."}
            </p>
            <Link href="/roles" className="text-link">
              {ur ? "عہدے اور ذمہ داریاں ↗" : "Roles & Responsibilities ↗"}
            </Link>
            <br />
            <Link href="/participation" className="text-link">
              {ur ? "شرکت کے اصول ↗" : "Participation Principles ↗"}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
