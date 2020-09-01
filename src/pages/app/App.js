import React, { useState } from 'react';
import './App.css';

import { ThemeProvider, createMuiTheme, CssBaseline, Switch, FormControlLabel } from '@material-ui/core';

import Header from 'pages/header/Header';
import Footer from 'pages/footer/Footer';

function App() {
  const [darkmode, setDarkmode] = useState(false);

  function _toggleDarkmode() {
    setDarkmode(darkmode ? false : true);
  }

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
      <ThemeProvider theme={darkmode ? dark : light}>
        <CssBaseline />
        <FormControlLabel 
          control={<Switch checked={darkmode} onChange={_toggleDarkmode}/>}
          label={`Darkmode ${darkmode ? "on" : "off"}`}
        />
        <Header />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
