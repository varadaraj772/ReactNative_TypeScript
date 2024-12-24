import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Project = () => {
  return (
    <View style={styles.container}>
      <Text>Project</Text>
    </View>
  );
};

export default Project;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
