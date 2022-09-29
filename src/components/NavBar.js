import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return(
  <div className="navbar">
    <NavLink to="/" exact>Home</NavLink>
    <br />
    <NavLink to="/Actors" exact>Actors</NavLink>
    <br />
    <NavLink to="/Directors">Directors</NavLink>
    <br />
    <NavLink to="/Movies">Movies</NavLink>
  </div>
  );
}

export default NavBar;
