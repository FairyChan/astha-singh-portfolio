import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight, Download } from "lucide-react";
import { profile, type Project } from "@/data/portfolio";

export function PageIntro({
  label,
  title,
  accent,
  description,
}: {
  label: string;
  title: string;
  accent?: string;
  description: string;
}) {
  return (
    <section className="page-intro container">
      <p className="eyebrow">
        <span className="small-line" />
        {label}
      </p>
      <h1>
        {title}
        {accent && (
          <>
            <br />
            <em>{accent}</em>
          </>
        )}
      </h1>
      <p className="intro-copy">{description}</p>
    </section>
  );
}
export function Metrics({
  items,
  dark = false,
}: {
  items: { value: string; label: string }[];
  dark?: boolean;
}) {
  return (
    <dl className={`metrics ${dark ? "metrics-dark" : ""}`}>
      {items.map((item) => (
        <div key={item.label}>
          <dt>{item.label}</dt>
          <dd>{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}
export function ProjectCover({
  project,
  large = false,
}: {
  project: Project;
  large?: boolean;
}) {
  const image =
    project.cover === "kosha"
      ? "/images/kosha.webp"
      : project.cover === "avora"
        ? "/images/avora.webp"
        : project.cover === "rolex"
          ? "/images/rolex.webp"
          : undefined;
  return (
    <div
      className={`project-cover cover-${project.cover} ${large ? "cover-large" : ""}`}
    >
      {image ? (
        <Image
          src={image}
          alt=""
          fill
          sizes={
            large
              ? "(max-width: 800px) 100vw, 1200px"
              : "(max-width: 700px) 100vw, 600px"
          }
          preload={large}
          className="cover-image"
        />
      ) : (
        <div className="cover-composition" aria-hidden="true">
          {project.cover === "triburg" && (
            <>
              <span className="cover-kicker">RESEARCH / NIFT MUMBAI</span>
              <span className="cover-title">
                Beyond
                <br />
                one market<span className="cover-dot">.</span>
              </span>
              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />
              <div className="orbit orbit-three" />
              <span className="cover-foot">TRIBURG · GRADUATION PROJECT</span>
            </>
          )}
          {project.cover === "neoniche" && (
            <>
              <span className="cover-kicker">IDEATION → EXPERIENCE</span>
              <span className="cover-title">
                Make it
                <br />
                <i>memorable.</i>
              </span>
              <span className="cover-foot">NEONICHE · CLIENT SERVICING</span>
              <div className="experience-lines" />
            </>
          )}
          {project.cover === "export" && (
            <>
              <span className="cover-kicker">APPAREL EXPORT MERCHANDISING</span>
              <span className="cover-title">
                Every detail.
                <br />
                <i>Every stage.</i>
              </span>
              <div className="swatches">
                <span />
                <span />
                <span />
                <span />
              </div>
              <span className="cover-foot">
                PRODUCT / PLANNING / PRODUCTION
              </span>
            </>
          )}
          {project.cover === "research" && (
            <>
              <span className="cover-kicker">FASHION BUSINESS RESEARCH</span>
              <span className="research-number">
                211
                <span>
                  voices.
                  <br />
                  New perspectives.
                </span>
              </span>
              <span className="cover-foot">
                CONSUMER INSIGHT · SMALL APPAREL BRANDS
              </span>
            </>
          )}
          {project.cover === "sourcing" && (
            <>
              <span className="cover-kicker">GLOBAL SOURCING</span>
              <span className="cover-title">
                A world of
                <br />
                <i>decisions.</i>
              </span>
              <div className="sourcing-globe" />
              <span className="cover-foot">TRADE / RISK / RELATIONSHIPS</span>
            </>
          )}
          {project.cover === "marketing" && (
            <>
              <span className="cover-kicker">GLOBAL FASHION MARKETING</span>
              <span className="cover-title">
                MANGO<span className="versus">&</span>FOREVER 21
              </span>
              <span className="cover-foot">
                TWO BRANDS. AN INDIAN MARKET LENS.
              </span>
            </>
          )}
          {project.cover === "supply" && (
            <>
              <span className="cover-kicker">SUPPLY-CHAIN MANAGEMENT</span>
              <span className="cover-title">
                Behind
                <br />
                <i>the product.</i>
              </span>
              <div className="supply-blocks">
                <span />
                <span />
                <span />
              </div>
              <span className="cover-foot">
                OPTUS IMPEX · ACADEMIC CASE STUDY
              </span>
            </>
          )}
        </div>
      )}
      {image && (
        <div className="photo-cover-label">
          <span>
            {project.cover === "avora"
              ? "AVORA"
              : project.cover === "rolex"
                ? "The codes of luxury"
                : "HOUSE OF KOSHA"}
          </span>
          <small>
            {project.cover === "avora"
              ? "WHERE MOVEMENT BECOMES ELEGANCE"
              : project.cover === "rolex"
                ? "AN ACADEMIC BRAND STUDY"
                : "CRAFT MEETS COMMERCE"}
          </small>
        </div>
      )}
      {!large && (
        <span className="cover-arrow">
          <ArrowUpRight size={20} />
        </span>
      )}
    </div>
  );
}
export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <Link
        href={`/projects/${project.slug}`}
        aria-label={`View ${project.shortTitle}`}
      >
        <ProjectCover project={project} />
        <div className="project-meta">
          <span>
            {String(project.number).padStart(2, "0")} / {project.category}
          </span>
          <span>{project.period}</span>
        </div>
        <h3>{project.shortTitle}</h3>
        <p>{project.summary}</p>
        <span className="card-link">
          Explore project <ArrowUpRight size={15} />
        </span>
      </Link>
    </article>
  );
}
export function ResourceLink({
  resource,
}: {
  resource: Project["resources"][number];
}) {
  const isDocument = resource.format === "PDF" || resource.format === "Image";
  return (
    <a
      className="resource-link"
      href={resource.href}
      target={isDocument ? "_blank" : undefined}
      rel={isDocument ? "noopener noreferrer" : undefined}
      download={!isDocument || undefined}
    >
      <span className="file-format">{resource.format}</span>
      <span>
        {resource.title}
        <small>{isDocument ? "Open in a new tab" : "Download file"}</small>
      </span>
      {isDocument ? <ArrowUpRight size={19} /> : <Download size={19} />}
    </a>
  );
}
export function ContactBanner() {
  return (
    <section className="contact-banner">
      <div className="container contact-banner-inner">
        <div>
          <p className="eyebrow">THE NEXT CONVERSATION</p>
          <h2>
            Good work starts
            <br />
            with a <em>connection.</em>
          </h2>
        </div>
        <div>
          <p>
            Let’s talk about product, fashion, brand experiences - and the work
            we could do together.
          </p>
          <Link href="/contact" className="button button-light">
            Get in touch <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}
export function Footer() {
  return (
    <footer className="site-footer container">
      <Link href="/" className="footer-name">
        Astha Singh<span>.</span>
      </Link>
      <p>Fashion management. Commercial thinking. Thoughtful execution.</p>
      <div>
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn <ArrowUpRight size={13} />
        </a>
        <a href={`mailto:${profile.email}`}>
          Email <ArrowUpRight size={13} />
        </a>
        <span>© {new Date().getFullYear()} Astha Singh</span>
      </div>
    </footer>
  );
}
export function ResumeButtons() {
  return (
    <div className="button-row">
      <a
        href={profile.resume}
        download="Astha-Singh-Resume.pdf"
        className="button"
      >
        Download resume <ArrowDown size={17} />
      </a>
      <a
        href={profile.resume}
        target="_blank"
        rel="noopener noreferrer"
        className="button button-outline"
      >
        Open PDF <ArrowUpRight size={17} />
      </a>
    </div>
  );
}
export function TextLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link className="text-link" href={href}>
      {children}
      <ArrowRight size={17} />
    </Link>
  );
}
