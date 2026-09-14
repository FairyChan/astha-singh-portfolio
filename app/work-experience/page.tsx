import type { Metadata } from "next";
import {
  ContactBanner,
  Metrics,
  PageIntro,
  ResourceLink,
  TextLink,
} from "@/components/ui";
import { experiences } from "@/data/portfolio";
export const metadata: Metadata = {
  title: "Work Experience",
  description:
    "Astha Singh’s work at NeoNiche, Triburg and House of Kosha: client servicing, product development, merchandising and e-commerce.",
};
export default function ExperiencePage() {
  return (
    <>
      <PageIntro
        label="WORK EXPERIENCE / 2025–2026"
        title="From the product floor"
        accent="to the brand experience."
        description="Three roles. A connected perspective on product development, e-commerce and experiential marketing."
      />
      <div className="container experience-details">
        {experiences.map((item, i) => (
          <article key={item.slug} id={item.slug} className="experience-detail">
            <aside>
              <span className="eyebrow">
                0{i + 1} / {item.discipline}
              </span>
              <h2>{item.company}</h2>
              <p>{item.period}</p>
              <span className="employment-type">
                {i === 0 ? "Management traineeship" : "Internship"}
              </span>
            </aside>
            <div>
              <p className="eyebrow">{item.fullCompany}</p>
              <h3>{item.role}</h3>
              <p className="experience-summary">{item.summary}</p>
              <ul className="bullet-list">
                {item.highlights.map((text) => (
                  <li key={text}>{text}</li>
                ))}
              </ul>
              <Metrics items={item.metrics} />
              <TextLink href={`/projects/${item.slug}`}>
                {i === 1
                  ? "Explore the graduation project"
                  : "Explore this work"}
              </TextLink>
              {item.certificate && (
                <div className="experience-certificate">
                  <ResourceLink
                    resource={{
                      title: `${item.company} internship certificate`,
                      href: item.certificate,
                      format: "Image",
                    }}
                  />
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
      <ContactBanner />
    </>
  );
}
