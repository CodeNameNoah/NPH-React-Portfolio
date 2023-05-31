import React from "react";
import { Link } from "react-router-dom"

function NavBar() {
  return (
    <nav className="navbar">
      <ul className="flex-row">
        <li className="mx-2">
          <Link to="/about">About Me</Link>
        </li>
        <li className="mx-2">
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li className="mx-2">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
