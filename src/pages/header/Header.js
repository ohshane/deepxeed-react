import React from 'react';
import { useSelector } from 'react-redux';
import { Switch, SvgIcon } from '@material-ui/core';
import { Brightness2, Brightness5 } from '@material-ui/icons';
import './Header.css';

import logo from 'images/logo.svg';
import { store, darkmodeSlice } from 'components/redux';

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
        <div className="menu-wrapper">
          menu
        </div>
        <div className="nav-wrapper">
          <div className="darkmode-wrapper">
            <SvgIcon component={Brightness5} fontSize="small" />
            <Switch checked={isDarkmode} onChange={() => store.dispatch(darkmodeSlice.actions.toggle())} size="small" />
            <SvgIcon component={Brightness2} fontSize="small" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;