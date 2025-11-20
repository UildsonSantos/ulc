import { DefaultTheme } from 'styled-components/native';

export const lightTheme: DefaultTheme = {
  title: 'light',
  colors: {
    primary: '#FF8800', // O Laranja icônico do VLC
    secondary: '#FF3300',
    background: '#F0F0F0',
    surface: '#FFFFFF',
    text: '#121212',
    subtext: '#757575',
    separator: '#E0E0E0',
  },
};

export const darkTheme: DefaultTheme = {
  title: 'dark',
  colors: {
    primary: '#FF8800', // Mantém o laranja como destaque
    secondary: '#FF3300',
    background: '#121212', // Preto suave (padrão Material Design/VLC Dark)
    surface: '#1E1E1E',
    text: '#FFFFFF',
    subtext: '#AAAAAA',
    separator: '#333333',
  },
};
