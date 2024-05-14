import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    beige: {
      50: '#f5f5dc',
      100: '#DDD0C8',
      200: '#e4e4c6',
      300: '#dbdbbb',
      400: '#d2d2b0',
      500: '#c9c9a5',
      600: '#a3a38a',
      700: '#7d7d6e',
      800: '#575752',
      900: '#313136',
    },
    gray: {
      50: '#f7fafc',
      100: '#edf2f7',
      200: '#e2e8f0',
      300: '#cbd5e0',
      400: '#323232',
      500: '#718096',
      600: '#4a5568',
      700: '#2d3748',
      800: '#1a202c',
      900: '#171923',
    },
  },
  fonts: {
    heading: 'Playfair Display, serif',
    body: 'Lato, sans-serif',
  },
  styles: {
    global: {
      body: {
        bg: 'beige.100',
        color: 'gray.700',
      },
    },
  },
});

export default theme;