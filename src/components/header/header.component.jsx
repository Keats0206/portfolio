import React, { useState } from "react";
import { Link } from 'react-scroll';
import { ReactComponent as CloseMenu } from "./close.svg";
import { ReactComponent as MenuIcon } from "./menu.svg";
import "./header.css";

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  
  return (
    <div className="header">
      <div className="logo-nav">
        <ul className={click ? "nav-options active" : "nav-options"}>
          <li className="option" onClick={closeMobileMenu}>
            <Link activeClass="active" to="section1" spy={true} smooth={true} duration={800} onClick={closeMobileMenu}>
                About
            </Link>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <Link activeClass="active" to="section2" spy={true} smooth={true} duration={800} onClick={closeMobileMenu}>
                Development
            </Link>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <Link activeClass="active" to="section3" spy={true} smooth={true} duration={800} onClick={closeMobileMenu}>
                Contact
            </Link>
          </li>
          <li className=" option mobile-option" onClick={closeMobileMenu}>
            <button 
              onClick={() => {
                  window.location.href = `mailto:pete@pekeating.com`;
                }}>
                Say Hello
              </button>
          </li>
        </ul>
      </div>
      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <CloseMenu className="menu-icon" />
        ) : (
          <MenuIcon className="menu-icon" />
        )}
      </div>
    </div>
  );
};

export default Header;