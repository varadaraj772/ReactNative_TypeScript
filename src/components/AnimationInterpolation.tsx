import {Animated, Button, StyleSheet} from 'react-native';
import React, {useRef} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
const AnimationInterpolation = () => {
  const AnimationValue: any = useRef(new Animated.Value(0)).current;

  const Rotate = AnimationValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ['0deg', '180deg', '360deg'],
  });

  const Background = AnimationValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ['red', 'blue', 'green'],
  });
  const Border = AnimationValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, 70, 120],
  });
  const ScaleValue = AnimationValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [1, 1.5, 2],
  });
  const handleRotate = () => {
    Animated.sequence([
      Animated.timing(AnimationValue, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }),
      Animated.timing(AnimationValue, {
        toValue: 0.5,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(AnimationValue, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start();
  };
  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={[
          styles.box,
          {transform: [{rotate: Rotate}, {scale: ScaleValue}]},
          {backgroundColor: Background, borderRadius: Border},
        ]}
      />
      <Button title="Rotate" onPress={handleRotate} />
    </SafeAreaView>
  );
};

export default AnimationInterpolation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    height: 150,
    width: 150,
    backgroundColor: 'red',
    marginBottom: 100,
  },
});
