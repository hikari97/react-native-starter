import React from 'react';
import {NativeBaseProvider, extendTheme} from 'native-base';
import {NavigateRoot} from './src/root/';

const config = {
  dependencies: {
    'linear-gradient': require('react-native-linear-gradient').default,
  },
};

export default function App() {
  const theme = extendTheme({
    components: {
      Input: {
        defaultProps: {
          colorScheme: 'red',
        },
      },
    },
    colors: {
      // Add new color
      primary: {
        50: '#9C4246',
        100: '#7b2b2e',
        contarastext: '#000',
      },
      text: '#000',
      secondtText: '#373737',
      // Redefinig only one shade, rest of the color will remain same.
      amber: {
        400: '#d97706',
      },
    },
    // config: {
    //   // Changing initialColorMode to 'dark'
    //   initialColorMode: 'light',
    // },
  });

  return (
    <NativeBaseProvider theme={theme} config={config}>
      <NavigateRoot />
    </NativeBaseProvider>
  );
}
