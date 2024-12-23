import {
  Animated,
  Button,
  Easing,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import React, {useRef} from 'react';
const BasicAnimations = () => {
  const FadeValue: any = useRef(new Animated.Value(0)).current;
  const TranslateXValue: any = useRef(new Animated.Value(0)).current;
  const TranslateYValue: any = useRef(new Animated.Value(0)).current;
  const ScaleValue: any = useRef(new Animated.Value(1)).current;
  const RotateValue: any = useRef(new Animated.Value(0)).current;
  const RotateInterpolated = RotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });
  const handleFade = (FadeType: string) => {
    Animated.sequence([
      Animated.timing(FadeValue, {
        toValue: FadeType === 'in' ? 1 : 0,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start();
  };
  const handleTranlate = (axis: string) => {
    const Value = axis === 'x' ? TranslateXValue : TranslateYValue;
    console.log(Value);
    Animated.timing(Value, {
      toValue: Value.__getValue() > 0 ? 0 : 100,
      duration: 1000,
      easing: Easing.bezier(0.4, 0, 0.2, 1),
      useNativeDriver: true,
    }).start();
  };
  const handleScaleInAndOut = () => {
    Animated.sequence([
      Animated.timing(ScaleValue, {
        toValue: 1.5,
        duration: 1000,
        easing: Easing.bounce,
        useNativeDriver: true,
      }),
      Animated.timing(ScaleValue, {
        toValue: 1,
        duration: 1000,
        easing: Easing.bounce,
        useNativeDriver: true,
      }),
    ]).start();
  };
  const handleRotate = () => {
    Animated.sequence([
      Animated.timing(RotateValue, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(RotateValue, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start();
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.AnimationContainer}>
        <Button title="Fade In" onPress={() => handleFade('in')} />
        <Button title="Fade Out" onPress={() => handleFade('out')} />
        <Animated.View style={[styles.box, {opacity: FadeValue}]} />
      </View>
      <View style={styles.AnimationContainer}>
        <Button title="Move X-Axis" onPress={() => handleTranlate('x')} />
        <Button title="Move Y-Axis" onPress={() => handleTranlate('y')} />
        <Animated.View
          style={[
            styles.box,
            {
              transform: [
                {translateX: TranslateXValue},
                {translateY: TranslateYValue},
              ],
            },
            {
              backgroundColor: 'green',
            },
          ]}
        />
      </View>
      <View style={styles.AnimationContainer}>
        <Button title="Scale in and Out" onPress={handleScaleInAndOut} />
        <Animated.View
          style={[styles.box, {transform: [{scale: ScaleValue}]}]}
        />
      </View>
      <View style={styles.AnimationContainer}>
        <Button title="Rotate" onPress={handleRotate} />
        <Animated.View
          style={[styles.box, {transform: [{rotate: RotateInterpolated}]}]}
        />
      </View>
    </ScrollView>
  );
};

export default BasicAnimations;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    height: 100,
    width: 100,
    backgroundColor: 'red',
  },
  AnimationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 10,
    marginVertical: 10,
  },
});
