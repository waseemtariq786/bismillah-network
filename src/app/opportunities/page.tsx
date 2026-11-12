import type { Metadata } from "next";
import OpportunitiesContent from "./opportunities-content";

export const metadata: Metadata = {
  title: "Opportunities | BISMILLAH NETWORK",
  description: "Explore potential contribution areas and opportunities within BISMILLAH NETWORK.",
};

export default function OpportunitiesPage() {
  return <OpportunitiesContent />;
}
