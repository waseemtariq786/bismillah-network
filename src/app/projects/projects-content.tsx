"use client";

import Link from "next/link";
import PageHero from "@/components/page-hero";
import { useLanguage } from "@/components/language-provider";

const projects = [
  {
    number: "01",
    image: "digital-platforms.jpg",
    link: "/network",
    name: "BISMILLAH NETWORK",
    type: "Main Organizational Platform",
    urType: "مرکزی تنظیمی پلیٹ فارم",
    status: "In Development",
    urStatus: "تیاری جاری ہے",
    description: "A connected platform for membership, administration, departments, teams and project coordination.",
    urDescription: "ممبرشپ، انتظامیہ، محکموں، ٹیموں اور پروجیکٹس کے رابطے اور انتظام کے لیے ایک مربوط پلیٹ فارم۔",
    stages: [
      "Website and public information pages",
      "Secure member registration and approval",
      "Founder and administration control",
      "Departments, roles and reporting hierarchy",
      "Project assignments and progress tracking",
      "Accounts, notifications and reports"
    ],
    urStages: [
      "ویب سائٹ اور عوامی معلوماتی صفحات",
      "محفوظ ممبر رجسٹریشن اور منظوری",
      "فاؤنڈر اور انتظامیہ کا کنٹرول",
      "محکمے، عہدے اور رپورٹنگ کا نظام",
      "پروجیکٹ کی ذمہ داریاں اور پیش رفت کی نگرانی",
      "اکاؤنٹس، نوٹیفکیشنز اور رپورٹس"
    ]
  },
  {
    number: "02",
    image: "mobile-app-development.jpg",
    link: "/app",
    name: "BISMILLAH NETWORK Android App",
    type: "Mobile Application",
    urType: "موبائل ایپلی کیشن",
    status: "Planned",
    urStatus: "منصوبہ بندی میں",
    description: "A mobile access point for members and authorized administrators, connected to the same organizational system.",
    urDescription: "ممبرز اور مجاز منتظمین کے لیے موبائل ایپ، جو اسی تنظیمی نظام سے منسلک ہوگی۔",
    stages: [
      "Mobile-friendly user experience",
      "Secure account access",
      "Member dashboard",
      "Role-based features",
      "Notifications and updates"
    ],
    urStages: [
      "موبائل کے لیے آسان استعمال",
      "محفوظ اکاؤنٹ تک رسائی",
      "ممبر ڈیش بورڈ",
      "عہدے کے مطابق سہولیات",
      "نوٹیفکیشنز اور اپ ڈیٹس"
    ]
  },
  {
    number: "03",
    image: "emi-services-786-dashboard.jpg",
    link: "/emi-services-786",
    name: "EMI Services 786",
    type: "Inspection & Maintenance System",
    urType: "انسپیکشن اور مینٹیننس سسٹم",
    status: "In Development",
    urStatus: "تیاری جاری ہے",
    description: "An inspection and reporting solution for electrical and maintenance records in factories and homes.",
    urDescription: "فیکٹریوں اور گھروں کے الیکٹریکل اور مینٹیننس ریکارڈ کے لیے انسپیکشن اور رپورٹنگ کا حل۔",
    stages: [
      "Factory and customer records",
      "Rooms and inspection inventory",
      "Inspection observations",
      "Report generation",
      "Data backup and restoration"
    ],
    urStages: [
      "فیکٹری اور کسٹمر کا ریکارڈ",
      "کمروں اور انسپیکشن آئٹمز کی فہرست",
      "انسپیکشن کے مشاہدات",
      "رپورٹ تیار کرنا",
      "ڈیٹا بیک اپ اور بحالی"
    ]
  }
];

export default function ProjectsContent() {
  const { language } = useLanguage();
  const ur = language === "ur";

  return (
    <main>
      <PageHero
        eyebrow={ur ? "ہمارے ڈیولپمنٹ منصوبے" : "OUR DEVELOPMENT ROADMAP"}
        title={ur ? "مرحلہ وار تعمیر۔" : "Building Step by Step."}
        description={ur
          ? "ہمارے پروجیکٹس واضح سمت، عملی ترجیحات اور حقیقی پیش رفت کے ساتھ تیار کیے جا رہے ہیں۔"
          : "Our projects are being developed with a clear direction, practical priorities and honest progress updates."}
      />

      <section className="section-pad">
        <div className="container">
          <p className="eyebrow">{ur ? "موجودہ اور مستقبل کے منصوبے" : "CURRENT & FUTURE INITIATIVES"}</p>
          <h2 className="content-title">
            {ur ? <>پروجیکٹ <span>روڈ میپ</span></> : <>Project <span>Roadmap</span></>}
          </h2>

          <div className="roadmap-list">
            {projects.map((project) => (
              <Link href={project.link} className={`roadmap-card roadmap-card-clickable ${project.number === "03" ? "emi-project-card" : ""}`} key={project.number}>
                <div className="roadmap-image roadmap-background-image">
                  <img src={`/images/${project.image}`} alt="" />
                </div>
                <div className="roadmap-number">{project.number}</div>
                <div className="roadmap-content">
                  <div className="roadmap-heading">
                    <div>
                      <p className="eyebrow">{ur ? project.urType : project.type}</p>
                      <h3>{project.name}</h3>
                    </div>
                    <span className="roadmap-status">{ur ? project.urStatus : project.status}</span>
                  </div>
                  <p>{ur ? project.urDescription : project.description}</p>
                  <h4>{ur ? "منصوبہ بندی کے ڈیولپمنٹ مراحل" : "Planned Development Stages"}</h4>
                  <ol>
                    {(ur ? project.urStages : project.stages).map((stage, index) => (
                      <li key={stage}>
                        <span>{String(index + 1).padStart(2, "0")}</span>
                        {stage}
                      </li>
                    ))}
                  </ol>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mission-section section-pad">
        <div className="container mission-content">
          <p className="eyebrow">{ur ? "ہمارا ڈیولپمنٹ اصول" : "OUR DEVELOPMENT PRINCIPLE"}</p>
          <h2>
            {ur ? <>سوچ سمجھ کر تعمیر۔<br /><span>ذمہ داری سے ترقی۔</span></> : <>Build carefully.<br /><span>Grow responsibly.</span></>}
          </h2>
          <p>
            {ur
              ? "اگلے مرحلے کی طرف بڑھنے سے پہلے ہر مرحلے کو تیار اور جانچا جائے گا۔ منصوبہ بندی میں شامل فیچرز کو فعال سروس ظاہر نہیں کیا جاتا۔"
              : "Each stage will be developed and reviewed before moving towards the next. Planned features are not represented as active services."}
          </p>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-inner">
          <p className="eyebrow">{ur ? "اس سفر سے جڑے رہیں" : "FOLLOW THE JOURNEY"}</p>
          <h2>
            {ur ? <>بڑے وژن کا<br /><span>حصہ بنیں۔</span></> : <>Be part of<br /><span>the bigger vision.</span></>}
          </h2>
          <Link href="/join" className="button button-gold">
            {ur ? "شرکت کے طریقے دیکھیں ↗" : "Explore Participation ↗"}
          </Link>
        </div>
      </section>
    </main>
  );
}
