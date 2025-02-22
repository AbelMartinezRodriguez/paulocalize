import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  loader: glob({ pattern: "*.md", base: "src/projects/" }),
  schema: z.object({
    title: z.string().nonempty(),
    date: z.string().nonempty(),
    description: z.string().nonempty(),
    image: z.string().url(),
    link: z.string().url(),
  }),
});

export const collections = { projects };
