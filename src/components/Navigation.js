import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <NavLink to="/">
        <h1>ViFlix</h1>
      </NavLink>
      <ul className="nav">
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li>Acceuil</li>
        </NavLink>
        <NavLink
          to="/favorites"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>My List</li>
        </NavLink>
      </ul>

      <ul className="icons-nav hover">
        <li>
          <i className="fa-brands fa-facebook"></i>
        </li>
        <li>
          <i className="fa-brands fa-twitter"></i>
        </li>
        <li>
          <i className="fa-brands fa-instagram"></i>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
