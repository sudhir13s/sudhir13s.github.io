import {defineCollection} from 'astro:content';
import {z} from 'astro/zod';
import {glob} from 'astro/loaders';

const pages = defineCollection({
  loader: glob({pattern: '*.md', base: './src/content/pages'}),
  schema: z.object({
    title: z.string(),
    navLabel: z.string(),
    order: z.number().int().positive(),
  }),
});

const blog = defineCollection({
  loader: glob({pattern: '*.md', base: './src/content/blog'}),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string(),
  }),
});

export const collections = {pages, blog};
