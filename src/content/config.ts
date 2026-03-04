import { defineCollection, z } from "astro:content";

const blogPT = defineCollection({
  type: "content",
  schema: z.object({
   title: z.string(),
    description: z.string(),
    cover: z.string(),
    date: z.string(),
    data: z.string(),
    type:z.string(),
    por:z.string(),
    socials: z.string(),
    materia: z.string(),
    brand: z.string(),
    materiaLabel: z.string(),
    insta: z.string()
    })
});

const blogEN = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    cover: z.string(),
    date: z.string(),
    data: z.string(),
    type:z.string(),
    por:z.string(),
    socials: z.string(),
    materia: z.string(),
    brand: z.string(),
    materiaLabel: z.string(),
    insta: z.string()
  })
});

export const collections = {
  "pt": blogPT,
  "en": blogEN
};
