"use client";

import PageHero from "@/components/page-hero";
import ContactForm from "@/components/contact-form";
import { useLanguage } from "@/components/language-provider";

export default function ContactContent() {
  const { language } = useLanguage();
  const ur = language === "ur";

  return (
    <main>
      <PageHero
        eyebrow={ur ? "آئیے رابطہ کرتے ہیں" : "LET’S CONNECT"}
        title={ur ? "بات چیت کا آغاز کریں۔" : "Start a Conversation."}
        description={ur
          ? "اپنے آئیڈیا، مقاصد اور اس ڈیجیٹل تجربے کے بارے میں بتائیں جسے آپ بنانا چاہتے ہیں۔"
          : "Tell us about your idea, your goals and the digital experience you want to create."}
      />

      <section className="section-pad">
        <div className="container contact-layout">
          <div className="contact-copy">
            <p className="eyebrow">{ur ? "آپ کا اگلا قدم" : "YOUR NEXT STEP"}</p>
            <h2 className="content-title">
              {ur ? <>ہر بڑے پروجیکٹ کا آغاز<br /><span>ایک خیال سے ہوتا ہے۔</span></> : <>Every great project<br /><span>starts with an idea.</span></>}
            </h2>
            <p>
              {ur
                ? "ویب سائٹ ڈیولپمنٹ، موبائل ایپلی کیشنز، تعاون یا ممبرشپ کی معلومات کے لیے BISMILLAH NETWORK سے رابطہ کریں۔"
                : "Contact BISMILLAH NETWORK to discuss website development, mobile applications, collaboration or membership information."}
            </p>

            <div className="contact-detail">
              <span>01</span>
              <div>
                <b>{ur ? "فون / واٹس ایپ" : "Phone / WhatsApp"}</b>
                <small>
                  <a href="tel:+923146083782">0314 6083782</a>
                  <a className="contact-action-link" href="https://wa.me/923146083782" target="_blank" rel="noopener noreferrer">WhatsApp ↗</a>
                </small>
              </div>
            </div>

            <div className="contact-detail">
              <span>02</span>
              <div>
                <b>{ur ? "ای میل" : "Email"}</b>
                <small>
                  <a href="mailto:waseemtariq068@gmail.com">waseemtariq068@gmail.com</a>
                </small>
              </div>
            </div>

            <div className="contact-detail">
              <span>03</span>
              <div>
                <b>{ur ? "ویب سائٹ ڈیولپمنٹ" : "Website Development"}</b>
                <small>{ur ? "کاروباری ویب سائٹس اور ڈیجیٹل پلیٹ فارمز" : "Business websites and digital platforms"}</small>
              </div>
            </div>

            <div className="contact-detail">
              <span>04</span>
              <div>
                <b>{ur ? "موبائل ایپ ڈیولپمنٹ" : "Mobile App Development"}</b>
                <small>{ur ? "موبائل ایپلی کیشنز کے تصورات اور حل" : "Mobile application concepts and solutions"}</small>
              </div>
            </div>

            <div className="contact-detail">
              <span>05</span>
              <div>
                <b>{ur ? "فاؤنڈر اور مینیجنگ ڈائریکٹر" : "Founder & Managing Director"}</b>
                <small>Muhammad Waseem Tariq</small>
              </div>
            </div>
          </div>

          <div><ContactForm /></div>
        </div>
      </section>
    </main>
  );
}
