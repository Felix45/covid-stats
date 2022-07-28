import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <header>
    <nav className="d-flex justify-content-between p-3">
      <ul>
        <li>
          <NavLink to="/">
            <span className="fa fa-chevron-left fa-lg" />
          </NavLink>
        </li>
      </ul>
      <div>
        <span>
          <strong>Continents</strong>
        </span>
      </div>
      <div>
        <span className="fa fa-microphone fa-lg mx-3" />
        <span className="fa fa-cog fa-lg" />
      </div>
    </nav>
  </header>
);

export default NavBar;
