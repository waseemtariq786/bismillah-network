"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useLanguage } from "./language-provider";

export default function ContactForm() {
  const { language } = useLanguage();
  const ur = language === "ur";
  const searchParams = useSearchParams();

  useEffect(() => {
    const keys = ["service", "department", "step", "module", "opportunity", "participation"];
    const details = keys
      .map((key) => {
        const value = searchParams.get(key);
        return value ? `${key}: ${value}` : "";
      })
      .filter(Boolean);

    if (details.length) {
      const selected = searchParams.get("service");
      if (selected === "Website Development" || selected === "Mobile App Development") {
        setService(selected);
      } else {
        setService("Other Project Discussion");
      }
      setMessage(details.join("\\n"));
    }
  }, [searchParams]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("Website Development");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const inquiry = `BISMILLAH NETWORK — Project Inquiry\nName: ${name}\nEmail: ${email}\nService: ${service}\nMessage: ${message}`;

    try {
      if (navigator.share) {
        await navigator.share({
          title: "BISMILLAH NETWORK — Project Inquiry",
          text: inquiry,
        });
        setStatus(ur ? "آپ کی درخواست شیئر کر دی گئی ہے۔" : "Your inquiry has been shared.");
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(inquiry);
        setStatus(
          ur
            ? "درخواست کاپی ہو گئی ہے۔ اب اسے ای میل یا واٹس ایپ پر شیئر کر سکتے ہیں۔"
            : "Inquiry copied. You can now share it by email or WhatsApp."
        );
      } else {
        setStatus(
          ur
            ? "براہِ کرم اپنی درخواست دستی طور پر کاپی کریں: " + inquiry
            : "Please copy your inquiry manually: " + inquiry
        );
      }
    } catch {
      setStatus(
        ur
          ? "شیئرنگ منسوخ ہو گئی۔ آپ کی معلومات فارم میں موجود ہیں۔"
          : "Sharing was cancelled. Your details are still in the form."
      );
    }
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <label>
        {ur ? "آپ کا نام" : "Your Name"}
        <input
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={ur ? "اپنا نام درج کریں" : "Enter your name"}
        />
      </label>

      <label>
        {ur ? "ای میل ایڈریس" : "Email Address"}
        <input
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
        />
      </label>

      <label>
        {ur ? "آپ کس سروس میں دلچسپی رکھتے ہیں؟" : "Service Interested In"}
        <select value={service} onChange={(e) => setService(e.target.value)}>
          <option value="Website Development">
            {ur ? "ویب سائٹ ڈیولپمنٹ" : "Website Development"}
          </option>
          <option value="Mobile App Development">
            {ur ? "موبائل ایپ ڈیولپمنٹ" : "Mobile App Development"}
          </option>
          <option value="Digital Platforms">{ur ? "ڈیجیٹل پلیٹ فارمز" : "Digital Platforms"}</option>
          <option value="Business Technology Solutions">{ur ? "بزنس ٹیکنالوجی سلوشنز" : "Business Technology Solutions"}</option>
          <option value="Other Project Discussion">
            {ur ? "دیگر پروجیکٹ پر گفتگو" : "Other Project Discussion"}
          </option>
        </select>
      </label>

      <label>
        {ur ? "اپنے پروجیکٹ کے بارے میں بتائیں" : "Tell us about your project"}
        <textarea
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={ur ? "اپنے آئیڈیا کی تفصیل لکھیں..." : "Describe your idea..."}
        />
      </label>

      <button className="button button-gold" type="submit">
        {ur ? "درخواست تیار کریں" : "Prepare Inquiry"} <span>↗</span>
      </button>

      {status && <p className="form-status" role="status">{status}</p>}

      <p className="form-note">
        {ur
          ? "یہ ورژن آپ کی درخواست شیئر کرنے کے لیے تیار کرتا ہے۔ ویب سائٹ سے براہِ راست درخواست بھیجنے کی سہولت Supabase بیک اینڈ کے ساتھ فعال ہوگی۔"
          : "This version prepares your inquiry for sharing. Direct website submission will be enabled with the Supabase backend."}
      </p>
    </form>
  );
}
