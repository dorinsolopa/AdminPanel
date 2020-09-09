import React from "react";
import "../chart/Card.css";
function Navbar(props) {
  return (
    <div className="">
      <nav className="navbar navbar-dark bodyBgColor">
        <a className="navbar-brand">TYPOGRAPHY</a>
        <form className="form-inline">
          <i className="fas fa-search fa-2x text-white pr-3"></i>
          <i className="fas fa-volume-up fa-2x text-white pr-3"></i>
          <img className="logo-img" src={require("../../assests/anime3.png")} />
        </form>
      </nav>
    </div>
  );
}
export default Navbar;
