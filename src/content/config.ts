import { z, defineCollection } from 'astro:content';

const servicesCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string().optional(),
    features: z.array(z.string()),
    benefits: z.array(z.string()).optional(),
    order: z.number()
  })
});

const partnersCollection = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    logo: z.string(),
    website: z.string().optional(),
    description: z.string().optional(),
    order: z.number()
  })
});

export const collections = {
  services: servicesCollection,
  partners: partnersCollection
};
