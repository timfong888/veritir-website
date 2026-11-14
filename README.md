# veritir-website

Marketing site for Veritir. Astro 5 + MDX, deployed on Vercel.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build
```

## Structure

- `src/data/pages/*.mdx`: page copy (`home.mdx` → `/`, `roundtable.mdx` → `/roundtable`)
- `src/pages/`: routes that render the MDX entries
- `src/layouts/BaseLayout.astro`: header, nav, footer, meta
- `src/components/RailSection.astro`: section with the mono margin-rail label
- `src/styles/global.css`: design tokens (light + dark) and all styles
- `src/legacy/`: the previous site, kept unrouted (see its README)

Type: Instrument Serif (display + wordmark), Instrument Sans (body), Geist Mono (labels), all self-hosted through Fontsource.
