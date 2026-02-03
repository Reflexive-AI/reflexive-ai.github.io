import { defineCollection, z } from 'astro:content';

const research = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    // Many legacy articles lack dates; coerce string/date or default to today
    date: z
      .union([z.string(), z.date()])
      .optional()
      .transform((val) => (val ? new Date(val as any) : new Date())),
    // Last modification date for SEO freshness signals
    lastModified: z
      .union([z.string(), z.date()])
      .optional()
      .transform((val) => (val ? new Date(val as any) : undefined)),
    draft: z.boolean().default(false),
    categories: z.array(z.string()).default(['Research']),
    tags: z.array(z.string()).default([]),
    // SEO keywords (separate from display tags)
    keywords: z.array(z.string()).optional(),
    toc: z.boolean().default(true),
    // Author (defaults to organization)
    author: z.string().default('Reflexive AI Initiative'),
  }),
});

export const collections = { research };
