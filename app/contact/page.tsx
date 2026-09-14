import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { profile } from "@/data/portfolio";
import { PageIntro } from "@/components/ui";
import ContactActions from "@/components/ContactActions";
export const metadata: Metadata = {
  title: "Contact",
  description:
    "Connect with Astha Singh in Delhi for conversations about fashion management, merchandising, e-commerce and brand opportunities.",
};
export default function ContactPage() {
  return (
    <>
      <PageIntro
        label="CONTACT / LET’S CONNECT"
        title="The next chapter"
        accent="starts with a hello."
        description="For opportunities, collaborations or a conversation about fashion, product and brand - I’d love to hear from you."
      />
      <section className="container contact-layout">
        <div className="contact-primary">
          <p className="eyebrow">DROP ME A NOTE</p>
          <a className="contact-email" href={`mailto:${profile.email}`}>
            {profile.email}
            <ArrowUpRight size={28} strokeWidth={1.2} />
          </a>
          <ContactActions />
          <p className="contact-context">
            Interested in product development, merchandising, e-commerce, brand
            management and client servicing opportunities.
          </p>
          <a
            className="button"
            href={`mailto:${profile.email}?subject=Let%27s%20connect`}
          >
            Start a conversation <Mail size={17} />
          </a>
        </div>
        <aside className="contact-details">
          <div>
            <MapPin size={19} />
            <span>
              <small>BASED IN</small>
              {profile.location}
            </span>
          </div>
          <a href={profile.phoneHref}>
            <Phone size={19} />
            <span>
              <small>CALL</small>
              {profile.phone}
            </span>
            <ArrowUpRight size={17} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            <span className="linkedin-icon">in</span>
            <span>
              <small>CONNECT</small>LinkedIn
            </span>
            <ArrowUpRight size={17} />
          </a>
          <Link href="/resume">
            <span className="linkedin-icon">CV</span>
            <span>
              <small>EXPLORE</small>View my resume
            </span>
            <ArrowUpRight size={17} />
          </Link>
        </aside>
      </section>
    </>
  );
}
