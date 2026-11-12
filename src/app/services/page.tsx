import type { Metadata } from "next";
import ServicesContent from "./services-content";

export const metadata: Metadata = {
  title: "Services | BISMILLAH NETWORK",
  description: "Professional website development, mobile app development and digital technology solutions.",
};

export default function ServicesPage() {
  return <ServicesContent />;
}
