import React from 'react';
import { ThemeProvider, createMuiTheme, CssBaseline } from '@material-ui/core';
import { useSelector } from 'react-redux';
import './App.css';

import Header from 'pages/header/Header';
import Body from 'pages/body/Body';
import Footer from 'pages/footer/Footer';

function App() {
  const isDarkmode = useSelector(state => state.darkmode.isDarkmode);

  const DARK = createMuiTheme({
    palette: {
      type: "dark",
      background: {
        default: "#212121"
      },
    }
  });

  const LIGHT = createMuiTheme({
    palette: {
      type: "light",
      background: {
        default: "#FFFFFF"
      },
    }
  });

  return (
    <div className="App">
      <ThemeProvider theme={isDarkmode ? DARK : LIGHT}>
        <CssBaseline />
        <Header />
        <Body />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;