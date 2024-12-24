import {Animated, PanResponder, StyleSheet, Text} from 'react-native';
import React, {useRef} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

const DragAnimation = () => {
  const Animation = useRef(new Animated.ValueXY()).current;
  const ScaleAnimation = useRef(new Animated.Value(0.7)).current;
  const PanResponderRef = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event(
        [null, {dx: Animation.x, dy: Animation.y}],
        {useNativeDriver: false},
      ),
      onPanResponderEnd: () => {
        //comment this method if you want the dragged box to stay there
        Animated.spring(Animation, {
          toValue: {x: 0, y: 0},
          useNativeDriver: false,
        }).start();
      },
      onPanResponderStart: () => {
        Animated.timing(ScaleAnimation, {
          toValue: 1.3,
          duration: 200,
          useNativeDriver: false,
        }).start();
      },
      onPanResponderRelease: () => {
        Animated.timing(ScaleAnimation, {
          toValue: 0.5,
          duration: 300,
          useNativeDriver: false,
        }).start();
      },
    }),
  ).current;
  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={[
          styles.box,
          Animation.getLayout(),
          {transform: [{scale: ScaleAnimation}]},
        ]}
        {...PanResponderRef.panHandlers}>
        <Text style={styles.text}>Drag Me</Text>
      </Animated.View>
    </SafeAreaView>
  );
};

export default DragAnimation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    height: 150,
    width: 150,
    borderRadius: 100,
    backgroundColor: 'green',
    marginBottom: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'serif',
  },
});
