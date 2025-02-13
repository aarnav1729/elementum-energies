// src/content.config.ts
import { z, defineCollection } from 'astro:content';
import { docsSchema } from '@astrojs/starlight/schema';

// PRODUCTS COLLECTION
const productsCollection = defineCollection({
  // 🚫 Remove the loader property entirely!
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/products" }),

  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      main: z.object({
        id: z.number(),
        content: z.string(),
        imgCard: image(),
        imgMain: image(),
        imgAlt: z.string(),
      }),
      tabs: z.array(
        z.object({
          id: z.string(),
          dataTab: z.string(),
          title: z.string(),
        })
      ),
      longDescription: z.object({
        title: z.string(),
        subTitle: z.string(),
        btnTitle: z.string(),
        btnURL: z.string(),
      }),
      descriptionList: z.array(
        z.object({
          title: z.string(),
          subTitle: z.string(),
        })
      ),
      specificationsLeft: z.array(
        z.object({
          title: z.string(),
          subTitle: z.string(),
        })
      ),
      specificationsRight: z
        .array(
          z.object({
            title: z.string(),
            subTitle: z.string(),
          })
        )
        .optional(),
      tableData: z
        .array(
          z.object({
            feature: z.array(z.string()),
            description: z.array(z.array(z.string())),
          })
        )
        .optional(),
      blueprints: z.object({
        first: image().optional(),
        second: image().optional(),
      }),
    }),
});

// BLOG COLLECTION
const blogCollection = defineCollection({
  // loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/blog" }), // remove the loader
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      contents: z.array(z.string()),
      author: z.string(),
      role: z.string().optional(),
      authorImage: image(),
      authorImageAlt: z.string(),
      pubDate: z.date(),
      cardImage: image(),
      cardImageAlt: z.string(),
      readTime: z.number(),
      tags: z.array(z.string()).optional(),
    }),
});

// INSIGHTS COLLECTION
const insightsCollection = defineCollection({
  // loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/insights" }), // remove
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      // contents: z.array(z.string()),
      cardImage: image(),
      cardImageAlt: z.string(),
    }),
});

// DOCS COLLECTION (Starlight)
const docsCollection = defineCollection({
  // If you’re actually using Starlight docs:
  schema: docsSchema(),
});

export const collections = {
  // If you really need the docs collection:
  docs: docsCollection,
  products: productsCollection,
  blog: blogCollection,
  insights: insightsCollection,
};