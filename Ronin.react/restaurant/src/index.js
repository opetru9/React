import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import Merinda from './fonts/Merienda/Merienda-VariableFont_wght.woff2'
// import Raleway from './fonts/Raleway/Raleway-Light.woff2'


const theme = createTheme({
  palette: {
    primary: {
      main: "#999",
    },
    mainDarkColor: "rgb(2, 16, 30)",
    mainLightColor: "#999",
    hoverColor: "#eee",
    redColor: "rgb(159, 75, 75)",
  },
  typography: {
    fontFamily: ["Merienda", "Raleway", "-apple-system", "sans-serif"].join(
      ","
    ),
    h1: {
      fontFamily: "Raleway", 
    },
    h2: {
      fontFamily: "Raleway", 
    },
    h3: {
      fontFamily: "Raleway", 
    },
    h4: {
      fontFamily: "Raleway", 
    },
    h5: {
      fontFamily: "Raleway", 
    },
    h6: {
      fontFamily: "Raleway", 
    },
    body1: {
      fontFamily: "Raleway", 
    },
    // components: {
    //   MuiCssBaseline: {
    //     styleOverrides: `
    //       @font-face {
    //         font-family: 'Merinda';
    //         font-style: normal;
    //         font-display: swap;
    //         font-weight: 400;
    //         src: local('Merienda'), local('Merienda-VariableFont_wght'), url(${Merinda}) format('woff2');
    //       unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;;
    //       }`,
    //   },
    // },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
        <App/>
      </ThemeProvider>
  </React.StrictMode>
);


// @font-face {
//             font-family: 'Raleway';
//             font-style: normal;
//             font-display: swap;
//             font-weight: 400;
//             src:  url('./fonts/Raleway/Raleway-Light.woff') format('woff'),
//                   url('./fonts/Raleway/Raleway-Light.woff2') format('woff2');
//           }