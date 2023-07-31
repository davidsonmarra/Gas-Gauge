import React, {memo} from 'react';
import {InputColor, InputText} from '@components';
import styled from 'styled-components/native';
import {Control} from 'react-hook-form';
import {
  InputColorProps,
  InputTextProps,
  ValidationSchemaAddCarProps as ValidationSchema,
} from '@types';

interface FieldItemProps {
  width: number;
  control: Control<ValidationSchema>;
  name: keyof ValidationSchema;
  placeholder?: string;
  title: string;
  description: string;
  type: 'text' | 'color' | 'number';
  setValue: (name: keyof ValidationSchema, value: string) => void;
}
const returnFieldByType = {
  text: (props: InputTextProps) => <InputText {...props} />,
  number: (props: InputTextProps) => <InputText {...props} />,
  color: (props: InputColorProps) => <InputColor {...props} />,
};

const FieldItemComponent = ({
  width,
  title,
  description,
  type = 'text',
  setValue,
  ...rest
}: FieldItemProps) => {
  const props: any = {
    text: {
      autoCapitalize: 'none',
      ...rest,
    },
    color: {
      setValue,
    },
    number: {
      autoCapitalize: 'none',
      keyboardType: 'numeric',
      ...rest,
    },
  };

  return (
    <StyledContainer width={width}>
      <StyledTitle>{title}</StyledTitle>
      <StyledDescription>{description}</StyledDescription>
      {returnFieldByType[type]({...props[type]})}
    </StyledContainer>
  );
};

export const StyledContainer = styled.View<{width: number}>``;

export const StyledTitle = styled.Text`
  font-size: 24px;
  margin-bottom: 12px;
`;

export const StyledDescription = styled.Text`
  font-size: 16px;
  margin-bottom: 8px;
`;

export const FieldItem = memo(FieldItemComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.name, nextProps.name);
});
