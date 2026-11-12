"use client";

import Link from "next/link";
import PageHero from "@/components/page-hero";
import { useLanguage } from "@/components/language-provider";

const steps = [
  ["01", "Explore", "Understand our mission, values, organizational structure and participation principles.", "جانیں", "ہمارے مشن، اقدار، تنظیمی ڈھانچے اور شرکت کے اصولوں کو سمجھیں۔"],
  ["02", "Apply", "Submit your interest and relevant skills when the official application system becomes available.", "درخواست دیں", "سرکاری درخواست کا نظام دستیاب ہونے پر اپنی دلچسپی اور متعلقہ صلاحیتوں کی تفصیل جمع کروائیں۔"],
  ["03", "Review", "The authorized administration will review applications and verify relevant information.", "جائزہ", "مجاز انتظامیہ درخواستوں کا جائزہ لے گی اور متعلقہ معلومات کی تصدیق کرے گی۔"],
  ["04", "Decision", "Membership is confirmed only after approval and official communication.", "فیصلہ", "ممبرشپ کی تصدیق منظوری اور باضابطہ اطلاع کے بعد ہی ہوگی۔"],
  ["05", "Participate", "Approved members may participate in suitable activities according to assigned responsibilities.", "شرکت کریں", "منظور شدہ ممبران اپنی مقررہ ذمہ داریوں کے مطابق مناسب سرگرمیوں میں حصہ لے سکیں گے۔"]
];

export default function JoinContent() {
  const { language } = useLanguage();
  const ur = language === "ur";

  return (
    <main>
      <PageHero
        eyebrow={ur ? "آپ کا سفر یہاں سے شروع ہوتا ہے" : "YOUR JOURNEY STARTS HERE"}
        title={ur ? "آپ کی صلاحیت موقع کی مستحق ہے۔" : "Your Potential Deserves a Chance."}
        description={ur
          ? "ایسے وژن کا حصہ بنیں جس کی بنیاد مواقع، عزت، ٹیم ورک اور بامقصد تعاون پر ہو۔"
          : "Become part of a vision built around opportunity, dignity, teamwork and meaningful contribution."}
      />

      <section className="section-pad">
        <div className="container content-grid">
          <div>
            <p className="eyebrow">{ur ? "کون حصہ لے سکتا ہے؟" : "WHO CAN PARTICIPATE?"}</p>
            <h2 className="content-title">
              {ur ? <>صلاحیت اہم ہے۔<br /><span>کردار بھی اہم ہے۔</span></> : <>Skills matter.<br /><span>Character matters.</span></>}
            </h2>
          </div>
          <div className="prose">
            <p>
              {ur
                ? "ہم ایسے افراد کا خیرمقدم کرتے ہیں جو ایماندارانہ کام، باہمی احترام، سیکھنے اور ذمہ دارانہ ٹیم ورک پر یقین رکھتے ہیں۔"
                : "We welcome people who believe in honest work, mutual respect, learning and responsible teamwork."}
            </p>
            <p>
              {ur
                ? "ٹیکنالوجی، انتظامیہ، رابطہ کاری، فنانس، پروجیکٹ مینجمنٹ یا کسی دوسرے مفید شعبے میں آپ کی صلاحیتیں ہمارے مستقبل کے نیٹ ورک کا حصہ بن سکتی ہیں۔"
                : "Whether your strengths are in technology, administration, communication, finance, project coordination or another useful field, your abilities may have a place in our future network."}
            </p>
            <p>
              {ur
                ? "شرکت کا انحصار ادارے کی ضروریات، موزونیت، دستیابی اور متعلقہ منظوری کے طریقہ کار پر ہوگا۔"
                : "Participation depends on organizational needs, suitability, availability and the relevant approval process."}
            </p>
          </div>
        </div>
      </section>

      <section className="values-section section-pad">
        <div className="container">
          <p className="eyebrow">{ur ? "ممبرشپ کا طریقہ" : "HOW MEMBERSHIP WILL WORK"}</p>
          <h2 className="content-title">
            {ur ? <>شرکت کا واضح <span>راستہ</span></> : <>A Clear Path to <span>Participation</span></>}
          </h2>
          <div className="join-steps">
            {steps.map(([number, title, description, urTitle, urDescription]) => (
              <Link
                href={`/contact?step=${encodeURIComponent(title)}`}
                className={`join-step join-step-clickable join-step-${number}`}
                key={number}
              >
                <span>{number}</span>
                <div>
                  <h3>{ur ? urTitle : title}</h3>
                  <p>{ur ? urDescription : description}</p>
                  <small>{ur ? "مزید جانیں ↗" : "Learn More ↗"}</small>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mission-section section-pad">
        <div className="container mission-content">
          <p className="eyebrow">{ur ? "اہم معلومات" : "IMPORTANT INFORMATION"}</p>
          <h2>
            {ur ? <>واضح توقعات۔<br /><span>منصفانہ شرکت۔</span></> : <>Honest expectations.<br /><span>Fair participation.</span></>}
          </h2>
          <p>
            {ur
              ? "ممبرشپ سے ملازمت، ادائیگی، آمدنی، ملکیت یا منافع کی خودکار ضمانت نہیں ملتی۔ کسی بھی معاوضے والے کام یا مالی انتظام کے لیے واضح شرائط اور منظور شدہ تحریری پالیسی ضروری ہوگی۔"
              : "Membership does not automatically guarantee employment, payment, income, ownership or profit. Any paid assignment or financial arrangement will require clear terms and an approved written policy."}
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container join-panel">
          <p className="eyebrow">{ur ? "ممبرشپ کی درخواست" : "MEMBERSHIP APPLICATION"}</p>
          <h2>
            {ur ? <>درخواستیں ابھی<br /><span>شروع نہیں ہوئیں۔</span></> : <>Applications are not<br /><span>open yet.</span></>}
          </h2>
          <p>
            {ur
              ? "محفوظ رجسٹریشن اور درخواست کا نظام اس وقت تیاری کے مراحل میں ہے۔ تیار ہونے پر سرکاری طریقہ کار کا اعلان کیا جائے گا۔ براہِ کرم غیر سرکاری ذرائع سے پاس ورڈ، شناختی دستاویزات یا حساس ذاتی معلومات نہ بھیجیں۔"
              : "The secure registration and application system is currently under development. We will announce the official process when it is ready. Please do not send passwords, identity documents or sensitive personal information through unofficial channels."}
          </p>
          <span className="portal-status">
            {ur ? "رجسٹریشن سسٹم — تیاری جاری ہے" : "REGISTRATION SYSTEM — IN DEVELOPMENT"}
          </span>
          <div className="join-actions">
            <Link href="/app" className="button button-gold">
              {ur ? "ممبر پورٹل دیکھیں" : "View Member Portal"}
            </Link>
            <Link href="/contact" className="text-link">
              {ur ? "رابطہ کریں ↗" : "Contact Us ↗"}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
