import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header className="header h-16 px-24 shadow-xl flex items-center justify-between">
    <NavLink to="/" className="text-2xl font-bold">
      React Front-end
    </NavLink>
    <nav className="nav">
      <div className="navLink hover:text-black">
        <NavLink to="/">Greatings</NavLink>
      </div>
    </nav>
  </header>
);

export default Header;
