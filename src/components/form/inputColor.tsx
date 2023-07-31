import React, {useCallback, useEffect, useState} from 'react';
import {FlatListProps, FlatList} from 'react-native';
import styled from 'styled-components/native';
import {CarSvg} from '@assets';
import {carsColors} from '@utils';
import {InputColorProps} from '@types';

export const InputColor = ({setValue}: InputColorProps) => {
  const [color, setColor] = useState('');

  const onSetCarColor = (colorPressed: string) => {
    setColor(colorPressed);
  };

  const onColorChange = useCallback(() => {
    setValue('color', color);
  }, [color, setValue]);

  useEffect(() => {
    onColorChange();
  }, [onColorChange]);

  return (
    <StyledContainer>
      <StyledCarsContainer>
        <StyledList
          data={carsColors}
          keyExtractor={(item: string) => item}
          renderItem={({item}: {item: string}) => (
            <StyledCarButton
              onPress={() => onSetCarColor(item)}
              isCurrentColor={color === item}>
              <CarSvg width={80} height={80} fill={item} />
            </StyledCarButton>
          )}
          numColumns={3}
        />
      </StyledCarsContainer>
    </StyledContainer>
  );
};

export const StyledContainer = styled.View``;

export const StyledCarsContainer = styled.View``;

export const StyledCarButton = styled.TouchableOpacity<{
  isCurrentColor: boolean;
}>`
  opacity: ${({isCurrentColor}) => (isCurrentColor ? 1 : 0.5)};
`;

const StyledList = styled(
  FlatList as new (props: FlatListProps<string>) => FlatList<string>,
).attrs({
  columnWrapperStyle: {justifyContent: 'space-between'},
  contentContainerStyle: {
    paddingHorizontal: 24,
  },
})``;
