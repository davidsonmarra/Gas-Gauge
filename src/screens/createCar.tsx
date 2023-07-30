import React, {useState, useRef} from 'react';
import {
  FlatList,
  FlatListProps,
  KeyboardAvoidingView,
  ListRenderItem,
  Platform,
  StatusBar,
  useWindowDimensions,
} from 'react-native';
import styled from 'styled-components/native';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';

import {HeaderSteps, InputText} from '@components';
import {validateSchemaAddCar as schema, STEPS} from '@utils';
import {
  ValidationSchemaAddCarProps as ValidationSchema,
  AddCarStepProps as StepProps,
  RootStackParamList,
} from '@types';

export const CreateCar = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const {goBack} =
    useNavigation<NavigationProp<RootStackParamList, 'CreateCar'>>();
  const {width} = useWindowDimensions();
  const totalItemWidth = width - 24;
  const flatlistRef = useRef<FlatList<StepProps>>(null);
  const insets = useSafeAreaInsets();

  const renderItem: ListRenderItem<StepProps> = ({item}: {item: StepProps}) => (
    <StyledItemContainer width={totalItemWidth}>
      <InputText
        control={control}
        name={item.field}
        placeholder={item.placeholder}
      />
    </StyledItemContainer>
  );

  const {control, handleSubmit} = useForm<ValidationSchema>({
    resolver: zodResolver(schema),
    mode: 'onSubmit',
  });

  const onSubmit = () => {
    if (currentStep === STEPS.length - 1) {
      handleSubmit(onCreateCar)();
    } else {
      scrollToNextStep();
      setCurrentStep(currentStep + 1);
    }
  };

  const onCreateCar = (data: ValidationSchema) => {
    console.log(data);
  };

  const scrollToNextStep = () => {
    flatlistRef?.current?.scrollToIndex({
      animated: true,
      index: currentStep + 1,
    });
  };

  const scrollToBackStep = () => {
    flatlistRef?.current?.scrollToIndex({
      animated: true,
      index: currentStep - 1,
    });
  };

  const backScreen = () => {
    goBack();
  };

  const verifyIfScrollIsPossible = (offset: number) => {
    if (currentStep + offset < 0 || currentStep + offset > STEPS.length - 1) {
      return false;
    }
    setCurrentStep(currentStep + offset);
    return true;
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <StyledContainer>
        <StatusBar barStyle="light-content" />
        <HeaderSteps
          onPressBack={() =>
            verifyIfScrollIsPossible(-1) ? scrollToBackStep() : backScreen()
          }
          title="Nome"
        />
        <StyledForm>
          <StyledList
            data={STEPS}
            ref={flatlistRef}
            keyExtractor={(item: StepProps) => item.field}
            renderItem={renderItem}
            onEndReachedThreshold={0.5}
            scrollEventThrottle={16}
            decelerationRate="fast"
            bounces={false}
            horizontal
            pagingEnabled
            scrollEnabled={false}
            showsHorizontalScrollIndicator={false}
          />
        </StyledForm>
        <StyledButton onPress={onSubmit} bottom={insets.bottom}>
          <StyledButtonLabel>Próximo</StyledButtonLabel>
        </StyledButton>
      </StyledContainer>
    </KeyboardAvoidingView>
  );
};

const StyledContainer = styled(SafeAreaView).attrs({
  edges: ['bottom'],
})`
  flex: 1;
`;

const StyledForm = styled.View`
  padding: 24px 12px;
`;

const StyledList = styled(
  FlatList as new (props: FlatListProps<StepProps>) => FlatList<StepProps>,
)``;

const StyledItemContainer = styled.View<{width: number}>``;

const StyledButton = styled.TouchableOpacity<{bottom: number}>`
  background-color: #116695;
  position: absolute;
  bottom: ${({bottom}) => bottom}px;
  width: 100%;
  padding: 12px 24px;
`;

const StyledButtonLabel = styled.Text`
  text-align: center;
`;
