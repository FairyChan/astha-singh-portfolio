/* eslint-disable @next/next/no-html-link-for-pages -- Native document navigation is intentional for these fallback links. */
import { Search, X } from "lucide-react";
import { ProjectCard } from "@/components/ui";
import { type Project } from "@/data/portfolio";

const categories = [
  "All work",
  "Industry",
  "Brand strategy",
  "Research",
  "Merchandising",
];

export default function ProjectExplorer({
  projects,
  category: requestedCategory = "All work",
  query = "",
}: {
  projects: Project[];
  category?: string;
  query?: string;
}) {
  const category = categories.includes(requestedCategory)
    ? requestedCategory
    : "All work";
  const filtered = projects.filter(
    (project) =>
      (category === "All work" || project.category === category) &&
      `${project.title} ${project.shortTitle} ${project.context} ${project.summary} ${project.tags.join(" ")}`
        .toLowerCase()
        .includes(query.trim().toLowerCase()),
  );
  function projectUrl(nextCategory: string, nextQuery: string) {
    const params = new URLSearchParams();
    if (nextCategory !== "All work") params.set("category", nextCategory);
    if (nextQuery.trim()) params.set("q", nextQuery.trim());
    return `/projects${params.size ? `?${params.toString()}` : ""}`;
  }
  return (
    <div className="container project-explorer">
      <div className="project-toolbar">
        <nav className="filter-tabs" aria-label="Project categories">
          {categories.map((item) => (
            <a
              key={item}
              href={projectUrl(item, query)}
              aria-current={category === item ? "page" : undefined}
            >
              {item}
            </a>
          ))}
        </nav>
        <form
          action="/projects"
          method="get"
          className="project-search"
          role="search"
          aria-label="Search portfolio projects"
        >
          {category !== "All work" && (
            <input type="hidden" name="category" value={category} />
          )}
          <input
            aria-label="Search projects"
            placeholder="Search projects"
            type="search"
            name="q"
            defaultValue={query}
          />
          {query && (
            <a href={projectUrl(category, "")} aria-label="Clear search">
              <X size={15} />
            </a>
          )}
          <button type="submit" aria-label="Search">
            <Search size={16} />
          </button>
        </form>
      </div>
      <p className="results-count" aria-live="polite">
        {String(filtered.length).padStart(2, "0")}{" "}
        {filtered.length === 1 ? "project" : "projects"}
        {category !== "All work"
          ? ` / ${category}`
          : " / Selected industry & academic work"}
      </p>
      {filtered.length ? (
        <div className="project-grid">
          {filtered.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <h2>No projects found.</h2>
          <p>Try a different keyword or explore all the work.</p>
          <a className="button" href="/projects">
            Reset filters
          </a>
        </div>
      )}
    </div>
  );
}
