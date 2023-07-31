import React from 'react';
import {ThemeProvider} from 'styled-components/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {CarDetails, CreateCar, Home} from '@screens';
import {RootStackParamList} from '@types';
import {theme} from '@global';

const {Screen, Navigator} = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Navigator
            screenOptions={{
              headerShown: false,
            }}
            initialRouteName="Home">
            <Screen name="Home" component={Home} />
            <Screen name="CreateCar" component={CreateCar} />
            <Screen name="CarDetails" component={CarDetails} />
          </Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
