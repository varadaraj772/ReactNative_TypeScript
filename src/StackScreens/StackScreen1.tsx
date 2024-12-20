import {Button, StyleSheet, Text} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackNavigationParams} from '../types/StackNavigationParams';
import {TextInput} from 'react-native-gesture-handler';

type StackScreen1NavigationParams = StackNavigationProp<
  StackNavigationParams,
  'StackScreen1'
>;

type StackScreen1RouteProps = RouteProp<StackNavigationParams, 'StackScreen1'>;

const StackScreen1: React.FC = () => {
  const navigation = useNavigation<StackScreen1NavigationParams>();
  const [name, setName] = useState<string>('');
  const route = useRoute<StackScreen1RouteProps>();
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        placeholder="Enter your name"
        onChangeText={setName}
        style={{borderWidth: 1}}
      />
      <Button
        title="Go to Stackscreen 2"
        onPress={() => navigation.navigate('StackScreen2', {name: name})}
      />
      <Text> Message was : {route.params?.message}</Text>
    </SafeAreaView>
  );
};

export default StackScreen1;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
