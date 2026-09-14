import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import ts from "typescript";

const source = await readFile(
  new URL("../data/portfolio.ts", import.meta.url),
  "utf8",
);
const code = ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.ESNext },
}).outputText;
const { projects, experiences, profile } = await import(
  `data:text/javascript;base64,${Buffer.from(code).toString("base64")}`
);
const base = new URL(process.argv[2] || "http://localhost:3000");
let checks = 0;
async function check(url, status, destination) {
  const response = await fetch(new URL(url, base), {
    method: "HEAD",
    redirect: "manual",
    signal: AbortSignal.timeout(15000),
  });
  assert.equal(
    response.status,
    status,
    `${url}: expected ${status}, received ${response.status}`,
  );
  if (destination)
    assert.equal(
      new URL(response.headers.get("location"), base).href,
      new URL(destination, base).href,
      `${url}: wrong redirect destination`,
    );
  checks += 1;
}
try {
  for (const route of [
    "/",
    "/about",
    "/work-experience",
    "/projects",
    "/resume",
    "/contact",
  ])
    await check(route, 200);
  for (const project of projects) {
    await check(`/projects/${project.slug}`, 200);
    await check(`/project${project.number}`, 308, `/projects/${project.slug}`);
  }
  for (const [from, to] of [
    ["/experience", "/work-experience"],
    ["/work", "/projects"],
    ["/cv", "/resume"],
    ["/education", "/about#education"],
    ["/skills", "/about#skills"],
  ])
    await check(from, 308, to);
  const assets = new Set([
    profile.resume,
    "/images/astha-singh.webp",
    ...projects.flatMap((p) => [
      ...p.resources.map((r) => r.href),
      ...(p.preview ? [p.preview.src] : []),
    ]),
    ...experiences.map((e) => e.certificate).filter(Boolean),
  ]);
  for (const asset of assets) await check(asset, 200);
  for (const route of [
    "/page-that-does-not-exist",
    "/projects/project-that-does-not-exist",
    "/project999",
  ])
    await check(route, 404);
  console.log(
    `Passed ${checks} route, redirect, asset and 404 checks against ${base.origin}.`,
  );
} catch (error) {
  console.error(error.message);
  console.error(
    "Start the application in another terminal with npm run start, or pass the correct server URL.",
  );
  process.exitCode = 1;
}
