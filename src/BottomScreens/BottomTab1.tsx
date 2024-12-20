import {SafeAreaView, StyleSheet, Text} from 'react-native';
import React from 'react';

const BottomTab1 : React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>BottomTab1</Text>
    </SafeAreaView>
  );
};

export default BottomTab1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
