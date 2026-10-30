# Atharva Kanekar — Portfolio

A responsive, single-page portfolio built with Next.js App Router, React, TypeScript, Tailwind CSS, Lucide icons, and Framer Motion (dependencies included for future interaction work). The visual system follows the supplied editorial portfolio reference: off-white canvas, serif display type, lavender details, fine rules, and open section layouts.

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Personal assets and project links

- The hero portrait is `public/images/atharva-profile.jpg`; replace it with an updated image at the same path if needed.
- Add the actual resume at `public/Atharva-Kanekar-CV.pdf`. The CV control remains disabled until the file exists.
- Add verified project demo URLs and repository URLs in `src/data/portfolio.ts` (`href` and `repo`). Empty values are intentionally displayed as placeholders.
- Add a contact email to `profile.email` in the same data file before making it public. No email or phone number has been guessed.
- Learning platform profile links and completed certification records can be added in `src/data/portfolio.ts` when verified.

Project thumbnails are original CSS compositions for this portfolio, not product screenshots.
