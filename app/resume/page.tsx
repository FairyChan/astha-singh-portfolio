import type { Metadata } from "next";
import Image from "next/image";
import { profile } from "@/data/portfolio";
import { PageIntro, ResumeButtons } from "@/components/ui";

export const metadata: Metadata = {
  title: "Resume",
  description: "View and download Astha Singh’s original resume PDF.",
};

export default function ResumePage() {
  return (
    <>
      <PageIntro
        label="RESUME / ASTHA SINGH"
        title="The experience,"
        accent="at a glance."
        description="Fashion Management · Merchandising · E-commerce · Brand Management"
      />
      <div className="container resume-actions">
        <ResumeButtons />
        <p>View the original resume below, or open the PDF in a new tab.</p>
      </div>
      <section
        className="container resume-viewer"
        aria-label="Original resume PDF"
      >
        <object
          className="resume-pdf"
          data={`${profile.resume}#view=FitH`}
          type="application/pdf"
          aria-label="Astha Singh’s original resume"
        >
          <div className="resume-pdf-fallback">
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open the original resume PDF"
            >
              <Image
                className="resume-original-page"
                src="/images/resume-original.png"
                alt="Original Astha Singh resume, preserving the supplied PDF layout"
                width={1415}
                height={2000}
                unoptimized
                loading="eager"
              />
            </a>
            <p>Your browser can open the original resume in a separate tab.</p>
            <a
              className="button"
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open original PDF
            </a>
          </div>
        </object>
      </section>
    </>
  );
}
