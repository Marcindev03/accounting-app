import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <div className="nav-wrapper">
          <NavLink to="/" className="brand-logo">
            <i className="material-icons">attach_money</i> Accounting app
          </NavLink>
          <ul className="right">
            <li>
              <NavLink to="/" activeClassName="active">
                Home
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
