import React from 'react';
import styled from 'styled-components/native';
import {CarEmptySvg} from '@assets';

export const EmptyCardListItem = () => {
  return (
    <StyledContainer>
      <CarEmptySvg width={100} height={100} />
      <StyledText>Você ainda não adicionou nenhum carro.</StyledText>
    </StyledContainer>
  );
};

const StyledContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

const StyledText = styled.Text`
  font-family: ${({theme}) => theme.fonts.primary};
  font-size: ${({theme}) => theme.fontSizes.md};
  font-weight: ${({theme}) => theme.fontWeights.regular};
  color: ${({theme}) => theme.colors.text};
  margin-top: 24px;
`;
