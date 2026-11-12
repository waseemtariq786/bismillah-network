"use client";

import Link from "next/link";
import PageHero from "@/components/page-hero";
import { useLanguage } from "@/components/language-provider";

const services = [
  {
    number: "01",
    image: "website-development.jpg",
    title: "Website Development",
    urTitle: "ویب سائٹ ڈیولپمنٹ",
    description: "Professional, responsive websites designed to present businesses, services and organizations online.",
    urDescription: "کاروبار، خدمات اور اداروں کو آن لائن پیش کرنے کے لیے پروفیشنل اور موبائل فرینڈلی ویب سائٹس۔",
    items: ["Business websites", "Company and organization websites", "Landing pages", "Responsive mobile-friendly design"],
    urItems: ["کاروباری ویب سائٹس", "کمپنی اور اداروں کی ویب سائٹس", "لینڈنگ پیجز", "موبائل فرینڈلی ڈیزائن"],
    status: "Primary Service",
    urStatus: "بنیادی سروس"
  },
  {
    number: "02",
    image: "mobile-app-development.jpg",
    title: "Mobile App Development",
    urTitle: "موبائل ایپ ڈیولپمنٹ",
    description: "Android application development focused on useful features, simple experiences and practical solutions.",
    urDescription: "مفید فیچرز، آسان استعمال اور عملی ضروریات پر مبنی اینڈرائیڈ ایپلی کیشنز کی تیاری۔",
    items: ["Android applications", "Business and service apps", "Member and management platforms", "Custom application concepts"],
    urItems: ["اینڈرائیڈ ایپلی کیشنز", "کاروباری اور سروس ایپس", "ممبر اور مینجمنٹ پلیٹ فارمز", "ضرورت کے مطابق ایپ کے آئیڈیاز"],
    status: "Primary Service",
    urStatus: "بنیادی سروس"
  },
  {
    number: "03",
    image: "digital-platforms.jpg",
    title: "Digital Platforms",
    urTitle: "ڈیجیٹل پلیٹ فارمز",
    description: "Planning connected digital systems that can help organizations manage people, information and workflows.",
    urDescription: "ایسے مربوط ڈیجیٹل سسٹمز کی منصوبہ بندی جو اداروں کو افراد، معلومات اور کام کے مراحل منظم کرنے میں مدد دیں۔",
    items: ["Membership systems", "Admin dashboards", "Department and team management", "Project and progress tracking"],
    urItems: ["ممبرشپ سسٹمز", "ایڈمن ڈیش بورڈز", "محکموں اور ٹیموں کا انتظام", "پروجیکٹ اور کارکردگی کی نگرانی"],
    status: "In Development",
    urStatus: "تیاری جاری ہے"
  },
  {
    number: "04",
    image: "business-technology.jpg",
    title: "Business Technology Solutions",
    urTitle: "کاروباری ٹیکنالوجی حل",
    description: "Exploring practical technology solutions to improve how businesses organize and manage their work.",
    urDescription: "کاروبار کے کام کو بہتر انداز میں منظم کرنے کے لیے عملی ٹیکنالوجی حل تلاش کرنا۔",
    items: ["Digital workflow planning", "Record management concepts", "Custom system requirements", "Technology consultation"],
    urItems: ["ڈیجیٹل ورک فلو کی منصوبہ بندی", "ریکارڈ مینجمنٹ کے تصورات", "ضرورت کے مطابق سسٹم", "ٹیکنالوجی سے متعلق مشاورت"],
    status: "Planned",
    urStatus: "منصوبہ بندی میں"
  }
];

export default function ServicesContent() {
  const { language } = useLanguage();
  const ur = language === "ur";

  return (
    <main>
      <PageHero
        eyebrow={ur ? "ہم کیا فراہم کرنا چاہتے ہیں" : "WHAT WE AIM TO DELIVER"}
        title={ur ? "ٹیکنالوجی جو خیالات کو آگے بڑھائے۔" : "Technology That Moves Ideas Forward."}
        description={ur
          ? "ہم عملی ڈیجیٹل حل پر توجہ دیتے ہیں جو کاروباروں، افراد اور اداروں کو اپنی آن لائن شناخت بنانے اور بہتر انداز میں کام کرنے میں مدد دیں۔"
          : "We focus on practical digital solutions that help businesses, individuals and organizations build their presence and work more effectively."}
      />

      <section className="section-pad">
        <div className="container">
          <p className="eyebrow">{ur ? "ہماری خدمات" : "OUR SERVICES"}</p>
          <h2 className="content-title">
            {ur ? <>ڈیجیٹل <span>حل کی تعمیر</span></> : <>Building Digital <span>Solutions</span></>}
          </h2>
          <p className="section-description">
            {ur
              ? "ہماری موجودہ توجہ ویب سائٹ اور موبائل ایپلی کیشن ڈیولپمنٹ پر ہے۔ دیگر پلیٹ فارمز کی صلاحیتوں پر مرحلہ وار منصوبہ بندی اور کام جاری ہے۔"
              : "Our current focus is website and mobile application development. Other platform capabilities are being planned and developed in stages."}
          </p>

          <div className="service-grid">
            {services.map((service) => (
              <Link href={`/contact?service=${encodeURIComponent(service.title)}`} className="service-card service-card-clickable" key={service.number}>
                <div className="service-card-image">
                  <img src={`/images/${service.image}`} alt="" />
                </div>
                <div className="service-card-top">
                  <span>{service.number}</span>
                  <small>{ur ? service.urStatus : service.status}</small>
                </div>
                <h3>{ur ? service.urTitle : service.title}</h3>
                <p>{ur ? service.urDescription : service.description}</p>
                <ul>
                  {(ur ? service.urItems : service.items).map((item) => <li key={item}>{item}</li>)}
                </ul>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mission-section section-pad">
        <div className="container mission-content">
          <p className="eyebrow">{ur ? "ہمارا طریقۂ کار" : "OUR APPROACH"}</p>
          <h2>
            {ur ? <>سمجھیں۔ منصوبہ بنائیں۔<br /><span>تیار کریں۔ بہتر بنائیں۔</span></> : <>Understand. Plan.<br /><span>Build. Improve.</span></>}
          </h2>
          <p>
            {ur
              ? "ہر پروجیکٹ کا آغاز ضرورت کو سمجھنے سے ہوتا ہے۔ ہمارا مقصد سوچ سمجھ کر منصوبہ بندی، ذمہ داری سے ڈیولپمنٹ اور رائے کی بنیاد پر بہتری لانا ہے۔"
              : "Every project begins with understanding the requirement. We aim to plan carefully, develop responsibly and improve through feedback."}
          </p>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-inner">
          <p className="eyebrow">{ur ? "کیا آپ کے ذہن میں کوئی پروجیکٹ ہے؟" : "HAVE A PROJECT IN MIND?"}</p>
          <h2>{ur ? <>آئیے آپ کے <br /><span>آئیڈیا پر بات کریں۔</span></> : <>Let's discuss<br /><span>your idea.</span></>}</h2>
          <Link href="/contact" className="button button-gold">
            {ur ? "BISMILLAH NETWORK سے رابطہ کریں ↗" : "Contact BISMILLAH NETWORK ↗"}
          </Link>
        </div>
      </section>
    </main>
  );
}
