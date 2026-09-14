import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import {
  ContactBanner,
  Metrics,
  ProjectCover,
  ResourceLink,
} from "@/components/ui";
import { projects } from "@/data/portfolio";
export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return { title: "Project not found" };
  return { title: project.shortTitle, description: project.summary };
}
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  const nextProject =
    projects[
      (projects.findIndex((item) => item.slug === slug) + 1) % projects.length
    ];
  return (
    <>
      <section className="container case-intro">
        <Link href="/projects" className="back-link">
          <ArrowLeft size={16} />
          All projects
        </Link>
        <p className="eyebrow">
          {String(project.number).padStart(2, "0")} / {project.context}
        </p>
        <h1>{project.title}</h1>
        <p className="intro-copy">{project.summary}</p>
        <dl className="case-facts">
          <div>
            <dt>CONTEXT</dt>
            <dd>{project.context}</dd>
          </div>
          <div>
            <dt>ROLE</dt>
            <dd>{project.role}</dd>
          </div>
          <div>
            <dt>PERIOD</dt>
            <dd>{project.period}</dd>
          </div>
        </dl>
      </section>
      <div className="container">
        <ProjectCover project={project} large />
      </div>
      <section className="container case-body">
        <aside>
          <p className="eyebrow">THE PROJECT</p>
          <div className="tags">
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <a href="#project-resources" className="text-link">
            View supporting work <ArrowUpRight size={15} />
          </a>
        </aside>
        <div className="case-content">
          <p className="case-lead">{project.intro}</p>
          {project.metrics && <Metrics items={project.metrics} />}
          {project.sections.map((section, i) => (
            <section key={section.title} className="case-section">
              <p className="eyebrow">0{i + 1}</p>
              <h2>{section.title}</h2>
              <p>{section.body}</p>
            </section>
          ))}
          <div className="case-outcome">
            <p className="eyebrow">THE TAKEAWAY</p>
            <p>{project.outcome}</p>
          </div>
          {project.note && <p className="source-note">{project.note}</p>}
        </div>
      </section>
      {project.preview && (
        <figure className="container case-preview">
          <div>
            <Image
              src={project.preview.src}
              alt={project.preview.alt}
              width={1600}
              height={900}
              sizes="(max-width: 800px) 100vw, 1200px"
            />
          </div>
          <figcaption>{project.preview.caption}</figcaption>
        </figure>
      )}
      <section className="container case-resources" id="project-resources">
        <div>
          <p className="eyebrow">LOOK A LITTLE CLOSER</p>
          <h2>
            The supporting <em>work.</em>
          </h2>
        </div>
        <div>
          {project.resources.map((resource) => (
            <ResourceLink key={resource.href} resource={resource} />
          ))}
        </div>
      </section>
      <div className="container next-project">
        <span className="eyebrow">
          UP NEXT / {String(nextProject.number).padStart(2, "0")}
        </span>
        <Link href={`/projects/${nextProject.slug}`}>
          <h2>{nextProject.shortTitle}</h2>
          <ArrowUpRight size={32} strokeWidth={1.3} />
        </Link>
      </div>
      <ContactBanner />
    </>
  );
}
