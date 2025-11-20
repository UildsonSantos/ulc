import 'styled-components/native';

declare module 'styled-components/native' {
  export interface DefaultTheme {
    title: string;
    colors: {
      primary: string;      // Laranja VLC
      secondary: string;      // Laranja VLC
      background: string;   // Fundo principal
      surface: string;      // Elementos de cartões/listas
      text: string;         // Texto principal
      subtext: string;      // Texto secundário
      separator: string;    // Linhas divisórias
    };
  }
}