import { z, defineCollection } from "astro:content";

const workCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.date(),
      image: image(),
      period: z.string(),
      tags: z.array(z.string()),
      hidden: z.boolean().optional(),
    }),
});

export const collections = {
  work: workCollection,
};
