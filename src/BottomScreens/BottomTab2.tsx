import {SafeAreaView, StyleSheet, Text} from 'react-native';
import React from 'react';

const BottomTab2: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>BottomTab2</Text>
    </SafeAreaView>
  );
};

export default BottomTab2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
