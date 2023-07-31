import {TextInputProps} from 'react-native';
import {Control} from 'react-hook-form';
import {ValidationSchemaAddCarProps} from '@types';

export interface AddCarStepProps {
  title: string;
  description: string;
  field: keyof ValidationSchemaAddCarProps;
  placeholder?: string;
  type: 'text' | 'color' | 'number';
}

export interface InputTextProps extends TextInputProps {
  control: Control<ValidationSchemaAddCarProps>;
  name: keyof ValidationSchemaAddCarProps;
  placeholder: string;
}

export interface InputColorProps {
  setValue: (name: string, value: string) => void;
}
