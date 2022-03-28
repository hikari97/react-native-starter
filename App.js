import React from 'react';
import {NativeBaseProvider} from 'native-base';
import {NavigateRoot} from './src/root/';

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigateRoot />
    </NativeBaseProvider>
  );
}
