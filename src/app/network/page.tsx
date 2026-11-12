import type { Metadata } from "next";
import NetworkContent from "./network-content";

export const metadata: Metadata = {
  title: "Our Network | BISMILLAH NETWORK",
  description: "Explore our organizational network, departments and team structure.",
};

export default function NetworkPage() {
  return <NetworkContent />;
}
