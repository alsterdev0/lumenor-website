# Lumenor Website Style Guide

This style guide defines the visual system for the Lumenor single-page website shown in the reference mockup. The look should feel clean, modern, restrained, and premium without becoming overly corporate.

## 1. Brand Feel

Lumenor should feel like a polished technology holdings company: calm, reliable, technical, and long-term focused.

**Design keywords:** minimal, precise, spacious, quiet confidence, operational excellence, modern infrastructure, soft depth.

**Avoid:** loud gradients, heavy shadows, saturated backgrounds, playful illustrations, crowded layouts, generic startup neon styling, excessive animation.

---

## 2. Color Palette

The site is built around a very light neutral background, deep navy typography, soft blue-gray borders, and subtle blue accents.

### Core Colors

| Token | Hex | Usage |
|---|---:|---|
| `--color-navy-950` | `#0B1D3D` | Primary text, logo, dark buttons |
| `--color-navy-900` | `#10264A` | Headings, hero title |
| `--color-navy-800` | `#172E55` | Secondary dark UI elements |
| `--color-slate-700` | `#3F4C66` | Body copy |
| `--color-slate-500` | `#6D7891` | Eyebrows, muted metadata |
| `--color-slate-300` | `#DDE3EE` | Borders and dividers |
| `--color-slate-200` | `#E8EDF5` | Card borders, icon circles |
| `--color-slate-100` | `#F3F6FB` | Soft section background |
| `--color-white` | `#FFFFFF` | Cards and main page background |

### Accent Colors

| Token | Hex | Usage |
|---|---:|---|
| `--color-blue-500` | `#2387E6` | DataSea badge/accent |
| `--color-blue-100` | `#E7F2FF` | Data infrastructure badge background |
| `--color-green-500` | `#31C48D` | SnapCash brand accent |
| `--color-green-100` | `#DDF8EA` | Rewards badge background |

### Recommended CSS Variables

```css
:root {
  --color-navy-950: #0b1d3d;
  --color-navy-900: #10264a;
  --color-navy-800: #172e55;

  --color-slate-700: #3f4c66;
  --color-slate-500: #6d7891;
  --color-slate-300: #dde3ee;
  --color-slate-200: #e8edf5;
  --color-slate-100: #f3f6fb;

  --color-white: #ffffff;

  --color-blue-500: #2387e6;
  --color-blue-100: #e7f2ff;

  --color-green-500: #31c48d;
  --color-green-100: #ddf8ea;
}
```

---

## 3. Typography

Use a clean geometric sans-serif with strong readability and a premium technology feel.

**Recommended fonts:**
1. `Inter`
2. `Satoshi`
3. `Avenir Next`
4. `SF Pro Display`
5. System fallback: `-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`

### Font Stack

```css
body {
  font-family: Inter, "Avenir Next", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}
```

### Type Scale

| Element | Size | Line Height | Weight | Letter Spacing |
|---|---:|---:|---:|---:|
| Hero H1 | `56px` desktop / `40px` mobile | `1.08` | `700` | `-0.04em` |
| Section H2 | `28px` desktop / `24px` mobile | `1.2` | `650` | `-0.03em` |
| Card Title | `17px` | `1.3` | `650` | `-0.01em` |
| Body Large | `18px` | `1.75` | `400` | `0` |
| Body | `15px` | `1.65` | `400` | `0` |
| Small | `13px` | `1.45` | `500` | `0` |
| Eyebrow | `12px` | `1.2` | `700` | `0.32em` |

### Typography Rules

- Use deep navy for all major headings.
- Body copy should be muted but not washed out.
- Eyebrow labels should be uppercase, letter-spaced, and centered in most sections.
- Keep line lengths comfortable: approximately `520px–680px` for paragraph text.
- Avoid all-caps for anything except small section labels.

---

## 4. Layout System

The page uses generous whitespace, centered sections, and a constrained max width.

### Container

```css
.container {
  width: min(100% - 48px, 1120px);
  margin-inline: auto;
}
```

On mobile:

```css
.container {
  width: min(100% - 32px, 1120px);
}
```

### Section Spacing

| Area | Desktop | Mobile |
|---|---:|---:|
| Header padding | `40px 0` | `28px 0` |
| Hero section | `96px 0 110px` | `64px 0 72px` |
| Standard section | `72px 0` | `56px 0` |
| Footer | `36px 0` | `32px 0` |

### Grid Rules

- Hero: two-column layout, copy on left, visual system illustration on right.
- Capabilities: three equal cards on desktop, stacked on mobile.
- Portfolio: two equal cards on desktop, stacked on mobile.
- Philosophy card: horizontal split on desktop, stacked on mobile.
- Footer: three columns on desktop, stacked on mobile.

```css
.hero-grid {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 72px;
  align-items: center;
}

.card-grid-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}

.card-grid-2 {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 420px));
  justify-content: center;
  gap: 28px;
}
```

---

## 5. Backgrounds and Dividers

The overall page background should remain near white with very subtle cool tones.

```css
body {
  background:
    radial-gradient(circle at 78% 12%, rgba(36, 88, 160, 0.08), transparent 34%),
    linear-gradient(180deg, #ffffff 0%, #f8fafd 54%, #ffffff 100%);
  color: var(--color-slate-700);
}
```

Use fine dividers between major page regions.

```css
.section-divider {
  border-top: 1px solid rgba(16, 38, 74, 0.11);
}
```

Dividers should be subtle and never black.

---

## 6. Header

The header is simple: logo left, no main navigation, no secondary action. The site is a single landing page, so the header should stay quiet.

```css
.site-header {
  padding: 40px 0 0;
}

.logo-lockup {
  display: inline-flex;
  align-items: center;
  gap: 12px;
}

.logo-mark {
  width: 42px;
  height: 42px;
}

.logo-wordmark {
  font-size: 28px;
  font-weight: 500;
  color: var(--color-navy-950);
  letter-spacing: -0.03em;
}
```

### Header Rules

- Logo should sit comfortably in the top-left.
- Do not add navigation unless the page grows beyond one landing page.
- Avoid sticky header behavior for this version.

---

## 7. Hero Section

The hero is the emotional anchor of the page. It should be spacious, left-aligned, and calm.

### Hero Copy

```css
.hero-title {
  max-width: 620px;
  font-size: clamp(40px, 5vw, 64px);
  line-height: 1.08;
  font-weight: 700;
  letter-spacing: -0.045em;
  color: var(--color-navy-950);
}

.hero-subtitle {
  max-width: 560px;
  margin-top: 28px;
  font-size: 18px;
  line-height: 1.75;
  color: var(--color-slate-700);
}
```

### Hero Button

The primary CTA is a dark navy rounded rectangle with a simple arrow.

```css
.button-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
  height: 58px;
  padding: 0 28px;
  margin-top: 36px;
  border-radius: 10px;
  background: linear-gradient(180deg, #10264a 0%, #0b1d3d 100%);
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  box-shadow:
    0 14px 30px rgba(11, 29, 61, 0.22),
    inset 0 1px 0 rgba(255, 255, 255, 0.12);
}

.button-primary:hover {
  transform: translateY(-1px);
  box-shadow:
    0 18px 34px rgba(11, 29, 61, 0.26),
    inset 0 1px 0 rgba(255, 255, 255, 0.14);
}
```

### Hero Visual

The right-side visual should show a soft technology network: connected nodes, floating icon tiles, and a central Lumenor logo tile.

Visual treatment:

- White and pale blue-gray surface.
- Thin connector lines.
- Small node points.
- Soft shadows.
- Rounded square icon tiles.
- Central tile in navy with white logo.
- Icons should represent development, distribution, analytics, users, and global reach.
- Keep opacity low so the hero copy remains the focus.

---

## 8. Cards

Cards use white surfaces, subtle borders, rounded corners, and very soft shadows.

```css
.card {
  background: rgba(255, 255, 255, 0.86);
  border: 1px solid rgba(16, 38, 74, 0.11);
  border-radius: 16px;
  box-shadow:
    0 18px 44px rgba(16, 38, 74, 0.06),
    inset 0 1px 0 rgba(255, 255, 255, 0.75);
}
```

### Capability Cards

```css
.capability-card {
  display: grid;
  grid-template-columns: 72px 1fr;
  gap: 22px;
  min-height: 156px;
  padding: 28px 30px;
  align-items: center;
}

.icon-circle {
  display: grid;
  place-items: center;
  width: 62px;
  height: 62px;
  border-radius: 999px;
  background: var(--color-slate-100);
  color: var(--color-navy-950);
}
```

Capability cards should use simple line icons, not filled illustrations.

### Portfolio Cards

```css
.portfolio-card {
  min-height: 210px;
  padding: 42px 64px;
}

.portfolio-logo {
  height: 58px;
  margin-bottom: 26px;
}

.portfolio-description {
  max-width: 310px;
  font-size: 15px;
  line-height: 1.65;
  color: var(--color-slate-700);
}
```

Portfolio cards should let the brand logos breathe. Do not crowd them with too much copy.

### Philosophy Card

```css
.philosophy-card {
  display: grid;
  grid-template-columns: 220px 1fr;
  align-items: center;
  gap: 42px;
  padding: 34px 68px;
  border-radius: 18px;
  background:
    radial-gradient(circle at 10% 50%, rgba(36, 88, 160, 0.08), transparent 34%),
    rgba(255, 255, 255, 0.82);
}

.philosophy-logo-orb {
  display: grid;
  place-items: center;
  width: 150px;
  height: 150px;
  border-radius: 999px;
  background: #ffffff;
  box-shadow: 0 20px 48px rgba(16, 38, 74, 0.10);
}
```

---

## 9. Badges

Badges should be small, soft, and brand-specific.

```css
.badge {
  display: inline-flex;
  align-items: center;
  height: 30px;
  padding: 0 16px;
  border-radius: 9px;
  font-size: 13px;
  font-weight: 600;
}

.badge-green {
  background: var(--color-green-100);
  color: #1f9f70;
}

.badge-blue {
  background: var(--color-blue-100);
  color: #1d72c9;
}
```

---

## 10. Icons

Use thin, rounded line icons.

Recommended icon style:

- Stroke width: `1.75px–2px`
- Rounded caps and joins
- Navy color
- No filled icons
- Icons placed inside pale circular backgrounds
- Keep icons simple and immediately recognizable

Suggested icons:

| Concept | Icon |
|---|---|
| Development | Code brackets |
| Distribution | Globe |
| Operations | Gear |
| Analytics | Bar chart |
| Users | People |
| Web reach | Globe/network |

---

## 11. Shadows and Borders

Shadows should be soft and low-contrast. The site should feel dimensional, not heavy.

```css
--shadow-card: 0 18px 44px rgba(16, 38, 74, 0.06);
--shadow-button: 0 14px 30px rgba(11, 29, 61, 0.22);
--shadow-orb: 0 20px 48px rgba(16, 38, 74, 0.10);
--border-soft: 1px solid rgba(16, 38, 74, 0.11);
```

Avoid hard black shadows.

---

## 12. Border Radius

| Element | Radius |
|---|---:|
| Buttons | `10px` |
| Standard cards | `16px` |
| Philosophy panel | `18px` |
| Icon circles | `999px` |
| Floating icon tiles | `18px–22px` |

---

## 13. Motion

Motion should be minimal and refined.

Recommended transitions:

```css
.transition-standard {
  transition:
    transform 180ms ease,
    box-shadow 180ms ease,
    border-color 180ms ease,
    background 180ms ease;
}
```

Acceptable motion:

- Button hover lifts `1px`.
- Card hover lifts `2px`.
- Hero icon tiles can have a very slow floating animation.
- No bouncy easing.
- No flashy reveal animations.

---

## 14. Footer

Footer should be quiet and functional.

```css
.site-footer {
  padding: 36px 0;
  border-top: 1px solid rgba(16, 38, 74, 0.11);
}

.footer-inner {
  display: grid;
  grid-template-columns: 180px 1fr auto;
  gap: 40px;
  align-items: center;
}

.footer-copy,
.footer-meta {
  font-size: 14px;
  line-height: 1.5;
  color: var(--color-slate-700);
}
```

Footer content should include:

- Lumenor logo lockup
- Short positioning line
- Copyright

Example:

> Building and scaling technology properties that serve millions.

---

## 15. Responsive Behavior

### Tablet

- Hero becomes slightly tighter.
- Reduce hero title to `48px`.
- Reduce hero grid gap to `48px`.
- Cards maintain two columns where possible.

### Mobile

```css
@media (max-width: 760px) {
  .hero-grid,
  .philosophy-card,
  .footer-inner {
    grid-template-columns: 1fr;
  }

  .card-grid-3,
  .card-grid-2 {
    grid-template-columns: 1fr;
  }

  .hero-visual {
    order: -1;
    max-width: 420px;
    margin-inline: auto;
  }

  .capability-card {
    grid-template-columns: 60px 1fr;
    padding: 24px;
  }

  .portfolio-card {
    padding: 32px;
  }

  .philosophy-card {
    padding: 32px;
    text-align: left;
  }
}
```

Mobile rules:

- Keep generous spacing, but reduce vertical padding.
- Hero title should remain bold and clear.
- Do not shrink card padding too aggressively.
- Stack portfolio cards vertically.
- Keep CTA full width only on very narrow screens.

---

## 16. Content Voice

The copy should be clear, restrained, and operationally focused.

### Voice Principles

- Confident but not hype-driven.
- Specific but not overly technical.
- Long-term oriented.
- Built around development, distribution, operations, and ownership.
- Avoid buzzwords like “revolutionary,” “disruptive,” “10x,” or “AI-powered” unless genuinely relevant.

### Example Copy Style

Good:

> We build scalable, user-centric products with modern technology and a focus on quality.

Avoid:

> We revolutionize the digital ecosystem with cutting-edge synergies and next-generation innovation.

---

## 17. Page Structure

Recommended single-page order:

1. Header with logo
2. Hero section with CTA
3. Capabilities section
4. Portfolio section
5. Philosophy section
6. Footer

### Section Label Pattern

Each section label should be:

```css
.section-eyebrow {
  margin-bottom: 14px;
  font-size: 12px;
  line-height: 1.2;
  font-weight: 700;
  letter-spacing: 0.32em;
  text-transform: uppercase;
  color: var(--color-slate-500);
}
```

Examples:

- `WHAT WE DO`
- `OUR PORTFOLIO`
- `OUR PHILOSOPHY`

---

## 18. Implementation Checklist

Before launch, confirm:

- The page has no top navigation unless there are multiple pages.
- The hero CTA says `Get In Touch`.
- Cards have consistent border radius and shadow.
- All text uses the same sans-serif family.
- Section dividers are subtle.
- Portfolio cards only show SnapCash and DataSea.
- SnapCash and DataSea logos are not redrawn or distorted.
- The footer copyright year is current.
- Mobile layout stacks cleanly.
- The design remains mostly white, navy, and pale blue-gray.
