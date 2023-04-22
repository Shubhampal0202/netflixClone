import React from "react";
import { Link } from "react-router-dom";
import logo from "../../logo.png";
import "./header.scss";
import { ImSearch } from "react-icons/im";
function Header() {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>

      <div className="nav">
        <Link to="/tvshows">TV Shows</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/recent">Recently Added</Link>
        <Link to="/mylist">My List</Link>
      </div>

      <ImSearch />
    </header>
  );
}

export default Header;
