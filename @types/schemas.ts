import {z} from 'zod';
import {validateSchemaAddCar} from '@utils';

export type ValidationSchemaAddCarProps = z.infer<typeof validateSchemaAddCar>;
