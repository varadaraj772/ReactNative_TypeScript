import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {DrawerParams} from '../types/DrawerParams';
import {NavigationContainer} from '@react-navigation/native';
import DrawerScreen1 from '../DrawerScreens/DrawerScreen1';
import DrawerScreen2 from '../DrawerScreens/DrawerScreen2';

const DrawerNavigation: React.FC = () => {
  const Drawer = createDrawerNavigator<DrawerParams>();
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="DrawerScreen1" component={DrawerScreen1} />
        <Drawer.Screen name="DrawerScreen2" component={DrawerScreen2} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigation;
