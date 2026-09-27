# Mariano Pividori — portfolio

A bilingual professional portfolio focused on customer support, operations, interpretation and technical problem solving. Built with React and CSS.

## Run locally

```bash
npm ci
npm start
```

Use `npm run build` to create the production bundle. Configure the `REACT_APP_*` Firebase environment variables in Vercel (or `.env.local` for local development) to load the `proyectos` collection. The page still renders selected projects and their known live URLs when Firebase is unavailable.

## Content

English and Spanish copy lives in `src/App.jsx`. The site starts in English; the header button switches languages. The projects can load from the same Firestore `proyectos` collection as the original site; selected projects retain optimized thumbnails, updated bilingual copy, and verified fallback demo URLs from the original deployment. Cards link to a live demo when available and show a separate GitHub link when available. Admin Gastos has no public live demo in its original Firebase record, and its credentials and private code are not published here.
