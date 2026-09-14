import Link from "next/link";
import { ArrowRight } from "lucide-react";
export default function NotFound() {
  return (
    <section className="container not-found">
      <p className="eyebrow">404 / PAGE NOT FOUND</p>
      <h1>
        A little off
        <br />
        <em>the beaten path.</em>
      </h1>
      <p>
        This page isn’t part of the portfolio. Let’s find your way back to the
        work.
      </p>
      <div className="button-row">
        <Link className="button" href="/">
          Back to home <ArrowRight size={17} />
        </Link>
        <Link className="button button-outline" href="/projects">
          Explore projects
        </Link>
      </div>
    </section>
  );
}
