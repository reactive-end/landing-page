import { defineCollection, z } from 'astro:content'

const people = defineCollection({
  schema: z.object({
    name: z.string(),
    description: z.string(),
    subDescription: z.string(),
    slogan: z.string(),
    image: z.string(),
    phone: z.string()
  }),
  type: 'data'
})

export const collections = { people }
