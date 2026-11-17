import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const pages = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/data/pages" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    ogImage: z.string().optional(),
    // Unlisted pages: kept out of the nav and out of search indexes.
    noindex: z.boolean().optional(),
    // Rendered on the page and emitted as FAQPage structured data.
    faq: z.array(z.object({ q: z.string(), a: z.string() })).optional(),
  }),
});

export const collections = { pages };
