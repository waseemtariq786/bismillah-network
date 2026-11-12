import type { Metadata } from "next";
import { Suspense } from "react";
import ContactContent from "./contact-content";

export const metadata: Metadata = {
  title: "Contact Us | BISMILLAH NETWORK",
  description: "Contact BISMILLAH NETWORK for website development, mobile apps and business enquiries.",
};

export default function ContactPage() {
  return (
    <Suspense fallback={<main className="section-pad">Loading...</main>}>
      <ContactContent />
    </Suspense>
  );
}
