import React, { useState } from "react";
import { Button } from "./Button";
import tw from "twin.macro";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./Navbar.css";
import Dropdown from "./Dropdown";
import logo from "../../logo/logo.png";

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };
  const NavLink = tw.a`
  text-lg my-1 lg:text-sm lg:mx-3 lg:my-0
  font-semibold tracking-wide transition duration-300
  pb-1 border-b-2 border-transparent hover:border-primary-500 hocus:text-primary-500
`;
  const LogoLink = styled(NavLink)`
    ${tw`flex items-center text-white font-black border-b-0 text-2xl!`};

    img {
      ${tw`w-24 mr-3`}
    }
  `;
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <h1>Connecting Cloud</h1>
            <img
              style={{ filter: "drop-shadow(0 0 0.4rem white)" }}
              src={logo}
              alt="Connecting Cloud Logo"
            />
          {/* <LogoLink href="/">
            <img
              style={{ filter: "drop-shadow(0 0 0.4rem white)" }}
              src={logo}
              alt="Connecting Cloud Logo"
            />
            Connecting Cloud
          </LogoLink>
          <i class="fab fa-firstdraft" /> */}
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to="/services"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Services <i className="fas fa-caret-down" />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className="nav-item">
            <Link
              to="/products"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Products
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact-us"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              to="/sign-up"
              className="nav-links-mobile"
              onClick={closeMobileMenu}
            >
              Sign Up
            </Link>
          </li>
        </ul>
        <Button />
      </nav>
    </>
  );
}

export default Navbar;
