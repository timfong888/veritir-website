import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import vercel from "@astrojs/vercel";

export default defineConfig({
  integrations: [mdx()],
  adapter: vercel({ imageService: true }),
  vite: { plugins: [tailwindcss()] },
});
