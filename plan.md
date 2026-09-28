# Website Plan: Align connectingcloud.co with the Enterprise Applications Deck

**Goal:** A prospect who gets the capabilities deck (e.g. Biophore) and then visits connectingcloud.co should find the same company the deck describes, trust what they read, and have one clear next step: book the working session / ERP Decision Sprint.

**Source deck:** `ConnectingCloud_Biophore_Enterprise_Applications_Capabilities.pdf` (10 slides, September 2026)

---

## Status (2026-09-28)

**Done in code:** Phase 0 (except items that need your accounts), real page URLs, new home page, the SAP / Salesforce / AI & Automation / Managed Services pages, Pharma, Approach, ERP Decision Sprint, Team, Insights (real byline, no invented authors or dates), Contact and Privacy pages. Also a static HTML file per route, sitemap and robots.txt, and the `predeploy` script fix.

**Still needed from you:**
- [ ] Fill `.env.local` (EmailJS, booking link, Plausible). Until then the form falls back to the visitor's email app.
- [ ] Team members approve their names and bios on `/team` before deploying. Add photos and LinkedIn links.
- [ ] Confirm you're comfortable naming the clients on the home page and `/industries/pharma` (they're shown as text, with the deck's disclaimers).
- [ ] Optional: a 1200×630 share image to replace the logo in `og:image`.
- [ ] Deck fixes (section 6).

---

## 1. The core problem

The deck and the site describe two different companies.

| | Deck | Website today |
|---|---|---|
| Positioning | Enterprise applications partner: SAP, Salesforce, AI & Automation, Managed Services | Small Lead-to-Cash / CPQ / AVC shop |
| SAP scope | S/4HANA FI/CO, MM, SD, PP/PP-PI, QM, EWM, PM, PS, TM; BTP/CPI, SAC, MDG; CPQ, VC/AVC | AVC, CPQ, BTP/CPI only |
| Industry | Pharma / life sciences proof points (validated SAP, CSV, IQ/OQ/PQ) | None |
| Team | Named senior leads and delivery pods | Made-up blog authors (Elena Vance, Marcus Thorne, Sarah Jenkins) |
| Proof | Team experience with an honest disclaimer about SI / previous-employer delivery | Invented case studies with round metrics |
| Approach | SAP Activate with a decision gate | "CCT Methodology" (Clean Core Audit, etc.) |
| Support | Hypercare, L2/L3, AMC, 8x5 / extended / 24x7 | Not mentioned |
| Call to action | Working session + three-week decision sprint | "Book Architecture Briefing" (form is broken) |

A pharma buyer who thinks like a Quality/CSV team will notice the gap. The first job is to make sure the site doesn't undercut the deck. Adding new content comes second.

---

## 2. Phase 0: Fix risks before the deck goes out (about 1–2 days)

### 2.1 Broken items
- [ ] **Contact form sends nothing.** EmailJS still uses placeholder IDs (`'YOUR_SERVICE_ID'`, `'YOUR_TEMPLATE_ID'`, `'YOUR_PUBLIC_KEY'`) in `src/App.jsx` (`handleContactSubmit`). Connect EmailJS or Formspree with real accounts and test it end to end.
- [ ] **Add a calendar link** (Cal.com or Calendly) next to the form. A booked meeting converts better than a form.
- [ ] **"Download Paper" button** (`ProcessTeaser`) does nothing. Remove it, or link a real PDF.
- [ ] **"Learn How" button** (`L2CExplorerView`) does nothing. Remove it, or link a relevant page.
- [ ] **LinkedIn icon isn't a link.** The `href` is set on the `FaLinkedinIn` icon itself. Wrap it in an `<a target="_blank" rel="noopener">`.
- [ ] **Privacy Policy / Terms** are plain text spans. Add real pages or remove them.
- [ ] **`index.html`:** the tab title is "cct" and `/favicon.svg` may be missing. Add a proper title, a meta description, Open Graph/Twitter share tags with a share image, and the favicon.

### 2.2 Credibility items
- [ ] **Remove or replace the invented case studies** (`CASE_STUDIES`: "Global Industrial Corp", "TechFlow Systems", "Aerospace Dynamics", "Precision Manufacturing" and their metrics).
- [ ] **Replace the made-up blog authors** with real team members, or remove bylines. Update or remove the 2023 dates.
- [ ] **Remove claims you can't back up:** the "Certified Enterprise Cloud Architects" badge, the hero stats (92% / 4-12x / 99.9%), the `PerformanceSection` "92% Operational Efficiency" chart, and "Our architects have implemented similar strategies for Fortune 500 manufacturers".
- [ ] **Remove gimmicks:** "System Status: All Engines Nominal" and the L2C "reduced manual data entry by 85%" quote.

### 2.3 Measurement
- [ ] Add privacy-friendly analytics (e.g. Plausible) so you can see when a prospect visits and which pages they read.
- [ ] Track button clicks: book meeting, submit form, open pharma page, open sprint page.

---

## 3. Phase 1: Make the site match the deck (about 1 week)

### 3.1 Site structure
```
/                        Home
/sap                     SAP practice
/salesforce              Salesforce practice
/ai-automation           AI & Automation practice
/managed-services        Managed Services / AMC
/industries/pharma       Life Sciences & Pharma
/approach                Delivery approach (SAP Activate)
/erp-decision-sprint     Fixed offer (main call to action)
/team                    Leadership & delivery pods
/insights                Articles (real authors)
/contact                 Form + calendar booking
```
- [ ] Add real page URLs with `react-router`. GitHub Pages needs the `404.html` redirect fallback, or pages can be prerendered. This lets you send links like `/industries/pharma` and lets search engines find them.
- [ ] Move page content out of `src/App.jsx` into `src/data/` and `src/pages/`. Remove unused files (root `EnterpriseSystems.js`, `Navbar.js`, `constants.js`, and any `src/components/*` that aren't imported).

### 3.2 Home page
- [ ] **Hero:** "Enterprise Applications & Digital Transformation: architecture-led consulting and hands-on delivery for complex enterprise landscapes." Main button: *Book a working session*. Second button: *See the ERP Decision Sprint*.
- [ ] **Four practice cards:** SAP · Salesforce · AI & Automation · Managed Services.
- [ ] **"Why Connecting Cloud"** strip (deck slide 5): SAP enterprise delivery, manufacturing understanding, pharma-relevant leadership, Salesforce, AI + automation engineering, support coverage.
- [ ] **Industries / experience section** (deck slide 6), with the disclaimer.
- [ ] **Team preview:** 3–4 senior leaders with photos, linking to `/team`.
- [ ] **Delivery path:** Discover → Implement → Go-Live → Support.
- [ ] **Closing call to action:** ERP Decision Sprint.

### 3.3 Practice pages (deck slide 2)
- [ ] **SAP:** S/4HANA modules (FI/CO, MM, SD, PP/PP-PI, QM, EWM, PM, PS, TM, Batch Management). Platform, integration & analytics (BTP Integration Suite/CPI, SAC, MDG, ABAP & Fiori). CPQ, LO-VC/AVC, CPS. Greenfield/brownfield, rollouts, data migration and cutover. Keep the existing CPQ/AVC depth as a sub-section; it's a real differentiator.
- [ ] **Salesforce:** Sales, Service, Experience, Marketing, Data Cloud; Field Service/ServiceMax; Agentforce; MuleSoft; LWC, Apex, OmniStudio; dedicated resource model.
- [ ] **AI & Automation:** AI assistants and agents, Claude/OpenAI workflows, document and knowledge automation, enterprise search, support automation, Python, AI for SAP and Salesforce.
- [ ] **Managed Services** (deck slide 9): hypercare, L2/L3, integration monitoring (CPI/API failures, reconciliation, retry/exception handling, dashboards), enhancements and releases, coverage options (8x5, extended, 24x7 critical, dedicated resource, Hyderabad-based support).

### 3.4 Life Sciences / Pharma page (deck slide 7)
- [ ] Opening: validated SAP delivery for regulated manufacturing.
- [ ] Capabilities: CSV and IQ/OQ/PQ, batch/lot/expiry control, FEFO and shelf-life rules, export and regulated-market compliance, integrating a plant under a new owner, batch costing and multi-market finance.
- [ ] Proof points (Julphar, Mylan/Matrix, MSD, NATCO, Hetero, BDI Pharma, Beckman Coulter), each with "what this program teaches for your plant".
- [ ] **Keep the disclaimer:** "Delivered by members of our team, including through previous employers; not all are Connecting Cloud contracts."
- [ ] Call to action: ERP Decision Sprint.

### 3.5 Approach page (deck slide 8)
- [ ] Replace the "CCT Methodology" with the SAP Activate flow: Discover → Prepare → Explore → **decision gate** → Realize → Deploy → Run.
- [ ] Show what comes out of each phase, and explain that implementation starts only after the target path is approved.

### 3.6 Team page (deck slide 3)
- [ ] **Core leadership:** Prashant Yadav, Pallavi Sanghvi, Satish Kumar Tirupati, Anand Anbarasan. Add photos, years of experience, focus areas and LinkedIn links.
- [ ] **Delivery pods:** FI/CO, MM/Ariba, PP/PP-PI/QM, Technical/BTP, Data Migration & Cutover, Salesforce, AI & Automation, AMS.
- [ ] Get each person's approval before publishing their name and photo.

### 3.7 Experience section
- [ ] List clients by industry as text (deck slide 6) with the disclaimer. Don't use client logos without written permission.

### 3.8 Insights
- [ ] Keep the CPQ/AVC articles, but credit real authors and use real dates.
- [ ] Add 2–3 short pharma/ERP articles that support the sprint offer, e.g. "Extend your current ERP or implement S/4HANA for an acquired plant?", "Planning CSV from day one", "What data really has to move at go-live".

---

## 4. Phase 2: ERP Decision Sprint page (about 2 days)

A general offer page. It must not name any client.

- [ ] **Headline:** "ERP Decision Sprint: a defensible platform decision in three weeks."
- [ ] **Who it's for:** manufacturers and pharma companies choosing between extending their current ERP and implementing S/4HANA, including plants being integrated after an acquisition.
- [ ] **Questions it answers** (deck slide 4, written generally): how soon can we go live, how much data must move, what will implementation cost, what support/AMC model fits, which option fits long term.
- [ ] **Week by week:** Discover → Prepare → Explore (fit-to-standard / fit-gap, walkthroughs of your industry's scenarios, weighted decision criteria).
- [ ] **Deliverable:** decision pack with platform recommendation, roadmap, timeline, cost model and risks.
- [ ] **One button:** book the working session with IT and Quality leads.
- [ ] Link this page from the last slide of the deck and from the follow-up email.

---

## 5. Why not a client-specific page

The deck is marked **Confidential** and describes Biophore's acquisition, licence situation and Focus-vs-SAP decision. None of that should appear on a public URL, even an unlisted one. Instead:
- Build **general** pages (`/industries/pharma`, `/erp-decision-sprint`) and send those links.
- Keep the client-specific detail in the deck and email.
- Reuse the same pages for the next pharma or plant-acquisition prospect.

---

## 6. Deck fixes before sending

- [ ] Slide 3: initials badges don't match the names ("KB" for Vikas Kumar; "SK" for "Satish + Anand").
- [ ] Slide 3: Pallavi Sanghvi's card sits outside the leadership grid.
- [ ] Slide 1: point the URL at the pharma or sprint page instead of the home page, and make it a clickable link.
- [ ] Slide 10: add a direct booking link or contact name under "Recommended next step".
- [ ] Some bullet characters render as "�" in the PDF export (slides 2, 3, 7, 8). Check the fonts and re-export.

---

## 7. Checks before launch

- [ ] Test the contact form and calendar booking end to end from a phone and a desktop.
- [ ] Every button goes somewhere real.
- [ ] Every number and client name on the site can be backed up in a call.
- [ ] Team members have approved their bios and photos.
- [ ] Share previews render correctly on LinkedIn, WhatsApp and email.
- [ ] Analytics shows page views and button clicks.
- [ ] The site loads well on mobile (Lighthouse performance and accessibility ≥ 90).

---

## 8. Order of work

1. Phase 0: all of section 2 (do before the deck is sent)
2. Deck fixes: section 6
3. ERP Decision Sprint page and Pharma page: sections 4 and 3.4 (the pages the prospect will actually open)
4. Real page URLs + new home page: sections 3.1 and 3.2
5. Team, practice, approach and managed services pages
6. Insights refresh
