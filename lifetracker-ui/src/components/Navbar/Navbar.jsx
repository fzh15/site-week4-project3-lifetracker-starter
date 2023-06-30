import React from "react";
import "./Navbar.css"
import { Link } from "react-router-dom";
import NavLinks from "../NavLinks/NavLinks";

function Navbar({ isLoggedIn }) {
  return (
    //nav tag with navbar 
    <nav className="navbar">
      <Link to="/">
        <img
          className="logo"
          src="https://lifetracker.up.railway.app/assets/codepath-f1b3e41a.svg"
        />
      </Link>
      <NavLinks isLoggedIn={isLoggedIn} />
    </nav>
  );
}

export default Navbar;
