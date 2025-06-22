export const palettes = {
  spring: {
    primary: '#ffb7c5',
    secondary: '#c1f0c1',
  },
  summer: {
    primary: '#ff6f61',
    secondary: '#00b4d8',
  },
  autumn: {
    primary: '#d2691e',
    secondary: '#8f9779',
  },
  winter: {
    primary: '#8ecae6',
    secondary: '#023047',
  },
} as const;

export type ThemeName = keyof typeof palettes;
