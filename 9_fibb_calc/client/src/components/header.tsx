import React from "react";
import { NavLink as Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <h1>Fibonacci Calculator</h1>
      <div className="links">
        <Link to="/" activeClassName="active" exact>
          Home
        </Link>
        <Link to="/other" activeClassName="active" exact>
          Other page
        </Link>
      </div>
    </div>
  );
};

export default Header;
