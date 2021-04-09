import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";

export const NavBar = () => {
  return (
    <ul className="navbar">
      <li className="navbar__item active">
        {/* Link is used by react-router-dom to link a path to the matching Route with the same url */}
        {/* to="x" is the url path in the address bar */}
        <NavLink  className="navbar__link" to="/">
          NSS Kennels
        </NavLink>
      </li>
      <li className="navbar__item">
        <NavLink
          activeClassName="navlink"
          className="navbar__link"
          to="/locations"
        >
          Locations
        </NavLink>
      </li>
      <li className="navbar__item">
        <NavLink
          activeClassName="navlink"
          className="navbar__link"
          to="/animals"
        >
          Animals
        </NavLink>
      </li>
      <li className="navbar__item">
        <NavLink
          activeClassName="navlink"
          className="navbar__link"
          to="/customers"
        >
          Customers
        </NavLink>
      </li>
      <li className="navbar__item">
        <NavLink
          activeClassName="navlink"
          className="navbar__link"
          to="/employees"
        >
          Employees
        </NavLink>
      </li>
      <li className="navbar__item">
        <NavLink 
        activeClassName="navlink" 
        className="navbar__link" 
        to="/tacos">
          Tacos
        </NavLink>
      </li>
    </ul>
  );
};
