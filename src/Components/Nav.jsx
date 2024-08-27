import React from "react";
import logo from "./assets/logo.png";

function Nav() {
  return (
    <nav className="nav_container">
      <img src={logo} alt="" />
      <ul className="nav_link">
        <li>Home</li>
        <li>Politics</li>
        <li>Sports</li>
        <li>Technology</li>
        <li>Entertainment</li>
      </ul>
      <button>Search News</button>
    </nav>
  );
}

export default Nav;
