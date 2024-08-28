import React from "react";
import logo from "./assets/logo.png";

function Nav() {
  return (
    <nav className="nav_container">
      <a href="/">
        <img src={logo} alt="" />
      </a>
      <ul className="nav_link">
        <li>
          {" "}
          <a href="/"> Home </a>
        </li>
        <li>
          {" "}
          <a href="/"> Politics </a>
        </li>
        <li>
          {" "}
          <a href="/"> Sports </a>
        </li>
        <li>
          {" "}
          <a href="/"> Technology </a>
        </li>
        <li>
          {" "}
          <a href="/"> Entertainment </a>
        </li>
      </ul>
      <a href="/search">
        <button>Search News</button>
      </a>
    </nav>
  );
}

export default Nav;
