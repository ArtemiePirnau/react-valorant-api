import React from "react";
import { Link } from "react-router-dom";

import logo from "../../../assets/logo.png";

import "../../../assets/main.scss";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <Link to="/" className="logo">
            <img className="logo__img" src={logo} alt="" />
          </Link>
          <nav className="menu">
            <ul className="menu__list">
              <Link className="menu__list-item menu__list-link" to="/agents">
                Characters
              </Link>

              <Link className="menu__list-item menu__list-link" to="/weapons">
                Weapons
              </Link>
              <Link className="menu__list-item menu__list-link" to="/maps">
                Maps
              </Link>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
