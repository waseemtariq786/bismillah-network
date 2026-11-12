import type { Metadata } from "next";
import AboutContent from "./about-content";

export const metadata: Metadata = {
  title: "About Us | BISMILLAH NETWORK",
  description: "Learn about the BISMILLAH NETWORK mission, vision, founder and commitment to connecting people through technology and opportunity.",
};

export default function AboutPage() {
  return <AboutContent />;
}
