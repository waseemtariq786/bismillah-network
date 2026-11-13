import type { Metadata } from "next";
import ApplyContent from "./apply-content";

export const metadata: Metadata = {
  title: "Applications | BISMILLAH NETWORK",
  description: "BISMILLAH NETWORK application center.",
};

export default async function ApplyPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string }>;
}) {
  const params = await searchParams;
  return <ApplyContent type={params.type || "job"} />;
}
