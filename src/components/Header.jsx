import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <span className="brand">
        <Link to={"/"}>İzlenecekler</Link>
      </span>
      <div className="list">
        <Link to={"/watched"}>İzlenenler</Link>
        <Link to={"/add"}><i className="fas fa-plus plus-icon"></i></Link>
      </div>
    </header>
  );
};

export default Header;
