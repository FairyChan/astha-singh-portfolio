import type { Metadata } from "next";
import Image from "next/image";
import { Award } from "lucide-react";
import { ContactBanner, PageIntro, TextLink } from "@/components/ui";
import { education, skillGroups } from "@/data/portfolio";
export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Astha Singh: NIFT Mumbai Fashion Management graduate with a background in Economics and experience across product, commerce and brand.",
};
export default function AboutPage() {
  return (
    <>
      <PageIntro
        label="ABOUT / ASTHA SINGH"
        title="A considered perspective."
        accent="A hands-on approach."
        description="Fashion management, informed by economics and shaped by real-world execution."
      />
      <section className="container about-story">
        <div className="about-photo">
          <Image
            src="/images/astha-singh.webp"
            alt="Astha Singh, fashion management professional"
            fill
            sizes="(max-width: 760px) 90vw, 450px"
          />
          <span>DELHI, INDIA / NIFT MUMBAI</span>
        </div>
        <div className="story-copy">
          <p className="eyebrow">THE PERSON BEHIND THE WORK</p>
          <h2>
            Curious about the details.
            <br />
            <em>Mindful of the bigger picture.</em>
          </h2>
          <p>
            I’m Astha, a Fashion Management professional with experience across
            product development, merchandising, e-commerce and brand operations.
          </p>
          <p>
            At Triburg, I supported product development for American Eagle and
            learned how careful sampling, vendor coordination and approvals
            bring a product closer to market. At House of Kosha, I worked across
            Shopify operations, marketplace outreach and customer engagement.
          </p>
          <p>
            My work at NeoNiche added another dimension: translating client
            objectives into ideas and supporting the teams that bring brand
            experiences to life.
          </p>
          <p>
            With an Economics degree and a Master of Fashion Management from
            NIFT Mumbai, I bring analytical thinking and fashion knowledge to
            practical commercial work.
          </p>
          <TextLink href="/work-experience">Explore my experience</TextLink>
        </div>
      </section>
      <section className="section container" id="education">
        <div className="section-heading">
          <div>
            <p className="eyebrow">THE FOUNDATION</p>
            <h2>
              Education & <em>recognition.</em>
            </h2>
          </div>
        </div>
        <div className="education-list">
          {education.map((item) => (
            <article key={item.degree}>
              <span className="eyebrow">{item.period}</span>
              <div>
                <h3>{item.degree}</h3>
                <p>{item.institution}</p>
                <small>{item.detail}</small>
              </div>
            </article>
          ))}
        </div>
        <div className="recognition">
          <Award size={30} strokeWidth={1.3} />
          <div>
            <p className="eyebrow">BEST GRADUATION PROJECT AWARD</p>
            <h3>International Business / Export Merchandising</h3>
            <p>
              Trade Agreements and Strategic Market Diversification - a decision
              framework for Indian apparel buying houses.
            </p>
          </div>
          <TextLink href="/projects/triburg-market-diversification">
            Read the project
          </TextLink>
        </div>
      </section>
      <section className="skills-section" id="skills">
        <div className="section container">
          <p className="eyebrow">THE TOOLKIT</p>
          <h2>
            From insight
            <br />
            to <em>execution.</em>
          </h2>
          <div className="skills-grid">
            {skillGroups.map((group, i) => (
              <article key={group.title}>
                <span className="row-index">0{i + 1}</span>
                <h3>{group.title}</h3>
                <p>{group.description}</p>
                <ul>
                  {group.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
      <ContactBanner />
    </>
  );
}
