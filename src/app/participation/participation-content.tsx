"use client";

import Link from "next/link";
import PageHero from "@/components/page-hero";
import { useLanguage } from "@/components/language-provider";

const ways = [
  ["01", "Share Your Skills", "Contribute your knowledge, experience and abilities in areas where you can add value.", "اپنی صلاحیتیں پیش کریں", "اپنا علم، تجربہ اور صلاحیتیں ان شعبوں میں پیش کریں جہاں آپ مثبت کردار ادا کر سکتے ہیں۔"],
  ["02", "Work in Teams", "Collaborate with people who have different skills and work towards shared objectives.", "ٹیموں میں کام کریں", "مختلف صلاحیتوں کے حامل لوگوں کے ساتھ مل کر مشترکہ مقاصد کے لیے کام کریں۔"],
  ["03", "Take Project Assignments", "Participate in suitable tasks according to your skills, availability and approved responsibilities.", "منصوبوں میں ذمہ داری لیں", "اپنی صلاحیت، دستیابی اور منظور شدہ ذمہ داریوں کے مطابق مناسب کاموں میں حصہ لیں۔"],
  ["04", "Learn & Improve", "Develop new abilities, exchange knowledge and improve through practical experience.", "سیکھیں اور بہتر بنیں", "نئی صلاحیتیں حاصل کریں، علم کا تبادلہ کریں اور عملی تجربے سے اپنی کارکردگی بہتر بنائیں۔"],
  ["05", "Support the Network", "Help with coordination, communication, constructive feedback and responsible teamwork.", "نیٹ ورک کی معاونت کریں", "رابطہ کاری، گفتگو، تعمیری تجاویز اور ذمہ دارانہ ٹیم ورک میں مدد دیں۔"],
];

export default function ParticipationContent() {
  const { language } = useLanguage();
  const ur = language === "ur";

  return (
    <main>
      <PageHero
        eyebrow={ur ? "حصہ لیں • تعاون کریں • ترقی کریں" : "CONTRIBUTE • COLLABORATE • GROW"}
        title={ur ? "ہر صلاحیت کے لیے ایک جگہ ہے۔" : "There Is a Place for Every Skill."}
        description={ur ? "BISMILLAH NETWORK ایک باعزت ماحول قائم کرنے کا مقصد رکھتا ہے جہاں لوگ اپنا کردار ادا کر سکیں، سیکھ سکیں اور مل کر کام کر سکیں۔" : "BISMILLAH NETWORK aims to create a respectful environment where people can contribute, learn and work together."}
      />

      <section className="section-pad">
        <div className="container">
          <p className="eyebrow">{ur ? "شرکت کے طریقے" : "WAYS TO PARTICIPATE"}</p>
          <h2 className="content-title">
            {ur ? "اپنی صلاحیتوں کو " : "Make Your Skills "}
            <span>{ur ? "مؤثر بنائیں" : "Count"}</span>
          </h2>
          <div className="participation-grid">
            {ways.map(([number, title, description, urTitle, urDescription]) => (
              <Link
                href={`/contact?participation=${encodeURIComponent(title)}`}
                className="participation-card participation-card-clickable"
                key={number}
              >
                <div className="participation-card-image">
                  <img
                    src={`/images/${[
                      "mobile-app-development.jpg",
                      "digital-platforms.jpg",
                      "website-development.jpg",
                      "business-technology.jpg",
                      "digital-platforms.jpg"
                    ][Number(number) - 1]}`}
                    alt=""
                  />
                </div>
                <span>{number}</span>
                <h3>{ur ? urTitle : title}</h3>
                <p>{ur ? urDescription : description}</p>
                <small>{ur ? "مزید جانیں ↗" : "Explore ↗"}</small>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mission-section section-pad">
        <div className="container mission-content">
          <p className="eyebrow">{ur ? "منصفانہ شرکت" : "FAIR PARTICIPATION"}</p>
          <h2>
            {ur ? "مواقع کے ساتھ" : "Opportunity with"}
            <br />
            <span>{ur ? "واضح توقعات۔" : "clear expectations."}</span>
          </h2>
          <p>
            {ur
              ? "شرکت کا انحصار مناسب مواقع، منصوبے کی ضروریات، ممبر کی دستیابی اور مجاز ذمہ داریوں پر ہوگا۔ کسی کو ایسا کام قبول کرنے پر مجبور نہیں کیا جانا چاہیے جسے وہ مناسب طور پر انجام نہ دے سکے۔"
              : "Participation depends on suitable opportunities, project requirements, member availability and authorized assignments. No one should be pressured to accept work they cannot reasonably perform."}
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container content-grid">
          <div>
            <p className="eyebrow">{ur ? "کام اور مالی وضاحت" : "WORK & FINANCIAL CLARITY"}</p>
            <h2 className="content-title">
              {ur ? "ہر مرحلے پر " : "Transparency at "}
              <span>{ur ? "شفافیت" : "Every Step"}</span>
            </h2>
          </div>
          <div className="prose">
            <p>
              {ur
                ? "کوئی معاوضے والا کام شروع ہونے سے پہلے اس کا دائرہ کار، ادائیگی کی شرائط، آخری تاریخ اور ذمہ داریاں واضح طور پر بتائی جائیں اور تحریری طور پر طے کی جائیں۔"
                : "Before a paid assignment begins, its scope, payment terms, deadlines and responsibilities must be clearly communicated and agreed in writing."}
            </p>
            <p>
              {ur
                ? "صرف ممبرشپ سے ملازمت، آمدنی، کمیشن، ملکیت یا منافع کی ضمانت نہیں ملتی۔ کوئی بھی مالی فائدہ منظور شدہ اور دستاویزی پالیسی کے مطابق ہوگا۔"
                : "Membership alone does not guarantee employment, income, commission, ownership or profit. Any financial benefit must follow an approved and documented policy."}
            </p>
            <Link href="/rules" className="text-link">
              {ur ? "قواعد و ضوابط پڑھیں ↗" : "Read Rules & Regulations ↗"}
            </Link>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-inner">
          <p className="eyebrow">{ur ? "کیا آپ اپنا کردار ادا کرنے کے لیے تیار ہیں؟" : "READY TO CONTRIBUTE?"}</p>
          <h2>
            {ur ? "آغاز کریں اپنی" : "Start with your"}
            <br />
            <span>{ur ? "صلاحیت سے۔" : "potential."}</span>
          </h2>
          <Link href="/join" className="button button-gold">
            {ur ? "رکنیت کی معلومات ↗" : "Membership Information ↗"}
          </Link>
        </div>
      </section>
    </main>
  );
}
