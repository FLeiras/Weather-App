import React from "react";
import SearchBar from "./SearchBar.js";
import "./Nav.css";

import { Link } from "react-router-dom";

function Nav({ onSearch }) {
  return (
    <div className="Nav">
      <Link to="/">
        <div className="titulo">
          <h3>Home</h3>
        </div>
      </Link>
      <Link to="/about">
        <div className="wa">
          <h3>Sobre Mi</h3>
        </div>
      </Link>
      <SearchBar onSearch={onSearch} />
    </div>
  );
}

export default Nav;
