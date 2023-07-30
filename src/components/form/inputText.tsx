import React from 'react';
import {TextInputProps} from 'react-native';
import styled from 'styled-components/native';
import {Control, Controller} from 'react-hook-form';
import {ValidationSchemaAddCarProps as ValidationSchema} from '@types';

interface InputTextProps extends TextInputProps {
  control: Control<ValidationSchema>;
  name: keyof ValidationSchema;
  placeholder: string;
}

export const InputText = ({control, name, placeholder}: InputTextProps) => {
  return (
    <StyledContainer>
      <Controller
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <StyledInput
            placeholder={placeholder}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name={name}
      />
    </StyledContainer>
  );
};

const StyledContainer = styled.View`
  width: 100%;
  border: 1px solid #101a26;
  border-radius: 16px;
  padding: 8px 16px;
`;

const StyledInput = styled.TextInput`
  width: 100%;
`;
