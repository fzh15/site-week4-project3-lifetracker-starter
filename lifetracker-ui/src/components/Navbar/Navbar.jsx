import React from "react";
import "./Navbar.css"
import { Link } from "react-router-dom";
import NavLinks from "../NavLinks/NavLinks";

function Navbar({ isLoggedIn, setisLoggedIn }) {
  return (
    //nav tag with navbar 
    <nav className="navbar">
      <Link to="/">
        <img
          className="logo"
          src="https://ih1.redbubble.net/image.2632480863.2968/st,small,507x507-pad,600x600,f8f8f8.jpg"
         
        />
      </Link>
      <NavLinks isLoggedIn={isLoggedIn} setisLoggedIn={setisLoggedIn}/>
    </nav>
  );
}

export default Navbar;
// https://ih1.redbubble.net/image.2632480863.2968/st,small,507x507-pad,600x600,f8f8f8.jpg

// "https://lifetracker.up.railway.app/assets/codepath-f1b3e41a.svg"