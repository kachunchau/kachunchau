import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const work = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/work" }),
  schema: ({ image }) =>
    z.object({
      company: z.string().optional(),
      title: z.string(),
      description: z.string(),
      headline: z.string(),
      team: z
        .array(
          z.object({
            name: z.string(),
            position: z.string(),
          }),
        )
        .optional(),
      role: z.string().optional(),
      timeframe: z.string().optional(),
      slug: z.string(),
      cover: image(),
      order: z.number().optional(),
      gradient: z.string().optional(),
      alignment: z.string().optional(),
    }),
});

export const collections = { work };
