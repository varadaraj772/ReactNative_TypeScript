import {StyleSheet, Text} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

const DrawerScreen1 = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>DrawerScreen1</Text>
    </SafeAreaView>
  );
};

export default DrawerScreen1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
