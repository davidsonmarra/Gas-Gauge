import React, {memo} from 'react';
import styled from 'styled-components/native';
import {CarProps} from '@types';
import {CarSvg} from '@assets';

interface CarCardProps {
  car: CarProps;
}

const CarCardComponent = ({car: {name, color, average}}: CarCardProps) => (
  <StyledCarCard>
    <CarSvg width={100} height={100} fill={color} />
    <StyledCarCardInfo>
      <StyledCarCardName>{name}</StyledCarCardName>
      {average && (
        <StyledCarCardAverage>{`${average}`} Km/L</StyledCarCardAverage>
      )}
      <StyledCarCardColor color={color} />
    </StyledCarCardInfo>
  </StyledCarCard>
);

const StyledCarCard = styled.View`
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

const StyledCarCardName = styled.Text``;

const StyledCarCardAverage = styled.Text``;

const StyledCarCardColor = styled.View<{color: string}>`
  width: 24px;
  height: 24px;
  border-radius: 12px;
  background-color: ${({color}) => color};
`;

export const CarCard = memo(CarCardComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.car, nextProps.car);
});
