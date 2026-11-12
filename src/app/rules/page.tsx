import type { Metadata } from "next";
import RulesContent from "./rules-content";

export const metadata: Metadata = {
  title: "Rules & Regulations | BISMILLAH NETWORK",
  description: "Read the proposed governance principles and rules of BISMILLAH NETWORK.",
};

export default function RulesPage() {
  return <RulesContent />;
}
