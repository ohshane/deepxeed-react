import React from 'react';
import { useSelector } from 'react-redux';
import './Header.css';

import logo from 'images/logo.svg';
import { Button, SvgIcon } from '@material-ui/core';
import { Menu } from '@material-ui/icons';

import DarkmodeSwitch from 'components/DarkmodeSwitch/DarkmodeSwitch';
import MenuDrawer from 'components/MenuDrawer/MenuDrawer';

function Header() {
  const isDarkmode = useSelector(state => state.darkmode.isDarkmode);

  return (
    <div className="Header">
      <div className="header-area">
        <div className="logo-wrapper">
          <a href="/">
            <img src={logo} alt="logo" style={(isDarkmode ? {filter: "invert(1)"} : {filter: "invert(0)"})} />
          </a>
        </div>
        <div className="nav-wrapper">
          <DarkmodeSwitch className="DarkmodeSwitch" />
          <div className="menu-wrapper">
            <MenuDrawer className="MenuDrawer" />
          </div>
        </div>
      </div>
    </div>
  );
}


export default Header;