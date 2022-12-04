import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <span className="brand">
        <Link to={"/"}>Watch</Link>
      </span>
      <div className="list">
        <Link to={"/watched"}>Watched</Link>
        <Link to={"/add"}><i className="fas fa-plus plus-icon"></i></Link>
      </div>
    </header>
  );
};

export default Header;
