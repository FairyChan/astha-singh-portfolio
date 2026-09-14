# Astha Singh - Portfolio

A complete Next.js portfolio for Astha Singh, updated from the supplied resume and project materials. The site brings together fashion management, merchandising, e-commerce, brand experiences and academic research in a responsive editorial design.

## Run locally

Use Node.js 20.9 or later (Node.js 22 LTS recommended).

```bash
npm ci
npm run dev
```

Open http://localhost:3000. Run these commands inside the extracted `Portfolio-main` folder, where `package.json` is located. If copying into another project directory, copy **all** contents, including configuration files, and run `npm ci` again.

## Production

```bash
npm ci
npm run build
npm run start
```

Deploy as a Next.js application with a Node.js server. The redirects in `next.config.ts` and image optimization are served by Next.js. Do not upload only the `app` or `public` directory to a plain static web server. No database, API keys or environment variables are required.

All application links and downloads use domain-relative paths. For example, deploying to `https://abc.com` automatically makes the resume available at `https://abc.com/resume`. There is no sample domain hard-coded into navigation.

## Pages

| Route              | Page                                          |
| ------------------ | --------------------------------------------- |
| `/`                | Home and selected work                        |
| `/about`           | Profile, education, award and capabilities    |
| `/work-experience` | NeoNiche, Triburg and House of Kosha          |
| `/projects`        | Ten projects with search and category filters |
| `/resume`          | Embedded original PDF and unchanged download  |
| `/contact`         | Email, phone, LinkedIn and copy-email action  |

## Individual projects and redirects

Each descriptive project URL opens a full case study. Numbered URLs return HTTP **308** permanent redirects to these pages.

| Shortcut     | Destination                                |
| ------------ | ------------------------------------------ |
| `/project1`  | `/projects/triburg-market-diversification` |
| `/project2`  | `/projects/house-of-kosha`                 |
| `/project3`  | `/projects/avora-brand-strategy`           |
| `/project4`  | `/projects/neoniche-brand-experiences`     |
| `/project5`  | `/projects/apparel-export-merchandising`   |
| `/project6`  | `/projects/apparel-consumer-research`      |
| `/project7`  | `/projects/rolex-luxury-brand-analysis`    |
| `/project8`  | `/projects/global-sourcing-strategy`       |
| `/project9`  | `/projects/global-fashion-marketing`       |
| `/project10` | `/projects/apparel-supply-chain`           |

Additional aliases: `/experience` → `/work-experience`, `/work` → `/projects`, `/cv` → `/resume`, `/education` → `/about#education`, `/skills` → `/about#skills`.

Legacy home bookmarks such as `/#experience`, `/#work`, `/#about`, `/#education`, `/#skills` and `/#contact` navigate to the corresponding new page after client-side initialization. Unknown pages show a custom 404 with links back to the portfolio.

## Update content manually

| File or folder                            | What to change                                                     |
| ----------------------------------------- | ------------------------------------------------------------------ |
| `data/portfolio.ts`                       | Contact details, education, skills, experience and project content |
| `public/documents/astha-singh-resume.pdf` | Replace this file when the resume changes                          |
| `public/documents/`                       | Downloadable presentations, reports and the garment cost sheet     |
| `public/images/`                          | Portrait, project imagery, slide previews, certificates and award  |
| `app/page.tsx`                            | Homepage introduction and selected-project presentation            |
| `app/about/page.tsx`                      | Narrative profile text                                             |
| `app/globals.css`                         | Colors, typography, layouts and responsive styles                  |
| `components/Navbar.tsx`                   | Navigation and legacy bookmark mapping                             |
| `next.config.ts`                          | Route aliases and redirects                                        |
| `app/layout.tsx`                          | Global metadata, local fonts and page shell                        |
| `app/icon.svg`                            | Custom AS favicon                                                  |

Adding a project to `projects` in `data/portfolio.ts` generates its case-study page and numbered redirect on the next build. Give every project a unique `number` and `slug`. Use an existing cover style or add a new cover variant in `components/ui.tsx` and `app/globals.css`. Update the homepage project count if adding or removing projects.

The main navigation uses standard browser links. The mobile menu uses native HTML details/summary, so both remain usable without JavaScript. Project-category links use `/projects?category=...`; the search box submits with Enter or its Search button and preserves the current category. These URLs can be refreshed and bookmarked.

The resume page embeds the original PDF using the browser’s PDF viewer. The file is not parsed into HTML or reformatted. Browsers without an embedded PDF viewer see an exact page-image preview of the supplied PDF and can use Open PDF or Download resume. The fallback preview is `public/images/resume-original.png`; replace it with a render of the new PDF when updating the resume.

Email and phone actions use `mailto:` and `tel:` links; LinkedIn opens the supplied profile in a new tab. The copy-email action uses the browser clipboard and provides a manual-copy fallback when unavailable. There is no contact-form backend.

## Content and source notes

- The supplied **Astha Singh Resume.pdf** is the source of truth for current contact details, dates, roles and resume metrics. The PDF download is an unchanged copy of that file.
- Updated details include NeoNiche (June–September 2026), Triburg’s graduation-project award, the Gmail address and Delhi location. Student-era text and the old externally hosted resume link have been replaced.
- Academic group projects are identified as group work. The AVORA source is a luxury footwear concept; the previous unsupported menswear description has been replaced. Consumer research uses the documented 211 respondents.
- Project photography and slide previews come from the supplied materials. Brand references in academic studies do not imply a client relationship. Source presentations retain their credits.
- The public House of Kosha presentation omits its private contact-directory slide (source page 22). The other slides retain their original content. The source archive, contact-directory page and raw survey/customer workbooks are not included in public assets.
- The Triburg poster and jury presentation use different model weights. The website describes the framework without inventing a reconciled numerical formula; both supplied documents are available for review.
- Historical trade/marketing coursework is presented in its study context, not as current market or policy guidance.
- Large working DOCX reports, the alternative AVORA deck and preliminary research drafts have been left out of the deployed assets; the site includes the selected evidence linked from each case study.

## Checks

```bash
npm run lint
npm run format:check
npm run build
```

With the production server running in another terminal:

```bash
npm run verify:routes
# Or test a server listening on a different port:
npm run verify:routes -- http://localhost:3100
```

The route check verifies all main pages, case studies, numbered and legacy aliases, supporting files, and unknown-route 404 responses. The delivered project was also checked in a local browser for desktop/mobile layout, menu navigation, project filters, search, clipboard copying and resume downloading.

## Stack and package contents

Next.js App Router · React · TypeScript · Tailwind CSS 4 / custom CSS · Lucide icons · locally bundled DM Sans and Cormorant Garamond.

The ZIP contains the complete source project, lockfile, documentation and all assets used by the website. Generated directories (`node_modules`, `.next`) are intentionally excluded; `npm ci` and `npm run build` recreate them. No third-party account integration is required.
