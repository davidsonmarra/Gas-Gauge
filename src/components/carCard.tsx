import React, {memo, useCallback} from 'react';
import styled from 'styled-components/native';
import {CarProps, RootStackParamList} from '@types';
import {CarSvg} from '@assets';
import {NavigationProp, useNavigation} from '@react-navigation/native';

interface CarCardProps {
  car: CarProps;
}

const CarCardComponent = ({
  car: {name, color, average, tankCapacity},
}: CarCardProps) => {
  const {navigate} = useNavigation<NavigationProp<RootStackParamList>>();

  const onCarPress = useCallback(() => {
    navigate('CarDetails');
  }, [navigate]);

  return (
    <StyledCarCard onPress={onCarPress}>
      <CarSvg width={100} height={100} fill={color} />
      <StyledCarCardInfo>
        <StyledCarCardName>{name}</StyledCarCardName>
        {average && (
          <StyledCarCardInfoText>{`${average}`} Km/L</StyledCarCardInfoText>
        )}
        <StyledCarCardInfoText>{tankCapacity} L</StyledCarCardInfoText>
      </StyledCarCardInfo>
    </StyledCarCard>
  );
};

const StyledCarCard = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  background-color: #101a2622;
  border-radius: 12px;
  padding: 12px 16px;
`;

const StyledCarCardInfo = styled.View`
  flex: 1;
  justify-content: space-between;
  padding-left: 16px;
`;

const StyledCarCardName = styled.Text`
  font-family: ${({theme}) => theme.fonts.primary};
  font-size: ${({theme}) => theme.fontSizes.lg};
  font-weight: ${({theme}) => theme.fontWeights.semiBold};
  color: ${({theme}) => theme.colors.text};
`;

const StyledCarCardInfoText = styled.Text`
  font-family: ${({theme}) => theme.fonts.primary};
  font-size: ${({theme}) => theme.fontSizes.md};
  font-weight: ${({theme}) => theme.fontWeights.regular};
  color: ${({theme}) => theme.colors.text};
`;

export const CarCard = memo(CarCardComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.car, nextProps.car);
});
