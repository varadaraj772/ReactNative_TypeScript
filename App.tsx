/* eslint-disable @typescript-eslint/no-unused-vars */
import './gesture-handler';
import React from 'react';
import StackNavigation from './src/components/StackNavigation';
import TodoComponet from './src/components/TodoComponet';
import BottomNavigation from './src/components/BottomNavigation';
import DrawerNavigation from './src/components/DrawerNavigation';
const App: React.FC = () => {
  return (
    <>
      {/* <TodoComponet /> */}
      {/* <StackNavigation /> */}
      {/* <BottomNavigation /> */}
      <DrawerNavigation/>
    </>
  );
};

export default App;
