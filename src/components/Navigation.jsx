import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <header>
      <div className="header-container">
        <nav>
          <NavLink to="/" exact>
            Home
          </NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navigation;
