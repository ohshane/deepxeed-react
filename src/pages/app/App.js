import React, { useState } from 'react';
import './App.css';

import { ThemeProvider, createMuiTheme, CssBaseline, Switch, SvgIcon } from '@material-ui/core';

import Header from 'pages/header/Header';
import Footer from 'pages/footer/Footer';
import { Brightness2, Brightness5 } from '@material-ui/icons';

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
        <Header darkmodeComponent={
          <div style={{
            display: 'flex',
            width: '90px',
            height: '30px',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <SvgIcon component={Brightness5} fontSize="small" />
            <Switch checked={darkmode} onChange={_toggleDarkmode} size="small" />
            <SvgIcon component={Brightness2} fontSize="small" />
          </div>
        } darkmode={darkmode} />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;