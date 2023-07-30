import {z} from 'zod';

export const validationSchema = z.object({
  name: z.string(),
  color: z.string(),
});
