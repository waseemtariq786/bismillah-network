"use client";

import Link from "next/link";
import PageHero from "@/components/page-hero";
import { useLanguage } from "@/components/language-provider";

export default function AboutPage() {
  const { language } = useLanguage();
  const ur = language === "ur";

  const values = ur
    ? [
        ["01", "مواقع", "ہر شخص اپنی صلاحیتیں دکھانے کا منصفانہ موقع رکھتا ہے۔"],
        ["02", "اتحاد", "مختلف صلاحیتوں کے حامل لوگ مل کر زیادہ بہتر نتائج حاصل کر سکتے ہیں۔"],
        ["03", "دیانت داری", "سچائی، شفافیت اور ذمہ داری ہمارے فیصلوں کی بنیاد ہیں۔"],
        ["04", "احترام", "ہر رکن عزت، انصاف اور اچھے برتاؤ کا حق رکھتا ہے۔"],
        ["05", "جوابدہی", "ہر عہدے کی ذمہ داریاں ہیں اور ہر فیصلے کے لیے مناسب اختیار ضروری ہے۔"],
        ["06", "ترقی", "ہم سیکھتے، بہتری لاتے اور مرحلہ وار عملی حل بناتے ہیں۔"],
      ]
    : [
        ["01", "Opportunity", "Every person deserves a fair chance to demonstrate their abilities."],
        ["02", "Unity", "People with different skills can achieve more when they work together."],
        ["03", "Integrity", "Honesty, transparency and responsibility guide our decisions."],
        ["04", "Respect", "Every member deserves dignity, fairness and respectful treatment."],
        ["05", "Accountability", "Every role carries responsibilities and every decision must have proper authority."],
        ["06", "Progress", "We learn, improve and build practical solutions step by step."],
      ];

  const t = {
    eyebrow: ur ? "ہمارے وژن کی کہانی" : "THE STORY BEHIND OUR VISION",
    title: ur ? "ٹیکنالوجی سے بڑھ کر، ایک مقصد۔" : "More Than Technology. A Purpose.",
    description: ur ? "بسم اللہ نیٹ ورک ٹیکنالوجی، لوگوں، صلاحیتوں اور مواقع کو ایک مشترکہ وژن کے ذریعے جوڑنے کے لیے بنایا جا رہا ہے۔" : "BISMILLAH NETWORK is being built to connect technology, people, skills and opportunities through one shared vision.",
    story: ur ? "ہماری کہانی" : "OUR STORY",
    vision: ur ? "لوگوں کو ایک ساتھ لانے کا" : "A vision to bring",
    vision2: ur ? "ایک وژن۔" : "people together.",
    story1: ur ? "بسم اللہ نیٹ ورک اس یقین کے ساتھ شروع ہوا کہ لوگوں کی پہچان ان کی ناکامی، بے روزگاری یا چھوٹ جانے والے مواقع نہیں ہونے چاہئیں۔ ہر شخص میں صلاحیت ہے جسے منصفانہ موقع ملنا چاہیے۔" : "BISMILLAH NETWORK began with a belief that people should not be defined by rejection, unemployment or the opportunities they have missed. Every person has potential that deserves a fair chance.",
    story2: ur ? "ہماری ابتدائی عملی توجہ ویب سائٹ اور موبائل ایپلی کیشن کی تیاری ہے۔ ہم عملی ترقی، سیکھنے اور مسلسل بہتری کے ذریعے اپنے ڈیجیٹل پلیٹ فارمز بنا رہے ہیں۔" : "Our initial practical focus is website development and mobile application development. We are building our own digital platforms through hands-on development, learning and continuous improvement.",
    story3: ur ? "ہمارا بڑا وژن ایک منظم نیٹ ورک کے ذریعے مختلف شعبوں کے لوگوں کو جوڑنا ہے جہاں ممبران اپنی صلاحیتیں پیش کر سکیں، ٹیموں میں کام کریں اور بامعنی منصوبوں میں حصہ لیں۔" : "Our larger vision is to connect people across different areas through an organized network where members can contribute skills, collaborate in teams and participate in meaningful projects.",
    mission: ur ? "ہمارا مشن" : "OUR MISSION",
    mission1: ur ? "کوئی پیچھے نہ رہ جائے۔" : "No One Left Behind.",
    mission2: ur ? "ہر زندگی ایک موقع کی حق دار ہے۔" : "Every Life Deserves a Chance.",
    missionDesc: ur ? "ہم ایسے مواقع پیدا کرنا چاہتے ہیں جہاں لوگ اپنی صلاحیتیں دکھا سکیں، عزت کے ساتھ حصہ ڈالیں اور ٹیم ورک کے ذریعے ترقی کریں۔" : "We aim to create opportunities for people to demonstrate their abilities, contribute with dignity and grow through teamwork.",
    guide: ur ? "وہ اصول جو ہماری رہنمائی کرتے ہیں" : "WHAT GUIDES OUR ACTIONS",
    core: ur ? "ہماری بنیادی" : "Our Core",
    values: ur ? "اقدار" : "Values",
    long: ur ? "ہمارا طویل مدتی وژن" : "OUR LONG-TERM VISION",
    one: ur ? "ایک نیٹ ورک۔" : "One Network.",
    future: ur ? "ایک مشترکہ مستقبل۔" : "One Shared Future.",
    long1: ur ? "ہمارا منصوبہ مرکزی قیادت، شعبوں، صوبائی رابطہ کاری، ضلعی اور مقامی ٹیموں اور ممبران پر مشتمل مربوط تنظیمی ڈھانچہ بنانا ہے۔" : "We plan to develop a connected organizational structure with central leadership, departments, provincial coordination, district and local teams, and members.",
    long2: ur ? "ایک مخصوص ڈیجیٹل پلیٹ فارم رکنیت کی درخواستوں، منظوری، تقرریوں، ذمہ داریوں، منصوبوں، پیش رفت اور تنظیمی ریکارڈ کے لیے بنایا جائے گا۔" : "A dedicated digital platform is planned to support membership applications, approval, appointments, responsibilities, project assignments, progress tracking and organizational records.",
    long3: ur ? "یہ سہولیات مرحلہ وار متعارف ہوں گی۔ فعال خدمات اور زیرِ تیاری خصوصیات میں واضح فرق رکھا جائے گا۔" : "These capabilities will be introduced in stages. We will clearly distinguish active services from features that are still under development.",
    explore: ur ? "ہمارا نیٹ ورک دیکھیں" : "Explore Our Network",
    founder: ur ? "بانی اور قیادت" : "FOUNDER & LEADERSHIP",
    responsibility: ur ? "ایک وژن۔" : "One vision.",
    responsibility2: ur ? "ایک ذمہ داری۔" : "One responsibility.",
    designation: ur ? "بانی اور منیجنگ ڈائریکٹر" : "FOUNDER & MANAGING DIRECTOR",
    founderDesc: ur ? "لوگوں کو جوڑنے، مواقع پیدا کرنے اور بامعنی ڈیجیٹل حل بنانے کے وژن کے ساتھ بسم اللہ نیٹ ورک کی ترقی کی قیادت۔" : "Leading the development of BISMILLAH NETWORK with a vision to connect people, create opportunities and build meaningful digital solutions.",
    journey: ur ? "اس سفر کا حصہ بنیں" : "BE PART OF THE JOURNEY",
    contribution: ur ? "ہر تعاون" : "Every contribution",
    difference: ur ? "فرق پیدا کر سکتا ہے۔" : "can make a difference.",
    join: ur ? "شامل ہونے کا طریقہ جانیں" : "Discover How to Join",
  };

  return (
    <main>
      <PageHero eyebrow={t.eyebrow} title={t.title} description={t.description} />

      <section className="section-pad">
        <div className="container content-grid">
          <div><p className="eyebrow">{t.story}</p><h2 className="content-title">{t.vision}<br /><span>{t.vision2}</span></h2></div>
          <div className="prose"><p>{t.story1}</p><p>{t.story2}</p><p>{t.story3}</p></div>
        </div>
      </section>

      <section className="mission-section section-pad">
        <div className="container mission-content"><p className="eyebrow">{t.mission}</p><h2>{t.mission1}<br /><span>{t.mission2}</span></h2><p>{t.missionDesc}</p></div>
      </section>

      <section className="values-section section-pad">
        <div className="container"><p className="eyebrow">{t.guide}</p><h2 className="content-title">{t.core} <span>{t.values}</span></h2>
          <div className="value-grid">{values.map(([n, title, description]) => <article className="value-card-visual" key={n}>
              <div className="value-card-image">
                <img src={`/images/${[
                  "digital-platforms.jpg",
                  "business-technology.jpg",
                  "website-development.jpg",
                  "mobile-app-development.jpg",
                  "business-technology.jpg",
                  "digital-platforms.jpg"
                ][Number(n) - 1]}`} alt="" />
              </div>
              <b>{n}</b><h3>{title}</h3><p>{description}</p>
            </article>)}</div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container content-grid">
          <div><p className="eyebrow">{t.long}</p><h2 className="content-title">{t.one}<br /><span>{t.future}</span></h2></div>
          <div className="prose"><p>{t.long1}</p><p>{t.long2}</p><p>{t.long3}</p><Link href="/network" className="text-link">{t.explore} ↗</Link></div>
        </div>
      </section>

      <section className="founder-section section-pad">
        <div className="container founder-inner">
          <div><p className="eyebrow">{t.founder}</p><h2>{t.responsibility}<br /><span>{t.responsibility2}</span></h2></div>
          <div className="founder-card"><div className="founder-monogram">MWT</div><p className="eyebrow">{t.designation}</p><h3>Muhammad Waseem Tariq</h3><p>{t.founderDesc}</p></div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-inner"><p className="eyebrow">{t.journey}</p><h2>{t.contribution}<br /><span>{t.difference}</span></h2><Link href="/join" className="button button-gold">{t.join} ↗</Link></div>
      </section>
    </main>
  );
}
