"use client";

import Link from "next/link";
import { useLanguage } from "@/components/language-provider";

export default function Home() {
  const { language } = useLanguage();
  const ur = language === "ur";

  const text = {
    welcome: ur ? "بسم اللہ نیٹ ورک میں خوش آمدید" : "WELCOME TO BISMILLAH NETWORK",
    hero1: ur ? "ایک بہتر" : "Building a Better",
    hero2: ur ? "ڈیجیٹل مستقبل۔" : "Digital Future.",
    heroDesc: ur
      ? "ہم پیشہ ورانہ ویب سائٹس، موبائل ایپلی کیشنز اور لوگوں کو مواقع سے جوڑنے کے وژن کے ذریعے خیالات کو بامقصد ڈیجیٹل تجربات میں بدلتے ہیں۔"
      : "We transform ideas into meaningful digital experiences through professional websites, powerful mobile applications and a vision to connect people through opportunity.",
    explore: ur ? "ہماری خدمات دیکھیں" : "Explore Our Services",
    conversation: ur ? "بات چیت شروع کریں" : "Start a Conversation",
    who: ur ? "ہم کون ہیں" : "WHO WE ARE",
    purpose: ur ? "بامقصد ٹیکنالوجی" : "Technology with",
    purpose2: ur ? "ایک بڑے مقصد کے ساتھ۔" : "a greater purpose.",
    intro1: ur
      ? "بسم اللہ نیٹ ورک ایک ترقی کرتا ہوا ڈیجیٹل منصوبہ ہے جو ٹیکنالوجی، لوگوں اور بامعنی مواقع پر توجہ دیتا ہے۔ ہماری موجودہ خدمات ویب سائٹ اور موبائل ایپلی کیشن کی تیاری ہیں۔"
      : "BISMILLAH NETWORK is a growing digital initiative focused on technology, people and meaningful opportunities. Our current service focus is website and mobile application development.",
    intro2: ur
      ? "ہمارا طویل مدتی وژن ایک ایسا مربوط نیٹ ورک بنانا ہے جہاں لوگ اپنی صلاحیتیں بانٹ سکیں، مل کر کام کریں اور ایک بڑے مقصد میں حصہ ڈالیں۔"
      : "Our long-term vision is to build a connected network where people can share their abilities, work together and contribute to something bigger.",
    story: ur ? "ہماری کہانی جانیں" : "Discover our story",
    what: ur ? "ہم کیا کرتے ہیں" : "WHAT WE DO",
    services: ur ? "ہماری خدمات" : "Our Services",
    viewServices: ur ? "تمام خدمات دیکھیں" : "View all services",
    website: ur ? "ویب سائٹ کی تیاری" : "Website Development",
    websiteDesc: ur ? "کاروبار، اداروں اور نئے خیالات کے لیے پیشہ ورانہ اور ہر ڈیوائس پر موزوں ویب سائٹس۔" : "Professional, responsive websites and digital platforms for businesses, organizations and ideas.",
    mobile: ur ? "موبائل ایپ کی تیاری" : "Mobile App Development",
    mobileDesc: ur ? "لوگوں کو خدمات اور مواقع سے جوڑنے کے لیے مفید موبائل ایپلی کیشنز۔" : "Useful mobile application experiences designed to connect people with services and opportunities.",
    exploreService: ur ? "خدمت دیکھیں" : "Explore service",
    why: ur ? "بسم اللہ نیٹ ورک کیوں؟" : "WHY BISMILLAH NETWORK",
    built: ur ? "بنیاد" : "Built on",
    purposeWord: ur ? "مقصد پر۔" : "purpose.",
    values: ur
      ? [
          ["مقصد پر مبنی", "ہم ایسی ٹیکنالوجی پر توجہ دیتے ہیں جو حقیقی مسائل حل کرے اور بامعنی فائدہ پیدا کرے۔"],
          ["لوگ پہلے", "ہمارا یقین ہے کہ ہر شخص عزت، مواقع اور اپنی صلاحیت دکھانے کا منصفانہ حق رکھتا ہے۔"],
          ["شفاف پیش رفت", "ہم اپنی صلاحیتوں اور منصوبوں کی پیش رفت واضح اور دیانت داری سے بتاتے ہیں۔"],
          ["طویل مدتی وژن", "ہم ایسا مربوط نیٹ ورک بنا رہے ہیں جہاں لوگ اور خیالات مل کر ترقی کر سکیں۔"],
        ]
      : [
          ["Purpose Driven", "We focus on technology that solves real problems and creates meaningful value."],
          ["People First", "We believe every person deserves dignity, opportunity and a fair chance to contribute."],
          ["Honest Progress", "We communicate our capabilities and project progress transparently."],
          ["Long-Term Vision", "We are building a connected network where people and ideas can grow together."],
        ],
    ourPurpose: ur ? "ہمارا مقصد" : "OUR PURPOSE",
    mission: ur ? "کوئی پیچھے نہ رہ جائے۔" : "No One Left Behind.",
    mission2: ur ? "ہر زندگی ایک موقع کی حق دار ہے۔" : "Every Life Deserves a Chance.",
    missionDesc: ur
      ? "ہم انسانی صلاحیت پر یقین رکھتے ہیں۔ ہمارا وژن ایسا منصفانہ ماحول بنانا ہے جہاں لوگ اپنی صلاحیتیں دکھا سکیں، مواقع تلاش کریں اور مل کر آگے بڑھیں۔"
      : "We believe in human potential. Our vision is to create a fair environment where people can demonstrate their abilities, find opportunities and move forward together.",
    discoverNetwork: ur ? "ہمارا نیٹ ورک دیکھیں" : "Discover Our Network",
    how: ur ? "ہم کیسے کام کرتے ہیں" : "HOW WE WORK",
    reality: ur ? "خیال سے" : "From idea to",
    reality2: ur ? "حقیقت تک۔" : "reality.",
    process: ur
      ? [["01", "سمجھنا", "ہم آپ کے خیال، مقاصد اور ضروریات کو سنتے ہیں۔"], ["02", "منصوبہ بندی", "ہم منصوبے کا دائرہ، خصوصیات اور سمت طے کرتے ہیں۔"], ["03", "تیاری", "ہم توجہ اور عملی سوچ کے ساتھ حل تیار کرتے ہیں۔"], ["04", "بہتری", "ہم جائزہ لیتے، بہتری لاتے اور طے شدہ نتیجے کی طرف کام کرتے ہیں۔"]]
      : [["01", "Understand", "We listen to your idea, goals and requirements."], ["02", "Plan", "We define the project scope, features and direction."], ["03", "Develop", "We build the solution with care and practical thinking."], ["04", "Improve", "We review, refine and work toward the agreed result."]],
    work: ur ? "ہمارا کام" : "OUR WORK",
    motion: ur ? "زیرِ تعمیر" : "Ideas in",
    motion2: ur ? "منصوبے" : "Motion",
    projects: ur ? "منصوبے دیکھیں" : "Explore projects",
    development: ur ? "تیاری جاری ہے" : "IN DEVELOPMENT",
    platform: ur ? "01 / تنظیمی پلیٹ فارم" : "01 / ORGANIZATION PLATFORM",
    inspection: ur ? "02 / انسپیکشن حل" : "02 / INSPECTION SOLUTION",
    platformDesc: ur ? "ڈیجیٹل پلیٹ فارم اور ادارے کی ویب سائٹ" : "Digital platform & company website",
    inspectionDesc: ur ? "الیکٹریکل اور مینٹیننس انسپیکشن" : "Electrical & maintenance inspection",
    disclaimer: ur ? "یہ ہمارے موجودہ زیرِ تعمیر منصوبے ہیں، مکمل شدہ کلائنٹ پراجیکٹس نہیں۔" : "These are current development projects, not presented as completed client work.",
    vision: ur ? "وژن کا حصہ بنیں" : "BE PART OF THE VISION",
    many: ur ? "ایک نیٹ ورک۔" : "One network.",
    possibilities: ur ? "بہت سے امکانات۔" : "Many possibilities.",
    networkDesc: ur
      ? "ہمارا طویل مدتی منصوبہ ممبران، شعبوں اور مقامی ٹیموں کو ایک منظم ڈیجیٹل پلیٹ فارم سے جوڑنا ہے۔ لوگ رکنیت کے لیے درخواست دے سکیں گے اور منظوری کے بعد اپنی ذمہ داریوں کے مطابق حصہ لے سکیں گے۔"
      : "Our long-term plan is to connect members, departments and local teams through a structured digital platform. People will be able to apply for membership and, after approval, participate according to their assigned responsibilities.",
    joinLearn: ur ? "شامل ہونے کا طریقہ جانیں" : "Learn how to join",
    leadership: ur ? "قیادت" : "LEADERSHIP",
    driven: ur ? "مقصد سے رہنمائی۔" : "Driven by purpose.",
    visionBuilt: ur ? "وژن کے ساتھ تعمیر۔" : "Built with vision.",
    founder: ur ? "بانی اور منیجنگ ڈائریکٹر" : "FOUNDER & MANAGING DIRECTOR",
    founderDesc: ur
      ? "ٹیکنالوجی، ٹیم ورک اور مربوط کمیونٹی کے ذریعے مواقع پیدا کرنے کے وژن کے ساتھ بسم اللہ نیٹ ورک کی تعمیر۔"
      : "Building BISMILLAH NETWORK with a vision to create opportunities through technology, teamwork and a connected community.",
    idea: ur ? "کیا آپ کے پاس کوئی خیال ہے؟" : "HAVE AN IDEA?",
    build: ur ? "آئیے مل کر کچھ" : "Let’s build something",
    meaningful: ur ? "بامقصد بناتے ہیں۔" : "meaningful together.",
    tell: ur ? "ہمیں بتائیں کہ آپ کیا بنانا چاہتے ہیں۔ آئیے پہلا قدم اٹھائیں۔" : "Tell us what you want to create. Let’s take the first step.",
    discuss: ur ? "اپنے منصوبے پر بات کریں" : "Discuss Your Project",
  };

  return (
    <main>
      <section className="home-hero">
        <div className="hero-grid" /><div className="hero-glow" />
        <div className="container hero-content">
          <p className="eyebrow"><span className="eyebrow-line" /> {text.welcome}</p>
          <h1 className="water-float">{text.hero1}<br /><span><span className="wave-word" style={{["--wave-index" as string]: 0}}>{text.hero2}</span></span></h1>
          <p className="hero-description">{text.heroDesc}</p>
          <div className="hero-actions">
            <Link href="/services" className="button button-gold">{text.explore} <span>↗</span></Link>
            <Link href="/contact" className="button button-outline">{text.conversation}</Link>
          </div>
          <div className="hero-signature"><span>ONE NETWORK</span><i /><span>ONE VISION</span></div>
        </div>
        <div className="hero-index">BN — 001 / DIGITAL INNOVATION</div>
      </section>

      <section className="intro-section section-pad">
        <div className="container intro-grid">
          <div><p className="eyebrow">{text.who}</p><h2 className="water-float">{text.purpose}<br /><span><span className="wave-word" style={{["--wave-index" as string]: 0}}>{text.purpose2}</span></span></h2></div>
          <div className="intro-copy">
            <p>{text.intro1}</p><p>{text.intro2}</p>
            <Link href="/about" className="text-link">{text.story} <span>↗</span></Link>
          </div>
        </div>
      </section>

      <section className="services-section section-pad">
        <div className="container">
          <div className="section-heading"><div><p className="eyebrow">{text.what}</p><h2>{text.services}</h2></div><Link href="/services" className="text-link">{text.viewServices} ↗</Link></div>
          <div className="service-grid">
            {[{n:"01",title:text.website,desc:text.websiteDesc},{n:"02",title:text.mobile,desc:text.mobileDesc}].map(s => <Link href="/services" className="service-card" key={s.n}><span className="card-number">{s.n}</span><div className="card-arrow">↗</div><h3>{s.title}</h3><p>{s.desc}</p><span className="card-more">{text.exploreService} <b>→</b></span></Link>)}
          </div>
        </div>
      </section>

      <section className="values-section section-pad">
        <div className="container">
          <p className="eyebrow">{text.why}</p><h2 className="content-title water-float">{text.built} <span><span className="wave-word" style={{["--wave-index" as string]: 0}}>{text.purposeWord}</span></span></h2>
          <div className="value-grid">{text.values.map(([title,desc],i)=><article key={title}><b>{String(i+1).padStart(2,"0")}</b><h3>{title}</h3><p>{desc}</p></article>)}</div>
        </div>
      </section>

      <section className="mission-section section-pad">
        <div className="mission-glow" />
        <div className="container mission-content"><p className="eyebrow">{text.ourPurpose}</p><h2 className="water-float">{text.mission}<br /><span><span className="wave-word" style={{["--wave-index" as string]: 0}}>{text.mission2}</span></span></h2><p>{text.missionDesc}</p><Link href="/network" className="button button-outline">{text.discoverNetwork} ↗</Link></div>
      </section>

      <section className="section-pad">
        <div className="container">
          <div className="section-heading"><div><p className="eyebrow">{text.how}</p><h2 className="water-float">{text.reality} <span><span className="wave-word" style={{["--wave-index" as string]: 0}}>{text.reality2}</span></span></h2></div></div>
          <div className="value-grid">{text.process.map(([n,title,desc])=><article key={n}><b>{n}</b><h3>{title}</h3><p>{desc}</p></article>)}</div>
        </div>
      </section>

      <section className="project-preview section-pad">
        <div className="container">
          <div className="section-heading"><div><p className="eyebrow">{text.work}</p><h2 className="water-float">{text.motion} <span><span className="wave-word" style={{["--wave-index" as string]: 0}}>{text.motion2}</span></span></h2></div><Link href="/projects" className="text-link">{text.projects} ↗</Link></div>
          <div className="project-grid">
            <Link href="/projects" className="project-card project-one bn-home-card"><img className="project-card-image" src="/images/digital-platforms.jpg" alt="BISMILLAH NETWORK digital platform" /><span className="project-tag">{text.development}</span><div><p>{text.platform}</p><h3>BISMILLAH NETWORK</h3><span>{text.platformDesc} ↗</span></div></Link>
            <Link href="/emi-services-786" className="project-card project-two emi-home-card">
              <img className="project-card-image" src="/images/emi-services-786-dashboard.jpg" alt="EMI Services 786 app dashboard" />
              <span className="project-tag">{text.development}</span>
              <div><p>{text.inspection}</p><h3>EMI SERVICES 786</h3><span>{text.inspectionDesc} ↗</span></div>
            </Link>
          </div>
          <p className="portfolio-disclaimer">{text.disclaimer}</p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container content-grid">
          <div><p className="eyebrow">{text.vision}</p><h2 className="content-title water-float">{text.many}<br /><span><span className="wave-word" style={{["--wave-index" as string]: 0}}>{text.possibilities}</span></span></h2></div>
          <div className="prose"><p>{text.networkDesc}</p><Link href="/join" className="text-link">{text.joinLearn} ↗</Link></div>
        </div>
      </section>

      <section className="founder-section section-pad">
        <div className="container founder-inner">
          <div><p className="eyebrow">{text.leadership}</p><h2 className="water-float">{text.driven}<br /><span><span className="wave-word" style={{["--wave-index" as string]: 0}}>{text.visionBuilt}</span></span></h2></div>
          <div className="founder-card"><div className="founder-monogram">MWT</div><p className="eyebrow">{text.founder}</p><h3>Muhammad Waseem Tariq</h3><p>{text.founderDesc}</p></div>
        </div>
      </section>

      <section className="cta-section"><div className="container cta-inner"><p className="eyebrow">{text.idea}</p><h2 className="water-float">{text.build}<br /><span><span className="wave-word" style={{["--wave-index" as string]: 0}}>{text.meaningful}</span></span></h2><p className="hero-description" style={{marginInline:"auto"}}>{text.tell}</p><Link href="/contact" className="button button-gold">{text.discuss} ↗</Link></div></section>
    </main>
  );
}
