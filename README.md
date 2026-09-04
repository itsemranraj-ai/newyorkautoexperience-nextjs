# The New York Auto Experience Inc. — Next.js React Application

A modern, high-performance **Next.js 14 (App Router) & React 18** web application built with a **Zero-Gradient Solid Aesthetic** (Petersen Automotive Museum & Henry Ford Museum inspired) for **The New York Auto Experience Inc.** (501(c)(3) Nonprofit Public Charity, EIN: `922822778`).

---

## 🚀 Quick Start (Local Development)

The dependencies are already installed. You can start the development server immediately:

```bash
cd "C:\Users\Al Emran\Desktop\newyorkautoexperience-nextjs"
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🛠️ Build for Production

```bash
npm run build
npm run start
```

All 5 core routes are pre-rendered into ultra-fast, zero-latency static HTML with hydration.

---

## 📂 Project Architecture

```
newyorkautoexperience-nextjs/
├── public/
│   ├── logo.png             # Approved Version 3 Monogram Logo (Transparent)
│   ├── future.jpg           # Sharp Yellow Supercar Hero Visual
│   ├── racing.jpg           # Classic Heritage Racer Visual
│   └── history.jpg          # Automotive Museum Showcase Visual
│
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root Layout (Fonts, Header, Footer, SEO MetadataBase)
│   │   ├── globals.css      # 100% Zero-Gradient Solid CSS System (1300px Max-Width)
│   │   ├── page.tsx         # Home Landing Page
│   │   ├── mission/
│   │   │   └── page.tsx     # Dedicated Our Mission & Dual Charter Page
│   │   ├── exhibits/
│   │   │   └── page.tsx     # Dedicated 12 Interactive Exhibits Catalog Page
│   │   └── donate/
│   │       └── page.tsx     # Dedicated Donation Portal with Live Zeffy Integration
│   │
│   └── components/
│       ├── Header.tsx           # Sticky Header with Mobile Burger Navigation & Announcement Bar
│       ├── Footer.tsx           # Comprehensive Institutional 501(c)(3) Footer
│       ├── Hero.tsx             # 2-Column Responsive Hero with Plus Jakarta Sans & Badges
│       ├── AnimatedCounters.tsx # Real-Time Dynamic Counting KPI Section (2M+ Students, $15M Impact)
│       ├── ExhibitShowcase.tsx  # 12 Exhibits with Filter Tabs & Modal Detail Guide
│       ├── DualCharterSection.tsx # Synergy between Commercial Center & Nonprofit Charity
│       ├── StemPortal.tsx       # Interactive School Field Trip Booking Engine
│       └── DonationEngine.tsx   # Interactive $25–$250 Tiers + Live Zeffy Checkout Link
│
├── package.json
├── tsconfig.json
└── next.config.mjs
```

---

## 🌐 Headless CMS Integration Guide

Because this application is built on Next.js 14 App Router, you can easily connect any Headless CMS (e.g. your existing WordPress site as a Headless backend, Sanity, or Strapi):

1. **WordPress REST API**:
   You can fetch dynamic exhibit posts or news directly using native Next.js `fetch()`:
   ```typescript
   // Example in src/app/exhibits/page.tsx
   async function getExhibits() {
     const res = await fetch('https://newyorkautoexperience.org/wp-json/wp/v2/posts?categories=exhibits', {
       next: { revalidate: 3600 } // ISR: Incremental Static Regeneration every hour
     });
     return res.json();
   }
   ```
2. **Environment Variables**:
   Add `.env.local`:
   ```env
   NEXT_PUBLIC_SITE_URL=https://newyorkautoexperience.org
   NEXT_PUBLIC_WORDPRESS_API=https://newyorkautoexperience.org/wp-json
   ```

---

## 🚢 1-Click Deployment (Vercel or Cloudflare)

### Deploying to Vercel:
1. Initialize a git repository in this folder:
   ```bash
   git init
   git add .
   git commit -m "Initial Next.js Auto Experience commit"
   ```
2. Push to GitHub, GitLab, or Bitbucket.
3. Import the repository in [Vercel](https://vercel.com) & click **Deploy**. Vercel automatically detects Next.js with zero configuration.

---

## 🎨 Design System Compliance
- **Strict Zero-Gradients**: 100% Solid Colors (Obsidian `#0B0E14`, Slate `#121824`, Crimson `#E11D48`, Royal Blue `#2563EB`).
- **Container Standard**: Strict `1300px` max-width.
- **Typography**: Display: *Plus Jakarta Sans* (800 / 700), Body: *Inter* (400 / 500 / 600).
- **Zeffy Integration**: Embed URL and direct link `https://www.zeffy.com/embed/donation-form/donate-to-make-a-difference-14593?donate=true`.
