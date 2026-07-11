import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// /learn 에 노출되는 글 모음. src/content/learn/*.md 파일을 읽어옵니다.
const learn = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/learn' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { learn };
