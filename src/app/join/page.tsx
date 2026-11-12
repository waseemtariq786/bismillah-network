import type { Metadata } from "next";
import JoinContent from "./join-content";

export const metadata: Metadata = {
  title: "Join Us | BISMILLAH NETWORK",
  description: "Learn how to participate and contribute to the BISMILLAH NETWORK vision.",
};

export default function JoinPage() {
  return <JoinContent />;
}
