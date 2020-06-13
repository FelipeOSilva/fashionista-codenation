import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="header__logo">
          <span>FASHIONISTA</span>
        </Link>
        <div className="header__actions">
          <span>PQ</span>
          <span>CP</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
