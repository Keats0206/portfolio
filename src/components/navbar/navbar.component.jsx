import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-scroll';

const NavbarStyled = styled.div`
  font-size: 24px;
  position: fixed;
  width: 100%;
  .header {
    font-family: Montserrat;
    background: transparent;
    padding: 40px;
    display: flex;
    justify-content: space-around;
    margin: 0;
    color: white;
    * {
      cursor: pointer;
    }
    .active {
      border-bottom: 1px solid white;
    }
  }
  .scrolling-buttons {
    display: flex;
    flex-direction: column;
  }
`;

export default function Navbar() {
  return (
    <NavbarStyled>
      <div className="header">
        <Link activeClass="active" to="section1" spy={true} smooth={true} duration={800}>
          About
        </Link>
        <Link activeClass="active" to="section2" spy={true} smooth={true} duration={800}>
          Projects
        </Link>
        <Link activeClass="active" to="section3" spy={true} smooth={true} duration={800}>
          Contact
        </Link>
      </div>
    </NavbarStyled>
  );
}
