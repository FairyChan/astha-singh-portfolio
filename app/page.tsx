import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Award, MapPin } from "lucide-react";
import { ContactBanner, ProjectCard, TextLink } from "@/components/ui";
import { experiences, projects, profile } from "@/data/portfolio";

export default function Home() {
  return (
    <>
      <section className="hero container" id="top">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="small-line" />
            FASHION MANAGEMENT · PORTFOLIO
          </p>
          <h1>
            Where product
            <br />
            meets <em>possibility.</em>
          </h1>
          <p className="hero-name">Hello, I’m Astha Singh.</p>
          <p className="hero-description">
            I bring fashion knowledge, commercial thinking and hands-on
            execution to the spaces between product, brand and consumer.
          </p>
          <div className="button-row">
            <Link href="/projects" className="button">
              Explore my work <ArrowUpRight size={17} />
            </Link>
            <Link href="/resume" className="button button-outline">
              View resume <ArrowUpRight size={17} />
            </Link>
          </div>
          <div className="hero-location">
            <MapPin size={13} />
            <span>{profile.location}</span>
            <span className="dot-separator" />
            <span>NIFT Mumbai · MFM ’26</span>
          </div>
        </div>
        <div className="hero-visual">
          <div className="portrait-frame">
            <Image
              src="/images/astha-singh.webp"
              alt="Astha Singh"
              fill
              sizes="(max-width: 760px) 90vw, 440px"
              preload
              className="hero-portrait"
            />
            <span className="portrait-index">01 / A LITTLE ABOUT ME</span>
          </div>
          <div className="portrait-caption">
            <span>Curiosity. Perspective. Purpose.</span>
            <span>AS / 2026</span>
          </div>
          <Link
            className="award-badge"
            href="/projects/triburg-market-diversification"
          >
            <Award size={24} strokeWidth={1.3} />
            <div>
              <span>BEST GRADUATION PROJECT</span>
              <p>
                International Business /<br />
                Export Merchandising
              </p>
            </div>
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
      <div className="expertise-strip">
        <div className="container">
          <span>PRODUCT DEVELOPMENT</span>
          <i>✳</i>
          <span>MERCHANDISING</span>
          <i>✳</i>
          <span>E-COMMERCE</span>
          <i>✳</i>
          <span>BRAND EXPERIENCES</span>
        </div>
      </div>
      <section className="section container intro-section">
        <div>
          <p className="eyebrow">01 / THE PERSPECTIVE</p>
          <h2>
            Creative in approach.
            <br />
            <em>Commercial at heart.</em>
          </h2>
        </div>
        <div>
          <p>
            From coordinating American Eagle samples at Triburg to managing a
            Shopify catalogue at House of Kosha and supporting brand activations
            at NeoNiche - I enjoy the work that connects an idea to its
            execution.
          </p>
          <p>
            A Master of Fashion Management from NIFT Mumbai, backed by an
            Economics background, shapes how I look at products, people and
            markets.
          </p>
          <TextLink href="/about">More about me</TextLink>
        </div>
      </section>
      <section className="selected-work section container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">02 / SELECTED WORK</p>
            <h2>
              A closer look
              <br />
              at <em>the work.</em>
            </h2>
          </div>
          <div>
            <p>
              Industry experience and academic explorations across fashion,
              commerce and brand strategy.
            </p>
            <TextLink href="/projects">View all 10 projects</TextLink>
          </div>
        </div>
        <div className="project-grid">
          {projects.slice(0, 4).map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
      <section className="experience-preview section container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">03 / INDUSTRY EXPERIENCE</p>
            <h2>
              Learning by <em>doing.</em>
            </h2>
          </div>
          <TextLink href="/work-experience">Full work experience</TextLink>
        </div>
        <div className="experience-list">
          {experiences.map((item, i) => (
            <Link
              href={`/work-experience#${item.slug}`}
              className="experience-row"
              key={item.company}
            >
              <span className="row-index">0{i + 1}</span>
              <h3>{item.company}</h3>
              <div>
                <p>{item.role}</p>
                <span>{item.period}</span>
              </div>
              <ArrowUpRight size={22} strokeWidth={1.3} />
            </Link>
          ))}
        </div>
      </section>
      <ContactBanner />
    </>
  );
}
