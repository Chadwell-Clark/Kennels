import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export const NavBar = () => {
  return (
    <ul className="navbar">
      <li className="navbar__item active">
        {/* Link is used by react-router-dom to link a path to the matching Route with the same url */}
        {/* to="x" is the url path in the address bar */}
        <Link className="navbar__link" to="/">
          NSS Kennels
        </Link>
      </li>
      <li className="navbar__item">
        <Link className="navbar__link" to="/locations">
          Locations
        </Link>
      </li>
      <li className="navbar__item">
        <Link className="navbar__link" to="/animals">
          Animals
        </Link>
      </li>
      <li className="navbar__item">
        <Link className="navbar__link" to="/customers">
          Customers
        </Link>
      </li>
      <li className="navbar__item">
        <Link className="navbar__link" to="/employees">
          Employees
        </Link>
      </li>
      <li className="navbar__item">
        <Link className="navbar__link" to="/tacos">
          Tacos
        </Link>
      </li>
    </ul>
  );
};
