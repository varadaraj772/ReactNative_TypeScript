/* eslint-disable @typescript-eslint/no-unused-vars */
import './gesture-handler';
import React from 'react';
import StackNavigation from './src/components/StackNavigation';
import TodoComponet from './src/components/TodoComponet';
import BottomNavigation from './src/components/BottomNavigation';
import DrawerNavigation from './src/components/DrawerNavigation';
import FlatListExample from './src/components/FlatListExample';
import ModalComponent from './src/components/ModalComponent';
import BasicAnimations from './src/components/BasicAnimations';
import AnimationInterpolation from './src/components/AnimationInterpolation';
import DragAnimation from './src/components/DragAnimation';
const App: React.FC = () => {
  return (
    <>
      {/* <TodoComponet /> */}
      {/* <StackNavigation /> */}
      {/* <BottomNavigation /> */}
      {/* <DrawerNavigation/> */}
      {/* <FlatListExample /> */}
      {/* <ModalComponent /> */}
      {/* <BasicAnimations /> */}
      {/* <AnimationInterpolation/> */}
      <DragAnimation/>
    </>
  );
};

export default App;
