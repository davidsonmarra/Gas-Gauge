import {ValidationSchemaAddCarProps} from '@types';

export interface AddCarStepProps {
  title: string;
  description: string;
  field: keyof ValidationSchemaAddCarProps;
  placeholder: string;
  type: 'text' | 'color';
}
