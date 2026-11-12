import type { Metadata } from "next";
import ProjectsContent from "./projects-content";

export const metadata: Metadata = {
  title: "Projects & Roadmap | BISMILLAH NETWORK",
  description: "Discover BISMILLAH NETWORK projects, development progress and future plans.",
};

export default function ProjectsPage() {
  return <ProjectsContent />;
}
