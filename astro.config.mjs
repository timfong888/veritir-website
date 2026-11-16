import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import vercel from "@astrojs/vercel";

export default defineConfig({
  integrations: [mdx()],
  adapter: vercel({ imageService: true }),
  // The old FAQ page was retired with the redesign (source kept in src/legacy).
  redirects: { "/faq": "/" },
  // Tailwind is only used by the archived pages in src/legacy.
  vite: { plugins: [tailwindcss()] },
});
