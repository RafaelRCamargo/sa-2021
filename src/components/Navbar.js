import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons'

import { Link } from "react-router-dom";
import "./Navbar.css";

let Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>Semana da Arte</Link>

          <div className="menu-icon" onClick={handleClick}>
            <FontAwesomeIcon icon={click ? faTimes : faBars} />
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>

            <li className="nav-item">
              <Link to="/pop-art" className="nav-links" onClick={closeMobileMenu}> Pop Art </Link>
            </li>

            <li className="nav-item">
              <Link to="/urban-art" className="nav-links" onClick={closeMobileMenu}> Arte Urbana </Link>
            </li>

            <li className="nav-item">
              <Link to="/galery" className="nav-links" onClick={closeMobileMenu}> Galeria </Link>
            </li>

            <li>
              <Link to="/sign-up" className="nav-links-mobile" onClick={closeMobileMenu}> Arte Urbana </Link>
            </li>

          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
