import React, {useCallback, useEffect} from 'react';
import {FlatList, FlatListProps, ListRenderItem, StatusBar} from 'react-native';
import styled from 'styled-components/native';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import {shallow} from 'zustand/shallow';

import {useCarsStore} from '@store';
import {CarProps, RootStackParamList} from '@types';
import {CarCard, EmptyCardListItem} from '@components';
import {CarHeroSvg, CarPlusSvg} from '@assets';
import {NavigationProp, useNavigation} from '@react-navigation/native';

export const Home = () => {
  const {cars, getCars} = useCarsStore(
    state => ({cars: state.cars, getCars: state.getCars}),
    shallow,
  );
  const {navigate} = useNavigation<NavigationProp<RootStackParamList>>();
  const insets = useSafeAreaInsets();

  const onReload = useCallback(() => {
    getCars();
  }, [getCars]);

  const onAddCar = useCallback(() => {
    navigate('CreateCar');
  }, [navigate]);

  useEffect(() => {
    onReload();
  }, [onReload]);

  return (
    <StyledContainer>
      <StatusBar barStyle="light-content" />
      <StyledHeroContainer paddingTop={insets.top}>
        <CarHeroSvg width={182} height={182} />
      </StyledHeroContainer>
      <StyledList
        data={cars}
        keyExtractor={(item: CarProps) => item.name}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        ItemSeparatorComponent={StyledSeparator}
        onEndReachedThreshold={0.5}
        scrollEventThrottle={16}
        keyboardDismissMode="on-drag"
        ListEmptyComponent={EmptyCardListItem}
      />
      <StyledButton onPress={onAddCar} paddingBottom={insets.bottom}>
        <CarPlusSvg width={34} height={34} />
      </StyledButton>
    </StyledContainer>
  );
};

const renderItem: ListRenderItem<CarProps> = ({item}: {item: CarProps}) => (
  // @ts-ignore
  <CarCard car={item} />
);

const StyledContainer = styled(SafeAreaView).attrs({
  edges: ['bottom'],
})`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
`;

const StyledHeroContainer = styled.View<{paddingTop: number}>`
  align-items: center;
  padding-top: ${({paddingTop}) => paddingTop}px;
  background-color: ${({theme}) => theme.colors.secondary};
`;

const StyledList = styled(
  FlatList as new (props: FlatListProps<CarProps>) => FlatList<CarProps>,
).attrs({
  contentContainerStyle: {
    paddingHorizontal: 24,
    paddingTop: 24,
  },
})``;

const StyledSeparator = styled.View`
  height: 12px;
`;

const StyledButton = styled.TouchableOpacity<{paddingBottom: number}>`
  width: 56px;
  height: 56px;
  border-radius: 28px;
  justify-content: center;
  align-items: center;

  background-color: ${({theme}) => theme.colors.primary};
  position: absolute;
  right: 24px;
  bottom: ${({paddingBottom}) => paddingBottom + 24}px;
`;
