import type { Metadata } from "next";
import RolesContent from "./roles-content";

export const metadata: Metadata = {
  title: "Roles & Responsibilities | BISMILLAH NETWORK",
  description: "Explore proposed roles, responsibilities and organizational structure.",
};

export default function RolesPage() {
  return <RolesContent />;
}
