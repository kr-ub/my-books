import React from "react";
import { NavLink, Redirect } from "react-router-dom";

function Navigation() {
  return (
    <header>
      <div className="header-container">
        <nav>
          <NavLink to="/" exact>
            <i
              className="fas fa-book"
              onClick={() => <Redirect to="./"></Redirect>}
            ></i>
          </NavLink>
          <NavLink
            to={{
              pathname: `/about`,
            }}
          >
            <i className="fas fa-book-open"></i>
          </NavLink>
        </nav>
        <div className="face">
          <div className="eyes">
            <span className="eye"></span>
            <span className="eye"></span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navigation;
