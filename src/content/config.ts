import { z, defineCollection } from "astro:content";

const postCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.date(),
      coverImage: z.optional(image()),
      categories: z.optional(z.array(z.string())),
      tags: z.optional(z.array(z.string())),
    }),
});

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
  posts: postCollection,
  work: workCollection,
};
