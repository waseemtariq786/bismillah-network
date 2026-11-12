import type { Metadata } from "next";
import HomeContent from "./home-content";

export const metadata: Metadata = {
  title: "BISMILLAH NETWORK | One Network • One Vision",
  description: "Professional website and mobile app development, connecting people, skills and opportunities through one vision.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return <HomeContent />;
}
