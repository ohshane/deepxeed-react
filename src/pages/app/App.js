import React from 'react';
import { ThemeProvider, createMuiTheme, CssBaseline } from '@material-ui/core';
import { useSelector } from 'react-redux';
import './App.css';

import { store } from 'components/redux';
import Header from 'pages/header/Header';
import Footer from 'pages/footer/Footer';

function App() {
  const isDarkmode = useSelector(state => state.darkmode.isDarkmode);

  const dark = createMuiTheme({
    palette: {
      type: "dark",
      background: {
        default: "#212121"
      },
    }
  });

  const light = createMuiTheme({
    palette: {
      type: "light",
      background: {
        default: "#FFFFFF"
      },
    }
  });

  return (
    <div className="App">
      <ThemeProvider theme={isDarkmode ? dark : light}>
        <CssBaseline />
        <Header />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;