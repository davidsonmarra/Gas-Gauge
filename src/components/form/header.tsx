import React from 'react';
import styled from 'styled-components/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ArrowBackSvg} from '@assets';

interface HeaderProps {
  title: string;
  onPressBack?: () => void;
}

export const Header = ({title, onPressBack}: HeaderProps) => {
  const insets = useSafeAreaInsets();

  return (
    <StyledContainer paddingTop={insets.top}>
      <StyledBackButton onPress={onPressBack}>
        <ArrowBackSvg height={26} width={26} />
      </StyledBackButton>
      <StyledTitle>{title}</StyledTitle>
      <StyledSeparator />
    </StyledContainer>
  );
};

const StyledContainer = styled.View<{paddingTop: number}>`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${({paddingTop}) => paddingTop + 16}px 12px 16px;
  background-color: ${({theme}) => theme.colors.secondary};
`;

const StyledBackButton = styled.TouchableOpacity`
  width: 10%;
`;

const StyledTitle = styled.Text`
  flex: 1;
  text-align: center;
  font-family: ${({theme}) => theme.fonts.primary};
  font-size: ${({theme}) => theme.fontSizes.lg};
  font-weight: ${({theme}) => theme.fontWeights.bold};
  color: ${({theme}) => theme.colors.title};
`;

const StyledSeparator = styled.View`
  width: 10%;
`;
