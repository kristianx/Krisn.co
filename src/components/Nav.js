import Social from "./Social";
import styled from "styled-components";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Nav(props) {
  const NavigationStyled = styled.nav`
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    top: 0;
    right: 30px;
    left: 30px;
    &.pageload {
    }
    &.active {
      .Logo-text {
        color: #fff;
      }
    }
    h1.Logo-text {
      ${props.theme === "light" ? "color: #fff;" : "color: var(--primary);"}
    }
    a:hover h1.Logo-text {
      background: linear-gradient(-45deg, #e73c7e, #23a6d5, #23d5ab);
      background-clip: text;
      -webkit-background-clip: text;
      -moz-background-clip: text;
      -moz-text-fill-color: transparent;
      -webkit-text-fill-color: transparent;
    }

    a {
      z-index: 101;
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
      display: none;
      z-index: 101;
    }
    .nav-social .social {
      bottom: 20vh;
      left: 0;
      right: 0;
      position: absolute;
    }
    .nav-social a {
      margin: 0 20px;
    }
    .nav-social svg {
      fill: #fff;
    }
    @media screen and (min-width: 940px) {
      a {
        font-size: 18px;
        ${props.theme === "light" ? "color: #fff;" : "color: var(--primary);"}

        font-weight: 500;
        :hover {
          ${props.theme === "light"
            ? "color: #fff!important;"
            : "color: var(--primary)!important;"}
        }
      }

      ul:hover a {
        ${props.theme === "light"
          ? "color: var(--offWhite);"
          : "color: var(--clr-grey-light);"}
      }
    }

    @media screen and (max-width: 940px) {
      right: 0;
      left: 0;
      padding: 0 20px;
      .hamburger {
        display: inline-block !important;
      }
      li.nav-social {
        display: block;
      }
      h1.Logo-text {
        font-size: 30px;
      }
      ul {
        position: fixed;
        align-items: center;
        text-align: center;
        width: 100vw;
        height: 100vh;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 100;
        flex-direction: column;
        padding-top: 20vh;
        background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
        background-size: 400% 400%;
      }
      ul.active {
        animation: gradient 15s ease infinite, load 0.5s ease;
        opacity: 1;
        display: flex;
      }

      .not-active {
        display: none;
      }
      li {
        margin: 0;
        padding: 20px 0;
        display: block;
      }
      a {
        font-size: 25px;
        color: #fff;
      }
    }

    @keyframes gradient {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }
    @keyframes load {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  `;

  const Hamburger = styled.div`
    width: 30px;
    cursor: pointer;
    span {
      display: block;
      width: 100%;
      box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
      border-radius: 10px;
      height: 3px;
      ${props.theme === "light"
        ? "background: #fff;"
        : "background: var(--primary);"}
      transition: all 0.2s;
      position: relative;
    }

    &.active span:nth-child(1) {
      animation: ease 0.5s top forwards;
    }

    &.active span:nth-child(2) {
      animation: ease 0.5s scaled forwards;
    }

    &.active span:nth-child(3) {
      animation: ease 0.5s bottom forwards;
    }
    &.not-active span:nth-child(1) {
      animation: ease 0.5s top-2 forwards;
    }

    &.not-active span:nth-child(2) {
      animation: ease 0.5s scaled-2 forwards;
    }

    &.not-active span:nth-child(3) {
      animation: ease 0.5s bottom-2 forwards;
    }

    span + span {
      margin-top: 8px;
    }
    &.active span {
      background: #fff;
    }

    @keyframes top {
      0% {
        top: 0;
        transform: rotate(0);
      }
      50% {
        top: 11px;
        transform: rotate(0);
      }
      100% {
        top: 11px;
        transform: rotate(45deg);
      }
    }

    @keyframes top-2 {
      0% {
        top: 11px;
        transform: rotate(45deg);
      }
      50% {
        top: 11px;
        transform: rotate(0deg);
      }
      100% {
        top: 0;
        transform: rotate(0deg);
      }
    }

    @keyframes bottom {
      0% {
        bottom: 0;
        transform: rotate(0);
      }
      50% {
        bottom: 11px;
        transform: rotate(0);
      }
      100% {
        bottom: 11px;
        transform: rotate(135deg);
      }
    }

    @keyframes bottom-2 {
      0% {
        bottom: 11px;
        transform: rotate(135deg);
      }
      50% {
        bottom: 11px;
        transform: rotate(0);
      }
      100% {
        bottom: 0;
        transform: rotate(0);
      }
    }

    @keyframes scaled {
      50% {
        transform: scale(0);
      }
      100% {
        transform: scale(0);
      }
    }

    @keyframes scaled-2 {
      0% {
        transform: scale(0);
      }
      50% {
        transform: scale(0);
      }
      100% {
        transform: scale(1);
      }
    }
  `;

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
    <NavigationStyled
      className={`preload nav-section container ${
        isActive ? "active " : "not-active "
      }
      `}
    >
      <a href="/">
        <h1 className="Logo-text">Kristian Cupurdija</h1>
      </a>

      <ul className={isActive ? "active" : "not-active"}>
        <li>
          <Link onClick={() => setActive(false)} to="/">
            Projects
          </Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li className="nav-social">
          <Social />
        </li>
      </ul>

      <Hamburger
        className={`hamburger btn ${isActive ? " active " : " not-active "}`}
        onClick={handleToggle}
      >
        {/*
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
        */}
        <div>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </Hamburger>
    </NavigationStyled>
  );
}

export default Nav;
