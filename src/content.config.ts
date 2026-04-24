import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const products = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/products" }),
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    status: z.enum(["live", "wip", "beta", "locked", "commercial"]),
    statusLabel: z.string(),
    url: z.string().url().optional(),
    github: z.string().url().optional(),
    video: z.string().optional(),
    tags: z.array(z.string()),
    stack: z.array(z.string()),
    order: z.number().default(100),
    span: z.union([z.literal(1), z.literal(2)]).default(1),
    placeholder: z
      .enum(["gdd", "telacreiste", "elevenlabs", "revertpong", "enterprise"])
      .optional(),
    image: z.string().optional(),
    note: z.string().optional(),
    accent: z.string().default("#ff6b4a"),
  }),
});

export const collections = { products };
