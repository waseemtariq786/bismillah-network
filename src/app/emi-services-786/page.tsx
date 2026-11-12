import type { Metadata } from "next";
import EmiServicesContent from "./emi-services-content";

export const metadata: Metadata = {
  title: "EMI Services 786 | Electrical Inspection App",
  description: "Electrical inspection and maintenance record app for factories and homes. Explore EMI Services 786.",
};

export default function EmiServicesPage() {
  return <EmiServicesContent />;
}
