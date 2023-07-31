import {z} from 'zod';

export const validationSchema = z.object({
  name: z.string(),
  tankCapacity: z.string(),
  color: z.string(),
});
