# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Briefing Form Email + Google Sheets Setup

The "Submit Briefing" form is GitHub Pages friendly. The static React site posts to a Google Apps Script web app, and Apps Script appends the submission to Google Sheets and sends an email to your mailbox.

### 1. Create the Google Sheet

1. Create a Google Sheet with a tab named `Briefings`.
2. Add these headers in row 1: `Submitted At`, `Name`, `Organization`, `Email`, `Message`.
3. Copy the spreadsheet ID from the sheet URL. It is the value between `/d/` and `/edit`.

### 2. Create the Apps Script Web App

1. In the Google Sheet, go to **Extensions > Apps Script**.
2. Replace the default code with this script.
3. Update `MAIL_TO` if you want the briefing email sent somewhere else.

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
1KQZD-QqjfNN1PDQ1z4KlWG5-qY8ox2OVfaVlJn6eLpjQy6ljcM47bAw- #

4. Click **Save**.
5. Click **Deploy > New deployment**.
6. Select **Web app**.
7. Set **Execute as** to **Me**.
8. Set **Who has access** to **Anyone**.
9. Click **Deploy** and approve the requested permissions.
10. Copy the web app URL ending in `/exec`.

### 3. Configure Environment Variables

1. Copy `.env.example` to `.env`.
2. Set `VITE_BRIEFING_SCRIPT_URL` to the Apps Script web app URL.

### 4. Run Locally

Install dependencies:

```bash
npm install
```

Start the site:

```bash
npm run dev
```

### 5. Deploy

For GitHub Pages, set this variable in your build environment before running `npm run build`:

```bash
VITE_BRIEFING_SCRIPT_URL=https://script.google.com/macros/s/your_deployment_id/exec
```

Then deploy the generated `dist` folder as usual.

## GitHub Pages Routing

This site uses hash-based client routing so page links work on GitHub Pages without server rewrites.

Supported URLs:

```text
/#/
/#/cases
/#/l2c
/#/methodology
/#/insights
/#/architecture/avc
/#/architecture/sf
/#/architecture/cpq
/#/architecture/btp
```

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
