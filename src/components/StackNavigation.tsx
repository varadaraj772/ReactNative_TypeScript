import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackScreen1 from '../StackScreens/StackScreen1';
import StackScreen2 from '../StackScreens/StackScreen2';
import {createStackNavigator} from '@react-navigation/stack';
import {StackNavigationParams} from '../types/StackNavigationParams';

const StackNavigation: React.FC = () => {
  const Stack = createStackNavigator<StackNavigationParams>();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="StackScreen1" component={StackScreen1} />
        <Stack.Screen name="StackScreen2" component={StackScreen2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
