import { defineCollection, defineContentConfig, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: "page",
      source: "**/*.md",
      schema: z.object({
        title: z.string().optional(),
        date: z.string().optional(),
        eventDate: z.string().optional(),
        reportDate: z.string().optional(),
        link: z.string().optional(),
        thumb: z.string().optional(),
      }),
    }),
  },
});
