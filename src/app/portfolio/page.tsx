import type { Metadata } from "next";
import PortfolioContent from "./portfolio-content";

export const metadata: Metadata = {
  title: "Portfolio | BISMILLAH NETWORK",
  description: "Explore BISMILLAH NETWORK digital projects, websites and mobile application work.",
};

export default function PortfolioPage() {
  return <PortfolioContent />;
}
