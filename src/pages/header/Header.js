import React from 'react';
import './Header.css';
import logo from 'images/logo.jpg';

function Header() {
  return (
    <div className="Header">
      <div className="header-area">
        <div className="logo-wrapper">
          <a href="/"><img src={logo} alt="logo"/></a>
        </div>
        <div className="nav-wrapper">
          <div className="darkmode-wrapper">
            darkmode
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