import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
    cssVariables: true,
    palette: {
      mode: 'dark',
      primary: {
        main: '#556cd6',
      },
      secondary: {
        main: '#19857b',
      }
    },
  });

export default theme;