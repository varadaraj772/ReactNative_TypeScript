/* eslint-disable react/no-unstable-nested-components */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Tasks from './Screens/Tasks';
import Project from './Screens/Project';
import {Provider} from 'react-redux';
import {store} from './Store/Store';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const RootNavigator: React.FC = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName: string = '';
              switch (route.name) {
                case 'TabScreen1':
                  iconName = focused
                    ? 'clipboard-text'
                    : 'clipboard-text-outline';
                  break;
                case 'TabScreen2':
                  iconName = focused ? 'briefcase' : 'briefcase-outline';
                  break;
              }
              return <Icon name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'black',
            tabBarInactiveTintColor: 'gray',
          })}>
          <Tab.Screen
            name="TabScreen1"
            component={Tasks}
            options={{title: 'Tasks'}}
          />
          <Tab.Screen
            name="TabScreen2"
            component={Project}
            options={{title: 'Projects'}}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default RootNavigator;
