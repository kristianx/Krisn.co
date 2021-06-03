import Social from "./Social";
import styled from "styled-components";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
//import { disablePageScroll, enablePageScroll } from 'scroll-lock';

const NavigationStyled = styled.nav`
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .Logo-text {
    font-size: 25px;
    color: var(--primary);
  }
  a {
    font-size: 18px;
    color: var(--primary);
    font-weight: 500;
    :hover {
      color: var(--primary) !important;
    }
  }
  ul.active {
    position: fixed;
    display: flex;
    align-items: center;
    text-align: center;
    width: 100vw;
    height: calc(100vh - 100px);
    background-color: white;
    top: 100px;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 100;
    flex-direction: column;
    padding-top: 50px;
  }
  ul:hover a {
    color: var(--clr-grey-light);
  }
  ul.active li {
    margin: 0;
    padding: 20px 0;
    display: block;
  }
  ul.active a {
    font-size: 25px;
    color: var(--primary);
  }
  li {
    display: inline;
    margin-right: 2.5em;
    :nth-last-child(2) {
      margin-right: 0;
    }
  }
  li.nav-social {
    flex-grow: 1;
    display: none;
  }
  .hamburger {
    padding-top: 5px;
    fill: var(--primary);
    display: none;
  }
  .nav-social .social {
    bottom: 50px;
    left: 0;
    right: 0;
    position: absolute;
  }
  .nav-social a {
    margin: 0 20px;
  }
  @media screen and (max-width: 940px) {
    padding: 0 20px;
    .hamburger {
      display: inline-block !important;
    }
    ul {
      display: none;
    }
    li.nav-social {
      display: block;
    }
  }
  /* SAFARI BUG FIX */
  @media screen and (min-color-index: 0) and(-webkit-min-device-pixel-ratio:0) {
    .nav-social .social {
      bottom: 150px;
    }
  }
`;

function Nav() {
  const [isActive, setActive] = useState(false);
  if (isActive) {
    document.documentElement.style.overflow = "hidden";
  } else {
    document.documentElement.style.overflow = "scroll";
  }
  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <NavigationStyled className="nav-section container">
      <h1 className="Logo-text">Kristian Cupurdija</h1>

      <ul className={isActive ? "active" : null}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/blog">Blog</NavLink>
        </li>
        <li>
          <NavLink to="/casestudies">Case Studies</NavLink>
        </li>
        <li className="nav-social">
          <Social />
        </li>
      </ul>

      <div className="hamburger" onClick={handleToggle}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20px"
          height="20px"
          viewBox="0 0 124 124"
        >
          <path d="M112,6H12C5.4,6,0,11.4,0,18s5.4,12,12,12h100c6.6,0,12-5.4,12-12S118.6,6,112,6z" />
          <path d="M112,50H12C5.4,50,0,55.4,0,62c0,6.6,5.4,12,12,12h100c6.6,0,12-5.4,12-12C124,55.4,118.6,50,112,50z" />
          <path d="M112,94H12c-6.6,0-12,5.4-12,12s5.4,12,12,12h100c6.6,0,12-5.4,12-12S118.6,94,112,94z" />
        </svg>
      </div>
    </NavigationStyled>
  );
}

export default Nav;
