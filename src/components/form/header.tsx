import React from 'react';
import styled from 'styled-components/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface HeaderProps {
  title: string;
  onPressBack?: () => void;
}

export const Header = ({title, onPressBack}: HeaderProps) => {
  const insets = useSafeAreaInsets();

  return (
    <StyledContainer paddingTop={insets.top}>
      <StyledBackButton onPress={onPressBack}>
        <StyledBackButtonTitle>Voltar</StyledBackButtonTitle>
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
  padding: ${({paddingTop}) => paddingTop + 12}px 12px 24px;
  background-color: #101a26;
`;

const StyledBackButton = styled.TouchableOpacity`
  flex: 1;
`;

const StyledBackButtonTitle = styled.Text`
  color: white;
`;

const StyledTitle = styled.Text`
  flex: 1;
  text-align: center;
  color: white;
`;

const StyledSeparator = styled.View`
  flex: 1;
`;
