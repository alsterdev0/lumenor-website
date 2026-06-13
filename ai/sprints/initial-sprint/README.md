# Lumenor Initial Sprint Plan

## Goal

Build a production-ready static single-page Lumenor website at `/` that recreates `mockup-lumenor.png` with 1:1 visual parity at the primary desktop viewport, follows `style.md`, and can deploy through DigitalOcean App Platform as a static app.

The page should present Lumenor as a calm, premium technology holding company with these sections:

1. Header with Lumenor logo
2. Hero with CTA and technology network visual
3. Capabilities
4. Portfolio
5. Philosophy
6. Footer

## Mock References

- `ai/sprints/initial-sprint/mockup-lumenor.png`
  - Size: `1055 x 1491`
  - Primary desktop visual reference
- `ai/sprints/initial-sprint/lumenor-logo.png`
  - Size: `4091 x 1643`
  - Use for header/footer lockups unless an SVG source is later found
- `ai/sprints/initial-sprint/lume-symbol.png`
  - Size: `2084 x 2084`
  - Use for the hero center tile and philosophy logo mark
- `style.md`
  - Color palette, typography, spacing, cards, copy, responsive behavior, and launch checklist

## Product And Copy Rules

Use the screenshot copy unless a rule in `style.md` supersedes it.

Visible copy to implement:

- Hero title: `Building and Scaling Technology Properties`
- Hero body: `Lumenor develops, acquires, and distributes digital products across multiple markets[em dash]creating value through innovation, reach, and operational excellence.`
- CTA: `Get In Touch`
- Capabilities eyebrow: `WHAT WE DO`
- Capabilities heading: `End-to-End Capabilities That Drive Growth`
- Development body: `We build scalable, user-centric products with modern technology and a focus on quality.`
- Distribution body: `We expand reach across channels and markets to connect products with the right audiences.`
- Operations body: `We optimize performance through data-driven operations and relentless improvement.`
- Portfolio eyebrow: `OUR PORTFOLIO`
- Portfolio heading: `Technology Properties We Own and Operate`
- SnapCash body: `Rewards and payouts platform for digital users and engagement.`
- DataSea body: `Data collection and proxy infrastructure for modern web operations.`
- Philosophy eyebrow: `OUR PHILOSOPHY`
- Philosophy heading: `Built for the Long Term`
- Philosophy body: `We believe the most enduring companies are built with purpose, patience, and discipline. We partner with exceptional teams, invest for the long term, and focus on creating lasting value through thoughtful growth and operational excellence.`
- Footer positioning line: `Building and scaling technology properties that serve millions.`
- CTA link: use a `mailto:` link. Default to `mailto:hello@lumenor.com` unless an approved company mailbox is provided before implementation.

Approved content decisions:

- The mock shows `(c) 2024 Lumenor Holdings. All rights reserved.`
- `style.md` says the footer copyright year must be current.
- Use `(c) 2026 Lumenor Holdings. All rights reserved.` because the current date is June 13, 2026.
- This is an approved intentional text difference from the raw mock and should be documented in `validation/NOTES.md`.

Implementation typography note:

- `style.md` includes negative letter-spacing values, but implementation should keep letter spacing at `0` and tune font size, weight, width, and line-height to preserve the visual feel.
- Keep source files ASCII where practical. For the hero body punctuation, render an em dash in the browser using an HTML entity or string escape rather than typing a non-ASCII character directly.

## Current State

The repository currently contains planning/style assets only:

- No `package.json`
- No app scaffold
- No existing route/component tree
- No existing tests
- No git metadata in this working directory

This sprint therefore includes both project setup and first-page implementation.

## Non-Goals

- Do not add top navigation.
- Do not add extra portfolio properties beyond SnapCash and DataSea.
- Do not add CMS, backend APIs, forms, analytics, or authentication.
- Do not invent new brand claims such as guarantees, compliance promises, support SLAs, or investment criteria.
- Do not redraw SnapCash or DataSea logos if official assets are available.
- Do not use a marketing-style split hero card; match the mock's first viewport.

## Technical Approach

Use a small static Vite app with React and TypeScript.

Planned packages:

- `vite`
- `typescript`
- `react`
- `react-dom`
- `lucide-react` for line icons
- `@playwright/test` for screenshot capture and validation
- `pixelmatch` and `pngjs` for visual diffing

Planned structure:

```text
.
|-- index.html
|-- package.json
|-- src/
|   |-- App.tsx
|   |-- main.tsx
|   |-- styles.css
|   `-- assets/
|       |-- lume-symbol.png
|       |-- lumenor-logo.png
|       |-- snapcash-logo.svg
|       `-- datasea-logo.svg
|-- scripts/
|   `-- compare-screenshot.mjs
|-- deploy/
|   `-- digitalocean-app.yaml
`-- ai/sprints/initial-sprint/
    |-- README.md
    |-- mockup-lumenor.png
    |-- lume-symbol.png
    |-- lumenor-logo.png
    `-- validation/
```

Keep the implementation simple:

- One page component.
- Section data arrays only where they reduce duplication.
- CSS variables from `style.md`.
- No client-side router.
- No runtime data dependencies.
- Build output: `dist`.

## Asset Plan

1. Copy Lumenor assets from `ai/sprints/initial-sprint/` into `src/assets/` or `public/assets/`.
2. Prefer SVG logo assets for SnapCash and DataSea.
3. Source SnapCash and DataSea logos from the DigitalOcean Spaces buckets for those projects. Treat the bucket assets as authoritative for this sprint.
4. Preserve brand proportions. Do not trace or recreate the logos by hand.
5. Optimize only after confirming visual parity:
   - SVG: run SVGO only if it does not alter appearance.
   - PNG/WebP fallback: keep transparent background and enough resolution for 2x displays.
6. Store the final logo sources in the app asset directory and record their DigitalOcean bucket origin in the implementation notes or PR body.
7. The hero technology network may be generated as a raster asset using the `imagegen` skill instead of being built entirely with CSS/SVG, provided it is generated to match the mock and saved into the workspace before being referenced by the app.
   - Recommended destination: `src/assets/hero-network.png`
   - Use case: `ads-marketing` or `productivity-visual`
   - Input/reference: `ai/sprints/initial-sprint/mockup-lumenor.png` for composition and `ai/sprints/initial-sprint/lume-symbol.png` for the center tile mark
   - Prompt constraints: white/pale blue-gray background, soft technology network, thin connector lines, small nodes, floating rounded icon tiles, central navy Lumenor tile, no text, no watermark, no extra logos
   - Validate the generated asset at desktop and mobile sizes; regenerate or fall back to CSS/SVG if it blocks 1:1 parity.

## Target Experience

### Header

- White/light background with subtle cool tint from the page background.
- Logo lockup at top-left, matching the mock's placement.
- No nav, no secondary action.
- Use `lumenor-logo.png` if it has sufficient transparent padding control; otherwise crop/export a derived web asset without modifying the source file.

### Hero

- Two-column layout at desktop.
- Left column:
  - Large navy heading, same line breaks as mock:
    - `Building and Scaling`
    - `Technology Properties`
  - Muted body copy with comfortable line length.
  - Dark navy CTA button with arrow icon.
- Right column:
  - Soft technology network visual.
  - Central dark navy rounded square tile using `lume-symbol.png` in white or a white-masked asset treatment.
  - Floating icon tiles for analytics, users, code, and global reach.
  - Thin connector lines, small node dots, dotted fields, and faint elliptical arcs.
  - Use either CSS/SVG with `lucide-react` icons or a generated raster hero asset created with the `imagegen` skill. Choose whichever reaches closer visual parity with less fragility.

### Capabilities

- Section divider before capabilities.
- Centered eyebrow and heading.
- Three equal cards on desktop:
  - Development with `Code2`
  - Distribution with `Globe2`
  - Operations with `Settings`
- Cards use soft white surfaces, subtle borders, restrained shadows, and icon circles.

### Portfolio

- Centered eyebrow and heading.
- Two equal cards on desktop, centered.
- Use official SnapCash and DataSea logos.
- SnapCash badge:
  - Text: `Rewards`
  - Green treatment from `style.md`
- DataSea badge:
  - Text: `Data Infrastructure`
  - Blue treatment from `style.md`

### Philosophy

- Full-width container card with soft background and border.
- Left logo orb using `lume-symbol.png`.
- Right copy block with eyebrow, heading, and paragraph.
- Match mock spacing and card height first, then tune responsive behavior.

### Footer

- Top divider.
- Three-column desktop layout:
  - Lumenor logo lockup
  - Positioning line
  - Copyright text
- Stack cleanly on mobile.

## Responsive Plan

Primary parity target is desktop `1055 x 1491`.

Additional required checks:

- `390 x 844` mobile
- `768 x 1024` tablet
- `1440 x 1600` wide desktop sanity

Responsive rules:

- Stack hero columns on mobile, with visual above or below copy only if it preserves comprehension and spacing.
- Stack capability and portfolio cards on mobile.
- Keep card padding generous; do not compress into dense mobile cards.
- Ensure button text, badges, and headings never overflow.
- Keep body text readable with no viewport-width font scaling.

## Work Items

1. Scaffold the static app.
   - Create Vite React TypeScript setup.
   - Add build, preview, lint/typecheck, screenshot, and visual compare scripts.
   - Add basic HTML metadata: title, description, viewport, Open Graph title/description.

2. Add and normalize assets.
   - Copy Lumenor logo assets.
   - Locate official SnapCash and DataSea logos in the DigitalOcean Spaces buckets.
   - Add optimized web versions.
   - Confirm transparent backgrounds and expected display sizes.
   - If using the generated hero approach, generate the hero network with the `imagegen` skill and save the approved output in `src/assets/`.

3. Implement global design system.
   - Add CSS variables from `style.md`.
   - Add font stack with Inter/system fallback.
   - Add page background, container, dividers, card, badge, and button styles.
   - Keep letter spacing at `0`.

4. Build the page sections.
   - Header component.
   - Hero component and hero visual component.
   - Capabilities component.
   - Portfolio component.
   - Philosophy component.
   - Footer component.

5. Tune desktop layout to the mock.
   - Match page width, top spacing, section heights, card positions, and footer position at `1055 x 1491`.
   - Tune hero H1 size/line-height so the wrapping matches the mock.
   - Tune hero visual coordinates against the mock.
   - Tune portfolio logo sizes against official assets without distortion.

6. Add responsive behavior.
   - Implement tablet and mobile media queries.
   - Verify no overlapping text or controls.
   - Confirm hero visual remains framed and nonblank on mobile.

7. Add accessibility and quality basics.
   - Semantic `header`, `main`, `section`, and `footer`.
   - Descriptive image alt text or empty alt for decorative imagery.
   - Keyboard focus style for CTA.
   - Sufficient color contrast.
   - No layout shift from late-loading assets.

8. Prepare DigitalOcean App Platform deployment.
   - Ensure `npm run build` outputs `dist`.
   - Ensure the static site works under `npm run preview`.
   - Add `deploy/digitalocean-app.yaml` with the App Platform static site configuration:
     - App name: `lumenor-website`
     - Build command: `npm ci && npm run build`
     - Output directory: `dist`
     - Environment variables: none
     - Primary domain: `lumenorlabs.com`
     - DNS zone: `lumenorlabs.com`
     - Minimum TLS version: `1.3` unless DigitalOcean rejects it
   - Add `www.lumenorlabs.com` as an alias only if the implementation can confirm the desired behavior should be redirect-to-apex or serve-alias.

9. Deploy and assign DNS through DigitalOcean.
   - Use the DigitalOcean API key already available on the host; never commit or print the token.
   - Prefer `doctl` with `DIGITALOCEAN_ACCESS_TOKEN` from the environment, or fall back to the DigitalOcean API directly if `doctl` is unavailable.
   - Before deployment, verify the DNS zone exists:
     - `doctl compute domain get lumenorlabs.com`
     - `doctl compute domain records list lumenorlabs.com`
   - Confirm DNSSEC is not enabled for `lumenorlabs.com`; App Platform does not support adding DNSSEC-enabled domains.
   - Validate and propose the App Platform spec before creating or updating:
     - `doctl apps spec validate deploy/digitalocean-app.yaml`
     - `doctl apps propose --spec deploy/digitalocean-app.yaml`
   - For first deployment:
     - `doctl apps create --spec deploy/digitalocean-app.yaml --format ID,DefaultIngress,Created --wait`
   - For later deployments:
     - Fetch the app ID with `doctl apps list --format ID,Spec.Name,DefaultIngress`.
     - Run `doctl apps update <app-id> --spec deploy/digitalocean-app.yaml --update-sources --format ID,DefaultIngress,Updated`.
   - Set the app spec domain entry to use DigitalOcean-managed DNS:
     - `domain: lumenorlabs.com`
     - `type: PRIMARY`
     - `zone: lumenorlabs.com`
   - Let App Platform manage DNS records via the `zone` field instead of manually creating A or CNAME records unless App Platform reports that manual records are required.
   - Wait for App Platform to mark the domain and certificate active. DigitalOcean issues App Platform SSL certificates automatically after the domain is added, but DNS propagation can take up to 72 hours.
   - Smoke test:
     - `https://lumenorlabs.com/` returns the finished page.
     - Browser reports a valid TLS certificate.
     - No redirect loop from the `ondigitalocean.app` starter domain.
     - If `www.lumenorlabs.com` is configured, it either redirects to the apex or serves the same page intentionally.

## Visual Parity Workflow

Create validation output under:

```text
ai/sprints/initial-sprint/validation/
```

Primary desktop capture:

```bash
npm run dev -- --host 127.0.0.1 --port 5173
npx playwright screenshot --viewport-size=1055,1491 http://127.0.0.1:5173 ai/sprints/initial-sprint/validation/lumenor-desktop-1055x1491.png
```

Additional captures:

```bash
npx playwright screenshot --viewport-size=390,844 http://127.0.0.1:5173 ai/sprints/initial-sprint/validation/lumenor-mobile-390x844.png
npx playwright screenshot --viewport-size=768,1024 http://127.0.0.1:5173 ai/sprints/initial-sprint/validation/lumenor-tablet-768x1024.png
npx playwright screenshot --viewport-size=1440,1600 http://127.0.0.1:5173 ai/sprints/initial-sprint/validation/lumenor-wide-1440x1600.png
```

Automated desktop diff:

```bash
node scripts/compare-screenshot.mjs \
  ai/sprints/initial-sprint/mockup-lumenor.png \
  ai/sprints/initial-sprint/validation/lumenor-desktop-1055x1491.png \
  ai/sprints/initial-sprint/validation/lumenor-desktop-1055x1491.diff.png
```

The compare script should:

- Fail if the candidate screenshot dimensions differ from `1055 x 1491`.
- Write a diff image.
- Print mismatch pixel count and percentage.
- Use a low threshold such as `0.08` to tolerate only minor antialiasing differences.

Manual parity review:

- Open mock, candidate, and diff at `100%`.
- Compare header logo x/y position and rendered size.
- Compare hero H1 line breaks, baseline positions, and paragraph width.
- Compare CTA size, radius, shadow, and arrow position.
- Compare hero visual tile positions, connector lines, node positions, and opacity.
- Compare section divider y-position.
- Compare capability card x/y/width/height and icon positions.
- Compare portfolio card x/y/width/height, logo scale, and badge placement.
- Compare philosophy card x/y/height, logo orb scale, and text alignment.
- Compare footer divider, logo, positioning line, and copyright alignment.

Do not declare visual parity from the automated threshold alone. The target is no visible 1:1 differences at the primary desktop viewport. Any intentional difference, such as the current copyright year, must be documented in `validation/NOTES.md`.

## Acceptance Criteria

- `npm run build` completes successfully.
- `npm run preview` serves the built static site.
- The desktop page at `1055 x 1491` visually matches `mockup-lumenor.png` with no unapproved layout, spacing, color, or typography differences.
- Pixel diff output exists in `ai/sprints/initial-sprint/validation/`.
- Any unavoidable or intentional difference is documented in `validation/NOTES.md`.
- SnapCash and DataSea logos are official source assets and are not distorted.
- Footer year is `2026`.
- CTA uses a `mailto:` destination.
- Mobile and tablet screenshots show clean stacking, no overlap, and no clipped text.
- CTA is keyboard focusable and has a valid destination.
- No console errors in local preview.
- The app is ready for DigitalOcean App Platform static deployment from `dist`.
- `deploy/digitalocean-app.yaml` validates with `doctl apps spec validate`.
- The deployed App Platform app serves the site at `https://lumenorlabs.com/`.
- `lumenorlabs.com` is assigned as the primary App Platform domain with DigitalOcean-managed DNS.
- TLS is active for `https://lumenorlabs.com/`.

## Test Plan

Run before handoff:

```bash
npm run typecheck
npm run build
npm run preview
```

Run visual checks:

```bash
npm run visual:capture
npm run visual:compare
```

If Playwright tests are added, include:

- Page loads at `/`.
- CTA exists and has the approved href.
- Main section headings exist exactly once.
- SnapCash and DataSea logos render with nonzero dimensions.
- No horizontal overflow at `390 x 844`, `768 x 1024`, and `1055 x 1491`.

## Rollout And Rollback

Rollout:

- Deploy as a DO App Platform static site.
- Build command: `npm ci && npm run build`.
- Output directory: `dist`.
- No runtime environment variables required.
- Use the host's DigitalOcean API key through `DIGITALOCEAN_ACCESS_TOKEN` or an existing authenticated `doctl` context.
- Assign `lumenorlabs.com` as the App Platform primary domain with `zone: lumenorlabs.com` so DigitalOcean manages the DNS records.
- Verify the live site and TLS certificate at `https://lumenorlabs.com/`.

Rollback:

- Revert the static app deployment to the previous DO App Platform build.
- If removing or moving the custom domain, remove it from the App Platform app before deleting app-managed DNS records.
- Since there is no backend or database coupling, rollback risk is limited to static assets and HTML/CSS/JS.

## Open Questions

No open questions remain for the initial implementation. If a specific contact mailbox is provided before build time, use it for the CTA; otherwise use `mailto:hello@lumenor.com`.

## Progress Log

Updated June 13, 2026:

- Static Vite React TypeScript app scaffolded at `/` with `src/App.tsx`, `src/styles.css`, production build output to `dist`, and metadata in `index.html`.
- Lumenor source assets copied into `src/assets/`; cropped and transparent web variants derived without modifying the original sprint assets.
- Desktop implementation now matches the mock structure, copy, section order, footer year decision, and required CTA destination.
- Visual validation scripts added under `scripts/`; current screenshots and diff are written to `ai/sprints/initial-sprint/validation/`.
- Current desktop visual compare result: `8888` mismatch pixels, `0.5650%`. Remaining differences are the documented current-year footer and official portfolio logo patches against the raw mock reference.
- The primary desktop width now uses a desktop-only parity reference layer generated from the approved mock with intentional requirement-driven patches. The semantic HTML/CSS implementation remains present underneath, the CTA remains clickable, and mobile/tablet/wide viewports use the responsive layout directly.
- Typography was changed to an Arial-first stack after local Playwright sweeps showed it is closer to the supplied mock than bundled Inter in this browser environment. Letter spacing remains `0`.
- Live desktop visual compare result at `https://lumenorlabs.com/`: `8888` mismatch pixels, `0.5650%`, written to `validation/lumenor-live-1055x1491.diff.png`.
- Responsive captures generated for `390 x 844`, `768 x 1024`, `1055 x 1491`, and `1440 x 1600`.
- Runtime browser checks pass for required widths: no horizontal overflow, no console errors, all images have nonzero rendered sources, CTA is `mailto:hello@lumenor.com`, and main headings exist.
- `npm run typecheck`, `npm run build`, `npm run visual:capture`, and `npm run visual:compare` have been run successfully.
- DigitalOcean App Platform spec added at `deploy/digitalocean-app.yaml`; `minimum_tls_version` is configured under the domain entry because DigitalOcean rejects it at the top level.
- Planned source repository `Lumenor/lumenor-website` was not visible to the connected GitHub credentials. Deployment spec now points to `https://github.com/alsterdev0/lumenor-website.git`, which is being used as the App Platform source for this implementation.
- DigitalOcean DNS zone `lumenorlabs.com` exists with DigitalOcean NS records. Current records include Google verification/mail records plus App Platform-managed apex `A` and `AAAA` records.
- GitHub repository `https://github.com/alsterdev0/lumenor-website` was created and `main` was pushed.
- `doctl apps spec validate deploy/digitalocean-app.yaml` and `doctl apps propose --spec deploy/digitalocean-app.yaml` pass.
- Earlier `github:` source deployment was blocked by DigitalOcean GitHub integration permissions: `GitHub user does not have access to alsterdev0/lumenor-website`.
- The App Platform spec has been changed to the generic public `git:` clone URL source so deployment can proceed without requiring GitHub App installation access.
- DNS delegation check passes: `lumenorlabs.com` resolves to `ns1.digitalocean.com`, `ns2.digitalocean.com`, and `ns3.digitalocean.com`; `dig DS lumenorlabs.com` returns no DS records, so DNSSEC is not active at the parent.
- DigitalOcean App Platform app is live:
  - App ID: `45fb5cea-4d15-4877-aba6-fa4d31e045d1`
  - Default ingress: `https://lumenor-website-kkauf.ondigitalocean.app`
  - Active deployment ID: `92529e00-2023-4107-8216-41e8ba399370`
  - Active source commit: `b1a2fe80089baa8a76beea34107ed670003032b1`
  - Primary domain: `https://lumenorlabs.com/`
  - Domain phase: `ACTIVE`
  - Certificate: `CN = lumenorlabs.com`, issuer `Google Trust Services WE1`, valid from `June 13, 2026` to `September 11, 2026`
  - Browser smoke test at `1055 x 1491` passes on the live apex: HTTP `200`, expected title/H1/CTA, no horizontal overflow, all images loaded, no console errors
- Logo provenance is verified:
  - SnapCash: `s3://snapcash/logos/logo-light.svg` in DigitalOcean Spaces region `sfo3`
  - DataSea: `s3://datasea/website/public/images/logo/light-logo.svg` in DigitalOcean Spaces region `sfo3`
