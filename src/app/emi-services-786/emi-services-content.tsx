"use client";

import PageHero from "@/components/page-hero";
import { useLanguage } from "@/components/language-provider";

const appUrl = "https://waseemtariq786.github.io/-emi-services-786/";

export default function EmiServicesPage() {
  const { language } = useLanguage();
  const ur = language === "ur";

  return (
    <main>
      <PageHero
        eyebrow={ur ? "ہمارا ڈیجیٹل پروجیکٹ" : "OUR DIGITAL PROJECT"}
        title={ur ? "EMI Services 786" : "EMI Services 786"}
        description={ur
          ? "فیکٹریوں اور گھروں کے الیکٹریکل انسپیکشن اور مینٹیننس ریکارڈ کے لیے موبائل ایپ۔"
          : "A mobile app for electrical inspection and maintenance records in factories and homes."}
      />
      <section className="section-pad">
        <div className="container">
          <div className="roadmap-card">
            <p className="eyebrow">{ur ? "ایپ کی سہولیات" : "APP FEATURES"}</p>
            <h2 className="content-title">
              {ur ? "انسپیکشن کا آسان نظام" : "A simpler inspection system"}
            </h2>
            <ul>
              <li>{ur ? "فیکٹری اور کسٹمر کا ریکارڈ" : "Factory and customer records"}</li>
              <li>{ur ? "کمروں اور آئٹمز کی فہرست" : "Rooms and item inventory"}</li>
              <li>{ur ? "انسپیکشن رپورٹس تیار کرنا" : "Inspection report generation"}</li>
              <li>{ur ? "ڈیٹا بیک اپ اور بحالی" : "Data backup and restoration"}</li>
            </ul>
            <p className="form-note">
              {ur
                ? "یہ ویب ایپ ورژن ہے۔ انسٹال کرنے کے لیے ایپ کھولیں، پھر براؤزر کے مینو میں Install App یا Add to Home Screen منتخب کریں۔ APK ورژن ابھی تیار نہیں۔"
                : "This is the web app version. Open the app, then use your browser menu and select Install App or Add to Home Screen. The APK version is not ready yet."}
            </p>
            <a className="button button-gold" href={appUrl} target="_blank" rel="noreferrer">
              {ur ? "ایپ کھولیں / انسٹال کریں ↗" : "Open / Install App ↗"}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
