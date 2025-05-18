import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const work = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/work" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    headline: z.string(),
    slug: z.string(),
    order: z.number().optional(),
    gradient: z.string().optional(),
    aligment: z.string().optional(),
    draft: z.boolean().optional(),
  }),
});

export const collections = { work };
