import React from "react";
import { Link } from "react-router-dom";
import LoginButton from "./LoginButton";

const Navbar = () => {
  //change to .map for navlinks so that this information can be shared to hamburger

  return (
    <nav className="navbar">
      <h1>NAME</h1>
      <LoginButton/>
      <div className="navlinks">
        <Link className="link-styles" to="/">
          Home
        </Link>
        <Link className={"link-styles"} to="/Blog">
          Blog
        </Link>
        <Link className={"link-styles"} to="/Portfolio">
          Portfolio
        </Link>
        <Link className={"link-styles"} to="/Pricelist">
          Pricelist
        </Link>
        <Link className={"link-styles"} to="/Terms">
          Terms
        </Link>
        <Link className={"link-styles"} to="/Contact">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
