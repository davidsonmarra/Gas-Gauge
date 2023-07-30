import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Home, CreateCar} from '@screens';
import {RootStackParamList} from '@types';

const {Screen, Navigator} = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="Home">
          <Screen name="Home" component={Home} />
          <Screen name="CreateCar" component={CreateCar} />
        </Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
