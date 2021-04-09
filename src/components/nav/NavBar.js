import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import "./NavBar.css";

export const NavBar = ({ clearUser, isAuthenticated }) => {
  const history = useHistory();

  const handleLogout = () => {
    clearUser();
    history.push("/");
  };

  return (
    <ul className="navbar">
      <li className="navbar__item">
        {/* Link is used by react-router-dom to link a path to the matching Route with the same url */}
        {/* to="x" is the url path in the address bar */}
        <NavLink className="navbar__link" to="/">
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

      {isAuthenticated ? (
        <li className="navbar__item">
          <NavLink
            activeClassName="navlink"
            className="navbar__link"
            to="/animals"
          >
            Animals
          </NavLink>
        </li>
      ) : null}
      {isAuthenticated ? (
        <li className="navbar__item">
          <NavLink
            activeClassName="navlink"
            className="navbar__link"
            to="/customers"
          >
            Customers
          </NavLink>
        </li>
      ) : null}
      {isAuthenticated ? (
        <li className="navbar__item">
          <NavLink
            activeClassName="navlink"
            className="navbar__link"
            to="/employees"
          >
            Employees
          </NavLink>
        </li>
      ) : null}
      <li className="navbar__item">
        <NavLink activeClassName="navlink" className="navbar__link" to="/tacos">
          Tacos
        </NavLink>
      </li>
      {isAuthenticated ? (
        <li className="navbar__item">
          <span className="navbar__link" onClick={handleLogout}>
            {" "}
            Logout{" "}
          </span>
        </li>
      ) : (
        <li className="navbar__item">
          <NavLink className="navbar__link" to="/login">
            Login
          </NavLink>
        </li>
      )}
    </ul>
  );
};
