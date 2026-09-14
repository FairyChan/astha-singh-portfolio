import type { NextConfig } from "next";
import { projects } from "./data/portfolio";
const nextConfig: NextConfig = {
  poweredByHeader: false,
  async redirects() {
    return [
      ...projects.map((project) => ({
        source: `/project${project.number}`,
        destination: `/projects/${project.slug}`,
        permanent: true,
      })),
      {
        source: "/experience",
        destination: "/work-experience",
        permanent: true,
      },
      { source: "/work", destination: "/projects", permanent: true },
      { source: "/cv", destination: "/resume", permanent: true },
      {
        source: "/education",
        destination: "/about#education",
        permanent: true,
      },
      { source: "/skills", destination: "/about#skills", permanent: true },
    ];
  },
};
export default nextConfig;
