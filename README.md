# connectingcloud.co

Marketing site for Connecting Cloud Technologies. React + Vite + Tailwind, deployed to GitHub Pages at https://www.connectingcloud.co.

## Develop

```bash
npm install
npm run dev
```

## Configure

Copy `.env.example` to `.env` and fill in:

| Variable | Purpose | If unset |
|---|---|---|
| `VITE_BRIEFING_SCRIPT_URL` | Google Apps Script web app that stores contact form submissions in a sheet and emails info@connectingcloud.co (setup below) | Form shows an error asking the visitor to try again |
| `VITE_PLAUSIBLE_DOMAIN` | Plausible analytics (cookie-free) | No analytics |

### Contact form: Google Sheet + email via Apps Script

1. Create a Google Sheet with a tab named `Briefings` and headers `Submitted At`, `Name`, `Organization`, `Email`, `Message` in row 1.
2. In the sheet, open **Extensions > Apps Script** and replace the code with:

   ```js
const SHEET_NAME = 'Briefings';
const MAIL_TO = 'info@connectingcloud.co';

function doPost(e) {
  const params = e.parameter || {};
  const name = String(params.name || '').trim();
  const organization = String(params.organization || '').trim();
  const email = String(params.email || '').trim();
  const message = String(params.message || '').trim();

  if (!name || !organization || !email) {
    return ContentService.createTextOutput('Missing required fields');
  }

  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
  sheet.appendRow([new Date(), name, organization, email, message]);

  MailApp.sendEmail({
    to: MAIL_TO,
    replyTo: email,
    subject: 'New architecture briefing: ' + organization,
    body: [
      'New architecture briefing request',
      '',
      'Name: ' + name,
      'Organization: ' + organization,
      'Email: ' + email,
      '',
      'Message:',
      message || '(No message provided)',
    ].join('\n'),
  });

  return ContentService.createTextOutput('OK');
}
   ```

3. **Deploy > New deployment > Web app**, execute as **Me**, access **Anyone**. Copy the URL ending in `/exec` into `VITE_BRIEFING_SCRIPT_URL`.

The form sends `name`, `organization`, `email` and `message`.

## Deploy

```bash
npm run deploy
```

Builds with the values in `.env` and publishes `dist/` to the `gh-pages` branch, which GitHub Pages serves.

The build writes a static `index.html` for every route (with that page's title, description and canonical URL), plus `404.html`, `sitemap.xml` and `robots.txt`. See `vite.config.js`. Old hash URLs (`/#/cases`, `/#/sap-cpq-implementation`, …) redirect to the same pages at real paths (`src/main.jsx`).

## Where things live

- `src/App.jsx`: the site: navigation, pages, sections and the contact form
- `src/data/content.js`: capability pages (SAP S/4HANA, Salesforce, AI & Automation, Managed Services) and industry pages
- `src/data/routes.js`: every page's URL, title, description and keywords (used at runtime and at build time), plus redirects for retired URLs
