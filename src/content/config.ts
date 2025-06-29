import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.date(),
      coverImage: z.optional(image()),
      categories: z.optional(z.array(z.string())),
      tags: z.optional(z.array(z.string())),
      public: z.optional(z.boolean()),
      enableMathJax: z.optional(z.boolean()).default(false),
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
  blog: blogCollection,
  work: workCollection,
};
