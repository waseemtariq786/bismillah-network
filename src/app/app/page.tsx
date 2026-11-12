import type { Metadata } from "next";
import MemberPortalContent from "./member-portal-content";

export const metadata: Metadata = {
  title: "Member Portal | BISMILLAH NETWORK",
  description: "Explore the planned BISMILLAH NETWORK member portal and its digital modules.",
};

export default function MemberPortalPage() {
  return <MemberPortalContent />;
}
