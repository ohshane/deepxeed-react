import React from 'react';
import './Header.css';
import logo from 'images/logo.svg';

function Header(props) {
  function _darkmodeLogo(props) {
    const darkmode = props.darkmode;
    return (
      darkmode === false ? <img src={logo} alt="logo" /> : <img src={logo} alt="logo" style={{filter: "invert(1)"}} />
    );
  }

  function _darkmodeComponent(props) {
    const darkmodeComponent = props.darkmodeComponent;
    return (
      darkmodeComponent === undefined ? undefined : <div className="darkmode-wrapper">{darkmodeComponent}</div>
    );
  }

  const darkmodeComponent = props.darkmodeComponent;

  return (
    <div className="Header">
      <div className="header-area">
        <div className="logo-wrapper">
          <a href="/">
            {_darkmodeLogo(props)}
          </a>
        </div>
        <div className="nav-wrapper">
          {_darkmodeComponent(props)}
          <div className="menu-wrapper">
            menu
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;