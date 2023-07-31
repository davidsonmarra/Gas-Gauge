import React from 'react';
import styled from 'styled-components/native';
import {Controller} from 'react-hook-form';
import {InputTextProps} from '@types';

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
  width: 99%;
  border: 1px solid #101a26;
  border-radius: 16px;
  padding: 8px 16px;
`;

const StyledInput = styled.TextInput`
  width: 100%;
`;
