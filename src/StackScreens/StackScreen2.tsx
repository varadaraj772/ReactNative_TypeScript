import {Button, StyleSheet, Text} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackNavigationParams} from '../types/StackNavigationParams';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';

type StackScreen2NavigationParams = StackNavigationProp<
  StackNavigationParams,
  'StackScreen2'
>;

type StackScreeen2RouteParams = RouteProp<
  StackNavigationParams,
  'StackScreen2'
>;

const Stackscreen2: React.FC = () => {
  const navigation = useNavigation<StackScreen2NavigationParams>();
  const route = useRoute<StackScreeen2RouteParams>();
  return (
    <SafeAreaView style={styles.container}>
      <Text>Welcome {route.params.name}</Text>
      <Button
        title="Go to Stackscreen 1"
        onPress={() => navigation.navigate('StackScreen1', {message: 'Coming back from Screen 2'})}
      />
    </SafeAreaView>
  );
};

export default Stackscreen2;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
