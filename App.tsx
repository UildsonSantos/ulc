/**
 * Ponto de entrada principal do aplicativo.
 * @format
 */

import React from 'react';
import { useColorScheme, StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';

import { lightTheme, darkTheme } from './src/theme';

import Home from './src/screens/HomeScreen.native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const App = () => {
  // Detecta o tema do dispositivo ('light', 'dark' ou null)
  const deviceTheme = useColorScheme();

  const theme = deviceTheme === 'dark' ? darkTheme : lightTheme;

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <SafeAreaView
          style={{ flex: 1, backgroundColor: theme.colors.background }}
        >
          <StatusBar
            barStyle={deviceTheme === 'dark' ? 'light-content' : 'dark-content'}
            backgroundColor={theme.colors.background}
          />
          <Home />
        </SafeAreaView>
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default App;
