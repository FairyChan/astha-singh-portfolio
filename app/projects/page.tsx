import type { Metadata } from "next";
import ProjectExplorer from "@/components/ProjectExplorer";
import { ContactBanner, PageIntro } from "@/components/ui";
import { projects } from "@/data/portfolio";
export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore ten industry and academic case studies by Astha Singh across fashion management, e-commerce, merchandising, brand strategy and research.",
};
export default async function ProjectsPage({
  searchParams,
}: {
  searchParams: Promise<{
    category?: string | string[];
    q?: string | string[];
  }>;
}) {
  const params = await searchParams;
  const category =
    typeof params.category === "string" ? params.category : "All work";
  const query = typeof params.q === "string" ? params.q : "";
  return (
    <>
      <PageIntro
        label="THE PORTFOLIO / SELECTED WORK"
        title="Different briefs."
        accent="A thoughtful approach."
        description="Industry experience, award-winning research and academic explorations - with the thinking and supporting work behind each project."
      />
      <ProjectExplorer projects={projects} category={category} query={query} />
      <ContactBanner />
    </>
  );
}
