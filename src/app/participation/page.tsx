import type { Metadata } from "next";
import ParticipationContent from "./participation-content";

export const metadata: Metadata = {
  title: "Participation | BISMILLAH NETWORK",
  description: "Discover ways to participate and contribute skills to BISMILLAH NETWORK.",
};

export default function ParticipationPage() {
  return <ParticipationContent />;
}
