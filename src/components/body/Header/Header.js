import React from "react";
import "./header.css";
import "./Style.css";
import "../../css/media.css";
import logo from "./logo.png";
import {useState} from "react";
import {Outlet, Link} from "react-router-dom";

const Header = () => {
  const [navbarActive, setNavbarActive] = useState(false);
  const [cartActive, setCartActive] = useState(false);
  const [searchActive, setSearchActive] = useState(false);

  const handleMenuClick = () => {
    setNavbarActive(!navbarActive);
    setSearchActive(false);
    setCartActive(false);
  };

  const handleCartClick = () => {
    setCartActive(!cartActive);
    setSearchActive(false);
    setNavbarActive(false);
  };

  const handleSearchClick = () => {
    setSearchActive(!searchActive);
    setNavbarActive(false);
    setCartActive(false);
  };

  const handleWindowScroll = () => {
    setNavbarActive(false);
    setSearchActive(false);
    setCartActive(false);
  };
  return (
    <>
      <header className="header">
        <Link className="logo">
          <img src={logo} alt="" />
        </Link>
        <nav className={`navbar ${navbarActive ? "active" : "false"}`}>
          <Link to="/"> Home </Link>

          <Link to="/Products"> Product</Link>

          <Link to="/blogs"> Blogs </Link>

          <Link to="/login">Login</Link>
          <Link to="/register"> Register </Link>
        </nav>
        <Outlet />
        <div className="icons">
          <div class="fas fa-search" onClick={handleSearchClick}></div>
          <div class="fas fa-shopping-cart" onClick={handleCartClick}></div>
          <div
            class="fas fa-bars menu-btn"
            id="menu-btn"
            onClick={handleMenuClick}
          ></div>
          <div className={`search-form ${searchActive ? "active" : ""}`}>
            <input type="search" id="search-box" placeholder="search here..." />
            <label htmlFor="search-box" className="fas fa-search"></label>
          </div>
        </div>

        {window.addEventListener("scroll", handleWindowScroll)}
      </header>
    </>
  );
};

export default Header;
