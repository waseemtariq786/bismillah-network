"use client";

import Link from "next/link";
import PageHero from "@/components/page-hero";
import { useLanguage } from "@/components/language-provider";

const projects = [
  {
    number: "01",
    image: "digital-platforms.jpg",
    link: "/projects",
    name: "BISMILLAH NETWORK",
    category: "Organizational Digital Platform",
    urCategory: "ادارے کا ڈیجیٹل پلیٹ فارم",
    description: "A long-term initiative to connect people, departments, teams and opportunities through an organized digital network.",
    urDescription: "لوگوں، محکموں، ٹیموں اور مواقع کو ایک منظم ڈیجیٹل نیٹ ورک کے ذریعے آپس میں جوڑنے کا طویل مدتی منصوبہ۔",
    features: ["Organizational structure", "Membership management concept", "Department coordination", "Project management"],
    urFeatures: ["ادارے کا تنظیمی ڈھانچہ", "ممبرشپ مینجمنٹ کا تصور", "محکموں کے درمیان رابطہ", "پروجیکٹ مینجمنٹ"],
    status: "In Development",
    urStatus: "تیاری جاری ہے"
  },
  {
    number: "02",
    image: "emi-services-786-dashboard.jpg",
    link: "/emi-services-786",
    name: "EMI Services 786",
    category: "Electrical Inspection & Maintenance",
    urCategory: "الیکٹریکل انسپیکشن اور مینٹیننس",
    description: "A digital inspection system concept for recording electrical and maintenance inspections in factories and homes.",
    urDescription: "فیکٹریوں اور گھروں میں الیکٹریکل اور مینٹیننس انسپیکشن کا ریکارڈ محفوظ کرنے کے لیے ڈیجیٹل سسٹم کا تصور۔",
    features: ["Factory and room records", "Inspection items", "Report generation concept", "Data backup"],
    urFeatures: ["فیکٹری اور کمروں کا ریکارڈ", "انسپیکشن آئٹمز", "رپورٹ بنانے کا نظام", "ڈیٹا بیک اپ"],
    status: "In Development",
    urStatus: "تیاری جاری ہے"
  },
  {
    number: "03",
    image: "website-development.jpg",
    link: "/services",
    name: "Business Websites & Android Apps",
    category: "Digital Development",
    urCategory: "ڈیجیٹل ڈیولپمنٹ",
    description: "Our service direction focuses on building responsive websites and practical Android applications according to project requirements.",
    urDescription: "ہماری سروس کا مقصد پروجیکٹ کی ضروریات کے مطابق موبائل فرینڈلی ویب سائٹس اور عملی اینڈرائیڈ ایپلی کیشنز بنانا ہے۔",
    features: ["Website design and development", "Mobile-first interfaces", "Android app concepts", "Custom digital solutions"],
    urFeatures: ["ویب سائٹ ڈیزائن اور ڈیولپمنٹ", "موبائل فرینڈلی انٹرفیس", "اینڈرائیڈ ایپ کے تصورات", "ضرورت کے مطابق ڈیجیٹل حل"],
    status: "Service Focus",
    urStatus: "ہماری بنیادی سروس"
  }
];

export default function PortfolioContent() {
  const { language } = useLanguage();
  const ur = language === "ur";

  return (
    <main>
      <PageHero
        eyebrow={ur ? "ہمارے کام اور منصوبے" : "OUR WORK & INITIATIVES"}
        title={ur ? "خیالات عملی شکل اختیار کر رہے ہیں۔" : "Ideas Taking Shape."}
        description={ur
          ? "ہمارے زیرِ تکمیل ڈیجیٹل منصوبوں اور ٹیکنالوجی کے کام کی سمت کو دیکھیں۔"
          : "Explore the digital initiatives we are developing and the direction of our technology work."}
      />

      <section className="section-pad">
        <div className="container">
          <p className="eyebrow">{ur ? "منتخب منصوبے" : "SELECTED INITIATIVES"}</p>
          <h2 className="content-title">
            {ur ? <>ہمارے پروجیکٹس کا <span>پورٹ فولیو</span></> : <>Our Project <span>Portfolio</span></>}
          </h2>
          <p className="section-description">
            {ur
              ? "ہم حقیقی پیش رفت پر یقین رکھتے ہیں۔ یہاں ہر پروجیکٹ کی موجودہ صورتحال واضح کی گئی ہے؛ زیرِ تکمیل کام کو مکمل کام ظاہر نہیں کیا جاتا۔"
              : "We believe in honest progress. Projects shown here are clearly identified by their current status; development work is not presented as completed work."}
          </p>

          <div className="portfolio-grid">
            {projects.map((project) => (
              <Link href={project.link} className="portfolio-card portfolio-card-clickable" key={project.number}>
                <div className="portfolio-card-image">
                  <img src={`/images/${project.image}`} alt="" />
                </div>
                <div className="portfolio-card-top">
                  <span>{project.number}</span>
                  <small>{ur ? project.urStatus : project.status}</small>
                </div>
                <p className="eyebrow">{ur ? project.urCategory : project.category}</p>
                <h3>{project.name}</h3>
                <p>{ur ? project.urDescription : project.description}</p>
                <ul>
                  {(ur ? project.urFeatures : project.features).map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mission-section section-pad">
        <div className="container mission-content">
          <p className="eyebrow">{ur ? "مقصد کے ساتھ تعمیر" : "BUILT WITH PURPOSE"}</p>
          <h2>
            {ur ? <>وعدوں سے زیادہ<br /><span>عملی پیش رفت۔</span></> : <>Progress over<br /><span>promises.</span></>}
          </h2>
          <p>
            {ur
              ? "ہم حقیقی کام دکھانے، واضح انداز میں بات کرنے اور عملی فائدہ دینے والے حل تیار کرنے کی کوشش کرتے ہیں۔"
              : "We aim to show genuine work, communicate clearly and build solutions that provide practical value."}
          </p>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-inner">
          <p className="eyebrow">{ur ? "آپ کا آئیڈیا اگلا ہو سکتا ہے" : "YOUR IDEA COULD BE NEXT"}</p>
          <h2>
            {ur ? <>آئیے مل کر<br /><span>بامقصد کام کریں۔</span></> : <>Let&apos;s build<br /><span>something meaningful.</span></>}
          </h2>
          <Link href="/contact" className="button button-gold">
            {ur ? "پروجیکٹ پر بات کریں ↗" : "Discuss a Project ↗"}
          </Link>
        </div>
      </section>
    </main>
  );
}
