import React from 'react';
import './Header.css';
import logo from 'images/logo.svg';

import { Switch } from '@material-ui/core';

function Header() {
  return (
    <div className="Header">
      <div className="header-area">
        <div className="logo-wrapper">
          <a href="/"><img src={logo} alt="logo"/></a>
        </div>
        <div className="nav-wrapper">
          <div className="darkmode-wrapper">
            <Switch />
          </div>
          <div className="menu-wrapper">
            menu
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;