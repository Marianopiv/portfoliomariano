# Mariano Pividori — portfolio

A bilingual professional portfolio focused on customer support, operations, interpretation and technical problem solving. Built with React and CSS.

## Run locally

```bash
npm ci
npm start
```

Use `npm run build` to create the production bundle. Configure the existing `REACT_APP_*` Firebase environment variables in Vercel (or `.env.local` for local development) to load the `proyectos` collection. The page still renders the selected projects when Firebase is unavailable.

## Content

English and Spanish copy lives in `src/App.jsx`. The site starts in English; the header button switches languages. The projects and their live URLs come from the same Firestore `proyectos` collection as the original site; selected projects retain the optimized thumbnails and updated bilingual copy. Cards link to each project's `url` when available and show a separate GitHub link when available. Admin Gastos credentials and private code are not published here.
