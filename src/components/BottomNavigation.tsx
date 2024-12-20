import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomTabParams} from '../types/BottomTabParams';
import BottomTab1 from '../BottomScreens/BottomTab1';
import BottomTab2 from '../BottomScreens/BottomTab2';
import {NavigationContainer} from '@react-navigation/native';

const BottomNavigation: React.FC = () => {
  const Tab = createBottomTabNavigator<BottomTabParams>();
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="TabScreen1" component={BottomTab1} />
        <Tab.Screen name="TabScreen2" component={BottomTab2} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomNavigation;
