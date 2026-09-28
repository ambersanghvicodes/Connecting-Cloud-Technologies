# connectingcloud.co

Marketing site for Connecting Cloud Technologies. React + Vite + Tailwind, deployed to GitHub Pages.

## Develop

```bash
npm install
npm run dev
```

## Configure

Copy `.env.example` to `.env.local` and fill in:

| Variable | Purpose | If unset |
|---|---|---|
| `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_PUBLIC_KEY` | Contact form delivery via EmailJS. Template variables: `name`, `organization`, `role`, `email`, `interest`, `message`. | Form opens the visitor's email app addressed to info@connectingcloud.co |
| `VITE_BOOKING_URL` | Calendly / Cal.com link for "Book a working session" buttons | Buttons go to `/contact` with the interest preselected |
| `VITE_PLAUSIBLE_DOMAIN` | Plausible analytics (cookie-free). Custom events: `Book Click`, `Sprint Click`, `Contact Submit` | No analytics |

## Deploy

```bash
npm run deploy
```

Builds with the values in `.env.local` and publishes `dist/` to the `gh-pages` branch.

The build writes a static `index.html` for every route (with that page's title, description and canonical URL), plus `404.html`, `sitemap.xml` and `robots.txt`. See `vite.config.js`.

## Where things live

- `src/data/content.js`: services, pharma proof points, team, approach, sprint content
- `src/data/routes.js`: page titles and descriptions (used at runtime and at build time)
- `src/data/articles.jsx`: Insights articles
- `src/pages/`: one component per page; `src/App.jsx` maps paths to pages
- `src/lib/router.js`: minimal path router; `src/components/Link.jsx` for internal links
