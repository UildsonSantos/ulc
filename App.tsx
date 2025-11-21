/**
 * Ponto de entrada principal do aplicativo.
 * @format
 */

import React, { useEffect } from 'react'; // 1. Adicionado useEffect
import { useColorScheme, StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import BootSplash from 'react-native-bootsplash'; // 2. Import da lib

import { lightTheme, darkTheme } from './src/theme';

import Home from './src/screens/HomeScreen.native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const App = () => {
  // Detecta o tema do dispositivo ('light', 'dark' ou null)
  const deviceTheme = useColorScheme();

  const theme = deviceTheme === 'dark' ? darkTheme : lightTheme;

  // 3. Lógica para esconder a Splash Screen
  useEffect(() => {
    const init = async () => {
      // Aqui você colocará carregamentos futuros (ex: carregar fontes, checar login, etc)
      // Por enquanto, não precisamos esperar nada.
    };

    init().finally(async () => {
      // Oculta a splash com uma animação suave de fade
      await BootSplash.hide({ fade: true });
      console.log("Bootsplash ocultado com sucesso");
    });
  }, []);

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